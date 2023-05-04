/**
 * sesdk-parameters-plugin.dev.js
 * An SDK for the SolarEngine intelligent marketing service platform
 * 参数下发SDK插件接入文档: https://alidocs.dingtalk.com/i/nodes/7Y36k14mK9AV3Y0B97w185NqapjblR2D
 * 版本号: 1.0.2
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.parametersPlugin = factory());
}(this, (function () { 'use strict';

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var onlineConfigHost = 'test1-solar.detailroi.com';
  var API = {
    // 请求在线配置接口
    onlineConfig: "//" + onlineConfigHost + "/rule/config/get"
  };

  /**
   * @file 在线参数辅助函数
   */

  /**
   * 更新上报数据
   * @param {*} key
   * @param {*} value
   */
  function updateReportData(JSSDK, key, value) {
    var _JSSDK$setStateData;

    JSSDK.setStateData((_JSSDK$setStateData = {}, _JSSDK$setStateData["reportData.properties." + key] = value, _JSSDK$setStateData));
  } // 自定义ID属性

  var customIDKeys = [// 自定义ID
  'customIDProperties', // 事件自定义ID
  'customIDEventProperties', // 用户自定义ID
  'customIDUserProperties'];
  /**
   * 过滤开发者传递的自定义属性id中以_开头的属性
   */

  function filterCustomIDProperties(JSSDK, remoteConfig) {
    var r = {};
    customIDKeys.forEach(function (key) {
      if (JSSDK.isObject(remoteConfig[key])) {
        r[key] = JSSDK.filterCustomProperties(remoteConfig[key]);
      }
    });
    return r;
  }
  /**
   * 获取配置中的组id列表
   * @param {*} config
   * @returns
   */

  function getGroupIdList(config, from) {
    if (from === void 0) {
      from = 1;
    }

    if (!Array.isArray(config)) {
      return [];
    }

    var groupIdArray = config.filter(function (item) {
      return item.from === from;
    }).map(function (item) {
      return item.entity_id;
    });
    return Array.from(new Set(groupIdArray));
  }
  /**
   * 合并服务端配置
   * @param {*} serverConfig 服务端配置
   * @param {*} storageServerConfig 本地存储服务端配置
   */

  function mergeConfig(serverConfig, storageServerConfig) {
    if (!(storageServerConfig == null ? void 0 : storageServerConfig.length)) {
      return serverConfig;
    }
    /**
     * 本地存储服务端配置存在&服务端配置不存在的配置 + 服务端配置
     * 最新的配置始终在队列的末尾
     */


    return storageServerConfig.filter(function (item) {
      return serverConfig.findIndex(function (sitem) {
        return sitem.name === item.name;
      }) < 0;
    }).concat(serverConfig);
  }
  /**
   * 截取最多1兆的最新配置
   * @param {*} config
   * @returns
   */

  function getLimitServerConfig(JSSDK, config) {
    if (JSSDK.isValueExceedLimit(JSSDK.valueToStr(config))) {
      config.shift();
      return getLimitServerConfig(JSSDK.config);
    }

    return config;
  }
  /**
   * 分10次获取尝试存储的配置删除条数
   * @param {*} length
   * @param {*} baseLength
   */


  function getTrySplitConfig(length, baseLength) {
    var diffLength = length - baseLength;
    var r = [];
    var balance = Math.ceil(diffLength / 10);

    if (diffLength > 0) {
      for (var i = diffLength; i > 0; i = i - balance) {
        r.unshift(i);
      }
    }

    r.unshift(0);
    return r;
  }
  /**
   * 存储在线配置
   */


  function storageOnlineConfig(JSSDK, key, limitServerConfig, trySplitConfig, index) {
    JSSDK.Storage.setItem(key, limitServerConfig.slice(trySplitConfig[index]), function () {
      /**
       * 如果当前1M的数据也存不进去，说明当前本地存储空间已不足1M
       * 分10次尝试存储当前的配置, 每次删掉部分时间最早的配置，第10次存储的就是服务端下发的配置
       * 如果服务端下发的配置也存不进去，需要删除本地存储中的组合id, 下次请求时重新获取服务端下发的配置
       */
      if (index < trySplitConfig.length - 1) {
        storageOnlineConfig(JSSDK, key, limitServerConfig, trySplitConfig, index + 1);
      } else {
        JSSDK.Storage.deleteItem(storageKey.combinationId);
      }
    });
  }
  /**
   * 存储合并后的服务端配置
   * @param {*} key 存储的key值
   * @param {*} config 存储的原始配置
   * @param {*} baseLength 服务端下发的配置条数
   */


  function cacheServerConfig(JSSDK, key, config, baseLength) {
    if (!Array.isArray(config)) {
      return [];
    }

    var limitServerConfig = getLimitServerConfig(JSSDK, config.slice(0));
    var trySplitConfig = getTrySplitConfig(limitServerConfig.length, baseLength);
    storageOnlineConfig(JSSDK, key, limitServerConfig, trySplitConfig, 0);
  }
  /**
   * 根据配置key匹配value
   * @param {*} config
   */

  function filterConfigKey(config, key) {
    var item = config.filter(function (item) {
      return item.name === key;
    });

    if (item.length) {
      var _item$, _item$2, _item$3, _item$4, _item$5;

      return {
        value: (_item$ = item[0]) == null ? void 0 : _item$.value,
        // 泛指集合id，对于在线参数：规则id,全局唯一，对于abtest：实验id，全局唯一
        groupId: (_item$2 = item[0]) == null ? void 0 : _item$2.group_id,
        // 标记状态，对于在线参数：1 调试中（仅当设备命中调试设备名单时为1），其它保留值，对于abtest：1 调试中（仅当设备命中调试设备名单时为1），其它保留值
        status: (_item$3 = item[0]) == null ? void 0 : _item$3.status,
        // 标记来源，目前枚举值：1-在线参数，2-abtest
        from: (_item$4 = item[0]) == null ? void 0 : _item$4.from,
        // 泛指个体id，对于在线参数：所属组id,全局唯一，对于abtest：实验组id，全局唯一
        entityId: (_item$5 = item[0]) == null ? void 0 : _item$5.entity_id
      };
    }

    return null;
  }
  /**
   * 先使用上一次缓存的groupIdList
   * @param {*} key 本地存储key
   */

  function useCacheGroupIdList(JSSDK, key) {
    var cacheGroupIdList = JSSDK.Storage.getItem(key, true, []);
    updateReportData(JSSDK, key, (cacheGroupIdList == null ? void 0 : cacheGroupIdList.length) ? cacheGroupIdList : null);
  }
  /**
   * 处理服务端配置
   */

  function renderGroupIdList(JSSDK, config, key, from) {
    if (from === void 0) {
      from = 1;
    }

    var groupIdList = getGroupIdList(config, from);
    updateReportData(JSSDK, key, groupIdList);
    JSSDK.Storage.setItem(key, groupIdList);
  }
  /**
   * 生成上报数据
   */

  function createRuntimeReportData(sdkReportData, v, currentServerConfig) {
    sdkReportData.t3 = +new Date();
    sdkReportData.param_value = v && typeof v.value !== 'undefined' ? v.value : null;
    /**
     * 0 没有获取到配置
     * 1 来自于服务端线上配置
     * 2 来自于服务端历史配置
     * 3 来自本地默认配置
     */

    var paramFrom = 0;

    if (typeof (v == null ? void 0 : v.param_from) === 'number') {
      paramFrom = v.param_from;
    }

    if (paramFrom !== 3) {
      var _currentServerConfig$;

      var isExist = currentServerConfig == null ? void 0 : (_currentServerConfig$ = currentServerConfig.filter(function (item) {
        return item.name === sdkReportData.param_key;
      })) == null ? void 0 : _currentServerConfig$.length;

      if (isExist) {
        paramFrom = 1;
      }
    }

    sdkReportData.param_from = paramFrom;
    return sdkReportData;
  }
  /**
   * 上报SDK在线参数运行过程中的数据
   * config
   * {
   *   code 后端返回的 response code
   *   errorMessage 后端返回 error message
   *   retryCount 网络请求的总次数（含重试次数）
   *   t0  开发者调用API时间点
   *   t1  SDK发送请求时间点
   *   t2  后端返回SDK数据时间点
   *   t3  SDK给开发者回调时间点
   * }
   */

  function sendRuntimeReportData(JSSDK, sdkReportData, responseData) {
    var t0 = sdkReportData.t0,
        t1 = sdkReportData.t1,
        t2 = sdkReportData.t2,
        t3 = sdkReportData.t3,
        param_key = sdkReportData.param_key,
        param_value = sdkReportData.param_value,
        param_from = sdkReportData.param_from;
    var properties = {
      state: 1,
      // API调用总耗时，开发者调用API开始到SDK给开发者回调总耗时
      api_total_duration: t3 - t0,
      // 用来区分同步异步调用
      retry_count: -1,
      param_key: param_key,
      param_value: param_value,
      param_from: param_from
    };

    if (responseData) {
      var _ref = responseData || {},
          code = _ref.code,
          msg = _ref.msg,
          retryCount = _ref.retryCount; // 后端返回的 response code


      properties.code = code; // 后端返回 error message

      properties.error_message = msg; // 网络请求的总次数（含重试次数）

      properties.retry_count = retryCount; // 开发者调用API到SDK发送请求 耗时

      properties.builld_request_body_duration = t1 - t0; // SDK请求在线参数配置网络总耗时

      properties.api_request_duration = t2 - t1; // 后端返回SDK数据 到 SDK给开发者回调 耗时

      properties.data_process_duration = t3 - t2;
    }

    JSSDK.trackLogEvent(properties);
  }

  var cacheOnlineConfig = {
    intervalTimer: null,
    // SDK获取在线参数配置轮询间隔，默认30分钟
    interval: 30,
    // 服务端跟SDK配置合并策略 0-使用服务端配置跟用户本地已有缓存配置合并，默认。 1-使用服务端配置跟用户默认配置合并
    mergeType: 0,
    // 开发者传递的自定义属性id
    idProperties: {},
    // 开发者传递进来的默认配置
    defaultConfig: [],
    // 服务端配置
    serverConfig: [],
    // 当次请求的服务端配置
    currentServerConfig: [],
    // 服务端配置中的组合 ID
    combinationId: '',
    // 开发者设置的事件自定义属性，SDK请求在线参数时带上该属性，后端用于匹配参数
    eventProperties: {},
    // 开发者设置的用户自定义属性，SDK请求在线参数时带上该属性，后端用于匹配参数
    userProperties: {}
  }; // 默认配置、服务端配置存储key

  var storageKey$1 = {
    "default": '_default_config',
    server: '_serevr_config',
    combinationId: '_combination_id',
    // 在线参数id列表
    groupIdList: '_group_id_list',
    // ab试验参数id列表
    experimentGroupIdList: '_experiment_group_id_list',
    // ab试验上一次请求数据，请求配置时回传
    experimentHistory: '_experiment_history'
  };
  function initParameters(JSSDK) {
    JSSDK.extend({
      parameters: {
        init: function init(remoteConfig) {
          // 服务端跟SDK配置合并策略 0-使用服务端配置跟用户本地已有缓存配置合并，默认。1-使用服务端配置跟用户默认配置合并
          cacheOnlineConfig.mergeType = remoteConfig.mergeType || 0;
          cacheOnlineConfig.idProperties = filterCustomIDProperties(JSSDK, remoteConfig); // 读取缓存中的默认配置

          cacheOnlineConfig.defaultConfig = JSSDK.Storage.getItem(storageKey$1["default"], true, []); // 校验参数

          this.checkInitParam(remoteConfig); // 校验本地存储的combinationId是否有效

          this.checkCacheConfig(); // 初始化在线参数环境下数据上报

          this.initReportData(); // 请求服务端在线配置

          this.getOnlineConfig(true);
        },

        /**
         * 校验参数下发初始化参数
         */
        checkInitParam: function checkInitParam(remoteConfig) {
          // 设置SDK获取在线参数配置轮询间隔，默认30分钟
          var interval = remoteConfig.pollingInterval;

          if (typeof interval === 'number' && interval >= 30 && interval <= 24 * 60) {
            cacheOnlineConfig.interval = interval;
          } else if (typeof interval !== 'undefined') {
            // 异常提示信息
            JSSDK.assert(false, 440104);
          }
        },

        /**
         * 初始化上报数据
         */
        initReportData: function initReportData() {
          // 在线参数所有事件基础属性新增_combination_id/_group_id_list
          // 配置中的组合 ID，未获取到该值时为 null
          updateReportData(JSSDK, storageKey$1.combinationId, JSSDK.Storage.getItem(storageKey$1.combinationId) || null); // 先使用上一次缓存的groupIdList

          useCacheGroupIdList(JSSDK, storageKey$1.groupIdList); // 先使用上一次缓存的experimentGroupIdList

          useCacheGroupIdList(JSSDK, storageKey$1.experimentGroupIdList); // 上报数据中新增开发者传递进来的_custom_id, _event_custom_id, _user_custom_id

          updateReportData(JSSDK, '_custom_id', cacheOnlineConfig.idProperties.customIDProperties);
          updateReportData(JSSDK, '_event_custom_id', cacheOnlineConfig.idProperties.customIDEventProperties);
          updateReportData(JSSDK, '_user_custom_id', cacheOnlineConfig.idProperties.customIDUserProperties);
        },

        /**
         * 请求配置前校验本地存储中的配置信息
         */
        checkCacheConfig: function checkCacheConfig() {
          var _cacheOnlineConfig$se;

          //每次请求需要重新获取本地存储中的组合ID和对应的服务端配置
          cacheOnlineConfig.combinationId = JSSDK.Storage.getItem(storageKey$1.combinationId) || '';
          cacheOnlineConfig.serverConfig = JSSDK.Storage.getItem(storageKey$1.server, true, []); // 如果本地存储中存在组合id, 但是又不存在对应的配置信息，此时需要作废组合id

          if (cacheOnlineConfig.combinationId && !((_cacheOnlineConfig$se = cacheOnlineConfig.serverConfig) == null ? void 0 : _cacheOnlineConfig$se.length)) {
            cacheOnlineConfig.combinationId = '';
            JSSDK.Storage.deleteItem(storageKey$1.combinationId);
          }
        },

        /**
         * 获取服务端配置
         */
        getOnlineConfig: function getOnlineConfig(flag, sdkReportData) {
          var _this = this;

          if (sdkReportData === void 0) {
            sdkReportData = {};
          }

          this.checkCacheConfig(); // 组合请求数据

          var cloneReportData = JSSDK.deepCopy(JSSDK.getStateData('reportData') || {});
          var properties = JSSDK.deepCopy(cloneReportData.properties);
          delete cloneReportData.properties;

          var requestData = _extends({}, cloneReportData, properties, {
            // 本地存储中上次请求的组合id
            _combination_id: flag && cacheOnlineConfig.mergeType === 1 ? '' : cacheOnlineConfig.combinationId,
            //事件属性
            event_properties: _extends({}, cacheOnlineConfig.eventProperties),
            // 用户属性
            user_properties: _extends({}, cacheOnlineConfig.userProperties),
            // 自定义 ID
            _custom_id: cacheOnlineConfig.idProperties.customIDProperties,
            // 事件自定义 ID
            _event_custom_id: cacheOnlineConfig.idProperties.customIDEventProperties,
            // 用户自定义 ID
            _user_custom_id: cacheOnlineConfig.idProperties.customIDUserProperties,
            // 上次请求的ab试验数据
            experiment_history: JSSDK.Storage.getItem(storageKey$1.experimentHistory, true, [])
          });

          sdkReportData.t1 = +new Date();
          return new Promise(function (resolve) {
            _this.requestRetry(resolve, requestData, flag, sdkReportData);
          });
        },
        requestRetry: function requestRetry(resolve, requestData, flag, sdkReportData, retryCount) {
          var _this2 = this;

          if (retryCount === void 0) {
            retryCount = 3;
          }

          JSSDK.HttpHelper.post(API.onlineConfig, requestData).then(function (res) {
            sdkReportData.t2 = +new Date();

            if ((res == null ? void 0 : res.code) === 0) {
              _this2.handleServerConfig((res == null ? void 0 : res.data) || {}, flag);
            }

            resolve({
              retryCount: 3 - retryCount,
              code: res == null ? void 0 : res.code,
              msg: res == null ? void 0 : res.msg
            }); // 每次请求之后重新设置定时器轮询获取服务端配置

            _this2.setTimer();
          })["catch"](function (error) {
            if (retryCount > 0) {
              retryCount--;

              _this2.requestRetry(resolve, requestData, flag, sdkReportData, retryCount);
            } else {
              _this2.setTimer();

              resolve({
                retryCount: 3 - retryCount,
                code: (error == null ? void 0 : error.code) || 'timeout',
                msg: (error == null ? void 0 : error.msg) || error
              });
            }
          });
        },

        /**
         * 设置定时器轮询服务端配置
         */
        setTimer: function setTimer() {
          var _this3 = this;

          clearTimeout(cacheOnlineConfig.intervalTimer);
          cacheOnlineConfig.intervalTimer = setTimeout(function () {
            return _this3.getOnlineConfig();
          }, cacheOnlineConfig.interval * 60 * 1000);
        },

        /**
         * 处理服务端配置
         * @param {*} data
         */
        handleServerConfig: function handleServerConfig(data, flag) {
          var _serverConfig;

          var serverConfig = data.params || [];
          var combinationId = data == null ? void 0 : data._combination_id;
          var serverConfigLength = ((_serverConfig = serverConfig) == null ? void 0 : _serverConfig.length) || 0;
          cacheOnlineConfig.currentServerConfig = serverConfig;

          if (combinationId) {
            cacheOnlineConfig.combinationId = combinationId; // 存储本次请求对应的组合ID, 下一次请求需要带上

            JSSDK.Storage.setItem(storageKey$1.combinationId, combinationId); // 更新上报数据中的组合ID

            updateReportData(JSSDK, storageKey$1.combinationId, combinationId);
          } // 如果本次响应返回了组合ID，但是没有返回对应的配置，则终止逻辑即可


          if (!combinationId || !serverConfigLength) {
            return;
          } // 上报当次服务端下发的在线参数配置


          renderGroupIdList(JSSDK, serverConfig, storageKey$1.groupIdList); // 上报当次服务端下发的ab试验配置

          renderGroupIdList(JSSDK, serverConfig, storageKey$1.experimentGroupIdList, 2); // 缓存服务端配置上一次的ab实验配置

          JSSDK.Storage.setItem(storageKey$1.experimentHistory, serverConfig.filter(function (item) {
            return item.from === 2;
          }).map(function (item) {
            return {
              entity_id: item.entity_id,
              group_id: item.group_id
            };
          })); // 本地存储服务端配置与取回来的服务端配置做合并处理(以取回来的服务端配置优先)

          if (cacheOnlineConfig.mergeType === 0 || !flag) {
            serverConfig = mergeConfig(serverConfig, cacheOnlineConfig.serverConfig);
          }

          cacheOnlineConfig.serverConfig = serverConfig;
          cacheServerConfig(JSSDK, storageKey$1.server, serverConfig, serverConfigLength);
        },

        /**
         * 获取参数配置
         * 先匹配服务端配置，再匹配默认配置
         * @param {*} key
         */
        getConfigByKey: function getConfigByKey(key) {
          var v = filterConfigKey(cacheOnlineConfig.serverConfig, key);

          if (v === null) {
            v = filterConfigKey(cacheOnlineConfig.defaultConfig, key);

            if (JSSDK.isObject(v)) {
              // 来自本地默认配置
              v.param_from = 3;
            }
          } else {
            // 来自于服务端历史配置
            v.param_from = 2;
          }

          return v;
        },

        /**
         * 触发分流事件
         */
        trackTriageEvents: function trackTriageEvents(config) {
          if (config.from === 1) {
            // 在线参数
            var properties = {
              _enter_group_id: config.entityId,
              _enter_group_status: config.status
            };
            JSSDK.trackEvent('_diversion_service', properties, {}, {
              _event_type: 2
            });
          } else {
            // ab试验
            var _properties = {
              _experiment_id: config.groupId,
              _experiment_group_id: config.entityId,
              _experiment_status: config.status
            };
            JSSDK.trackEvent('_abtesting_shunt', _properties, {}, {
              _event_type: 2
            });
          }
        }
      }
    });
  }

  /**
   * @file 在线参数对外提供的方法
   */
  var initExternalMethods = function initExternalMethods(JSSDK) {
    JSSDK.NATIVE = Object.assign(JSSDK.NATIVE, {
      /**
       * 设置默认配置，用户获取参数配置时用来兜底
       * @param {*} config
       * [{"name":"k1","value":"v1","type":1}]
       */
      setRemoteDefaultConfig: function setRemoteDefaultConfig(config) {
        if (JSSDK.getStateData('logEnabled')) {
          JSSDK.infoLog('setRemoteDefaultConfig', config);
        }

        if (!Array.isArray(config)) {
          return JSSDK.assert(false, 440103);
        }

        cacheOnlineConfig.defaultConfig = config; // 缓存默认配置

        JSSDK.Storage.setItem(storageKey$1["default"], config);
      },

      /**
       * 设置事件自定义属性
       * @param {*} properties
       * SDK请求在线参数时带上该属性，后端用于匹配参数
       */
      setRemoteConfigEventProperties: function setRemoteConfigEventProperties(properties) {
        if (JSSDK.getStateData('logEnabled')) {
          JSSDK.infoLog('setRemoteConfigEventProperties', properties);
        }

        if (!JSSDK.isObject(properties)) {
          return JSSDK.assert(false, 440120);
        }

        cacheOnlineConfig.eventProperties = Object.assign(cacheOnlineConfig.eventProperties, properties);
      },

      /**
       * 设置用户自定义属性
       * @param {*} properties
       * SDK请求在线参数时带上该属性，后端用于匹配参数
       */
      setRemoteConfigUserProperties: function setRemoteConfigUserProperties(properties) {
        if (JSSDK.getStateData('logEnabled')) {
          JSSDK.infoLog('setRemoteConfigUserProperties', properties);
        }

        if (!JSSDK.isObject(properties)) {
          return JSSDK.assert(false, 440120);
        }

        cacheOnlineConfig.userProperties = Object.assign(cacheOnlineConfig.userProperties, properties);
      },

      /**
       * 同步获取在线参数配置，立即返回结果
       * @param {*} paramKey
       * 在线参数key，跟用户在后台配置参数key对应
       */
      fastFetchRemoteConfig: function fastFetchRemoteConfig(paramKey) {
        if (JSSDK.getStateData('logEnabled')) {
          JSSDK.infoLog('fastFetchRemoteConfig', paramKey);
        }

        if (!paramKey || typeof paramKey !== 'string' || !JSSDK.trimStr(paramKey)) {
          return JSSDK.assert(false, 440105);
        }

        var sdkReportData = {
          t0: +new Date(),
          param_key: paramKey
        };
        var v = JSSDK.parameters.getConfigByKey(paramKey);
        var r = null;

        if (v && typeof v.value !== 'undefined') {
          v.groupId && JSSDK.parameters.trackTriageEvents(v);
          r = v.value;
        }

        sendRuntimeReportData(JSSDK, createRuntimeReportData(sdkReportData, v, cacheOnlineConfig.currentServerConfig));
        return r;
      },

      /**
       * 异步从服务端获取参数，结果需要等待SDK回调
       * @param {*} paramKey
       * 在线参数key，跟用户在后台配置参数key对应
       */
      asyncFetchRemoteConfig: function asyncFetchRemoteConfig(paramKey) {
        if (JSSDK.getStateData('logEnabled')) {
          JSSDK.infoLog('asyncFetchRemoteConfig', paramKey);
        }

        if (!paramKey || typeof paramKey !== 'string' || !JSSDK.trimStr(paramKey)) {
          return JSSDK.assert(false, 440105);
        }

        var sdkReportData = {
          t0: +new Date(),
          param_key: paramKey
        };
        return new Promise(function (resolve) {
          JSSDK.NATIVE.ready(function () {
            JSSDK.parameters.getOnlineConfig(false, sdkReportData).then(function (data) {
              var v = JSSDK.parameters.getConfigByKey(paramKey);
              var r = null;

              if (v && typeof v.value !== 'undefined') {
                v.groupId && JSSDK.parameters.trackTriageEvents(v);
                r = v.value;
              }

              resolve(r);
              sendRuntimeReportData(JSSDK, createRuntimeReportData(sdkReportData, v, cacheOnlineConfig.currentServerConfig), data);
            });
          });
        });
      }
    });
  };

  /**
   * 在线参数插件
   */
  var index = {
    // 插件初始化
    init: function init(JSSDK) {
      initParameters(JSSDK);
      initExternalMethods(JSSDK);
    }
  };

  return index;

})));
