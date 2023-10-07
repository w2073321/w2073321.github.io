!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).webabtestPlugin=t()}(this,(function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}function t(e,t,i){var r;e.setStateData(((r={})["reportData.properties."+t]=i,r))}var i=["customIDProperties","customIDEventProperties","customIDUserProperties"];function r(e,t){var r={};return i.forEach((function(i){e.isObject(t[i])&&(r[i]=e.filterCustomProperties(t[i]))})),r}function n(e,t){return e.isValueExceedLimit(e.valueToStr(t))?(t.shift(),n(e.config)):t}function o(e,t,i,r,n){e.Storage.setItem(t,i.slice(r[n]),(function(){n<r.length-1?o(e,t,i,r,n+1):e.Storage.deleteItem(storageKey.combinationId)}))}function s(e,t,i,r){if(!Array.isArray(i))return[];var s=n(e,i.slice(0));o(e,t,s,function(e,t){var i=e-t,r=[],n=Math.ceil(i/10);if(i>0)for(var o=i;o>0;o-=n)r.unshift(o);return r.unshift(0),r}(s.length,r),0)}function u(e,t){var i,r,n,o,s,u,a,l=e.filter((function(e){return e.name===t}));return l.length?{value:null==(i=l[0])?void 0:i.value,groupId:null==(r=l[0])?void 0:r.group_id,status:null==(n=l[0])?void 0:n.status,from:null==(o=l[0])?void 0:o.from,entityId:null==(s=l[0])?void 0:s.entity_id,subjectName:null==(u=l[0])?void 0:u.subject_name,subjectValue:null==(a=l[0])?void 0:a.subject_value}:null}function a(e,t){var i=e.getStateData("reportData");if(i._appkey&&t.subjectName&&t.subjectValue&&t.entityId&&t.groupId){var r=i._appkey+"_"+t.subjectName+"_"+t.subjectValue+"_"+t.entityId+"_"+t.groupId;if(e.Storage.getItem(r))return!0;e.Storage.setItem(r,1)}return!1}function l(e,i){var r=e.Storage.getItem(i,!0,[]);t(e,i,(null==r?void 0:r.length)?r:null)}function m(e,i,r,n){void 0===n&&(n=1);var o=function(e,t){if(void 0===t&&(t=1),!Array.isArray(e))return[];var i=e.filter((function(e){return e.from===t})).map((function(e){return e.entity_id}));return Array.from(new Set(i))}(i,n);t(e,r,o),e.Storage.setItem(r,o)}function c(e,t,i){e.t3=+new Date,e.param_value=t&&void 0!==t.value?t.value:null;var r,n=0;("number"==typeof(null==t?void 0:t.param_from)&&(n=t.param_from),3!==n)&&((null==i||null==(r=i.filter((function(t){return t.name===e.param_key})))?void 0:r.length)&&(n=1));return e.param_from=n,e}function d(e,t,i){var r=t.t0,n=t.t1,o=t.t2,s=t.t3,u={message:"在线参数请求数据",state:1,api_total_duration:s-r,retry_count:-1,param_key:t.param_key,param_value:t.param_value,param_from:t.param_from};if(i){var a=i||{},l=a.code,m=a.msg,c=a.retryCount;u.code=l,u.error_message=m,u.retry_count=c,u.builld_request_body_duration=n-r,u.api_request_duration=o-n,u.data_process_duration=s-o}e.trackLogEvent(u)}var p={intervalTimer:null,mergeType:0,idProperties:{},defaultConfig:[],serverConfig:[],currentServerConfig:[],combinationId:"",eventProperties:{},userProperties:{},customRequestTimeout:0},f="_default_config",g="_serevr_config",v="_combination_id",_="_group_id_list",y="_experiment_group_id_list",T="_experiment_history";function h(e,t,i){var r=t.t0,n=t.t1,o=i||{},s={message:"多链接试验请求数据",state:5,code:o.code,error_message:o.msg,retry_count:o.retryCount,api_request_duration:n-r};e.trackLogEvent(s)}var b={addMask:function(e){var t,i,r=this,n="body{opacity:0 !important;-khtml-opacity:0 !important;-moz-opacity:0;filter:alpha(opacity=0);}",o=document.createElement("style");o.type="text/css";try{o.appendChild(document.createTextNode(n))}catch(e){o.styleSheet.cssText=n}this.styleElement=o,null==(t=document.getElementsByTagName("head"))||null==(i=t[0])||i.appendChild(o),this.removeMaskTimer=setTimeout((function(){r.removeMask()}),1e3*e)},removeMask:function(){var e,t;(clearTimeout(this.removeMaskTimer),this.styleElement)&&(null==(e=document.getElementsByTagName("head"))||null==(t=e[0])||t.removeChild(this.styleElement),this.styleElement=null)}},C={idProperties:{},serverConfig:[],eventProperties:{},userProperties:{},customRequestTimeout:0},I={multilinkHistory:"_multilink_history"+location.pathname};return{env:0,version:"1.1.0",init:function(i){if(!(null==i?void 0:i.NATIVE)||"function"!=typeof(null==i?void 0:i.extend))return console.error("SESDK Error: Plugin can not be used alone, you need to rely on the webSDK");!function(i){i.extend({abtest:{init:function(e){p.mergeType=e.mergeType||0,p.idProperties=r(i,e),p.defaultConfig=i.Storage.getItem(f,!0,[]),"number"==typeof e.requestTimeout&&e.requestTimeout>0&&(p.customRequestTimeout=e.requestTimeout),this.checkCacheConfig(),this.initReportData(),this.getOnlineConfig(!0)},initReportData:function(){t(i,v,i.Storage.getItem(v)||null),l(i,_),l(i,y),t(i,"_custom_id",p.idProperties.customIDProperties),t(i,"_event_custom_id",p.idProperties.customIDEventProperties),t(i,"_user_custom_id",p.idProperties.customIDUserProperties)},checkCacheConfig:function(){var e;p.combinationId=i.Storage.getItem(v)||"",p.serverConfig=i.Storage.getItem(g,!0,[]),p.combinationId&&!(null==(e=p.serverConfig)?void 0:e.length)&&(p.combinationId="",i.Storage.deleteItem(v))},getOnlineConfig:function(t,r){var n=this;void 0===r&&(r={}),this.checkCacheConfig();var o=i.deepCopy(i.getStateData("reportData")||{}),s=i.deepCopy(o.properties);delete o.properties,delete o._package_type;var u=e({},o,s,{_combination_id:t&&1===p.mergeType?"":p.combinationId,event_properties:e({},p.eventProperties),user_properties:e({},p.userProperties),_custom_id:p.idProperties.customIDProperties,_event_custom_id:p.idProperties.customIDEventProperties,_user_custom_id:p.idProperties.customIDUserProperties,experiment_history:i.Storage.getItem(T,!0,[])});return r.t1=+new Date,new Promise((function(e){n.requestRetry(e,u,t,r)}))},requestRetry:function(e,t,r,n,o){var s=this;void 0===o&&(o=i.settingData.ruleRetryTimes),i.HttpHelper.post("//"+i.settingData.ruleDomain+"/rule/config/get",t,{timeout:p.customRequestTimeout||1e3*i.settingData.ruleTimeout}).then((function(t){n.t2=+new Date,0===(null==t?void 0:t.code)&&s.handleServerConfig((null==t?void 0:t.data)||{},r),e({retryCount:3-o,code:null==t?void 0:t.code,msg:null==t?void 0:t.msg}),s.setTimer()})).catch((function(u){o>0&&!p.customRequestTimeout?(o--,s.requestRetry(e,t,r,n,o)):(s.setTimer(),e({retryCount:i.settingData.ruleRetryTimes-o,code:(null==u?void 0:u.code)||"timeout",msg:(null==u?void 0:u.msg)||u}))}))},setTimer:function(){var e=this;clearTimeout(p.intervalTimer),p.intervalTimer=setTimeout((function(){return e.getOnlineConfig()}),1e3*i.settingData.ruleInterval)},handleServerConfig:function(e,r){var n,o=e.params||[],u=null==e?void 0:e._combination_id,a=(null==(n=o)?void 0:n.length)||0;p.currentServerConfig=o,u&&(p.combinationId=u,i.Storage.setItem(v,u),t(i,v,u)),u&&a&&(m(i,o,_),m(i,o,y,2),i.Storage.setItem(T,o.filter((function(e){return 2===e.from})).map((function(e){return{entity_id:e.entity_id,group_id:e.group_id}}))),0!==p.mergeType&&r||(o=function(e,t){return(null==t?void 0:t.length)?t.filter((function(t){return e.findIndex((function(e){return e.name===t.name}))<0})).concat(e):e}(o,p.serverConfig)),p.serverConfig=o,s(i,g,o,a))},getConfigByKey:function(e){var t=u(p.serverConfig,e);return null===t?(t=u(p.defaultConfig,e),i.isObject(t)&&(t.param_from=3)):t.param_from=2,t},trackTriageEvents:function(e){if(!a(i,e))if(1===e.from){var t={_enter_group_id:e.entityId,_enter_group_status:e.status};i.trackEvent("_diversion_service",t,{},{_event_type:2})}else{var r={_experiment_id:e.groupId,_experiment_group_id:e.entityId,_experiment_status:e.status};i.trackEvent("_abtesting_shunt",r,{},{_event_type:2})}}}})}(i),function(e){e.NATIVE=Object.assign(e.NATIVE,{setRemoteDefaultConfig:function(t){if(e.getStateData("logEnabled")&&e.infoLog("setRemoteDefaultConfig",t),!Array.isArray(t))return e.assert(!1,440103);p.defaultConfig=t,e.Storage.setItem(f,t)},setRemoteConfigEventProperties:function(t){if(e.getStateData("logEnabled")&&e.infoLog("setRemoteConfigEventProperties",t),!e.isObject(t))return e.assert(!1,440120);p.eventProperties=Object.assign(p.eventProperties,t)},setRemoteConfigUserProperties:function(t){if(e.getStateData("logEnabled")&&e.infoLog("setRemoteConfigUserProperties",t),!e.isObject(t))return e.assert(!1,440120);p.userProperties=Object.assign(p.userProperties,t)},fastFetchRemoteConfig:function(t){if(e.getStateData("logEnabled")&&e.infoLog("fastFetchRemoteConfig",t),!t||"string"!=typeof t||!e.trimStr(t))return e.assert(!1,440105);var i={t0:+new Date,param_key:t},r=e.abtest.getConfigByKey(t),n=null;return r&&void 0!==r.value&&(r.groupId&&e.abtest.trackTriageEvents(r),n=r.value),d(e,c(i,r,p.currentServerConfig)),n},asyncFetchRemoteConfig:function(t){if(e.getStateData("logEnabled")&&e.infoLog("asyncFetchRemoteConfig",t),!t||"string"!=typeof t||!e.trimStr(t))return e.assert(!1,440105);var i={t0:+new Date,param_key:t};return new Promise((function(r){e.NATIVE.ready((function(){e.abtest.getOnlineConfig(!1,i).then((function(n){var o=e.abtest.getConfigByKey(t),s=null;o&&void 0!==o.value&&(o.groupId&&e.abtest.trackTriageEvents(o),s=o.value),r(s),d(e,c(i,o,p.currentServerConfig),n)}))}))}))}})}(i),function(i){i.extend({multilinkTest:{runtime:!0,init:function(e){this.initRemoteConfig(e),C.idProperties=r(i,e),this.initReportData(),this.getOnlineConfig()},initRemoteConfig:function(e){C.maskTimeoutCloseTime=i.settingData.maskTimeoutCloseTime,"number"==typeof e.requestTimeout&&e.requestTimeout>0&&(C.customRequestTimeout=e.requestTimeout),"number"==typeof(null==e?void 0:e.maskTimeoutCloseTime)&&e.maskTimeoutCloseTime/1e3>i.settingData.minMaskTimeoutCloseTime&&(C.maskTimeoutCloseTime=e.maskTimeoutCloseTime/1e3),(null==e?void 0:e.isSetMask)&&b.addMask(C.maskTimeoutCloseTime)},initReportData:function(){t(i,"_custom_id",C.idProperties.customIDProperties),t(i,"_event_custom_id",C.idProperties.customIDEventProperties),t(i,"_user_custom_id",C.idProperties.customIDUserProperties)},getOnlineConfig:function(t){var r=this;void 0===t&&(t={});var n=i.deepCopy(i.getStateData("reportData")||{}),o=i.deepCopy(n.properties);delete n.properties,delete n._package_type,delete o._combination_id,delete o._experiment_group_id_list,delete o._group_id_list;var s=e({},n,o,{event_properties:e({},C.eventProperties),user_properties:e({},C.userProperties),_custom_id:C.idProperties.customIDProperties,_event_custom_id:C.idProperties.customIDEventProperties,_user_custom_id:C.idProperties.customIDUserProperties,experiment_history:i.Storage.getItem(I.multilinkHistory,!0,[])});return t.t0=+new Date,new Promise((function(e){r.requestRetry(e,s,t)}))},requestRetry:function(e,t,r,n){var o=this;void 0===n&&(n=i.settingData.multilinkRetryTimes),i.HttpHelper.post("//"+i.settingData.ruleDomain+"/rule/config/multilink/get",t,{timeout:C.customRequestTimeout||1e3*i.settingData.multilinkTimeout}).then((function(e){r.t1=+new Date,0===(null==e?void 0:e.code)&&o.handleServerConfig((null==e?void 0:e.data)||{}),b.removeMask();var t={retryCount:3-n,code:null==e?void 0:e.code,msg:null==e?void 0:e.msg};h(i,r,t)})).catch((function(s){if(n>0&&!C.customRequestTimeout)n--,o.requestRetry(e,t,r,n);else{r.t1=+new Date,b.removeMask(),i.customEvents.$emit("multilinkTestResponse");var u={retryCount:i.settingData.multilinkRetryTimes-n,code:(null==s?void 0:s.code)||"timeout",msg:(null==s?void 0:s.msg)||s};h(i,r,u)}}))},handleServerConfig:function(e){var t,r,n,o,s,u,l,m=e.params||[],c=i.trimStr((null==(t=m[0])?void 0:t.url)||"");if((null==m?void 0:m.length)&&c){var d={url:c,subjectId:null==(r=m[0])?void 0:r.subject_id,entityId:null==(n=m[0])?void 0:n.entity_id,groupId:null==(o=m[0])?void 0:o.group_id,status:null==(s=m[0])?void 0:s.status,subjectName:null==(u=m[0])?void 0:u.subject_name,subjectValue:null==(l=m[0])?void 0:l.subject_value},p=a(i,d);p||this.trackTriageEvents(d);var f=c===location.href;f&&i.customEvents.$emit("multilinkTestResponse"),i.Storage.setItem(I.multilinkHistory,m.map((function(e){return{entity_id:e.entity_id,group_id:e.group_id}}))),f||setTimeout((function(){location.href=d.url}),p?0:1e3*i.settingData.multilinkJumpWaitSendEvent)}else i.customEvents.$emit("multilinkTestResponse")},trackTriageEvents:function(e){var t={_experiment_id:e.groupId,_experiment_group_id:e.entityId,_experiment_status:e.status};i.trackEvent("_abtesting_shunt",t,{},{_event_type:2})}}})}(i),function(e){e.NATIVE=Object.assign(e.NATIVE,{setMultilinkTestEventProperties:function(t){if(e.getStateData("logEnabled")&&e.infoLog("setMultilinkTestEventProperties",t),!e.isObject(t))return e.assert(!1,440120);C.eventProperties=Object.assign(C.eventProperties,t)},setMultilinkTestUserProperties:function(t){if(e.getStateData("logEnabled")&&e.infoLog("setMultilinkTestUserProperties",t),!e.isObject(t))return e.assert(!1,440120);C.userProperties=Object.assign(C.userProperties,t)}})}(i)}}}));
