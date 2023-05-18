/** * web-sesdk.dev.js * An SDK for the SolarEngine intelligent marketing service platform * web端JSSDK接入文档: https://alidocs.dingtalk.com/i/nodes/lo1YvX0prG98kyNQqYo2VPw7xzbmLdEZ * 版本号: 1.0.2 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.SESDK = factory());
}(this, (function () { 'use strict';

  /** * rootSDK.dev.js * An SDK for the SolarEngine intelligent marketing service platform * web端JSSDK接入文档: https://alidocs.dingtalk.com/i/nodes/lo1YvX0prG98kyNQqYo2VPw7xzbmLdEZ * 版本号: 1.0.2 */
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

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

  function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
  }

  /**
   * storage 本地存储相关的处理
   */
  function jssdkInitStorage() {
    // 事件队列处理
    // 客户端被强制关闭时，submitting 未成功的，重启应用时需要把状态重置为toSubmit，防止阻塞上报
    var storageEventQueue = JSSDK.Storage.getItem(JSSDK.STORAGE_EVENT_QUEUE, true, []);
    storageEventQueue.forEach(function (event) {
      event.status = 'toSubmit';
    });
    JSSDK.Storage.setItem(JSSDK.STORAGE_EVENT_QUEUE, storageEventQueue);
    JSSDK.Storage.deleteItem(JSSDK.STORAGE_SUBMITTING_EVENT_ID);

    if (!JSSDK.getStateData('debugModel')) {
      var _is_first_day = this.Storage.getItem(JSSDK.STORAGE_IS_FIRST_DAY);

      if (_is_first_day === null) {
        // 写入 _is_first_day 标识
        this.Storage.setItem(JSSDK.STORAGE_IS_FIRST_DAY, JSSDK.seDate.getCurDate());
      }
    }
  }
  /**
   * web/小程序SDK通用初始化方法
   * @param {*} config
   */


  function jssdkInit(config) {
    /**
     * 启动ID，即从一次启动开始到启动结束(即退出)的标识
     * Web: 打开网站时生成，当前网站关闭后结束
     * 小程序: 冷启动（首次启动/销毁重启）时生成，进程销毁时结束
     */
    config.reportData._session_id = JSSDK.generateUUID();
    /**
     * 用户设备ID
     */

    var storageDistinctId = this.Storage.getItem('distinctId');
    var staPublicKey = this.getSTAPublicKey('9527');

    if (storageDistinctId) {
      config.reportData._distinct_id = this.STB.decrypt(storageDistinctId, staPublicKey);
    } else {
      config.reportData._distinct_id = this.generateUUID();
      this.Storage.setItem('distinctId', this.STB.encrypt(config.reportData._distinct_id, staPublicKey));
    }
    /**
     * 系统访客 ID
     * 未自定义 _visitor_id 值时先从本地存储中获取，最后以 _distinct_id 填充
     * 开发者调用 setVisitorId 方法设置访客ID
     * 开发者调用 getVisitorId 方法获取当前访客 ID
     */


    config.reportData._visitor_id = this.Storage.getItem('_visitor_id') || config.reportData._distinct_id; // _account_id默认使用本地存储

    config.reportData._account_id = this.Storage.getItem('_account_id') || '';
    var reportData = this.getStateData('reportData'); // 合并properties层级的所有数据

    var mergeProperties = {
      properties: _extends({}, reportData.properties, config.reportData.properties)
    };
    this.setStateData({
      'externalReportData.superProperties': JSSDK.Storage.getItem('superProperties', true),
      reportData: _extends({}, reportData, config.reportData, mergeProperties),
      customURL: config.customURL
    });
    jssdkInitStorage.bind(JSSDK)();
  }

  var JSSDK = {
    extend: function extend() {
      var tempOptions = arguments[0] || {};
      var tempTarget = this;

      for (var name in tempOptions) {
        if (tempOptions.hasOwnProperty(name)) {
          tempTarget[name] = tempOptions[name];
        }
      }

      return tempTarget;
    }
  };
  JSSDK.extend({
    init: jssdkInit
  });

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var dayjs_min = createCommonjsModule(function (module, exports) {
  !function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));
  });

  var dateFormat = 'YYYYMMDD';
  var dateTimeFormat = 'YYYY-MM-DD HH:mm:ss'; // 获取当前日期：YYYYMMDD

  var getCurDate = function getCurDate() {
    return dayjs_min().format(dateFormat);
  }; // 获取当前时间：YYYY-MM-DD HH:mm:ss


  var getCurTime = function getCurTime() {
    return dayjs_min().format(dateTimeFormat);
  };
  /**
   * 获取两个时间点的时间差
   * @param timeStart
   * @param timeEnd
   * @return 毫秒
   */


  var getTimeGap = function getTimeGap(timeStart, timeEnd) {
    return dayjs_min(dayjs_min(timeEnd)).diff(dayjs_min(timeStart), 'millisecond');
  };

  var seDate = {
    dayjs: dayjs_min,
    dateFormat: dateFormat,
    dateTimeFormat: dateTimeFormat,
    getCurDate: getCurDate,
    getCurTime: getCurTime,
    getTimeGap: getTimeGap
  };
  JSSDK.extend({
    seDate: seDate
  });

  // storage中的所有key带有特殊前缀。所以key最好以下划线开头。

  var STORAGE_KEY_PREFIX = 'sesdk_config'; // 所有事件带有的前缀

  var STORAGE_EVENT_PREFIX = '_event_'; // _is_first_day 对应的key

  var STORAGE_IS_FIRST_DAY = '_is_first_day'; // 记录小程序onLaunch的时间

  var STORAGE_MP_ON_LAUNCH_TIME = '_mp_on_launch_time'; // 事件队列中每个事件对应的index。
  // 唯一值；每天更新；

  var STORAGE_LOG_COUNT = '_log_count'; // 事件队列key

  var STORAGE_EVENT_QUEUE = '_event_queue'; // 事件队列key

  var STORAGE_LOG_EVENT_QUEUE = '_log_event_queue'; // 正在上报的事件的id

  var STORAGE_SUBMITTING_EVENT_ID = '_submitting_event_id'; // 事件队列占用的本地存储空间不超过1024k

  var STORAGE_EVENT_QUEUE_MAX_SPACE = 1024; // 事件上报失败后，最多再尝试上报3次。防止死循环，占用过多网络资源

  var POST_FAIL_RETRY_TIMES = 3; //#endregion

  var MAX_POST_NUM = 100;
  var EVENT_NAME_PREFIX = ['_web', '_mp'];
  JSSDK.extend({
    STORAGE_IS_FIRST_DAY: STORAGE_IS_FIRST_DAY,
    STORAGE_MP_ON_LAUNCH_TIME: STORAGE_MP_ON_LAUNCH_TIME,
    STORAGE_EVENT_QUEUE: STORAGE_EVENT_QUEUE,
    STORAGE_SUBMITTING_EVENT_ID: STORAGE_SUBMITTING_EVENT_ID
  });

  var appImpPropMap = {
    adNetworkPlatform: {
      keyName: '_ad_platform',
      type: 'string',
      isRequired: true
    },
    adType: {
      keyName: '_ad_type',
      type: 'int',
      isRequired: true
    },
    adNetworkAppID: {
      keyName: '_ad_appid',
      type: 'string',
      isRequired: false
    },
    adId: {
      keyName: '_ad_id',
      type: 'string',
      isRequired: true
    },
    mediationPlatform: {
      keyName: '_mediation_platform',
      type: 'string',
      isRequired: true
    },
    ecpm: {
      keyName: '_ad_ecpm',
      type: 'number',
      isRequired: true
    },
    currency: {
      keyName: '_currency_type',
      type: 'string',
      isRequired: true
    },
    rendered: {
      keyName: '_is_rendered',
      type: 'boolean',
      isRequired: true
    }
  }; // 应用内购买事件

  var appPurPropMap = {
    orderId: {
      keyName: '_order_id',
      type: 'string',
      isRequired: true
    },
    payAmount: {
      keyName: '_pay_amount',
      type: 'number',
      isRequired: true
    },
    currencyType: {
      keyName: '_currency_type',
      type: 'string',
      isRequired: true
    },
    payType: {
      keyName: '_pay_type',
      type: 'string',
      isRequired: true
    },
    productID: {
      keyName: '_product_id',
      type: 'string',
      isRequired: true
    },
    productName: {
      keyName: '_product_name',
      type: 'string',
      isRequired: true
    },
    productCount: {
      keyName: '_product_num',
      type: 'number',
      isRequired: true
    },
    payStatus: {
      keyName: '_pay_status',
      type: 'number',
      isRequired: true
    },
    failReason: {
      keyName: '_fail_reason',
      type: 'string',
      isRequired: false
    }
  }; // 自归因安装

  var appAttrPropMap = {
    adNetwork: {
      keyName: '_adnetwork',
      type: 'string',
      isRequired: true
    },
    subChannel: {
      keyName: '_sub_channel',
      type: 'string',
      isRequired: false
    },
    adAccountID: {
      keyName: '_adaccount_id',
      type: 'string',
      isRequired: false
    },
    adAccountName: {
      keyName: '_adaccount_name',
      type: 'string',
      isRequired: false
    },
    adCampaignID: {
      keyName: '_adcampaign_id',
      type: 'string',
      isRequired: false
    },
    adCampaignName: {
      keyName: '_adcampaign_name',
      type: 'string',
      isRequired: false
    },
    adOfferID: {
      keyName: '_adoffer_id',
      type: 'string',
      isRequired: false
    },
    adOfferName: {
      keyName: '_adoffer_name',
      type: 'string',
      isRequired: false
    },
    adCreativeID: {
      keyName: '_adcreative_id',
      type: 'string',
      isRequired: false
    },
    adCreativeName: {
      keyName: '_adcreative_name',
      type: 'string',
      isRequired: false
    },
    attributionPlatform: {
      keyName: '_attribution_platform',
      type: 'string',
      isRequired: true
    }
  };
  var installEvent = ['_webInstall', '_mpInstall'];
  /*
   * 参数名转换
   * keyName: 最终转换成的 receive api 需要的 key 名称
   * type: 参数类型。 注意： double，判定为number即可； int，需要用单独的 isInt 方法校验；
   * isRequired: 是否必传
   * */

  var propMap = _extends({}, appImpPropMap, appPurPropMap, {
    status: {
      keyName: '_status',
      type: 'string',
      isRequired: false
    },
    regType: {
      keyName: '_reg_type',
      type: 'string',
      isRequired: true
    },
    registerStatus: {
      keyName: '_status',
      type: 'string',
      isRequired: true
    },
    loginType: {
      keyName: '_login_type',
      type: 'string',
      isRequired: true
    },
    loginStatus: {
      keyName: '_status',
      type: 'string',
      isRequired: true
    }
  }, appAttrPropMap);
  /**
   * 预定义事件，转换数据格式
   * @param propArr 每个事件，需要传值的key
   * @param data 原始数据
   */


  function getPredefineEventFormattedData(propArr, data) {
    var customProperties = Object.create(null);

    if (getType(data.customProperties) === 'object') {
      // 校验、过滤自定义参数
      customProperties = data.customProperties;
    }

    var properties = {}; // 校验事件的参数

    propArr.forEach(function (key) {
      properties[propMap[key].keyName] = data[key];
    });
    return {
      properties: properties,
      customProperties: customProperties
    };
  } // 记录时长事件

  var durationEvents = {};
  /**
   * 生成当前事件的 _log_count
   * 注意： 每调用一次该函数，就会在原来基础上+1；
   */

  function getEventLogCount() {
    var logCount = 0;
    var storageLogCountInfo = JSSDK.Storage.getItem(STORAGE_LOG_COUNT);
    var storageDate = storageLogCountInfo == null ? void 0 : storageLogCountInfo.split('_')[0];
    var curDate = seDate.getCurDate(); // 如果本地存储中没有_log_count信息，或者是新的一天，那么从默认的0开始重新计数。否则_log_count++

    if (storageLogCountInfo === null || +storageDate !== +curDate) {
      logCount = 0;
    } else {
      logCount = Number(storageLogCountInfo.split('_')[1]) + 1;
    }

    return logCount;
  } // 写入事件到缓存成功后，更新本地存储中的_log_count。

  function updateStorageLogCount(logCount) {
    var curDate = seDate.getCurDate();
    var formattedLogCount = curDate + "_" + logCount;
    JSSDK.Storage.setItem(STORAGE_LOG_COUNT, formattedLogCount);
  }
  /**
   * 变量转为字符串类型
   * @param value 任意类型
   * @return string类型
   */

  function valueToStr(value) {
    try {
      if (['number', 'boolean', 'undefined', 'null', 'symbol', 'bigInt', 'function', 'date', 'regExp'].includes(getType(value))) {
        value = String(value);
      } else if (['object', 'array'].includes(getType(value))) {
        value = JSON.stringify(value);
      } else {
        value = String(value);
      }
    } catch (error) {
      value = String(value);
    }

    return value;
  }
  /**
   * 判断变量转换成字符串后是否超过1MB
   * @param value 要存储的值
   * @param limit 存储上限，单位为byte，number类型；默认为1MB
   * @return 大于等于1MB时，返回true；否则返回false;
   */

  function isValueExceedLimit(value, limit) {
    var limitNum = 1024 * 1024;

    if (getType(limit) === 'number') {
      limitNum = limit;
    }

    var str = valueToStr(value);
    return str.length >= limitNum;
  }
  /**
   * 占用的存储空间大于等于1MB时，shift最旧的n条数据，直到处理后的eventQueue小于1MB
   * @param eventQueue
   */

  function popOldEvent(eventQueue, deleteEventList) {
    // 事件队列占用空间不超过800k
    if (isValueExceedLimit(eventQueue, 1024 * STORAGE_EVENT_QUEUE_MAX_SPACE)) {
      var _popItem$params, _popItem$params$;

      var popItem = eventQueue.pop();

      if (installEvent.includes(popItem.eventName) && ((_popItem$params = popItem.params) == null ? void 0 : (_popItem$params$ = _popItem$params[0]) == null ? void 0 : _popItem$params$._event_type) === 1) {
        // 如果是appInstall事件，则不能删除, 需要添加到当前触发事件的后面，然后优先发送
        eventQueue.splice(1, 0, popItem);
      } else {
        deleteEventList.push(popItem);
      }

      popOldEvent(eventQueue, deleteEventList);
    }

    return eventQueue;
  }
  /**
   * 更新上报数据中事件计数
   */

  function setEventLogCount(params) {
    var curEventLogCount = getEventLogCount();
    params[0].properties._log_count = curEventLogCount;
    return curEventLogCount;
  }
  /**
   * 写入事件标识
   * @param {*} eventName
   */

  function setEventFlag(eventName, isDebugFromWeb, _event_type) {
    // 对于appInstall事件的标识，需要先校验是否事件已经成功存储到本地存储，再存储事件标识
    if (!isDebugFromWeb && installEvent.includes(eventName) && _event_type === 1) {
      var currentEventQueue = JSSDK.Storage.getItem(STORAGE_EVENT_QUEUE, true, []); // 如果检查本地存储中没有appInstall事件数据，则不存储appInstall事件的标识

      if (!currentEventQueue.filter(function (eventItem) {
        var _eventItem$params, _eventItem$params$;

        return installEvent.includes(eventItem.eventName) && ((_eventItem$params = eventItem.params) == null ? void 0 : (_eventItem$params$ = _eventItem$params[0]) == null ? void 0 : _eventItem$params$._event_type) === 1;
      }).length) {
        return;
      }
    } // 写入事件标识。用以判断 _is_first_time。（用户属性事件trackUser 不需要写入）


    var formattedEventName = "" + STORAGE_EVENT_PREFIX + eventName;
    JSSDK.Storage.setItem(formattedEventName, eventName);
  }
  /**
   * 事件队列写入本地缓存
   * @eventName 上报用户信息，暂不传eventName
   */

  function writeEventQueueToLocalStorage(eventName, params, isUseLogCount) {
    var _params$;

    if (eventName === void 0) {
      eventName = '';
    }

    if (isUseLogCount === void 0) {
      isUseLogCount = true;
    }

    // 更新计数
    var curEventLogCount;

    if (isUseLogCount) {
      curEventLogCount = setEventLogCount(params);
    } // 生成当前事件的数据格式，然后push


    var eventItem = {
      eventName: eventName,
      params: params,
      // status： toSubmit 待上报；submitting 上报中；
      // 只上报toSubmit状态的；
      // 开始上报时，把状态置为submitting；防止多处同时读取事件队列时造成重复上报
      // 上报失败的话，状态置为toSubmit
      status: 'toSubmit'
    };
    var eventQueue = [];
    var storageEventQueueStr = JSSDK.Storage.getItem(STORAGE_EVENT_QUEUE);

    if (storageEventQueueStr !== null) {
      eventQueue = JSON.parse(storageEventQueueStr);
    } // 最新的事件在最前面


    eventQueue.unshift(eventItem); // 占用的存储空间大于等于1MB时，pop最旧的n条数据，直到处理后的eventQueue小于1MB

    var deleteEventList = [];
    popOldEvent(eventQueue, deleteEventList); // 删除的事件进行内部日志上报

    if (deleteEventList.length) {
      JSSDK.trackLogEvent({
        state: 2,
        message: '本地存储空间不足时删除的事件',
        event_name: deleteEventList.map(function (item) {
          return item.eventName;
        }).join(','),
        log_count: deleteEventList.map(function (item) {
          var _item$params, _item$params$, _item$params$$propert;

          return (_item$params = item.params) == null ? void 0 : (_item$params$ = _item$params[0]) == null ? void 0 : (_item$params$$propert = _item$params$.properties) == null ? void 0 : _item$params$$propert._log_count;
        }).join(',')
      });
    } // 更新缓存
    // 更新事件队列


    var stroageIsError = false;
    JSSDK.Storage.setItem(STORAGE_EVENT_QUEUE, eventQueue, function () {
      stroageIsError = true;
    }); // 当前事件的事件类型

    var _event_type = (_params$ = params[0]) == null ? void 0 : _params$._event_type;

    if (installEvent.includes(eventName) && _event_type === 1) {
      var _params$2;

      JSSDK.trackLogEvent({
        state: 5,
        is_success: !stroageIsError,
        message: eventName + '存储本地',
        event_name: eventName,
        log_count: (_params$2 = params[0]) == null ? void 0 : _params$2.properties._log_count
      });
    }

    eventName && setEventFlag(eventName, false, _event_type); // 更新_log_count

    if (isUseLogCount) {
      updateStorageLogCount(curEventLogCount);
    }

    return stroageIsError;
  }
  /**
   * 获取当前系统对应的事件名
   * @param commonEventName 原有的公共事件名。
   * @return 处理后的事件名。比如：如果当前系统为小程序，原有的公共事件名为 _appInstall，那么该方法返回 _mpInstall
   */

  function getCurEnvEventName(commonEventName) {
    var systemEnv = Number(JSSDK.getStateData('systemEnv'));
    var curEnvPrefix = EVENT_NAME_PREFIX[systemEnv]; // 只替换以_app开头的事件名；非_app开头的，不替换；

    return commonEventName.replace(/^_app/, curEnvPrefix);
  } //#region 格式校验相关

  /**
   * 上报事件前，进行校验。 默认允许上报，return true； 不通过校验时，return false；
   */

  function isCanPostEvent() {
    // 是否为微信小程序 && 没有openid，不允许上报
    if (isXcxEnv() && !JSSDK.getStateData('isHasOpenId')) {
      JSSDK.assert(false, 440125);
      return false;
    } // 事件状态的判断
    // 如果有上报中的，那么就等上报完成后在新增上报
    // 【注意】： 应该实时读取本地存储中的eventQueue。


    var storageEventQueue = JSSDK.Storage.getItem(JSSDK.STORAGE_EVENT_QUEUE, true, []);
    var isHasSubmitting = storageEventQueue.find(function (eventItem) {
      return eventItem.status === 'submitting';
    }) !== undefined;

    if (isHasSubmitting) {
      return false;
    }

    return true;
  }
  /**
   * 校验属性的格式，过滤掉不符合格式要求的数据
   * 原则： 不要过度校验。防止正确格式的属性也被拦截。
   * 有格式问题的数据： 即使上报上去的话，也不会引起系统错误，数据侧会过滤掉；
   * 覆盖范围：预定义事件的customProperties；自定义事件的所有属性；eventFinish的所有属性；用户属性设置；
   * 注意： 写入缓存前校验
   * @param properties
   * @return 满足一个对象，只包含满足条件的属性
   */

  /*
  格式要求：事件上报 - 自定义属性
  key的要求：
  ● NSString 类型
  ● 只能以字母开头，不能以下划线开头，其余字符可包含数字、小写字母和下划线"_"
  ● 长度最大为 40 个字符
  ● 仅支持小写字母

  value的要求：
  只能是number/string/boolean/array类型
  */

  function filterCustomProperties(properties) {
    // 处理后的可用于上报的对象
    var dealtObj = Object.create(null);

    if (getType(properties) !== 'object') {
      JSSDK.assert(false, 440120);
      return dealtObj;
    }

    var notStrKeysStr = '';
    var notValidFormatKeysStr = '';
    var overMaxLenKeysStr = '';
    var notValidValueStr = '';
    getObjAllInsKeys(properties).forEach(function (key) {

      if (getType(key) !== 'string') {
        notStrKeysStr += String(key) + ", ";
      } // key 只能以小写字母开头，不能以下划线开头，其余字符可包含数字、小写字母和下划线 "_"


      if (getType(key) === 'string' && !/^[a-z][a-z0-9_]*$/.test(key)) {
        notValidFormatKeysStr += String(key) + ", ";
      } // key 长度最大为 40 个字符


      if (getType(key) === 'string' && key.length > 40) {
        overMaxLenKeysStr += String(key) + ", ";
      } // value 只能是number/string/boolean类型


      if (!['number', 'string', 'boolean', 'array'].includes(getType(properties[key]))) {
        notValidValueStr += String(key) + ", ";
      }

      dealtObj[key] = properties[key]; // key value都满足要求时才赋值
      // if (isKeyValid && isValueValid) {
      //   dealtObj[key] = properties[key];
      // }
    });

    if (notStrKeysStr.length) {
      JSSDK.assert(false, 440605, {
        '{#1}': notStrKeysStr.slice(0, notStrKeysStr.length - 2)
      });
    }

    if (notValidFormatKeysStr.length) {
      JSSDK.assert(false, 440606, {
        '{#1}': notValidFormatKeysStr.slice(0, notValidFormatKeysStr.length - 2)
      });
    }

    if (overMaxLenKeysStr.length) {
      JSSDK.assert(false, 440607, {
        '{#1}': overMaxLenKeysStr.slice(0, overMaxLenKeysStr.length - 2)
      });
    }

    if (notValidValueStr.length) {
      JSSDK.assert(false, 440610, {
        '{#1}': notValidValueStr.slice(0, overMaxLenKeysStr.length - 2)
      });
    }

    return dealtObj;
  } //#endregion

  JSSDK.extend({
    valueToStr: valueToStr,
    isValueExceedLimit: isValueExceedLimit,
    filterCustomProperties: filterCustomProperties
  });

  /**
   * 查找指定元素
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */

  function find(list, f) {
    return list.find(f);
  }
  /**
   * 深度克隆
   * @param {*} obj
   * @param {Array<Object>} cache
   * @return {*}
   */

  function deepCopy(obj, cache) {
    if (cache === void 0) {
      cache = [];
    }

    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
      return obj;
    } // if obj is hit, it is in circular structure


    var hit = find(cache, function (c) {
      return c.original === obj;
    });

    if (hit) {
      return hit.copy;
    }

    var copy = Array.isArray(obj) ? [] : {}; // put the copy into cache at first
    // because we want to refer it in recursive deepCopy

    cache.push({
      original: obj,
      copy: copy
    });
    Object.keys(obj).forEach(function (key) {
      copy[key] = deepCopy(obj[key], cache);
    });
    return copy;
  }
  function getType(obj) {
    var map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object',
      '[object Symbol]': 'symbol',
      '[object BigInt]': 'bigInt',
      '[object HTMLDocument]': 'htmlDocument'
    };
    return map[Object.prototype.toString.call(obj)];
  }
  /**
   * 遍历指定对象并返回对应的 键 值
   * @param {Object} obj 需要遍历的对象
   * @param {Function} callback 遍历后的回调函数
   */

  function forEachValue(obj, callback) {
    Object.keys(obj).forEach(function (key) {
      return callback(obj[key], key);
    });
  }
  /**
   * 检测当前元素是否为Object格式
   * @param {*} obj 需要检测的元素
   */

  function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }
  /**
   * 检测当前元素是否为Promise格式
   * @param {*} val 需要检测的元素
   */

  function isPromise(val) {
    return val && typeof val.then === 'function';
  }
  var CODE_LEVEL = "warn";
  var CODE_LIST = {"440101":"请正确配置您的appKey/userId","440102":"请正确配置trackPageClick的参数信息","440103":"请正确配置您的默认参数配置，需要传递Array","440104":"请正确配置在线参数配置轮询间隔时间(单位: 分钟)，区间30分钟-24小时","440105":"参数格式非法 需要传递String","440106":"参数格式非法 需要传递String且不能以下划线_开头","440107":"初始化在线参数模块，需加载在线参数插件","440108":"数据请求失败: {#1}","440109":"插件缺少init方法","440110":"dom元素中绑定的自定义属性格式非法","440111":"未注册相应的Mutation方法","440112":"未注册相应的Action方法","440113":"观察者监听中未注册相应的Complete方法","440114":"观察者监听中未注册相应的Error方法","440115":"参数格式非法 需要传递Object或Array","440116":"参数格式非法 需要传递Array<object>","440117":"参数格式非法 需要传递({#1})","440119":"获取设备信息失败!","440120":"参数格式非法 需要传递Object","440121":"参数格式非法 需要传递字符串且长度小于128字符","440122":"参数格式非法 需要正确的预置事件类型({#1})或all","440123":"单个 key 存储的最大数据长度必须小于 1MB，且所有数据存储上限为 10MB","440124":"setStorage error: {#1}","440125":"暂未获取到小程序openid。","440601":"error: {#1}。 自定义事件名，必须是string类型。","440602":"error: {#1}。 自定义事件名，只能以小写字母开头，不能以下划线开头，其余字符可包含数字、小写字母和下划线 \"_\"。","440603":"error: {#1}。 自定义事件名，长度最大为 40 个字符","440604":"请先调用eventStart，以记录开始时间","440605":"error: {#1}。 自定义属性名，必须是string类型","440606":"error: {#1}。 自定义属性名，只能以小写字母开头，不能以下划线开头，其余字符可包含数字、小写字母和下划线 \"_\"","440607":"error: {#1}。 自定义属性名，长度最大为 40 个字符","440608":"error: {#1}。 以上参数为必传。","440609":"error: {#1}。 以上参数类型错误。","440610":"error: {#1}。 各key对应的值，只能是string/number/boolean/array类型"};
  /**
   * 断言输出错误信息
   * @param {Boolean} condition 断言真假
   * @param {String|errorCode} msg 错误信息|错误码
   * @param {String} macro 宏替换
   */

  function assert(condition, msg, macro) {
    var assertMsg = msg;

    if (!isNaN(msg) && CODE_LIST[msg]) {
      assertMsg = "[CODE: " + msg + "] " + CODE_LIST[msg];

      if (macro) {
        forEachValue(macro, function (value, key) {
          assertMsg = assertMsg.replace(new RegExp(key, 'g'), value);
        });
      }
    }

    if (!condition) {
      JSSDK.customEvents.$emit('assertMsg', assertMsg);
      console[CODE_LEVEL]("[JSSDK] " + assertMsg);
    }
  }
  var printConsole = console;
  function infoLog(apiName, msg, data) {
    var logTitle = "SESDK Log(The \"" + apiName + "\" method parameters passed by the developer):";

    if (data) {
      printConsole.log(logTitle, msg, ',', data);
    } else {
      printConsole.log(logTitle, msg);
    }
  }
  /**
   * 生成唯一id
   */

  function generateUUID() {
    if (typeof crypto === 'object') {
      if (typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
      }

      if (typeof crypto.getRandomValues === 'function' && typeof Uint8Array === 'function') {
        var callback = function callback(c) {
          var num = Number(c);
          return (num ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> num / 4).toString(16);
        };

        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, callback);
      }
    }

    var timestamp = new Date().getTime();
    var perforNow = typeof performance !== 'undefined' && performance.now && performance.now() * 1000 || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var random = Math.random() * 16;

      if (timestamp > 0) {
        random = (timestamp + random) % 16 | 0;
        timestamp = Math.floor(timestamp / 16);
      } else {
        random = (perforNow + random) % 16 | 0;
        perforNow = Math.floor(perforNow / 16);
      }

      return (c === 'x' ? random : random & 0x3 | 0x8).toString(16);
    });
  }
  /**
   * 去掉字符串首尾空格
   * @param {*} key
   * @returns
   */

  function trimStr(key) {
    return key == null ? void 0 : key.replace(/^\s+|\s+$/g, '');
  }
  /**
   * 限制参数类型
   */

  function limitParamType(key, value) {
    if (!['string', 'number', 'boolean'].includes(typeof value)) {
      assert(false, 440610, {
        '{#1}': key
      });
      return false;
    }

    return true;
  } // 是否为浏览器环境

  var isXcxEnv = function isXcxEnv() {
    try {
      var systemEnv = JSSDK.getStateData('systemEnv');
      return systemEnv === 1;
    } catch (error) {
      return false;
    }
  };
  /**
   * 获取对象的所有可枚举、实例属性（包含symbol类型的key）
   * @param obj
   */

  var getObjAllInsKeys = function getObjAllInsKeys(obj) {
    if (getType(obj) !== 'object') {
      return [];
    }

    var enuInsKeys = Object.keys(obj);

    if (getType(Reflect.ownKeys) !== 'function') {
      return enuInsKeys;
    }

    var insKeys = Object.getOwnPropertyNames(obj);
    var insHasSymKeys = Reflect.ownKeys(obj);
    var nonenuInsKeys = insKeys.filter(function (key) {
      return !enuInsKeys.includes(key);
    });
    var enuInsHasSymKeys = insHasSymKeys.filter(function (key) {
      return !nonenuInsKeys.includes(key);
    });
    return enuInsHasSymKeys;
  };
  /**
   * 类似json的字符串转化成对象
   * @param {*} str
   * ' { a: 1, b: 2 } '
   * " { 'a': 'asd', b: 2, c: true }"
   * ' { "a": "asd", b: 2 } '
   */

  function stringLikeJsonToObject(str) {
    var _str$replace, _str$replace$split;

    var r = {};

    if (!str) {
      return r;
    }

    r = (_str$replace = str.replace(/(\s*\{)|(\}\s*)/g, '')) == null ? void 0 : (_str$replace$split = _str$replace.split(',')) == null ? void 0 : _str$replace$split.reduce(function (m, o) {
      var arr = o.split(':');
      var key = arr[0].replace(/^\s*|\s*$/g, '');
      var value = arr[1].replace(/^\s*|\s*$/g, '').replace(/^(\"|\')|(\"|\')$/g, '');

      try {
        value = JSON.parse(value);
      } catch (e) {
        value = value;
      }

      m[key] = value;
      return m;
    }, {}); // 过滤属性

    return r;
  }
  JSSDK.extend({
    infoLog: infoLog,
    deepCopy: deepCopy,
    stringLikeJsonToObject: stringLikeJsonToObject,
    isObject: isObject,
    isPromise: isPromise,
    getType: getType,
    limitParamType: limitParamType,
    assert: assert,
    generateUUID: generateUUID,
    trimStr: trimStr,
    isXcxEnv: isXcxEnv
  });

  function createStorageKey(key) {
    // return `${STORAGE_KEY_PREFIX}_${key}`.toLocaleUpperCase(); // 不再转为大写。因为本地存储中key是区分大小写的，防止读取时出错。比如getItem('a')，实际会读取A的值。
    return STORAGE_KEY_PREFIX + "_" + key;
  }
  JSSDK.extend({
    createStorageKey: createStorageKey
  });

  var state = {
    // 开发者传递进来的额外上报数据
    externalReportData: {
      /**
       * 公共事件属性
       * 上报时需合并到properties层级下
       * 合并时，以properties下同属性名优先
       */
      superProperties: {},

      /**
       * 预置事件AppInstall自定义属性
       * 上报AppInstall事件时需合并到properties层级下
       * 合并时，以properties下同属性名优先
       */
      appInstall: {},

      /**
       * 预置事件AppStart自定义属性
       * 上报AppStart事件时需合并到properties层级下
       * 合并时，以properties下同属性名优先
       *
       */
      appStart: {},

      /**
       * 预置事件AppEnd自定义属性
       * 上报AppEnd事件时需合并到properties层级下
       * 合并时，以properties下同属性名优先
       */
      appEnd: {}
    },

    /**
     * 上报的数据
     * SDK初始化时会对整个reportData对象进行覆盖，减少冗余的初始属性
     */
    reportData: {
      // Appkey 归属的租户 ID, SDK初始化时开发者传递进来userId
      _tenant_id: '',
      // 管理后台应用的 16 位 Appkey, SDK初始化时开发者传递进来appKey
      _appkey: '',
      // 数据来源，SDK 默认传 sdk
      _source_type: 'sdk',
      // 事件标识
      _event_name: '',

      /**
       * 业务系统中的系统账号ID
       * 开发者调用 login 方法设置_account_id，如：login("登录ID")
       * 开发者调用 getAccountId 方法获取用户的账号ID
       * 开发者调用 logout 方法清除账号ID
       */
      // _account_id: '',

      /**
       * 系统访客 ID
       * 未自定义 _visitor_id 值时以 _distinct_id 填充
       * 开发者调用 setVisitorId 方法设置访客ID
       * 开发者调用 getVisitorId 方法获取当前访客 ID
       */
      // _visitor_id: '',

      /**
       * 启动ID，即从一次启动开始到启动结束(即退出)的标识
       * Web: 打开网站时生成，当前网站关闭后结束
       * 小程序: 冷启动（首次启动/销毁重启）时生成，进程销毁时结束
       */
      _session_id: '',
      // 数据类型: 只能是event或user
      _type: 'event',
      // SDK 端生成的用于标识数据唯一性的 ID
      _event_id: '',
      // 数据产生时的时间戳
      _ts: 0,
      // 设备 UA 信息
      _ua: '',

      /**
       * 用户设备ID
       * Web: cookie_id （通过当前时间戳+屏幕宽高+uuid随机数+UA 值 md5 后生成）保存在用户的浏览器的 cookie 中
       * 小程序: openid App 和 WeChat 的兜底取值：uuid + 当前时间 13 位时间戳
       */
      _distinct_id: '',

      /**
       * 用户设备ID类型
       * @enum 1001 当 _distinct_id 为默认取值时
       * @enum 1002 当 _distinct_id 为兜底取值时
       * @enum 1003 当 _distinct_id_type 为自定义值时
       */
      _distinct_id_type: 1001,
      // 开发者自定义属性
      custom_properties: {},
      // properties属性
      properties: {
        // 用户设备的制造商，如 Apple，vivo 等
        // _manufacturer: '',

        /**
         * 平台类型
         * @enum 0 Other
         * @enum 1 Android
         * @enum 2 iOS
         * @enum 3 Windows
         * @enum 4 Mac
         * @enum 5 Web
         * @enum 6 WeChat/小程序
         */
        _platform: 0,
        // 最细粒度的系统版本号，如 iOS 14.3.1、Android 10.0.0 等
        _os_version: '',
        // 用户设备的屏幕宽度
        _screen_width: 0,
        // 用户设备的屏幕高度
        _screen_height: 0,
        // 最细粒度的设备型号标识，如 iPhone9,1 ， M2102J2SC 等
        _device_model: '',

        /**
         * 用户的设备类型
         * @enum 0 Other
         * @enum 1 Android Phone
         * @enum 2 Android Pad
         * @enum 3 iPhone
         * @enum 4 iPad
         * @enum 5 Mac
         * @enum 6 PC(windows)
         */
        _device_type: 0,

        /**
         * 上传数据时的网络状态；web兼容性差不传，小程序传
         * @enum 0 无网络
         * @enum 1 unknown
         * @enum 2 2G
         * @enum 3 3G
         * @enum 4 4G
         * @enum 5 5G
         * @enum 6 6G或下一代网络
         * @enum 9 WIFI
         */
        _network_type: 1,

        /**
         * 渠道名称
         * 开发者调用 setChannel 方法设置_channel
         */
        // _channel: '',

        /**
         * 用户的设备类型
         * @enum 0 Other
         * @enum 1 Android
         * @enum 2 iOS
         * @enum 3 Js
         * @enum 4 小程序
         * @enum 5 小游戏
         * @enum 6 快应用
         */
        _lib: 0,
        // 接入的 SDK 的版本
        _lib_version: "1.0.2",
        // 使用的浏览器类型，如 Chrome，Firefox 等
        _browser: '',
        // 使用的浏览器的版本，如 Chrome 61.0，Firefox 57.0 等
        _browser_version: '',

        /**
         * 当前页面的标题
         * web: SDK内部采集
         * 小程序: 开发者调用 setPageTitle 方法设置_page_title
         */
        // _page_title: '',
        // 当前页面的地址
        // _page_name: '',

        /**
         * 来源页面的标题
         * 开发者调用 setReferrerTitle 方法设置_referrer_title
         */
        // _referrer_title: '',
        // 跳转前页面的地址
        // _referrer_name: '',
        // 事件时长，单位：毫秒，默认不传。 AppEnd/时长事件时，有值
        // _duration: 0,

        /**
         * 首日事件标记
         * 安装首日的全部事件均为 true
         * 非安装日的全部事件均为 false
         */
        _is_first_day: false,

        /**
         * 首次事件标记，仅每种事件的首次事件为 true，不限定首次是否在首日发生
         * true：是首次事件
         * false：非首次事件
         */
        _is_first_time: false,
        // 事件类数据的单日递增序号，用于统计事件丢包情况
        _log_count: 0
      }
    },
    // 小程序，是否存在openid
    isHasOpenId: false,
    // 当前客户端系统： web： 0； 小程序：1； (其他环境可基于此扩展)
    systemEnv: 0,
    // 是否开启调试模式
    debugModel: false,
    // 是否控制台打印sdk日志
    logEnabled: false,
    // 上报的自定义 URL
    customURL: ''
  };
  /**
   * 设置report上报数据
   * @param {Object} config 需要更改的数据
   * config.delete 是否删除config中传递的属性key
   */

  function setStateData(config) {
    if (!isObject(config)) {
      return JSSDK.assert(false, 440120);
    } // 是否需要删除当前config传递进来的属性key


    var isDelete = typeof config["delete"] === 'boolean' && config["delete"];
    delete config["delete"];
    Object.keys(config).forEach(function (key) {
      var _state = state;
      var ck = key.split('.');

      if (ck.length > 1) {
        // 代表此时的key是state下多层级
        ck.forEach(function (ckey, cindex) {
          if (cindex < ck.length - 1) {
            _state = _state[ckey];
          } else {
            if (isDelete && _state.hasOwnProperty(ckey)) {
              delete _state[ckey];
            } else {
              _state[ckey] = config[key];
            }
          }
        });
      } else {
        if (isDelete && _state.hasOwnProperty(key)) {
          delete state[key];
        } else {
          state[key] = config[key];
        }
      }
    });
  }
  /**
   * 获取report上报数据
   * @param {*} key
   */


  function getStateData(key) {
    if (!key) {
      return;
    }

    if (key.indexOf('.') < 0) {
      return state[key];
    }

    var _state = state;
    var ck = key.split('.');
    var r = null;
    ck.forEach(function (ckey, cindex) {
      if (cindex < ck.length - 1) {
        _state = _state[ckey];
      } else {
        r = _state[ckey];
      }
    });
    return r;
  }

  JSSDK.extend({
    setStateData: setStateData,
    getStateData: getStateData
  });

  var HttpHelper = {
    /**
     * get请求
     * @param {String} url 请求地址
     * @param {Object | ArrayBuffer} data 请求参数
     * @param {Object} config 请求配置信息
     */
    get: function get(url, data, config) {
      if (data === void 0) {
        data = {};
      }

      if (config === void 0) {
        config = {};
      }

      return JSSDK.requestHandle({
        url: url,
        method: 'get',
        params: data
      }, config);
    },

    /**
     * post请求
     * @param {String} url 接口地址
     * @param {Object | ArrayBuffer} data 请求参数
     * @param {Object} config 请求配置信息
     */
    post: function post(url, data, config) {
      if (data === void 0) {
        data = {};
      }

      if (config === void 0) {
        config = {};
      }

      return JSSDK.requestHandle({
        url: url,
        method: 'post',
        data: data
      }, config);
    }
  };
  JSSDK.extend({
    HttpHelper: HttpHelper
  });

  var customEvents = {
    eventList: {},

    /**
     * $on与$emit对执行顺序不敏感，始终会保证$emit触发事件时，$on绑定的事件回调会被执行
     * 如果是过去已经emit的事件，当$on监听时会立即触发$on绑定的回调函数执行
     * 如果是过去$on监听的事件，当$emit触发事件时，$on绑定的回调函数执行
     */
    $on: function $on(eventName, callback) {
      if (!this.eventList[eventName]) {
        this.eventList[eventName] = {};
      }

      if (Array.isArray(this.eventList[eventName].emitList)) {
        this.eventList[eventName].emitList.forEach(function (data) {
          return callback(data);
        });
      }

      if (!Array.isArray(this.eventList[eventName].onList)) {
        this.eventList[eventName].onList = [];
      }

      this.eventList[eventName].onList.push(callback);
    },
    $emit: function $emit(eventName, data) {
      if (!this.eventList[eventName]) {
        this.eventList[eventName] = {};
      }

      if (!Array.isArray(this.eventList[eventName].emitList)) {
        this.eventList[eventName].emitList = [];
      }

      this.eventList[eventName].emitList.push(data);

      if (!Array.isArray(this.eventList[eventName].onList)) {
        return;
      }

      this.eventList[eventName].onList.forEach(function (callback) {
        return callback(data);
      });
    },
    $off: function $off(eventName, callback) {
      var _this$eventList$event;

      var onList = (_this$eventList$event = this.eventList[eventName]) == null ? void 0 : _this$eventList$event.onList;

      if (!Array.isArray(onList)) {
        return;
      }

      for (var i = 0; i < onList.length; i++) {
        if (callback === onList[i]) {
          onList.splice(i, 1);
          break;
        }
      }
    }
  };
  JSSDK.extend({
    customEvents: customEvents
  });

  /**********************************************************\
  |                                                          |
  | xxtea.js                                                 |
  |                                                          |
  | XXTEA encryption algorithm library for JavaScript.       |
  |                                                          |
  | Encryption Algorithm Authors:                            |
  |      David J. Wheeler                                    |
  |      Roger M. Needham                                    |
  |                                                          |
  | Code Author: Ma Bingyao <mabingyao@gmail.com>            |
  | LastModified: Oct 4, 2016                                |
  |                                                          |
  \**********************************************************/
  var XXTEA = (function () {

    var global = {};

    global.btoa = function () {
      var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
      return function (str) {
        var buf, i, j, len, r, l, c;
        i = j = 0;
        len = str.length;
        r = len % 3;
        len = len - r;
        l = len / 3 << 2;

        if (r > 0) {
          l += 4;
        }

        buf = new Array(l);

        while (i < len) {
          c = str.charCodeAt(i++) << 16 | str.charCodeAt(i++) << 8 | str.charCodeAt(i++);
          buf[j++] = base64EncodeChars[c >> 18] + base64EncodeChars[c >> 12 & 0x3f] + base64EncodeChars[c >> 6 & 0x3f] + base64EncodeChars[c & 0x3f];
        }

        if (r == 1) {
          c = str.charCodeAt(i++);
          buf[j++] = base64EncodeChars[c >> 2] + base64EncodeChars[(c & 0x03) << 4] + '==';
        } else if (r == 2) {
          c = str.charCodeAt(i++) << 8 | str.charCodeAt(i++);
          buf[j++] = base64EncodeChars[c >> 10] + base64EncodeChars[c >> 4 & 0x3f] + base64EncodeChars[(c & 0x0f) << 2] + '=';
        }

        return buf.join('');
      };
    }();

    global.atob = function () {
      var base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
      return function (str) {
        var c1, c2, c3, c4;
        var i, j, len, r, l, out;
        len = str.length;

        if (len % 4 !== 0) {
          return '';
        }

        if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(str)) {
          return '';
        }

        if (str.charAt(len - 2) == '=') {
          r = 1;
        } else if (str.charAt(len - 1) == '=') {
          r = 2;
        } else {
          r = 0;
        }

        l = len;

        if (r > 0) {
          l -= 4;
        }

        l = (l >> 2) * 3 + r;
        out = new Array(l);
        i = j = 0;

        while (i < len) {
          // c1
          c1 = base64DecodeChars[str.charCodeAt(i++)];
          if (c1 == -1) break; // c2

          c2 = base64DecodeChars[str.charCodeAt(i++)];
          if (c2 == -1) break;
          out[j++] = String.fromCharCode(c1 << 2 | (c2 & 0x30) >> 4); // c3

          c3 = base64DecodeChars[str.charCodeAt(i++)];
          if (c3 == -1) break;
          out[j++] = String.fromCharCode((c2 & 0x0f) << 4 | (c3 & 0x3c) >> 2); // c4

          c4 = base64DecodeChars[str.charCodeAt(i++)];
          if (c4 == -1) break;
          out[j++] = String.fromCharCode((c3 & 0x03) << 6 | c4);
        }

        return out.join('');
      };
    }();

    var DELTA = 0x9e3779b9;

    function toBinaryString(v, includeLength) {
      var length = v.length;
      var n = length << 2;

      if (includeLength) {
        var m = v[length - 1];
        n -= 4;

        if (m < n - 3 || m > n) {
          return null;
        }

        n = m;
      }

      for (var i = 0; i < length; i++) {
        v[i] = String.fromCharCode(v[i] & 0xff, v[i] >>> 8 & 0xff, v[i] >>> 16 & 0xff, v[i] >>> 24 & 0xff);
      }

      var result = v.join('');

      if (includeLength) {
        return result.substring(0, n);
      }

      return result;
    }

    function toUint32Array(bs, includeLength) {
      var length = bs.length;
      var n = length >> 2;

      if ((length & 3) !== 0) {
        ++n;
      }

      var v;

      if (includeLength) {
        v = new Array(n + 1);
        v[n] = length;
      } else {
        v = new Array(n);
      }

      for (var i = 0; i < length; ++i) {
        v[i >> 2] |= bs.charCodeAt(i) << ((i & 3) << 3);
      }

      return v;
    }

    function int32(i) {
      return i & 0xffffffff;
    }

    function mx(sum, y, z, p, e, k) {
      return (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
    }

    function fixk(k) {
      if (k.length < 4) k.length = 4;
      return k;
    }

    function encryptUint32Array(v, k) {
      var length = v.length;
      var n = length - 1;
      var y, z, sum, e, p, q;
      z = v[n];
      sum = 0;

      for (q = Math.floor(6 + 52 / length) | 0; q > 0; --q) {
        sum = int32(sum + DELTA);
        e = sum >>> 2 & 3;

        for (p = 0; p < n; ++p) {
          y = v[p + 1];
          z = v[p] = int32(v[p] + mx(sum, y, z, p, e, k));
        }

        y = v[0];
        z = v[n] = int32(v[n] + mx(sum, y, z, n, e, k));
      }

      return v;
    }

    function decryptUint32Array(v, k) {
      var length = v.length;
      var n = length - 1;
      var y, z, sum, e, p, q;
      y = v[0];
      q = Math.floor(6 + 52 / length);

      for (sum = int32(q * DELTA); sum !== 0; sum = int32(sum - DELTA)) {
        e = sum >>> 2 & 3;

        for (p = n; p > 0; --p) {
          z = v[p - 1];
          y = v[p] = int32(v[p] - mx(sum, y, z, p, e, k));
        }

        z = v[n];
        y = v[0] = int32(v[0] - mx(sum, y, z, 0, e, k));
      }

      return v;
    }

    function utf8Encode(str) {
      if (/^[\x00-\x7f]*$/.test(str)) {
        return str;
      }

      var buf = [];
      var n = str.length;

      for (var i = 0, j = 0; i < n; ++i, ++j) {
        var codeUnit = str.charCodeAt(i);

        if (codeUnit < 0x80) {
          buf[j] = str.charAt(i);
        } else if (codeUnit < 0x800) {
          buf[j] = String.fromCharCode(0xc0 | codeUnit >> 6, 0x80 | codeUnit & 0x3f);
        } else if (codeUnit < 0xd800 || codeUnit > 0xdfff) {
          buf[j] = String.fromCharCode(0xe0 | codeUnit >> 12, 0x80 | codeUnit >> 6 & 0x3f, 0x80 | codeUnit & 0x3f);
        } else {
          if (i + 1 < n) {
            var nextCodeUnit = str.charCodeAt(i + 1);

            if (codeUnit < 0xdc00 && 0xdc00 <= nextCodeUnit && nextCodeUnit <= 0xdfff) {
              var rune = ((codeUnit & 0x03ff) << 10 | nextCodeUnit & 0x03ff) + 0x010000;
              buf[j] = String.fromCharCode(0xf0 | rune >> 18 & 0x3f, 0x80 | rune >> 12 & 0x3f, 0x80 | rune >> 6 & 0x3f, 0x80 | rune & 0x3f);
              ++i;
              continue;
            }
          }

          throw new Error('Malformed string');
        }
      }

      return buf.join('');
    }

    function utf8DecodeShortString(bs, n) {
      var charCodes = new Array(n);
      var i = 0,
          off = 0;

      for (var len = bs.length; i < n && off < len; i++) {
        var unit = bs.charCodeAt(off++);

        switch (unit >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            charCodes[i] = unit;
            break;

          case 12:
          case 13:
            if (off < len) {
              charCodes[i] = (unit & 0x1f) << 6 | bs.charCodeAt(off++) & 0x3f;
            } else {
              throw new Error('Unfinished UTF-8 octet sequence');
            }

            break;

          case 14:
            if (off + 1 < len) {
              charCodes[i] = (unit & 0x0f) << 12 | (bs.charCodeAt(off++) & 0x3f) << 6 | bs.charCodeAt(off++) & 0x3f;
            } else {
              throw new Error('Unfinished UTF-8 octet sequence');
            }

            break;

          case 15:
            if (off + 2 < len) {
              var rune = ((unit & 0x07) << 18 | (bs.charCodeAt(off++) & 0x3f) << 12 | (bs.charCodeAt(off++) & 0x3f) << 6 | bs.charCodeAt(off++) & 0x3f) - 0x10000;

              if (0 <= rune && rune <= 0xfffff) {
                charCodes[i++] = rune >> 10 & 0x03ff | 0xd800;
                charCodes[i] = rune & 0x03ff | 0xdc00;
              } else {
                throw new Error('Character outside valid Unicode range: 0x' + rune.toString(16));
              }
            } else {
              throw new Error('Unfinished UTF-8 octet sequence');
            }

            break;

          default:
            throw new Error('Bad UTF-8 encoding 0x' + unit.toString(16));
        }
      }

      if (i < n) {
        charCodes.length = i;
      }

      return String.fromCharCode.apply(String, charCodes);
    }

    function utf8DecodeLongString(bs, n) {
      var buf = [];
      var charCodes = new Array(0x8000);
      var i = 0,
          off = 0;

      for (var len = bs.length; i < n && off < len; i++) {
        var unit = bs.charCodeAt(off++);

        switch (unit >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            charCodes[i] = unit;
            break;

          case 12:
          case 13:
            if (off < len) {
              charCodes[i] = (unit & 0x1f) << 6 | bs.charCodeAt(off++) & 0x3f;
            } else {
              throw new Error('Unfinished UTF-8 octet sequence');
            }

            break;

          case 14:
            if (off + 1 < len) {
              charCodes[i] = (unit & 0x0f) << 12 | (bs.charCodeAt(off++) & 0x3f) << 6 | bs.charCodeAt(off++) & 0x3f;
            } else {
              throw new Error('Unfinished UTF-8 octet sequence');
            }

            break;

          case 15:
            if (off + 2 < len) {
              var rune = ((unit & 0x07) << 18 | (bs.charCodeAt(off++) & 0x3f) << 12 | (bs.charCodeAt(off++) & 0x3f) << 6 | bs.charCodeAt(off++) & 0x3f) - 0x10000;

              if (0 <= rune && rune <= 0xfffff) {
                charCodes[i++] = rune >> 10 & 0x03ff | 0xd800;
                charCodes[i] = rune & 0x03ff | 0xdc00;
              } else {
                throw new Error('Character outside valid Unicode range: 0x' + rune.toString(16));
              }
            } else {
              throw new Error('Unfinished UTF-8 octet sequence');
            }

            break;

          default:
            throw new Error('Bad UTF-8 encoding 0x' + unit.toString(16));
        }

        if (i >= 0x7fff - 1) {
          var size = i + 1;
          charCodes.length = size;
          buf[buf.length] = String.fromCharCode.apply(String, charCodes);
          n -= size;
          i = -1;
        }
      }

      if (i > 0) {
        charCodes.length = i;
        buf[buf.length] = String.fromCharCode.apply(String, charCodes);
      }

      return buf.join('');
    } // n is UTF16 length


    function utf8Decode(bs, n) {
      if (n === undefined || n === null || n < 0) n = bs.length;
      if (n === 0) return '';

      if (/^[\x00-\x7f]*$/.test(bs) || !/^[\x00-\xff]*$/.test(bs)) {
        if (n === bs.length) return bs;
        return bs.substr(0, n);
      }

      return n < 0xffff ? utf8DecodeShortString(bs, n) : utf8DecodeLongString(bs, n);
    }

    function encrypt(data, key) {
      if (data === undefined || data === null || data.length === 0) {
        return data;
      }

      data = utf8Encode(data);
      key = utf8Encode(key);
      return toBinaryString(encryptUint32Array(toUint32Array(data, true), fixk(toUint32Array(key, false))), false);
    }

    function encryptToBase64(data, key) {
      return global.btoa(encrypt(data, key));
    }

    function decrypt(data, key) {

      if (data === undefined || data === null || data.length === 0) {
        return data;
      }

      key = utf8Encode(key);
      return utf8Decode(toBinaryString(decryptUint32Array(toUint32Array(data, false), fixk(toUint32Array(key, false))), true));
    }

    function decryptFromBase64(data, key) {
      if (data === undefined || data === null || data.length === 0) {
        return data;
      }

      return decrypt(global.atob(data), key);
    }

    global.STB = {
      utf8Encode: utf8Encode,
      utf8Decode: utf8Decode,
      encrypt: encrypt,
      encryptToBase64: encryptToBase64,
      decrypt: decrypt,
      decryptFromBase64: decryptFromBase64
    };
    return global;
  })();

  JSSDK.extend({
    /**
     * XXTEA相关
     *
     * 挂载XXTea
     ** 挂载btoa
     ** 挂载atob
     */
    btoa: XXTEA.btoa,
    atob: XXTEA.atob,
    STB: XXTEA.STB,
    getSTAPublicKey: function getSTAPublicKey(key) {
      return this.atob(key);
    }
  });

  var sendReportDataHost = 'test-mintegral.detailroi.com';
  var API = {
    // 上报数据接口
    sendReportData: "//" + sendReportDataHost + "/datareceiver/receive/v1/api",
    sendDebugReportData: "//" + sendReportDataHost + "/datareceiver/receive/v1/debugApi"
  };

  /* eslint-disable no-use-before-define */

  /**
   * Base class for inheritance.
   */
  class Base {
    /**
     * Extends this object and runs the init method.
     * Arguments to create() will be passed to init().
     *
     * @return {Object} The new object.
     *
     * @static
     *
     * @example
     *
     *     var instance = MyType.create();
     */
    static create(...args) {
      return new this(...args);
    }

    /**
     * Copies properties into this object.
     *
     * @param {Object} properties The properties to mix in.
     *
     * @example
     *
     *     MyType.mixIn({
     *         field: 'value'
     *     });
     */
    mixIn(properties) {
      return Object.assign(this, properties);
    }

    /**
     * Creates a copy of this object.
     *
     * @return {Object} The clone.
     *
     * @example
     *
     *     var clone = instance.clone();
     */
    clone() {
      const clone = new this.constructor();
      Object.assign(clone, this);
      return clone;
    }
  }

  /**
   * An array of 32-bit words.
   *
   * @property {Array} words The array of 32-bit words.
   * @property {number} sigBytes The number of significant bytes in this word array.
   */
  class WordArray extends Base {
    /**
     * Initializes a newly created word array.
     *
     * @param {Array} words (Optional) An array of 32-bit words.
     * @param {number} sigBytes (Optional) The number of significant bytes in the words.
     *
     * @example
     *
     *     var wordArray = CryptoJS.lib.WordArray.create();
     *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
     *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
     */
    constructor(words = [], sigBytes = words.length * 4) {
      super();

      let typedArray = words;
      // Convert buffers to uint8
      if (typedArray instanceof ArrayBuffer) {
        typedArray = new Uint8Array(typedArray);
      }

      // Convert other array views to uint8
      if (
        typedArray instanceof Int8Array
        || typedArray instanceof Uint8ClampedArray
        || typedArray instanceof Int16Array
        || typedArray instanceof Uint16Array
        || typedArray instanceof Int32Array
        || typedArray instanceof Uint32Array
        || typedArray instanceof Float32Array
        || typedArray instanceof Float64Array
      ) {
        typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
      }

      // Handle Uint8Array
      if (typedArray instanceof Uint8Array) {
        // Shortcut
        const typedArrayByteLength = typedArray.byteLength;

        // Extract bytes
        const _words = [];
        for (let i = 0; i < typedArrayByteLength; i += 1) {
          _words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
        }

        // Initialize this word array
        this.words = _words;
        this.sigBytes = typedArrayByteLength;
      } else {
        // Else call normal init
        this.words = words;
        this.sigBytes = sigBytes;
      }
    }

    /**
     * Creates a word array filled with random bytes.
     *
     * @param {number} nBytes The number of random bytes to generate.
     *
     * @return {WordArray} The random word array.
     *
     * @static
     *
     * @example
     *
     *     var wordArray = CryptoJS.lib.WordArray.random(16);
     */
    static random(nBytes) {
      const words = [];

      const r = (m_w) => {
        let _m_w = m_w;
        let _m_z = 0x3ade68b1;
        const mask = 0xffffffff;

        return () => {
          _m_z = (0x9069 * (_m_z & 0xFFFF) + (_m_z >> 0x10)) & mask;
          _m_w = (0x4650 * (_m_w & 0xFFFF) + (_m_w >> 0x10)) & mask;
          let result = ((_m_z << 0x10) + _m_w) & mask;
          result /= 0x100000000;
          result += 0.5;
          return result * (Math.random() > 0.5 ? 1 : -1);
        };
      };

      for (let i = 0, rcache; i < nBytes; i += 4) {
        const _r = r((rcache || Math.random()) * 0x100000000);

        rcache = _r() * 0x3ade67b7;
        words.push((_r() * 0x100000000) | 0);
      }

      return new WordArray(words, nBytes);
    }

    /**
     * Converts this word array to a string.
     *
     * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
     *
     * @return {string} The stringified word array.
     *
     * @example
     *
     *     var string = wordArray + '';
     *     var string = wordArray.toString();
     *     var string = wordArray.toString(CryptoJS.enc.Utf8);
     */
    toString(encoder = Hex) {
      return encoder.stringify(this);
    }

    /**
     * Concatenates a word array to this word array.
     *
     * @param {WordArray} wordArray The word array to append.
     *
     * @return {WordArray} This word array.
     *
     * @example
     *
     *     wordArray1.concat(wordArray2);
     */
    concat(wordArray) {
      // Shortcuts
      const thisWords = this.words;
      const thatWords = wordArray.words;
      const thisSigBytes = this.sigBytes;
      const thatSigBytes = wordArray.sigBytes;

      // Clamp excess bits
      this.clamp();

      // Concat
      if (thisSigBytes % 4) {
        // Copy one byte at a time
        for (let i = 0; i < thatSigBytes; i += 1) {
          const thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
          thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
        }
      } else {
        // Copy one word at a time
        for (let i = 0; i < thatSigBytes; i += 4) {
          thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
        }
      }
      this.sigBytes += thatSigBytes;

      // Chainable
      return this;
    }

    /**
     * Removes insignificant bits.
     *
     * @example
     *
     *     wordArray.clamp();
     */
    clamp() {
      // Shortcuts
      const { words, sigBytes } = this;

      // Clamp
      words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
      words.length = Math.ceil(sigBytes / 4);
    }

    /**
     * Creates a copy of this word array.
     *
     * @return {WordArray} The clone.
     *
     * @example
     *
     *     var clone = wordArray.clone();
     */
    clone() {
      const clone = super.clone.call(this);
      clone.words = this.words.slice(0);

      return clone;
    }
  }

  /**
   * Hex encoding strategy.
   */
  const Hex = {
    /**
     * Converts a word array to a hex string.
     *
     * @param {WordArray} wordArray The word array.
     *
     * @return {string} The hex string.
     *
     * @static
     *
     * @example
     *
     *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
     */
    stringify(wordArray) {
      // Shortcuts
      const { words, sigBytes } = wordArray;

      // Convert
      const hexChars = [];
      for (let i = 0; i < sigBytes; i += 1) {
        const bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        hexChars.push((bite >>> 4).toString(16));
        hexChars.push((bite & 0x0f).toString(16));
      }

      return hexChars.join('');
    },

    /**
     * Converts a hex string to a word array.
     *
     * @param {string} hexStr The hex string.
     *
     * @return {WordArray} The word array.
     *
     * @static
     *
     * @example
     *
     *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
     */
    parse(hexStr) {
      // Shortcut
      const hexStrLength = hexStr.length;

      // Convert
      const words = [];
      for (let i = 0; i < hexStrLength; i += 2) {
        words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
      }

      return new WordArray(words, hexStrLength / 2);
    },
  };

  /**
   * Latin1 encoding strategy.
   */
  const Latin1 = {
    /**
     * Converts a word array to a Latin1 string.
     *
     * @param {WordArray} wordArray The word array.
     *
     * @return {string} The Latin1 string.
     *
     * @static
     *
     * @example
     *
     *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
     */
    stringify(wordArray) {
      // Shortcuts
      const { words, sigBytes } = wordArray;

      // Convert
      const latin1Chars = [];
      for (let i = 0; i < sigBytes; i += 1) {
        const bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        latin1Chars.push(String.fromCharCode(bite));
      }

      return latin1Chars.join('');
    },

    /**
     * Converts a Latin1 string to a word array.
     *
     * @param {string} latin1Str The Latin1 string.
     *
     * @return {WordArray} The word array.
     *
     * @static
     *
     * @example
     *
     *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
     */
    parse(latin1Str) {
      // Shortcut
      const latin1StrLength = latin1Str.length;

      // Convert
      const words = [];
      for (let i = 0; i < latin1StrLength; i += 1) {
        words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
      }

      return new WordArray(words, latin1StrLength);
    },
  };

  /**
   * UTF-8 encoding strategy.
   */
  const Utf8 = {
    /**
     * Converts a word array to a UTF-8 string.
     *
     * @param {WordArray} wordArray The word array.
     *
     * @return {string} The UTF-8 string.
     *
     * @static
     *
     * @example
     *
     *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
     */
    stringify(wordArray) {
      try {
        return decodeURIComponent(escape(Latin1.stringify(wordArray)));
      } catch (e) {
        throw new Error('Malformed UTF-8 data');
      }
    },

    /**
     * Converts a UTF-8 string to a word array.
     *
     * @param {string} utf8Str The UTF-8 string.
     *
     * @return {WordArray} The word array.
     *
     * @static
     *
     * @example
     *
     *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
     */
    parse(utf8Str) {
      return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
    },
  };

  /**
   * Abstract buffered block algorithm template.
   *
   * The property blockSize must be implemented in a concrete subtype.
   *
   * @property {number} _minBufferSize
   *
   *     The number of blocks that should be kept unprocessed in the buffer. Default: 0
   */
  class BufferedBlockAlgorithm extends Base {
    constructor() {
      super();
      this._minBufferSize = 0;
    }

    /**
     * Resets this block algorithm's data buffer to its initial state.
     *
     * @example
     *
     *     bufferedBlockAlgorithm.reset();
     */
    reset() {
      // Initial values
      this._data = new WordArray();
      this._nDataBytes = 0;
    }

    /**
     * Adds new data to this block algorithm's buffer.
     *
     * @param {WordArray|string} data
     *
     *     The data to append. Strings are converted to a WordArray using UTF-8.
     *
     * @example
     *
     *     bufferedBlockAlgorithm._append('data');
     *     bufferedBlockAlgorithm._append(wordArray);
     */
    _append(data) {
      let m_data = data;

      // Convert string to WordArray, else assume WordArray already
      if (typeof m_data === 'string') {
        m_data = Utf8.parse(m_data);
      }

      // Append
      this._data.concat(m_data);
      this._nDataBytes += m_data.sigBytes;
    }

    /**
     * Processes available data blocks.
     *
     * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
     *
     * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
     *
     * @return {WordArray} The processed data.
     *
     * @example
     *
     *     var processedData = bufferedBlockAlgorithm._process();
     *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
     */
    _process(doFlush) {
      let processedWords;

      // Shortcuts
      const { _data: data, blockSize } = this;
      const dataWords = data.words;
      const dataSigBytes = data.sigBytes;
      const blockSizeBytes = blockSize * 4;

      // Count blocks ready
      let nBlocksReady = dataSigBytes / blockSizeBytes;
      if (doFlush) {
        // Round up to include partial blocks
        nBlocksReady = Math.ceil(nBlocksReady);
      } else {
        // Round down to include only full blocks,
        // less the number of blocks that must remain in the buffer
        nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
      }

      // Count words ready
      const nWordsReady = nBlocksReady * blockSize;

      // Count bytes ready
      const nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

      // Process blocks
      if (nWordsReady) {
        for (let offset = 0; offset < nWordsReady; offset += blockSize) {
          // Perform concrete-algorithm logic
          this._doProcessBlock(dataWords, offset);
        }

        // Remove processed words
        processedWords = dataWords.splice(0, nWordsReady);
        data.sigBytes -= nBytesReady;
      }

      // Return processed words
      return new WordArray(processedWords, nBytesReady);
    }

    /**
     * Creates a copy of this object.
     *
     * @return {Object} The clone.
     *
     * @example
     *
     *     var clone = bufferedBlockAlgorithm.clone();
     */
    clone() {
      const clone = super.clone.call(this);
      clone._data = this._data.clone();

      return clone;
    }
  }

  /**
   * Abstract hasher template.
   *
   * @property {number} blockSize
   *
   *     The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
   */
  class Hasher extends BufferedBlockAlgorithm {
    constructor(cfg) {
      super();

      this.blockSize = 512 / 32;

      /**
       * Configuration options.
       */
      this.cfg = Object.assign(new Base(), cfg);

      // Set initial values
      this.reset();
    }

    /**
     * Creates a shortcut function to a hasher's object interface.
     *
     * @param {Hasher} SubHasher The hasher to create a helper for.
     *
     * @return {Function} The shortcut function.
     *
     * @static
     *
     * @example
     *
     *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
     */
    static _createHelper(SubHasher) {
      return (message, cfg) => new SubHasher(cfg).finalize(message);
    }

    /**
     * Creates a shortcut function to the HMAC's object interface.
     *
     * @param {Hasher} SubHasher The hasher to use in this HMAC helper.
     *
     * @return {Function} The shortcut function.
     *
     * @static
     *
     * @example
     *
     *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
     */
    static _createHmacHelper(SubHasher) {
      return (message, key) => new HMAC(SubHasher, key).finalize(message);
    }

    /**
     * Resets this hasher to its initial state.
     *
     * @example
     *
     *     hasher.reset();
     */
    reset() {
      // Reset data buffer
      super.reset.call(this);

      // Perform concrete-hasher logic
      this._doReset();
    }

    /**
     * Updates this hasher with a message.
     *
     * @param {WordArray|string} messageUpdate The message to append.
     *
     * @return {Hasher} This hasher.
     *
     * @example
     *
     *     hasher.update('message');
     *     hasher.update(wordArray);
     */
    update(messageUpdate) {
      // Append
      this._append(messageUpdate);

      // Update the hash
      this._process();

      // Chainable
      return this;
    }

    /**
     * Finalizes the hash computation.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * @param {WordArray|string} messageUpdate (Optional) A final message update.
     *
     * @return {WordArray} The hash.
     *
     * @example
     *
     *     var hash = hasher.finalize();
     *     var hash = hasher.finalize('message');
     *     var hash = hasher.finalize(wordArray);
     */
    finalize(messageUpdate) {
      // Final message update
      if (messageUpdate) {
        this._append(messageUpdate);
      }

      // Perform concrete-hasher logic
      const hash = this._doFinalize();

      return hash;
    }
  }

  /**
   * HMAC algorithm.
   */
  class HMAC extends Base {
    /**
     * Initializes a newly created HMAC.
     *
     * @param {Hasher} SubHasher The hash algorithm to use.
     * @param {WordArray|string} key The secret key.
     *
     * @example
     *
     *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
     */
    constructor(SubHasher, key) {
      super();

      const hasher = new SubHasher();
      this._hasher = hasher;

      // Convert string to WordArray, else assume WordArray already
      let _key = key;
      if (typeof _key === 'string') {
        _key = Utf8.parse(_key);
      }

      // Shortcuts
      const hasherBlockSize = hasher.blockSize;
      const hasherBlockSizeBytes = hasherBlockSize * 4;

      // Allow arbitrary length keys
      if (_key.sigBytes > hasherBlockSizeBytes) {
        _key = hasher.finalize(key);
      }

      // Clamp excess bits
      _key.clamp();

      // Clone key for inner and outer pads
      const oKey = _key.clone();
      this._oKey = oKey;
      const iKey = _key.clone();
      this._iKey = iKey;

      // Shortcuts
      const oKeyWords = oKey.words;
      const iKeyWords = iKey.words;

      // XOR keys with pad constants
      for (let i = 0; i < hasherBlockSize; i += 1) {
        oKeyWords[i] ^= 0x5c5c5c5c;
        iKeyWords[i] ^= 0x36363636;
      }
      oKey.sigBytes = hasherBlockSizeBytes;
      iKey.sigBytes = hasherBlockSizeBytes;

      // Set initial values
      this.reset();
    }

    /**
     * Resets this HMAC to its initial state.
     *
     * @example
     *
     *     hmacHasher.reset();
     */
    reset() {
      // Shortcut
      const hasher = this._hasher;

      // Reset
      hasher.reset();
      hasher.update(this._iKey);
    }

    /**
     * Updates this HMAC with a message.
     *
     * @param {WordArray|string} messageUpdate The message to append.
     *
     * @return {HMAC} This HMAC instance.
     *
     * @example
     *
     *     hmacHasher.update('message');
     *     hmacHasher.update(wordArray);
     */
    update(messageUpdate) {
      this._hasher.update(messageUpdate);

      // Chainable
      return this;
    }

    /**
     * Finalizes the HMAC computation.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * @param {WordArray|string} messageUpdate (Optional) A final message update.
     *
     * @return {WordArray} The HMAC.
     *
     * @example
     *
     *     var hmac = hmacHasher.finalize();
     *     var hmac = hmacHasher.finalize('message');
     *     var hmac = hmacHasher.finalize(wordArray);
     */
    finalize(messageUpdate) {
      // Shortcut
      const hasher = this._hasher;

      // Compute HMAC
      const innerHash = hasher.finalize(messageUpdate);
      hasher.reset();
      const hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

      return hmac;
    }
  }

  const X32WordArray = WordArray;

  /**
   * A 64-bit word.
   */
  class X64Word extends Base {
    /**
     * Initializes a newly created 64-bit word.
     *
     * @param {number} high The high 32 bits.
     * @param {number} low The low 32 bits.
     *
     * @example
     *
     *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
     */
    constructor(high, low) {
      super();

      this.high = high;
      this.low = low;
    }
  }

  /**
   * An array of 64-bit words.
   *
   * @property {Array} words The array of CryptoJS.x64.Word objects.
   * @property {number} sigBytes The number of significant bytes in this word array.
   */
  class X64WordArray extends Base {
    /**
     * Initializes a newly created word array.
     *
     * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
     * @param {number} sigBytes (Optional) The number of significant bytes in the words.
     *
     * @example
     *
     *     var wordArray = CryptoJS.x64.WordArray.create();
     *
     *     var wordArray = CryptoJS.x64.WordArray.create([
     *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
     *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
     *     ]);
     *
     *     var wordArray = CryptoJS.x64.WordArray.create([
     *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
     *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
     *     ], 10);
     */
    constructor(words = [], sigBytes = words.length * 8) {
      super();

      this.words = words;
      this.sigBytes = sigBytes;
    }

    /**
     * Converts this 64-bit word array to a 32-bit word array.
     *
     * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
     *
     * @example
     *
     *     var x32WordArray = x64WordArray.toX32();
     */
    toX32() {
      // Shortcuts
      const x64Words = this.words;
      const x64WordsLength = x64Words.length;

      // Convert
      const x32Words = [];
      for (let i = 0; i < x64WordsLength; i += 1) {
        const x64Word = x64Words[i];
        x32Words.push(x64Word.high);
        x32Words.push(x64Word.low);
      }

      return X32WordArray.create(x32Words, this.sigBytes);
    }

    /**
     * Creates a copy of this word array.
     *
     * @return {X64WordArray} The clone.
     *
     * @example
     *
     *     var clone = x64WordArray.clone();
     */
    clone() {
      const clone = super.clone.call(this);

      // Clone "words" array
      clone.words = this.words.slice(0);
      const { words } = clone;

      // Clone each X64Word object
      const wordsLength = words.length;
      for (let i = 0; i < wordsLength; i += 1) {
        words[i] = words[i].clone();
      }

      return clone;
    }
  }

  const parseLoop = (base64Str, base64StrLength, reverseMap) => {
    const words = [];
    let nBytes = 0;
    for (let i = 0; i < base64StrLength; i += 1) {
      if (i % 4) {
        const bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
        const bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
        const bitsCombined = bits1 | bits2;
        words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
        nBytes += 1;
      }
    }
    return WordArray.create(words, nBytes);
  };

  /**
   * Base64 encoding strategy.
   */
  const Base64 = {
    /**
     * Converts a word array to a Base64 string.
     *
     * @param {WordArray} wordArray The word array.
     *
     * @return {string} The Base64 string.
     *
     * @static
     *
     * @example
     *
     *     const base64String = CryptoJS.enc.Base64.stringify(wordArray);
     */
    stringify(wordArray) {
      // Shortcuts
      const { words, sigBytes } = wordArray;
      const map = this._map;

      // Clamp excess bits
      wordArray.clamp();

      // Convert
      const base64Chars = [];
      for (let i = 0; i < sigBytes; i += 3) {
        const byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        const byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
        const byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

        const triplet = (byte1 << 16) | (byte2 << 8) | byte3;

        for (let j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j += 1) {
          base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
        }
      }

      // Add padding
      const paddingChar = map.charAt(64);
      if (paddingChar) {
        while (base64Chars.length % 4) {
          base64Chars.push(paddingChar);
        }
      }

      return base64Chars.join('');
    },

    /**
     * Converts a Base64 string to a word array.
     *
     * @param {string} base64Str The Base64 string.
     *
     * @return {WordArray} The word array.
     *
     * @static
     *
     * @example
     *
     *     const wordArray = CryptoJS.enc.Base64.parse(base64String);
     */
    parse(base64Str) {
      // Shortcuts
      let base64StrLength = base64Str.length;
      const map = this._map;
      let reverseMap = this._reverseMap;

      if (!reverseMap) {
        this._reverseMap = [];
        reverseMap = this._reverseMap;
        for (let j = 0; j < map.length; j += 1) {
          reverseMap[map.charCodeAt(j)] = j;
        }
      }

      // Ignore padding
      const paddingChar = map.charAt(64);
      if (paddingChar) {
        const paddingIndex = base64Str.indexOf(paddingChar);
        if (paddingIndex !== -1) {
          base64StrLength = paddingIndex;
        }
      }

      // Convert
      return parseLoop(base64Str, base64StrLength, reverseMap);
    },

    _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  };

  // Constants table
  const T = [];

  // Compute constants
  for (let i = 0; i < 64; i += 1) {
    T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
  }

  const FF = (a, b, c, d, x, s, t) => {
    const n = a + ((b & c) | (~b & d)) + x + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  const GG = (a, b, c, d, x, s, t) => {
    const n = a + ((b & d) | (c & ~d)) + x + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  const HH = (a, b, c, d, x, s, t) => {
    const n = a + (b ^ c ^ d) + x + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  const II = (a, b, c, d, x, s, t) => {
    const n = a + (c ^ (b | ~d)) + x + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  /**
   * MD5 hash algorithm.
   */
  class MD5Algo extends Hasher {
    _doReset() {
      this._hash = new WordArray([
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
      ]);
    }

    _doProcessBlock(M, offset) {
      const _M = M;

      // Swap endian
      for (let i = 0; i < 16; i += 1) {
        // Shortcuts
        const offset_i = offset + i;
        const M_offset_i = M[offset_i];

        _M[offset_i] = (
          (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff)
            | (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00)
        );
      }

      // Shortcuts
      const H = this._hash.words;

      const M_offset_0 = _M[offset + 0];
      const M_offset_1 = _M[offset + 1];
      const M_offset_2 = _M[offset + 2];
      const M_offset_3 = _M[offset + 3];
      const M_offset_4 = _M[offset + 4];
      const M_offset_5 = _M[offset + 5];
      const M_offset_6 = _M[offset + 6];
      const M_offset_7 = _M[offset + 7];
      const M_offset_8 = _M[offset + 8];
      const M_offset_9 = _M[offset + 9];
      const M_offset_10 = _M[offset + 10];
      const M_offset_11 = _M[offset + 11];
      const M_offset_12 = _M[offset + 12];
      const M_offset_13 = _M[offset + 13];
      const M_offset_14 = _M[offset + 14];
      const M_offset_15 = _M[offset + 15];

      // Working varialbes
      let a = H[0];
      let b = H[1];
      let c = H[2];
      let d = H[3];

      // Computation
      a = FF(a, b, c, d, M_offset_0, 7, T[0]);
      d = FF(d, a, b, c, M_offset_1, 12, T[1]);
      c = FF(c, d, a, b, M_offset_2, 17, T[2]);
      b = FF(b, c, d, a, M_offset_3, 22, T[3]);
      a = FF(a, b, c, d, M_offset_4, 7, T[4]);
      d = FF(d, a, b, c, M_offset_5, 12, T[5]);
      c = FF(c, d, a, b, M_offset_6, 17, T[6]);
      b = FF(b, c, d, a, M_offset_7, 22, T[7]);
      a = FF(a, b, c, d, M_offset_8, 7, T[8]);
      d = FF(d, a, b, c, M_offset_9, 12, T[9]);
      c = FF(c, d, a, b, M_offset_10, 17, T[10]);
      b = FF(b, c, d, a, M_offset_11, 22, T[11]);
      a = FF(a, b, c, d, M_offset_12, 7, T[12]);
      d = FF(d, a, b, c, M_offset_13, 12, T[13]);
      c = FF(c, d, a, b, M_offset_14, 17, T[14]);
      b = FF(b, c, d, a, M_offset_15, 22, T[15]);

      a = GG(a, b, c, d, M_offset_1, 5, T[16]);
      d = GG(d, a, b, c, M_offset_6, 9, T[17]);
      c = GG(c, d, a, b, M_offset_11, 14, T[18]);
      b = GG(b, c, d, a, M_offset_0, 20, T[19]);
      a = GG(a, b, c, d, M_offset_5, 5, T[20]);
      d = GG(d, a, b, c, M_offset_10, 9, T[21]);
      c = GG(c, d, a, b, M_offset_15, 14, T[22]);
      b = GG(b, c, d, a, M_offset_4, 20, T[23]);
      a = GG(a, b, c, d, M_offset_9, 5, T[24]);
      d = GG(d, a, b, c, M_offset_14, 9, T[25]);
      c = GG(c, d, a, b, M_offset_3, 14, T[26]);
      b = GG(b, c, d, a, M_offset_8, 20, T[27]);
      a = GG(a, b, c, d, M_offset_13, 5, T[28]);
      d = GG(d, a, b, c, M_offset_2, 9, T[29]);
      c = GG(c, d, a, b, M_offset_7, 14, T[30]);
      b = GG(b, c, d, a, M_offset_12, 20, T[31]);

      a = HH(a, b, c, d, M_offset_5, 4, T[32]);
      d = HH(d, a, b, c, M_offset_8, 11, T[33]);
      c = HH(c, d, a, b, M_offset_11, 16, T[34]);
      b = HH(b, c, d, a, M_offset_14, 23, T[35]);
      a = HH(a, b, c, d, M_offset_1, 4, T[36]);
      d = HH(d, a, b, c, M_offset_4, 11, T[37]);
      c = HH(c, d, a, b, M_offset_7, 16, T[38]);
      b = HH(b, c, d, a, M_offset_10, 23, T[39]);
      a = HH(a, b, c, d, M_offset_13, 4, T[40]);
      d = HH(d, a, b, c, M_offset_0, 11, T[41]);
      c = HH(c, d, a, b, M_offset_3, 16, T[42]);
      b = HH(b, c, d, a, M_offset_6, 23, T[43]);
      a = HH(a, b, c, d, M_offset_9, 4, T[44]);
      d = HH(d, a, b, c, M_offset_12, 11, T[45]);
      c = HH(c, d, a, b, M_offset_15, 16, T[46]);
      b = HH(b, c, d, a, M_offset_2, 23, T[47]);

      a = II(a, b, c, d, M_offset_0, 6, T[48]);
      d = II(d, a, b, c, M_offset_7, 10, T[49]);
      c = II(c, d, a, b, M_offset_14, 15, T[50]);
      b = II(b, c, d, a, M_offset_5, 21, T[51]);
      a = II(a, b, c, d, M_offset_12, 6, T[52]);
      d = II(d, a, b, c, M_offset_3, 10, T[53]);
      c = II(c, d, a, b, M_offset_10, 15, T[54]);
      b = II(b, c, d, a, M_offset_1, 21, T[55]);
      a = II(a, b, c, d, M_offset_8, 6, T[56]);
      d = II(d, a, b, c, M_offset_15, 10, T[57]);
      c = II(c, d, a, b, M_offset_6, 15, T[58]);
      b = II(b, c, d, a, M_offset_13, 21, T[59]);
      a = II(a, b, c, d, M_offset_4, 6, T[60]);
      d = II(d, a, b, c, M_offset_11, 10, T[61]);
      c = II(c, d, a, b, M_offset_2, 15, T[62]);
      b = II(b, c, d, a, M_offset_9, 21, T[63]);

      // Intermediate hash value
      H[0] = (H[0] + a) | 0;
      H[1] = (H[1] + b) | 0;
      H[2] = (H[2] + c) | 0;
      H[3] = (H[3] + d) | 0;
    }
    /* eslint-ensable no-param-reassign */

    _doFinalize() {
      // Shortcuts
      const data = this._data;
      const dataWords = data.words;

      const nBitsTotal = this._nDataBytes * 8;
      const nBitsLeft = data.sigBytes * 8;

      // Add padding
      dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));

      const nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
      const nBitsTotalL = nBitsTotal;
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
        (((nBitsTotalH << 8) | (nBitsTotalH >>> 24)) & 0x00ff00ff)
          | (((nBitsTotalH << 24) | (nBitsTotalH >>> 8)) & 0xff00ff00)
      );
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
        (((nBitsTotalL << 8) | (nBitsTotalL >>> 24)) & 0x00ff00ff)
          | (((nBitsTotalL << 24) | (nBitsTotalL >>> 8)) & 0xff00ff00)
      );

      data.sigBytes = (dataWords.length + 1) * 4;

      // Hash final blocks
      this._process();

      // Shortcuts
      const hash = this._hash;
      const H = hash.words;

      // Swap endian
      for (let i = 0; i < 4; i += 1) {
        // Shortcut
        const H_i = H[i];

        H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff)
          | (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
      }

      // Return final computed hash
      return hash;
    }

    clone() {
      const clone = super.clone.call(this);
      clone._hash = this._hash.clone();

      return clone;
    }
  }

  /**
   * Shortcut function to the hasher's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   *
   * @return {WordArray} The hash.
   *
   * @static
   *
   * @example
   *
   *     var hash = CryptoJS.MD5('message');
   *     var hash = CryptoJS.MD5(wordArray);
   */
  const MD5 = Hasher._createHelper(MD5Algo);

  /**
   * Shortcut function to the HMAC's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   * @param {WordArray|string} key The secret key.
   *
   * @return {WordArray} The HMAC.
   *
   * @static
   *
   * @example
   *
   *     var hmac = CryptoJS.HmacMD5(message, key);
   */
  const HmacMD5 = Hasher._createHmacHelper(MD5Algo);

  /**
   * This key derivation function is meant to conform with EVP_BytesToKey.
   * www.openssl.org/docs/crypto/EVP_BytesToKey.html
   */
  class EvpKDFAlgo extends Base {
    /**
     * Initializes a newly created key derivation function.
     *
     * @param {Object} cfg (Optional) The configuration options to use for the derivation.
     *
     * @example
     *
     *     const kdf = CryptoJS.algo.EvpKDF.create();
     *     const kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
     *     const kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
     */
    constructor(cfg) {
      super();

      /**
       * Configuration options.
       *
       * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
       * @property {Hasher} hasher The hash algorithm to use. Default: MD5
       * @property {number} iterations The number of iterations to perform. Default: 1
       */
      this.cfg = Object.assign(
        new Base(),
        {
          keySize: 128 / 32,
          hasher: MD5Algo,
          iterations: 1,
        },
        cfg,
      );
    }

    /**
     * Derives a key from a password.
     *
     * @param {WordArray|string} password The password.
     * @param {WordArray|string} salt A salt.
     *
     * @return {WordArray} The derived key.
     *
     * @example
     *
     *     const key = kdf.compute(password, salt);
     */
    compute(password, salt) {
      let block;

      // Shortcut
      const { cfg } = this;

      // Init hasher
      const hasher = cfg.hasher.create();

      // Initial values
      const derivedKey = WordArray.create();

      // Shortcuts
      const derivedKeyWords = derivedKey.words;
      const { keySize, iterations } = cfg;

      // Generate key
      while (derivedKeyWords.length < keySize) {
        if (block) {
          hasher.update(block);
        }
        block = hasher.update(password).finalize(salt);
        hasher.reset();

        // Iterations
        for (let i = 1; i < iterations; i += 1) {
          block = hasher.finalize(block);
          hasher.reset();
        }

        derivedKey.concat(block);
      }
      derivedKey.sigBytes = keySize * 4;

      return derivedKey;
    }
  }

  /**
   * Derives a key from a password.
   *
   * @param {WordArray|string} password The password.
   * @param {WordArray|string} salt A salt.
   * @param {Object} cfg (Optional) The configuration options to use for this computation.
   *
   * @return {WordArray} The derived key.
   *
   * @static
   *
   * @example
   *
   *     var key = CryptoJS.EvpKDF(password, salt);
   *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
   *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
   */
  const EvpKDF = (password, salt, cfg) => EvpKDFAlgo.create(cfg).compute(password, salt);

  /* eslint-disable no-use-before-define */

  /**
   * Abstract base cipher template.
   *
   * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
   * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
   * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
   * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
   */
  class Cipher extends BufferedBlockAlgorithm {
    /**
     * Initializes a newly created cipher.
     *
     * @param {number} xformMode Either the encryption or decryption transormation mode constant.
     * @param {WordArray} key The key.
     * @param {Object} cfg (Optional) The configuration options to use for this operation.
     *
     * @example
     *
     *     const cipher = CryptoJS.algo.AES.create(
     *       CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray }
     *     );
     */
    constructor(xformMode, key, cfg) {
      super();

      /**
       * Configuration options.
       *
       * @property {WordArray} iv The IV to use for this operation.
       */
      this.cfg = Object.assign(new Base(), cfg);

      // Store transform mode and key
      this._xformMode = xformMode;
      this._key = key;

      // Set initial values
      this.reset();
    }

    /**
     * Creates this cipher in encryption mode.
     *
     * @param {WordArray} key The key.
     * @param {Object} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {Cipher} A cipher instance.
     *
     * @static
     *
     * @example
     *
     *     const cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
     */
    static createEncryptor(key, cfg) {
      return this.create(this._ENC_XFORM_MODE, key, cfg);
    }

    /**
     * Creates this cipher in decryption mode.
     *
     * @param {WordArray} key The key.
     * @param {Object} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {Cipher} A cipher instance.
     *
     * @static
     *
     * @example
     *
     *     const cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
     */
    static createDecryptor(key, cfg) {
      return this.create(this._DEC_XFORM_MODE, key, cfg);
    }

    /**
     * Creates shortcut functions to a cipher's object interface.
     *
     * @param {Cipher} cipher The cipher to create a helper for.
     *
     * @return {Object} An object with encrypt and decrypt shortcut functions.
     *
     * @static
     *
     * @example
     *
     *     const AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
     */
    static _createHelper(SubCipher) {
      const selectCipherStrategy = (key) => {
        if (typeof key === 'string') {
          return PasswordBasedCipher;
        }
        return SerializableCipher;
      };

      return {
        encrypt(message, key, cfg) {
          return selectCipherStrategy(key).encrypt(SubCipher, message, key, cfg);
        },

        decrypt(ciphertext, key, cfg) {
          return selectCipherStrategy(key).decrypt(SubCipher, ciphertext, key, cfg);
        },
      };
    }

    /**
     * Resets this cipher to its initial state.
     *
     * @example
     *
     *     cipher.reset();
     */
    reset() {
      // Reset data buffer
      super.reset.call(this);

      // Perform concrete-cipher logic
      this._doReset();
    }

    /**
     * Adds data to be encrypted or decrypted.
     *
     * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
     *
     * @return {WordArray} The data after processing.
     *
     * @example
     *
     *     const encrypted = cipher.process('data');
     *     const encrypted = cipher.process(wordArray);
     */
    process(dataUpdate) {
      // Append
      this._append(dataUpdate);

      // Process available blocks
      return this._process();
    }

    /**
     * Finalizes the encryption or decryption process.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
     *
     * @return {WordArray} The data after final processing.
     *
     * @example
     *
     *     const encrypted = cipher.finalize();
     *     const encrypted = cipher.finalize('data');
     *     const encrypted = cipher.finalize(wordArray);
     */
    finalize(dataUpdate) {
      // Final data update
      if (dataUpdate) {
        this._append(dataUpdate);
      }

      // Perform concrete-cipher logic
      const finalProcessedData = this._doFinalize();

      return finalProcessedData;
    }
  }
  Cipher._ENC_XFORM_MODE = 1;
  Cipher._DEC_XFORM_MODE = 2;
  Cipher.keySize = 128 / 32;
  Cipher.ivSize = 128 / 32;

  /**
   * Abstract base stream cipher template.
   *
   * @property {number} blockSize
   *
   *     The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
   */
  class StreamCipher extends Cipher {
    constructor(...args) {
      super(...args);

      this.blockSize = 1;
    }

    _doFinalize() {
      // Process partial blocks
      const finalProcessedBlocks = this._process(!!'flush');

      return finalProcessedBlocks;
    }
  }

  /**
   * Abstract base block cipher mode template.
   */
  class BlockCipherMode extends Base {
    /**
     * Initializes a newly created mode.
     *
     * @param {Cipher} cipher A block cipher instance.
     * @param {Array} iv The IV words.
     *
     * @example
     *
     *     const mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
     */
    constructor(cipher, iv) {
      super();

      this._cipher = cipher;
      this._iv = iv;
    }

    /**
     * Creates this mode for encryption.
     *
     * @param {Cipher} cipher A block cipher instance.
     * @param {Array} iv The IV words.
     *
     * @static
     *
     * @example
     *
     *     const mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
     */
    static createEncryptor(cipher, iv) {
      return this.Encryptor.create(cipher, iv);
    }

    /**
     * Creates this mode for decryption.
     *
     * @param {Cipher} cipher A block cipher instance.
     * @param {Array} iv The IV words.
     *
     * @static
     *
     * @example
     *
     *     const mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
     */
    static createDecryptor(cipher, iv) {
      return this.Decryptor.create(cipher, iv);
    }
  }

  function xorBlock(words, offset, blockSize) {
    const _words = words;
    let block;

    // Shortcut
    const iv = this._iv;

    // Choose mixing block
    if (iv) {
      block = iv;

      // Remove IV for subsequent blocks
      this._iv = undefined;
    } else {
      block = this._prevBlock;
    }

    // XOR blocks
    for (let i = 0; i < blockSize; i += 1) {
      _words[offset + i] ^= block[i];
    }
  }

  /**
   * Cipher Block Chaining mode.
   */

  /**
   * Abstract base CBC mode.
   */
  class CBC extends BlockCipherMode {
  }
  /**
   * CBC encryptor.
   */
  CBC.Encryptor = class extends CBC {
    /**
     * Processes the data block at offset.
     *
     * @param {Array} words The data words to operate on.
     * @param {number} offset The offset where the block starts.
     *
     * @example
     *
     *     mode.processBlock(data.words, offset);
     */
    processBlock(words, offset) {
      // Shortcuts
      const cipher = this._cipher;
      const { blockSize } = cipher;

      // XOR and encrypt
      xorBlock.call(this, words, offset, blockSize);
      cipher.encryptBlock(words, offset);

      // Remember this block to use with next block
      this._prevBlock = words.slice(offset, offset + blockSize);
    }
  };
  /**
   * CBC decryptor.
   */
  CBC.Decryptor = class extends CBC {
    /**
     * Processes the data block at offset.
     *
     * @param {Array} words The data words to operate on.
     * @param {number} offset The offset where the block starts.
     *
     * @example
     *
     *     mode.processBlock(data.words, offset);
     */
    processBlock(words, offset) {
      // Shortcuts
      const cipher = this._cipher;
      const { blockSize } = cipher;

      // Remember this block to use with next block
      const thisBlock = words.slice(offset, offset + blockSize);

      // Decrypt and XOR
      cipher.decryptBlock(words, offset);
      xorBlock.call(this, words, offset, blockSize);

      // This block becomes the previous block
      this._prevBlock = thisBlock;
    }
  };

  /**
   * PKCS #5/7 padding strategy.
   */
  const Pkcs7 = {
    /**
     * Pads data using the algorithm defined in PKCS #5/7.
     *
     * @param {WordArray} data The data to pad.
     * @param {number} blockSize The multiple that the data should be padded to.
     *
     * @static
     *
     * @example
     *
     *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
     */
    pad(data, blockSize) {
      // Shortcut
      const blockSizeBytes = blockSize * 4;

      // Count padding bytes
      const nPaddingBytes = blockSizeBytes - (data.sigBytes % blockSizeBytes);

      // Create padding word
      const paddingWord = (nPaddingBytes << 24)
        | (nPaddingBytes << 16)
        | (nPaddingBytes << 8)
        | nPaddingBytes;

      // Create padding
      const paddingWords = [];
      for (let i = 0; i < nPaddingBytes; i += 4) {
        paddingWords.push(paddingWord);
      }
      const padding = WordArray.create(paddingWords, nPaddingBytes);

      // Add padding
      data.concat(padding);
    },

    /**
     * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
     *
     * @param {WordArray} data The data to unpad.
     *
     * @static
     *
     * @example
     *
     *     CryptoJS.pad.Pkcs7.unpad(wordArray);
     */
    unpad(data) {
      const _data = data;

      // Get number of padding bytes from last byte
      const nPaddingBytes = _data.words[(_data.sigBytes - 1) >>> 2] & 0xff;

      // Remove padding
      _data.sigBytes -= nPaddingBytes;
    },
  };

  /**
   * Abstract base block cipher template.
   *
   * @property {number} blockSize
   *
   *    The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
   */
  class BlockCipher extends Cipher {
    constructor(xformMode, key, cfg) {
      /**
       * Configuration options.
       *
       * @property {Mode} mode The block mode to use. Default: CBC
       * @property {Padding} padding The padding strategy to use. Default: Pkcs7
       */
      super(xformMode, key, Object.assign(
        {
          mode: CBC,
          padding: Pkcs7,
        },
        cfg,
      ));

      this.blockSize = 128 / 32;
    }

    reset() {
      let modeCreator;

      // Reset cipher
      super.reset.call(this);

      // Shortcuts
      const { cfg } = this;
      const { iv, mode } = cfg;

      // Reset block mode
      if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
        modeCreator = mode.createEncryptor;
      } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
        modeCreator = mode.createDecryptor;
        // Keep at least one block in the buffer for unpadding
        this._minBufferSize = 1;
      }

      this._mode = modeCreator.call(mode, this, iv && iv.words);
      this._mode.__creator = modeCreator;
    }

    _doProcessBlock(words, offset) {
      this._mode.processBlock(words, offset);
    }

    _doFinalize() {
      let finalProcessedBlocks;

      // Shortcut
      const { padding } = this.cfg;

      // Finalize
      if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
        // Pad data
        padding.pad(this._data, this.blockSize);

        // Process final blocks
        finalProcessedBlocks = this._process(!!'flush');
      } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
        // Process final blocks
        finalProcessedBlocks = this._process(!!'flush');

        // Unpad data
        padding.unpad(finalProcessedBlocks);
      }

      return finalProcessedBlocks;
    }
  }

  /**
   * A collection of cipher parameters.
   *
   * @property {WordArray} ciphertext The raw ciphertext.
   * @property {WordArray} key The key to this ciphertext.
   * @property {WordArray} iv The IV used in the ciphering operation.
   * @property {WordArray} salt The salt used with a key derivation function.
   * @property {Cipher} algorithm The cipher algorithm.
   * @property {Mode} mode The block mode used in the ciphering operation.
   * @property {Padding} padding The padding scheme used in the ciphering operation.
   * @property {number} blockSize The block size of the cipher.
   * @property {Format} formatter
   *    The default formatting strategy to convert this cipher params object to a string.
   */
  class CipherParams extends Base {
    /**
     * Initializes a newly created cipher params object.
     *
     * @param {Object} cipherParams An object with any of the possible cipher parameters.
     *
     * @example
     *
     *     var cipherParams = CryptoJS.lib.CipherParams.create({
     *         ciphertext: ciphertextWordArray,
     *         key: keyWordArray,
     *         iv: ivWordArray,
     *         salt: saltWordArray,
     *         algorithm: CryptoJS.algo.AES,
     *         mode: CryptoJS.mode.CBC,
     *         padding: CryptoJS.pad.PKCS7,
     *         blockSize: 4,
     *         formatter: CryptoJS.format.OpenSSL
     *     });
     */
    constructor(cipherParams) {
      super();

      this.mixIn(cipherParams);
    }

    /**
     * Converts this cipher params object to a string.
     *
     * @param {Format} formatter (Optional) The formatting strategy to use.
     *
     * @return {string} The stringified cipher params.
     *
     * @throws Error If neither the formatter nor the default formatter is set.
     *
     * @example
     *
     *     var string = cipherParams + '';
     *     var string = cipherParams.toString();
     *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
     */
    toString(formatter) {
      return (formatter || this.formatter).stringify(this);
    }
  }

  /**
   * OpenSSL formatting strategy.
   */
  const OpenSSLFormatter = {
    /**
     * Converts a cipher params object to an OpenSSL-compatible string.
     *
     * @param {CipherParams} cipherParams The cipher params object.
     *
     * @return {string} The OpenSSL-compatible string.
     *
     * @static
     *
     * @example
     *
     *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
     */
    stringify(cipherParams) {
      let wordArray;

      // Shortcuts
      const { ciphertext, salt } = cipherParams;

      // Format
      if (salt) {
        wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
      } else {
        wordArray = ciphertext;
      }

      return wordArray.toString(Base64);
    },

    /**
     * Converts an OpenSSL-compatible string to a cipher params object.
     *
     * @param {string} openSSLStr The OpenSSL-compatible string.
     *
     * @return {CipherParams} The cipher params object.
     *
     * @static
     *
     * @example
     *
     *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
     */
    parse(openSSLStr) {
      let salt;

      // Parse base64
      const ciphertext = Base64.parse(openSSLStr);

      // Shortcut
      const ciphertextWords = ciphertext.words;

      // Test for salt
      if (ciphertextWords[0] === 0x53616c74 && ciphertextWords[1] === 0x65645f5f) {
        // Extract salt
        salt = WordArray.create(ciphertextWords.slice(2, 4));

        // Remove salt from ciphertext
        ciphertextWords.splice(0, 4);
        ciphertext.sigBytes -= 16;
      }

      return CipherParams.create({ ciphertext, salt });
    },
  };

  /**
   * A cipher wrapper that returns ciphertext as a serializable cipher params object.
   */
  class SerializableCipher extends Base {
    /**
     * Encrypts a message.
     *
     * @param {Cipher} cipher The cipher algorithm to use.
     * @param {WordArray|string} message The message to encrypt.
     * @param {WordArray} key The key.
     * @param {Object} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {CipherParams} A cipher params object.
     *
     * @static
     *
     * @example
     *
     *     var ciphertextParams = CryptoJS.lib.SerializableCipher
     *       .encrypt(CryptoJS.algo.AES, message, key);
     *     var ciphertextParams = CryptoJS.lib.SerializableCipher
     *       .encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
     *     var ciphertextParams = CryptoJS.lib.SerializableCipher
     *       .encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
     */
    static encrypt(cipher, message, key, cfg) {
      // Apply config defaults
      const _cfg = Object.assign(new Base(), this.cfg, cfg);

      // Encrypt
      const encryptor = cipher.createEncryptor(key, _cfg);
      const ciphertext = encryptor.finalize(message);

      // Shortcut
      const cipherCfg = encryptor.cfg;

      // Create and return serializable cipher params
      return CipherParams.create({
        ciphertext,
        key,
        iv: cipherCfg.iv,
        algorithm: cipher,
        mode: cipherCfg.mode,
        padding: cipherCfg.padding,
        blockSize: encryptor.blockSize,
        formatter: _cfg.format,
      });
    }

    /**
     * Decrypts serialized ciphertext.
     *
     * @param {Cipher} cipher The cipher algorithm to use.
     * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
     * @param {WordArray} key The key.
     * @param {Object} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {WordArray} The plaintext.
     *
     * @static
     *
     * @example
     *
     *     var plaintext = CryptoJS.lib.SerializableCipher
     *       .decrypt(CryptoJS.algo.AES, formattedCiphertext, key,
     *         { iv: iv, format: CryptoJS.format.OpenSSL });
     *     var plaintext = CryptoJS.lib.SerializableCipher
     *       .decrypt(CryptoJS.algo.AES, ciphertextParams, key,
     *         { iv: iv, format: CryptoJS.format.OpenSSL });
     */
    static decrypt(cipher, ciphertext, key, cfg) {
      let _ciphertext = ciphertext;

      // Apply config defaults
      const _cfg = Object.assign(new Base(), this.cfg, cfg);

      // Convert string to CipherParams
      _ciphertext = this._parse(_ciphertext, _cfg.format);

      // Decrypt
      const plaintext = cipher.createDecryptor(key, _cfg).finalize(_ciphertext.ciphertext);

      return plaintext;
    }

    /**
     * Converts serialized ciphertext to CipherParams,
     * else assumed CipherParams already and returns ciphertext unchanged.
     *
     * @param {CipherParams|string} ciphertext The ciphertext.
     * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
     *
     * @return {CipherParams} The unserialized ciphertext.
     *
     * @static
     *
     * @example
     *
     *     var ciphertextParams = CryptoJS.lib.SerializableCipher
     *       ._parse(ciphertextStringOrParams, format);
     */
    static _parse(ciphertext, format) {
      if (typeof ciphertext === 'string') {
        return format.parse(ciphertext, this);
      }
      return ciphertext;
    }
  }
  /**
   * Configuration options.
   *
   * @property {Formatter} format
   *
   *    The formatting strategy to convert cipher param objects to and from a string.
   *    Default: OpenSSL
   */
  SerializableCipher.cfg = Object.assign(
    new Base(),
    { format: OpenSSLFormatter },
  );

  /**
   * OpenSSL key derivation function.
   */
  const OpenSSLKdf = {
    /**
     * Derives a key and IV from a password.
     *
     * @param {string} password The password to derive from.
     * @param {number} keySize The size in words of the key to generate.
     * @param {number} ivSize The size in words of the IV to generate.
     * @param {WordArray|string} salt
     *     (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
     *
     * @return {CipherParams} A cipher params object with the key, IV, and salt.
     *
     * @static
     *
     * @example
     *
     *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
     *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
     */
    execute(password, keySize, ivSize, salt) {
      let _salt = salt;

      // Generate random salt
      if (!_salt) {
        _salt = WordArray.random(64 / 8);
      }

      // Derive key and IV
      const key = EvpKDFAlgo.create({ keySize: keySize + ivSize }).compute(password, _salt);

      // Separate key and IV
      const iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
      key.sigBytes = keySize * 4;

      // Return params
      return CipherParams.create({ key, iv, salt: _salt });
    },
  };

  /**
   * A serializable cipher wrapper that derives the key from a password,
   * and returns ciphertext as a serializable cipher params object.
   */
  class PasswordBasedCipher extends SerializableCipher {
    /**
     * Encrypts a message using a password.
     *
     * @param {Cipher} cipher The cipher algorithm to use.
     * @param {WordArray|string} message The message to encrypt.
     * @param {string} password The password.
     * @param {Object} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {CipherParams} A cipher params object.
     *
     * @static
     *
     * @example
     *
     *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher
     *       .encrypt(CryptoJS.algo.AES, message, 'password');
     *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher
     *       .encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
     */
    static encrypt(cipher, message, password, cfg) {
      // Apply config defaults
      const _cfg = Object.assign(new Base(), this.cfg, cfg);

      // Derive key and other params
      const derivedParams = _cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

      // Add IV to config
      _cfg.iv = derivedParams.iv;

      // Encrypt
      const ciphertext = SerializableCipher.encrypt
        .call(this, cipher, message, derivedParams.key, _cfg);

      // Mix in derived params
      ciphertext.mixIn(derivedParams);

      return ciphertext;
    }

    /**
     * Decrypts serialized ciphertext using a password.
     *
     * @param {Cipher} cipher The cipher algorithm to use.
     * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
     * @param {string} password The password.
     * @param {Object} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {WordArray} The plaintext.
     *
     * @static
     *
     * @example
     *
     *     var plaintext = CryptoJS.lib.PasswordBasedCipher
     *       .decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password',
     *         { format: CryptoJS.format.OpenSSL });
     *     var plaintext = CryptoJS.lib.PasswordBasedCipher
     *       .decrypt(CryptoJS.algo.AES, ciphertextParams, 'password',
     *         { format: CryptoJS.format.OpenSSL });
     */
    static decrypt(cipher, ciphertext, password, cfg) {
      let _ciphertext = ciphertext;

      // Apply config defaults
      const _cfg = Object.assign(new Base(), this.cfg, cfg);

      // Convert string to CipherParams
      _ciphertext = this._parse(_ciphertext, _cfg.format);

      // Derive key and other params
      const derivedParams = _cfg.kdf
        .execute(password, cipher.keySize, cipher.ivSize, _ciphertext.salt);

      // Add IV to config
      _cfg.iv = derivedParams.iv;

      // Decrypt
      const plaintext = SerializableCipher.decrypt
        .call(this, cipher, _ciphertext, derivedParams.key, _cfg);

      return plaintext;
    }
  }
  /**
   * Configuration options.
   *
   * @property {KDF} kdf
   *     The key derivation function to use to generate a key and IV from a password.
   *     Default: OpenSSL
   */
  PasswordBasedCipher.cfg = Object.assign(SerializableCipher.cfg, { kdf: OpenSSLKdf });

  const swapEndian = word => ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);

  /**
   * UTF-16 BE encoding strategy.
   */
  const Utf16BE = {
    /**
     * Converts a word array to a UTF-16 BE string.
     *
     * @param {WordArray} wordArray The word array.
     *
     * @return {string} The UTF-16 BE string.
     *
     * @static
     *
     * @example
     *
     *     const utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
     */
    stringify(wordArray) {
      // Shortcuts
      const { words, sigBytes } = wordArray;

      // Convert
      const utf16Chars = [];
      for (let i = 0; i < sigBytes; i += 2) {
        const codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
        utf16Chars.push(String.fromCharCode(codePoint));
      }

      return utf16Chars.join('');
    },

    /**
     * Converts a UTF-16 BE string to a word array.
     *
     * @param {string} utf16Str The UTF-16 BE string.
     *
     * @return {WordArray} The word array.
     *
     * @static
     *
     * @example
     *
     *     const wordArray = CryptoJS.enc.Utf16.parse(utf16String);
     */
    parse(utf16Str) {
      // Shortcut
      const utf16StrLength = utf16Str.length;

      // Convert
      const words = [];
      for (let i = 0; i < utf16StrLength; i += 1) {
        words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
      }

      return WordArray.create(words, utf16StrLength * 2);
    },
  };
  const Utf16 = Utf16BE;

  /**
   * UTF-16 LE encoding strategy.
   */
  const Utf16LE = {
    /**
     * Converts a word array to a UTF-16 LE string.
     *
     * @param {WordArray} wordArray The word array.
     *
     * @return {string} The UTF-16 LE string.
     *
     * @static
     *
     * @example
     *
     *     const utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
     */
    stringify(wordArray) {
      // Shortcuts
      const { words, sigBytes } = wordArray;

      // Convert
      const utf16Chars = [];
      for (let i = 0; i < sigBytes; i += 2) {
        const codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
        utf16Chars.push(String.fromCharCode(codePoint));
      }

      return utf16Chars.join('');
    },

    /**
     * Converts a UTF-16 LE string to a word array.
     *
     * @param {string} utf16Str The UTF-16 LE string.
     *
     * @return {WordArray} The word array.
     *
     * @static
     *
     * @example
     *
     *     const wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
     */
    parse(utf16Str) {
      // Shortcut
      const utf16StrLength = utf16Str.length;

      // Convert
      const words = [];
      for (let i = 0; i < utf16StrLength; i += 1) {
        words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
      }

      return WordArray.create(words, utf16StrLength * 2);
    },
  };

  // Reusable object
  const W = [];

  /**
   * SHA-1 hash algorithm.
   */
  class SHA1Algo extends Hasher {
    _doReset() {
      this._hash = new WordArray([
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0,
      ]);
    }

    _doProcessBlock(M, offset) {
      // Shortcut
      const H = this._hash.words;

      // Working variables
      let a = H[0];
      let b = H[1];
      let c = H[2];
      let d = H[3];
      let e = H[4];

      // Computation
      for (let i = 0; i < 80; i += 1) {
        if (i < 16) {
          W[i] = M[offset + i] | 0;
        } else {
          const n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
          W[i] = (n << 1) | (n >>> 31);
        }

        let t = ((a << 5) | (a >>> 27)) + e + W[i];
        if (i < 20) {
          t += ((b & c) | (~b & d)) + 0x5a827999;
        } else if (i < 40) {
          t += (b ^ c ^ d) + 0x6ed9eba1;
        } else if (i < 60) {
          t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
        } else /* if (i < 80) */ {
          t += (b ^ c ^ d) - 0x359d3e2a;
        }

        e = d;
        d = c;
        c = (b << 30) | (b >>> 2);
        b = a;
        a = t;
      }

      // Intermediate hash value
      H[0] = (H[0] + a) | 0;
      H[1] = (H[1] + b) | 0;
      H[2] = (H[2] + c) | 0;
      H[3] = (H[3] + d) | 0;
      H[4] = (H[4] + e) | 0;
    }

    _doFinalize() {
      // Shortcuts
      const data = this._data;
      const dataWords = data.words;

      const nBitsTotal = this._nDataBytes * 8;
      const nBitsLeft = data.sigBytes * 8;

      // Add padding
      dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
      data.sigBytes = dataWords.length * 4;

      // Hash final blocks
      this._process();

      // Return final computed hash
      return this._hash;
    }

    clone() {
      const clone = super.clone.call(this);
      clone._hash = this._hash.clone();

      return clone;
    }
  }

  /**
   * Shortcut function to the hasher's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   *
   * @return {WordArray} The hash.
   *
   * @static
   *
   * @example
   *
   *     var hash = CryptoJS.SHA1('message');
   *     var hash = CryptoJS.SHA1(wordArray);
   */
  const SHA1 = Hasher._createHelper(SHA1Algo);

  /**
   * Shortcut function to the HMAC's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   * @param {WordArray|string} key The secret key.
   *
   * @return {WordArray} The HMAC.
   *
   * @static
   *
   * @example
   *
   *     var hmac = CryptoJS.HmacSHA1(message, key);
   */
  const HmacSHA1 = Hasher._createHmacHelper(SHA1Algo);

  // Initialization and round constants tables
  const H = [];
  const K = [];

  // Compute constants
  const isPrime = (n) => {
    const sqrtN = Math.sqrt(n);
    for (let factor = 2; factor <= sqrtN; factor += 1) {
      if (!(n % factor)) {
        return false;
      }
    }

    return true;
  };

  const getFractionalBits = n => ((n - (n | 0)) * 0x100000000) | 0;

  let n = 2;
  let nPrime = 0;
  while (nPrime < 64) {
    if (isPrime(n)) {
      if (nPrime < 8) {
        H[nPrime] = getFractionalBits(n ** (1 / 2));
      }
      K[nPrime] = getFractionalBits(n ** (1 / 3));

      nPrime += 1;
    }

    n += 1;
  }

  // Reusable object
  const W$1 = [];

  /**
   * SHA-256 hash algorithm.
   */
  class SHA256Algo extends Hasher {
    _doReset() {
      this._hash = new WordArray(H.slice(0));
    }

    _doProcessBlock(M, offset) {
      // Shortcut
      const _H = this._hash.words;

      // Working variables
      let a = _H[0];
      let b = _H[1];
      let c = _H[2];
      let d = _H[3];
      let e = _H[4];
      let f = _H[5];
      let g = _H[6];
      let h = _H[7];

      // Computation
      for (let i = 0; i < 64; i += 1) {
        if (i < 16) {
          W$1[i] = M[offset + i] | 0;
        } else {
          const gamma0x = W$1[i - 15];
          const gamma0 = ((gamma0x << 25) | (gamma0x >>> 7))
            ^ ((gamma0x << 14) | (gamma0x >>> 18))
            ^ (gamma0x >>> 3);

          const gamma1x = W$1[i - 2];
          const gamma1 = ((gamma1x << 15) | (gamma1x >>> 17))
            ^ ((gamma1x << 13) | (gamma1x >>> 19))
            ^ (gamma1x >>> 10);

          W$1[i] = gamma0 + W$1[i - 7] + gamma1 + W$1[i - 16];
        }

        const ch = (e & f) ^ (~e & g);
        const maj = (a & b) ^ (a & c) ^ (b & c);

        const sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
        const sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25));

        const t1 = h + sigma1 + ch + K[i] + W$1[i];
        const t2 = sigma0 + maj;

        h = g;
        g = f;
        f = e;
        e = (d + t1) | 0;
        d = c;
        c = b;
        b = a;
        a = (t1 + t2) | 0;
      }

      // Intermediate hash value
      _H[0] = (_H[0] + a) | 0;
      _H[1] = (_H[1] + b) | 0;
      _H[2] = (_H[2] + c) | 0;
      _H[3] = (_H[3] + d) | 0;
      _H[4] = (_H[4] + e) | 0;
      _H[5] = (_H[5] + f) | 0;
      _H[6] = (_H[6] + g) | 0;
      _H[7] = (_H[7] + h) | 0;
    }

    _doFinalize() {
      // Shortcuts
      const data = this._data;
      const dataWords = data.words;

      const nBitsTotal = this._nDataBytes * 8;
      const nBitsLeft = data.sigBytes * 8;

      // Add padding
      dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
      data.sigBytes = dataWords.length * 4;

      // Hash final blocks
      this._process();

      // Return final computed hash
      return this._hash;
    }

    clone() {
      const clone = super.clone.call(this);
      clone._hash = this._hash.clone();

      return clone;
    }
  }

  /**
   * Shortcut function to the hasher's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   *
   * @return {WordArray} The hash.
   *
   * @static
   *
   * @example
   *
   *     var hash = CryptoJS.SHA256('message');
   *     var hash = CryptoJS.SHA256(wordArray);
   */
  const SHA256 = Hasher._createHelper(SHA256Algo);

  /**
   * Shortcut function to the HMAC's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   * @param {WordArray|string} key The secret key.
   *
   * @return {WordArray} The HMAC.
   *
   * @static
   *
   * @example
   *
   *     var hmac = CryptoJS.HmacSHA256(message, key);
   */
  const HmacSHA256 = Hasher._createHmacHelper(SHA256Algo);

  /**
   * SHA-224 hash algorithm.
   */
  class SHA224Algo extends SHA256Algo {
    _doReset() {
      this._hash = new WordArray([
        0xc1059ed8,
        0x367cd507,
        0x3070dd17,
        0xf70e5939,
        0xffc00b31,
        0x68581511,
        0x64f98fa7,
        0xbefa4fa4,
      ]);
    }

    _doFinalize() {
      const hash = super._doFinalize.call(this);

      hash.sigBytes -= 4;

      return hash;
    }
  }

  /**
   * Shortcut function to the hasher's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   *
   * @return {WordArray} The hash.
   *
   * @static
   *
   * @example
   *
   *     var hash = CryptoJS.SHA224('message');
   *     var hash = CryptoJS.SHA224(wordArray);
   */
  const SHA224 = SHA256Algo._createHelper(SHA224Algo);

  /**
   * Shortcut function to the HMAC's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   * @param {WordArray|string} key The secret key.
   *
   * @return {WordArray} The HMAC.
   *
   * @static
   *
   * @example
   *
   *     var hmac = CryptoJS.HmacSHA224(message, key);
   */
  const HmacSHA224 = SHA256Algo._createHmacHelper(SHA224Algo);

  // Constants
  const K$1 = [
    new X64Word(0x428a2f98, 0xd728ae22),
    new X64Word(0x71374491, 0x23ef65cd),
    new X64Word(0xb5c0fbcf, 0xec4d3b2f),
    new X64Word(0xe9b5dba5, 0x8189dbbc),
    new X64Word(0x3956c25b, 0xf348b538),
    new X64Word(0x59f111f1, 0xb605d019),
    new X64Word(0x923f82a4, 0xaf194f9b),
    new X64Word(0xab1c5ed5, 0xda6d8118),
    new X64Word(0xd807aa98, 0xa3030242),
    new X64Word(0x12835b01, 0x45706fbe),
    new X64Word(0x243185be, 0x4ee4b28c),
    new X64Word(0x550c7dc3, 0xd5ffb4e2),
    new X64Word(0x72be5d74, 0xf27b896f),
    new X64Word(0x80deb1fe, 0x3b1696b1),
    new X64Word(0x9bdc06a7, 0x25c71235),
    new X64Word(0xc19bf174, 0xcf692694),
    new X64Word(0xe49b69c1, 0x9ef14ad2),
    new X64Word(0xefbe4786, 0x384f25e3),
    new X64Word(0x0fc19dc6, 0x8b8cd5b5),
    new X64Word(0x240ca1cc, 0x77ac9c65),
    new X64Word(0x2de92c6f, 0x592b0275),
    new X64Word(0x4a7484aa, 0x6ea6e483),
    new X64Word(0x5cb0a9dc, 0xbd41fbd4),
    new X64Word(0x76f988da, 0x831153b5),
    new X64Word(0x983e5152, 0xee66dfab),
    new X64Word(0xa831c66d, 0x2db43210),
    new X64Word(0xb00327c8, 0x98fb213f),
    new X64Word(0xbf597fc7, 0xbeef0ee4),
    new X64Word(0xc6e00bf3, 0x3da88fc2),
    new X64Word(0xd5a79147, 0x930aa725),
    new X64Word(0x06ca6351, 0xe003826f),
    new X64Word(0x14292967, 0x0a0e6e70),
    new X64Word(0x27b70a85, 0x46d22ffc),
    new X64Word(0x2e1b2138, 0x5c26c926),
    new X64Word(0x4d2c6dfc, 0x5ac42aed),
    new X64Word(0x53380d13, 0x9d95b3df),
    new X64Word(0x650a7354, 0x8baf63de),
    new X64Word(0x766a0abb, 0x3c77b2a8),
    new X64Word(0x81c2c92e, 0x47edaee6),
    new X64Word(0x92722c85, 0x1482353b),
    new X64Word(0xa2bfe8a1, 0x4cf10364),
    new X64Word(0xa81a664b, 0xbc423001),
    new X64Word(0xc24b8b70, 0xd0f89791),
    new X64Word(0xc76c51a3, 0x0654be30),
    new X64Word(0xd192e819, 0xd6ef5218),
    new X64Word(0xd6990624, 0x5565a910),
    new X64Word(0xf40e3585, 0x5771202a),
    new X64Word(0x106aa070, 0x32bbd1b8),
    new X64Word(0x19a4c116, 0xb8d2d0c8),
    new X64Word(0x1e376c08, 0x5141ab53),
    new X64Word(0x2748774c, 0xdf8eeb99),
    new X64Word(0x34b0bcb5, 0xe19b48a8),
    new X64Word(0x391c0cb3, 0xc5c95a63),
    new X64Word(0x4ed8aa4a, 0xe3418acb),
    new X64Word(0x5b9cca4f, 0x7763e373),
    new X64Word(0x682e6ff3, 0xd6b2b8a3),
    new X64Word(0x748f82ee, 0x5defb2fc),
    new X64Word(0x78a5636f, 0x43172f60),
    new X64Word(0x84c87814, 0xa1f0ab72),
    new X64Word(0x8cc70208, 0x1a6439ec),
    new X64Word(0x90befffa, 0x23631e28),
    new X64Word(0xa4506ceb, 0xde82bde9),
    new X64Word(0xbef9a3f7, 0xb2c67915),
    new X64Word(0xc67178f2, 0xe372532b),
    new X64Word(0xca273ece, 0xea26619c),
    new X64Word(0xd186b8c7, 0x21c0c207),
    new X64Word(0xeada7dd6, 0xcde0eb1e),
    new X64Word(0xf57d4f7f, 0xee6ed178),
    new X64Word(0x06f067aa, 0x72176fba),
    new X64Word(0x0a637dc5, 0xa2c898a6),
    new X64Word(0x113f9804, 0xbef90dae),
    new X64Word(0x1b710b35, 0x131c471b),
    new X64Word(0x28db77f5, 0x23047d84),
    new X64Word(0x32caab7b, 0x40c72493),
    new X64Word(0x3c9ebe0a, 0x15c9bebc),
    new X64Word(0x431d67c4, 0x9c100d4c),
    new X64Word(0x4cc5d4be, 0xcb3e42b6),
    new X64Word(0x597f299c, 0xfc657e2a),
    new X64Word(0x5fcb6fab, 0x3ad6faec),
    new X64Word(0x6c44198c, 0x4a475817),
  ];

  // Reusable objects
  const W$2 = [];
  for (let i = 0; i < 80; i += 1) {
    W$2[i] = new X64Word();
  }

  /**
   * SHA-512 hash algorithm.
   */
  class SHA512Algo extends Hasher {
    constructor() {
      super();

      this.blockSize = 1024 / 32;
    }

    _doReset() {
      this._hash = new X64WordArray([
        new X64Word(0x6a09e667, 0xf3bcc908),
        new X64Word(0xbb67ae85, 0x84caa73b),
        new X64Word(0x3c6ef372, 0xfe94f82b),
        new X64Word(0xa54ff53a, 0x5f1d36f1),
        new X64Word(0x510e527f, 0xade682d1),
        new X64Word(0x9b05688c, 0x2b3e6c1f),
        new X64Word(0x1f83d9ab, 0xfb41bd6b),
        new X64Word(0x5be0cd19, 0x137e2179),
      ]);
    }

    _doProcessBlock(M, offset) {
      // Shortcuts
      const H = this._hash.words;

      const H0 = H[0];
      const H1 = H[1];
      const H2 = H[2];
      const H3 = H[3];
      const H4 = H[4];
      const H5 = H[5];
      const H6 = H[6];
      const H7 = H[7];

      const H0h = H0.high;
      let H0l = H0.low;
      const H1h = H1.high;
      let H1l = H1.low;
      const H2h = H2.high;
      let H2l = H2.low;
      const H3h = H3.high;
      let H3l = H3.low;
      const H4h = H4.high;
      let H4l = H4.low;
      const H5h = H5.high;
      let H5l = H5.low;
      const H6h = H6.high;
      let H6l = H6.low;
      const H7h = H7.high;
      let H7l = H7.low;

      // Working variables
      let ah = H0h;
      let al = H0l;
      let bh = H1h;
      let bl = H1l;
      let ch = H2h;
      let cl = H2l;
      let dh = H3h;
      let dl = H3l;
      let eh = H4h;
      let el = H4l;
      let fh = H5h;
      let fl = H5l;
      let gh = H6h;
      let gl = H6l;
      let hh = H7h;
      let hl = H7l;

      // Rounds
      for (let i = 0; i < 80; i += 1) {
        let Wil;
        let Wih;

        // Shortcut
        const Wi = W$2[i];

        // Extend message
        if (i < 16) {
          Wi.high = M[offset + i * 2] | 0;
          Wih = Wi.high;
          Wi.low = M[offset + i * 2 + 1] | 0;
          Wil = Wi.low;
        } else {
          // Gamma0
          const gamma0x = W$2[i - 15];
          const gamma0xh = gamma0x.high;
          const gamma0xl = gamma0x.low;
          const gamma0h = ((gamma0xh >>> 1) | (gamma0xl << 31))
            ^ ((gamma0xh >>> 8) | (gamma0xl << 24))
            ^ (gamma0xh >>> 7);
          const gamma0l = ((gamma0xl >>> 1) | (gamma0xh << 31))
            ^ ((gamma0xl >>> 8) | (gamma0xh << 24))
            ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

          // Gamma1
          const gamma1x = W$2[i - 2];
          const gamma1xh = gamma1x.high;
          const gamma1xl = gamma1x.low;
          const gamma1h = ((gamma1xh >>> 19) | (gamma1xl << 13))
            ^ ((gamma1xh << 3) | (gamma1xl >>> 29))
            ^ (gamma1xh >>> 6);
          const gamma1l = ((gamma1xl >>> 19) | (gamma1xh << 13))
            ^ ((gamma1xl << 3) | (gamma1xh >>> 29))
            ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

          // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
          const Wi7 = W$2[i - 7];
          const Wi7h = Wi7.high;
          const Wi7l = Wi7.low;

          const Wi16 = W$2[i - 16];
          const Wi16h = Wi16.high;
          const Wi16l = Wi16.low;

          Wil = gamma0l + Wi7l;
          Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
          Wil += gamma1l;
          Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
          Wil += Wi16l;
          Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

          Wi.high = Wih;
          Wi.low = Wil;
        }

        const chh = (eh & fh) ^ (~eh & gh);
        const chl = (el & fl) ^ (~el & gl);
        const majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
        const majl = (al & bl) ^ (al & cl) ^ (bl & cl);

        const sigma0h = ((ah >>> 28) | (al << 4))
          ^ ((ah << 30) | (al >>> 2))
          ^ ((ah << 25) | (al >>> 7));
        const sigma0l = ((al >>> 28) | (ah << 4))
          ^ ((al << 30) | (ah >>> 2))
          ^ ((al << 25) | (ah >>> 7));
        const sigma1h = ((eh >>> 14) | (el << 18))
          ^ ((eh >>> 18) | (el << 14))
          ^ ((eh << 23) | (el >>> 9));
        const sigma1l = ((el >>> 14) | (eh << 18))
          ^ ((el >>> 18) | (eh << 14))
          ^ ((el << 23) | (eh >>> 9));

        // t1 = h + sigma1 + ch + K[i] + W[i]
        const Ki = K$1[i];
        const Kih = Ki.high;
        const Kil = Ki.low;

        let t1l = hl + sigma1l;
        let t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
        t1l += chl;
        t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
        t1l += Kil;
        t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
        t1l += Wil;
        t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

        // t2 = sigma0 + maj
        const t2l = sigma0l + majl;
        const t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

        // Update working variables
        hh = gh;
        hl = gl;
        gh = fh;
        gl = fl;
        fh = eh;
        fl = el;
        el = (dl + t1l) | 0;
        eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
        dh = ch;
        dl = cl;
        ch = bh;
        cl = bl;
        bh = ah;
        bl = al;
        al = (t1l + t2l) | 0;
        ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
      }

      // Intermediate hash value
      H0.low = (H0l + al);
      H0l = H0.low;
      H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
      H1.low = (H1l + bl);
      H1l = H1.low;
      H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
      H2.low = (H2l + cl);
      H2l = H2.low;
      H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
      H3.low = (H3l + dl);
      H3l = H3.low;
      H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
      H4.low = (H4l + el);
      H4l = H4.low;
      H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
      H5.low = (H5l + fl);
      H5l = H5.low;
      H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
      H6.low = (H6l + gl);
      H6l = H6.low;
      H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
      H7.low = (H7l + hl);
      H7l = H7.low;
      H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
    }

    _doFinalize() {
      // Shortcuts
      const data = this._data;
      const dataWords = data.words;

      const nBitsTotal = this._nDataBytes * 8;
      const nBitsLeft = data.sigBytes * 8;

      // Add padding
      dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
      dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
      dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
      data.sigBytes = dataWords.length * 4;

      // Hash final blocks
      this._process();

      // Convert hash to 32-bit word array before returning
      const hash = this._hash.toX32();

      // Return final computed hash
      return hash;
    }

    clone() {
      const clone = super.clone.call(this);
      clone._hash = this._hash.clone();

      return clone;
    }
  }

  /**
   * Shortcut function to the hasher's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   *
   * @return {WordArray} The hash.
   *
   * @static
   *
   * @example
   *
   *     var hash = CryptoJS.SHA512('message');
   *     var hash = CryptoJS.SHA512(wordArray);
   */
  const SHA512 = Hasher._createHelper(SHA512Algo);

  /**
   * Shortcut function to the HMAC's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   * @param {WordArray|string} key The secret key.
   *
   * @return {WordArray} The HMAC.
   *
   * @static
   *
   * @example
   *
   *     var hmac = CryptoJS.HmacSHA512(message, key);
   */
  const HmacSHA512 = Hasher._createHmacHelper(SHA512Algo);

  /**
   * SHA-384 hash algorithm.
   */
  class SHA384Algo extends SHA512Algo {
    _doReset() {
      this._hash = new X64WordArray([
        new X64Word(0xcbbb9d5d, 0xc1059ed8),
        new X64Word(0x629a292a, 0x367cd507),
        new X64Word(0x9159015a, 0x3070dd17),
        new X64Word(0x152fecd8, 0xf70e5939),
        new X64Word(0x67332667, 0xffc00b31),
        new X64Word(0x8eb44a87, 0x68581511),
        new X64Word(0xdb0c2e0d, 0x64f98fa7),
        new X64Word(0x47b5481d, 0xbefa4fa4),
      ]);
    }

    _doFinalize() {
      const hash = super._doFinalize.call(this);

      hash.sigBytes -= 16;

      return hash;
    }
  }

  /**
   * Shortcut function to the hasher's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   *
   * @return {WordArray} The hash.
   *
   * @static
   *
   * @example
   *
   *     var hash = CryptoJS.SHA384('message');
   *     var hash = CryptoJS.SHA384(wordArray);
   */
  const SHA384 = SHA512Algo._createHelper(SHA384Algo);

  /**
   * Shortcut function to the HMAC's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   * @param {WordArray|string} key The secret key.
   *
   * @return {WordArray} The HMAC.
   *
   * @static
   *
   * @example
   *
   *     var hmac = CryptoJS.HmacSHA384(message, key);
   */
  const HmacSHA384 = SHA512Algo._createHmacHelper(SHA384Algo);

  // Constants tables
  const RHO_OFFSETS = [];
  const PI_INDEXES = [];
  const ROUND_CONSTANTS = [];

  // Compute Constants
  // Compute rho offset constants
  let _x = 1;
  let _y = 0;
  for (let t = 0; t < 24; t += 1) {
    RHO_OFFSETS[_x + 5 * _y] = ((t + 1) * (t + 2) / 2) % 64;

    const newX = _y % 5;
    const newY = (2 * _x + 3 * _y) % 5;
    _x = newX;
    _y = newY;
  }

  // Compute pi index constants
  for (let x = 0; x < 5; x += 1) {
    for (let y = 0; y < 5; y += 1) {
      PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
    }
  }

  // Compute round constants
  let LFSR = 0x01;
  for (let i = 0; i < 24; i += 1) {
    let roundConstantMsw = 0;
    let roundConstantLsw = 0;

    for (let j = 0; j < 7; j += 1) {
      if (LFSR & 0x01) {
        const bitPosition = (1 << j) - 1;
        if (bitPosition < 32) {
          roundConstantLsw ^= 1 << bitPosition;
        } else /* if (bitPosition >= 32) */ {
          roundConstantMsw ^= 1 << (bitPosition - 32);
        }
      }

      // Compute next LFSR
      if (LFSR & 0x80) {
        // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
        LFSR = (LFSR << 1) ^ 0x71;
      } else {
        LFSR <<= 1;
      }
    }

    ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
  }

  // Reusable objects for temporary values
  const T$1 = [];
  for (let i = 0; i < 25; i += 1) {
    T$1[i] = X64Word.create();
  }

  /**
   * SHA-3 hash algorithm.
   */
  class SHA3Algo extends Hasher {
    constructor(cfg) {
      /**
       * Configuration options.
       *
       * @property {number} outputLength
       *   The desired number of bits in the output hash.
       *   Only values permitted are: 224, 256, 384, 512.
       *   Default: 512
       */
      super(Object.assign(
        { outputLength: 512 },
        cfg,
      ));
    }

    _doReset() {
      this._state = [];
      const state = this._state;
      for (let i = 0; i < 25; i += 1) {
        state[i] = new X64Word();
      }

      this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
    }

    _doProcessBlock(M, offset) {
      // Shortcuts
      const state = this._state;
      const nBlockSizeLanes = this.blockSize / 2;

      // Absorb
      for (let i = 0; i < nBlockSizeLanes; i += 1) {
        // Shortcuts
        let M2i = M[offset + 2 * i];
        let M2i1 = M[offset + 2 * i + 1];

        // Swap endian
        M2i = (((M2i << 8) | (M2i >>> 24)) & 0x00ff00ff)
          | (((M2i << 24) | (M2i >>> 8)) & 0xff00ff00);
        M2i1 = (((M2i1 << 8) | (M2i1 >>> 24)) & 0x00ff00ff)
          | (((M2i1 << 24) | (M2i1 >>> 8)) & 0xff00ff00);

        // Absorb message into state
        const lane = state[i];
        lane.high ^= M2i1;
        lane.low ^= M2i;
      }

      // Rounds
      for (let round = 0; round < 24; round += 1) {
        // Theta
        for (let x = 0; x < 5; x += 1) {
          // Mix column lanes
          let tMsw = 0;
          let tLsw = 0;
          for (let y = 0; y < 5; y += 1) {
            const lane = state[x + 5 * y];
            tMsw ^= lane.high;
            tLsw ^= lane.low;
          }

          // Temporary values
          const Tx = T$1[x];
          Tx.high = tMsw;
          Tx.low = tLsw;
        }
        for (let x = 0; x < 5; x += 1) {
          // Shortcuts
          const Tx4 = T$1[(x + 4) % 5];
          const Tx1 = T$1[(x + 1) % 5];
          const Tx1Msw = Tx1.high;
          const Tx1Lsw = Tx1.low;

          // Mix surrounding columns
          const tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
          const tLsw = Tx4.low ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
          for (let y = 0; y < 5; y += 1) {
            const lane = state[x + 5 * y];
            lane.high ^= tMsw;
            lane.low ^= tLsw;
          }
        }

        // Rho Pi
        for (let laneIndex = 1; laneIndex < 25; laneIndex += 1) {
          let tMsw;
          let tLsw;

          // Shortcuts
          const lane = state[laneIndex];
          const laneMsw = lane.high;
          const laneLsw = lane.low;
          const rhoOffset = RHO_OFFSETS[laneIndex];

          // Rotate lanes
          if (rhoOffset < 32) {
            tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
            tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
          } else /* if (rhoOffset >= 32) */ {
            tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
            tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
          }

          // Transpose lanes
          const TPiLane = T$1[PI_INDEXES[laneIndex]];
          TPiLane.high = tMsw;
          TPiLane.low = tLsw;
        }

        // Rho pi at x = y = 0
        const T0 = T$1[0];
        const state0 = state[0];
        T0.high = state0.high;
        T0.low = state0.low;

        // Chi
        for (let x = 0; x < 5; x += 1) {
          for (let y = 0; y < 5; y += 1) {
            // Shortcuts
            const laneIndex = x + 5 * y;
            const lane = state[laneIndex];
            const TLane = T$1[laneIndex];
            const Tx1Lane = T$1[((x + 1) % 5) + 5 * y];
            const Tx2Lane = T$1[((x + 2) % 5) + 5 * y];

            // Mix rows
            lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
            lane.low = TLane.low ^ (~Tx1Lane.low & Tx2Lane.low);
          }
        }

        // Iota
        const lane = state[0];
        const roundConstant = ROUND_CONSTANTS[round];
        lane.high ^= roundConstant.high;
        lane.low ^= roundConstant.low;
      }
    }

    _doFinalize() {
      // Shortcuts
      const data = this._data;
      const dataWords = data.words;
      const nBitsLeft = data.sigBytes * 8;
      const blockSizeBits = this.blockSize * 32;

      // Add padding
      dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - (nBitsLeft % 32));
      dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
      data.sigBytes = dataWords.length * 4;

      // Hash final blocks
      this._process();

      // Shortcuts
      const state = this._state;
      const outputLengthBytes = this.cfg.outputLength / 8;
      const outputLengthLanes = outputLengthBytes / 8;

      // Squeeze
      const hashWords = [];
      for (let i = 0; i < outputLengthLanes; i += 1) {
        // Shortcuts
        const lane = state[i];
        let laneMsw = lane.high;
        let laneLsw = lane.low;

        // Swap endian
        laneMsw = (((laneMsw << 8) | (laneMsw >>> 24)) & 0x00ff00ff)
          | (((laneMsw << 24) | (laneMsw >>> 8)) & 0xff00ff00);
        laneLsw = (((laneLsw << 8) | (laneLsw >>> 24)) & 0x00ff00ff)
          | (((laneLsw << 24) | (laneLsw >>> 8)) & 0xff00ff00);

        // Squeeze state to retrieve hash
        hashWords.push(laneLsw);
        hashWords.push(laneMsw);
      }

      // Return final computed hash
      return new WordArray(hashWords, outputLengthBytes);
    }

    clone() {
      const clone = super.clone.call(this);

      clone._state = this._state.slice(0);
      const state = clone._state;
      for (let i = 0; i < 25; i += 1) {
        state[i] = state[i].clone();
      }

      return clone;
    }
  }

  /**
   * Shortcut function to the hasher's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   *
   * @return {WordArray} The hash.
   *
   * @static
   *
   * @example
   *
   *     var hash = CryptoJS.SHA3('message');
   *     var hash = CryptoJS.SHA3(wordArray);
   */
  const SHA3 = Hasher._createHelper(SHA3Algo);

  /**
   * Shortcut function to the HMAC's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   * @param {WordArray|string} key The secret key.
   *
   * @return {WordArray} The HMAC.
   *
   * @static
   *
   * @example
   *
   *     var hmac = CryptoJS.HmacSHA3(message, key);
   */
  const HmacSHA3 = Hasher._createHmacHelper(SHA3Algo);

  /** @preserve
  (c) 2012 by Cédric Mesnil. All rights reserved.

  Redistribution and use in source and binary forms, with or without modification, are permitted
  provided that the following conditions are met:

      - Redistributions of source code must retain the above copyright notice, this list of
      conditions and the following disclaimer.
      - Redistributions in binary form must reproduce the above copyright notice, this list
      of conditions and the following disclaimer in the documentation and/or other materials
      provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
  DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
  WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */

  // Constants table
  const _zl = WordArray.create([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
    3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
    1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
    4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
  const _zr = WordArray.create([
    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
    6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
    15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
    8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
    12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
  const _sl = WordArray.create([
    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
    7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
    11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
    11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
    9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
  const _sr = WordArray.create([
    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
    9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
    9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
    15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
    8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);

  const _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
  const _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

  const f1 = (x, y, z) => (x) ^ (y) ^ (z);

  const f2 = (x, y, z) => ((x) & (y)) | ((~x) & (z));

  const f3 = (x, y, z) => ((x) | (~(y))) ^ (z);

  const f4 = (x, y, z) => ((x) & (z)) | ((y) & (~(z)));

  const f5 = (x, y, z) => (x) ^ ((y) | (~(z)));

  const rotl = (x, n) => (x << n) | (x >>> (32 - n));

  /**
   * RIPEMD160 hash algorithm.
   */
  class RIPEMD160Algo extends Hasher {
    _doReset() {
      this._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
    }

    _doProcessBlock(M, offset) {
      const _M = M;

      // Swap endian
      for (let i = 0; i < 16; i += 1) {
        // Shortcuts
        const offset_i = offset + i;
        const M_offset_i = _M[offset_i];

        // Swap
        _M[offset_i] = (
          (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff)
            | (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00)
        );
      }
      // Shortcut
      const H = this._hash.words;
      const hl = _hl.words;
      const hr = _hr.words;
      const zl = _zl.words;
      const zr = _zr.words;
      const sl = _sl.words;
      const sr = _sr.words;

      // Working variables
      let al = H[0];
      let bl = H[1];
      let cl = H[2];
      let dl = H[3];
      let el = H[4];
      let ar = H[0];
      let br = H[1];
      let cr = H[2];
      let dr = H[3];
      let er = H[4];

      // Computation
      let t;
      for (let i = 0; i < 80; i += 1) {
        t = (al + _M[offset + zl[i]]) | 0;
        if (i < 16) {
          t += f1(bl, cl, dl) + hl[0];
        } else if (i < 32) {
          t += f2(bl, cl, dl) + hl[1];
        } else if (i < 48) {
          t += f3(bl, cl, dl) + hl[2];
        } else if (i < 64) {
          t += f4(bl, cl, dl) + hl[3];
        } else { // if (i<80) {
          t += f5(bl, cl, dl) + hl[4];
        }
        t |= 0;
        t = rotl(t, sl[i]);
        t = (t + el) | 0;
        al = el;
        el = dl;
        dl = rotl(cl, 10);
        cl = bl;
        bl = t;

        t = (ar + _M[offset + zr[i]]) | 0;
        if (i < 16) {
          t += f5(br, cr, dr) + hr[0];
        } else if (i < 32) {
          t += f4(br, cr, dr) + hr[1];
        } else if (i < 48) {
          t += f3(br, cr, dr) + hr[2];
        } else if (i < 64) {
          t += f2(br, cr, dr) + hr[3];
        } else { // if (i<80) {
          t += f1(br, cr, dr) + hr[4];
        }
        t |= 0;
        t = rotl(t, sr[i]);
        t = (t + er) | 0;
        ar = er;
        er = dr;
        dr = rotl(cr, 10);
        cr = br;
        br = t;
      }
      // Intermediate hash value
      t = (H[1] + cl + dr) | 0;
      H[1] = (H[2] + dl + er) | 0;
      H[2] = (H[3] + el + ar) | 0;
      H[3] = (H[4] + al + br) | 0;
      H[4] = (H[0] + bl + cr) | 0;
      H[0] = t;
    }

    _doFinalize() {
      // Shortcuts
      const data = this._data;
      const dataWords = data.words;

      const nBitsTotal = this._nDataBytes * 8;
      const nBitsLeft = data.sigBytes * 8;

      // Add padding
      dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
        (((nBitsTotal << 8) | (nBitsTotal >>> 24)) & 0x00ff00ff)
          | (((nBitsTotal << 24) | (nBitsTotal >>> 8)) & 0xff00ff00)
      );
      data.sigBytes = (dataWords.length + 1) * 4;

      // Hash final blocks
      this._process();

      // Shortcuts
      const hash = this._hash;
      const H = hash.words;

      // Swap endian
      for (let i = 0; i < 5; i += 1) {
        // Shortcut
        const H_i = H[i];

        // Swap
        H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff)
          | (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
      }

      // Return final computed hash
      return hash;
    }

    clone() {
      const clone = super.clone.call(this);
      clone._hash = this._hash.clone();

      return clone;
    }
  }

  /**
   * Shortcut function to the hasher's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   *
   * @return {WordArray} The hash.
   *
   * @static
   *
   * @example
   *
   *     var hash = CryptoJS.RIPEMD160('message');
   *     var hash = CryptoJS.RIPEMD160(wordArray);
   */
  const RIPEMD160 = Hasher._createHelper(RIPEMD160Algo);

  /**
   * Shortcut function to the HMAC's object interface.
   *
   * @param {WordArray|string} message The message to hash.
   * @param {WordArray|string} key The secret key.
   *
   * @return {WordArray} The HMAC.
   *
   * @static
   *
   * @example
   *
   *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
   */
  const HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160Algo);

  /**
   * Password-Based Key Derivation Function 2 algorithm.
   */
  class PBKDF2Algo extends Base {
    /**
     * Initializes a newly created key derivation function.
     *
     * @param {Object} cfg (Optional) The configuration options to use for the derivation.
     *
     * @example
     *
     *     const kdf = CryptoJS.algo.PBKDF2.create();
     *     const kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
     *     const kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
     */
    constructor(cfg) {
      super();

      /**
       * Configuration options.
       *
       * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
       * @property {Hasher} hasher The hasher to use. Default: SHA1
       * @property {number} iterations The number of iterations to perform. Default: 1
       */
      this.cfg = Object.assign(
        new Base(),
        {
          keySize: 128 / 32,
          hasher: SHA1Algo,
          iterations: 1,
        },
        cfg,
      );
    }

    /**
     * Computes the Password-Based Key Derivation Function 2.
     *
     * @param {WordArray|string} password The password.
     * @param {WordArray|string} salt A salt.
     *
     * @return {WordArray} The derived key.
     *
     * @example
     *
     *     const key = kdf.compute(password, salt);
     */
    compute(password, salt) {
      // Shortcut
      const { cfg } = this;

      // Init HMAC
      const hmac = HMAC.create(cfg.hasher, password);

      // Initial values
      const derivedKey = WordArray.create();
      const blockIndex = WordArray.create([0x00000001]);

      // Shortcuts
      const derivedKeyWords = derivedKey.words;
      const blockIndexWords = blockIndex.words;
      const { keySize, iterations } = cfg;

      // Generate key
      while (derivedKeyWords.length < keySize) {
        const block = hmac.update(salt).finalize(blockIndex);
        hmac.reset();

        // Shortcuts
        const blockWords = block.words;
        const blockWordsLength = blockWords.length;

        // Iterations
        let intermediate = block;
        for (let i = 1; i < iterations; i += 1) {
          intermediate = hmac.finalize(intermediate);
          hmac.reset();

          // Shortcut
          const intermediateWords = intermediate.words;

          // XOR intermediate with block
          for (let j = 0; j < blockWordsLength; j += 1) {
            blockWords[j] ^= intermediateWords[j];
          }
        }

        derivedKey.concat(block);
        blockIndexWords[0] += 1;
      }
      derivedKey.sigBytes = keySize * 4;

      return derivedKey;
    }
  }

  /**
   * Computes the Password-Based Key Derivation Function 2.
   *
   * @param {WordArray|string} password The password.
   * @param {WordArray|string} salt A salt.
   * @param {Object} cfg (Optional) The configuration options to use for this computation.
   *
   * @return {WordArray} The derived key.
   *
   * @static
   *
   * @example
   *
   *     var key = CryptoJS.PBKDF2(password, salt);
   *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
   *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
   */
  const PBKDF2 = (password, salt, cfg) => PBKDF2Algo.create(cfg).compute(password, salt);

  // Lookup tables
  const _SBOX = [];
  const INV_SBOX = [];
  const _SUB_MIX_0 = [];
  const _SUB_MIX_1 = [];
  const _SUB_MIX_2 = [];
  const _SUB_MIX_3 = [];
  const INV_SUB_MIX_0 = [];
  const INV_SUB_MIX_1 = [];
  const INV_SUB_MIX_2 = [];
  const INV_SUB_MIX_3 = [];

  // Compute lookup tables

  // Compute double table
  const d = [];
  for (let i = 0; i < 256; i += 1) {
    if (i < 128) {
      d[i] = i << 1;
    } else {
      d[i] = (i << 1) ^ 0x11b;
    }
  }

  // Walk GF(2^8)
  let x = 0;
  let xi = 0;
  for (let i = 0; i < 256; i += 1) {
    // Compute sbox
    let sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
    sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
    _SBOX[x] = sx;
    INV_SBOX[sx] = x;

    // Compute multiplication
    const x2 = d[x];
    const x4 = d[x2];
    const x8 = d[x4];

    // Compute sub bytes, mix columns tables
    let t = (d[sx] * 0x101) ^ (sx * 0x1010100);
    _SUB_MIX_0[x] = (t << 24) | (t >>> 8);
    _SUB_MIX_1[x] = (t << 16) | (t >>> 16);
    _SUB_MIX_2[x] = (t << 8) | (t >>> 24);
    _SUB_MIX_3[x] = t;

    // Compute inv sub bytes, inv mix columns tables
    t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
    INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
    INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
    INV_SUB_MIX_2[sx] = (t << 8) | (t >>> 24);
    INV_SUB_MIX_3[sx] = t;

    // Compute next counter
    if (!x) {
      xi = 1;
      x = xi;
    } else {
      x = x2 ^ d[d[d[x8 ^ x2]]];
      xi ^= d[d[xi]];
    }
  }

  // Precomputed Rcon lookup
  const RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

  /**
   * AES block cipher algorithm.
   */
  class AESAlgo extends BlockCipher {
    _doReset() {
      let t;

      // Skip reset of nRounds has been set before and key did not change
      if (this._nRounds && this._keyPriorReset === this._key) {
        return;
      }

      // Shortcuts
      this._keyPriorReset = this._key;
      const key = this._keyPriorReset;
      const keyWords = key.words;
      const keySize = key.sigBytes / 4;

      // Compute number of rounds
      this._nRounds = keySize + 6;
      const nRounds = this._nRounds;

      // Compute number of key schedule rows
      const ksRows = (nRounds + 1) * 4;

      // Compute key schedule
      this._keySchedule = [];
      const keySchedule = this._keySchedule;
      for (let ksRow = 0; ksRow < ksRows; ksRow += 1) {
        if (ksRow < keySize) {
          keySchedule[ksRow] = keyWords[ksRow];
        } else {
          t = keySchedule[ksRow - 1];

          if (!(ksRow % keySize)) {
            // Rot word
            t = (t << 8) | (t >>> 24);

            // Sub word
            t = (_SBOX[t >>> 24] << 24)
              | (_SBOX[(t >>> 16) & 0xff] << 16)
              | (_SBOX[(t >>> 8) & 0xff] << 8)
              | _SBOX[t & 0xff];

            // Mix Rcon
            t ^= RCON[(ksRow / keySize) | 0] << 24;
          } else if (keySize > 6 && ksRow % keySize === 4) {
            // Sub word
            t = (_SBOX[t >>> 24] << 24)
              | (_SBOX[(t >>> 16) & 0xff] << 16)
              | (_SBOX[(t >>> 8) & 0xff] << 8)
              | _SBOX[t & 0xff];
          }

          keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
        }
      }

      // Compute inv key schedule
      this._invKeySchedule = [];
      const invKeySchedule = this._invKeySchedule;
      for (let invKsRow = 0; invKsRow < ksRows; invKsRow += 1) {
        const ksRow = ksRows - invKsRow;

        if (invKsRow % 4) {
          t = keySchedule[ksRow];
        } else {
          t = keySchedule[ksRow - 4];
        }

        if (invKsRow < 4 || ksRow <= 4) {
          invKeySchedule[invKsRow] = t;
        } else {
          invKeySchedule[invKsRow] = INV_SUB_MIX_0[_SBOX[t >>> 24]]
            ^ INV_SUB_MIX_1[_SBOX[(t >>> 16) & 0xff]]
            ^ INV_SUB_MIX_2[_SBOX[(t >>> 8) & 0xff]]
            ^ INV_SUB_MIX_3[_SBOX[t & 0xff]];
        }
      }
    }

    encryptBlock(M, offset) {
      this._doCryptBlock(
        M, offset, this._keySchedule, _SUB_MIX_0, _SUB_MIX_1, _SUB_MIX_2, _SUB_MIX_3, _SBOX,
      );
    }

    decryptBlock(M, offset) {
      const _M = M;

      // Swap 2nd and 4th rows
      let t = _M[offset + 1];
      _M[offset + 1] = _M[offset + 3];
      _M[offset + 3] = t;

      this._doCryptBlock(
        _M,
        offset,
        this._invKeySchedule,
        INV_SUB_MIX_0,
        INV_SUB_MIX_1,
        INV_SUB_MIX_2,
        INV_SUB_MIX_3,
        INV_SBOX,
      );

      // Inv swap 2nd and 4th rows
      t = _M[offset + 1];
      _M[offset + 1] = _M[offset + 3];
      _M[offset + 3] = t;
    }

    _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
      const _M = M;

      // Shortcut
      const nRounds = this._nRounds;

      // Get input, add round key
      let s0 = _M[offset] ^ keySchedule[0];
      let s1 = _M[offset + 1] ^ keySchedule[1];
      let s2 = _M[offset + 2] ^ keySchedule[2];
      let s3 = _M[offset + 3] ^ keySchedule[3];

      // Key schedule row counter
      let ksRow = 4;

      // Rounds
      for (let round = 1; round < nRounds; round += 1) {
        // Shift rows, sub bytes, mix columns, add round key
        const t0 = SUB_MIX_0[s0 >>> 24]
          ^ SUB_MIX_1[(s1 >>> 16) & 0xff]
          ^ SUB_MIX_2[(s2 >>> 8) & 0xff]
          ^ SUB_MIX_3[s3 & 0xff]
          ^ keySchedule[ksRow];
        ksRow += 1;
        const t1 = SUB_MIX_0[s1 >>> 24]
          ^ SUB_MIX_1[(s2 >>> 16) & 0xff]
          ^ SUB_MIX_2[(s3 >>> 8) & 0xff]
          ^ SUB_MIX_3[s0 & 0xff]
          ^ keySchedule[ksRow];
        ksRow += 1;
        const t2 = SUB_MIX_0[s2 >>> 24]
          ^ SUB_MIX_1[(s3 >>> 16) & 0xff]
          ^ SUB_MIX_2[(s0 >>> 8) & 0xff]
          ^ SUB_MIX_3[s1 & 0xff]
          ^ keySchedule[ksRow];
        ksRow += 1;
        const t3 = SUB_MIX_0[s3 >>> 24]
          ^ SUB_MIX_1[(s0 >>> 16) & 0xff]
          ^ SUB_MIX_2[(s1 >>> 8) & 0xff]
          ^ SUB_MIX_3[s2 & 0xff]
          ^ keySchedule[ksRow];
        ksRow += 1;

        // Update state
        s0 = t0;
        s1 = t1;
        s2 = t2;
        s3 = t3;
      }

      // Shift rows, sub bytes, add round key
      const t0 = (
        (SBOX[s0 >>> 24] << 24)
          | (SBOX[(s1 >>> 16) & 0xff] << 16)
          | (SBOX[(s2 >>> 8) & 0xff] << 8)
          | SBOX[s3 & 0xff]
      ) ^ keySchedule[ksRow];
      ksRow += 1;
      const t1 = (
        (SBOX[s1 >>> 24] << 24)
          | (SBOX[(s2 >>> 16) & 0xff] << 16)
          | (SBOX[(s3 >>> 8) & 0xff] << 8)
          | SBOX[s0 & 0xff]
      ) ^ keySchedule[ksRow];
      ksRow += 1;
      const t2 = (
        (SBOX[s2 >>> 24] << 24)
          | (SBOX[(s3 >>> 16) & 0xff] << 16)
          | (SBOX[(s0 >>> 8) & 0xff] << 8)
          | SBOX[s1 & 0xff]
      ) ^ keySchedule[ksRow];
      ksRow += 1;
      const t3 = (
        (SBOX[s3 >>> 24] << 24)
          | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]
      ) ^ keySchedule[ksRow];
      ksRow += 1;

      // Set output
      _M[offset] = t0;
      _M[offset + 1] = t1;
      _M[offset + 2] = t2;
      _M[offset + 3] = t3;
    }
  }
  AESAlgo.keySize = 256 / 32;

  /**
   * Shortcut functions to the cipher's object interface.
   *
   * @example
   *
   *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
   *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
   */
  const AES = BlockCipher._createHelper(AESAlgo);

  // Permuted Choice 1 constants
  const PC1 = [
    57, 49, 41, 33, 25, 17, 9, 1,
    58, 50, 42, 34, 26, 18, 10, 2,
    59, 51, 43, 35, 27, 19, 11, 3,
    60, 52, 44, 36, 63, 55, 47, 39,
    31, 23, 15, 7, 62, 54, 46, 38,
    30, 22, 14, 6, 61, 53, 45, 37,
    29, 21, 13, 5, 28, 20, 12, 4,
  ];

  // Permuted Choice 2 constants
  const PC2 = [
    14, 17, 11, 24, 1, 5,
    3, 28, 15, 6, 21, 10,
    23, 19, 12, 4, 26, 8,
    16, 7, 27, 20, 13, 2,
    41, 52, 31, 37, 47, 55,
    30, 40, 51, 45, 33, 48,
    44, 49, 39, 56, 34, 53,
    46, 42, 50, 36, 29, 32,
  ];

  // Cumulative bit shift constants
  const BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

  // SBOXes and round permutation constants
  const SBOX_P = [
    {
      0x0: 0x808200,
      0x10000000: 0x8000,
      0x20000000: 0x808002,
      0x30000000: 0x2,
      0x40000000: 0x200,
      0x50000000: 0x808202,
      0x60000000: 0x800202,
      0x70000000: 0x800000,
      0x80000000: 0x202,
      0x90000000: 0x800200,
      0xa0000000: 0x8200,
      0xb0000000: 0x808000,
      0xc0000000: 0x8002,
      0xd0000000: 0x800002,
      0xe0000000: 0x0,
      0xf0000000: 0x8202,
      0x8000000: 0x0,
      0x18000000: 0x808202,
      0x28000000: 0x8202,
      0x38000000: 0x8000,
      0x48000000: 0x808200,
      0x58000000: 0x200,
      0x68000000: 0x808002,
      0x78000000: 0x2,
      0x88000000: 0x800200,
      0x98000000: 0x8200,
      0xa8000000: 0x808000,
      0xb8000000: 0x800202,
      0xc8000000: 0x800002,
      0xd8000000: 0x8002,
      0xe8000000: 0x202,
      0xf8000000: 0x800000,
      0x1: 0x8000,
      0x10000001: 0x2,
      0x20000001: 0x808200,
      0x30000001: 0x800000,
      0x40000001: 0x808002,
      0x50000001: 0x8200,
      0x60000001: 0x200,
      0x70000001: 0x800202,
      0x80000001: 0x808202,
      0x90000001: 0x808000,
      0xa0000001: 0x800002,
      0xb0000001: 0x8202,
      0xc0000001: 0x202,
      0xd0000001: 0x800200,
      0xe0000001: 0x8002,
      0xf0000001: 0x0,
      0x8000001: 0x808202,
      0x18000001: 0x808000,
      0x28000001: 0x800000,
      0x38000001: 0x200,
      0x48000001: 0x8000,
      0x58000001: 0x800002,
      0x68000001: 0x2,
      0x78000001: 0x8202,
      0x88000001: 0x8002,
      0x98000001: 0x800202,
      0xa8000001: 0x202,
      0xb8000001: 0x808200,
      0xc8000001: 0x800200,
      0xd8000001: 0x0,
      0xe8000001: 0x8200,
      0xf8000001: 0x808002,
    },
    {
      0x0: 0x40084010,
      0x1000000: 0x4000,
      0x2000000: 0x80000,
      0x3000000: 0x40080010,
      0x4000000: 0x40000010,
      0x5000000: 0x40084000,
      0x6000000: 0x40004000,
      0x7000000: 0x10,
      0x8000000: 0x84000,
      0x9000000: 0x40004010,
      0xa000000: 0x40000000,
      0xb000000: 0x84010,
      0xc000000: 0x80010,
      0xd000000: 0x0,
      0xe000000: 0x4010,
      0xf000000: 0x40080000,
      0x800000: 0x40004000,
      0x1800000: 0x84010,
      0x2800000: 0x10,
      0x3800000: 0x40004010,
      0x4800000: 0x40084010,
      0x5800000: 0x40000000,
      0x6800000: 0x80000,
      0x7800000: 0x40080010,
      0x8800000: 0x80010,
      0x9800000: 0x0,
      0xa800000: 0x4000,
      0xb800000: 0x40080000,
      0xc800000: 0x40000010,
      0xd800000: 0x84000,
      0xe800000: 0x40084000,
      0xf800000: 0x4010,
      0x10000000: 0x0,
      0x11000000: 0x40080010,
      0x12000000: 0x40004010,
      0x13000000: 0x40084000,
      0x14000000: 0x40080000,
      0x15000000: 0x10,
      0x16000000: 0x84010,
      0x17000000: 0x4000,
      0x18000000: 0x4010,
      0x19000000: 0x80000,
      0x1a000000: 0x80010,
      0x1b000000: 0x40000010,
      0x1c000000: 0x84000,
      0x1d000000: 0x40004000,
      0x1e000000: 0x40000000,
      0x1f000000: 0x40084010,
      0x10800000: 0x84010,
      0x11800000: 0x80000,
      0x12800000: 0x40080000,
      0x13800000: 0x4000,
      0x14800000: 0x40004000,
      0x15800000: 0x40084010,
      0x16800000: 0x10,
      0x17800000: 0x40000000,
      0x18800000: 0x40084000,
      0x19800000: 0x40000010,
      0x1a800000: 0x40004010,
      0x1b800000: 0x80010,
      0x1c800000: 0x0,
      0x1d800000: 0x4010,
      0x1e800000: 0x40080010,
      0x1f800000: 0x84000,
    },
    {
      0x0: 0x104,
      0x100000: 0x0,
      0x200000: 0x4000100,
      0x300000: 0x10104,
      0x400000: 0x10004,
      0x500000: 0x4000004,
      0x600000: 0x4010104,
      0x700000: 0x4010000,
      0x800000: 0x4000000,
      0x900000: 0x4010100,
      0xa00000: 0x10100,
      0xb00000: 0x4010004,
      0xc00000: 0x4000104,
      0xd00000: 0x10000,
      0xe00000: 0x4,
      0xf00000: 0x100,
      0x80000: 0x4010100,
      0x180000: 0x4010004,
      0x280000: 0x0,
      0x380000: 0x4000100,
      0x480000: 0x4000004,
      0x580000: 0x10000,
      0x680000: 0x10004,
      0x780000: 0x104,
      0x880000: 0x4,
      0x980000: 0x100,
      0xa80000: 0x4010000,
      0xb80000: 0x10104,
      0xc80000: 0x10100,
      0xd80000: 0x4000104,
      0xe80000: 0x4010104,
      0xf80000: 0x4000000,
      0x1000000: 0x4010100,
      0x1100000: 0x10004,
      0x1200000: 0x10000,
      0x1300000: 0x4000100,
      0x1400000: 0x100,
      0x1500000: 0x4010104,
      0x1600000: 0x4000004,
      0x1700000: 0x0,
      0x1800000: 0x4000104,
      0x1900000: 0x4000000,
      0x1a00000: 0x4,
      0x1b00000: 0x10100,
      0x1c00000: 0x4010000,
      0x1d00000: 0x104,
      0x1e00000: 0x10104,
      0x1f00000: 0x4010004,
      0x1080000: 0x4000000,
      0x1180000: 0x104,
      0x1280000: 0x4010100,
      0x1380000: 0x0,
      0x1480000: 0x10004,
      0x1580000: 0x4000100,
      0x1680000: 0x100,
      0x1780000: 0x4010004,
      0x1880000: 0x10000,
      0x1980000: 0x4010104,
      0x1a80000: 0x10104,
      0x1b80000: 0x4000004,
      0x1c80000: 0x4000104,
      0x1d80000: 0x4010000,
      0x1e80000: 0x4,
      0x1f80000: 0x10100,
    },
    {
      0x0: 0x80401000,
      0x10000: 0x80001040,
      0x20000: 0x401040,
      0x30000: 0x80400000,
      0x40000: 0x0,
      0x50000: 0x401000,
      0x60000: 0x80000040,
      0x70000: 0x400040,
      0x80000: 0x80000000,
      0x90000: 0x400000,
      0xa0000: 0x40,
      0xb0000: 0x80001000,
      0xc0000: 0x80400040,
      0xd0000: 0x1040,
      0xe0000: 0x1000,
      0xf0000: 0x80401040,
      0x8000: 0x80001040,
      0x18000: 0x40,
      0x28000: 0x80400040,
      0x38000: 0x80001000,
      0x48000: 0x401000,
      0x58000: 0x80401040,
      0x68000: 0x0,
      0x78000: 0x80400000,
      0x88000: 0x1000,
      0x98000: 0x80401000,
      0xa8000: 0x400000,
      0xb8000: 0x1040,
      0xc8000: 0x80000000,
      0xd8000: 0x400040,
      0xe8000: 0x401040,
      0xf8000: 0x80000040,
      0x100000: 0x400040,
      0x110000: 0x401000,
      0x120000: 0x80000040,
      0x130000: 0x0,
      0x140000: 0x1040,
      0x150000: 0x80400040,
      0x160000: 0x80401000,
      0x170000: 0x80001040,
      0x180000: 0x80401040,
      0x190000: 0x80000000,
      0x1a0000: 0x80400000,
      0x1b0000: 0x401040,
      0x1c0000: 0x80001000,
      0x1d0000: 0x400000,
      0x1e0000: 0x40,
      0x1f0000: 0x1000,
      0x108000: 0x80400000,
      0x118000: 0x80401040,
      0x128000: 0x0,
      0x138000: 0x401000,
      0x148000: 0x400040,
      0x158000: 0x80000000,
      0x168000: 0x80001040,
      0x178000: 0x40,
      0x188000: 0x80000040,
      0x198000: 0x1000,
      0x1a8000: 0x80001000,
      0x1b8000: 0x80400040,
      0x1c8000: 0x1040,
      0x1d8000: 0x80401000,
      0x1e8000: 0x400000,
      0x1f8000: 0x401040,
    },
    {
      0x0: 0x80,
      0x1000: 0x1040000,
      0x2000: 0x40000,
      0x3000: 0x20000000,
      0x4000: 0x20040080,
      0x5000: 0x1000080,
      0x6000: 0x21000080,
      0x7000: 0x40080,
      0x8000: 0x1000000,
      0x9000: 0x20040000,
      0xa000: 0x20000080,
      0xb000: 0x21040080,
      0xc000: 0x21040000,
      0xd000: 0x0,
      0xe000: 0x1040080,
      0xf000: 0x21000000,
      0x800: 0x1040080,
      0x1800: 0x21000080,
      0x2800: 0x80,
      0x3800: 0x1040000,
      0x4800: 0x40000,
      0x5800: 0x20040080,
      0x6800: 0x21040000,
      0x7800: 0x20000000,
      0x8800: 0x20040000,
      0x9800: 0x0,
      0xa800: 0x21040080,
      0xb800: 0x1000080,
      0xc800: 0x20000080,
      0xd800: 0x21000000,
      0xe800: 0x1000000,
      0xf800: 0x40080,
      0x10000: 0x40000,
      0x11000: 0x80,
      0x12000: 0x20000000,
      0x13000: 0x21000080,
      0x14000: 0x1000080,
      0x15000: 0x21040000,
      0x16000: 0x20040080,
      0x17000: 0x1000000,
      0x18000: 0x21040080,
      0x19000: 0x21000000,
      0x1a000: 0x1040000,
      0x1b000: 0x20040000,
      0x1c000: 0x40080,
      0x1d000: 0x20000080,
      0x1e000: 0x0,
      0x1f000: 0x1040080,
      0x10800: 0x21000080,
      0x11800: 0x1000000,
      0x12800: 0x1040000,
      0x13800: 0x20040080,
      0x14800: 0x20000000,
      0x15800: 0x1040080,
      0x16800: 0x80,
      0x17800: 0x21040000,
      0x18800: 0x40080,
      0x19800: 0x21040080,
      0x1a800: 0x0,
      0x1b800: 0x21000000,
      0x1c800: 0x1000080,
      0x1d800: 0x40000,
      0x1e800: 0x20040000,
      0x1f800: 0x20000080,
    },
    {
      0x0: 0x10000008,
      0x100: 0x2000,
      0x200: 0x10200000,
      0x300: 0x10202008,
      0x400: 0x10002000,
      0x500: 0x200000,
      0x600: 0x200008,
      0x700: 0x10000000,
      0x800: 0x0,
      0x900: 0x10002008,
      0xa00: 0x202000,
      0xb00: 0x8,
      0xc00: 0x10200008,
      0xd00: 0x202008,
      0xe00: 0x2008,
      0xf00: 0x10202000,
      0x80: 0x10200000,
      0x180: 0x10202008,
      0x280: 0x8,
      0x380: 0x200000,
      0x480: 0x202008,
      0x580: 0x10000008,
      0x680: 0x10002000,
      0x780: 0x2008,
      0x880: 0x200008,
      0x980: 0x2000,
      0xa80: 0x10002008,
      0xb80: 0x10200008,
      0xc80: 0x0,
      0xd80: 0x10202000,
      0xe80: 0x202000,
      0xf80: 0x10000000,
      0x1000: 0x10002000,
      0x1100: 0x10200008,
      0x1200: 0x10202008,
      0x1300: 0x2008,
      0x1400: 0x200000,
      0x1500: 0x10000000,
      0x1600: 0x10000008,
      0x1700: 0x202000,
      0x1800: 0x202008,
      0x1900: 0x0,
      0x1a00: 0x8,
      0x1b00: 0x10200000,
      0x1c00: 0x2000,
      0x1d00: 0x10002008,
      0x1e00: 0x10202000,
      0x1f00: 0x200008,
      0x1080: 0x8,
      0x1180: 0x202000,
      0x1280: 0x200000,
      0x1380: 0x10000008,
      0x1480: 0x10002000,
      0x1580: 0x2008,
      0x1680: 0x10202008,
      0x1780: 0x10200000,
      0x1880: 0x10202000,
      0x1980: 0x10200008,
      0x1a80: 0x2000,
      0x1b80: 0x202008,
      0x1c80: 0x200008,
      0x1d80: 0x0,
      0x1e80: 0x10000000,
      0x1f80: 0x10002008,
    },
    {
      0x0: 0x100000,
      0x10: 0x2000401,
      0x20: 0x400,
      0x30: 0x100401,
      0x40: 0x2100401,
      0x50: 0x0,
      0x60: 0x1,
      0x70: 0x2100001,
      0x80: 0x2000400,
      0x90: 0x100001,
      0xa0: 0x2000001,
      0xb0: 0x2100400,
      0xc0: 0x2100000,
      0xd0: 0x401,
      0xe0: 0x100400,
      0xf0: 0x2000000,
      0x8: 0x2100001,
      0x18: 0x0,
      0x28: 0x2000401,
      0x38: 0x2100400,
      0x48: 0x100000,
      0x58: 0x2000001,
      0x68: 0x2000000,
      0x78: 0x401,
      0x88: 0x100401,
      0x98: 0x2000400,
      0xa8: 0x2100000,
      0xb8: 0x100001,
      0xc8: 0x400,
      0xd8: 0x2100401,
      0xe8: 0x1,
      0xf8: 0x100400,
      0x100: 0x2000000,
      0x110: 0x100000,
      0x120: 0x2000401,
      0x130: 0x2100001,
      0x140: 0x100001,
      0x150: 0x2000400,
      0x160: 0x2100400,
      0x170: 0x100401,
      0x180: 0x401,
      0x190: 0x2100401,
      0x1a0: 0x100400,
      0x1b0: 0x1,
      0x1c0: 0x0,
      0x1d0: 0x2100000,
      0x1e0: 0x2000001,
      0x1f0: 0x400,
      0x108: 0x100400,
      0x118: 0x2000401,
      0x128: 0x2100001,
      0x138: 0x1,
      0x148: 0x2000000,
      0x158: 0x100000,
      0x168: 0x401,
      0x178: 0x2100400,
      0x188: 0x2000001,
      0x198: 0x2100000,
      0x1a8: 0x0,
      0x1b8: 0x2100401,
      0x1c8: 0x100401,
      0x1d8: 0x400,
      0x1e8: 0x2000400,
      0x1f8: 0x100001,
    },
    {
      0x0: 0x8000820,
      0x1: 0x20000,
      0x2: 0x8000000,
      0x3: 0x20,
      0x4: 0x20020,
      0x5: 0x8020820,
      0x6: 0x8020800,
      0x7: 0x800,
      0x8: 0x8020000,
      0x9: 0x8000800,
      0xa: 0x20800,
      0xb: 0x8020020,
      0xc: 0x820,
      0xd: 0x0,
      0xe: 0x8000020,
      0xf: 0x20820,
      0x80000000: 0x800,
      0x80000001: 0x8020820,
      0x80000002: 0x8000820,
      0x80000003: 0x8000000,
      0x80000004: 0x8020000,
      0x80000005: 0x20800,
      0x80000006: 0x20820,
      0x80000007: 0x20,
      0x80000008: 0x8000020,
      0x80000009: 0x820,
      0x8000000a: 0x20020,
      0x8000000b: 0x8020800,
      0x8000000c: 0x0,
      0x8000000d: 0x8020020,
      0x8000000e: 0x8000800,
      0x8000000f: 0x20000,
      0x10: 0x20820,
      0x11: 0x8020800,
      0x12: 0x20,
      0x13: 0x800,
      0x14: 0x8000800,
      0x15: 0x8000020,
      0x16: 0x8020020,
      0x17: 0x20000,
      0x18: 0x0,
      0x19: 0x20020,
      0x1a: 0x8020000,
      0x1b: 0x8000820,
      0x1c: 0x8020820,
      0x1d: 0x20800,
      0x1e: 0x820,
      0x1f: 0x8000000,
      0x80000010: 0x20000,
      0x80000011: 0x800,
      0x80000012: 0x8020020,
      0x80000013: 0x20820,
      0x80000014: 0x20,
      0x80000015: 0x8020000,
      0x80000016: 0x8000000,
      0x80000017: 0x8000820,
      0x80000018: 0x8020820,
      0x80000019: 0x8000020,
      0x8000001a: 0x8000800,
      0x8000001b: 0x0,
      0x8000001c: 0x20800,
      0x8000001d: 0x820,
      0x8000001e: 0x20020,
      0x8000001f: 0x8020800,
    },
  ];

  // Masks that select the SBOX input
  const SBOX_MASK = [
    0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
    0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f,
  ];

  // Swap bits across the left and right words
  function exchangeLR(offset, mask) {
    const t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
    this._rBlock ^= t;
    this._lBlock ^= t << offset;
  }

  function exchangeRL(offset, mask) {
    const t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
    this._lBlock ^= t;
    this._rBlock ^= t << offset;
  }

  /**
   * DES block cipher algorithm.
   */
  class DESAlgo extends BlockCipher {
    _doReset() {
      // Shortcuts
      const key = this._key;
      const keyWords = key.words;

      // Select 56 bits according to PC1
      const keyBits = [];
      for (let i = 0; i < 56; i += 1) {
        const keyBitPos = PC1[i] - 1;
        keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - (keyBitPos % 32))) & 1;
      }

      // Assemble 16 subkeys
      this._subKeys = [];
      const subKeys = this._subKeys;
      for (let nSubKey = 0; nSubKey < 16; nSubKey += 1) {
        // Create subkey
        subKeys[nSubKey] = [];
        const subKey = subKeys[nSubKey];

        // Shortcut
        const bitShift = BIT_SHIFTS[nSubKey];

        // Select 48 bits according to PC2
        for (let i = 0; i < 24; i += 1) {
          // Select from the left 28 key bits
          subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - (i % 6));

          // Select from the right 28 key bits
          subKey[4 + ((i / 6) | 0)]
            |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)]
            << (31 - (i % 6));
        }

        // Since each subkey is applied to an expanded 32-bit input,
        // the subkey can be broken into 8 values scaled to 32-bits,
        // which allows the key to be used without expansion
        subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
        for (let i = 1; i < 7; i += 1) {
          subKey[i] >>>= ((i - 1) * 4 + 3);
        }
        subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
      }

      // Compute inverse subkeys
      this._invSubKeys = [];
      const invSubKeys = this._invSubKeys;
      for (let i = 0; i < 16; i += 1) {
        invSubKeys[i] = subKeys[15 - i];
      }
    }

    encryptBlock(M, offset) {
      this._doCryptBlock(M, offset, this._subKeys);
    }

    decryptBlock(M, offset) {
      this._doCryptBlock(M, offset, this._invSubKeys);
    }

    _doCryptBlock(M, offset, subKeys) {
      const _M = M;

      // Get input
      this._lBlock = M[offset];
      this._rBlock = M[offset + 1];

      // Initial permutation
      exchangeLR.call(this, 4, 0x0f0f0f0f);
      exchangeLR.call(this, 16, 0x0000ffff);
      exchangeRL.call(this, 2, 0x33333333);
      exchangeRL.call(this, 8, 0x00ff00ff);
      exchangeLR.call(this, 1, 0x55555555);

      // Rounds
      for (let round = 0; round < 16; round += 1) {
        // Shortcuts
        const subKey = subKeys[round];
        const lBlock = this._lBlock;
        const rBlock = this._rBlock;

        // Feistel function
        let f = 0;
        for (let i = 0; i < 8; i += 1) {
          f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
        }
        this._lBlock = rBlock;
        this._rBlock = lBlock ^ f;
      }

      // Undo swap from last round
      const t = this._lBlock;
      this._lBlock = this._rBlock;
      this._rBlock = t;

      // Final permutation
      exchangeLR.call(this, 1, 0x55555555);
      exchangeRL.call(this, 8, 0x00ff00ff);
      exchangeRL.call(this, 2, 0x33333333);
      exchangeLR.call(this, 16, 0x0000ffff);
      exchangeLR.call(this, 4, 0x0f0f0f0f);

      // Set output
      _M[offset] = this._lBlock;
      _M[offset + 1] = this._rBlock;
    }
  }
  DESAlgo.keySize = 64 / 32;
  DESAlgo.ivSize = 64 / 32;
  DESAlgo.blockSize = 64 / 32;

  /**
   * Shortcut functions to the cipher's object interface.
   *
   * @example
   *
   *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
   *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
   */
  const DES = BlockCipher._createHelper(DESAlgo);

  /**
   * Triple-DES block cipher algorithm.
   */
  class TripleDESAlgo extends BlockCipher {
    _doReset() {
      // Shortcuts
      const key = this._key;
      const keyWords = key.words;
      // Make sure the key length is valid (64, 128 or >= 192 bit)
      if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
        throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
      }

      // Extend the key according to the keying options defined in 3DES standard
      const key1 = keyWords.slice(0, 2);
      const key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
      const key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

      // Create DES instances
      this._des1 = DESAlgo.createEncryptor(WordArray.create(key1));
      this._des2 = DESAlgo.createEncryptor(WordArray.create(key2));
      this._des3 = DESAlgo.createEncryptor(WordArray.create(key3));
    }

    encryptBlock(M, offset) {
      this._des1.encryptBlock(M, offset);
      this._des2.decryptBlock(M, offset);
      this._des3.encryptBlock(M, offset);
    }

    decryptBlock(M, offset) {
      this._des3.decryptBlock(M, offset);
      this._des2.encryptBlock(M, offset);
      this._des1.decryptBlock(M, offset);
    }
  }
  TripleDESAlgo.keySize = 192 / 32;
  TripleDESAlgo.ivSize = 64 / 32;
  TripleDESAlgo.blockSize = 64 / 32;

  /**
   * Shortcut functions to the cipher's object interface.
   *
   * @example
   *
   *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
   *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
   */
  const TripleDES = BlockCipher._createHelper(TripleDESAlgo);

  // Reusable objects
  const S = [];
  const C_ = [];
  const G = [];

  function nextState() {
    // Shortcuts
    const X = this._X;
    const C = this._C;

    // Save old counter values
    for (let i = 0; i < 8; i += 1) {
      C_[i] = C[i];
    }

    // Calculate new counter values
    C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
    C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
    C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
    C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
    C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
    C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
    C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
    C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
    this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

    // Calculate the g-values
    for (let i = 0; i < 8; i += 1) {
      const gx = X[i] + C[i];

      // Construct high and low argument for squaring
      const ga = gx & 0xffff;
      const gb = gx >>> 16;

      // Calculate high and low result of squaring
      const gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
      const gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

      // High XOR low
      G[i] = gh ^ gl;
    }

    // Calculate new state values
    X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
    X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
    X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
    X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
    X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
    X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
    X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
    X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
  }

  /**
   * Rabbit stream cipher algorithm
   */
  class RabbitAlgo extends StreamCipher {
    constructor(...args) {
      super(...args);

      this.blockSize = 128 / 32;
      this.ivSize = 64 / 32;
    }

    _doReset() {
      // Shortcuts
      const K = this._key.words;
      const { iv } = this.cfg;

      // Swap endian
      for (let i = 0; i < 4; i += 1) {
        K[i] = (((K[i] << 8) | (K[i] >>> 24)) & 0x00ff00ff)
          | (((K[i] << 24) | (K[i] >>> 8)) & 0xff00ff00);
      }

      // Generate initial state values
      this._X = [
        K[0], (K[3] << 16) | (K[2] >>> 16),
        K[1], (K[0] << 16) | (K[3] >>> 16),
        K[2], (K[1] << 16) | (K[0] >>> 16),
        K[3], (K[2] << 16) | (K[1] >>> 16),
      ];
      const X = this._X;

      // Generate initial counter values
      this._C = [
        (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
        (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
        (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
        (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff),
      ];
      const C = this._C;

      // Carry bit
      this._b = 0;

      // Iterate the system four times
      for (let i = 0; i < 4; i += 1) {
        nextState.call(this);
      }

      // Modify the counters
      for (let i = 0; i < 8; i += 1) {
        C[i] ^= X[(i + 4) & 7];
      }

      // IV setup
      if (iv) {
        // Shortcuts
        const IV = iv.words;
        const IV_0 = IV[0];
        const IV_1 = IV[1];

        // Generate four subvectors
        const i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff)
          | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
        const i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff)
          | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
        const i1 = (i0 >>> 16) | (i2 & 0xffff0000);
        const i3 = (i2 << 16) | (i0 & 0x0000ffff);

        // Modify counter values
        C[0] ^= i0;
        C[1] ^= i1;
        C[2] ^= i2;
        C[3] ^= i3;
        C[4] ^= i0;
        C[5] ^= i1;
        C[6] ^= i2;
        C[7] ^= i3;

        // Iterate the system four times
        for (let i = 0; i < 4; i += 1) {
          nextState.call(this);
        }
      }
    }

    _doProcessBlock(M, offset) {
      const _M = M;

      // Shortcut
      const X = this._X;

      // Iterate the system
      nextState.call(this);

      // Generate four keystream words
      S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
      S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
      S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
      S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

      for (let i = 0; i < 4; i += 1) {
        // Swap endian
        S[i] = (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff)
          | (((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);

        // Encrypt
        _M[offset + i] ^= S[i];
      }
    }
  }

  /**
   * Shortcut functions to the cipher's object interface.
   *
   * @example
   *
   *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
   *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
   */
  const Rabbit = StreamCipher._createHelper(RabbitAlgo);

  // Reusable objects
  const S$1 = [];
  const C_$1 = [];
  const G$1 = [];

  function nextState$1() {
    // Shortcuts
    const X = this._X;
    const C = this._C;

    // Save old counter values
    for (let i = 0; i < 8; i += 1) {
      C_$1[i] = C[i];
    }

    // Calculate new counter values
    C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
    C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_$1[0] >>> 0) ? 1 : 0)) | 0;
    C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_$1[1] >>> 0) ? 1 : 0)) | 0;
    C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_$1[2] >>> 0) ? 1 : 0)) | 0;
    C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_$1[3] >>> 0) ? 1 : 0)) | 0;
    C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_$1[4] >>> 0) ? 1 : 0)) | 0;
    C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_$1[5] >>> 0) ? 1 : 0)) | 0;
    C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_$1[6] >>> 0) ? 1 : 0)) | 0;
    this._b = (C[7] >>> 0) < (C_$1[7] >>> 0) ? 1 : 0;

    // Calculate the g-values
    for (let i = 0; i < 8; i += 1) {
      const gx = X[i] + C[i];

      // Construct high and low argument for squaring
      const ga = gx & 0xffff;
      const gb = gx >>> 16;

      // Calculate high and low result of squaring
      const gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
      const gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

      // High XOR low
      G$1[i] = gh ^ gl;
    }

    // Calculate new state values
    X[0] = (G$1[0] + ((G$1[7] << 16) | (G$1[7] >>> 16)) + ((G$1[6] << 16) | (G$1[6] >>> 16))) | 0;
    X[1] = (G$1[1] + ((G$1[0] << 8) | (G$1[0] >>> 24)) + G$1[7]) | 0;
    X[2] = (G$1[2] + ((G$1[1] << 16) | (G$1[1] >>> 16)) + ((G$1[0] << 16) | (G$1[0] >>> 16))) | 0;
    X[3] = (G$1[3] + ((G$1[2] << 8) | (G$1[2] >>> 24)) + G$1[1]) | 0;
    X[4] = (G$1[4] + ((G$1[3] << 16) | (G$1[3] >>> 16)) + ((G$1[2] << 16) | (G$1[2] >>> 16))) | 0;
    X[5] = (G$1[5] + ((G$1[4] << 8) | (G$1[4] >>> 24)) + G$1[3]) | 0;
    X[6] = (G$1[6] + ((G$1[5] << 16) | (G$1[5] >>> 16)) + ((G$1[4] << 16) | (G$1[4] >>> 16))) | 0;
    X[7] = (G$1[7] + ((G$1[6] << 8) | (G$1[6] >>> 24)) + G$1[5]) | 0;
  }

  /**
   * Rabbit stream cipher algorithm.
   *
   * This is a legacy version that neglected to convert the key to little-endian.
   * This error doesn't affect the cipher's security,
   * but it does affect its compatibility with other implementations.
   */
  class RabbitLegacyAlgo extends StreamCipher {
    constructor(...args) {
      super(...args);

      this.blockSize = 128 / 32;
      this.ivSize = 64 / 32;
    }

    _doReset() {
      // Shortcuts
      const K = this._key.words;
      const { iv } = this.cfg;

      // Generate initial state values
      this._X = [
        K[0], (K[3] << 16) | (K[2] >>> 16),
        K[1], (K[0] << 16) | (K[3] >>> 16),
        K[2], (K[1] << 16) | (K[0] >>> 16),
        K[3], (K[2] << 16) | (K[1] >>> 16),
      ];
      const X = this._X;

      // Generate initial counter values
      this._C = [
        (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
        (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
        (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
        (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff),
      ];
      const C = this._C;

      // Carry bit
      this._b = 0;

      // Iterate the system four times
      for (let i = 0; i < 4; i += 1) {
        nextState$1.call(this);
      }

      // Modify the counters
      for (let i = 0; i < 8; i += 1) {
        C[i] ^= X[(i + 4) & 7];
      }

      // IV setup
      if (iv) {
        // Shortcuts
        const IV = iv.words;
        const IV_0 = IV[0];
        const IV_1 = IV[1];

        // Generate four subvectors
        const i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff)
          | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
        const i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff)
          | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
        const i1 = (i0 >>> 16) | (i2 & 0xffff0000);
        const i3 = (i2 << 16) | (i0 & 0x0000ffff);

        // Modify counter values
        C[0] ^= i0;
        C[1] ^= i1;
        C[2] ^= i2;
        C[3] ^= i3;
        C[4] ^= i0;
        C[5] ^= i1;
        C[6] ^= i2;
        C[7] ^= i3;

        // Iterate the system four times
        for (let i = 0; i < 4; i += 1) {
          nextState$1.call(this);
        }
      }
    }

    _doProcessBlock(M, offset) {
      const _M = M;

      // Shortcut
      const X = this._X;

      // Iterate the system
      nextState$1.call(this);

      // Generate four keystream words
      S$1[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
      S$1[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
      S$1[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
      S$1[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

      for (let i = 0; i < 4; i += 1) {
        // Swap endian
        S$1[i] = (((S$1[i] << 8) | (S$1[i] >>> 24)) & 0x00ff00ff)
          | (((S$1[i] << 24) | (S$1[i] >>> 8)) & 0xff00ff00);

        // Encrypt
        _M[offset + i] ^= S$1[i];
      }
    }
  }

  /**
   * Shortcut functions to the cipher's object interface.
   *
   * @example
   *
   *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
   *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
   */
  const RabbitLegacy = StreamCipher._createHelper(RabbitLegacyAlgo);

  function generateKeystreamWord() {
    // Shortcuts
    const S = this._S;
    let i = this._i;
    let j = this._j;

    // Generate keystream word
    let keystreamWord = 0;
    for (let n = 0; n < 4; n += 1) {
      i = (i + 1) % 256;
      j = (j + S[i]) % 256;

      // Swap
      const t = S[i];
      S[i] = S[j];
      S[j] = t;

      keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
    }

    // Update counters
    this._i = i;
    this._j = j;

    return keystreamWord;
  }

  /**
   * RC4 stream cipher algorithm.
   */
  class RC4Algo extends StreamCipher {
    _doReset() {
      // Shortcuts
      const key = this._key;
      const keyWords = key.words;
      const keySigBytes = key.sigBytes;

      // Init sbox
      this._S = [];
      const S = this._S;
      for (let i = 0; i < 256; i += 1) {
        S[i] = i;
      }

      // Key setup
      for (let i = 0, j = 0; i < 256; i += 1) {
        const keyByteIndex = i % keySigBytes;
        const keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

        j = (j + S[i] + keyByte) % 256;

        // Swap
        const t = S[i];
        S[i] = S[j];
        S[j] = t;
      }

      // Counters
      this._j = 0;
      this._i = this._j;
    }

    _doProcessBlock(M, offset) {
      const _M = M;

      _M[offset] ^= generateKeystreamWord.call(this);
    }
  }
  RC4Algo.keySize = 256 / 32;
  RC4Algo.ivSize = 0;

  /**
   * Shortcut functions to the cipher's object interface.
   *
   * @example
   *
   *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
   *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
   */
  const RC4 = StreamCipher._createHelper(RC4Algo);

  /**
   * Modified RC4 stream cipher algorithm.
   */
  class RC4DropAlgo extends RC4Algo {
    constructor(...args) {
      super(...args);

      /**
       * Configuration options.
       *
       * @property {number} drop The number of keystream words to drop. Default 192
       */
      Object.assign(this.cfg, { drop: 192 });
    }

    _doReset() {
      super._doReset.call(this);

      // Drop
      for (let i = this.cfg.drop; i > 0; i -= 1) {
        generateKeystreamWord.call(this);
      }
    }
  }

  /**
   * Shortcut functions to the cipher's object interface.
   *
   * @example
   *
   *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
   *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
   */
  const RC4Drop = StreamCipher._createHelper(RC4DropAlgo);

  function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
    const _words = words;
    let keystream;

    // Shortcut
    const iv = this._iv;

    // Generate keystream
    if (iv) {
      keystream = iv.slice(0);

      // Remove IV for subsequent blocks
      this._iv = undefined;
    } else {
      keystream = this._prevBlock;
    }
    cipher.encryptBlock(keystream, 0);

    // Encrypt
    for (let i = 0; i < blockSize; i += 1) {
      _words[offset + i] ^= keystream[i];
    }
  }

  /**
   * Cipher Feedback block mode.
   */
  class CFB extends BlockCipherMode {
  }
  CFB.Encryptor = class extends CFB {
    processBlock(words, offset) {
      // Shortcuts
      const cipher = this._cipher;
      const { blockSize } = cipher;

      generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

      // Remember this block to use with next block
      this._prevBlock = words.slice(offset, offset + blockSize);
    }
  };
  CFB.Decryptor = class extends CFB {
    processBlock(words, offset) {
      // Shortcuts
      const cipher = this._cipher;
      const { blockSize } = cipher;

      // Remember this block to use with next block
      const thisBlock = words.slice(offset, offset + blockSize);

      generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

      // This block becomes the previous block
      this._prevBlock = thisBlock;
    }
  };

  /**
   * Counter block mode.
   */

  class CTR extends BlockCipherMode {
  }
  CTR.Encryptor = class extends CTR {
    processBlock(words, offset) {
      const _words = words;

      // Shortcuts
      const cipher = this._cipher;
      const { blockSize } = cipher;
      const iv = this._iv;
      let counter = this._counter;

      // Generate keystream
      if (iv) {
        this._counter = iv.slice(0);
        counter = this._counter;

        // Remove IV for subsequent blocks
        this._iv = undefined;
      }
      const keystream = counter.slice(0);
      cipher.encryptBlock(keystream, 0);

      // Increment counter
      counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0;

      // Encrypt
      for (let i = 0; i < blockSize; i += 1) {
        _words[offset + i] ^= keystream[i];
      }
    }
  };
  CTR.Decryptor = CTR.Encryptor;

  const incWord = (word) => {
    let _word = word;

    if (((word >> 24) & 0xff) === 0xff) { // overflow
      let b1 = (word >> 16) & 0xff;
      let b2 = (word >> 8) & 0xff;
      let b3 = word & 0xff;

      if (b1 === 0xff) { // overflow b1
        b1 = 0;
        if (b2 === 0xff) {
          b2 = 0;
          if (b3 === 0xff) {
            b3 = 0;
          } else {
            b3 += 1;
          }
        } else {
          b2 += 1;
        }
      } else {
        b1 += 1;
      }

      _word = 0;
      _word += (b1 << 16);
      _word += (b2 << 8);
      _word += b3;
    } else {
      _word += (0x01 << 24);
    }
    return _word;
  };

  const incCounter = (counter) => {
    const _counter = counter;
    _counter[0] = incWord(_counter[0]);

    if (_counter[0] === 0) {
      // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
      _counter[1] = incWord(_counter[1]);
    }
    return _counter;
  };

  /** @preserve
   * Counter block mode compatible with  Dr Brian Gladman fileenc.c
   * derived from CryptoJS.mode.CTR
   * Jan Hruby jhruby.web@gmail.com
   */
  class CTRGladman extends BlockCipherMode {
  }
  CTRGladman.Encryptor = class extends CTRGladman {
    processBlock(words, offset) {
      const _words = words;

      // Shortcuts
      const cipher = this._cipher;
      const { blockSize } = cipher;
      const iv = this._iv;
      let counter = this._counter;

      // Generate keystream
      if (iv) {
        this._counter = iv.slice(0);
        counter = this._counter;

        // Remove IV for subsequent blocks
        this._iv = undefined;
      }

      incCounter(counter);

      const keystream = counter.slice(0);
      cipher.encryptBlock(keystream, 0);

      // Encrypt
      for (let i = 0; i < blockSize; i += 1) {
        _words[offset + i] ^= keystream[i];
      }
    }
  };
  CTRGladman.Decryptor = CTRGladman.Encryptor;

  /**
   * Electronic Codebook block mode.
   */

  class ECB extends BlockCipherMode {
  }
  ECB.Encryptor = class extends ECB {
    processBlock(words, offset) {
      this._cipher.encryptBlock(words, offset);
    }
  };
  ECB.Decryptor = class extends ECB {
    processBlock(words, offset) {
      this._cipher.decryptBlock(words, offset);
    }
  };

  /**
   * Output Feedback block mode.
   */

  class OFB extends BlockCipherMode {
  }
  OFB.Encryptor = class extends OFB {
    processBlock(words, offset) {
      const _words = words;

      // Shortcuts
      const cipher = this._cipher;
      const { blockSize } = cipher;
      const iv = this._iv;
      let keystream = this._keystream;

      // Generate keystream
      if (iv) {
        this._keystream = iv.slice(0);
        keystream = this._keystream;

        // Remove IV for subsequent blocks
        this._iv = undefined;
      }
      cipher.encryptBlock(keystream, 0);

      // Encrypt
      for (let i = 0; i < blockSize; i += 1) {
        _words[offset + i] ^= keystream[i];
      }
    }
  };
  OFB.Decryptor = OFB.Encryptor;

  /**
   * ANSI X.923 padding strategy.
   */
  const AnsiX923 = {
    pad(data, blockSize) {
      const _data = data;

      // Shortcuts
      const dataSigBytes = _data.sigBytes;
      const blockSizeBytes = blockSize * 4;

      // Count padding bytes
      const nPaddingBytes = blockSizeBytes - (dataSigBytes % blockSizeBytes);

      // Compute last byte position
      const lastBytePos = dataSigBytes + nPaddingBytes - 1;

      // Pad
      _data.clamp();
      _data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
      _data.sigBytes += nPaddingBytes;
    },

    unpad(data) {
      const _data = data;

      // Get number of padding bytes from last byte
      const nPaddingBytes = _data.words[(_data.sigBytes - 1) >>> 2] & 0xff;

      // Remove padding
      _data.sigBytes -= nPaddingBytes;
    },
  };

  /**
   * ISO 10126 padding strategy.
   */
  const Iso10126 = {
    pad(data, blockSize) {
      // Shortcut
      const blockSizeBytes = blockSize * 4;

      // Count padding bytes
      const nPaddingBytes = blockSizeBytes - (data.sigBytes % blockSizeBytes);

      // Pad
      data
        .concat(WordArray.random(nPaddingBytes - 1))
        .concat(WordArray.create([nPaddingBytes << 24], 1));
    },

    unpad(data) {
      const _data = data;
      // Get number of padding bytes from last byte
      const nPaddingBytes = _data.words[(_data.sigBytes - 1) >>> 2] & 0xff;

      // Remove padding
      _data.sigBytes -= nPaddingBytes;
    },
  };

  /**
   * Zero padding strategy.
   */
  const ZeroPadding = {
    pad(data, blockSize) {
      const _data = data;

      // Shortcut
      const blockSizeBytes = blockSize * 4;

      // Pad
      _data.clamp();
      _data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
    },

    unpad(data) {
      const _data = data;

      // Shortcut
      const dataWords = _data.words;

      // Unpad
      for (let i = _data.sigBytes - 1; i >= 0; i -= 1) {
        if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
          _data.sigBytes = i + 1;
          break;
        }
      }
    },
  };

  /**
   * ISO/IEC 9797-1 Padding Method 2.
   */
  const Iso97971 = {
    pad(data, blockSize) {
      // Add 0x80 byte
      data.concat(WordArray.create([0x80000000], 1));

      // Zero pad the rest
      ZeroPadding.pad(data, blockSize);
    },

    unpad(data) {
      const _data = data;

      // Remove zero padding
      ZeroPadding.unpad(_data);

      // Remove one more byte -- the 0x80 byte
      _data.sigBytes -= 1;
    },
  };

  /**
   * A noop padding strategy.
   */
  const NoPadding = {
    pad() {
    },

    unpad() {
    },
  };

  const HexFormatter = {
    /**
     * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
     *
     * @param {CipherParams} cipherParams The cipher params object.
     *
     * @return {string} The hexadecimally encoded string.
     *
     * @static
     *
     * @example
     *
     *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
     */
    stringify(cipherParams) {
      return cipherParams.ciphertext.toString(Hex);
    },

    /**
     * Converts a hexadecimally encoded ciphertext string to a cipher params object.
     *
     * @param {string} input The hexadecimally encoded string.
     *
     * @return {CipherParams} The cipher params object.
     *
     * @static
     *
     * @example
     *
     *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
     */
    parse(input) {
      const ciphertext = Hex.parse(input);
      return CipherParams.create({ ciphertext });
    },
  };

  var crypto$1 = {
    lib: {
      Base,
      WordArray,
      BufferedBlockAlgorithm,
      Hasher,
      Cipher,
      StreamCipher,
      BlockCipherMode,
      BlockCipher,
      CipherParams,
      SerializableCipher,
      PasswordBasedCipher,
    },

    x64: {
      Word: X64Word,
      WordArray: X64WordArray,
    },

    enc: {
      Hex,
      Latin1,
      Utf8,
      Utf16,
      Utf16BE,
      Utf16LE,
      Base64,
    },

    algo: {
      HMAC,
      MD5: MD5Algo,
      SHA1: SHA1Algo,
      SHA224: SHA224Algo,
      SHA256: SHA256Algo,
      SHA384: SHA384Algo,
      SHA512: SHA512Algo,
      SHA3: SHA3Algo,
      RIPEMD160: RIPEMD160Algo,

      PBKDF2: PBKDF2Algo,
      EvpKDF: EvpKDFAlgo,

      AES: AESAlgo,
      DES: DESAlgo,
      TripleDES: TripleDESAlgo,
      Rabbit: RabbitAlgo,
      RabbitLegacy: RabbitLegacyAlgo,
      RC4: RC4Algo,
      RC4Drop: RC4DropAlgo,
    },

    mode: {
      CBC,
      CFB,
      CTR,
      CTRGladman,
      ECB,
      OFB,
    },

    pad: {
      Pkcs7,
      AnsiX923,
      Iso10126,
      Iso97971,
      NoPadding,
      ZeroPadding,
    },

    format: {
      OpenSSL: OpenSSLFormatter,
      Hex: HexFormatter,
    },

    kdf: {
      OpenSSL: OpenSSLKdf,
    },

    MD5,
    HmacMD5,
    SHA1,
    HmacSHA1,
    SHA224,
    HmacSHA224,
    SHA256,
    HmacSHA256,
    SHA384,
    HmacSHA384,
    SHA512,
    HmacSHA512,
    SHA3,
    HmacSHA3,
    RIPEMD160,
    HmacRIPEMD160,

    PBKDF2,
    EvpKDF,

    AES,
    DES,
    TripleDES,
    Rabbit,
    RabbitLegacy,
    RC4,
    RC4Drop,
  };

  /**
   * @file SDK上报数据加签需求  https://confluence.mobvista.com/pages/viewpage.action?pageId=82907981
   */
  /**
   * 生成签名key
   * 最终生成签名key为 solarengine2023
   */

  function createSignKey() {
    return [115, 111, 108, 97, 114, 101, 110, 103, 105, 110, 101, 50, 48, 50, 51].map(function (v) {
      return String.fromCharCode(v);
    }).join('');
  }
  /**
   * 生成签名数据
   */


  function createSignData(reportData) {
    var data = ['_appkey', '_account_id', '_distinct_id', '_event_id', '_event_name', '_session_id', '_tenant_id', '_ts', '_visitor_id'].sort() // 按照起始字母的ASCII码升序排列
    .filter(function (key) {
      return reportData[key] || reportData[key] === 0;
    }) // 过滤掉空值
    .map(function (key) {
      return key + "=" + reportData[key];
    }).join('&');
    return data;
  }
  /**
   * 生成签名
   */


  function createSign(reportData) {
    var key = createSignKey();
    var data = createSignData(reportData);
    var signed = crypto$1.HmacMD5(data, key).toString();
    return signed;
  }

  /**
   * 上报SDK内部日志事件
   * @param {*} customProperties
   */

  function trackLogEvent(customProperties) {
    if (customProperties === void 0) {
      customProperties = {};
    }

    // 如果是debugModel环境且不是_appInstall事件则继续上报
    if (JSSDK.getStateData('debugModel') && ![5, 6].includes(customProperties.state)) {
      return;
    }

    if (JSSDK.isXcxEnv()) {
      // 小程序需要加上当前的开发环境
      customProperties.env_version = __wxConfig.envVersion;
    }

    var reportData = JSSDK.getStateData('reportData');
    var params = [_extends({}, reportData, {
      _ts: Date.now(),
      _event_id: generateUUID(),
      _appkey: '91c316e1b444a0e9',
      _tenant_id: '302948fdd2be46e6',
      _type: 'event',
      _event_name: 'sesdk_record_log',
      _event_type: -1,
      properties: _extends({}, reportData.properties),
      custom_properties: _extends({
        user_appkey: reportData._appkey,
        user_tenantId: reportData._tenant_id,
        user_debugModel: JSSDK.getStateData('debugModel')
      }, customProperties)
    })]; // 上报数据前生成签名

    params[0].properties._si = createSign(params[0]);
    var stroageLogList = JSSDK.Storage.getItem(STORAGE_LOG_EVENT_QUEUE, true, []);

    if (stroageLogList.length) {
      params = (_readOnlyError("params"), params.concat(stroageLogList));
      JSSDK.Storage.deleteItem(STORAGE_LOG_EVENT_QUEUE);
    } // 上报流程


    postProcess(params);
  }

  function postProcess(postParams, postRetryTimes) {
    if (postRetryTimes === void 0) {
      postRetryTimes = POST_FAIL_RETRY_TIMES;
    }

    // 发送请求
    JSSDK.HttpHelper.post(API.sendReportData, postParams).then(function (res) {
      // 如果http请求状态码返回200
      if (res.httpStatusCode !== 200) {
        postProcessRetry(postParams, postRetryTimes);
      }
    })["catch"](function (error) {
      postProcessRetry(postParams, postRetryTimes);
    });
  }

  function postProcessRetry(postParams, postRetryTimes) {
    // 上报失败后继续重试，最多重试3次
    if (postRetryTimes > 0) {
      postRetryTimes--;
      postProcess(postParams, postRetryTimes);
    } else {
      // 最多存100条异常数据
      if (postParams.length > 100) {
        postParams = postParams.slice(0, 100);
      }

      JSSDK.Storage.setItem(STORAGE_LOG_EVENT_QUEUE, postParams, null, true);
    }
  }

  JSSDK.extend({
    trackLogEvent: trackLogEvent
  });

  /**
   * 记录事件
   * 把事件写入本地存储中。why：
   * - 微信小程序要等到获取到openid后才能上报；或者5分钟后（不管有无获取到openid）才能上报；
   * - 当前网络情况不佳/离线时，写入本地存储中，可防止事件丢失
   *
   * 注意：
   * - 写入本地存储的数据，必须是经过校验的、可直接调用接口上报的数据
   * @param originalEventName 事件名
   * @param properties 放到properties下，sdk内部采集属性
   * @param customProperties 放到custom_properties下，开发者自定义属性
   * @param outLayerProperties 外层属性
   */

  function trackEvent(originalEventName, properties, customProperties, outLayerProperties) {
    if (customProperties === void 0) {
      customProperties = {};
    }

    if (outLayerProperties === void 0) {
      outLayerProperties = {};
    }

    JSSDK.NATIVE.ready(function () {
      // 添加try...catch，防止报错，影响用户后续代码的正常执行
      try {
        var eventName = getCurEnvEventName(originalEventName);
        updateTrackEventData(eventName);
        var reportData = JSSDK.getStateData('reportData');
        var externalReportData = JSSDK.getStateData('externalReportData');
        var params = [_extends({}, reportData, outLayerProperties, {
          _ts: Date.now(),
          _event_id: generateUUID(),
          _type: 'event',
          _event_name: eventName,

          /**
           * 事件类型
           * -1 SDK 日志事件
           * 1 SDK自动采集的预置事件(安装、启动、退出)
           * 2 SDK自动采集的预定义事件(浏览、点击、分流)
           * 3 开发者触发的预定义事件(浏览、点击、支付、展示、登录、注册、订单、变现广告点击、自归因)
           * 4 开发者自定义事件
           */
          _event_type: outLayerProperties._event_type || 3,
          properties: _extends({}, reportData.properties, properties),
          custom_properties: _extends({}, reportData.custom_properties, externalReportData.superProperties, customProperties)
        })]; // web端的debug模式下，直接上报，无需本地存储处理

        if (JSSDK.getStateData('systemEnv') === 0 && JSSDK.getStateData('debugModel')) {
          setEventFlag(eventName, true);
          return postDebugEvent(params);
        }

        var isXcxDebug = JSSDK.getStateData('systemEnv') === 1 && JSSDK.getStateData('debugModel');
        var stroageIsError = writeEventQueueToLocalStorage(eventName, params, outLayerProperties._event_type !== -1 && !isXcxDebug);

        if (stroageIsError) {
          // 如果当前事件存不下，则直接走网络请求
          return postEventRequest(getReportUrl(), params);
        }

        postEvent();
      } catch (error) {
        console.warn('trackEvent code error', error);
      }
    });
  }

  function getReportUrl() {
    // 请求链接需要区分是否调试模式
    var isXcxDebug = JSSDK.getStateData('systemEnv') === 1 && JSSDK.getStateData('debugModel');
    var reportUrl = isXcxDebug ? API.sendDebugReportData : JSSDK.getStateData('customURL') || API.sendReportData;
    return reportUrl;
  }
  /**
   * 上报事件
   * 从本地存储中获取事件，通过接口上报给服务端
   */


  function postEvent() {
    var eventQueue = JSSDK.Storage.getItem(STORAGE_EVENT_QUEUE, true, []); // 没有待上报的数据时

    if (eventQueue.length === 0) {
      return;
    }

    if (isCanPostEvent() === false) {
      return;
    } // 开启正式上报流程...
    // 事件合并


    var combinedEventItems = eventQueue.splice(0, MAX_POST_NUM);
    var submittingEventIds = [];
    var postParams = combinedEventItems.map(function (ceItem) {
      // 状态更新
      ceItem.status = 'submitting';
      submittingEventIds.push(ceItem.params[0]._event_id);
      var curParam = ceItem.params[0]; // 微信小程序，需要更新事件的_distinct_id

      if (JSSDK.isXcxEnv()) {
        curParam._distinct_id = JSSDK.getStateData('reportData._distinct_id');
        curParam._distinct_id_type = JSSDK.getStateData('reportData._distinct_id_type');
      }

      curParam._visitor_id = JSSDK.getStateData('reportData._visitor_id');

      if (curParam._type !== 'userset') {
        curParam.properties._group_id_list = JSSDK.getStateData('reportData.properties._group_id_list');
        curParam.properties._experiment_group_id_list = JSSDK.getStateData('reportData.properties._experiment_group_id_list');
        curParam.properties._combination_id = JSSDK.getStateData('reportData.properties._combination_id');
      } // 上报数据前生成签名


      curParam.properties._si = createSign(curParam);
      return curParam;
    }); // 回写

    eventQueue.unshift.apply(eventQueue, combinedEventItems);
    JSSDK.Storage.setItem(STORAGE_EVENT_QUEUE, eventQueue);
    JSSDK.Storage.setItem(STORAGE_SUBMITTING_EVENT_ID, submittingEventIds);
    postEventRequest(getReportUrl(), postParams);
  }
  /**
   * 上报事件请求
   * @param {*} postParams 请求参数
   * @param {*} postRetryTimes 剩余重试次数
   */

  function postEventRequest(reportUrl, postParams, postRetryTimes) {
    if (postRetryTimes === void 0) {
      postRetryTimes = POST_FAIL_RETRY_TIMES;
    }

    if (JSSDK.getStateData('logEnabled') && postRetryTimes === POST_FAIL_RETRY_TIMES) {
      infoLog('report data list', postParams);
    } // 发送请求


    JSSDK.HttpHelper.post(reportUrl, postParams).then(function (res) {
      // 如果http请求状态码返回200
      if (res.httpStatusCode === 200) {
        // 从本地缓存队列中移除已上报的事件
        // 【注意】： 应该实时读取本地存储中的eventQueue，而不应该用之前读取到的eventQueue。
        // 因为可能已经有新的事件被添加进来了，用之前读取到的内存中的eventQueue的话会导致重新覆盖写入事件队列时，导致事件丢失。
        var successPostEventQueue = JSSDK.Storage.getItem(STORAGE_EVENT_QUEUE, true, []); // 方式1：干掉和合并数组相同长度的
        // successPostEventQueue.splice(0, combinedEventItems.length);
        // 方式2：干掉status为submitting的

        var toSubmitEvents = successPostEventQueue.filter(function (eventItem) {
          return eventItem.status === 'toSubmit';
        });
        JSSDK.Storage.setItem(STORAGE_EVENT_QUEUE, toSubmitEvents); // 继续上报，直至全部上报完毕

        postEvent();
      } else {
        postEventRetry(reportUrl, postParams, postRetryTimes, res.msg, res.status);
      }
    })["catch"](function (error) {
      postEventRetry(reportUrl, postParams, postRetryTimes, (error == null ? void 0 : error.message) || error, (error == null ? void 0 : error.errorCode) || 'timeout');
    });
  }

  function postEventRetry(reportUrl, postParams, postRetryTimes, errorMessage, errorCode) {
    // 上报失败后继续重试，最多重试3次
    if (postRetryTimes > 0) {
      postRetryTimes--;
      postEventRequest(reportUrl, postParams, postRetryTimes);
    } else {
      // 如果重试3次后依旧上报失败的话，那么需要把status重置为toSubmit
      var failedPostEventQueue = JSSDK.Storage.getItem(STORAGE_EVENT_QUEUE, true, []);
      failedPostEventQueue.forEach(function (eventItem) {
        eventItem.status = 'toSubmit';
      });
      JSSDK.Storage.setItem(STORAGE_EVENT_QUEUE, failedPostEventQueue);
      trackLogEvent({
        state: 3,
        code: errorCode,
        message: '事件上报失败',
        error_message: errorMessage,
        event_name: postParams == null ? void 0 : postParams.map(function (item) {
          return item._event_name;
        }).join(','),
        log_count: postParams == null ? void 0 : postParams.map(function (item) {
          var _item$properties;

          return (_item$properties = item.properties) == null ? void 0 : _item$properties._log_count;
        }).join(',')
      });
    }
  }

  function sendDebugAppInstallLog(eventName, errorMessage, errorCode, success) {
    if (success === void 0) {
      success = true;
    }

    if (eventName === '_webInstall') {
      trackLogEvent({
        state: 6,
        code: errorCode,
        message: 'web端调试时webInstall上报',
        is_success: success,
        error_message: errorMessage,
        event_name: eventName
      });
    }
  }
  /**
   * 上报debug事件
   */


  function postDebugEvent(postParams, postRetryTimes) {
    var _postParams$;

    if (postRetryTimes === void 0) {
      postRetryTimes = POST_FAIL_RETRY_TIMES;
    }

    var _event_name = (_postParams$ = postParams[0]) == null ? void 0 : _postParams$._event_name;

    JSSDK.HttpHelper.post(API.sendDebugReportData, postParams).then(function (res) {
      // 成功
      sendDebugAppInstallLog(_event_name, res.msg, res.status);
    })["catch"](function (error) {
      // 上报失败后继续重试，最多重试3次
      if (postRetryTimes > 0) {
        postRetryTimes--;
        postDebugEvent(postParams, postRetryTimes);
      } else {
        sendDebugAppInstallLog(_event_name, (error == null ? void 0 : error.message) || error, (error == null ? void 0 : error.errorCode) || 'timeout', false);
      }
    });
  }
  /**
   * 每次上报事件时，需要更新上报的数据信息
   * @param eventName
   */

  function updateTrackEventData(eventName) {
    if (JSSDK.getStateData('debugModel')) {
      // 如果是debug模式，则直接置为true
      return JSSDK.setStateData({
        'reportData.properties._is_first_day': true,
        'reportData.properties._is_first_time': true
      });
    } // _is_first_day


    var curDate = seDate.getCurDate();

    var _is_first_day = JSSDK.Storage.getItem(STORAGE_IS_FIRST_DAY); // 如果和 _is_first_day 为同一天，那么上报的 _is_first_day 字段设置为true


    JSSDK.setStateData({
      'reportData.properties._is_first_day': curDate === _is_first_day
    }); // _is_first_time： 当前事件是否记录过

    var formattedEventName = "" + STORAGE_EVENT_PREFIX + eventName;
    var isCurEventEverTracked = JSSDK.Storage.getItem(formattedEventName);
    JSSDK.setStateData({
      'reportData.properties._is_first_time': isCurEventEverTracked === null
    });
  } // 内部使用的方法。在web/小程序中。挂载到 JSSDK 上


  JSSDK.extend({
    trackEvent: trackEvent,
    postEvent: postEvent
  });

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  var regenerator = runtime_1;

  var sdkReadyFlag = false;
  var initMethods = {
    /**
     * 开发者调用的初始化方法
     * @param {*} initConfig
     * {
     *   appKey: string, 必填 管理后台应用的16位Appkey, Appkey查询路径：资产管理-应用管理-16位Appke（即应用ID）
     *   userId: string, 必填 管理后台应用的租户Id userId查询路径：账户管理-账号信息-密钥-16位userId
     *   config: {
     *     logEnabled: boolean, 是否控制台打印sdk日志
     *     debugModel: boolean, 是否开启调试
     *     customURL: string, 开发者自定义Url，可设置为测试地址
     *     remoteConfig: { 非必填 在线参数配置
     *       pollingInterval: number, 设置SDK获取在线参数配置轮询间隔，轮询间隔时间（单位：分），区间：30分钟-24小时, 默认30分钟,
     *       enable: boolean, enable为 true 则SESDK初始化在线参数SDK；enable默认为false
     *       mergeType: 0 | 1, 服务端跟SDK配置合并策略 0-使用服务端配置跟用户本地已有缓存配置合并，默认。 1-使用服务端配置跟用户默认配置合并
     *       customIDProperties: Object, 自定义ID及其属性值，跟用户在后台设置的使用自定义ID匹配对应
     *       customIDEventProperties: Object, 事件自定义ID及其属性值
     *       customIDUserProperties: Object, 用户自定义ID及其属性值
     *     }
     *   }
     * }
     */
    init: function init(initConfig) {
      return _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        var _initConfig$config, _initConfig$config2, _initConfig$config3, _initConfig$config4, _initConfig$config5, _initConfig$config5$r;

        var externalData, initData, reportData, _JSSDK$parameters;

        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (initConfig == null ? void 0 : (_initConfig$config = initConfig.config) == null ? void 0 : _initConfig$config.logEnabled) {
                  JSSDK.infoLog('init', initConfig);
                }

                JSSDK.setStateData({
                  debugModel: (initConfig == null ? void 0 : (_initConfig$config2 = initConfig.config) == null ? void 0 : _initConfig$config2.debugModel) || false,
                  logEnabled: (initConfig == null ? void 0 : (_initConfig$config3 = initConfig.config) == null ? void 0 : _initConfig$config3.logEnabled) || false
                });
                externalData = {};

                if (!(!(initConfig == null ? void 0 : initConfig.appKey) || !(initConfig == null ? void 0 : initConfig.userId))) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", JSSDK.assert(false, 440101));

              case 5:
                externalData._appkey = initConfig.appKey;
                externalData._tenant_id = initConfig.userId;
                _context.next = 9;
                return JSSDK.sdkInitData;

              case 9:
                initData = _context.sent;
                reportData = Object.assign(initData, externalData); // 初始化SDK

                JSSDK.init({
                  reportData: reportData,
                  customURL: (initConfig == null ? void 0 : (_initConfig$config4 = initConfig.config) == null ? void 0 : _initConfig$config4.customURL) || ''
                }); // 初始化在线参数, 依赖SDK初始化后的数据

                if (!(initConfig == null ? void 0 : (_initConfig$config5 = initConfig.config) == null ? void 0 : (_initConfig$config5$r = _initConfig$config5.remoteConfig) == null ? void 0 : _initConfig$config5$r.enable)) {
                  _context.next = 16;
                  break;
                }

                if (!(typeof ((_JSSDK$parameters = JSSDK.parameters) == null ? void 0 : _JSSDK$parameters.init) !== 'function')) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("return", JSSDK.assert(false, 440107));

              case 15:
                JSSDK.parameters.init(initConfig.config.remoteConfig);

              case 16:
                // 初始化完成
                sdkReadyFlag = initConfig;
                JSSDK.customEvents.$emit('isReady', initConfig);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },

    /**
     * 检测SDK加载状态
     * @param {Function} callback 加载成功回调
     * @param {Array} params 加载成功回调时携带的参数
     */
    ready: function ready(callback) {
      if (typeof callback !== 'function') {
        return;
      } // 执行ready的回调时，需要把初始化的参数携带下去


      if (sdkReadyFlag) {
        return callback.call(this, sdkReadyFlag);
      }

      JSSDK.customEvents.$on('isReady', function (initConfig) {
        return callback(initConfig);
      });
    },

    /**
     * 加载插件
     * @param {*} plugin
     */
    use: function use(plugin) {
      if (typeof (plugin == null ? void 0 : plugin.init) !== 'function') {
        return JSSDK.assert(false, 440109);
      }

      plugin.init(JSSDK);
    }
  };

  /**
   * @file 暴露给开发者调用的方法-用户的账号ID
   */
  var accountIdMethods = {
    /**
     * 开发者调用 login 方法设置系统账号ID_account_id，如：login("登录ID")
     * @param accountId 登录ID
     */
    login: function login(accountId) {
      if (JSSDK.getStateData('logEnabled')) {
        JSSDK.infoLog('login', accountId);
      }

      JSSDK.setStateData({
        'reportData._account_id': accountId
      });
      JSSDK.Storage.setItem('_account_id', accountId);
    },

    /**
     * 开发者调用 getAccountId 方法获取用户的账号ID
     * @returns 用户的账号ID
     */
    getAccountId: function getAccountId() {
      var reportData = JSSDK.getStateData('reportData');
      return reportData == null ? void 0 : reportData._account_id;
    },

    /**
     * 开发者调用 logout 方法清除账号ID
     */
    logout: function logout() {
      JSSDK.setStateData({
        "delete": true,
        'reportData._account_id': ''
      });
      JSSDK.Storage.deleteItem('_account_id');
    }
  };

  /**
   * @file 暴露给开发者调用的方法-访客ID
   */
  var visitorIdMethods = {
    /**
     * 开发者调用 setVisitorId 方法设置访客ID
     * @param visitorId 访客ID
     */
    setVisitorId: function setVisitorId(visitorId) {
      if (JSSDK.getStateData('logEnabled')) {
        JSSDK.infoLog('setVisitorId', visitorId);
      }

      JSSDK.setStateData({
        'reportData._visitor_id': visitorId
      });
      JSSDK.Storage.setItem('_visitor_id', visitorId);
    },

    /**
     * 开发者调用 getVisitorId 方法获取当前访客 ID
     * @returns 访客 ID
     */
    getVisitorId: function getVisitorId() {
      var reportData = JSSDK.getStateData('reportData');
      return reportData == null ? void 0 : reportData._visitor_id;
    }
  };

  /**
   * @file 公共事件属性相关方法
   */
  /**
   * 设置公共事件属性
   */

  function setSuperProperty(key, value, isDeleteKey) {
    if (isDeleteKey === void 0) {
      isDeleteKey = false;
    }

    if (JSSDK.getStateData('logEnabled')) {
      JSSDK.infoLog('setSuperProperty', key, value);
    }

    if (!key || !JSSDK.trimStr(key)) {
      return JSSDK.assert(false, 440106);
    }

    var superProperties = JSSDK.getStateData('externalReportData.superProperties');

    if (key === 'all') {
      JSSDK.setStateData({
        'externalReportData.superProperties': Object.assign(superProperties, value)
      });
    } else {
      var _JSSDK$setStateData;

      JSSDK.setStateData((_JSSDK$setStateData = {
        "delete": isDeleteKey
      }, _JSSDK$setStateData["externalReportData.superProperties." + key] = value, _JSSDK$setStateData));
    }

    var localSuperProperties = JSSDK.Storage.getItem('superProperties', true);

    if (key === 'all') {
      JSSDK.Storage.setItem('superProperties', Object.assign(localSuperProperties, value));
    } else {
      delete localSuperProperties[key];
      JSSDK.Storage.setItem('superProperties', localSuperProperties);
    }
  }

  var superPropertiesMethods = {
    /**
     * 设置公共事件属性
     * @param properties
     */
    setSuperProperties: function setSuperProperties(properties) {
      if (!isObject(properties)) {
        return JSSDK.assert(false, 440120);
      }

      setSuperProperty('all', properties);
    },

    /**
     * 清除指定key值的一个公共事件属性
     * @param key 属性key
     */
    unsetSuperProperty: function unsetSuperProperty(key) {
      setSuperProperty(key, '', true);
    },

    /**
     * 清空所有公共事件属性
     */
    clearSuperProperties: function clearSuperProperties() {
      JSSDK.setStateData({
        'externalReportData.superProperties': {}
      });
      JSSDK.Storage.deleteItem('superProperties');
    }
  };

  /**
   * @file 预置事件属性设置
   * AppInstall(安装事件)、AppStart(启动事件)、AppEnd(退出事件）
   */
  var presetEventList = ['appInstall', 'appStart', 'appEnd', 'all'];
  /**
   * 设置预置事件自定义属性
   * @param eventType 事件类型 appInstall(安装事件)、appStart(启动事件)、appEnd(退出事件)、all(安装、启动、退出事件)
   * @param {*} properties
   */

  function setPresetEventProperty(eventType, properties) {
    var externalReportData = JSSDK.getStateData('externalReportData');

    if (eventType === presetEventList[presetEventList.length - 1]) {
      presetEventList.slice(0, presetEventList.length - 1).forEach(function (event) {
        var _JSSDK$setStateData;

        var newProperties = properties === null ? {} : Object.assign(externalReportData[event], properties);
        JSSDK.setStateData((_JSSDK$setStateData = {}, _JSSDK$setStateData["externalReportData." + event] = newProperties, _JSSDK$setStateData));
      });
    } else {
      var _JSSDK$setStateData2;

      var newProperties = properties === null ? {} : Object.assign(externalReportData[eventType], properties);
      JSSDK.setStateData((_JSSDK$setStateData2 = {}, _JSSDK$setStateData2["externalReportData." + eventType] = newProperties, _JSSDK$setStateData2));
    }
  }

  var presetEventsPropertiesMethods = {
    /**
     * 设置预置事件自定义属性
     * @param eventType 事件类型 appInstall(安装事件)、appStart(启动事件)、appEnd(退出事件)、all(安装、启动、退出事件)
     * @param {*} properties
     */
    setPresetEvent: function setPresetEvent(eventType, properties) {
      var _eventType, _eventType$replace;

      if (JSSDK.getStateData('logEnabled')) {
        JSSDK.infoLog('setPresetEvent', eventType, properties);
      }

      var systemEnv = Number(JSSDK.getStateData('systemEnv'));
      var curEnvPrefix = EVENT_NAME_PREFIX[systemEnv].replace('_', '');
      eventType = (_eventType = eventType) == null ? void 0 : (_eventType$replace = _eventType.replace(/(mp|web)Install/, presetEventList[0])) == null ? void 0 : _eventType$replace.replace(/(mp|web)Start/, presetEventList[1]);

      if (systemEnv === 0 && presetEventList.includes('appEnd')) {
        // web端没有appEnd事件
        presetEventList.splice(2, 1);
      }

      if (!presetEventList.includes(eventType)) {
        return JSSDK.assert(false, 440122, {
          '{#1}': presetEventList.map(function (item) {
            return item.replace('app', curEnvPrefix);
          }).slice(0, presetEventList.length - 1).join(',')
        });
      } // 清空某个预置事件的自定义属性


      if (!properties) {
        setPresetEventProperty(eventType, null);
        return;
      }

      if (!isObject(properties)) {
        return JSSDK.assert(false, 440120);
      } // 设置某个预置事件的自定义属性


      setPresetEventProperty(eventType, properties);
    }
  };

  /**
   * @file 时长事件上报
   */

  /*
  调用示例：
  JSSDK.NATIVE.eventStart('test-1');
  JSSDK.NATIVE.eventFinish('test-1', {
    one: '1',
    _test: 'test', // 会被过滤掉
  });
  */

  /**
   * 开始计时。记录每个事件的起始时间。
   * @param eventName
   * @param isCustomEvent 是否为自定义事件
   */

  function eventStart(eventName, isCustomEvent) {
    if (isCustomEvent === void 0) {
      isCustomEvent = true;
    }

    if (isCustomEvent && JSSDK.getStateData('logEnabled')) {
      JSSDK.infoLog('eventStart', eventName);
    }

    var eventType = isCustomEvent ? 4 : 1;
    durationEvents[eventName + eventType] = Date.now();
  }
  /**
   * 结束计时。并自动上报事件。
   * 目前逻辑： 结束计时时，不对durationEvents中的记录做处理。方便后续继续进行上报；当然开发者可以通过调用eventStart，更新起始时间。
   * @param eventName
   * @param data
   * @param isCustomEvent 是否为自定义事件
   * @returns {*}
   */

  function eventFinish(eventName, data, isCustomEvent) {
    if (data === void 0) {
      data = {};
    }

    if (isCustomEvent === void 0) {
      isCustomEvent = true;
    }

    if (isCustomEvent && JSSDK.getStateData('logEnabled')) {
      JSSDK.infoLog('eventFinish', eventName, data);
    }

    if (!isObject(data)) {
      return JSSDK.assert(false, 440120);
    }

    var eventType = isCustomEvent ? 4 : 1;
    var newEventName = eventName + eventType; // 未记录开始时间： 给出提示，不上报事件；

    if (durationEvents[newEventName] === undefined) {
      return JSSDK.assert(false, 440604);
    }

    var start = durationEvents[newEventName];
    var end = Date.now();
    var duration = seDate.getTimeGap(start, end);
    trackEvent(eventName, {
      _duration: duration
    }, data, {
      _event_type: eventType
    });
  } //#endregion

  var durationEventsMethods = {
    // 时长事件
    eventStart: eventStart,
    eventFinish: eventFinish
  };

  /**
   * @file 预置事件上报
   */

  function trackAppInstall() {
    // 触发时机： web： 每次刷新页面时；mp：每次onLaunch时；
    // 之前没有上报过 appInstall 时才上报
    var eventName = getCurEnvEventName('_appInstall');
    var formattedEventName = "" + STORAGE_EVENT_PREFIX + eventName;
    var isAppInstalled = JSSDK.Storage.getItem(formattedEventName);

    if (isAppInstalled) {
      return;
    }

    var externalReportData = JSSDK.getStateData('externalReportData');
    trackEvent('_appInstall', {}, externalReportData.appInstall, {
      _event_type: 1
    });
  } // 触发时机： web： 每次刷新页面时；mp：每次onShow时；

  function trackAppStart() {
    // 记录时间，供上报_appEnd时的_duration字段使用
    // 注意此处的eventName为_appEnd
    eventStart('_appEnd', false);
    var externalReportData = JSSDK.getStateData('externalReportData');
    trackEvent('_appStart', {}, externalReportData.appStart, {
      _event_type: 1
    });
  }
  function trackAppEnd() {
    var externalReportData = JSSDK.getStateData('externalReportData'); // trackEvent('_appEnd', externalReportData.appEnd);

    eventFinish('_appEnd', externalReportData.appEnd, false);
  } // 内部使用的方法。在web/小程序中。挂载到 JSSDK 上

  JSSDK.extend({
    trackAppInstall: trackAppInstall,
    trackAppStart: trackAppStart,
    trackAppEnd: trackAppEnd
  });
  var presetEventsMethods = {
    trackAppEnd: trackAppEnd
  };

  /**
   * @file 自定义事件上报
   */
  /*
  调用示例：
  JSSDK.NATIVE.track('test', {
    one: '1',
    _test: 'test', // 会被过滤掉
  });
  */

  /**
   * 上报自定义事件
   * @param eventName
   * @param data 自定义属性
   */

  function track(eventName, data) {
    if (data === void 0) {
      data = {};
    }

    if (JSSDK.getStateData('logEnabled')) {
      JSSDK.infoLog('track', eventName, data);
    }

    if (!isObject(data)) {
      return JSSDK.assert(false, 440120);
    }

    trackEvent(eventName, {}, data, {
      _event_type: 4
    });
  }

  var customEventsMethods = {
    track: track
  };

  /**
   * @file 预定义事件上报
   */
  //#region 预定义事件

  /*
  调用示例：
  JSSDK.NATIVE.trackAdImpression({
    adNetworkPlatform: 'oppo',
    adType: 1,
    adNetworkAppID: '123',
    adId: '123',
    mediationPlatform: 'custom',
    ecpm: 13.140000000000001,
    currency: 'USD',
    rendered: true,
    customProperties: {
      one: '1',
      _test: 'test', // 会被过滤掉
    }
  })
  */
  // 变现广告展示事件

  function trackAdImpression(data) {
    if (JSSDK.getStateData('logEnabled')) {
      JSSDK.infoLog('trackAdImpression', data);
    } // 可以传以下字段、customProperties


    var propArr = ['adNetworkPlatform', 'adType', 'adNetworkAppID', 'adId', 'mediationPlatform', 'ecpm', 'currency', 'rendered'];

    var _getPredefineEventFor = getPredefineEventFormattedData(propArr, data),
        properties = _getPredefineEventFor.properties,
        customProperties = _getPredefineEventFor.customProperties;

    trackEvent('_appImp', properties, customProperties);
  }
  /*
  调用示例：
  JSSDK.NATIVE.trackAdClick({
    adNetworkPlatform: 'oppo',
    adType: 1,
    adId: '123',
    mediationPlatform: 'custom',
    customProperties: {
      one: '1',
      _test: 'test', // 会被过滤掉
    }
  })
  */
  // 变现广告点击事件


  function trackAdClick(data) {
    if (JSSDK.getStateData('logEnabled')) {
      JSSDK.infoLog('trackAdClick', data);
    }

    var propArr = ['adNetworkPlatform', 'mediationPlatform', 'adType', 'adId'];

    var _getPredefineEventFor2 = getPredefineEventFormattedData(propArr, data),
        properties = _getPredefineEventFor2.properties,
        customProperties = _getPredefineEventFor2.customProperties;

    trackEvent('_appClick', properties, customProperties);
  }
  /*
  调用示例：
  JSSDK.NATIVE.trackIAP({
    orderId: '12345678',
    payAmount: 1234.5678,
    currencyType: 'USD',
    payType: 'alipay',
    productID: '12345678',
    productName: 'this is product name',
    productCount: 10,
    payStatus: 1,
    failReason: 'this is fail reason',
    customProperties: {
      one: '1',
    }
  })
  */
  // 应用内购买事件


  function trackIAP(data) {
    if (JSSDK.getStateData('logEnabled')) {
      JSSDK.infoLog('trackIAP', data);
    }

    var propArr = ['orderId', 'payAmount', 'currencyType', 'payType', 'productID', 'productName', 'productCount', 'payStatus', 'failReason'];

    var _getPredefineEventFor3 = getPredefineEventFormattedData(propArr, data),
        properties = _getPredefineEventFor3.properties,
        customProperties = _getPredefineEventFor3.customProperties;

    trackEvent('_appPur', properties, customProperties);
  }
  /*
  调用示例：
  JSSDK.NATIVE.trackAppAttr({
    adNetwork: '123456',
    subChannel: '123456',
    adAccountID: '123456',
    adAccountName: '123456',
    adCampaignID: '123456',
    adCampaignName: '123456',
    adOfferID: '123456',
    adOfferName: '123456',
    adCreativeID: '123456',
    adCreativeName: '123456',
    attributionPlatform: '123456',
    customProperties: {
      one: '1',
    }
  })
  */
  // 自归因安装事件


  function trackAppAttr(data) {
    if (JSSDK.getStateData('logEnabled')) {
      JSSDK.infoLog('trackAppAttr', data);
    }

    var propArr = ['adNetwork', 'subChannel', 'adAccountID', 'adAccountName', 'adCampaignID', 'adCampaignName', 'adOfferID', 'adOfferName', 'adCreativeID', 'adCreativeName', 'attributionPlatform'];

    var _getPredefineEventFor4 = getPredefineEventFormattedData(propArr, data),
        properties = _getPredefineEventFor4.properties,
        customProperties = _getPredefineEventFor4.customProperties;

    trackEvent('_appAttr', properties, customProperties);
  }
  /*
  调用示例：
  JSSDK.NATIVE.trackOrder({
    orderId: '12345678',
    payAmount: 1234.5678,
    currencyType: 'USD',
    payType: 'alipay',
    status: 'this is fail status',
    customProperties: {
      one: '1',
    }
  })
  */
  // 订单事件


  function trackOrder(data) {
    if (JSSDK.getStateData('logEnabled')) {
      JSSDK.infoLog('trackOrder', data);
    }

    var propArr = ['orderId', 'payAmount', 'currencyType', 'payType', 'status'];

    var _getPredefineEventFor5 = getPredefineEventFormattedData(propArr, data),
        properties = _getPredefineEventFor5.properties,
        customProperties = _getPredefineEventFor5.customProperties;

    trackEvent('_appOrder', properties, customProperties);
  }
  /*
  调用示例：
  JSSDK.NATIVE.trackRegister({
    regType: 'WeChat',
    registerStatus: 'success',
    customProperties: {
      one: '1',
    }
  })
  */
  // 注册事件


  function trackRegister(data) {
    if (JSSDK.getStateData('logEnabled')) {
      JSSDK.infoLog('trackRegister', data);
    }

    var propArr = ['regType', 'registerStatus'];

    var _getPredefineEventFor6 = getPredefineEventFormattedData(propArr, data),
        properties = _getPredefineEventFor6.properties,
        customProperties = _getPredefineEventFor6.customProperties;

    trackEvent('_appReg', properties, customProperties);
  }
  /*
  调用示例：
  JSSDK.NATIVE.trackLogin({
    loginType: 'WeChat',
    loginStatus: 'success',
    customProperties: {
      one: '1',
    }
  })
  */
  // 登录事件


  function trackLogin(data) {
    if (JSSDK.getStateData('logEnabled')) {
      JSSDK.infoLog('trackLogin', data);
    }

    var propArr = ['loginType', 'loginStatus'];

    var _getPredefineEventFor7 = getPredefineEventFormattedData(propArr, data),
        properties = _getPredefineEventFor7.properties,
        customProperties = _getPredefineEventFor7.customProperties;

    trackEvent('_appLogin', properties, customProperties);
  } //#endregion


  var predefinedEventsMethods = {
    // 预定义事件
    trackAdImpression: trackAdImpression,
    trackAdClick: trackAdClick,
    trackIAP: trackIAP,
    trackAppAttr: trackAppAttr,
    trackOrder: trackOrder,
    trackRegister: trackRegister,
    trackLogin: trackLogin
  };

  /**
   * 上报用户信息
   * @param type userInit、userUpdate、userAdd、userUnset、userAppend、userDelete
   * @param info 自定义属性
   */

  function trackUser(type, info) {
    if (info === void 0) {
      info = {};
    }

    if (JSSDK.getStateData('logEnabled')) {
      JSSDK.infoLog(type, info);
    }

    JSSDK.NATIVE.ready(function () {
      var reportData = JSSDK.getStateData('reportData');
      var params = [_extends({}, reportData, {
        _ts: Date.now(),
        _type: 'userset',
        _userset_type: type,
        properties: {},
        custom_properties: info || {}
      })]; // web端的debug模式下，直接上报，无需本地存储处理

      if (JSSDK.getStateData('systemEnv') === 0 && JSSDK.getStateData('debugModel')) {
        return postDebugEvent(params);
      }

      writeEventQueueToLocalStorage('', params);
      postEvent();
    });
  }

  function userInit(data) {
    trackUser('userInit', data);
  }

  function userUpdate(data) {
    trackUser('userUpdate', data);
  }

  function userAdd(data) {
    trackUser('userAdd', data);
  }
  /**
   * userUnset
   * @param keys 需要重置的属性组成的数组
   */


  function userUnset(keys) {
    var data = {};
    Array.isArray(keys) && keys.forEach(function (key) {
      data[key] = '';
    });
    trackUser('userUnset', data);
  }

  function userAppend(data) {
    trackUser('userAppend', data);
  }

  var userDeleteTypeList = ['userDeleteByAccountId', 'userDeleteByVisitorId'];

  function userDelete(deleteType) {
    if (!userDeleteTypeList.includes(deleteType)) {
      return JSSDK.assert(false, 440117, {
        '{#1}': userDeleteTypeList.join(' or ')
      });
    }

    trackUser(deleteType);
  }
  /*
  调用示例：
  // JSSDK.NATIVE.userInit
  SESDK.userInit({
    regtime: "2021-03-01 12:34:56.789", //自定义属性
    roleName: "dashen" //自定义属性
  })
  */


  var trackUserMethods = {
    userInit: userInit,
    userUpdate: userUpdate,
    userAdd: userAdd,
    userUnset: userUnset,
    userAppend: userAppend,
    userDelete: userDelete
  };

  var otherMethods = {
    /**
     * 开发者调用 setChannel 方法设置渠道名称_channel
     * @param channel 渠道名称
     */
    setChannel: function setChannel(channel) {
      if (JSSDK.getStateData('logEnabled')) {
        JSSDK.infoLog('setChannel', channel);
      }

      JSSDK.setStateData({
        'reportData.properties._channel': channel
      });
    },

    /**
     * 开发者调用 setReferrerTitle 方法设置_referrer_title;
     * @param title 来源页面的title信息
     */
    setReferrerTitle: function setReferrerTitle(title) {
      if (JSSDK.getStateData('logEnabled')) {
        JSSDK.infoLog('setReferrerTitle', title);
      }

      JSSDK.setStateData({
        'reportData.properties._referrer_title': title
      });
    },

    /**
     * 监听sdk的报错信息
     * @param cb 回调函数，参数： 报错信息。调用示例： SESDK.listenErrorMessage((msg) => { // ... })
     *
     */
    listenErrorMessage: function listenErrorMessage(cb) {
      JSSDK.customEvents.$on('assertMsg', cb);
    }
  };

  var externalMethods = _extends({}, initMethods, accountIdMethods, visitorIdMethods, superPropertiesMethods, presetEventsPropertiesMethods, presetEventsMethods, durationEventsMethods, customEventsMethods, predefinedEventsMethods, trackUserMethods, otherMethods);

  var SESDK = _extends({
    // 版本
    version: "1.0.2",
    // JSSDK标识
    type: 'SESDK_' + "web"
  }, externalMethods);

  JSSDK.extend({
    NATIVE: SESDK
  });

  var createStorageKey$1 = JSSDK.createStorageKey;
  var Storage = {
    /**
     * @param key
     * @param value
     * @param  storeFailedCb 存储失败的回调。 比如： 所有存储的值大于等于5MB时；
     * @returns {*}
     */
    setItem: function setItem(key, value, storeFailedCb, isLog) {
      if (isLog === void 0) {
        isLog = false;
      }

      if (typeof value === 'object') {
        value = JSON.stringify(value);
      }

      try {
        localStorage.setItem(createStorageKey$1(key), value);
      } catch (e) {
        typeof storeFailedCb === 'function' && storeFailedCb();

        if (!isLog) {
          JSSDK.trackLogEvent({
            state: 4,
            message: 'web本地存储不足',
            stroage_key: key
          });
        }
      }
    },
    getItem: function getItem(key, isParse, defaultValue) {
      if (isParse === void 0) {
        isParse = false;
      }

      if (defaultValue === void 0) {
        defaultValue = {};
      }

      var value = localStorage.getItem(createStorageKey$1(key));
      var v = value;

      if (isParse) {
        try {
          v = JSON.parse(value) || defaultValue;
        } catch (e) {
          v = defaultValue;
        }
      }

      return v;
    },
    deleteItem: function deleteItem(key) {
      localStorage.removeItem(createStorageKey$1(key));
    },
    clear: function clear() {
      localStorage.clear();
    }
  };
  JSSDK.extend({
    Storage: Storage
  });

  var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule$1(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var js_cookie = createCommonjsModule$1(function (module, exports) {
  (function (factory) {
  	var registeredInModuleLoader;
  	{
  		module.exports = factory();
  		registeredInModuleLoader = true;
  	}
  	if (!registeredInModuleLoader) {
  		var OldCookies = window.Cookies;
  		var api = window.Cookies = factory();
  		api.noConflict = function () {
  			window.Cookies = OldCookies;
  			return api;
  		};
  	}
  }(function () {
  	function extend () {
  		var i = 0;
  		var result = {};
  		for (; i < arguments.length; i++) {
  			var attributes = arguments[ i ];
  			for (var key in attributes) {
  				result[key] = attributes[key];
  			}
  		}
  		return result;
  	}

  	function decode (s) {
  		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  	}

  	function init (converter) {
  		function api() {}

  		function set (key, value, attributes) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			attributes = extend({
  				path: '/'
  			}, api.defaults, attributes);

  			if (typeof attributes.expires === 'number') {
  				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
  			}

  			// We're using "expires" because "max-age" is not supported by IE
  			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

  			try {
  				var result = JSON.stringify(value);
  				if (/^[\{\[]/.test(result)) {
  					value = result;
  				}
  			} catch (e) {}

  			value = converter.write ?
  				converter.write(value, key) :
  				encodeURIComponent(String(value))
  					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

  			key = encodeURIComponent(String(key))
  				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
  				.replace(/[\(\)]/g, escape);

  			var stringifiedAttributes = '';
  			for (var attributeName in attributes) {
  				if (!attributes[attributeName]) {
  					continue;
  				}
  				stringifiedAttributes += '; ' + attributeName;
  				if (attributes[attributeName] === true) {
  					continue;
  				}

  				// Considers RFC 6265 section 5.2:
  				// ...
  				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
  				//     character:
  				// Consume the characters of the unparsed-attributes up to,
  				// not including, the first %x3B (";") character.
  				// ...
  				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
  			}

  			return (document.cookie = key + '=' + value + stringifiedAttributes);
  		}

  		function get (key, json) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			var jar = {};
  			// To prevent the for loop in the first place assign an empty array
  			// in case there are no cookies at all.
  			var cookies = document.cookie ? document.cookie.split('; ') : [];
  			var i = 0;

  			for (; i < cookies.length; i++) {
  				var parts = cookies[i].split('=');
  				var cookie = parts.slice(1).join('=');

  				if (!json && cookie.charAt(0) === '"') {
  					cookie = cookie.slice(1, -1);
  				}

  				try {
  					var name = decode(parts[0]);
  					cookie = (converter.read || converter)(cookie, name) ||
  						decode(cookie);

  					if (json) {
  						try {
  							cookie = JSON.parse(cookie);
  						} catch (e) {}
  					}

  					jar[name] = cookie;

  					if (key === name) {
  						break;
  					}
  				} catch (e) {}
  			}

  			return key ? jar[key] : jar;
  		}

  		api.set = set;
  		api.get = function (key) {
  			return get(key, false /* read as raw */);
  		};
  		api.getJSON = function (key) {
  			return get(key, true /* read as json */);
  		};
  		api.remove = function (key, attributes) {
  			set(key, '', extend(attributes, {
  				expires: -1
  			}));
  		};

  		api.defaults = {};

  		api.withConverter = init;

  		return api;
  	}

  	return init(function () {});
  }));
  });

  var CookiesName = 'JSSDK_CONFIG';
  /**
   * 设置指定Cookies
   * @param {String} name cookies名称
   * @param {String} value cookies值
   * @param {Date Time} times cookies过期时间 时间戳 new Date().getTime()
   */

  function setCookies(name, value, times) {
    if (times === void 0) {
      times = null;
    }

    var tempCookies = getCookies(name);

    if (!tempCookies) {
      // 设置过期时间为365天
      var tempDays = 365;
      var tempExp = new Date();
      tempExp.setTime(times || tempExp.getTime() + tempDays * 24 * 60 * 60 * 1000);
      js_cookie.set((CookiesName + "_" + name).toLocaleUpperCase(), value, {
        domain: '',
        expires: tempExp
      });
      return value;
    }
  }
  /**
   * 获取指定Cookies
   * @param {String} name cookies名称
   */


  function getCookies(name) {
    var tempCookiesStr = js_cookie.get((CookiesName + "_" + name).toLocaleUpperCase());
    return tempCookiesStr && tempCookiesStr;
  }
  /**
   * 删除指定Cookies
   * @param {String} name cookies名称
   */


  function deleteCookies(name) {
    js_cookie.remove((CookiesName + "_" + name).toLocaleUpperCase(), {
      domain: ''
    });
  }

  JSSDK.extend({
    Cookies: {
      get: getCookies,
      set: setCookies,
      "delete": deleteCookies
    }
  });

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
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

    return _extends$1.apply(this, arguments);
  }

  var axios = createCommonjsModule$1(function (module, exports) {
  /* axios v0.20.0 | (c) 2020 by Matt Zabriskie */
  (function webpackUniversalModuleDefinition(root, factory) {
  	module.exports = factory();
  })(commonjsGlobal$1, function() {
  return /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId])
  /******/ 			return installedModules[moduleId].exports;
  /******/
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			exports: {},
  /******/ 			id: moduleId,
  /******/ 			loaded: false
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.loaded = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(0);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ (function(module, exports, __webpack_require__) {

  	module.exports = __webpack_require__(1);

  /***/ }),
  /* 1 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	var bind = __webpack_require__(3);
  	var Axios = __webpack_require__(4);
  	var mergeConfig = __webpack_require__(22);
  	var defaults = __webpack_require__(10);
  	
  	/**
  	 * Create an instance of Axios
  	 *
  	 * @param {Object} defaultConfig The default config for the instance
  	 * @return {Axios} A new instance of Axios
  	 */
  	function createInstance(defaultConfig) {
  	  var context = new Axios(defaultConfig);
  	  var instance = bind(Axios.prototype.request, context);
  	
  	  // Copy axios.prototype to instance
  	  utils.extend(instance, Axios.prototype, context);
  	
  	  // Copy context to instance
  	  utils.extend(instance, context);
  	
  	  return instance;
  	}
  	
  	// Create the default instance to be exported
  	var axios = createInstance(defaults);
  	
  	// Expose Axios class to allow class inheritance
  	axios.Axios = Axios;
  	
  	// Factory for creating new instances
  	axios.create = function create(instanceConfig) {
  	  return createInstance(mergeConfig(axios.defaults, instanceConfig));
  	};
  	
  	// Expose Cancel & CancelToken
  	axios.Cancel = __webpack_require__(23);
  	axios.CancelToken = __webpack_require__(24);
  	axios.isCancel = __webpack_require__(9);
  	
  	// Expose all/spread
  	axios.all = function all(promises) {
  	  return Promise.all(promises);
  	};
  	axios.spread = __webpack_require__(25);
  	
  	module.exports = axios;
  	
  	// Allow use of default import syntax in TypeScript
  	module.exports.default = axios;


  /***/ }),
  /* 2 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var bind = __webpack_require__(3);
  	
  	/*global toString:true*/
  	
  	// utils is a library of generic helper functions non-specific to axios
  	
  	var toString = Object.prototype.toString;
  	
  	/**
  	 * Determine if a value is an Array
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is an Array, otherwise false
  	 */
  	function isArray(val) {
  	  return toString.call(val) === '[object Array]';
  	}
  	
  	/**
  	 * Determine if a value is undefined
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if the value is undefined, otherwise false
  	 */
  	function isUndefined(val) {
  	  return typeof val === 'undefined';
  	}
  	
  	/**
  	 * Determine if a value is a Buffer
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a Buffer, otherwise false
  	 */
  	function isBuffer(val) {
  	  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
  	    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
  	}
  	
  	/**
  	 * Determine if a value is an ArrayBuffer
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
  	 */
  	function isArrayBuffer(val) {
  	  return toString.call(val) === '[object ArrayBuffer]';
  	}
  	
  	/**
  	 * Determine if a value is a FormData
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is an FormData, otherwise false
  	 */
  	function isFormData(val) {
  	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
  	}
  	
  	/**
  	 * Determine if a value is a view on an ArrayBuffer
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
  	 */
  	function isArrayBufferView(val) {
  	  var result;
  	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
  	    result = ArrayBuffer.isView(val);
  	  } else {
  	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  	  }
  	  return result;
  	}
  	
  	/**
  	 * Determine if a value is a String
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a String, otherwise false
  	 */
  	function isString(val) {
  	  return typeof val === 'string';
  	}
  	
  	/**
  	 * Determine if a value is a Number
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a Number, otherwise false
  	 */
  	function isNumber(val) {
  	  return typeof val === 'number';
  	}
  	
  	/**
  	 * Determine if a value is an Object
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is an Object, otherwise false
  	 */
  	function isObject(val) {
  	  return val !== null && typeof val === 'object';
  	}
  	
  	/**
  	 * Determine if a value is a plain Object
  	 *
  	 * @param {Object} val The value to test
  	 * @return {boolean} True if value is a plain Object, otherwise false
  	 */
  	function isPlainObject(val) {
  	  if (toString.call(val) !== '[object Object]') {
  	    return false;
  	  }
  	
  	  var prototype = Object.getPrototypeOf(val);
  	  return prototype === null || prototype === Object.prototype;
  	}
  	
  	/**
  	 * Determine if a value is a Date
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a Date, otherwise false
  	 */
  	function isDate(val) {
  	  return toString.call(val) === '[object Date]';
  	}
  	
  	/**
  	 * Determine if a value is a File
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a File, otherwise false
  	 */
  	function isFile(val) {
  	  return toString.call(val) === '[object File]';
  	}
  	
  	/**
  	 * Determine if a value is a Blob
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a Blob, otherwise false
  	 */
  	function isBlob(val) {
  	  return toString.call(val) === '[object Blob]';
  	}
  	
  	/**
  	 * Determine if a value is a Function
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a Function, otherwise false
  	 */
  	function isFunction(val) {
  	  return toString.call(val) === '[object Function]';
  	}
  	
  	/**
  	 * Determine if a value is a Stream
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a Stream, otherwise false
  	 */
  	function isStream(val) {
  	  return isObject(val) && isFunction(val.pipe);
  	}
  	
  	/**
  	 * Determine if a value is a URLSearchParams object
  	 *
  	 * @param {Object} val The value to test
  	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
  	 */
  	function isURLSearchParams(val) {
  	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  	}
  	
  	/**
  	 * Trim excess whitespace off the beginning and end of a string
  	 *
  	 * @param {String} str The String to trim
  	 * @returns {String} The String freed of excess whitespace
  	 */
  	function trim(str) {
  	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
  	}
  	
  	/**
  	 * Determine if we're running in a standard browser environment
  	 *
  	 * This allows axios to run in a web worker, and react-native.
  	 * Both environments support XMLHttpRequest, but not fully standard globals.
  	 *
  	 * web workers:
  	 *  typeof window -> undefined
  	 *  typeof document -> undefined
  	 *
  	 * react-native:
  	 *  navigator.product -> 'ReactNative'
  	 * nativescript
  	 *  navigator.product -> 'NativeScript' or 'NS'
  	 */
  	function isStandardBrowserEnv() {
  	  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
  	                                           navigator.product === 'NativeScript' ||
  	                                           navigator.product === 'NS')) {
  	    return false;
  	  }
  	  return (
  	    typeof window !== 'undefined' &&
  	    typeof document !== 'undefined'
  	  );
  	}
  	
  	/**
  	 * Iterate over an Array or an Object invoking a function for each item.
  	 *
  	 * If `obj` is an Array callback will be called passing
  	 * the value, index, and complete array for each item.
  	 *
  	 * If 'obj' is an Object callback will be called passing
  	 * the value, key, and complete object for each property.
  	 *
  	 * @param {Object|Array} obj The object to iterate
  	 * @param {Function} fn The callback to invoke for each item
  	 */
  	function forEach(obj, fn) {
  	  // Don't bother if no value provided
  	  if (obj === null || typeof obj === 'undefined') {
  	    return;
  	  }
  	
  	  // Force an array if not already something iterable
  	  if (typeof obj !== 'object') {
  	    /*eslint no-param-reassign:0*/
  	    obj = [obj];
  	  }
  	
  	  if (isArray(obj)) {
  	    // Iterate over array values
  	    for (var i = 0, l = obj.length; i < l; i++) {
  	      fn.call(null, obj[i], i, obj);
  	    }
  	  } else {
  	    // Iterate over object keys
  	    for (var key in obj) {
  	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
  	        fn.call(null, obj[key], key, obj);
  	      }
  	    }
  	  }
  	}
  	
  	/**
  	 * Accepts varargs expecting each argument to be an object, then
  	 * immutably merges the properties of each object and returns result.
  	 *
  	 * When multiple objects contain the same key the later object in
  	 * the arguments list will take precedence.
  	 *
  	 * Example:
  	 *
  	 * ```js
  	 * var result = merge({foo: 123}, {foo: 456});
  	 * console.log(result.foo); // outputs 456
  	 * ```
  	 *
  	 * @param {Object} obj1 Object to merge
  	 * @returns {Object} Result of all merge properties
  	 */
  	function merge(/* obj1, obj2, obj3, ... */) {
  	  var result = {};
  	  function assignValue(val, key) {
  	    if (isPlainObject(result[key]) && isPlainObject(val)) {
  	      result[key] = merge(result[key], val);
  	    } else if (isPlainObject(val)) {
  	      result[key] = merge({}, val);
  	    } else if (isArray(val)) {
  	      result[key] = val.slice();
  	    } else {
  	      result[key] = val;
  	    }
  	  }
  	
  	  for (var i = 0, l = arguments.length; i < l; i++) {
  	    forEach(arguments[i], assignValue);
  	  }
  	  return result;
  	}
  	
  	/**
  	 * Extends object a by mutably adding to it the properties of object b.
  	 *
  	 * @param {Object} a The object to be extended
  	 * @param {Object} b The object to copy properties from
  	 * @param {Object} thisArg The object to bind function to
  	 * @return {Object} The resulting value of object a
  	 */
  	function extend(a, b, thisArg) {
  	  forEach(b, function assignValue(val, key) {
  	    if (thisArg && typeof val === 'function') {
  	      a[key] = bind(val, thisArg);
  	    } else {
  	      a[key] = val;
  	    }
  	  });
  	  return a;
  	}
  	
  	/**
  	 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
  	 *
  	 * @param {string} content with BOM
  	 * @return {string} content value without BOM
  	 */
  	function stripBOM(content) {
  	  if (content.charCodeAt(0) === 0xFEFF) {
  	    content = content.slice(1);
  	  }
  	  return content;
  	}
  	
  	module.exports = {
  	  isArray: isArray,
  	  isArrayBuffer: isArrayBuffer,
  	  isBuffer: isBuffer,
  	  isFormData: isFormData,
  	  isArrayBufferView: isArrayBufferView,
  	  isString: isString,
  	  isNumber: isNumber,
  	  isObject: isObject,
  	  isPlainObject: isPlainObject,
  	  isUndefined: isUndefined,
  	  isDate: isDate,
  	  isFile: isFile,
  	  isBlob: isBlob,
  	  isFunction: isFunction,
  	  isStream: isStream,
  	  isURLSearchParams: isURLSearchParams,
  	  isStandardBrowserEnv: isStandardBrowserEnv,
  	  forEach: forEach,
  	  merge: merge,
  	  extend: extend,
  	  trim: trim,
  	  stripBOM: stripBOM
  	};


  /***/ }),
  /* 3 */
  /***/ (function(module, exports) {
  	
  	module.exports = function bind(fn, thisArg) {
  	  return function wrap() {
  	    var args = new Array(arguments.length);
  	    for (var i = 0; i < args.length; i++) {
  	      args[i] = arguments[i];
  	    }
  	    return fn.apply(thisArg, args);
  	  };
  	};


  /***/ }),
  /* 4 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	var buildURL = __webpack_require__(5);
  	var InterceptorManager = __webpack_require__(6);
  	var dispatchRequest = __webpack_require__(7);
  	var mergeConfig = __webpack_require__(22);
  	
  	/**
  	 * Create a new instance of Axios
  	 *
  	 * @param {Object} instanceConfig The default config for the instance
  	 */
  	function Axios(instanceConfig) {
  	  this.defaults = instanceConfig;
  	  this.interceptors = {
  	    request: new InterceptorManager(),
  	    response: new InterceptorManager()
  	  };
  	}
  	
  	/**
  	 * Dispatch a request
  	 *
  	 * @param {Object} config The config specific for this request (merged with this.defaults)
  	 */
  	Axios.prototype.request = function request(config) {
  	  /*eslint no-param-reassign:0*/
  	  // Allow for axios('example/url'[, config]) a la fetch API
  	  if (typeof config === 'string') {
  	    config = arguments[1] || {};
  	    config.url = arguments[0];
  	  } else {
  	    config = config || {};
  	  }
  	
  	  config = mergeConfig(this.defaults, config);
  	
  	  // Set config.method
  	  if (config.method) {
  	    config.method = config.method.toLowerCase();
  	  } else if (this.defaults.method) {
  	    config.method = this.defaults.method.toLowerCase();
  	  } else {
  	    config.method = 'get';
  	  }
  	
  	  // Hook up interceptors middleware
  	  var chain = [dispatchRequest, undefined];
  	  var promise = Promise.resolve(config);
  	
  	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
  	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  	  });
  	
  	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
  	    chain.push(interceptor.fulfilled, interceptor.rejected);
  	  });
  	
  	  while (chain.length) {
  	    promise = promise.then(chain.shift(), chain.shift());
  	  }
  	
  	  return promise;
  	};
  	
  	Axios.prototype.getUri = function getUri(config) {
  	  config = mergeConfig(this.defaults, config);
  	  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
  	};
  	
  	// Provide aliases for supported request methods
  	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  	  /*eslint func-names:0*/
  	  Axios.prototype[method] = function(url, config) {
  	    return this.request(mergeConfig(config || {}, {
  	      method: method,
  	      url: url
  	    }));
  	  };
  	});
  	
  	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  	  /*eslint func-names:0*/
  	  Axios.prototype[method] = function(url, data, config) {
  	    return this.request(mergeConfig(config || {}, {
  	      method: method,
  	      url: url,
  	      data: data
  	    }));
  	  };
  	});
  	
  	module.exports = Axios;


  /***/ }),
  /* 5 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	function encode(val) {
  	  return encodeURIComponent(val).
  	    replace(/%3A/gi, ':').
  	    replace(/%24/g, '$').
  	    replace(/%2C/gi, ',').
  	    replace(/%20/g, '+').
  	    replace(/%5B/gi, '[').
  	    replace(/%5D/gi, ']');
  	}
  	
  	/**
  	 * Build a URL by appending params to the end
  	 *
  	 * @param {string} url The base of the url (e.g., http://www.google.com)
  	 * @param {object} [params] The params to be appended
  	 * @returns {string} The formatted url
  	 */
  	module.exports = function buildURL(url, params, paramsSerializer) {
  	  /*eslint no-param-reassign:0*/
  	  if (!params) {
  	    return url;
  	  }
  	
  	  var serializedParams;
  	  if (paramsSerializer) {
  	    serializedParams = paramsSerializer(params);
  	  } else if (utils.isURLSearchParams(params)) {
  	    serializedParams = params.toString();
  	  } else {
  	    var parts = [];
  	
  	    utils.forEach(params, function serialize(val, key) {
  	      if (val === null || typeof val === 'undefined') {
  	        return;
  	      }
  	
  	      if (utils.isArray(val)) {
  	        key = key + '[]';
  	      } else {
  	        val = [val];
  	      }
  	
  	      utils.forEach(val, function parseValue(v) {
  	        if (utils.isDate(v)) {
  	          v = v.toISOString();
  	        } else if (utils.isObject(v)) {
  	          v = JSON.stringify(v);
  	        }
  	        parts.push(encode(key) + '=' + encode(v));
  	      });
  	    });
  	
  	    serializedParams = parts.join('&');
  	  }
  	
  	  if (serializedParams) {
  	    var hashmarkIndex = url.indexOf('#');
  	    if (hashmarkIndex !== -1) {
  	      url = url.slice(0, hashmarkIndex);
  	    }
  	
  	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  	  }
  	
  	  return url;
  	};


  /***/ }),
  /* 6 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	function InterceptorManager() {
  	  this.handlers = [];
  	}
  	
  	/**
  	 * Add a new interceptor to the stack
  	 *
  	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
  	 * @param {Function} rejected The function to handle `reject` for a `Promise`
  	 *
  	 * @return {Number} An ID used to remove interceptor later
  	 */
  	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  	  this.handlers.push({
  	    fulfilled: fulfilled,
  	    rejected: rejected
  	  });
  	  return this.handlers.length - 1;
  	};
  	
  	/**
  	 * Remove an interceptor from the stack
  	 *
  	 * @param {Number} id The ID that was returned by `use`
  	 */
  	InterceptorManager.prototype.eject = function eject(id) {
  	  if (this.handlers[id]) {
  	    this.handlers[id] = null;
  	  }
  	};
  	
  	/**
  	 * Iterate over all the registered interceptors
  	 *
  	 * This method is particularly useful for skipping over any
  	 * interceptors that may have become `null` calling `eject`.
  	 *
  	 * @param {Function} fn The function to call for each interceptor
  	 */
  	InterceptorManager.prototype.forEach = function forEach(fn) {
  	  utils.forEach(this.handlers, function forEachHandler(h) {
  	    if (h !== null) {
  	      fn(h);
  	    }
  	  });
  	};
  	
  	module.exports = InterceptorManager;


  /***/ }),
  /* 7 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	var transformData = __webpack_require__(8);
  	var isCancel = __webpack_require__(9);
  	var defaults = __webpack_require__(10);
  	
  	/**
  	 * Throws a `Cancel` if cancellation has been requested.
  	 */
  	function throwIfCancellationRequested(config) {
  	  if (config.cancelToken) {
  	    config.cancelToken.throwIfRequested();
  	  }
  	}
  	
  	/**
  	 * Dispatch a request to the server using the configured adapter.
  	 *
  	 * @param {object} config The config that is to be used for the request
  	 * @returns {Promise} The Promise to be fulfilled
  	 */
  	module.exports = function dispatchRequest(config) {
  	  throwIfCancellationRequested(config);
  	
  	  // Ensure headers exist
  	  config.headers = config.headers || {};
  	
  	  // Transform request data
  	  config.data = transformData(
  	    config.data,
  	    config.headers,
  	    config.transformRequest
  	  );
  	
  	  // Flatten headers
  	  config.headers = utils.merge(
  	    config.headers.common || {},
  	    config.headers[config.method] || {},
  	    config.headers
  	  );
  	
  	  utils.forEach(
  	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
  	    function cleanHeaderConfig(method) {
  	      delete config.headers[method];
  	    }
  	  );
  	
  	  var adapter = config.adapter || defaults.adapter;
  	
  	  return adapter(config).then(function onAdapterResolution(response) {
  	    throwIfCancellationRequested(config);
  	
  	    // Transform response data
  	    response.data = transformData(
  	      response.data,
  	      response.headers,
  	      config.transformResponse
  	    );
  	
  	    return response;
  	  }, function onAdapterRejection(reason) {
  	    if (!isCancel(reason)) {
  	      throwIfCancellationRequested(config);
  	
  	      // Transform response data
  	      if (reason && reason.response) {
  	        reason.response.data = transformData(
  	          reason.response.data,
  	          reason.response.headers,
  	          config.transformResponse
  	        );
  	      }
  	    }
  	
  	    return Promise.reject(reason);
  	  });
  	};


  /***/ }),
  /* 8 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	/**
  	 * Transform the data for a request or a response
  	 *
  	 * @param {Object|String} data The data to be transformed
  	 * @param {Array} headers The headers for the request or response
  	 * @param {Array|Function} fns A single function or Array of functions
  	 * @returns {*} The resulting transformed data
  	 */
  	module.exports = function transformData(data, headers, fns) {
  	  /*eslint no-param-reassign:0*/
  	  utils.forEach(fns, function transform(fn) {
  	    data = fn(data, headers);
  	  });
  	
  	  return data;
  	};


  /***/ }),
  /* 9 */
  /***/ (function(module, exports) {
  	
  	module.exports = function isCancel(value) {
  	  return !!(value && value.__CANCEL__);
  	};


  /***/ }),
  /* 10 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	var normalizeHeaderName = __webpack_require__(11);
  	
  	var DEFAULT_CONTENT_TYPE = {
  	  'Content-Type': 'application/x-www-form-urlencoded'
  	};
  	
  	function setContentTypeIfUnset(headers, value) {
  	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
  	    headers['Content-Type'] = value;
  	  }
  	}
  	
  	function getDefaultAdapter() {
  	  var adapter;
  	  if (typeof XMLHttpRequest !== 'undefined') {
  	    // For browsers use XHR adapter
  	    adapter = __webpack_require__(12);
  	  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
  	    // For node use HTTP adapter
  	    adapter = __webpack_require__(12);
  	  }
  	  return adapter;
  	}
  	
  	var defaults = {
  	  adapter: getDefaultAdapter(),
  	
  	  transformRequest: [function transformRequest(data, headers) {
  	    normalizeHeaderName(headers, 'Accept');
  	    normalizeHeaderName(headers, 'Content-Type');
  	    if (utils.isFormData(data) ||
  	      utils.isArrayBuffer(data) ||
  	      utils.isBuffer(data) ||
  	      utils.isStream(data) ||
  	      utils.isFile(data) ||
  	      utils.isBlob(data)
  	    ) {
  	      return data;
  	    }
  	    if (utils.isArrayBufferView(data)) {
  	      return data.buffer;
  	    }
  	    if (utils.isURLSearchParams(data)) {
  	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
  	      return data.toString();
  	    }
  	    if (utils.isObject(data)) {
  	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
  	      return JSON.stringify(data);
  	    }
  	    return data;
  	  }],
  	
  	  transformResponse: [function transformResponse(data) {
  	    /*eslint no-param-reassign:0*/
  	    if (typeof data === 'string') {
  	      try {
  	        data = JSON.parse(data);
  	      } catch (e) { /* Ignore */ }
  	    }
  	    return data;
  	  }],
  	
  	  /**
  	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
  	   * timeout is not created.
  	   */
  	  timeout: 0,
  	
  	  xsrfCookieName: 'XSRF-TOKEN',
  	  xsrfHeaderName: 'X-XSRF-TOKEN',
  	
  	  maxContentLength: -1,
  	  maxBodyLength: -1,
  	
  	  validateStatus: function validateStatus(status) {
  	    return status >= 200 && status < 300;
  	  }
  	};
  	
  	defaults.headers = {
  	  common: {
  	    'Accept': 'application/json, text/plain, */*'
  	  }
  	};
  	
  	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  	  defaults.headers[method] = {};
  	});
  	
  	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  	});
  	
  	module.exports = defaults;


  /***/ }),
  /* 11 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	module.exports = function normalizeHeaderName(headers, normalizedName) {
  	  utils.forEach(headers, function processHeader(value, name) {
  	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
  	      headers[normalizedName] = value;
  	      delete headers[name];
  	    }
  	  });
  	};


  /***/ }),
  /* 12 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	var settle = __webpack_require__(13);
  	var cookies = __webpack_require__(16);
  	var buildURL = __webpack_require__(5);
  	var buildFullPath = __webpack_require__(17);
  	var parseHeaders = __webpack_require__(20);
  	var isURLSameOrigin = __webpack_require__(21);
  	var createError = __webpack_require__(14);
  	
  	module.exports = function xhrAdapter(config) {
  	  return new Promise(function dispatchXhrRequest(resolve, reject) {
  	    var requestData = config.data;
  	    var requestHeaders = config.headers;
  	
  	    if (utils.isFormData(requestData)) {
  	      delete requestHeaders['Content-Type']; // Let the browser set it
  	    }
  	
  	    if (
  	      (utils.isBlob(requestData) || utils.isFile(requestData)) &&
  	      requestData.type
  	    ) {
  	      delete requestHeaders['Content-Type']; // Let the browser set it
  	    }
  	
  	    var request = new XMLHttpRequest();
  	
  	    // HTTP basic authentication
  	    if (config.auth) {
  	      var username = config.auth.username || '';
  	      var password = unescape(encodeURIComponent(config.auth.password)) || '';
  	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
  	    }
  	
  	    var fullPath = buildFullPath(config.baseURL, config.url);
  	    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
  	
  	    // Set the request timeout in MS
  	    request.timeout = config.timeout;
  	
  	    // Listen for ready state
  	    request.onreadystatechange = function handleLoad() {
  	      if (!request || request.readyState !== 4) {
  	        return;
  	      }
  	
  	      // The request errored out and we didn't get a response, this will be
  	      // handled by onerror instead
  	      // With one exception: request that using file: protocol, most browsers
  	      // will return status as 0 even though it's a successful request
  	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
  	        return;
  	      }
  	
  	      // Prepare the response
  	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
  	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
  	      var response = {
  	        data: responseData,
  	        status: request.status,
  	        statusText: request.statusText,
  	        headers: responseHeaders,
  	        config: config,
  	        request: request
  	      };
  	
  	      settle(resolve, reject, response);
  	
  	      // Clean up request
  	      request = null;
  	    };
  	
  	    // Handle browser request cancellation (as opposed to a manual cancellation)
  	    request.onabort = function handleAbort() {
  	      if (!request) {
  	        return;
  	      }
  	
  	      reject(createError('Request aborted', config, 'ECONNABORTED', request));
  	
  	      // Clean up request
  	      request = null;
  	    };
  	
  	    // Handle low level network errors
  	    request.onerror = function handleError() {
  	      // Real errors are hidden from us by the browser
  	      // onerror should only fire if it's a network error
  	      reject(createError('Network Error', config, null, request));
  	
  	      // Clean up request
  	      request = null;
  	    };
  	
  	    // Handle timeout
  	    request.ontimeout = function handleTimeout() {
  	      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
  	      if (config.timeoutErrorMessage) {
  	        timeoutErrorMessage = config.timeoutErrorMessage;
  	      }
  	      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
  	        request));
  	
  	      // Clean up request
  	      request = null;
  	    };
  	
  	    // Add xsrf header
  	    // This is only done if running in a standard browser environment.
  	    // Specifically not if we're in a web worker, or react-native.
  	    if (utils.isStandardBrowserEnv()) {
  	      // Add xsrf header
  	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
  	        cookies.read(config.xsrfCookieName) :
  	        undefined;
  	
  	      if (xsrfValue) {
  	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
  	      }
  	    }
  	
  	    // Add headers to the request
  	    if ('setRequestHeader' in request) {
  	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
  	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
  	          // Remove Content-Type if data is undefined
  	          delete requestHeaders[key];
  	        } else {
  	          // Otherwise add header to the request
  	          request.setRequestHeader(key, val);
  	        }
  	      });
  	    }
  	
  	    // Add withCredentials to request if needed
  	    if (!utils.isUndefined(config.withCredentials)) {
  	      request.withCredentials = !!config.withCredentials;
  	    }
  	
  	    // Add responseType to request if needed
  	    if (config.responseType) {
  	      try {
  	        request.responseType = config.responseType;
  	      } catch (e) {
  	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
  	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
  	        if (config.responseType !== 'json') {
  	          throw e;
  	        }
  	      }
  	    }
  	
  	    // Handle progress if needed
  	    if (typeof config.onDownloadProgress === 'function') {
  	      request.addEventListener('progress', config.onDownloadProgress);
  	    }
  	
  	    // Not all browsers support upload events
  	    if (typeof config.onUploadProgress === 'function' && request.upload) {
  	      request.upload.addEventListener('progress', config.onUploadProgress);
  	    }
  	
  	    if (config.cancelToken) {
  	      // Handle cancellation
  	      config.cancelToken.promise.then(function onCanceled(cancel) {
  	        if (!request) {
  	          return;
  	        }
  	
  	        request.abort();
  	        reject(cancel);
  	        // Clean up request
  	        request = null;
  	      });
  	    }
  	
  	    if (!requestData) {
  	      requestData = null;
  	    }
  	
  	    // Send the request
  	    request.send(requestData);
  	  });
  	};


  /***/ }),
  /* 13 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var createError = __webpack_require__(14);
  	
  	/**
  	 * Resolve or reject a Promise based on response status.
  	 *
  	 * @param {Function} resolve A function that resolves the promise.
  	 * @param {Function} reject A function that rejects the promise.
  	 * @param {object} response The response.
  	 */
  	module.exports = function settle(resolve, reject, response) {
  	  var validateStatus = response.config.validateStatus;
  	  if (!response.status || !validateStatus || validateStatus(response.status)) {
  	    resolve(response);
  	  } else {
  	    reject(createError(
  	      'Request failed with status code ' + response.status,
  	      response.config,
  	      null,
  	      response.request,
  	      response
  	    ));
  	  }
  	};


  /***/ }),
  /* 14 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var enhanceError = __webpack_require__(15);
  	
  	/**
  	 * Create an Error with the specified message, config, error code, request and response.
  	 *
  	 * @param {string} message The error message.
  	 * @param {Object} config The config.
  	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
  	 * @param {Object} [request] The request.
  	 * @param {Object} [response] The response.
  	 * @returns {Error} The created error.
  	 */
  	module.exports = function createError(message, config, code, request, response) {
  	  var error = new Error(message);
  	  return enhanceError(error, config, code, request, response);
  	};


  /***/ }),
  /* 15 */
  /***/ (function(module, exports) {
  	
  	/**
  	 * Update an Error with the specified config, error code, and response.
  	 *
  	 * @param {Error} error The error to update.
  	 * @param {Object} config The config.
  	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
  	 * @param {Object} [request] The request.
  	 * @param {Object} [response] The response.
  	 * @returns {Error} The error.
  	 */
  	module.exports = function enhanceError(error, config, code, request, response) {
  	  error.config = config;
  	  if (code) {
  	    error.code = code;
  	  }
  	
  	  error.request = request;
  	  error.response = response;
  	  error.isAxiosError = true;
  	
  	  error.toJSON = function toJSON() {
  	    return {
  	      // Standard
  	      message: this.message,
  	      name: this.name,
  	      // Microsoft
  	      description: this.description,
  	      number: this.number,
  	      // Mozilla
  	      fileName: this.fileName,
  	      lineNumber: this.lineNumber,
  	      columnNumber: this.columnNumber,
  	      stack: this.stack,
  	      // Axios
  	      config: this.config,
  	      code: this.code
  	    };
  	  };
  	  return error;
  	};


  /***/ }),
  /* 16 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	module.exports = (
  	  utils.isStandardBrowserEnv() ?
  	
  	  // Standard browser envs support document.cookie
  	    (function standardBrowserEnv() {
  	      return {
  	        write: function write(name, value, expires, path, domain, secure) {
  	          var cookie = [];
  	          cookie.push(name + '=' + encodeURIComponent(value));
  	
  	          if (utils.isNumber(expires)) {
  	            cookie.push('expires=' + new Date(expires).toGMTString());
  	          }
  	
  	          if (utils.isString(path)) {
  	            cookie.push('path=' + path);
  	          }
  	
  	          if (utils.isString(domain)) {
  	            cookie.push('domain=' + domain);
  	          }
  	
  	          if (secure === true) {
  	            cookie.push('secure');
  	          }
  	
  	          document.cookie = cookie.join('; ');
  	        },
  	
  	        read: function read(name) {
  	          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  	          return (match ? decodeURIComponent(match[3]) : null);
  	        },
  	
  	        remove: function remove(name) {
  	          this.write(name, '', Date.now() - 86400000);
  	        }
  	      };
  	    })() :
  	
  	  // Non standard browser env (web workers, react-native) lack needed support.
  	    (function nonStandardBrowserEnv() {
  	      return {
  	        write: function write() {},
  	        read: function read() { return null; },
  	        remove: function remove() {}
  	      };
  	    })()
  	);


  /***/ }),
  /* 17 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var isAbsoluteURL = __webpack_require__(18);
  	var combineURLs = __webpack_require__(19);
  	
  	/**
  	 * Creates a new URL by combining the baseURL with the requestedURL,
  	 * only when the requestedURL is not already an absolute URL.
  	 * If the requestURL is absolute, this function returns the requestedURL untouched.
  	 *
  	 * @param {string} baseURL The base URL
  	 * @param {string} requestedURL Absolute or relative URL to combine
  	 * @returns {string} The combined full path
  	 */
  	module.exports = function buildFullPath(baseURL, requestedURL) {
  	  if (baseURL && !isAbsoluteURL(requestedURL)) {
  	    return combineURLs(baseURL, requestedURL);
  	  }
  	  return requestedURL;
  	};


  /***/ }),
  /* 18 */
  /***/ (function(module, exports) {
  	
  	/**
  	 * Determines whether the specified URL is absolute
  	 *
  	 * @param {string} url The URL to test
  	 * @returns {boolean} True if the specified URL is absolute, otherwise false
  	 */
  	module.exports = function isAbsoluteURL(url) {
  	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  	  // by any combination of letters, digits, plus, period, or hyphen.
  	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  	};


  /***/ }),
  /* 19 */
  /***/ (function(module, exports) {
  	
  	/**
  	 * Creates a new URL by combining the specified URLs
  	 *
  	 * @param {string} baseURL The base URL
  	 * @param {string} relativeURL The relative URL
  	 * @returns {string} The combined URL
  	 */
  	module.exports = function combineURLs(baseURL, relativeURL) {
  	  return relativeURL
  	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
  	    : baseURL;
  	};


  /***/ }),
  /* 20 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	// Headers whose duplicates are ignored by node
  	// c.f. https://nodejs.org/api/http.html#http_message_headers
  	var ignoreDuplicateOf = [
  	  'age', 'authorization', 'content-length', 'content-type', 'etag',
  	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  	  'referer', 'retry-after', 'user-agent'
  	];
  	
  	/**
  	 * Parse headers into an object
  	 *
  	 * ```
  	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
  	 * Content-Type: application/json
  	 * Connection: keep-alive
  	 * Transfer-Encoding: chunked
  	 * ```
  	 *
  	 * @param {String} headers Headers needing to be parsed
  	 * @returns {Object} Headers parsed into an object
  	 */
  	module.exports = function parseHeaders(headers) {
  	  var parsed = {};
  	  var key;
  	  var val;
  	  var i;
  	
  	  if (!headers) { return parsed; }
  	
  	  utils.forEach(headers.split('\n'), function parser(line) {
  	    i = line.indexOf(':');
  	    key = utils.trim(line.substr(0, i)).toLowerCase();
  	    val = utils.trim(line.substr(i + 1));
  	
  	    if (key) {
  	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
  	        return;
  	      }
  	      if (key === 'set-cookie') {
  	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
  	      } else {
  	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
  	      }
  	    }
  	  });
  	
  	  return parsed;
  	};


  /***/ }),
  /* 21 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	module.exports = (
  	  utils.isStandardBrowserEnv() ?
  	
  	  // Standard browser envs have full support of the APIs needed to test
  	  // whether the request URL is of the same origin as current location.
  	    (function standardBrowserEnv() {
  	      var msie = /(msie|trident)/i.test(navigator.userAgent);
  	      var urlParsingNode = document.createElement('a');
  	      var originURL;
  	
  	      /**
  	    * Parse a URL to discover it's components
  	    *
  	    * @param {String} url The URL to be parsed
  	    * @returns {Object}
  	    */
  	      function resolveURL(url) {
  	        var href = url;
  	
  	        if (msie) {
  	        // IE needs attribute set twice to normalize properties
  	          urlParsingNode.setAttribute('href', href);
  	          href = urlParsingNode.href;
  	        }
  	
  	        urlParsingNode.setAttribute('href', href);
  	
  	        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
  	        return {
  	          href: urlParsingNode.href,
  	          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
  	          host: urlParsingNode.host,
  	          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
  	          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
  	          hostname: urlParsingNode.hostname,
  	          port: urlParsingNode.port,
  	          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
  	            urlParsingNode.pathname :
  	            '/' + urlParsingNode.pathname
  	        };
  	      }
  	
  	      originURL = resolveURL(window.location.href);
  	
  	      /**
  	    * Determine if a URL shares the same origin as the current location
  	    *
  	    * @param {String} requestURL The URL to test
  	    * @returns {boolean} True if URL shares the same origin, otherwise false
  	    */
  	      return function isURLSameOrigin(requestURL) {
  	        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
  	        return (parsed.protocol === originURL.protocol &&
  	            parsed.host === originURL.host);
  	      };
  	    })() :
  	
  	  // Non standard browser envs (web workers, react-native) lack needed support.
  	    (function nonStandardBrowserEnv() {
  	      return function isURLSameOrigin() {
  	        return true;
  	      };
  	    })()
  	);


  /***/ }),
  /* 22 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var utils = __webpack_require__(2);
  	
  	/**
  	 * Config-specific merge-function which creates a new config-object
  	 * by merging two configuration objects together.
  	 *
  	 * @param {Object} config1
  	 * @param {Object} config2
  	 * @returns {Object} New object resulting from merging config2 to config1
  	 */
  	module.exports = function mergeConfig(config1, config2) {
  	  // eslint-disable-next-line no-param-reassign
  	  config2 = config2 || {};
  	  var config = {};
  	
  	  var valueFromConfig2Keys = ['url', 'method', 'data'];
  	  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  	  var defaultToConfig2Keys = [
  	    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
  	    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
  	    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
  	    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
  	    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  	  ];
  	  var directMergeKeys = ['validateStatus'];
  	
  	  function getMergedValue(target, source) {
  	    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
  	      return utils.merge(target, source);
  	    } else if (utils.isPlainObject(source)) {
  	      return utils.merge({}, source);
  	    } else if (utils.isArray(source)) {
  	      return source.slice();
  	    }
  	    return source;
  	  }
  	
  	  function mergeDeepProperties(prop) {
  	    if (!utils.isUndefined(config2[prop])) {
  	      config[prop] = getMergedValue(config1[prop], config2[prop]);
  	    } else if (!utils.isUndefined(config1[prop])) {
  	      config[prop] = getMergedValue(undefined, config1[prop]);
  	    }
  	  }
  	
  	  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
  	    if (!utils.isUndefined(config2[prop])) {
  	      config[prop] = getMergedValue(undefined, config2[prop]);
  	    }
  	  });
  	
  	  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
  	
  	  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
  	    if (!utils.isUndefined(config2[prop])) {
  	      config[prop] = getMergedValue(undefined, config2[prop]);
  	    } else if (!utils.isUndefined(config1[prop])) {
  	      config[prop] = getMergedValue(undefined, config1[prop]);
  	    }
  	  });
  	
  	  utils.forEach(directMergeKeys, function merge(prop) {
  	    if (prop in config2) {
  	      config[prop] = getMergedValue(config1[prop], config2[prop]);
  	    } else if (prop in config1) {
  	      config[prop] = getMergedValue(undefined, config1[prop]);
  	    }
  	  });
  	
  	  var axiosKeys = valueFromConfig2Keys
  	    .concat(mergeDeepPropertiesKeys)
  	    .concat(defaultToConfig2Keys)
  	    .concat(directMergeKeys);
  	
  	  var otherKeys = Object
  	    .keys(config1)
  	    .concat(Object.keys(config2))
  	    .filter(function filterAxiosKeys(key) {
  	      return axiosKeys.indexOf(key) === -1;
  	    });
  	
  	  utils.forEach(otherKeys, mergeDeepProperties);
  	
  	  return config;
  	};


  /***/ }),
  /* 23 */
  /***/ (function(module, exports) {
  	
  	/**
  	 * A `Cancel` is an object that is thrown when an operation is canceled.
  	 *
  	 * @class
  	 * @param {string=} message The message.
  	 */
  	function Cancel(message) {
  	  this.message = message;
  	}
  	
  	Cancel.prototype.toString = function toString() {
  	  return 'Cancel' + (this.message ? ': ' + this.message : '');
  	};
  	
  	Cancel.prototype.__CANCEL__ = true;
  	
  	module.exports = Cancel;


  /***/ }),
  /* 24 */
  /***/ (function(module, exports, __webpack_require__) {
  	
  	var Cancel = __webpack_require__(23);
  	
  	/**
  	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
  	 *
  	 * @class
  	 * @param {Function} executor The executor function.
  	 */
  	function CancelToken(executor) {
  	  if (typeof executor !== 'function') {
  	    throw new TypeError('executor must be a function.');
  	  }
  	
  	  var resolvePromise;
  	  this.promise = new Promise(function promiseExecutor(resolve) {
  	    resolvePromise = resolve;
  	  });
  	
  	  var token = this;
  	  executor(function cancel(message) {
  	    if (token.reason) {
  	      // Cancellation has already been requested
  	      return;
  	    }
  	
  	    token.reason = new Cancel(message);
  	    resolvePromise(token.reason);
  	  });
  	}
  	
  	/**
  	 * Throws a `Cancel` if cancellation has been requested.
  	 */
  	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  	  if (this.reason) {
  	    throw this.reason;
  	  }
  	};
  	
  	/**
  	 * Returns an object that contains a new `CancelToken` and a function that, when called,
  	 * cancels the `CancelToken`.
  	 */
  	CancelToken.source = function source() {
  	  var cancel;
  	  var token = new CancelToken(function executor(c) {
  	    cancel = c;
  	  });
  	  return {
  	    token: token,
  	    cancel: cancel
  	  };
  	};
  	
  	module.exports = CancelToken;


  /***/ }),
  /* 25 */
  /***/ (function(module, exports) {
  	
  	/**
  	 * Syntactic sugar for invoking a function and expanding an array for arguments.
  	 *
  	 * Common use case would be to use `Function.prototype.apply`.
  	 *
  	 *  ```js
  	 *  function f(x, y, z) {}
  	 *  var args = [1, 2, 3];
  	 *  f.apply(null, args);
  	 *  ```
  	 *
  	 * With `spread` this example can be re-written.
  	 *
  	 *  ```js
  	 *  spread(function(x, y, z) {})([1, 2, 3]);
  	 *  ```
  	 *
  	 * @param {Function} callback
  	 * @returns {Function}
  	 */
  	module.exports = function spread(callback) {
  	  return function wrap(arr) {
  	    return callback.apply(null, arr);
  	  };
  	};


  /***/ })
  /******/ ])
  });

  });

  var httpRequest = /*#__PURE__*/function () {
    function httpRequest() {}

    var _proto = httpRequest.prototype;

    // 拦截
    _proto.interceptors = function interceptors(instance, url) {
      // 请求拦截器
      instance.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        return config;
      }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }); // 相应拦截器

      instance.interceptors.response.use(function (response) {
        var res = (response == null ? void 0 : response.data) || {};
        return Object.assign({
          httpStatusCode: response.status
        }, res);
      }, function (error) {
        JSSDK.assert && JSSDK.assert(false, 440108, {
          '{#1}': error
        }); // 数据请求失败

        return Promise.reject(error);
      });
    }
    /**
     * 创建实例
     * @param {Object} config 请求时配置
     * @return {Object}
     */
    ;

    _proto.create = function create(config) {
      var conf = _extends$1({
        // 继承引用sdk页面的协议头信息
        baseURL: '',
        // 10s超时
        timeout: 10 * 1000,
        // 解决跨域cookie丢失问题
        // withCredentials: true,
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }, config);

      return axios.create(conf);
    }
    /**
     * 请求实例
     * @param {Object} options 请求参数
     * @param {Object} config 请求时配置
     * @return {Object}
     */
    ;

    _proto.request = function request(options, config) {
      var instance = this.create(config);
      this.interceptors(instance, options.url);
      return instance(options);
    };

    return httpRequest;
  }();

  var Net = new httpRequest();
  JSSDK.extend({
    requestHandle: Net.request.bind(Net)
  });

  /**
   * 绑定事件兼容
   */

  function addEvent(element, eventType, callback) {
    if (document.addEventListener) {
      element.addEventListener(eventType, callback, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + eventType, function () {
        callback.call(element);
      });
    } else {
      element['on' + eventType] = callback;
    }
  }
  function getCustomPageTrack() {
    var _cacheAutoTrack$custo, _cacheAutoTrack$custo2, _cacheAutoTrack$custo3;

    var currentUserPath = '';
    return ((_cacheAutoTrack$custo = cacheAutoTrack.customConfig) == null ? void 0 : (_cacheAutoTrack$custo2 = _cacheAutoTrack$custo.filter(function (item) {
      var _Object$keys, _location$href;

      currentUserPath = (_Object$keys = Object.keys(item)) == null ? void 0 : _Object$keys[0];
      return (_location$href = location.href) == null ? void 0 : _location$href.includes(currentUserPath);
    })) == null ? void 0 : (_cacheAutoTrack$custo3 = _cacheAutoTrack$custo2[0]) == null ? void 0 : _cacheAutoTrack$custo3[currentUserPath]) || {};
  }

  /**
   * @file 自动上报页面点击事件
   */
  function pageClick() {
    addEvent(document, 'click', function (e) {
      var _target$dataset;

      var ev = e || window.event;

      if (!ev) {
        return false;
      }

      var target = ev.target || ev.srcElement;

      if (typeof target !== 'object') {
        return false;
      }

      if (typeof target.tagName !== 'string') {
        return false;
      }

      var tagName = target.tagName.toLowerCase();

      if (tagName === 'body' || tagName === 'html') {
        return false;
      }

      var customConfig = getCustomPageTrack();

      if (cacheAutoTrack.config.autoTrackPageClick && !customConfig.ignoreTrack && ((_target$dataset = target.dataset) == null ? void 0 : _target$dataset.ignoreTrack) !== 'true') {
        pageMethods.trackPageClick(target, true);
      }
    });
  }

  /**
   * @file 自动上报页面浏览事件
   */
  function pageView(isTrackSinglePage) {
    var customConfig = getCustomPageTrack(); // 如果不是单页应用 && 没有单独设置不自动采集，直接上报浏览事件

    if (cacheAutoTrack.config.autoTrackPageView && !isTrackSinglePage && !customConfig.ignoreTrack) {
      var properties = JSSDK.filterCustomProperties(customConfig.customProperty || {});
      return pageMethods.trackPageView(true, properties);
    } // 单页应用


    addSinglePageEvent(function (last_url) {
      if (last_url !== location.href) {
        JSSDK.setStateData({
          'reportData.properties._referrer_name': last_url
        });
      }

      var customConfig = getCustomPageTrack();
      var properties = JSSDK.filterCustomProperties(customConfig.customProperty || {});

      if (cacheAutoTrack.config.autoTrackPageView && !customConfig.ignoreTrack) {
        pageMethods.trackPageView(true, properties);
      }
    });
  }

  function addSinglePageEvent(callback) {
    var current_url = location.href;
    var historyPushState = window.history.pushState;
    var historyReplaceState = window.history.replaceState;

    if (JSSDK.getType(window.history.pushState) === 'function') {
      window.history.pushState = function () {
        historyPushState.apply(window.history, arguments);
        callback(current_url);
        current_url = location.href;
      };
    }

    if (JSSDK.getType(window.history.replaceState) === 'function') {
      var replaceStateFlag = false;

      window.history.replaceState = function () {
        historyReplaceState.apply(window.history, arguments);
        !replaceStateFlag && callback(current_url);
        current_url = location.href;
        replaceStateFlag = true;
      };
    }

    var singlePageEvent;

    if (window.document.documentMode) {
      singlePageEvent = 'hashchange';
    } else {
      singlePageEvent = historyPushState ? 'popstate' : 'hashchange';
    }

    addEvent(window, singlePageEvent, function () {
      callback(current_url);
      current_url = location.href;
    });
  }

  /**
   * @file web页面点击、浏览事件自动上报
   */
  var cacheAutoTrack = {
    config: {},
    customConfig: []
  };
  /**
   *
   * @param {*} initConfig 初始化参数
   * config: {
   *   autoTrackConfig: {
   *     autoTrack: boolean, 是否开启页面浏览、点击的自动采集，默认false
   *     autoTrackPageView: boolean, 是否开启页面浏览自动采集，默认false, 如果开启自动采集，则禁止手动调用
   *     autoTrackPageClick: boolean, 是否开启页面点击的自动采集，默认false，如果开启自动采集，则禁止手动调用
   *     isTrackSinglePage: boolean, 是否单页应用开启页面浏览自动采集，默认true
   *   }
   * }
   */

  function initAutoTrack(initConfig) {
    var _initConfig$config;

    var autoTrackConfig = (initConfig == null ? void 0 : (_initConfig$config = initConfig.config) == null ? void 0 : _initConfig$config.autoTrackConfig) || {}; // 是否自动上报浏览事件

    var autoTrackPageView = autoTrackConfig.autoTrack && autoTrackConfig.autoTrackPageView; // 是否单页应用

    var isTrackSinglePage = autoTrackConfig.isTrackSinglePage; // 是否自动上报点击事件

    var autoTrackPageClick = autoTrackConfig.autoTrack && autoTrackConfig.autoTrackPageClick; // 缓存配置，在手动调用时校验

    cacheAutoTrack.config = {
      autoTrackPageView: autoTrackPageView,
      autoTrackPageClick: autoTrackPageClick
    };
    pageView(isTrackSinglePage);
    pageClick();
  }

  /**
   * @file 在线参数对外提供的方法
   */
  var pageMethods = {
    /**
     * 浏览页面事件
     */
    trackPageView: function trackPageView(isFromAutoTrack, customPageViewProperties) {
      var _location$href, _document$referrer;

      if (isFromAutoTrack === void 0) {
        isFromAutoTrack = false;
      }

      if (customPageViewProperties === void 0) {
        customPageViewProperties = {};
      }

      if (!JSSDK.isObject(customPageViewProperties)) {
        return JSSDK.assert(false, 440120);
      }

      var customConfig = getCustomPageTrack(); // 如果来源于自动调用 && 配置了自动上报 && 不忽略当前页面

      if (!isFromAutoTrack && cacheAutoTrack.config.autoTrackPageView && !customConfig.ignoreTrack) {
        return;
      }

      var properties = {
        _page_host: (_location$href = location.href) == null ? void 0 : _location$href.split('?')[0],
        _referrer_host: (_document$referrer = document.referrer) == null ? void 0 : _document$referrer.split('?')[0]
      };
      JSSDK.trackEvent('_webViewScreen', properties, customPageViewProperties, {
        _event_type: isFromAutoTrack ? 2 : 3
      });
    },

    /**
     * 设置页面浏览自动采集
     * [{
     *   path: {
     *     ignoreTrack: true, // true-忽略追踪
     *     customProperty: {}, // 自定义属性
     *   }
     * }]
     */
    setTrackPageView: function setTrackPageView(config) {
      if (JSSDK.getStateData('logEnabled')) {
        JSSDK.infoLog('setTrackPageView', config);
      }

      if (!Array.isArray(config) || config.filter(function (item) {
        return !JSSDK.isObject(item);
      }).length) {
        return JSSDK.assert(false, 440116);
      }

      cacheAutoTrack.customConfig = config;
    },

    /**
     * 设置自动采集开关
     * config: {
     *   autoTrack: boolean, 是否开启页面浏览、点击的自动采集，默认false
     *   autoTrackPageView: boolean, 是否开启页面浏览自动采集，默认false, 如果开启自动采集，则禁止手动调用
     *   autoTrackPageClick: boolean, 是否开启页面点击的自动采集，默认false，如果开启自动采集，则禁止手动调用
     * }
     */
    setAutoTrack: function setAutoTrack(config) {
      if (JSSDK.getStateData('logEnabled')) {
        JSSDK.infoLog('setAutoTrack', config);
      }

      if (!JSSDK.isObject(config)) {
        return JSSDK.assert(false, 440120);
      }

      if (typeof config.autoTrack === 'boolean') {
        cacheAutoTrack.config.autoTrackPageView = config.autoTrack;
        cacheAutoTrack.config.autoTrackPageClick = config.autoTrack;
      }

      if (typeof config.autoTrackPageView === 'boolean') {
        if (typeof config.autoTrack === 'boolean') {
          cacheAutoTrack.config.autoTrackPageView = config.autoTrack && config.autoTrackPageView;
        } else {
          cacheAutoTrack.config.autoTrackPageView = config.autoTrackPageView;
        }
      }

      if (typeof config.autoTrackPageClick === 'boolean') {
        if (typeof config.autoTrack === 'boolean') {
          cacheAutoTrack.config.autoTrackPageClick = config.autoTrack && config.autoTrackPageClick;
        } else {
          cacheAutoTrack.config.autoTrackPageClick = config.autoTrackPageClick;
        }
      }
    },

    /**
     * 页面元素点击
     * @param {*} element 点击的元素对象
     */
    trackPageClick: function trackPageClick(element, isFromAutoTrack) {
      var _element$tagName;

      if (isFromAutoTrack === void 0) {
        isFromAutoTrack = false;
      }

      if (!element) {
        return JSSDK.assert(false, 440102);
      }

      var dataset = element.dataset;
      var customConfig = getCustomPageTrack(); // 来源于手动调用 && 配置了自动上报 && 没有配置忽略当前页面 && 没有配置忽略当前点击元素
      // 想要忽略某个点击元素的自动采集，可设置data-ignore-track=true

      if (!isFromAutoTrack && cacheAutoTrack.config.allowTrackPageClick && !customConfig.ignoreTrack && dataset.ignoreTrack !== 'true') {
        return;
      }

      var customProperty = JSSDK.stringLikeJsonToObject(dataset == null ? void 0 : dataset.customProperty);
      var eleProperties = {
        _element_id: (dataset == null ? void 0 : dataset.elementId) || element.id,
        _element_content: element.innerText,
        _element_type: (_element$tagName = element.tagName) == null ? void 0 : _element$tagName.toLowerCase()
      };
      var attributeName = element.getAttribute('name');

      if (attributeName) {
        eleProperties._element_name = attributeName;
      }

      element.className && (eleProperties._element_class_name = element.className);

      if (dataset.elementTargetUrl) {
        eleProperties._element_target_url = dataset.elementTargetUrl;
      } else if (eleProperties._element_type === 'a') {
        eleProperties._element_target_url = element.getAttribute('href');
      }

      JSSDK.trackEvent('_webElementClick', eleProperties, customProperty, {
        _event_type: isFromAutoTrack ? 2 : 3
      });
    }
  };

  JSSDK.NATIVE = Object.assign(JSSDK.NATIVE, _extends$1({}, pageMethods));

  var _window = window || {};

  var VariableLibrary = {
    navigator: _window.navigator || {},
    // 信息map
    infoMap: {
      browser: ['Safari', 'Chrome', 'Edge', 'IE', 'Firefox', 'Firefox Focus', 'Chromium', 'Opera', 'Vivaldi', 'Yandex', 'Arora', 'Lunascape', 'QupZilla', 'Coc Coc', 'Kindle', 'Iceweasel', 'Konqueror', 'Iceape', 'SeaMonkey', 'Epiphany', '360', '360SE', '360EE', 'UC', 'QQBrowser', 'QQ', 'Baidu', 'Maxthon', 'Sogou', 'LBBROWSER', '2345Explorer', 'TheWorld', 'XiaoMi', 'Quark', 'Qiyu', 'Wechat', 'WechatWork', 'Taobao', 'Alipay', 'Weibo', 'Douban', 'Suning', 'iQiYi'],
      os: ['Windows', 'Linux', 'Mac OS', 'Android', 'Ubuntu', 'FreeBSD', 'Debian', 'iOS', 'Windows Phone', 'BlackBerry', 'MeeGo', 'Symbian', 'Chrome OS', 'WebOS'],
      device: ['Mobile', 'Tablet', 'iPad']
    }
  };

  var initMatchMap = function initMatchMap() {
    var u = VariableLibrary.navigator.userAgent || '';
    return {
      // 浏览器
      Safari: u.indexOf('Safari') > -1,
      Chrome: u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1,
      IE: u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1,
      Edge: u.indexOf('Edge') > -1,
      Firefox: u.indexOf('Firefox') > -1 || u.indexOf('FxiOS') > -1,
      'Firefox Focus': u.indexOf('Focus') > -1,
      Chromium: u.indexOf('Chromium') > -1,
      Opera: u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1,
      Vivaldi: u.indexOf('Vivaldi') > -1,
      Yandex: u.indexOf('YaBrowser') > -1,
      Arora: u.indexOf('Arora') > -1,
      Lunascape: u.indexOf('Lunascape') > -1,
      QupZilla: u.indexOf('QupZilla') > -1,
      'Coc Coc': u.indexOf('coc_coc_browser') > -1,
      Kindle: u.indexOf('Kindle') > -1 || u.indexOf('Silk/') > -1,
      Iceweasel: u.indexOf('Iceweasel') > -1,
      Konqueror: u.indexOf('Konqueror') > -1,
      Iceape: u.indexOf('Iceape') > -1,
      SeaMonkey: u.indexOf('SeaMonkey') > -1,
      Epiphany: u.indexOf('Epiphany') > -1,
      360: u.indexOf('QihooBrowser') > -1 || u.indexOf('QHBrowser') > -1,
      '360EE': u.indexOf('360EE') > -1,
      '360SE': u.indexOf('360SE') > -1,
      UC: u.indexOf('UC') > -1 || u.indexOf(' UBrowser') > -1,
      QQBrowser: u.indexOf('QQBrowser') > -1,
      QQ: u.indexOf('QQ/') > -1,
      Baidu: u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1,
      Maxthon: u.indexOf('Maxthon') > -1,
      Sogou: u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1,
      LBBROWSER: u.indexOf('LBBROWSER') > -1 || u.indexOf('LieBaoFast') > -1,
      '2345Explorer': u.indexOf('2345Explorer') > -1,
      TheWorld: u.indexOf('TheWorld') > -1,
      XiaoMi: u.indexOf('MiuiBrowser') > -1,
      Quark: u.indexOf('Quark') > -1,
      Qiyu: u.indexOf('Qiyu') > -1,
      Wechat: u.indexOf('MicroMessenger') > -1,
      WechatWork: u.indexOf('wxwork/') > -1,
      Taobao: u.indexOf('AliApp(TB') > -1,
      Alipay: u.indexOf('AliApp(AP') > -1,
      Weibo: u.indexOf('Weibo') > -1,
      Douban: u.indexOf('com.douban.frodo') > -1,
      Suning: u.indexOf('SNEBUY-APP') > -1,
      iQiYi: u.indexOf('IqiyiApp') > -1,
      DingTalk: u.indexOf('DingTalk') > -1,
      Vivo: u.indexOf('VivoBrowser') > -1,
      Huawei: u.indexOf('HuaweiBrowser') > -1 || u.indexOf('HUAWEI/') > -1 || u.indexOf('HONOR') > -1 || u.indexOf('HBPC/') > -1,
      // 系统或平台
      Windows: u.indexOf('Windows') > -1,
      Linux: u.indexOf('Linux') > -1 || u.indexOf('X11') > -1,
      'Mac OS': u.indexOf('Macintosh') > -1,
      Android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
      Ubuntu: u.indexOf('Ubuntu') > -1,
      FreeBSD: u.indexOf('FreeBSD') > -1,
      Debian: u.indexOf('Debian') > -1,
      'Windows Phone': u.indexOf('IEMobile') > -1 || u.indexOf('Windows Phone') > -1,
      BlackBerry: u.indexOf('BlackBerry') > -1 || u.indexOf('RIM') > -1,
      MeeGo: u.indexOf('MeeGo') > -1,
      Symbian: u.indexOf('Symbian') > -1,
      iOS: u.indexOf('like Mac OS X') > -1,
      'Chrome OS': u.indexOf('CrOS') > -1,
      WebOS: u.indexOf('hpwOS') > -1,
      // 设备
      Mobile: u.indexOf('Mobi') > -1 || u.indexOf('iPh') > -1 || u.indexOf('480') > -1,
      Tablet: u.indexOf('Tablet') > -1 || u.indexOf('Nexus 7') > -1,
      iPad: u.indexOf('iPad') > -1
    };
  };

  var MethodLibrary = {
    // 在信息map和匹配库中进行匹配
    matchInfoMap: function matchInfoMap() {
      this.matchMap = initMatchMap();

      for (var s in VariableLibrary.infoMap) {
        for (var i = 0; i < VariableLibrary.infoMap[s].length; i++) {
          var value = VariableLibrary.infoMap[s][i];

          if (this.matchMap[value]) {
            this[s] = value;
          }
        }
      }
    },
    // 获取当前操作系统
    getOS: function getOS() {
      return this.os;
    },
    // 获取操作系统版本
    getOSVersion: function getOSVersion() {
      var _this = this;

      var u = VariableLibrary.navigator.userAgent || '';
      _this.osVersion = ''; // 系统版本信息

      var osVersion = {
        Windows: function Windows() {
          var v = u.replace(/^.*Windows NT ([\d.]+);.*$/, '$1');
          var oldWindowsVersionMap = {
            10: '10 || 11',
            6.3: '8.1',
            6.2: '8',
            6.1: '7',
            '6.0': 'Vista',
            5.2: 'XP 64-Bit',
            5.1: 'XP',
            '5.0': '2000',
            '4.0': 'NT 4.0',
            '3.5.1': 'NT 3.5.1',
            3.5: 'NT 3.5',
            3.1: 'NT 3.1'
          };
          return oldWindowsVersionMap[v] || v;
        },
        Android: function Android() {
          return u.replace(/^.*Android ([\d.]+);.*$/, '$1');
        },
        iOS: function iOS() {
          return u.replace(/^.*OS ([\d_|\.]+) like.*$/, '$1').replace(/_/g, '.');
        },
        Debian: function Debian() {
          return u.replace(/^.*Debian\/([\d.]+).*$/, '$1');
        },
        'Windows Phone': function WindowsPhone() {
          return u.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, '$2');
        },
        'Mac OS': function MacOS() {
          return u.replace(/^.*Mac OS X ([\d_|\.]+).*$/, '$1').replace(/_/g, '.');
        },
        WebOS: function WebOS() {
          return u.replace(/^.*hpwOS\/([\d.]+);.*$/, '$1');
        }
      };

      if (osVersion[_this.os]) {
        _this.osVersion = osVersion[_this.os]();

        if (_this.osVersion === u) {
          _this.osVersion = '';
        }
      }

      return _this.osVersion;
    },
    // 获取设备类型
    getDeviceType: function getDeviceType() {
      return this.device || 'PC';
    },
    // 获取当前语言
    getLanguage: function getLanguage() {
      var language = VariableLibrary.navigator.browserLanguage || VariableLibrary.navigator.language || '';

      if (language) {
        var arr = language.split('-');

        if (arr[1]) {
          arr[1] = arr[1].toUpperCase();
          return arr.join('_');
        }
      }

      return '';
    },
    // 浏览器信息
    getBrowserInfo: function getBrowserInfo() {
      var _this = this;

      var u = VariableLibrary.navigator.userAgent || '';

      var _mime = function _mime(option, value) {
        var mimeTypes = VariableLibrary.navigator.mimeTypes;

        if (!mimeTypes) {
          return false;
        }

        for (var key in mimeTypes) {
          var _mimeTypes$key;

          if (((_mimeTypes$key = mimeTypes[key]) == null ? void 0 : _mimeTypes$key[option]) === value) {
            return true;
          }
        }

        return false;
      };

      var match = _this.matchMap;
      var is360 = false;

      if (_window.chrome) {
        var chrome_version = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');

        if (chrome_version > 36 && _window.showModalDialog) {
          is360 = true;
        } else if (chrome_version > 45) {
          is360 = _mime('type', 'application/vnd.chromium.remoting-viewer');
        }
      }

      if (match['Baidu'] && match['Opera']) {
        match['Baidu'] = false;
      }

      if (match['Mobile']) {
        match['Mobile'] = !(u.indexOf('iPad') > -1);
      }

      if (is360) {
        match['360SE'] = true;
      }

      if (match['IE'] || match['Edge']) {
        var navigator_top = _window.screenTop - _window.screenY;

        switch (navigator_top) {
          case 102:
            // 有收藏栏,非贴边
            match['360EE'] = true;
            break;

          case 104:
            // 有收藏栏,非贴边
            match['360SE'] = true;
            break;
        }
      }

      var browerVersionMap = {
        Safari: function Safari() {
          return u.replace(/^.*Version\/([\d.]+).*$/, '$1');
        },
        Chrome: function Chrome() {
          return u.replace(/^.*Chrome\/([\d.]+).*$/, '$1').replace(/^.*CriOS\/([\d.]+).*$/, '$1');
        },
        IE: function IE() {
          return u.replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1');
        },
        Edge: function Edge() {
          return u.replace(/^.*Edge\/([\d.]+).*$/, '$1');
        },
        Firefox: function Firefox() {
          return u.replace(/^.*Firefox\/([\d.]+).*$/, '$1').replace(/^.*FxiOS\/([\d.]+).*$/, '$1');
        },
        'Firefox Focus': function FirefoxFocus() {
          return u.replace(/^.*Focus\/([\d.]+).*$/, '$1');
        },
        Chromium: function Chromium() {
          return u.replace(/^.*Chromium\/([\d.]+).*$/, '$1');
        },
        Opera: function Opera() {
          return u.replace(/^.*Opera\/([\d.]+).*$/, '$1').replace(/^.*OPR\/([\d.]+).*$/, '$1');
        },
        Vivaldi: function Vivaldi() {
          return u.replace(/^.*Vivaldi\/([\d.]+).*$/, '$1');
        },
        Yandex: function Yandex() {
          return u.replace(/^.*YaBrowser\/([\d.]+).*$/, '$1');
        },
        Arora: function Arora() {
          return u.replace(/^.*Arora\/([\d.]+).*$/, '$1');
        },
        Lunascape: function Lunascape() {
          return u.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, '$1');
        },
        QupZilla: function QupZilla() {
          return u.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, '$1');
        },
        'Coc Coc': function CocCoc() {
          return u.replace(/^.*coc_coc_browser\/([\d.]+).*$/, '$1');
        },
        Kindle: function Kindle() {
          return u.replace(/^.*Version\/([\d.]+).*$/, '$1');
        },
        Iceweasel: function Iceweasel() {
          return u.replace(/^.*Iceweasel\/([\d.]+).*$/, '$1');
        },
        Konqueror: function Konqueror() {
          return u.replace(/^.*Konqueror\/([\d.]+).*$/, '$1');
        },
        Iceape: function Iceape() {
          return u.replace(/^.*Iceape\/([\d.]+).*$/, '$1');
        },
        SeaMonkey: function SeaMonkey() {
          return u.replace(/^.*SeaMonkey\/([\d.]+).*$/, '$1');
        },
        Epiphany: function Epiphany() {
          return u.replace(/^.*Epiphany\/([\d.]+).*$/, '$1');
        },
        360: function _() {
          return u.replace(/^.*QihooBrowser\/([\d.]+).*$/, '$1');
        },
        '360SE': function SE() {
          var hash = {
            63: '10.0',
            55: '9.1',
            45: '8.1',
            42: '8.0',
            31: '7.0',
            21: '6.3'
          };
          var chrome_version = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
          return hash[chrome_version] || chrome_version;
        },
        '360EE': function EE() {
          var hash = {
            69: '11.0',
            63: '9.5',
            55: '9.0',
            50: '8.7',
            30: '7.5'
          };
          var chrome_version = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
          return hash[chrome_version] || chrome_version;
        },
        Maxthon: function Maxthon() {
          return u.replace(/^.*Maxthon\/([\d.]+).*$/, '$1');
        },
        QQBrowser: function QQBrowser() {
          return u.replace(/^.*QQBrowser\/([\d.]+).*$/, '$1');
        },
        QQ: function QQ() {
          return u.replace(/^.*QQ\/([\d.]+).*$/, '$1');
        },
        Baidu: function Baidu() {
          return u.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, '$1');
        },
        UC: function UC() {
          return u.replace(/^.*UC?Browser\/([\d.]+).*$/, '$1');
        },
        Sogou: function Sogou() {
          return u.replace(/^.*SE ([\d.X]+).*$/, '$1').replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, '$1');
        },
        Liebao: function Liebao() {
          var version = '';

          if (u.indexOf('LieBaoFast') > -1) {
            version = u.replace(/^.*LieBaoFast\/([\d.]+).*$/, '$1');
          }

          var hash = {
            57: '6.5',
            49: '6.0',
            46: '5.9',
            42: '5.3',
            39: '5.2',
            34: '5.0',
            29: '4.5',
            21: '4.0'
          };
          var chrome_version = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
          return version || hash[chrome_version] || chrome_version;
        },
        LBBROWSER: function LBBROWSER() {
          var version = '';

          if (u.indexOf('LieBaoFast') > -1) {
            version = u.replace(/^.*LieBaoFast\/([\d.]+).*$/, '$1');
          }

          var hash = {
            57: '6.5',
            49: '6.0',
            46: '5.9',
            42: '5.3',
            39: '5.2',
            34: '5.0',
            29: '4.5',
            21: '4.0'
          };
          var chrome_version = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
          return version || hash[chrome_version] || chrome_version;
        },
        '2345Explorer': function Explorer() {
          return u.replace(/^.*2345Explorer\/([\d.]+).*$/, '$1');
        },
        '115Browser': function Browser() {
          return u.replace(/^.*115Browser\/([\d.]+).*$/, '$1');
        },
        TheWorld: function TheWorld() {
          return u.replace(/^.*TheWorld ([\d.]+).*$/, '$1');
        },
        XiaoMi: function XiaoMi() {
          return u.replace(/^.*MiuiBrowser\/([\d.]+).*$/, '$1');
        },
        Vivo: function Vivo() {
          return u.replace(/^.*VivoBrowser\/([\d.]+).*$/, '$1');
        },
        Quark: function Quark() {
          return u.replace(/^.*Quark\/([\d.]+).*$/, '$1');
        },
        Qiyu: function Qiyu() {
          return u.replace(/^.*Qiyu\/([\d.]+).*$/, '$1');
        },
        Wechat: function Wechat() {
          return u.replace(/^.*MicroMessenger\/([\d.]+).*$/, '$1');
        },
        WechatWork: function WechatWork() {
          return u.replace(/^.*wxwork\/([\d.]+).*$/, '$1');
        },
        Taobao: function Taobao() {
          return u.replace(/^.*AliApp\(TB\/([\d.]+).*$/, '$1');
        },
        Alipay: function Alipay() {
          return u.replace(/^.*AliApp\(AP\/([\d.]+).*$/, '$1');
        },
        Weibo: function Weibo() {
          return u.replace(/^.*weibo__([\d.]+).*$/, '$1');
        },
        Douban: function Douban() {
          return u.replace(/^.*com.douban.frodo\/([\d.]+).*$/, '$1');
        },
        Suning: function Suning() {
          return u.replace(/^.*SNEBUY-APP([\d.]+).*$/, '$1');
        },
        iQiYi: function iQiYi() {
          return u.replace(/^.*IqiyiVersion\/([\d.]+).*$/, '$1');
        },
        DingTalk: function DingTalk() {
          return u.replace(/^.*DingTalk\/([\d.]+).*$/, '$1');
        },
        Huawei: function Huawei() {
          return u.replace(/^.*Version\/([\d.]+).*$/, '$1').replace(/^.*HuaweiBrowser\/([\d.]+).*$/, '$1').replace(/^.*HBPC\/([\d.]+).*$/, '$1');
        }
      };
      _this.browserVersion = '';

      if (browerVersionMap[_this.browser]) {
        _this.browserVersion = browerVersionMap[_this.browser]();

        if (_this.browserVersion === u) {
          _this.browserVersion = '';
        }
      }

      if (_this.browser === 'Chrome' && u.match(/\S+Browser/)) {
        var _u$match;

        _this.browser = (_u$match = u.match(/\S+Browser/)) == null ? void 0 : _u$match[0];
        _this.version = u.replace(/^.*Browser\/([\d.]+).*$/, '$1');
      }

      return {
        browser: _this.browser,
        browserVersion: _this.browserVersion
      };
    },
    getScreenSize: function getScreenSize() {
      var _window$screen, _document, _document$body, _window$screen2, _document2, _document2$body;

      return {
        width: ((_window$screen = _window.screen) == null ? void 0 : _window$screen.width) || _window.innerWidth || ((_document = document) == null ? void 0 : (_document$body = _document.body) == null ? void 0 : _document$body.clientWidth) || 0,
        height: ((_window$screen2 = _window.screen) == null ? void 0 : _window$screen2.height) || _window.innerHeight || ((_document2 = document) == null ? void 0 : (_document2$body = _document2.body) == null ? void 0 : _document2$body.clientHeight) || 0
      };
    }
  };
  MethodLibrary.matchInfoMap();
  var sysInfo = {
    deviceType: MethodLibrary.getDeviceType(),
    os: MethodLibrary.getOS(),
    osVersion: MethodLibrary.getOSVersion(),
    language: MethodLibrary.getLanguage(),
    browserInfo: MethodLibrary.getBrowserInfo(),
    screenSize: MethodLibrary.getScreenSize()
  };

  /**
   * 获取用户的设备类型
   * @enum 0 Other
   * @enum 1 Android Phone
   * @enum 2 Android Pad
   * @enum 3 iPhone
   * @enum 4 iPad
   * @enum 5 Mac
   * @enum 6 PC(windows)
   */

  function getOsType(sysInfo) {
    var osTypeMap = {
      1: sysInfo.deviceType === 'Mobile' && sysInfo.os === 'Android',
      2: sysInfo.deviceType === 'Tablet' && sysInfo.os === 'Android',
      3: sysInfo.deviceType === 'Mobile' && sysInfo.os === 'iOS',
      4: sysInfo.deviceType === 'iPad',
      5: sysInfo.os === 'Mac OS',
      6: sysInfo.os === 'Windows'
    };
    return +Object.keys(osTypeMap).filter(function (type) {
      return osTypeMap[type];
    })[0] || 0;
  }
  /**
   * 获取设备信息
   */


  function getSystemInfo() {
    var _window, _window$navigator;

    var properties = {
      // 使用的浏览器类型
      _browser: sysInfo.browserInfo.browser,
      // 使用的浏览器的版本
      _browser_version: sysInfo.browserInfo.browserVersion,
      // 用户设备的制造商 web端获取不到
      // _manufacturer: '',
      // 最细粒度的设备型号标识
      _device_model: ((_window = window) == null ? void 0 : (_window$navigator = _window.navigator) == null ? void 0 : _window$navigator.platform) || '',

      /**
       * 用户的设备类型
       * @enum 0 Other
       * @enum 1 Android Phone
       * @enum 2 Android Pad
       * @enum 3 iPhone
       * @enum 4 iPad
       * @enum 5 Mac
       * @enum 6 PC(windows)
       */
      _device_type: getOsType(sysInfo),
      // 最细粒度的系统版本号
      _os_version: sysInfo.osVersion,
      // 用户设备的屏幕宽度
      _screen_height: sysInfo.screenSize.height,
      // 用户设备的屏幕高度
      _screen_width: sysInfo.screenSize.width,

      /**
       * 平台类型 string 小程序传6/web传5
       * @enum 0 Other
       * @enum 1 Android
       * @enum 2 iOS
       * @enum 3 Windows
       * @enum 4 Mac
       * @enum 5 Web
       * @enum 6 WeChat/小程序
       */
      _platform: 5,
      _language: sysInfo.language
    };
    return properties;
  }

  /**
   * SDK数据初始化
   */
  /**
   * 获取SDK初始化数据
   */

  function getInitData() {
    // 上报的基础数据
    var reportData = {}; // 设备 UA 信息

    reportData._ua = navigator.userAgent; // properties属性

    reportData.properties = getSystemInfo(); // 接入的 SDK 类型 小程序传4/web传3

    reportData.properties._lib = 3; // 当前页面的标题

    reportData.properties._page_title = document.title; // 当前页面的地址

    reportData.properties._page_name = location.href; // 跳转前页面的地址

    reportData.properties._referrer_name = document.referrer;
    return reportData;
  }

  JSSDK.extend({
    sdkInitData: getInitData()
  });
  JSSDK.NATIVE.ready(function (initConfig) {
    JSSDK.trackAppInstall();
    JSSDK.trackAppStart();
    initAutoTrack(initConfig);
  });
  var index = JSSDK.NATIVE;

  return index;

})));
