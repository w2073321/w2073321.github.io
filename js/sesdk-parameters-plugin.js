/**
 * sesdk-parameters-plugin.prod.js
 * An SDK for the SolarEngine intelligent marketing service platform
 * 参数下发SDK插件接入文档: https://alidocs.dingtalk.com/i/nodes/7Y36k14mK9AV3Y0B97w185NqapjblR2D
 * 版本号: 1.0.1
 */
function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var t={onlineConfig:"//rule.detailroi.com/rule/config/get"};function r(e,t,r){var n;e.setStateData(((n={})["reportData.properties."+t]=r,n))}var n=["customIDProperties","customIDEventProperties","customIDUserProperties"];function i(e,t){return e.isValueExceedLimit(e.valueToStr(t))?(t.shift(),i(e.config)):t}function o(e,t,r,n,i){e.Storage.setItem(t,r.slice(n[i]),(function(){i<n.length-1?o(e,t,r,n,i+1):e.Storage.deleteItem(storageKey.combinationId)}))}function a(e,t,r,n){if(!Array.isArray(r))return[];var a=i(e,r.slice(0));o(e,t,a,function(e,t){var r=e-t,n=[],i=Math.ceil(r/10);if(r>0)for(var o=r;o>0;o-=i)n.unshift(o);return n.unshift(0),n}(a.length,n),0)}function u(e,t){var r,n,i,o,a,u=e.filter((function(e){return e.name===t}));return u.length?{value:null==(r=u[0])?void 0:r.value,groupId:null==(n=u[0])?void 0:n.group_id,status:null==(i=u[0])?void 0:i.status,from:null==(o=u[0])?void 0:o.from,entityId:null==(a=u[0])?void 0:a.entity_id}:null}function s(e,t){var n=e.Storage.getItem(t,!0,[]);r(e,t,(null==n?void 0:n.length)?n:null)}function c(e,t,n,i){void 0===i&&(i=1);var o=function(e,t){if(void 0===t&&(t=1),!Array.isArray(e))return[];var r=e.filter((function(e){return e.from===t})).map((function(e){return e.entity_id}));return Array.from(new Set(r))}(t,i);r(e,n,o),e.Storage.setItem(n,o)}function f(e,t,r){var n=e.getStateData("reportData"),i=t.t0,o=t.t1,a=t.t2,u=t.t3,s={user_appkey:n._appkey,api_total_duration:u-i,retry_count:-1};if(r){var c=r||{},f=c.code,l=c.msg,d=c.retryCount;s.code=f,s.error_message=l,s.retry_count=d,s.builld_request_body_duration=o-i,s.api_request_duration=a-o,s.data_process_duration=u-a}e.trackEvent("sdkRCRequestCost",{},s,{_appkey:"91c316e1b444a0e9",_tenant_id:"302948fdd2be46e6",_event_type:-1})}var l={intervalTimer:null,interval:30,mergeType:0,idProperties:{},defaultConfig:[],serverConfig:[],combinationId:"",eventProperties:{},userProperties:{}},d="_default_config",p="_serevr_config",g="_combination_id",m="_group_id_list",v="_experiment_group_id_list",_="_experiment_history";function y(i){i.extend({parameters:{init:function(e){l.mergeType=e.mergeType||0,l.idProperties=function(e,t){var r={};return n.forEach((function(n){e.isObject(t[n])&&(r[n]=e.filterCustomProperties(t[n]))})),r}(i,e),l.defaultConfig=i.Storage.getItem(d,!0,[]),this.checkInitParam(e),this.checkCacheConfig(),this.initReportData(),this.getOnlineConfig(!0)},checkInitParam:function(e){var t=e.pollingInterval;"number"==typeof t&&t>=30&&t<=1440?l.interval=t:i.assert(!1,440104)},initReportData:function(){r(i,g,i.Storage.getItem(g)||null),s(i,m),s(i,v),r(i,"_custom_id",l.idProperties.customIDProperties),r(i,"_event_custom_id",l.idProperties.customIDEventProperties),r(i,"_user_custom_id",l.idProperties.customIDUserProperties)},checkCacheConfig:function(){var e;l.combinationId=i.Storage.getItem(g)||"",l.serverConfig=i.Storage.getItem(p,!0,[]),l.combinationId&&!(null==(e=l.serverConfig)?void 0:e.length)&&(l.combinationId="",i.Storage.deleteItem(g))},getOnlineConfig:function(t,r){var n=this;void 0===r&&(r={}),this.checkCacheConfig();var o=i.deepCopy(i.getStateData("reportData")||{}),a=i.deepCopy(o.properties);delete o.properties;var u=e({},o,a,{_combination_id:t&&1===l.mergeType?"":l.combinationId,event_properties:e({},l.eventProperties),user_properties:e({},l.userProperties),_custom_id:l.idProperties.customIDProperties,_event_custom_id:l.idProperties.customIDEventProperties,_user_custom_id:l.idProperties.customIDUserProperties,experiment_history:i.Storage.getItem(_,!0,[])});return r.t1=+new Date,new Promise((function(e){n.requestRetry(e,u,t,r)}))},requestRetry:function(e,r,n,o,a){var u=this;void 0===a&&(a=3),i.HttpHelper.post(t.onlineConfig,r).then((function(t){o.t2=+new Date,0===(null==t?void 0:t.code)&&u.handleServerConfig((null==t?void 0:t.data)||{},n),e({retryCount:3-a,code:null==t?void 0:t.code,msg:null==t?void 0:t.msg}),u.setTimer()})).catch((function(t){a>0?(a--,u.requestRetry(e,r,n,o,a)):(u.setTimer(),e({retryCount:3-a,code:(null==t?void 0:t.code)||"timeout",msg:(null==t?void 0:t.msg)||t}))}))},setTimer:function(){var e=this;clearTimeout(l.intervalTimer),l.intervalTimer=setTimeout((function(){return e.getOnlineConfig()}),60*l.interval*1e3)},handleServerConfig:function(e,t){var n,o=e.params||[],u=null==e?void 0:e._combination_id,s=(null==(n=o)?void 0:n.length)||0;u&&(l.combinationId=u,i.Storage.setItem(g,u),r(i,g,u)),u&&s&&(c(i,o,m),c(i,o,v,2),i.Storage.setItem(_,o.filter((function(e){return 2===e.from})).map((function(e){return{entity_id:e.entity_id,group_id:e.group_id}}))),0!==l.mergeType&&t||(o=function(e,t){return(null==t?void 0:t.length)?t.filter((function(t){return e.findIndex((function(e){return e.name===t.name}))<0})).concat(e):e}(o,l.serverConfig)),l.serverConfig=o,a(i,p,o,s))},getConfigByKey:function(e){var t=u(l.serverConfig,e);return null===t&&(t=u(l.defaultConfig,e)),t},trackTriageEvents:function(e){if(1===e.from){var t={_enter_group_id:e.entityId,_enter_group_status:e.status};i.trackEvent("_diversion_service",t,{},{_event_type:2})}else{var r={_experiment_id:e.groupId,_experiment_group_id:e.entityId,_experiment_status:e.status};i.trackEvent("_abtesting_shunt",r,{},{_event_type:2})}}}})}var h={init:function(e){y(e),function(e){e.NATIVE=Object.assign(e.NATIVE,{setRemoteDefaultConfig:function(t){if(!Array.isArray(t))return e.assert(!1,440103);l.defaultConfig=t,e.Storage.setItem(d,t)},setRemoteConfigEventProperties:function(t){if(!e.isObject(t))return e.assert(!1,440120);l.eventProperties=Object.assign(l.eventProperties,t)},setRemoteConfigUserProperties:function(t){if(!e.isObject(t))return e.assert(!1,440120);l.userProperties=Object.assign(l.userProperties,t)},fastFetchRemoteConfig:function(t){if(!t||"string"!=typeof t||!e.trimStr(t))return e.assert(!1,440105);var r={t0:+new Date},n=e.parameters.getConfigByKey(t),i=null;return n&&void 0!==n.value&&(n.groupId&&e.parameters.trackTriageEvents(n),i=n.value),r.t3=+new Date,f(e,r),i},asyncFetchRemoteConfig:function(t){if(!t||"string"!=typeof t||!e.trimStr(t))return e.assert(!1,440105);var r={t0:+new Date};return new Promise((function(n){e.NATIVE.ready((function(){e.parameters.getOnlineConfig(!1,r).then((function(i){var o=e.parameters.getConfigByKey(t),a=null;o&&void 0!==o.value&&(o.groupId&&e.parameters.trackTriageEvents(o),a=o.value),r.t3=+new Date,n(a),f(e,r,i)}))}))}))}})}(e)}};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).parametersPlugin=t()}(window||global,(function(){return h}));
