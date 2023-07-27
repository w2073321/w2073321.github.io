/**
 * sesdk-multilinktest-plugin.dev.js
 * An SDK for the SolarEngine intelligent marketing service platform
 * 多链接试验SDK插件接入文档: https://alidocs.dingtalk.com/i/nodes/QG53mjyd80RN35mAU5YMgjl9V6zbX04v
 * 版本号: 1.0.4
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.multilinktestPlugin = factory());
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

  /**
   * @file 多链接试验辅助函数
   */

  /**
   * 上报SDK多链接试验运行过程中的数据
   * config
   * {
   *   code 后端返回的 response code
   *   errorMessage 后端返回 error message
   *   retryCount 网络请求的总次数（含重试次数）
   *   t0  开发者调用API时间点
   *   t1  SDK发送请求时间点
   * }
   */
  function sendRuntimeReportData(JSSDK, sdkReportData, responseData) {
    var t0 = sdkReportData.t0,
        t1 = sdkReportData.t1;

    var _ref = responseData || {},
        code = _ref.code,
        msg = _ref.msg,
        retryCount = _ref.retryCount;

    var properties = {
      message: '多链接试验请求数据',
      state: 5,
      // 后端返回的 response code
      code: code,
      // 后端返回 error message
      error_message: msg,
      // 网络请求的总次数（含重试次数）
      retry_count: retryCount,
      // SDK请求在线参数配置网络总耗时
      api_request_duration: t1 - t0
    };
    JSSDK.trackLogEvent(properties);
  }

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
   * 分流事件是否发送校验
   */

  function isAlreadySend(JSSDK, config) {
    var reportData = JSSDK.getStateData('reportData'); // A/B 测试：同一 _appkey 、同一分流主体ID、同一试验ID、同一试验分组ID，只上报第一条分流事件，重复事件不生成，任意一个属性值为null或空时不去重
    // 在线参数：同一 _appkey 、同一分流主体ID、同一规则ID、同一规则分组ID，只上报第一条分流事件，重复事件不生成，任意一个属性值为null或空时不去重

    if (reportData._appkey && config.subjectName && config.subjectValue && config.entityId && config.groupId) {
      var key = reportData._appkey + "_" + config.subjectName + "_" + config.subjectValue + "_" + config.entityId + "_" + config.groupId;

      if (JSSDK.Storage.getItem(key)) {
        // 已经发送过分流事件
        return true;
      }

      JSSDK.Storage.setItem(key, 1);
    }

    return false;
  }

  /**
   * 页面Mask相关操作
   */
  var Mask = {
    addMask: function addMask(timeout) {
      var _document$getElements,
          _document$getElements2,
          _this = this;

      var t = 'body{opacity:0 !important;-khtml-opacity:0 !important;-moz-opacity:0;filter:alpha(opacity=0);}';
      var style = document.createElement('style');
      style.type = 'text/css';

      try {
        style.appendChild(document.createTextNode(t));
      } catch (s) {
        style.styleSheet.cssText = t;
      }

      this.styleElement = style;
      (_document$getElements = document.getElementsByTagName('head')) == null ? void 0 : (_document$getElements2 = _document$getElements[0]) == null ? void 0 : _document$getElements2.appendChild(style);
      this.removeMaskTimer = setTimeout(function () {
        _this.removeMask();
      }, timeout * 1000);
    },
    removeMask: function removeMask() {
      clearTimeout(this.removeMaskTimer);

      if (this.styleElement) {
        var _document$getElements3, _document$getElements4;

        (_document$getElements3 = document.getElementsByTagName('head')) == null ? void 0 : (_document$getElements4 = _document$getElements3[0]) == null ? void 0 : _document$getElements4.removeChild(this.styleElement);
        this.styleElement = null;
      }
    }
  };

  var cacheOnlineConfig = {
    // 开发者传递的自定义属性id
    idProperties: {},
    // 服务端配置
    serverConfig: [],
    // 开发者设置的事件自定义属性，SDK请求多链接试验时带上该属性，后端用于匹配参数
    eventProperties: {},
    // 开发者设置的用户自定义属性，SDK请求多链接试验时带上该属性，后端用于匹配参数
    userProperties: {}
  }; // 默认配置、服务端配置存储key

  var storageKey = {
    // ab试验上一次请求数据，请求配置时回传
    multilinkHistory: '_multilink_history'
  };
  function initParameters(JSSDK) {
    JSSDK.extend({
      multilinkTest: {
        runtime: true,
        init: function init(remoteConfig) {
          this.initRemoteConfig(remoteConfig);
          cacheOnlineConfig.idProperties = filterCustomIDProperties(JSSDK, remoteConfig); // 初始化多链接试验环境下数据上报

          this.initReportData(); // 请求服务端在线配置

          this.getOnlineConfig();
        },
        initRemoteConfig: function initRemoteConfig(remoteConfig) {
          cacheOnlineConfig.maskTimeoutCloseTime = JSSDK.settingData.maskTimeoutCloseTime;

          if (typeof (remoteConfig == null ? void 0 : remoteConfig.maskTimeoutCloseTime) === 'number' && remoteConfig.maskTimeoutCloseTime / 1000 > JSSDK.settingData.minMaskTimeoutCloseTime) {
            cacheOnlineConfig.maskTimeoutCloseTime = remoteConfig.maskTimeoutCloseTime / 1000;
          }

          if (remoteConfig == null ? void 0 : remoteConfig.isSetMask) {
            Mask.addMask(cacheOnlineConfig.maskTimeoutCloseTime);
          }
        },

        /**
         * 初始化上报数据
         */
        initReportData: function initReportData() {
          // 上报数据中新增开发者传递进来的_custom_id, _event_custom_id, _user_custom_id
          updateReportData(JSSDK, '_custom_id', cacheOnlineConfig.idProperties.customIDProperties);
          updateReportData(JSSDK, '_event_custom_id', cacheOnlineConfig.idProperties.customIDEventProperties);
          updateReportData(JSSDK, '_user_custom_id', cacheOnlineConfig.idProperties.customIDUserProperties);
        },

        /**
         * 获取服务端配置
         */
        getOnlineConfig: function getOnlineConfig(sdkReportData) {
          var _this = this;

          if (sdkReportData === void 0) {
            sdkReportData = {};
          }

          // 组合请求数据
          var cloneReportData = JSSDK.deepCopy(JSSDK.getStateData('reportData') || {});
          var properties = JSSDK.deepCopy(cloneReportData.properties);
          delete cloneReportData.properties;
          delete cloneReportData._package_type;
          delete properties._combination_id;
          delete properties._experiment_group_id_list;
          delete properties._group_id_list;

          var requestData = _extends({}, cloneReportData, properties, {
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
            experiment_history: JSSDK.Storage.getItem(storageKey.multilinkHistory, true, [])
          });

          sdkReportData.t0 = +new Date();
          return new Promise(function (resolve) {
            _this.requestRetry(resolve, requestData, sdkReportData);
          });
        },
        requestRetry: function requestRetry(resolve, requestData, sdkReportData, retryCount) {
          var _this2 = this;

          if (retryCount === void 0) {
            retryCount = JSSDK.settingData.multilinkRetryTimes;
          }

          console('开始发请求');

          JSSDK.HttpHelper.post("//" + JSSDK.settingData.ruleDomain + "/rule/config/multilink/get", requestData, {
            timeout: JSSDK.settingData.multilinkTimeout * 1000
          }).then(function (res) {
            console('请求回来了');
            sdkReportData.t1 = +new Date();

            if ((res == null ? void 0 : res.code) === 0) {
              _this2.handleServerConfig((res == null ? void 0 : res.data) || {});
            }

            Mask.removeMask();
            var responseData = {
              retryCount: 3 - retryCount,
              code: res == null ? void 0 : res.code,
              msg: res == null ? void 0 : res.msg
            };
            sendRuntimeReportData(JSSDK, sdkReportData, responseData);
          })["catch"](function (error) {
            console('请求失败', JSON.stringify(error));
            if (retryCount > 0) {
              retryCount--;

              _this2.requestRetry(resolve, requestData, sdkReportData, retryCount);
            } else {
              sdkReportData.t1 = +new Date();
              Mask.removeMask();
              JSSDK.customEvents.$emit('multilinkTest');
              var responseData = {
                retryCount: JSSDK.settingData.multilinkRetryTimes - retryCount,
                code: (error == null ? void 0 : error.code) || 'timeout',
                msg: (error == null ? void 0 : error.msg) || error
              };
              sendRuntimeReportData(JSSDK, sdkReportData, responseData);
            }
          });
        },

        /**
         * 处理服务端配置
         * @param {*} data
         */
        handleServerConfig: function handleServerConfig(data) {
          var _serverConfig$, _serverConfig$2, _serverConfig$3, _serverConfig$4, _serverConfig$5, _serverConfig$6, _serverConfig$7;

          console('请求结果返回成功');
          var serverConfig = data.params || [];
          var url = JSSDK.trimStr(((_serverConfig$ = serverConfig[0]) == null ? void 0 : _serverConfig$.url) || '');
          var failRes = !(serverConfig == null ? void 0 : serverConfig.length) || !url;
          var isTestPage = url === location.href;

          if (failRes || isTestPage) {
            JSSDK.customEvents.$emit('multilinkTest');
          }

          console('1' + failRes + isTestPage); // 没有返回对应的配置，则终止逻辑即可

          if (failRes) {
            return;
          }

          console('2' + failRes + isTestPage);
          var multilinkRes = {
            url: url,
            subjectId: (_serverConfig$2 = serverConfig[0]) == null ? void 0 : _serverConfig$2.subject_id,
            entityId: (_serverConfig$3 = serverConfig[0]) == null ? void 0 : _serverConfig$3.entity_id,
            groupId: (_serverConfig$4 = serverConfig[0]) == null ? void 0 : _serverConfig$4.group_id,
            status: (_serverConfig$5 = serverConfig[0]) == null ? void 0 : _serverConfig$5.status,
            subjectName: (_serverConfig$6 = serverConfig[0]) == null ? void 0 : _serverConfig$6.subject_name,
            subjectValue: (_serverConfig$7 = serverConfig[0]) == null ? void 0 : _serverConfig$7.subject_value
          }; // 上报分流事件

          var alreadySend = isAlreadySend(JSSDK, multilinkRes);

          if (!alreadySend) {
            this.trackTriageEvents(multilinkRes);
          }

          console('3' + failRes + isTestPage); // 缓存服务端配置上一次的ab实验配置

          JSSDK.Storage.setItem(storageKey.multilinkHistory, serverConfig.map(function (item) {
            return {
              entity_id: item.entity_id,
              group_id: item.group_id
            };
          }));
          console('4' + failRes + isTestPage); // 试验页面非当前页面时，需要跳转处理

          if (!isTestPage) {
            console('5' + failRes + isTestPage); // 这里需要等待分流事件发出，再进行页面跳转

            setTimeout(function () {
              console('6' + failRes + isTestPage);
              location.href = multilinkRes.url;
            }, alreadySend ? 0 : JSSDK.settingData.multilinkJumpWaitSendEvent * 1000);
          }
        },

        /**
         * 触发分流事件
         */
        trackTriageEvents: function trackTriageEvents(config) {
          var properties = {
            _experiment_id: config.groupId,
            _experiment_group_id: config.entityId,
            _experiment_status: config.status
          };
          JSSDK.trackEvent('_abtesting_shunt', properties, {}, {
            _event_type: 2
          });
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
       * 设置事件自定义属性
       * @param {*} properties
       * SDK请求在线参数时带上该属性，后端用于匹配参数
       */
      setMultilinkTestEventProperties: function setMultilinkTestEventProperties(properties) {
        if (JSSDK.getStateData('logEnabled')) {
          JSSDK.infoLog('setMultilinkTestEventProperties', properties);
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
      setMultilinkTestUserProperties: function setMultilinkTestUserProperties(properties) {
        if (JSSDK.getStateData('logEnabled')) {
          JSSDK.infoLog('setMultilinkTestUserProperties', properties);
        }

        if (!JSSDK.isObject(properties)) {
          return JSSDK.assert(false, 440120);
        }

        cacheOnlineConfig.userProperties = Object.assign(cacheOnlineConfig.userProperties, properties);
      }
    });
  };

  /**
   * 多链接试验插件
   */
  var index = {
    // 插件运行环境
    env: 'web',
    // 插件初始化
    init: function init(JSSDK) {
      if (!(JSSDK == null ? void 0 : JSSDK.NATIVE) || typeof (JSSDK == null ? void 0 : JSSDK.extend) !== 'function') {
        return console.error('The plugin cannot be used alone, it depends on the webSDK.');
      }

      initParameters(JSSDK);
      initExternalMethods(JSSDK);
    }
  };

  return index;

})));
