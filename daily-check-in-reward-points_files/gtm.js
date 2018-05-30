
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"146",
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.goodsListArr"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"google_tag_params.pcat"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.order_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.order_amount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.used_wallet"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.shipping_fee"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(!",["escape",["macro",0],8,16],".length)return!1;var a=",["escape",["macro",1],8,16],";a\u0026\u0026(a=Array.isArray(a)?a:[a]);var d=[];",["escape",["macro",0],8,16],".forEach(function(b,c){d.push({id:b.goods_sn,name:b.goods_name,price:b.goods_price,quantity:b.goods_number,category:a?a[c].replace(\/\u003E\/g,\"\/\"):b.cat_name})});var c={ecommerce:{purchase:{actionField:{id:\"",["escape",["macro",2],7],"\",revenue:(",["escape",["macro",3],8,16],"+(",["escape",["macro",4],8,16],"||0)).toString(),shipping:",["escape",["macro",5],8,16],"},products:d}}};return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search.keywords"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category.nav_title_3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category.cat_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category.nav_title_2"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(!",["escape",["macro",7],8,16],")return\"\";var a=\"all\";",["escape",["macro",1],8,16],".split(\"\\x3e\");",["escape",["macro",8],8,16],"\u0026\u0026",["escape",["macro",9],8,16],"?a=",["escape",["macro",8],8,16],"+\"+\"+",["escape",["macro",9],8,16],":",["escape",["macro",10],8,16],"\u0026\u0026",["escape",["macro",9],8,16],"\u0026\u0026(a=",["escape",["macro",10],8,16],"+\"+\"+",["escape",["macro",9],8,16],");a=\"\/search_results.php?q\\x3d\"+",["escape",["macro",7],8,16],"+\"\\x26n\\x3d\"+a;return a.replace(\/ \/g,\"+\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.hostname+window.location.pathname})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",0],8,16],".forEach(function(b,c){a.push(\"AMT\"+(c+1)+\"\\x3d\"+b.goods_price)});return a.join(\"\\x26\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.yuan_goods_amount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.goods_amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",14],8,16],"-",["escape",["macro",15],8,16],").toFixed(2)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",0],8,16],".forEach(function(b,c){a.push(\"ITEM\"+(c+1)+\"\\x3d\"+b.goods_sn)});return a.join(\"\\x26\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",0],8,16],".forEach(function(b,c){a.push(\"QTY\"+(c+1)+\"\\x3d\"+b.goods_number)});return a.join(\"\\x26\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_new_user"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 1==",["escape",["macro",19],8,16],"?\"new\":\"existing\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",0],8,16],".forEach(function(b,c){a.push(\"CATEGORY\"+(c+1)+\"\\x3d\"+b.cat_id)});return a.join(\"\\x26\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",0],8,16],".forEach(function(b,c){a.push(\"ITEM_ID\"+(c+1)+\"\\x3d\"+b.goods_sn)});return a.join(\"\\x26\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",0],8,16],".forEach(function(b,c){a.push(\"QUANTITY\"+(c+1)+\"\\x3d\"+b.goods_number)});return a.join(\"\\x26\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",0],8,16],".forEach(function(b,c){a.push(\"ITEM_PRICE\"+(c+1)+\"\\x3d\"+b.goods_price)});return a.join(\"\\x26\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",14],8,16],"-",["escape",["macro",15],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 1==",["escape",["macro",19],8,16],"?\"G4DE331011\":\"G4DE331013\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.order_sn"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"https:\/\/pln.brtrk2.com\/aff_l?offer_id\\x3d1304\\x26adv_sub\\x3d",["escape",["macro",27],7],"\\x26amount\\x3d",["escape",["macro",3],7],"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cart.list"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",29],8,16],".forEach(function(b,c){a.push(b.goods_sn)});return a=a.join(\";\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cart.total"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",31],8,16],".goods_price;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",0],8,16],".forEach(function(b,c){a.push(b.goods_sn)});return a.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".length})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.promotion_code"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null==",["escape",["macro",35],8,16],"?\"\":",["escape",["macro",35],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",0],8,16],".forEach(function(b,c){a.push(b.goods_sn)});return a.join(\",\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=(",["escape",["macro",15],8,16],"*my_array.EUR).toFixed(2);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",29],8,16],".forEach(function(b,c){a.push(b.cat_name)});return a.join(\",\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"checkout.list"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",40],8,16],".forEach(function(b,c){a.push(b.goods_sn)});return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok-order_goods_list"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",42],8,16],".forEach(function(b,c){a.push(b.cat_name)});return a.join(\",\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.coupon_source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.aff_source"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",44],8,16],",b=",["escape",["macro",45],8,16],";if(a\u0026\u0026a.length){var c=[];a.forEach(function(a,b){c.push(\"#\"+a.utm_source+\"#\")});return c.join(\"|\")}return b?\"#\"+b+\"#\":0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"checkout.total"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",47],8,16],".goods_number})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];",["escape",["macro",40],8,16],".forEach(function(b,c){a.push(b.pcat)});return a.join(\",\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",47],8,16],".goods_price})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $.cookie(\"email_sha\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $.cookie(\"lmdsid\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.pay_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",53],8,16],";return a=\"boletoBancario\"==a?\"bl\":\"CreditCard\"==a||\"WorldPay\"==a||\"Installments\"==a?\"cc\":\"fp\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"currencyPage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"google_tag_params.pagetype"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"google_tag_params.totalvalue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"google_tag_params.currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"google_tag_params.prodid"
    },{
      "function":"__u"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.is_exp_checkout"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cur_lang"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goods.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goods.sn"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category.goods_list_top3"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.EUR_PRICE"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.pay_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.user_email_md5"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"https:\/\/action.metaffiliation.com\/trk.php?mclic\\x3d",["escape",["macro",26],7],"\\x26argmon\\x3d",["escape",["macro",68],7],"\\x26argann\\x3d",["escape",["macro",27],7],"\\x26argmodp\\x3d",["escape",["macro",69],7],"\\x26nacur\\x3dEUR\\x26altid\\x3d",["escape",["macro",70],7],"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.yuan_goods_amount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"criteo.setCountry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"criteo.setHashedEmail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"criteo.setSiteType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"criteo.viewList"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"criteo.viewItem"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"criteo.currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"criteo.viewBasket"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"criteo.trackTransactionSN"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"criteo.trackTransactionProduct"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.order_currency"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 1==",["escape",["macro",19],8,16],"?\"https:\/\/www.emjcd.com\/tags\/c?containerTagId\\x3d14900\\x26",["escape",["macro",17],7],"\\x26",["escape",["macro",13],7],"\\x26",["escape",["macro",18],7],"\\x26CID\\x3d1538096\\x26OID\\x3d",["escape",["macro",27],7],"\\x26TYPE\\x3d387008\\x26CURRENCY\\x3d",["escape",["macro",82],7],"\\x26COUPON\\x3d",["escape",["macro",35],7],"\\x26DISCOUNT\\x3d",["escape",["macro",16],7],"\":\"https:\/\/www.emjcd.com\/tags\/c?containerTagId\\x3d14901\\x26",["escape",["macro",17],7],"\\x26",["escape",["macro",13],7],"\\x26",["escape",["macro",18],7],"\\x26CID\\x3d1538096\\x26OID\\x3d",["escape",["macro",27],7],"\\x26TYPE\\x3d387009\\x26CURRENCY\\x3d",["escape",["macro",82],7],"\\x26COUPON\\x3d",["escape",["macro",35],7],"\\x26DISCOUNT\\x3d",["escape",["macro",16],7],"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goods.goods_number"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.order_status"
    },{
      "function":"__j",
      "vtp_name":"payok_is_new_user"
    },{
      "function":"__j",
      "vtp_name":"payok_goods_sn_arr"
    },{
      "function":"__j",
      "vtp_name":"payok_date_str"
    },{
      "function":"__j",
      "vtp_name":"payok_order_status"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.user_id"
    },{
      "function":"__j",
      "vtp_name":"payok_order_amount"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"utm_campaign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.goodsListArr.length"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"https:\/\/t.pepperjamnetwork.com\/track?INT\\x3dDYNAMIC\\x26PROGRAM_ID\\x3d8609\\x26ORDER_ID\\x3d",["escape",["macro",27],7],"\\x26",["escape",["macro",22],7],"\\x26",["escape",["macro",24],7],"\\x26",["escape",["macro",23],7],"\\x26",["escape",["macro",21],7],"\\x26COUPON\\x3d",["escape",["macro",36],7],"\\x26NEW_TO_FILE\\x3d",["escape",["macro",19],7],"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"email_md5"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.promotion_code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.coupon_discount_amount"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goods.cat_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category.cat_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cart.total.goods_price"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"is_new_regiter"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"google_tag_params"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goods.nav_title_2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.free_num"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\",c=",["escape",["macro",53],8,16],",d=",["escape",["macro",82],8,16],";",["escape",["macro",0],8,16],".forEach(function(a,h){var e=\"boletoBancario\"==c\u0026\u0026\"BRL\"==d?a.goods_price:(a.goods_price*my_array.BRL).toFixed(2),f=a.goods_name.split(\" \").join(\"_\"),g=a.cat_name.split(\" \").join(\"_\");b+=\"\\x26prod\\x3d\"+a.goods_sn+\";\"+g+\";\"+e+\";\"+a.goods_number+\";\"+f});return\"\/\/secure.lomadee.com\/v2.png?lmdaId\\x3d6166\\x26currency\\x3dBRL\\x26paymentType\\x3d",["escape",["macro",54],7],"\\x26orderId\\x3d",["escape",["macro",27],7],"\"+b+\"\\x26lmdsid\\x3d",["escape",["macro",52],7],"\\x26origem\\x3dlomadee\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.point_money"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.formated_goods_amount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goods.nav_title_3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goods.cat_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goods.pic"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goods.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goods.url"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.country_code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"extid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"aff_source"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"admitad_uid"
    },{
      "function":"__j",
      "vtp_name":"js_category_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category.goods_list_top5"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sing_flow"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payok.commission"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goods.goods_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goods.market_price"
    },{
      "function":"__j",
      "vtp_name":"goods_is_number"
    },{
      "function":"__j",
      "vtp_name":"cart_goods_sn_arr"
    },{
      "function":"__j",
      "vtp_name":"cart_goods_price"
    },{
      "function":"__j",
      "vtp_name":"cart_is_new_user"
    },{
      "function":"__j",
      "vtp_name":"is_new_user_str"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category.goods_sn_saletop3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goods.cat_name"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    }],
  "tags":[{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_pagetype","value",["macro",57]],["map","key","ecomm_totalvalue","value",["macro",58]],["map","key","ecomm_currency","value",["macro",59]],["map","key","ecomm_prodid","value",["macro",60]],["map","key","ecomm_pcat","value",["macro",1]]],
      "vtp_conversionId":"962185778",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_url":["macro",61],
      "tag_id":12
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":["macro",3],
      "vtp_conversionId":"929205560",
      "vtp_conversionLabel":"GK0KCJGQ6WQQuJqKuwM",
      "vtp_url":["macro",61],
      "vtp_enableReadGaCookie":false,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",6],
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",6],
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-16",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-16",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",6],
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-21",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-21",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",6],
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-22",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-22",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",6],
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-23",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-23",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",6],
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-17",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":25
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-17",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",11]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-2",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":29
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",11]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-16",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":30
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",11]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-17",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":31
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",11]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-21",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":32
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",11]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-22",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":33
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",11]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-55634609-23",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":34
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":71
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "tag_id":112
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",3],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"804575804",
      "vtp_conversionLabel":"cyysCJzI04IBELy00_8C",
      "vtp_url":["macro",61],
      "vtp_enableReadGaCookie":false,
      "tag_id":142
    },{
      "function":"__cl",
      "tag_id":144
    },{
      "function":"__cl",
      "tag_id":145
    },{
      "function":"__cl",
      "tag_id":146
    },{
      "function":"__cl",
      "tag_id":147
    },{
      "function":"__cl",
      "tag_id":148
    },{
      "function":"__cl",
      "tag_id":149
    },{
      "function":"__cl",
      "tag_id":150
    },{
      "function":"__cl",
      "tag_id":151
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"458555150989663\");fbq(\"init\",\"225935607983938\");fbq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1
    },{
      "function":"__html",
      "setup_tags":["list",["tag",31,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{currency:\"USD\",value:parseFloat(",["escape",["macro",64],8,16],"),content_type:\"product\",content_ids:[",["escape",["macro",65],8,16],"]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":4
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq.push(\"track\",\"ViewContent\",{content_type:\"product\",content_ids:",["escape",["macro",66],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":5
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{currency:\"USD\",value:parseFloat(",["escape",["macro",64],8,16],"),content_type:\"product\",content_ids:[\"",["escape",["macro",65],7],"\"]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":6
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar contentIdsArr=[];",["escape",["macro",29],8,16],".forEach(function(a,b){contentIdsArr.push(a.goods_sn)});fbq(\"track\",\"InitiateCheckout\",{currency:\"USD\",value:parseFloat(",["escape",["macro",31],8,16],".goods_price),content_type:\"product\",content_ids:contentIdsArr});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":8
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToWishlist\",{currency:\"USD\",value:parseFloat(",["escape",["macro",64],8,16],"),content_type:\"product\",content_ids:",["escape",["macro",65],8,16],",content_category:",["escape",["macro",1],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar contentIdsArr=[];try{",["escape",["macro",0],8,16],".forEach(function(a,b){contentIdsArr.push(a.goods_sn)}),fbq(\"track\",\"payDone\",{content_ids:contentIdsArr,content_type:\"product\",value:",["escape",["macro",3],8,16],"})}catch(a){fbq(\"track\",\"payDone\",{content_ids:[],content_type:\"product\",value:",["escape",["macro",3],8,16],"||0})};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"ar\/\"==JS_LANG){var query_url=window.location.href,aff_source=_GET(\"utm_source\",query_url),admitad_uid=_GET(\"admitad_uid\",query_url),affid=_GET(\"affid\",query_url),lkid=_GET(\"lkid\",query_url),actionpay=_GET(\"actionpay\",query_url),click_id=_GET(\"click_id\",query_url),utm_medium=_GET(\"utm_medium\",query_url),utm_campaign=_GET(\"utm_campaign\",query_url),tduid=_GET(\"tduid\",query_url),aff_id=_GET(\"aff_id\",query_url),aff_source_arr=\"tradetrackerNL tradetrackerCZ tradetrackerIT tradetrackerDE tradetrackerRU tradetrackerNO tradetrackerEST tradetrackerPL tradetrackerFI tradetrackerHU tradetrackerFR tradetrackerUAE tradetrackerUK tradetrackerBE tradetrackerSE tradetrackerAT tradetrackerCH tradetrackerDK tradetracker\".split(\" \"),\nutm_campaign_arr=\"ZafulNL ZafulCZ ZafulIT ZafulDE ZafulRU ZafulNO ZafulEST ZafulPL ZafulFI ZafulHU ZafulFR ZafulUAE ZafulUK ZafulBE ZafulSE ZafulAT ZafulCH ZafulDK ZafulES\".split(\" \"),lmdsid=_GET(\"lmdsid\",query_url),aff=_GET(\"aff\",query_url),trackid=_GET(\"trackid\",query_url);aff\u0026\u0026trackid\u0026\u0026($.cookie(\"aff\",aff,{expires:30,path:\"\/\",domain:COOKIESDIAMON}),$.cookie(\"trackid\",trackid,{expires:30,path:\"\/\",domain:COOKIESDIAMON}));lmdsid\u0026\u0026$.cookie(\"lmdsid\",lmdsid,{expires:30,path:\"\/\",domain:COOKIESDIAMON});\naff_id\u0026\u0026$.cookie(\"aff_id\",aff_id,{expires:30,path:\"\/\",domain:COOKIESDIAMON});admitad_uid\u0026\u0026(aff_source=\"admitad\",$.cookie(\"admitad_uid\",admitad_uid,{expires:365,path:\"\/\",domain:COOKIESDIAMON}),aff_source=\"admitad_uid\");if(aff_source\u0026\u0026\"admitad_uid\"!=aff_source){$.cookie(\"admitad_uid\",null,{expires:365,path:\"\/\",domain:COOKIESDIAMON});var myDate=new Date;$.cookie(aff_source,myDate.getTime(),{expires:365,path:\"\/\",domain:COOKIESDIAMON});\"A8\"!=$.cookie(\"utm_source\")\u0026\u0026\"clickwise\"!=aff_source\u0026\u0026\"Affiliaxe\"!=\naff_source\u0026\u0026\"Tradedoubler\"!=aff_source\u0026\u0026(\"cityads\"==aff_source?$.cookie(\"click_id\",click_id,{expires:60,path:\"\/\",domain:COOKIESDIAMON}):\"netaffiliation\"!=aff_source\u0026\u0026\"Linkconnector\"!=aff_source\u0026\u0026\"pepperjam\"!=aff_source\u0026\u0026\"Affilinet\"!=aff_source\u0026\u0026\"dgmax\"!=$.cookie(\"utm_source\")\u0026\u0026$.cookie(\"utm_source\"));affid\u0026\u0026$.cookie(\"affid\",affid,{expires:365,path:\"\/\",domain:COOKIESDIAMON});\"webgainsusa\"!=aff_source\u0026\u0026\"webgainsfr\"!=aff_source\u0026\u0026\"webgainses\"!=aff_source\u0026\u0026\"webgainsde\"!=aff_source\u0026\u0026\"webgainsuk\"!=aff_source||\n$.cookie(\"webgains_flag\",1,{expires:60,path:\"\/\",domain:COOKIESDIAMON});actionpay\u0026\u0026$.cookie(\"actionpay\",actionpay,{expires:60,path:\"\/\",domain:COOKIESDIAMON})}utm_campaign\u0026\u0026$.cookie(\"utm_campaign\",utm_campaign,{expires:60,path:\"\/\",domain:COOKIESDIAMON});tduid\u0026\u0026$.cookie(\"tduid\",tduid,{expires:60,path:\"\/\",domain:COOKIESDIAMON});-1\u003C$.inArray(aff_source,aff_source_arr)\u0026\u0026-1\u003C$.inArray(utm_campaign,utm_campaign_arr)\u0026\u0026$.cookie(\"utm_campaign\",utm_campaign,{expires:45,path:\"\/\",domain:COOKIESDIAMON})}else{query_url=\nwindow.location.href;aff_source=_GET(\"utm_source\",query_url);lkid=_GET(\"lkid\",query_url);admitad_uid=_GET(\"admitad_uid\",query_url);utm_medium=_GET(\"utm_medium\",query_url);utm_campaign=_GET(\"utm_campaign\",query_url);affid=_GET(\"affid\",query_url);actionpay=_GET(\"actionpay\",query_url);click_id=_GET(\"click_id\",query_url);tduid=_GET(\"tduid\",query_url);var avad=_GET(\"avad\",query_url);aff_id=_GET(\"aff_id\",query_url);aff_source_arr=\"tradetrackerNL tradetrackerCZ tradetrackerIT tradetrackerDE tradetrackerRU tradetrackerNO tradetrackerEST tradetrackerPL tradetrackerFI tradetrackerHU tradetrackerFR tradetrackerUAE tradetrackerUK tradetrackerBE tradetrackerSE tradetrackerAT tradetrackerCH tradetrackerDK tradetracker\".split(\" \");\nutm_campaign_arr=\"ZafulNL ZafulCZ ZafulIT ZafulDE ZafulRU ZafulNO ZafulEST ZafulPL ZafulFI ZafulHU ZafulFR ZafulUAE ZafulUK ZafulBE ZafulSE ZafulAT ZafulCH ZafulDK ZafulES\".split(\" \");lmdsid=_GET(\"lmdsid\",query_url);aff=_GET(\"aff\",query_url);trackid=_GET(\"trackid\",query_url);aff\u0026\u0026trackid\u0026\u0026($.cookie(\"aff\",aff,{expires:30,path:\"\/\",domain:COOKIESDIAMON}),$.cookie(\"trackid\",trackid,{expires:30,path:\"\/\",domain:COOKIESDIAMON}));lmdsid\u0026\u0026$.cookie(\"lmdsid\",lmdsid,{expires:30,path:\"\/\",domain:COOKIESDIAMON});\naff_id\u0026\u0026$.cookie(\"aff_id\",aff_id,{expires:30,path:\"\/\",domain:COOKIESDIAMON});admitad_uid\u0026\u0026(aff_source=\"admitad\",$.cookie(\"admitad_uid\",admitad_uid,{expires:365,path:\"\/\",domain:COOKIESDIAMON}),aff_source=\"admitad_uid\");aff_source\u0026\u0026\"admitad_uid\"!=aff_source\u0026\u0026($.cookie(\"admitad_uid\",null,{expires:365,path:\"\/\",domain:COOKIESDIAMON}),myDate=new Date,$.cookie(aff_source,myDate.getTime(),{expires:365,path:\"\/\",domain:COOKIESDIAMON}),\"A8\"!=$.cookie(\"utm_source\")\u0026\u0026\"clickwise\"!=aff_source\u0026\u0026\"Affiliaxe\"!=aff_source\u0026\u0026\n\"Tradedoubler\"!=aff_source\u0026\u0026(\"cityads\"==aff_source?$.cookie(\"click_id\",click_id,{expires:60,path:\"\/\",domain:COOKIESDIAMON}):\"netaffiliation\"!=aff_source\u0026\u0026\"Linkconnector\"!=aff_source\u0026\u0026\"pepperjam\"!=aff_source\u0026\u0026\"Outbrain\"!=aff_source\u0026\u0026\"Affilinet\"!=aff_source\u0026\u0026\"dgmax\"!=$.cookie(\"utm_source\")\u0026\u0026$.cookie(\"utm_source\")),affid\u0026\u0026$.cookie(\"affid\",affid,{expires:365,path:\"\/\",domain:COOKIESDIAMON}),\"webgainsusa\"!=aff_source\u0026\u0026\"webgainsfr\"!=aff_source\u0026\u0026\"webgainses\"!=aff_source\u0026\u0026\"webgainsde\"!=aff_source\u0026\u0026\"webgainsuk\"!=\naff_source||$.cookie(\"webgains_flag\",1,{expires:60,path:\"\/\",domain:COOKIESDIAMON}),actionpay\u0026\u0026$.cookie(\"actionpay\",actionpay,{expires:60,path:\"\/\",domain:COOKIESDIAMON}));utm_campaign\u0026\u0026$.cookie(\"utm_campaign\",utm_campaign,{expires:60,path:\"\/\",domain:COOKIESDIAMON});tduid\u0026\u0026$.cookie(\"tduid\",tduid,{expires:60,path:\"\/\",domain:COOKIESDIAMON});avad\u0026\u0026$.cookie(\"avad\",avad,{expires:60,path:\"\/\",domain:COOKIESDIAMON});-1\u003C$.inArray(aff_source,aff_source_arr)\u0026\u0026-1\u003C$.inArray(utm_campaign,utm_campaign_arr)\u0026\u0026$.cookie(\"utm_campaign\",\nutm_campaign,{expires:45,path:\"\/\",domain:COOKIESDIAMON});lkid\u0026\u0026$.cookie(\"linkid\",lkid,{expires:365,path:\"\/\",domain:COOKIESDIAMON});aff_source\u0026\u0026($.cookie(\"aff_source\",aff_source,{expires:30,path:\"\/\",domain:COOKIESDIAMON}),$.cookie(\"utm_medium\",utm_medium,{expires:30,path:\"\/\",domain:COOKIESDIAMON}),$.cookie(\"utm_campaign\",utm_campaign,{expires:30,path:\"\/\",domain:COOKIESDIAMON}))}\nlkid?($.cookie(\"linkid\",lkid,{expires:365,path:\"\/\",domain:COOKIESDIAMON}),$.cookie(\"aff_source\")?($.cookie(\"aff_source\",\"xxxxxx\",{expires:30,path:\"\/\",domain:COOKIESDIAMON}),$.cookie(\"utm_medium\",\"xxxxxx\",{expires:30,path:\"\/\",domain:COOKIESDIAMON}),$.cookie(\"utm_campaign\",\"xxxxxx\",{expires:30,path:\"\/\",domain:COOKIESDIAMON})):($.cookie(\"aff_source\",null,{expires:30,path:\"\/\",domain:COOKIESDIAMON}),$.cookie(\"utm_medium\",null,{expires:30,path:\"\/\",domain:COOKIESDIAMON}),$.cookie(\"utm_campaign\",null,{expires:30,\npath:\"\/\",domain:COOKIESDIAMON}))):aff_source\u0026\u0026($.cookie(\"linkid\",null,{expires:365,path:\"\/\",domain:COOKIESDIAMON}),$.cookie(\"aff_source\",aff_source,{expires:30,path:\"\/\",domain:COOKIESDIAMON}),$.cookie(\"utm_medium\",utm_medium,{expires:30,path:\"\/\",domain:COOKIESDIAMON}),$.cookie(\"utm_campaign\",utm_campaign,{expires:30,path:\"\/\",domain:COOKIESDIAMON}),\"A8\"==aff_source\u0026\u0026$.cookie(\"a8\",_GET(\"a8\",query_url),{expires:30,path:\"\/\",domain:COOKIESDIAMON}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"",["escape",["macro",71],14,3],"\" width=\"1\" height=\"1\" border=\"0\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar USI_headID=document.getElementsByTagName(\"head\")[0],USI_installID=document.createElement(\"script\");USI_installID.type=\"text\/javascript\";USI_installID.src=\"\/\/www.upsellit.com\/launch\/zaful.jsp\";USI_headID.appendChild(USI_installID);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar product_arr=[],product_str;",["escape",["macro",0],8,16],".forEach(function(a,b){product_arr.push(a.goods_sn)});product_str=product_arr.join(\";\");\nif(document.createElement){var ads_mont=document.createElement(\"script\");ads_mont\u0026\u0026(ads_mont.setAttribute(\"src\",(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"api.moxielinks.com\/perform.php?action\\x3dTRANSACTION\\x26name\\x3dzaful\\x26product\\x3d{\"+product_str+\"}\\x26amount\\x3d{\"+",["escape",["macro",72],8,16],"+\"}\\x26reference\\x3d{REFERENCE}\\x26r\\x3d\"+Math.round(1E9*Math.random())),ads_mont.type=\"text\/javascript\",ads_mont.async=\"async\",ads_mont.defer=\"defer\",document.getElementsByTagName(\"head\")[0].appendChild(ads_mont))};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar goods_sku_arr=[],goods_sku_str;",["escape",["macro",0],8,16],".forEach(function(a,b){goods_sku_arr.push(a.goods_sn)});goods_sku_str=goods_sku_arr.join(\",\");var iframeNode=document.createElement(\"iframe\");iframeNode.setAttribute(\"src\",\"\/\/creativecdn.com\/tags?id\\x3dpr_lzfPoBLP0hLFQzlD5EHM_orderstatus2_\"+",["escape",["macro",72],8,16],"+\"_\"+",["escape",["macro",27],8,16],"+\"_\"+goods_sku_str+\"\\x26cd\\x3ddefault\");iframeNode.setAttribute(\"width\",\"1\");iframeNode.setAttribute(\"height\",\"1\");iframeNode.setAttribute(\"scrolling\",\"no\");\niframeNode.setAttribute(\"frameBorder\",\"0\");iframeNode.style.display=\"none\";document.getElementsByTagName(\"body\")[0].appendChild(iframeNode);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar goods_sku_arr=[],goods_price_arr=[],goods_sku_str,goods_price_str;",["escape",["macro",0],8,16],".forEach(function(a,b){goods_sku_arr.push(a.goods_sn);goods_price_arr.push(a.goods_price)});goods_sku_str=goods_sku_arr.join(\",\");goods_price_str=goods_price_arr.join(\",\");var iframeNode=document.createElement(\"iframe\");\niframeNode.setAttribute(\"src\",\"https:\/\/lomeway.go2cloud.org\/aff_l?offer_id\\x3d6\\x26amount\\x3d\"+",["escape",["macro",15],8,16],"+\"\\x26adv_sub\\x3d\"+",["escape",["macro",27],8,16],"+\"\\x26adv_sub2\\x3d\"+goods_sku_str+\"\\x26adv_sub3\\x3d\"+goods_price_str+\"\\x26adv_sub4\\x3d\"+",["escape",["macro",0],8,16],".length);iframeNode.setAttribute(\"width\",\"1\");iframeNode.setAttribute(\"height\",\"1\");iframeNode.setAttribute(\"scrolling\",\"no\");iframeNode.setAttribute(\"frameBorder\",\"0\");iframeNode.style.display=\"none\";document.getElementsByTagName(\"body\")[0].appendChild(iframeNode);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:[",["escape",["macro",73],8,16],"]},{event:\"setHashedEmail\",email:",["escape",["macro",74],8,16],"},{event:\"setSiteType\",type:",["escape",["macro",75],8,16],"},{event:\"viewHome\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:[",["escape",["macro",73],8,16],"]},{event:\"setHashedEmail\",email:",["escape",["macro",74],8,16],"},{event:\"setSiteType\",type:",["escape",["macro",75],8,16],"},{event:\"viewList\",item:",["escape",["macro",76],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":66
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:[",["escape",["macro",73],8,16],"]},{event:\"setHashedEmail\",email:",["escape",["macro",74],8,16],"},{event:\"setSiteType\",type:",["escape",["macro",75],8,16],"},{event:\"viewItem\",item:",["escape",["macro",77],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:[",["escape",["macro",73],8,16],"]},{event:\"setHashedEmail\",email:",["escape",["macro",74],8,16],"},{event:\"setSiteType\",type:",["escape",["macro",75],8,16],"},{event:\"viewBasket\",currency:",["escape",["macro",78],8,16],",item:",["escape",["macro",79],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:[",["escape",["macro",73],8,16],"]},{event:\"setHashedEmail\",email:",["escape",["macro",74],8,16],"},{event:\"setSiteType\",type:",["escape",["macro",75],8,16],"},{event:\"trackTransaction\",id:",["escape",["macro",80],8,16],",currency:",["escape",["macro",78],8,16],",item:",["escape",["macro",81],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe height=\"1\" width=\"1\" frameborder=\"0\" scrolling=\"no\" src=\"",["escape",["macro",83],14,3],"\" name=\"cj_conversion\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/t.cfjump.com\/tag\/37843\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[c]=a[b]})(window,\"CommissionFactory\",\"cf\");cf(\"set\",\"order\",\"",["escape",["macro",27],7],"\");cf(\"set\",\"amount\",parseFloat(",["escape",["macro",3],8,16],")+parseFloat(",["escape",["macro",4],8,16],"));cf(\"set\",\"currency\",\"",["escape",["macro",82],7],"\");cf(\"set\",\"coupon\",\"",["escape",["macro",35],7],"\");cf(\"set\",\"customer\",\"new\");cf(\"track\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/t.cfjump.com\/tag\/37843\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[c]=a[b]})(window,\"CommissionFactory\",\"cf\");cf(\"set\",\"order\",\"",["escape",["macro",27],7],"\");cf(\"set\",\"amount\",parseFloat(",["escape",["macro",3],8,16],")+parseFloat(",["escape",["macro",4],8,16],"));cf(\"set\",\"currency\",\"",["escape",["macro",82],7],"\");cf(\"set\",\"coupon\",\"",["escape",["macro",35],7],"\");cf(\"set\",\"customer\",\"old\");cf(\"track\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/track.in.omgpm.com\/1076799\/transaction.asp?APPID=",["escape",["macro",27],12],"\u0026amp;MID=1076799\u0026amp;PID=31578\u0026amp;status=",["escape",["macro",3],12],"\u0026amp;EX1=new\u0026amp;Vcode=",["escape",["macro",35],12],"\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/track.in.omgpm.com\/apptag.asp?APPID=",["escape",["macro",27],12],"\u0026amp;MID=1076799\u0026amp;PID=31578\u0026amp;status=",["escape",["macro",3],12],"\u0026amp;EX1=new\u0026amp;Vcode=",["escape",["macro",35],12],"\" border=\"0\" height=\"1\" width=\"1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/track.in.omgpm.com\/1076799\/transaction.asp?APPID=",["escape",["macro",27],12],"\u0026amp;MID=1076799\u0026amp;PID=31578\u0026amp;status=",["escape",["macro",3],12],"\u0026amp;EX1=old\u0026amp;Vcode=",["escape",["macro",35],12],"\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/track.in.omgpm.com\/apptag.asp?APPID=",["escape",["macro",27],12],"\u0026amp;MID=1076799\u0026amp;PID=31578\u0026amp;status=",["escape",["macro",3],12],"\u0026amp;EX1=old\u0026amp;Vcode=",["escape",["macro",35],12],"\" border=\"0\" height=\"1\" width=\"1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar goods_is_number=",["escape",["macro",84],8,16],";goods_is_number=0\u003Cgoods_is_number?1:0;\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cart_goods_sn_arr=[];",["escape",["macro",29],8,16],".forEach(function(a,b){cart_goods_sn_arr.push(a.goods_sn)});cart_goods_sn_arr=cart_goods_sn_arr.join(\",\");var cart_goods_price=",["escape",["macro",31],8,16],".goods_price,cart_is_new_user=",["escape",["macro",19],8,16],";cart_is_new_user=1==cart_is_new_user?\"new\":\"old\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar payok_order_amount=",["escape",["macro",3],8,16],"*my_array.BRL*100;payok_order_amount=payok_order_amount.toFixed(0);var payok_is_new_user=",["escape",["macro",19],8,16],";payok_is_new_user=1==payok_is_new_user?\"new\":\"old\";var payok_goods_sn_arr=[];",["escape",["macro",0],8,16],".forEach(function(a,b){payok_goods_sn_arr.push(a.goods_sn)});payok_goods_sn_arr=payok_goods_sn_arr.join(\",\");\nvar payok_date=new Date,payok_date_y=payok_date.getFullYear(),payok_date_m=payok_date.getMonth()+1,payok_date_d=payok_date.getDate(),payok_date_str=payok_date_d+\"-\"+payok_date_m+\"-\"+payok_date_y,payok_order_status=",["escape",["macro",85],8,16],";payok_order_status=0\u003Cpayok_order_status?\"Completed\":\"Pending\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/secure.afilio.com.br\/mastertag.php?progid=2443\u0026amp;type=transaction\u0026amp;id_partner=zaful\u0026amp;amount=",["escape",["macro",3],12],"\u0026amp;transaction_id=",["escape",["macro",27],12],"\u0026amp;customer_type=",["escape",["macro",86],12],"\u0026amp;product_id1=",["escape",["macro",87],12],"\u0026amp;url_product=",["escape",["macro",12],12],"\u0026amp;order_date=",["escape",["macro",88],12],"\u0026amp;order_status=",["escape",["macro",89],12],"\u0026amp;customer_id=",["escape",["macro",90],12],"\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/secure.afilio.com.br\/sale.php?pid=2443\u0026amp;order_id=",["escape",["macro",27],12],"\u0026amp;order_price=",["escape",["macro",91],12],"\u0026amp;xtra=",["escape",["macro",19],12],"\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/ad.zanox.com\/pps\/?18508C1905593614\u0026amp;mode=[[1]]\u0026amp;CustomerID=[[",["escape",["macro",93],12],"]]\u0026amp;OrderID=[[",["escape",["macro",27],12],"]]\u0026amp;CurrencySymbol=[[",["escape",["macro",82],12],"]]\u0026amp;TotalPrice=[[",["escape",["macro",3],12],"]]\u0026amp;PartnerID=[[",["escape",["macro",20],12],"]]\"\u003E\u003C\/script\u003E\n\u003Cimg src=\"https:\/\/ad.zanox.com\/pps\/?18508C1905593614\u0026amp;mode=[[2]]\u0026amp;CustomerID=[[",["escape",["macro",93],12],"]]\u0026amp;OrderID=[[",["escape",["macro",27],12],"]]\u0026amp;CurrencySymbol=[[",["escape",["macro",82],12],"]]\u0026amp;TotalPrice=[[",["escape",["macro",3],12],"]]\u0026amp;PartnerID=[[",["escape",["macro",20],12],"]]\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":87
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/go.salesmedia.pl\/aff_l?offer_id=1501\u0026amp;adv_sub=",["escape",["macro",27],12],"\u0026amp;amount=",["escape",["macro",3],12],"\" width=\"1\" height=\"1\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"",["escape",["macro",95],14,3],"\" width=\"1\" height=\"1\" frameborder=\"0\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"",["escape",["macro",28],14,3],"\" scrolling=\"no\" frameborder=\"0\" width=\"1\" height=\"1\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar configuraPrama=[{param:[{name:\"_nlnkid\",tag:[\"_nlnkid\"]}],typeid:1},{param:[{name:\"_nlnkid\",tag:[\"lkid\",\"vip\"],cookie:[\"linkid\"]}],typeid:2},{param:[{name:\"_nlnkid\",tag:[\"xx_lkid\"],cookie:[\"linkid\"]}],typeid:3},{param:[{name:\"source\",tag:[\"utm_source\"]},{name:\"medium\",tag:[\"utm_medium\"]},{name:\"campaign\",tag:[\"utm_campaign\"]}],typeid:4}],_ngroup=[],currentTime=Math.floor(Date.now()\/1E3),exp=new Date,zaful_create_time=\/date_wj_linkid_created=(\\d)+\/g.test(document.cookie)?Math.floor(document.cookie.replace(\/[\\s\\S]*date_wj_linkid_created=([\\d]+)(;|)*[\\s\\S]*\/g,\n\"$1\")\/1E3):currentTime,currentDomain=location.href.replace(\/.*(\\.[\\s\\S]+\\.com).*\/g,\"$1\"),limit_cookieLength=2560;\/_ngroup=\\[\\]\/g.test(document.cookie)\u0026\u0026(exp.setTime(exp.getTime()-6E4),document.cookie=\"_ngroup\\x3d[]; expires\\x3d\"+exp.toUTCString());var cookieSplitArray=document.cookie.split(\";\"),storeCookieGAParam=[],storeCookieIDParam=[],storeCookieGroup=[];getCookieParam(cookieSplitArray);\nfunction getCookieParam(a){a.forEach(function(a){var c=a.split(\"\\x3d\");\/^linkid=([\\w\\W])+\/g.test(a.trim())\u0026\u0026storeCookieIDParam.push({_nlnkid:c[1]});\/^utm_([\\w\\W])+=([\\w\\W])+\/g.test(a.trim());\/_ngroup=\\[([\\s\\S])+\\]\/g.test(a)\u0026\u0026(a=c[1].replace(\/((\"typeid\":)|(\"value\":)|(\"name\":)|(\"_nlast_time\":)|(\"_ncreate_time\":))\/g,function(a,d){var b=\"\",k=d.replace(\":\",\"\");'\"typeid\"'===k?b='\"tid\":':'\"value\"'===k?b='\"v\":':'\"name\"'===k?b='\"n\":':'\"_nlast_time\"'===k?b='\"lt\":':'\"_ncreate_time\"'===k\u0026\u0026(b='\"ct\":');return b}),\na=a.replace(\/(\"lt\"|\"ct\"):([\\d]{13})\/g,function(a,d,b){return d+\":\"+Math.floor(b\/1E3)}),storeCookieGroup.push({_ngroup:JSON.parse(a)}))})}var searchSlice=location.search.slice(1),storeSearchGAParam=[],storeSearchIDParam=[];function mapConfigurable(a,c){a.forEach(function(a){for(var f in a)if(\"object\"==typeof a[f]){var d=a[f];d.forEach(function(b,d){getUrlParam(c,b.tag,a)})}})}\nfunction getUrlParam(a,c,h){if(!a)return[];a=a.split(\"\\x26\");a.forEach(function(a){a=a.split(\"\\x3d\");if(~c.indexOf(a[0].replace(\/[^utm]*(utm_.*)+\/g,\"$1\"))){var d={};d.tid=h.typeid;if(~a[0].indexOf(\"utm\")\u0026\u0026a[1]){var b=a[0].trim().replace(\/.*utm_\/,\"\");d[b]=a[1];storeSearchGAParam.push(d)}else a[1]\u0026\u0026(d._nlnkid=a[1],storeSearchIDParam.push(d))}})}\nfunction compareLinkId(){var a,c;storeCookieIDParam[0]\u0026\u0026(storeCookieIDParam[0]._nlnkid=storeCookieIDParam[0]._nlnkid.replace(\/(%27.*)|(%22.*)\/g,\"\"));storeSearchIDParam[0]\u0026\u0026(storeSearchIDParam[0]._nlnkid=storeSearchIDParam[0]._nlnkid.replace(\/(%27.*)|(%22.*)\/g,\"\"));0!==storeCookieIDParam.length?a=storeCookieIDParam[0]._nlnkid:a=null;0!==storeSearchIDParam.length?c=storeSearchIDParam[0]._nlnkid:c=null;0!==storeCookieIDParam.length\u0026\u00260===storeSearchIDParam.length?_ngroup.push(compareCreateTime({tid:8===\na.length?3:2,v:[{n:\"_nlnkid\",v:a}],lt:currentTime})):0!==storeCookieIDParam.length\u0026\u00260!==storeSearchIDParam.length?a===c?_ngroup.push(compareCreateTime({tid:8\u003C=storeSearchIDParam[0]._nlnkid.length?3:storeSearchIDParam[0].tid,v:[{n:\"_nlnkid\",v:a}],lt:currentTime})):_ngroup.push(compareCreateTime({tid:8===a.length?3:2,v:[{n:\"_nlnkid\",v:a}],lt:currentTime}),{tid:8\u003C=storeSearchIDParam[0]._nlnkid.length?3:storeSearchIDParam[0].tid,v:[{n:\"_nlnkid\",v:c}],lt:currentTime,ct:currentTime}):0===storeCookieIDParam.length\u0026\u0026\n0!==storeSearchIDParam.length\u0026\u0026_ngroup.push({tid:8\u003C=storeSearchIDParam[0]._nlnkid.length?3:storeSearchIDParam[0].tid,v:[{n:\"_nlnkid\",v:c}],lt:currentTime,ct:currentTime})}\nfunction compareGAParam(){function a(d){for(var b=[],a=0,e=d.length;a\u003Ce;a++)for(var g in d[a])\"tid\"!==g\u0026\u0026b.push({n:g,v:d[a][g]});return b}function c(a,b){function d(a){_ngroup.push(compareCreateTime({tid:b[0].tid,v:a?g._storeCookieKey:g._storeUrlKey,lt:currentTime}),{tid:b[0].tid,v:a?g._storeUrlKey:g._storeCookieKey,lt:currentTime,ct:currentTime})}var e=[],g={};a.length===b.length?(g=h.LengthEqual(a,b,!1),e=g.isAllEqual,e.length!==a.length?d(!0):_ngroup.push(compareCreateTime({tid:b[0].tid,v:g._storeCookieKey,\nlt:currentTime}))):a.length\u003Eb.length?(g=h.LengthEqual(a,b,!0),d(!1)):a.length\u003Cb.length\u0026\u0026(g=h.LengthEqual(a,b,!1),d(!0))}var h={LengthEqual:function(a,b,k){var d={isAllEqual:[],_storeCookieKey:[],_storeUrlKey:[]},g=k?a:b;a=k?b:a;b=0;for(k=g.length;b\u003Ck;b++){for(var c in g[b])if(\"tid\"!==c){for(var f=0,h=a.length;f\u003Ch;f++)if(a[f][c]===g[b][c]){d.isAllEqual.push(!0);break}d._storeUrlKey.push({n:c,v:g[b][c]})}for(var l in a[b])\"tid\"!==l\u0026\u0026d._storeCookieKey.push({n:l,v:a[b][l]})}return d}};0!==storeCookieGAParam.length\u0026\u0026\n0===storeSearchGAParam.length?_ngroup.push(compareCreateTime({tid:4,v:a(storeCookieGAParam),lt:currentTime})):0!==storeCookieGAParam.length\u0026\u00260!==storeSearchGAParam.length?c(storeCookieGAParam,storeSearchGAParam):0===storeCookieGAParam.length\u0026\u00260!==storeSearchGAParam.length\u0026\u0026_ngroup.push({tid:storeSearchGAParam[0].tid,v:a(storeSearchGAParam),lt:currentTime,ct:currentTime});if(0===storeSearchGAParam.length\u0026\u0026document.referrer){var f=encodeURI(document.referrer).replace(\/^(?:\\w+:\\\/\\\/)?([^\\\/:]+)[\\w\\W]*$\/g,\n\"$1\");RegExp(currentDomain).test(f)||_ngroup.push({tid:5,v:[{n:\"source\",v:f},{n:\"medium\",v:\"referrer\"}],lt:currentTime,ct:currentTime})}}function compareCreateTime(a){return(a.ct=zaful_create_time)\u0026\u0026a}function thisFirstEnter(){compareLinkId();compareGAParam()}mapConfigurable(configuraPrama,searchSlice);0===storeCookieGroup.length\u0026\u0026(thisFirstEnter(),0!==_ngroup.length\u0026\u0026(document.cookie=\"_ngroup\\x3d\"+JSON.stringify(_ngroup)+\"; path\\x3d\/; domain\\x3d\"+currentDomain));\nif(0===storeCookieGAParam.length\u0026\u00260===storeCookieIDParam.length\u0026\u00260===storeSearchIDParam.length\u0026\u00260===storeSearchGAParam.length\u0026\u0026!~location.search.indexOf(\"utm\")\u0026\u0026~document.referrer.indexOf(location.origin)){var referrerStr=document.referrer;searchSlice=referrerStr.replace(\/^\\w+:\\\/\\\/[^?]+\\?([\\w\\W]+)$\/g,\"$1\");mapConfigurable(configuraPrama,searchSlice);compareLinkId();compareGAParam();0===storeCookieGroup.length\u0026\u00260!==_ngroup.length\u0026\u0026(document.cookie=\"_ngroup\\x3d\"+JSON.stringify(_ngroup)+\"; path\\x3d\/; domain\\x3d\"+\ncurrentDomain)}0\u003CstoreCookieGroup.length\u0026\u0026_mapNgroup();\nfunction _mapNgroup(){var a=[],c=[],h=[];var f={linkid:function(){function d(){a.push({tid:8\u003C=storeSearchIDParam[0]._nlnkid.length?3:storeSearchIDParam[0].tid,v:[{n:\"_nlnkid\",v:storeSearchIDParam[0]._nlnkid}],lt:currentTime,ct:currentTime})}storeSearchIDParam[0]\u0026\u0026(storeSearchIDParam[0]._nlnkid=storeSearchIDParam[0]._nlnkid.replace(\/(%27.*)|(%22.*)\/g,\"\"));if(0\u003CstoreSearchIDParam.length\u0026\u00260\u003Ca.length)for(var b=0,c=a.length;b\u003Cc;b++){var e=a[b];e.v\u0026\u0026(e.v[0].v=e.v[0].v.replace(\/(%27.*)|(%22.*)\/g,\"\"));if(e.v[0].v===\nstoreSearchIDParam[0]._nlnkid){e.lt=currentTime;break}if(b===c-1){d();break}}else 0===storeSearchIDParam.length\u0026\u00260===a.length||0===storeSearchIDParam.length||0!==a.length||d()},gaparam:function(){function a(){var a=storeSearchGAParam.map(function(a,b){for(var d in a)if(\"tid\"!==d)return{n:d,v:a[d]}});c.push({tid:4,v:a,lt:currentTime,ct:currentTime})}var b=[];if(0\u003CstoreSearchGAParam.length\u0026\u00260\u003Cc.length){for(var k=0;c[k++];){var e=c[k-1].v;b.push([]);if(e.length===storeSearchGAParam.length)e.forEach(function(a,\nd){for(var c=0,e=storeSearchGAParam.length;c\u003Ce;c++){var g=storeSearchGAParam[c],f;for(f in g)\"tid\"!==f\u0026\u0026f===a.n\u0026\u0026g[f]===a.v\u0026\u0026b[k-1].push(!0)}});else if(k===c.length\u0026\u0026e.length!==storeSearchGAParam.length)for(e=0;e\u003Cb.length\u0026\u0026b[e].length!=storeSearchGAParam.length;e++)if(0==b[e].length\u0026\u0026e===b.length-1){a();return}}for(e=0;e\u003Cb.length;e++)if(0\u003Cb[e].length||1===c[e].v.length\u0026\u00261===storeSearchGAParam.length){if(b[e].length===storeSearchGAParam.length){c[e].lt=currentTime;break}e===b.length-1\u0026\u0026a()}else 0==\nb[e].length\u0026\u0026e===b.length-1\u0026\u0026a()}else 0\u003CstoreSearchGAParam.length\u0026\u00260===c.length\u0026\u0026a()},refhost:function(){var a=encodeURI(document.referrer).replace(\/^(?:\\w+:\\\/\\\/)?([^\\\/:]+)[\\w\\W]*$\/g,\"$1\");if(document.referrer\u0026\u0026!RegExp(currentDomain).test(a)){var b={n:\"source\",v:a};0\u003Ch.length?(a=h.filter(function(a,d){var c=a.v.filter(function(a){return\"source\"==a.n});return RegExp(b.v).test(JSON.stringify(c))}),1\u003Ea.length?h.push({tid:5,v:[{n:\"medium\",v:\"referrer\"},b],lt:currentTime,ct:currentTime}):h.map(function(a,\nd){a.v.map(function(d,c){\"source\"==d.n\u0026\u0026d.v==b.v\u0026\u0026(a.lt=currentTime);return d});return a})):h.push({tid:5,v:[{n:\"medium\",v:\"referrer\"},b],lt:currentTime,ct:currentTime})}}};a=storeCookieGroup[0]._ngroup.filter(function(a,b){var d=a.v[0];return\"_nlnkid\"===d.n\u0026\u0026d.v});a.map(function(a,b){a.v[0].v\u0026\u0026(a.v[0].v.indexOf(\"'\")||a.v[0].v.indexOf('\"'))\u0026\u0026(a.v[0].v=a.v[0].v.replace(\/(%27.*)|(%22.*)\/g,\"\"));return a});c=storeCookieGroup[0]._ngroup.filter(function(a,b){return 4===a.tid});storeCookieGroup[0]._ngroup.map(function(a,\nb){5==a.tid\u0026\u0026a.v.map(function(a,b){\"source\"==a.n\u0026\u0026(a.v=encodeURI(a.v).replace(\/^(?:\\w+:\\\/\\\/)?([^\\\/:]+)[\\w\\W]*$\/g,\"$1\"));return a});return a});h=storeCookieGroup[0]._ngroup.filter(function(a,b){return 5===a.tid});f.linkid();f.gaparam();0==storeSearchGAParam.length\u0026\u0026f.refhost();f=a.concat(c,h);0!==f.length\u0026\u0026(3096\u003C=document.cookie.length\u0026\u0026JSON.stringify(f).length\u003E=limit_cookieLength?document.cookie=\"_ngroup\\x3d\"+JSON.stringify(detectionLength(f))+\"; path\\x3d\/; domain\\x3d\"+currentDomain:document.cookie=\n\"_ngroup\\x3d\"+JSON.stringify(f)+\"; path\\x3d\/; domain\\x3d\"+currentDomain)}function detectionLength(a){function c(a){h.sort(function(a,c){return a.ct-c.ct});var d=JSON.stringify(a);d.length\u003E=limit_cookieLength\u0026\u0026(a.splice(0,1),JSON.stringify(a).length\u003E=limit_cookieLength\u0026\u0026c(a))}var h=JSON.parse(JSON.stringify(a));c(h);return h};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":99
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/img.metaffiliation.com\/u\/24\/p56891.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/img.metaffiliation.com\/u\/18\/p56885.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/img.metaffiliation.com\/u\/22\/p56889.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":101
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/img.metaffiliation.com\/u\/30\/p58209.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/img.metaffiliation.com\/u\/32\/p58211.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/img.metaffiliation.com\/u\/14\/p56881.js\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/img.metaffiliation.com\/u\/16\/p56883.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/img.metaffiliation.com\/u\/20\/p56887.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/img.metaffiliation.com\/u\/12\/p56879.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cartArr=[];",["escape",["macro",0],8,16],".forEach(function(a,b){cartArr.push({id:a.goods_sn,price:(a.goods_price*my_array.EUR).toFixed(2),quantity:a.goods_number})});window.ptag_params={zone:\"transaction\",products:cartArr,transactionId:\"",["escape",["macro",27],7],"\",currency:\"EUR\",customerId:\"",["escape",["macro",93],7],"\",siteType:\"m\",m_md5:\"",["escape",["macro",96],7],"\"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":108
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10039184\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/api.dealspotr.com\/v3\/campaign-tracking?output=js\u0026amp;merchant=26504fb5-c4f6-42b4-a930-d2a365659925\u0026amp;orderId=",["escape",["macro",27],12],"\u0026amp;amount=",["escape",["macro",3],12],"\u0026amp;subtotal=",["escape",["macro",15],12],"¤cy=",["escape",["macro",82],12],"\u0026amp;discountCode1=",["escape",["macro",97],12],"\u0026amp;discountAmount1=",["escape",["macro",98],12],"\" async=\"async\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=\"\/\/config1.veinteractive.com\/tags\/21C767AF\/B848\/4DF6\/9159\/4E2C0B300EE0\/tag.js\";var a=document.getElementsByTagName(\"head\")[0];a?a.appendChild(b,a):(a=document.getElementsByTagName(\"script\")[0],a.parentNode.insertBefore(b,a))}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":114
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.StylightAnalyticsRef=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].s=new Date\/1;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"\/\/stats-bq.stylight.net\/tracking.js?p\\x3d18034009b47ef487d9b4d3ba1c741950\",\"sty\");\u003C\/script\u003E\n\n\u003Cimg src=\"https:\/\/stats-bq.stylight.net\/track\/18034009b47ef487d9b4d3ba1c741950\/sl?skus=",["escape",["macro",33],12],"\u0026amp;oi=",["escape",["macro",27],12],"\u0026amp;ta=",["escape",["macro",3],12],"\u0026amp;c=",["escape",["macro",82],12],"\u0026amp;ic=",["escape",["macro",34],12],"\" style=\"position:absolute; visibility:hidden\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":115
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.StylightAnalyticsRef=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].s=new Date\/1;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"\/\/stats-bq.stylight.net\/tracking.js?p\\x3daf1b813a991a67f76bf827cb9d7a5a44\",\"sty\");\u003C\/script\u003E\n\n\u003Cimg src=\"https:\/\/stats-bq.stylight.net\/track\/af1b813a991a67f76bf827cb9d7a5a44\/sl?skus=",["escape",["macro",33],12],"\u0026amp;oi=",["escape",["macro",27],12],"\u0026amp;ta=",["escape",["macro",3],12],"\u0026amp;c=",["escape",["macro",82],12],"\u0026amp;ic=",["escape",["macro",34],12],"\" style=\"position:absolute; visibility:hidden\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":116
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.StylightAnalyticsRef=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].s=new Date\/1;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"\/\/stats-bq.stylight.net\/tracking.js?p\\x3d5d7ac3736c19688cef23cf92fba380bc\",\"sty\");\u003C\/script\u003E\n\u003Cimg src=\"https:\/\/stats-bq.stylight.net\/track\/5d7ac3736c19688cef23cf92fba380bc\/sl?skus=",["escape",["macro",33],12],"\u0026amp;oi=",["escape",["macro",27],12],"\u0026amp;ta=",["escape",["macro",3],12],"\u0026amp;c=",["escape",["macro",82],12],"\u0026amp;ic=",["escape",["macro",34],12],"\" style=\"position:absolute; visibility:hidden\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":117
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _roi=_roi||[];_roi.push([\"_setMerchantId\",\"528367\"]);_roi.push([\"_setOrderId\",\"",["escape",["macro",27],7],"\"]);_roi.push([\"_setOrderAmount\",\"",["escape",["macro",15],7],"\"]);_roi.push([\"_setOrderNotes\",\"\"]);",["escape",["macro",0],8,16],".forEach(function(a,b){_roi.push([\"_addItem\",a.goods_sn,a.goods_name,a.cat_id,a.cat_name,a.goods_price,a.goods_number])});_roi.push([\"_trackTrans\"]);\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/stat.dealtime.com\/ROI\/ROI2.js\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":118
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function E(b){var a={};try{for(var d=0;d\u003Cb.length;d++){var n=\/AKAM_CLIENTID\/.exec(b[d]);n\u0026\u00260\u003Cn.length\u0026\u0026(a.akam_id=n.input.replace(\/.*=(.*)\/g,\"$1\").replace(\"; \",\"\"))}}catch(p){}return a.akam_id||\"\"}function F(b){var a;try{for(var d=0;d\u003Cb.length;d++)\/^_mclickEventDate\/g.test(b[d])\u0026\u0026(a=b[d].split(\"\\x3d\")[1]);a||(a=l)}catch(n){a=l}return a}function v(b,a,d){try{b\u0026\u0026b()}catch(p){if(a\u0026\u0026a(),\"payok\"==y){try{var n={str:\"mzaful - \"+d||p.message}}catch(R){n={str:\"mzaful-error\"}}$.ajax({url:\"https:\/\/test.1cros.net\/click_error\",\ntype:\"POST\",contentType:\"application\/x-www-form-urlencoded\",dataType:\"text\",timeout:1E4,data:JSON.stringify(n),success:function(d){},error:function(d,a,b){}})}}finally{}}function g(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function w(b){return b?(z||g()+g()+\"-\"+g()+\"-\"+Date.now()+\"-\"+g()+\"-\"+g()+g()+g())+\"_\"+b:(z||g()+g()+\"-\"+g()+\"-\"+g()+\"-\"+g()+\"-\"+g()+g()+g())+A+G}function H(){function b(){var h=x;try{return h.setTime(h.getTime()+186E4),h.toUTCString()}catch(k){return\"\"}}function a(){var h=\nw(l);document.cookie=\"WEBF_guid\\x3d\"+h+\"; path\\x3d\/; domain\\x3d\"+p+\";expires\\x3d\"+g;return h}function d(h){for(var k=document.cookie.split(\"; \"),c=0,d;d=k[c++];)if(d=h.exec(d))try{var a=d[1].replace(\"\\x3d\",\"\");return a}catch(I){return\"\"}}function n(){if(\/WEBF_predate=\/g.test(document.cookie))var h=d(\/WEBF_predate(.*)\/);else h=l,document.cookie=\"WEBF_predate\\x3d\"+h+\"; path\\x3d\/; domain\\x3d\"+p+\";expires\\x3d\"+g;return h}var p=location.href.replace(\/.*(\\.[\\s\\S]+\\.com).*\/g,\"$1\"),g=b(),e=n();var m=\/WEBF_guid=\/g.test(document.cookie)?\nd(\/WEBF_guid(.*)\/):a();1800\u003Cl-e\u0026\u0026(m=a());document.cookie=\"WEBF_guid\\x3d\"+m+\"; path\\x3d\/; domain\\x3d\"+p+\";expires\\x3d\"+g;document.cookie=\"WEBF_predate\\x3d\"+l+\"; path\\x3d\/; domain\\x3d\"+p+\";expires\\x3d\"+g;return m}function r(b){function a(h){function k(c){c||(c=\"\");return c+=n}var c=[];try{c=JSON.parse(JSON.stringify(h))}catch(B){c.push(b)}var n=\"^\";h=[];try{var e=c;if(\"object\"!==typeof e)console.error(\"\\u6570\\u636e\\u683c\\u5f0f\\u51fa\\u9519\"),d(!0);else{c=\"\";for(var g=0;g\u003Ce.length;g++){var f=e[g];c+=\nk(f.ev||f[\"ev\\u007f\"]).slice(0,21);f.data||(f.data={});c+=k(f.data.cy).slice(0,11);c+=k(f.data.v);c+=k(f.data.tp).slice(0,21);f.data.ids\u0026\u0026\"object\"===typeof f.data.ids||(f.data.ids=[]);c+=k(f.data.ids.join(\",\")).slice(0,501);c+=k(f.data.cnt);c+=k(f.data.cg).slice(0,501);c+=k(f.dt);c+=k(f.wid).slice(0,31);f.raw||(f.raw={});c+=k(f.raw.lp).slice(0,1001);c+=k(f.raw.ref).slice(0,1001);c+=k(f.raw.sw);c+=k(f.raw.sh);c+=k(f.raw.aid).slice(0,101);c+=k(decodeURI(f.raw.agent)).slice(0,501);c+=k(f.raw.ga).slice(0,\n31);c+=k(f.raw.sid).slice(0,51);c+=k(f.raw.lid).slice(0,21);c+=k(f.raw.gid).slice(0,31);c+=k(f.raw.uid).slice(0,51);c+=k(f.raw.guid).slice(0,61);c+=k(f.data.order).slice(0,51);c+=k(f.raw.eventid).slice(0,71);c+=k(f.raw.dtitle).slice(0,501);c+=k(f.payway).slice(0,31);c+=k(f.paramOk).slice(0,21);c+=f.raw.lang.slice(0,6);h[g]={sd:c,st:l-f.dt,ct:l};c=\"\"}return h}}catch(B){return console.log(B),e=[],e.push(b),a(e)}}function d(h){g.requestResult=h;h=J(g);h.start()}var n=document.domain.replace(\/(.*?)\\.[\\w\\W]+\/g,\n\"$1\");n=RegExp(n).test(K);var p=[],g={rootname:n,requestResult:!0,param:b,postData:null,filterData:null};p.push(b);try{n=[];n.push(b);var e=n}catch(h){e=[],e.push(b)}g.postData=e;n=0;for(var m;m=e[n++];)try{m.raw.guid=C,m.raw.eventid||(m.raw.eventid=w()),m.raw.dtitle||(m.raw.dtitle=document.title.replace(\/\\^\/g,\"\").replace(\/\"|(%22)\/g,\"\")),m.status||(m.status=1,m.statusTime=l),1==m.status\u0026\u002610\u003Cl-m.statusTime\u0026\u0026(m.status=2,m.statusTime=l),2==m.status\u0026\u0026(p.push(m),m.status=1)}catch(h){}g.filterData=p;try{4\u003C\ne.length||0==a(p).length?d(!0):$.ajax({url:L,type:\"POST\",timeout:1E4,contentType:\"application\/x-www-form-urlencoded\",dataType:\"text\",withCredentials:!0,data:JSON.stringify(a(p)),success:function(h){d(!0)},error:function(h,d,c){v(function(){JSON.stringify(a(p))})}})}catch(h){}}function J(b){var a=function(d){this.rootname=d.rootname;this.requestResult=d.requestResult;this.param=d.param;this.postData=d.postData;this.filterData=d.filterData};a.prototype.start=function(){this.rootname?this.requestResult?\nthis.handleLocalSuccess():this.handleLocalFailue():this.requestResult?this.handleCookieSuccess():this.handleCookieFailue()};a.prototype.handleLocalFailue=function(){this.handleClearCookie();for(var d=window.localStorage,a=0;a\u003Cthis.postData.length;a++)this.postData[a].status=2,this.postData[a].statusTime=l;var b=this;v(function(){d.setItem(\"_eData\",JSON.stringify(b.postData))},function(){d.setItem(\"_eData\",JSON.stringify([]))})};a.prototype.handleLocalSuccess=function(){this.handleClearStorage();this.handleClearCookie()};\na.prototype.handleCookieFailue=function(){for(var d=0;d\u003Cthis.postData.length;d++)this.postData[d].status=2,this.postData[d].statusTime=l;var a=this;v(function(){document.cookie=\"_WEDATA\\x3d\"+JSON.stringify(a.postData)+\"; path\\x3d\/; domain\\x3d\"+t},function(){document.cookie=\"_WEDATA\\x3d\"+JSON.stringify([])+\"; path\\x3d\/; domain\\x3d\"+t})};a.prototype.handleCookieSuccess=function(){this.handleClearCookie()};a.prototype.handleClearCookie=function(){if(\/_WEDATA=\/g.test(document.cookie)){var a=this.handleSuccessData();\n0\u003Ca.length?document.cookie=\"_WEDATA\\x3d\"+JSON.stringify(a)+\"; path\\x3d\/; domain\\x3d\"+t:(x.setTime(x.getTime()-6E4),document.cookie=\"_WEDATA\\x3d[]; path\\x3d\/; domain\\x3d\"+t,document.cookie=\"_WEDATA\\x3d[]; expires\\x3d\"+x.toUTCString()+\"; path\\x3d\/; domain\\x3d\"+t)}};a.prototype.handleClearStorage=function(){var a=window.localStorage,b=this.handleSuccessData();v(function(){0==b.length\u0026\u0026a.getItem(\"_eData\")\u0026\u0026a.removeItem(\"_eData\");0\u003Cb.length\u0026\u0026a.setItem(\"_eData\",JSON.stringify(b))})};a.prototype.handleSuccessData=\nfunction(){try{var a=JSON.parse(JSON.stringify(this.postData));_fData=this.filterData;for(var b=0;b\u003Ca.length;b++)RegExp(\" \"+a[b].raw.eventid+\" \").test(\" \"+_fData.map(function(a){return a.raw.eventid}).join(\" \")+\" \")\u0026\u0026(a.splice(b,1),b--)}catch(p){a=[]}return a};return new a(b)}function M(b){switch(b){case \"goods\":var a=[\"new_addcart\"];b=[\"action_add_to_fav\"];if(~a.indexOf(q.id)||~a.indexOf(q.parentElement.id))a=u(\"AddToCart\"),r(a);if(~b.indexOf(q.id)||~b.indexOf(q.parentElement.id))a=u(\"AddToWishlist\"),\nr(a);break;case \"sign\":b=[\"js_registBtn\",\"js_fb_signInBtn\"];if(~b.indexOf(q.id)||~b.indexOf(q.parentElement.id))a=u(\"CompleteRegistration\"),r(a);break;case \"cart\":case \"checkout\":b=[\"js_paypal\",\"js_upOrderBtn\"];if(~q.parentElement.className.indexOf(b[0])||~b.indexOf(q.id))a=u(\"Purchase\",y),r(a);break;case \"payok\":a=u(\"PayDone\"),r(a)}}var A=Date.now(),l=parseInt(A\/1E3),G=l,t=document.domain.replace(\/.*(\\..*\\.com).*\/g,\"$1\"),D=document.cookie.split(\"; \"),z=E(D);F(D);var x=new Date,N=window.screen.width,\nO=window.screen.height,P=window.navigator.userAgent,q=",["escape",["macro",67],8,16],",y=",["escape",["macro",56],8,16],",Q=",["escape",["macro",63],8,16],"||\"en\",L=\"https:\/\/nginx.1cros.net\/click_re\",K=\"m ar-m de-m es-m fr-m it-m pt-m\".split(\" \");w();var C=H(),u=function(){function b(a){if(!\/%\/g.test(a)||8\u003Cg)return a.slice(0,1001).replace(\/(%20)| \/g,\"\").replace(\/\\^|(%5e)\/gi,\"+\").replace(\/(%22)|\"\/g,\"\");a=decodeURI(a);g++;return b(a)}function a(){var a=",["escape",["macro",27],8,16],";var b={};var c,d=location.search.slice(1);if(d){d=d.split(\"\\x26\");\nfor(var e=0;e\u003Cd.length;e++)if(c=\/^(oid|code)=(.*)$\/.exec(d[e]))try{c[2]\u0026\u0026(b[c[1]]=c[2].replace(\/(-.*)$\/,\"\"))}catch(I){}}a=a?a:b.oid;return a={ordersn:a||\"\",isTriggerPayDone:!1,code:b.code||\"\"}}function d(){for(var a=document.cookie.split(\"; \"),b=0;b\u003Ca.length;b++){var c=a[b];\/^linkid=(.*)+\/.test(c)\u0026\u0026(e.lid=c.replace(\"linkid\\x3d\",\"\"));\/^WEBF\\-user_id=(.*)+\/.test(c)\u0026\u0026(e.uid=c.replace(\"WEBF-user_id\\x3d\",\"\"));\/^ZA_SESSIONID=(.*)+\/.test(c)\u0026\u0026(e.sid=c.replace(\"ZA_SESSIONID\\x3d\",\"\"));\/^_ga=(.*)+\/.test(c)\u0026\u0026\n(e.ga=c.replace(\"_ga\\x3d\",\"\"));\/^_gid=(.*)+\/.test(c)\u0026\u0026(e.gid=c.replace(\"_gid\\x3d\",\"\"))}e.guid=C;e.eventid=w();e.dtitle=document.title.replace(\/\\^\/g,\"\").replace(\/\"|(%22)\/g,\"\");e.lang=Q}var g=0,p=location.href,q=document.referrer,e={sw:N,sh:O,aid:z,agent:encodeURI(P.replace(\/;\/g,\"\").replace(\/\\r\\n\/g,\"\").replace(\/\"|(%22)\/g,\"\"))};try{e.lp=encodeURI(b(p))}catch(h){e.lp=encodeURI(p).slice(0,1001).replace(\/(%20)| \/g,\"\").replace(\/\\^|(%5e)\/gi,\"+\").replace(\/(%22)|\"\/g,\"\")}try{e.ref=encodeURI(b(q))}catch(h){e.ref=\nencodeURI(q).slice(0,1001).replace(\/(%20)| \/g,\"\").replace(\/\\^|(%5e)\/gi,\"+\").replace(\/(%22)|\"\/g,\"\")}try{d()}catch(h){}var m={AddToCart:function(){var a=document.getElementById(\"js_input_quantity\").value;return{ev:\"AddToCart\",data:{cy:\"USD\",v:parseFloat(",["escape",["macro",64],8,16],"),tp:\"product\",ids:[\"",["escape",["macro",65],7],"\"],cnt:a},dt:l,wid:\"XA-1000040-2\",raw:e,status:1,statusTime:l}},AddToWishlist:function(){return{ev:\"AddToWishlist\",data:{cy:\"USD\",v:parseFloat(",["escape",["macro",64],8,16],"),tp:\"product\",ids:[\"",["escape",["macro",65],7],"\"],\ncg:",["escape",["macro",1],8,16],"},dt:l,wid:\"XA-1000040-2\",raw:e,status:1,statusTime:l}},CompleteRegistration:function(){return{ev:\"CompleteRegistration\",data:{},dt:l,wid:\"XA-1000040-2\",raw:e,status:1,statusTime:l}},Purchase:function(a){var b=[],c=[];\"cart\"==a?(c=",["escape",["macro",29],8,16],",a=",["escape",["macro",31],8,16],"):(c=",["escape",["macro",40],8,16],",a=",["escape",["macro",47],8,16],");try{c.forEach(function(a,c){b.push(a.goods_sn)});var d={ev:\"Purchase\",data:{cy:\"USD\",v:a.goods_price,tp:\"product\",ids:b.slice(0,51)},dt:l,wid:\"XA-1000040-2\",\nraw:e,status:1,statusTime:l}}catch(T){d={ev:\"Purchase\",data:{cy:\"USD\",v:\"\",tp:\"product\",ids:[]},dt:l,wid:\"XA-1000040-2\",raw:e,paramOk:\"1\",status:1,statusTime:l}}return d},PayDone:function(){var b=[],d=a();\"object\"!=typeof d\u0026\u0026(d={});try{",["escape",["macro",0],8,16],".forEach(function(a,c){b.push(a.goods_sn)});var c={ev:\"PayDone\",data:{ids:b,order:",["escape",["macro",27],8,16],"||d.ordersn,tp:\"product\",v:",["escape",["macro",3],8,16],"},dt:l,wid:\"XA-1000040-2\",raw:e,payway:",["escape",["macro",69],8,16],"||d.code,status:1,statusTime:l}}catch(S){c=\n{ev:\"PayDone\",data:{ids:[],order:",["escape",["macro",27],8,16],"||d.ordersn,tp:\"product\",v:",["escape",["macro",3],8,16],"},dt:l,wid:\"XA-1000040-2\",raw:e,paramOk:\"1\",payway:",["escape",["macro",69],8,16],"||d.code,status:1,statusTime:l}}return c}};return function(a,b){return m[a](b)}}();M(y)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":120
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var nowDate=Date.now();var date=parseInt(nowDate\/1E3);var s_date=date;var _domain=document.domain.replace(\/.*(\\..*\\.com).*\/g,\"$1\");var cookieData=document.cookie.split(\"; \");var akam_id=get_AKAM_ID(cookieData);var clickEventDate=getDateToLimitEvent(cookieData);var exp=new Date;function get_AKAM_ID(ck){var obj_akam_id={};try{for(var i=0;i\u003Cck.length;i++){var result=RegExp(\"AKAM_CLIENTID\").exec(ck[i]);result\u0026\u0026result.length\u003E0\u0026\u0026(obj_akam_id[\"akam_id\"]=result.input.replace(\/.*=(.*)\/g,\"$1\").replace(\"; \",\n\"\"))}}catch(e){}return obj_akam_id[\"akam_id\"]||\"\"}function getDateToLimitEvent(ck){var result;for(var i=0;i\u003Cck.length;i++)if(\/^_mpageviewEventDate\/g.test(ck[i]))result=ck[i].split(\"\\x3d\")[1];if(!result||date-result\u003E1);if(!result)result=date;return result}var _screenWidth=window.screen.width;var _screenHeight=window.screen.height;var _navigator=window.navigator.userAgent;var currentClickDOM=",["escape",["macro",67],8,16],";var currentPage=",["escape",["macro",56],8,16],";var currentPageLang=",["escape",["macro",63],8,16],"||\"en\";\nvar _url=\"https:\/\/nginx.1cros.net\/click_re\";var _config=[\"m\",\"ar-m\",\"de-m\",\"es-m\",\"fr-m\",\"it-m\",\"pt-m\"];var event_guid=_guid_();function receiveError(cb,errorcb){try{cb\u0026\u0026cb()}catch(e){errorcb\u0026\u0026errorcb()}finally{}}function _S4(){return((1+Math.random())*65536|0).toString(16).substring(1)}function _guid_(date){if(date)return(akam_id||_S4()+_S4()+\"-\"+_S4()+\"-\"+Date.now()+\"-\"+_S4()+\"-\"+_S4()+_S4()+_S4())+\"_\"+date;return(akam_id||_S4()+_S4()+\"-\"+_S4()+\"-\"+_S4()+\"-\"+_S4()+\"-\"+_S4()+_S4()+_S4())+nowDate+\ns_date}var WEBF_guid=getGuid();function getGuid(){var WEBF_guid;var currentDomain=location.href.replace(\/.*(\\.[\\s\\S]+\\.com).*\/g,\"$1\");function setExpDate(){var expDate=exp;try{expDate.setTime(expDate.getTime()+31*60*1E3);return expDate.toUTCString()}catch(e){return\"\"}}var expiresDate=setExpDate();function setGUID(){var webf_guid=_guid_(date);document.cookie=\"WEBF_guid\\x3d\"+webf_guid+\"; path\\x3d\/; domain\\x3d\"+currentDomain+\";expires\\x3d\"+expiresDate;return webf_guid}function execCookie(reg){var cookies=\ndocument.cookie.split(\"; \");for(var i=0,_cookie;_cookie=cookies[i++];){var result=reg.exec(_cookie);if(result)try{var execResult=result[1].replace(\"\\x3d\",\"\");return execResult}catch(e){return\"\"}}}function getPreDate(){var preDate;if(!\/WEBF_predate=\/g.test(document.cookie)){preDate=date;document.cookie=\"WEBF_predate\\x3d\"+preDate+\"; path\\x3d\/; domain\\x3d\"+currentDomain+\";expires\\x3d\"+expiresDate}else preDate=execCookie(\/WEBF_predate(.*)\/);return preDate}var preDate=getPreDate();if(!\/WEBF_guid=\/g.test(document.cookie))WEBF_guid=\nsetGUID();else WEBF_guid=execCookie(\/WEBF_guid(.*)\/);if(date-preDate\u003E1800)WEBF_guid=setGUID();document.cookie=\"WEBF_guid\\x3d\"+WEBF_guid+\"; path\\x3d\/; domain\\x3d\"+currentDomain+\";expires\\x3d\"+expiresDate;document.cookie=\"WEBF_predate\\x3d\"+date+\"; path\\x3d\/; domain\\x3d\"+currentDomain+\";expires\\x3d\"+expiresDate;return WEBF_guid}function ajax(param){var _rootname=document.domain.replace(\/(.*?)\\.[\\w\\W]+\/g,\"$1\");var isRootName=RegExp(_rootname).test(_config);var postData,filterPostData=[];var handleParam=\n{rootname:isRootName,requestResult:true,param:param,postData:null,filterData:null};filterPostData.push(param);try{var storeParam=[];storeParam.push(param);postData=storeParam}catch(e){var paramArray=[];paramArray.push(param);postData=paramArray}handleParam[\"postData\"]=postData;for(var _index=0,_pd;_pd=postData[_index++];)try{_pd[\"raw\"][\"guid\"]=WEBF_guid;if(!_pd[\"raw\"][\"eventid\"])_pd[\"raw\"][\"eventid\"]=_guid_();if(!_pd[\"raw\"][\"dtitle\"])_pd[\"raw\"][\"dtitle\"]=document.title.replace(\/\\^\/g,\"\").replace(\/\"|(%22)\/g,\n\"\");if(!_pd[\"status\"]){_pd[\"status\"]=1;_pd[\"statusTime\"]=date}if(_pd[\"status\"]==1\u0026\u0026date-_pd[\"statusTime\"]\u003E10){_pd[\"status\"]=2;_pd[\"statusTime\"]=date}if(_pd[\"status\"]==2){filterPostData.push(_pd);_pd[\"status\"]=1}}catch(e){}handleParam[\"filterData\"]=filterPostData;try{if(postData.length\u003E4||hanldeDataSplice(filterPostData).length==0){handlAjaxProcess(true);return}$.ajax({url:_url,type:\"POST\",timeout:1E4,contentType:\"application\/x-www-form-urlencoded\",dataType:\"text\",data:JSON.stringify(hanldeDataSplice(filterPostData)),\nsuccess:function(data){handlAjaxProcess(true)},error:function(req,errorStatu,errorThrow){receiveError(function(){JSON.stringify(hanldeDataSplice(filterPostData))})}})}catch(e){}function hanldeDataSplice(data){var _postData=[];try{_postData=JSON.parse(JSON.stringify(data))}catch(e){_postData.push(param)}var sep=\"^\";function strify(str){if(!str)str=\"\";str+=sep;return str}var _body;var _array=[];try{_body=_postData;if(typeof _body!==\"object\"){console.error(\"\\u6570\\u636e\\u683c\\u5f0f\\u51fa\\u9519\");handlAjaxProcess(true);\nreturn}var str=\"\";for(var i=0;i\u003C_body.length;i++){var tem=_body[i];str+=strify(tem.ev||tem[\"ev\\u007f\"]).slice(0,21);if(!tem.data)tem.data={};str+=strify(tem.data.cy).slice(0,11);str+=strify(tem.data.v);str+=strify(tem.data.tp).slice(0,21);if(!tem.data.ids||typeof tem.data.ids!==\"object\")tem.data.ids=[];str+=strify(tem.data.ids.join(\",\")).slice(0,501);str+=strify(tem.data.cnt);str+=strify(tem.data.cg).slice(0,501);str+=strify(tem.dt);str+=strify(tem.wid).slice(0,31);if(!tem.raw)tem.raw={};str+=strify(tem.raw.lp).slice(0,\n1001);str+=strify(tem.raw.ref).slice(0,1001);str+=strify(tem.raw.sw);str+=strify(tem.raw.sh);str+=strify(tem.raw.aid).slice(0,101);str+=strify(decodeURI(tem.raw.agent)).slice(0,501);str+=strify(tem.raw.ga).slice(0,31);str+=strify(tem.raw.sid).slice(0,51);str+=strify(tem.raw.lid).slice(0,21);str+=strify(tem.raw.gid).slice(0,31);str+=strify(tem.raw.uid).slice(0,51);str+=strify(tem.raw.guid).slice(0,61);str+=strify(tem.data.order).slice(0,51);str+=strify(tem.raw.eventid).slice(0,71);str+=strify(tem.raw.dtitle).slice(0,\n501);str+=strify(tem.payway).slice(0,31);str+=strify(tem.paramOk).slice(0,21);str+=tem.raw.lang.slice(0,6);_array[i]={sd:str,st:date-tem.dt,ct:date};str=\"\"}return _array}catch(e){console.log(e);var emptyArr=[];emptyArr.push(param);return hanldeDataSplice(emptyArr)}}function handlAjaxProcess(bol){handleParam[\"requestResult\"]=bol;var handleAjax=handleAjaxResult(handleParam);handleAjax.start()}function getCookie(param){var storeParamData=[];storeParamData.push(param);if(!\/_WEDATA=\\[(.*)\\]\/g.test(document.cookie))return storeParamData;\nvar cookieParam=document.cookie.split(\"; \");for(var i=0;i\u003CcookieParam.length;i++){var cItem=cookieParam[i];if(\/_WEDATA=\/g.test(cItem)){var ckdata;try{ckdata=storeParamData.concat(JSON.parse(cItem.split(\"\\x3d\").slice(1).join(\"\\x3d\")))}catch(e){ckdata=storeParamData}return ckdata}}}function getStorageData(param){var storage=window.localStorage;var storageData=storage.getItem(\"_eData\");var storeParamData=getCookie(param);if(!storageData)return storeParamData;var sData,_sData;try{sData=JSON.parse(storageData);\nfor(var i=0;i\u003CstoreParamData.length;i++)if(RegExp(\" \"+storeParamData[i][\"raw\"][\"eventid\"]+\" \").test(\" \"+sData.map(function(item){return item[\"raw\"][\"eventid\"]}).join(\" \")+\" \")){storeParamData.splice(i,1);i--}_sData=sData.concat(storeParamData)}catch(e){_sData=storeParamData}return _sData}}function handleAjaxResult(obj){var Strage=function(obj){this.rootname=obj.rootname;this.requestResult=obj.requestResult;this.param=obj.param;this.postData=obj.postData;this.filterData=obj.filterData};Strage.prototype.start=\nfunction(){this.rootname?this.requestResult?this.handleLocalSuccess():this.handleLocalFailue():this.requestResult?this.handleCookieSuccess():this.handleCookieFailue()};Strage.prototype.handleLocalFailue=function(){this.handleClearCookie();var storage=window.localStorage;for(var i=0;i\u003Cthis.postData.length;i++){this.postData[i][\"status\"]=2;this.postData[i][\"statusTime\"]=date}var _self=this;try{storage.setItem(\"_eData\",JSON.stringify(_self.postData))}catch(e){storage.setItem(\"_eData\",JSON.stringify([]))}return;\nvar storeParamData=[];storeParamData.push(this.param);if(!storage.getItem(\"_eData\"))storage.setItem(\"_eData\",JSON.stringify(storeParamData));else{var getOriginData=JSON.parse(storage.getItem(\"_eData\"));getOriginData.push(this.param)}};Strage.prototype.handleLocalSuccess=function(){this.handleClearStorage();this.handleClearCookie()};Strage.prototype.handleCookieFailue=function(){for(var i=0;i\u003Cthis.postData.length;i++){this.postData[i][\"status\"]=2;this.postData[i][\"statusTime\"]=date}var _self=this;\ntry{document.cookie=\"_WEDATA\\x3d\"+JSON.stringify(_self.postData)+\"; path\\x3d\/; domain\\x3d\"+_domain}catch(e){document.cookie=\"_WEDATA\\x3d\"+JSON.stringify([])+\"; path\\x3d\/; domain\\x3d\"+_domain}return};Strage.prototype.handleCookieSuccess=function(){this.handleClearCookie()};Strage.prototype.handleClearCookie=function(){if(!\/_WEDATA=\/g.test(document.cookie))return;var _eData=this.handleSuccessData();if(_eData.length\u003E0){document.cookie=\"_WEDATA\\x3d\"+JSON.stringify(_eData)+\"; path\\x3d\/; domain\\x3d\"+_domain;\nreturn}exp.setTime(exp.getTime()-60*1E3);document.cookie=\"_WEDATA\\x3d[]; path\\x3d\/; domain\\x3d\"+_domain;document.cookie=\"_WEDATA\\x3d[]; expires\\x3d\"+exp.toUTCString()+\"; path\\x3d\/; domain\\x3d\"+_domain};Strage.prototype.handleClearStorage=function(){var storage=window.localStorage;var _eData=this.handleSuccessData();_eData.length==0\u0026\u0026storage.getItem(\"_eData\")\u0026\u0026storage.removeItem(\"_eData\");_eData.length\u003E0\u0026\u0026storage.setItem(\"_eData\",JSON.stringify(_eData))};Strage.prototype.handleSuccessData=function(){var _pData;\ntry{_pData=JSON.parse(JSON.stringify(this.postData)),_fData=this.filterData;for(var i=0;i\u003C_pData.length;i++)if(RegExp(\" \"+_pData[i][\"raw\"][\"eventid\"]+\" \").test(\" \"+_fData.map(function(item){return item[\"raw\"][\"eventid\"]}).join(\" \")+\" \")){_pData.splice(i,1);i--}}catch(e){_pData=[]}return _pData};return new Strage(obj)}function handleEventData(page){RegExp(\"_innerid\\x3d\").test(location.href)\u0026\u0026handleInnerPage();function handleInnerPage(){if(!location.search.slice(1))return;var searchParam=location.search.slice(1).split(\"\\x26\");\nvar inneridParam=searchParam.filter(function(item,index){return item.split(\"\\x3d\")[0]\u0026\u0026item.split(\"\\x3d\")[0]==\"_innerid\"});var inneridArray=inneridParam[0].split(\"\\x3d\");var _data=eventData(\"InnerPage\",inneridArray[1]);inneridArray[1]\u0026\u0026ajax(_data)}var _pageviewData=eventData(\"PageView\",page);ajax(_pageviewData)}var eventData=function(){var _index=0;var _localRef=location.href;var _docRef=document.referrer;var raw={sw:_screenWidth,sh:_screenHeight,aid:akam_id,agent:encodeURI(_navigator.replace(\/;\/g,\n\"\").replace(\/\\r\\n\/g,\"\").replace(\/\"|(%22)\/g,\"\"))};try{raw[\"lp\"]=encodeURI(handleRef(_localRef))}catch(e){raw[\"lp\"]=encodeURI(_localRef).slice(0,1001).replace(\/(%20)| \/g,\"\").replace(\/\\^|(%5e)\/gi,\"+\").replace(\/(%22)|\"\/g,\"\")}try{raw[\"ref\"]=encodeURI(handleRef(_docRef))}catch(e){raw[\"ref\"]=encodeURI(_docRef).slice(0,1001).replace(\/(%20)| \/g,\"\").replace(\/\\^|(%5e)\/gi,\"+\").replace(\/(%22)|\"\/g,\"\")}function handleRef(str){if(!\/%\/g.test(str)||_index\u003E8)return str.slice(0,1001).replace(\/(%20)| \/g,\"\").replace(\/\\^|(%5e)\/gi,\n\"+\").replace(\/(%22)|\"\/g,\"\");var _str=decodeURI(str);_index++;return handleRef(_str)}function handlePayokOrderSn(){var ordersn=",["escape",["macro",27],8,16],";var searchKeys=getSearchOrderSn();function getSearchOrderSn(){var searchObj={};var result;var searchWords=location.search.slice(1);if(!searchWords)return searchObj;searchWords=searchWords.split(\"\\x26\");for(var i=0;i\u003CsearchWords.length;i++)if(result=\/^(oid|code)=(.*)$\/.exec(searchWords[i]))try{result[2]\u0026\u0026(searchObj[result[1]]=result[2].replace(\/(-.*)$\/,\n\"\"))}catch(e){}return searchObj}ordersn=ordersn?ordersn:searchKeys[\"oid\"];var returnObject={\"ordersn\":ordersn};return returnObject}try{getCookieMsg()}catch(e){}function getCookieMsg(){var ck=document.cookie.split(\"; \");for(var i=0;i\u003Cck.length;i++){var item=ck[i];if(\/^linkid=(.*)+\/.test(item))raw[\"lid\"]=item.replace(\"linkid\\x3d\",\"\");if(\/^WEBF\\-user_id=(.*)+\/.test(item))raw[\"uid\"]=item.replace(\"WEBF-user_id\\x3d\",\"\");if(\/^ZA_SESSIONID=(.*)+\/.test(item))raw[\"sid\"]=item.replace(\"ZA_SESSIONID\\x3d\",\"\");\nif(\/^_ga=(.*)+\/.test(item))raw[\"ga\"]=item.replace(\"_ga\\x3d\",\"\");if(\/^_gid=(.*)+\/.test(item))raw[\"gid\"]=item.replace(\"_gid\\x3d\",\"\")}raw[\"guid\"]=WEBF_guid;raw[\"eventid\"]=_guid_();raw[\"dtitle\"]=document.title.replace(\/^\/g,\"\").replace(\/\"|(%22)\/g,\"\");raw[\"lang\"]=currentPageLang}var events={\"PageView\":function(page){var data=page==\"goods\"?{cy:\"USD\",v:parseFloat(",["escape",["macro",64],8,16],"),tp:\"product\",ids:[\"",["escape",["macro",65],7],"\"]}:page==\"payok\"?{\"order\":handlePayokOrderSn()\u0026\u0026handlePayokOrderSn()[\"ordersn\"],\n\"v\":",["escape",["macro",3],8,16],"}:{};var contentIdsArr=[];if(page==\"payok\"){try{",["escape",["macro",0],8,16],".forEach(function(item,key){contentIdsArr.push(item.goods_sn)})}catch(e){contentIdsArr=[]}data[\"ids\"]=contentIdsArr}return{ev:\"PageView\",data:data,dt:date,wid:\"XA-1000040-2\",raw:raw,status:1,statusTime:date}},\"InnerPage\":function(id){return{ev:\"_innerid\",data:{\"_innerid\":id},dt:date,wid:\"XA-1000040-2\",raw:raw,status:1,statusTime:date}}};return function(event,goodslist){return events[event](goodslist)}}();\nhandleEventData(currentPage)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar oid=\"",["escape",["macro",27],7],"\",oa=",["escape",["macro",3],8,16],"||0,cf=(.175*oa).toFixed(2),click_id=$.cookie(\"eNP_click_id\")||\"\",pl=function(){for(var b=",["escape",["macro",0],8,16],",a=[],c=0,d=b.length;c\u003Cd;c++)a.push(b[c].goods_id);return a.join(\",\")}();\n$.ajax({url:\"\/fun\/?act\\x3dhash_hmac_for_gtm\",type:\"POST\",dataType:\"json\",data:{dataPrams:{pl:pl,oid:oid,oa:oa,cf:cf,click_id:click_id}}}).done(function(b){var a=document.createElement(\"iframe\");a.src=\"https:\/\/go.epnbest.bz\/tracking\/zaful\/?oid\\x3d\"+oid+\"\\x26oa\\x3d\"+oa+\"\\x26cf\\x3d\"+cf+\"\\x26click_id\\x3d\"+click_id+\"\\x26pl\\x3d\"+pl+\"\\x26sign\\x3d\"+b.data.sign;a.width=1;a.height=1;a.frameborder=0;document.body.appendChild(a)});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":122
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe height=\"1\" width=\"1\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\" src=\"\/\/event.2performant.com\/events\/salecheck?amount=",["escape",["macro",38],12],"\u0026amp;campaign_unique=1af7cdfe8\u0026amp;confirm=a7478fa195d09caf\u0026amp;description=",["escape",["macro",37],12],"\u0026amp;transaction_id=",["escape",["macro",27],12],"\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"d0f167d4-7362-449b-bd6a-e5ecd5e4015c\",{user_hashed_email:\"",["escape",["macro",51],7],"\"});snaptr(\"track\",\"PAGE_VIEW\",{item_category:\"\",item_ids:[]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"d0f167d4-7362-449b-bd6a-e5ecd5e4015c\",{user_hashed_email:\"",["escape",["macro",51],7],"\"});snaptr(\"track\",\"PAGE_VIEW\",{item_category:\"",["escape",["macro",100],7],"\",item_ids:[\"",["escape",["macro",65],7],"\"]});\nsnaptr(\"track\",\"VIEW_CONTENT\",{price:",["escape",["macro",64],8,16],",currency:\"USD\",item_ids:[\"",["escape",["macro",65],7],"\"],number_items:1,item_category:\"",["escape",["macro",100],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"d0f167d4-7362-449b-bd6a-e5ecd5e4015c\",{user_hashed_email:\"",["escape",["macro",51],7],"\"});snaptr(\"track\",\"PAGE_VIEW\",{item_category:\"\",item_ids:\"",["escape",["macro",41],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"d0f167d4-7362-449b-bd6a-e5ecd5e4015c\",{user_hashed_email:\"",["escape",["macro",51],7],"\"});snaptr(\"track\",\"PAGE_VIEW\",{item_category:\"",["escape",["macro",101],7],"\",item_ids:[]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"d0f167d4-7362-449b-bd6a-e5ecd5e4015c\",{user_hashed_email:\"",["escape",["macro",51],7],"\"});snaptr(\"track\",\"PAGE_VIEW\");\nsnaptr(\"track\",\"PURCHASE\",{currency:\"USD\",item_category:\"",["escape",["macro",43],7],"\",price:\"",["escape",["macro",3],7],"\",payment_info_available:1,transaction_id:\"",["escape",["macro",2],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"d0f167d4-7362-449b-bd6a-e5ecd5e4015c\",{user_hashed_email:\"",["escape",["macro",51],7],"\"});snaptr(\"track\",\"PAGE_VIEW\");\nsnaptr(\"track\",\"ADD_CART\",{currency:\"USD\",item_category:\"",["escape",["macro",39],7],"\",price:\"",["escape",["macro",102],7],"\",payment_info_available:1});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar contentIdsArr=[];try{",["escape",["macro",0],8,16],".forEach(function(a,b){contentIdsArr.push(a.goods_sn)}),fbq.push(\"track\",\"Purchase\",{currency:\"USD\",value:",["escape",["macro",3],8,16],",content_type:\"product\",content_ids:contentIdsArr,order_id:",["escape",["macro",27],8,16],"\u0026\u0026",["escape",["macro",27],8,16],".toLowerCase()})}catch(a){fbq.push(\"track\",\"Purchase\",{currency:\"USD\",value:",["escape",["macro",3],8,16],"||0,content_type:\"product\",content_ids:[],order_id:",["escape",["macro",27],8,16],"\u0026\u0026",["escape",["macro",27],8,16],".toLowerCase()})};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{_taq.push({convert_id:\"1596685075886089\",event_type:\"shopping\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":132
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"d0f167d4-7362-449b-bd6a-e5ecd5e4015c\",{user_hashed_email:\"",["escape",["macro",51],7],"\"});snaptr(\"track\",\"SIGN_UP\",{sign_up_method:\"Facebook\/Email\/Twitter\/others\"});\n$.cookie(\"is_new_regiter\",null,{expires:0,path:\"\/\",domain:COOKIESDIAMON});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"d0f167d4-7362-449b-bd6a-e5ecd5e4015c\",{user_hashed_email:\"",["escape",["macro",51],7],"\"});\nsnaptr(\"track\",\"START_CHECKOUT\",{price:",["escape",["macro",50],8,16],",currency:",["escape",["macro",104],8,16],".currency,item_ids:",["escape",["macro",41],8,16],",number_items:",["escape",["macro",48],8,16],",item_category:",["escape",["macro",49],8,16],",payment_info_available:0});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"d0f167d4-7362-449b-bd6a-e5ecd5e4015c\",{user_hashed_email:\"",["escape",["macro",51],7],"\"});snaptr(\"track\",\"SEARCH\",{search_string:\"",["escape",["macro",7],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a._tt_config=!0;window._taq=[];a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=document.location.protocol+\"\/\/s.ipstatp.com\/ad\/business\/track-log.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":137
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AppDownloadEvent\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":138
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"d0f167d4-7362-449b-bd6a-e5ecd5e4015c\",{user_hashed_email:\"",["escape",["macro",51],7],"\"});\nsnaptr(\"track\",\"ADD_CART\",{price:",["escape",["macro",64],8,16],",currency:\"USD\",item_ids:[",["escape",["macro",65],8,16],"],number_items:1,item_category:",["escape",["macro",105],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"d0f167d4-7362-449b-bd6a-e5ecd5e4015c\",{user_hashed_email:\"",["escape",["macro",51],7],"\"});\nsnaptr(\"track\",\"ADD_BILLING\",{price:",["escape",["macro",104],8,16],".totalvalue,currency:",["escape",["macro",104],8,16],".currency,item_ids:",["escape",["macro",104],8,16],".prodid,number_items:",["escape",["macro",106],8,16],",item_category:",["escape",["macro",104],8,16],".pcat.join(\",\"),payment_info_available:1});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar str='!function(e,t,n,g,i){e[i]\\x3de[i]||function(){(e[i].q\\x3de[i].q||[]).push(arguments)},n\\x3dt.createElement(\"script\"),tag\\x3dt.getElementsByTagName(\"script\")[0],n.async\\x3d1,n.src\\x3d(\"https:\"\\x3d\\x3ddocument.location.protocol?\"https:\/\/\":\"http:\/\/\")+g,tag.parentNode.insertBefore(n,tag)}(window,document,\"script\",\"assets.growingio.com\/2.1\/gio.js\",\"gio\");gio(\"init\", \"88bb4e0c99399b41\", {});gio(\"send\");';\nfunction loadingMainScript(b){var a=document.createElement(\"script\");a.type=\"text\/javascript\";try{a.appendChild(document.createTextNode(b))}catch(c){a.text=b}document.head.appendChild(a)}loadingMainScript(str);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":141
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"",["escape",["macro",107],14,3],"\" border=\"0\" width=\"0\" height=\"0\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":143
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"turn_payment"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"payok"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"yes"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"en"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"search"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"ar"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"es"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"de"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"pt"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"fr"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"goods"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"category"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":"#new_addcart, #new_addcart *"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"cart"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":"a.checkout-btn"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":"#action_add_to_fav, #action_add_to_fav span, #action_add_to_fav .icon"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"sign"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":"#js_registBtn,#js_registBtn *"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"netaffiliation"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"hasoffers"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"index"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"cj"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"commissionfactory"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"Optimise"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"ebanx"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"Afilio"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"zanox"
    },{
      "function":"_eq",
      "arg0":["macro",92],
      "arg1":"ZafulDE"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"salesmedia"
    },{
      "function":"_cn",
      "arg0":["macro",46],
      "arg1":"#pepperjam#"
    },{
      "function":"_eq",
      "arg0":["macro",85],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"undefined"
    },{
      "function":"_gt",
      "arg0":["macro",94],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"dgmax"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"new_goods"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":".js_paypal, .js_paypal \u003E img"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":"#js_upOrderBtn,#js_upOrderBtn *"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"statistics.html"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"2performant"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"flow"
    },{
      "function":"_cn",
      "arg0":["macro",99],
      "arg1":"m-flow-a-consignee"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"promotion"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"user_inc"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"channel"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"new_user_offer"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",103],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"category_search"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":"#js-topBanner, #js-appDownload .view, #js-download-app-url, .area.last .link"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":"#new_addcart,#new_addcart *"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"lomadee"
    }],
  "rules":[
    [["if",0],["add",0,20,21,31,78,96,23,24,25,26,27,28,29,30,64]],
    [["if",0,1],["add",1,22,87,95],["block",0,3,5,7,9,11,13]],
    [["if",0,2,3],["add",1,22,87],["block",3,5,7,9,11,13]],
    [["if",0,1,4],["add",2]],
    [["if",0,2,3,4],["add",2]],
    [["if",0,4],["add",3]],
    [["if",0,1,6],["add",4]],
    [["if",0,2,3,6],["add",4]],
    [["if",0,6],["add",5]],
    [["if",0,1,7],["add",6]],
    [["if",0,2,3,7],["add",6]],
    [["if",0,7],["add",7]],
    [["if",0,1,8],["add",8]],
    [["if",0,2,3,8],["add",8]],
    [["if",0,8],["add",9]],
    [["if",0,1,9],["add",10]],
    [["if",0,2,3,9],["add",10]],
    [["if",0,9],["add",11]],
    [["if",0,1,10],["add",12]],
    [["if",0,2,3,10],["add",12]],
    [["if",0,10],["add",13]],
    [["if",0,4,5],["add",14],["block",3]],
    [["if",0,5,6],["add",15],["block",5]],
    [["if",0,5,10],["add",16],["block",13]],
    [["if",0,5,7],["add",17],["block",7]],
    [["if",0,5,8],["add",18],["block",9]],
    [["if",0,5,9],["add",19],["block",11]],
    [["if",11,12],["add",32,47,70,82,92]],
    [["if",12,13],["add",33,46,70,92]],
    [["if",14,15],["add",34,77,88]],
    [["if",15,16,17],["add",35]],
    [["if",11,15,18],["add",36,77]],
    [["if",2,12],["add",37,41,42,43,49,58,70,72,73,74,75,76,77,79,85]],
    [["if",15,19,20],["add",38,77]],
    [["if",21],["add",39]],
    [["if",2,21,22],["unless",23],["add",40]],
    [["if",2,12,24],["add",44]],
    [["if",12,25],["add",45,70,81]],
    [["if",12,16],["add",48,70,86]],
    [["if",2,21,26],["add",50]],
    [["if",2,21,27,28],["unless",23],["add",51]],
    [["if",2,21,27],["unless",23,28],["add",52]],
    [["if",2,12,28,29],["unless",23],["add",53]],
    [["if",2,12,29],["unless",23,28],["add",54]],
    [["if",11,21],["add",55]],
    [["if",16,21],["add",56]],
    [["if",2,21],["add",57]],
    [["if",21,30],["add",57]],
    [["if",2,12,31],["add",59]],
    [["if",2,21,32,33],["add",60]],
    [["if",2,12,34],["unless",23],["add",61]],
    [["if",2,21,35,36,38],["unless",23,37],["add",62]],
    [["if",2,12,39],["add",63]],
    [["if",12,30,39],["add",63]],
    [["if",2,6,12],["add",65,69]],
    [["if",2,7,12],["add",66,69]],
    [["if",2,4,12],["add",67,69]],
    [["if",2,10,12],["add",68,69]],
    [["if",12,40],["add",70]],
    [["if",2,12,36],["add",71]],
    [["if",15,41],["add",77]],
    [["if",15,42],["add",77]],
    [["if",12,43],["add",79]],
    [["if",2,12,44],["add",80]],
    [["if",12,45,46],["add",81]],
    [["if",12,19],["add",81]],
    [["if",12,47],["add",81]],
    [["if",12,48],["add",81]],
    [["if",12,49],["add",81]],
    [["if",12,50],["add",81]],
    [["if",12,51],["add",83,90]],
    [["if",12],["unless",2,11,16,19,25,45,47,48],["add",84]],
    [["if",12,50,52],["add",89]],
    [["if",12,53],["add",91]],
    [["if",15,54],["add",93]],
    [["if",11,15,55],["add",94]],
    [["if",2,21,56],["add",97]],
    [["if",21,30,56],["add",97]]]
},
"runtime":[
[],[]
]};

var aa=function(a,b){function c(){}c.prototype=b.prototype;a.pe=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ae=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var g=function(a,b){this.s=a;this.Pc=b};g.prototype.bd=function(){return this.s};g.prototype.getType=g.prototype.bd;g.prototype.getData=function(){return this.Pc};g.prototype.getData=g.prototype.getData;var ba=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ca=function(){this.Z={};this.oa=!1};ca.prototype.get=function(a){return this.Z["dust."+a]};ca.prototype.set=function(a,b){!this.oa&&(this.Z["dust."+a]=b)};ca.prototype.has=function(a){return this.Z.hasOwnProperty("dust."+a)};var da=function(a){var b=[],c;for(c in a.Z)a.Z.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ca.prototype.remove=function(a){!this.oa&&delete this.Z["dust."+a]};ca.prototype.D=function(){this.oa=!0};var t=function(a){this.ca=new ca;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ba(b)?this.h[Number(b)]=a[Number(b)]:this.ca.set(b,a[b]))};t.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};t.prototype.set=function(a,b){if("length"==a){if(!ba(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else ba(a)?this.h[Number(a)]=b:this.ca.set(a,b)};
t.prototype.set=t.prototype.set;t.prototype.get=function(a){return"length"==a?this.length():ba(a)?this.h[Number(a)]:this.ca.get(a)};t.prototype.get=t.prototype.get;t.prototype.length=function(){return this.h.length};t.prototype.L=function(){for(var a=da(this.ca),b=0;b<this.h.length;b++)a.push(b+"");return new t(a)};t.prototype.getKeys=t.prototype.L;t.prototype.remove=function(a){ba(a)?delete this.h[Number(a)]:this.ca.remove(a)};t.prototype.remove=t.prototype.remove;t.prototype.pop=function(){return this.h.pop()};
t.prototype.pop=t.prototype.pop;t.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};t.prototype.push=t.prototype.push;t.prototype.shift=function(){return this.h.shift()};t.prototype.shift=t.prototype.shift;t.prototype.splice=function(a,b,c){return new t(this.h.splice.apply(this.h,arguments))};t.prototype.splice=t.prototype.splice;t.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
t.prototype.unshift=t.prototype.unshift;t.prototype.has=function(a){return ba(a)&&this.h.hasOwnProperty(a)||this.ca.has(a)};var ea=function(){function a(a,b){c[a]=b}function b(){c={}}var c={},d={add:a,reset:b,create:function(d){var e={add:a,request:function(a,b){return c[a]?c[a].apply(d,Array.prototype.slice.call(arguments,1)):!1},reset:b};e.add=e.add;e.request=e.request;e.reset=e.reset;return e}};d.add=d.add;d.reset=d.reset;return d};var fa=function(){function a(a,c){if(b[a]){if(b[a].Da+c>b[a].max)throw Error("Quota exceeded");b[a].Da+=c}}var b={},c=void 0,d=void 0,e={xd:function(a){c=a},Eb:function(){c&&a(c,1)},yd:function(a){d=a},O:function(b){d&&a(d,b)},Nd:function(a,c){b[a]=b[a]||{Da:0};b[a].max=c},ad:function(a){return b[a]&&b[a].Da||0},reset:function(){b={}},Jc:a};e.onFnConsume=e.xd;e.consumeFn=e.Eb;e.onStorageConsume=e.yd;e.consumeStorage=e.O;e.setMax=e.Nd;e.getConsumed=e.ad;e.reset=e.reset;e.consume=e.Jc;return e};var ha=function(a,b,c){this.F=a;this.T=b;this.S=c;this.h=new ca};ha.prototype.add=function(a,b){this.h.oa||(this.F.O(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};ha.prototype.add=ha.prototype.add;ha.prototype.set=function(a,b){this.h.oa||(this.S&&this.S.has(a)?this.S.set(a,b):(this.F.O(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};ha.prototype.set=ha.prototype.set;
ha.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.S?this.S.get(a):void 0};ha.prototype.get=ha.prototype.get;ha.prototype.has=function(a){return!!this.h.has(a)||!(!this.S||!this.S.has(a))};ha.prototype.has=ha.prototype.has;ha.prototype.C=function(){return this.F};ha.prototype.D=function(){this.h.D()};var ia=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ja=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1};var v=function(a,b){ca.call(this);this.Qb=a;this.Zc=b};aa(v,ca);var la=function(a,b){for(var c,d=0;d<b.length&&!(c=ka(a,b[d]),c instanceof g);d++);return c},ka=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof v))throw"Attempting to execute non-function "+b[0]+".";return c.i.apply(c,[a].concat(b.slice(1)))};v.prototype.toString=function(){return this.Qb};v.prototype.getName=function(){return this.Qb};v.prototype.getName=v.prototype.getName;v.prototype.L=function(){return new t(da(this))};
v.prototype.getKeys=v.prototype.L;v.prototype.i=function(a,b){var c,d={A:function(){return a},evaluate:function(b){var c=a;return ia(b)?ka(c,b):b},ja:function(b){return la(a,b)},C:function(){return a.C()},ee:function(){c||(c=a.T.create(d));return c}};a.C().Eb();return this.Zc.apply(d,Array.prototype.slice.call(arguments,1))};v.prototype.invoke=v.prototype.i;var x=function(){ca.call(this)};aa(x,ca);x.prototype.L=function(){return new t(da(this))};x.prototype.getKeys=x.prototype.L;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var na=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,oa=function(a){if(null==a)return String(a);var b=na.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},pa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},qa=function(a){if(!a||"object"!=oa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!pa(a,"constructor")&&!pa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||pa(a,b)},ra=function(a,b){var c=b||("array"==oa(a)?[]:{}),d;for(d in a)if(pa(a,d)){var e=a[d];"array"==oa(e)?("array"!=oa(c[d])&&(c[d]=[]),c[d]=ra(e,c[d])):qa(e)?(qa(c[d])||(c[d]={}),c[d]=ra(e,c[d])):c[d]=e}return c};var sa=function(a){if(a instanceof t){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=sa(a.get(d)));return b}if(a instanceof x){for(var e={},f=a.L(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=sa(a.get(f.get(k)));return e}return a instanceof v?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=ta(b[c]);var d=new ha(fa(),ea());return sa(a.i.apply(a,[d].concat(b)))}:a},ta=function(a){if(ia(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=ta(a[c]));return new t(b)}if(qa(a)){var d=
new x,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,ta(a[e]));return d}if("function"===typeof a)return new v("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=sa(this.evaluate(c[d]));return ta(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var ua={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.A(),e=this.evaluate(b);if(!(e instanceof t))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.C().O(a.length+f.length);return new v(a,function(){return function(a){for(var b=new ha(d.F,d.T,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new t(c));var q=la(b,f);if(q instanceof g)return"return"===q.s?q.getData():q}}())},list:function(a){var b=this.C();b.O(arguments.length);for(var c=new t,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.O(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.C(),c=new x,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.O(h);c.set(e,f)}return c},undefined:function(){}};var y=function(){this.F=fa();this.T=ea();this.la=new ha(this.F,this.T)};y.prototype.N=function(a,b){var c=new v(a,b);c.D();this.la.set(a,c)};y.prototype.addInstruction=y.prototype.N;y.prototype.Db=function(a,b){ua.hasOwnProperty(a)&&this.N(b||a,ua[a])};y.prototype.addNativeInstruction=y.prototype.Db;y.prototype.C=function(){return this.F};y.prototype.getQuota=y.prototype.C;y.prototype.Ka=function(){this.F=fa();this.la.F=this.F};y.prototype.resetQuota=y.prototype.Ka;
y.prototype.Jd=function(){this.T=ea();this.la.T=this.T};y.prototype.resetPermissions=y.prototype.Jd;y.prototype.I=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.ib(c)};y.prototype.execute=y.prototype.I;y.prototype.ib=function(a){for(var b,c=0;c<arguments.length;c++){var d=ka(this.la,arguments[c]);b=d instanceof g||d instanceof v||d instanceof t||d instanceof x||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
y.prototype.run=y.prototype.ib;y.prototype.D=function(){this.la.D()};y.prototype.makeImmutable=y.prototype.D;var va=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var xa={Qd:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof t)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new t(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new t(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new t(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=va(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new t(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=va(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.i(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var z={Ob:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},ya="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),za=new g("break"),Aa=new g("continue");z.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};z.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
z.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof t))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=ja(ya,b))return ta(a[b].apply(a,va(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof t){if(a.has(b)){var d=
a.get(b);if(d instanceof v){var e=va(c);e.unshift(this.A());return d.i.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=ja(xa.Qd,b))return e=va(c),e.unshift(this.A()),xa[b].apply(a,e)}if(a instanceof v||a instanceof x){if(a.has(b)){d=a.get(b);if(d instanceof v)return e=va(c),e.unshift(this.A()),d.i.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof v?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,va(c))}throw"TypeError: Object has no '"+
b+"' property.";};z.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.A();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};z["break"]=function(){return za};z["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};z["continue"]=function(){return Aa};
z.Qc=function(a,b,c){var d=new t;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[z.Ob.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.A().set(a,this.evaluate(f))};z.Tc=function(a,b){return this.evaluate(a)/this.evaluate(b)};z.Vc=function(a,b){return this.evaluate(a)==this.evaluate(b)};z.Xc=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
z.$c=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.A();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.ja(c);if(f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}else if(b instanceof x||b instanceof t||b instanceof v){var h=b.L(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.ja(c),f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}};z.get=function(a){return this.A().get(this.evaluate(a))};
z.Mb=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof x||a instanceof t||a instanceof v?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ba(b)&&(c=a[b]));return c};z.cd=function(a,b){return this.evaluate(a)>this.evaluate(b)};z.dd=function(a,b){return this.evaluate(a)>=this.evaluate(b)};z.hd=function(a,b){return this.evaluate(a)===this.evaluate(b)};z.jd=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
z["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.ja(d);if(e instanceof g)return e};z.qd=function(a,b){return this.evaluate(a)<this.evaluate(b)};z.rd=function(a,b){return this.evaluate(a)<=this.evaluate(b)};z.sd=function(a,b){return this.evaluate(a)%this.evaluate(b)};z.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};z.td=function(a){return-this.evaluate(a)};z.ud=function(a){return!this.evaluate(a)};
z.vd=function(a,b){return this.evaluate(a)!=this.evaluate(b)};z["null"]=function(){return null};z.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};z.Wb=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};z.Xb=function(a){return this.evaluate(a)};z.quote=function(a){return Array.prototype.slice.apply(arguments)};z["return"]=function(a){return new g("return",this.evaluate(a))};
z.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof v||a instanceof t||a instanceof x)&&a.set(b,c);return c};z.Pd=function(a,b){return this.evaluate(a)-this.evaluate(b)};
z["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!ia(b)||!ia(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.s;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.s||"continue"==d.s)))return d};
z.Rd=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};z["typeof"]=function(a){a=this.evaluate(a);return a instanceof v?"function":typeof a};z.undefined=function(){};z["var"]=function(a){for(var b=this.A(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
z["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.ja(f),e instanceof g)){if("break"==e.s)return;if("return"==e.s)return e}for(;this.evaluate(a);){e=this.ja(f);if(e instanceof g){if("break"==e.s)break;if("return"==e.s)return e}this.evaluate(b)}};var Ca=function(){this.Nb=!1;this.P=new y;Ba(this);this.Nb=!0};Ca.prototype.od=function(){return this.Nb};Ca.prototype.isInitialized=Ca.prototype.od;Ca.prototype.I=function(a){return this.P.ib(a)};Ca.prototype.execute=Ca.prototype.I;Ca.prototype.D=function(){this.P.D()};Ca.prototype.makeImmutable=Ca.prototype.D;
var Ba=function(a){function b(a,b){e.P.Db(a,String(b))}function c(a,b){e.P.N(String(d[a]),b)}var d=z.Ob,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",z.add);c("AND",z.and);c("APPLY",z.apply);c("ASSIGN",z.assign);c("BREAK",z["break"]);c("CASE",z["case"]);c("CONTINUE",z["continue"]);c("DEFAULT",z["case"]);c("DEFN",z.Qc);c("DIVIDE",z.Tc);c("EQUALS",z.Vc);c("EXPRESSION_LIST",z.Xc);c("FOR_IN",z.$c);c("GET",z.get);c("GET_INDEX",
z.Mb);c("GET_PROPERTY",z.Mb);c("GREATER_THAN",z.cd);c("GREATER_THAN_EQUALS",z.dd);c("IDENTITY_EQUALS",z.hd);c("IDENTITY_NOT_EQUALS",z.jd);c("IF",z["if"]);c("LESS_THAN",z.qd);c("LESS_THAN_EQUALS",z.rd);c("MODULUS",z.sd);c("MULTIPLY",z.multiply);c("NEGATE",z.td);c("NOT",z.ud);c("NOT_EQUALS",z.vd);c("NULL",z["null"]);c("OR",z.or);c("POST_DECREMENT",z.Wb);c("POST_INCREMENT",z.Wb);c("PRE_DECREMENT",z.Xb);c("PRE_INCREMENT",z.Xb);c("QUOTE",z.quote);c("RETURN",z["return"]);c("SET_PROPERTY",z.setProperty);
c("SUBTRACT",z.Pd);c("SWITCH",z["switch"]);c("TERNARY",z.Rd);c("TYPEOF",z["typeof"]);c("VAR",z["var"]);c("WHILE",z["while"])};Ca.prototype.N=function(a,b){this.P.N(a,b)};Ca.prototype.addInstruction=Ca.prototype.N;Ca.prototype.C=function(){return this.P.C()};Ca.prototype.getQuota=Ca.prototype.C;Ca.prototype.Ka=function(){this.P.Ka()};Ca.prototype.resetQuota=Ca.prototype.Ka;var Da=function(){this.Ha={}};Da.prototype.get=function(a){return this.Ha.hasOwnProperty(a)?this.Ha[a]:void 0};Da.prototype.add=function(a,b){if(this.Ha.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new v(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.D();this.Ha[a]=c};Da.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var B=window,C=document,Ea=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Fa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},F=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Fa(d,b);c&&(d.onerror=c);var e=C.getElementsByTagName("script")[0]||C.body||C.head;e.parentNode.insertBefore(d,e);return d},Ga=function(a,b){var c=C.createElement("iframe");
c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||C.body||C.head;d.parentNode.insertBefore(c,d);Fa(c,b);void 0!==a&&(c.src=a);return c},J=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},Ha=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ia=function(a,b,c){a.removeEventListener?a.removeEventListener(b,
c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},O=function(a){B.setTimeout(a,0)},Ka=function(a){var b=C.getElementById(a);if(b&&Ja(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ja(document.all[a][c],"id")==a)return document.all[a][c];return b},Ja=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},La=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},
Ma=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c};var Na=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(decodeURIComponent(e[0]).replace(/\+/g," ")==b)return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g," ")}},P=function(a,b,c,d,e){var f,h=a.protocol||B.location.protocol;h=h.replace(":","").toLowerCase();b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=h;break;case "host":f=(a.hostname||B.location.hostname).split(":")[0].toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;
case "port":f=String(1*(a.hostname?a.port:B.location.port)||("http"==h?80:"https"==h?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=ja(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Na(f,e));break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Oa=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},R=function(a){var b=
C.createElement("a");a&&(b.href=a);return b};var Ra=function(){this.Vb=new Ca;var a=new Da;a.addAll(Pa());Qa(this,function(b){return a.get(b)})},Pa=function(){return{callInWindow:Sa,getCurrentUrl:Ta,getInWindow:Ua,getReferrer:Va,getUrlComponent:Wa,getUrlFragment:Xa,isPlainObject:Ya,loadIframe:Za,loadJavaScript:ab,removeUrlFragment:bb,replaceAll:cb,sendTrackingBeacon:db,setInWindow:eb}};Ra.prototype.I=function(a){return this.Vb.I(a)};Ra.prototype.execute=Ra.prototype.I;var Qa=function(a,b){a.Vb.N("require",b)};
function Sa(a,b){for(var c=a.split("."),d=B,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==oa(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(sa(arguments[f]));e.apply(d,h)}}function Ta(){return B.location.href}function Ua(a,b,c){for(var d=a.split("."),e=B,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=sa(b));return ta(e[d[f]])}function Va(){return C.referrer}
function Wa(a,b,c,d,e){var f;if(d&&d instanceof t){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return P(R(a),b,c,f,e)}function Xa(a){return P(R(a),"fragment")}function Ya(a){return a instanceof x}function Za(a,b){var c=this.A();Ga(a,function(){b instanceof v&&b.i(c)})}var hb={};
function ab(a,b,c,d){var e=this.A(),f=function(){b instanceof v&&b.i(e)},h=function(){c instanceof v&&c.i(e)};d?hb[d]?(hb[d].onSuccess.push(f),hb[d].onFailure.push(h)):(hb[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=hb[d].onSuccess,b=0;b<a.length;b++)O(a[b]);a.push=function(a){O(a);return 0}},h=function(){for(var a=hb[d].onFailure,b=0;b<a.length;b++)O(a[b]);hb[d]=null},F(a,f,h)):F(a,f,h)}function bb(a){return Oa(R(a))}function cb(a,b,c){return a.replace(new RegExp(b,"g"),c)}
function db(a,b,c){var d=this.A();J(a,function(){b instanceof v&&b.i(d)},function(){c instanceof v&&c.i(d)})}function eb(a,b,c){for(var d=a.split("."),e=B,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=sa(b),!0):!1};
var ib=[],jb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},kb=function(a){return jb[a]},lb=/[\x00\x22\x26\x27\x3c\x3e]/g;ib[3]=function(a){return String(a).replace(lb,kb)};var pb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,qb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},rb=function(a){return qb[a]};ib[7]=function(a){return String(a).replace(pb,rb)};
ib[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(pb,rb)+"'"}};var yb=/['()]/g,zb=function(a){return"%"+a.charCodeAt(0).toString(16)};ib[12]=function(a){var b=
encodeURIComponent(String(a));yb.lastIndex=0;return yb.test(b)?b.replace(yb,zb):b};var Ab=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Bb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Cb=function(a){return Bb[a]};var Db=
/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;ib[14]=function(a){var b=String(a);return Db.test(b)?b.replace(Ab,Cb):"#zSoyz"};ib[16]=function(a){return a};var Eb,Fb=[],Gb=[],Hb=[],Ib=[],Jb=[],Kb={},Lb,Mb,Nb,Sb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";if(Kb[b]){var c={},d;for(d in a)a.hasOwnProperty(d)&&0===d.indexOf("vtp_")&&(c[d]=a[d]);return Kb[b](c)}var e=new x,f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&e.set(f.substr(4),ta(a[f]));var h=Eb([b,e]);h instanceof g&&"return"===h.s&&(h=h.getData());return sa(h)},Ub=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=
Tb(a[e],b,c));return d},Tb=function(a,b,c){if(ia(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Tb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Fb[f];if(!h||b(h))return;c[f]=!0;try{var k=Ub(h,b,c);d=Sb(k);Nb&&(d=Nb.Lc(d,k))}catch(w){d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Tb(a[l],b,c)]=Tb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=Tb(a[n],b,c);Mb&&(m=m||p===
Mb.xa);d.push(p)}return Mb&&m?Mb.Mc(d):d.join("");case "escape":d=Tb(a[1],b,c);if(Mb&&ia(a[1])&&"macro"===a[1][0]&&Mb.pd(a))return Mb.Bd(d);d=String(d);for(var q=2;q<a.length;q++)ib[a[q]]&&(d=ib[a[q]](d));return d;case "tag":var u=a[1];if(!Ib[u])throw Error("Unable to resolve tag reference "+u+".");return d={Jb:a[2],index:u};case "zb":var r=Vb({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c);a[4]&&(r=!r);return r;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");
}}return a},Vb=function(a,b,c){try{return Lb(Ub(a,b,c))}catch(d){JSON.stringify(a)}return null};var Wb=null,Zb=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Wb=Xb(a);for(var e=0;e<Gb.length;e++){var f=Gb[e],h=Yb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<Ib.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},Yb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Wb(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=Wb(e[c]);if(null===d)return null;if(d)return!1}return!0};
var Xb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Vb(Hb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var bc={},cc=null;bc.m="GTM-NV86G4W";var dc=null,ec="//www.googletagmanager.com/a?id="+bc.m+"&cv=146",fc={},gc={};var hc=function(){},ic=function(a){return"function"==typeof a},jc=function(a){return"string"==oa(a)},kc=function(a){return"number"==oa(a)&&!isNaN(a)},lc=function(a){return Math.round(Number(a))||0},mc=function(a){return"false"==String(a).toLowerCase()?!1:!!a},nc=function(a){var b=[];if(ia(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},oc=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},pc=function(a,b){if(!kc(a)||!kc(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+
a)},qc=function(){this.prefix="gtm.";this.values={}};qc.prototype.set=function(a,b){this.values[this.prefix+a]=b};qc.prototype.get=function(a){return this.values[this.prefix+a]};qc.prototype.contains=function(a){return void 0!==this.get(a)};var rc=function(){var a=cc.sequence||0;cc.sequence=a+1;return a},sc=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},tc=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}};var T=function(){var a=function(a){return{toString:function(){return a}}};return{sb:a("convert_case_to"),tb:a("convert_false_to"),ub:a("convert_null_to"),vb:a("convert_true_to"),wb:a("convert_undefined_to"),G:a("function"),cc:a("instance_name"),ec:a("live_only"),fc:a("malware_disabled"),gc:a("once_per_event"),yb:a("once_per_load"),zb:a("setup_tags"),hc:a("tag_id"),Ab:a("teardown_tags")}}();var uc=new qc,vc={},yc={set:function(a,b){ra(wc(a,b),vc)},get:function(a){return xc(a,2)},reset:function(){uc=new qc;vc={}}},xc=function(a,b){return 2!=b?uc.get(a):zc(a)},zc=function(a,b,c){var d=a.split(".");return Bc(d)},Bc=function(a){for(var b=vc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Fc=function(a,b){uc.set(a,b);ra(wc(a,b),vc)},wc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Gc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Hc={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ic={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Jc=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var Kc=function(a){var b=xc("gtm.whitelist");var c=b&&Jc(nc(b),Hc),d=xc("gtm.blacklist")||
xc("tagTypeBlacklist")||[];Gc.test(B.location&&B.location.hostname)&&(d=nc(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Jc(nc(d),Ic),f={};return function(h){var k=h&&h[T.G];if(!k||"string"!=typeof k)return!0;k=k.replace(/_/g,"");if(void 0!==f[k])return f[k];var l=gc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ja(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
ja(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var u;if(!(u=0<=ja(e,k)))a:{for(var r=l||[],w=new qc,E=0;E<e.length;E++)w.set(e[E],!0);for(E=0;E<r.length;E++)if(w.get(r[E])){u=!0;break a}u=!1}q=u}return f[k]=!m||q}};var Lc={Lc:function(a,b){b[T.sb]&&"string"===typeof a&&(a=1==b[T.sb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(T.ub)&&null===a&&(a=b[T.ub]);b.hasOwnProperty(T.wb)&&void 0===a&&(a=b[T.wb]);b.hasOwnProperty(T.vb)&&!0===a&&(a=b[T.vb]);b.hasOwnProperty(T.tb)&&!1===a&&(a=b[T.tb]);return a}};var Mc=function(a){var b=cc.zones;!b&&a&&(b=cc.zones=a());return b},Nc={active:!0,isWhitelisted:function(){return!0}};var Oc=!1,Pc=0,Qc=[];function Rc(a){if(!Oc){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Oc=!0;for(var e=0;e<Qc.length;e++)O(Qc[e])}Qc.push=function(){for(var a=0;a<arguments.length;a++)O(arguments[a]);return 0}}}function Sc(){if(!Oc&&140>Pc){Pc++;try{C.documentElement.doScroll("left"),Rc()}catch(a){B.setTimeout(Sc,50)}}}var Tc=function(a){Oc?a():Qc.push(a)};var Uc=!1,Vc=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]};var Wc=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(!B[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}return B[b]},Xc=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Vc();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ad=function(){return"&tc="+Ib.filter(function(a){return a}).length},bd="0.005000">Math.random(),cd="",dd=function(){cd=[ec,"&v=3&t=t","&pid="+pc(),"&rv=4s"].join("")},ed={},fd="",gd=void 0,hd={},id={},jd=void 0,kd=2,ld=1E3,md=function(){kd=2},nd=function(){var a=gd;return void 0===a?"":[cd,ed[a]?"":"&es=1",hd[a],ad(),fd,"&z=0"].join("")},od=function(){jd&&(B.clearTimeout(jd),jd=void 0);void 0===gd||ed[gd]&&!fd||(id[gd]||0>=kd--||0>=ld--?id[gd]=!0:(J(nd()),ed[gd]=
!0,fd=""))},pd=function(a,b,c){if(bd&&!id[a]&&b){a!==gd&&(od(),gd=a);var d=c+String(b[T.G]||"").replace(/_/g,"");fd=fd?fd+"."+d:"&tr="+d;jd||(jd=B.setTimeout(od,500));2022<=nd().length&&od()}};function qd(a,b,c,d,e,f){var h=Ib[a],k=rd(a,b,c,d,e,f);if(!k)return null;var l=Tb(h[T.zb],f.R,[]);if(l&&l.length){var m=l[0];k=qd(m.index,b,k,1===m.Jb?e:k,e,f)}return k}
function rd(a,b,c,d,e,f){function h(){var b=Ub(k,f.R);b.vtp_gtmOnSuccess=function(){pd(f.id,Ib[a],"5");c()};b.vtp_gtmOnFailure=function(){pd(f.id,Ib[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[T.fc])d();else{pd(f.id,k,"1");try{Sb(b)}catch(E){pd(f.id,
k,"7");e()}}}var k=Ib[a];if(f.R(k))return null;var l=Tb(k[T.Ab],f.R,[]);if(l&&l.length){var m=l[0],n=qd(m.index,b,c,d,e,f);if(!n)return null;c=n;d=2===m.Jb?e:n}if(k[T.yb]||k[T.gc]){var p=k[T.yb]?Jb:b,q=c,u=d;if(!p[a]){h=tc(h);var r=sd(a,p,h);c=r.M;d=r.aa}return function(){p[a](q,u)}}return h}function sd(a,b,c){var d=[],e=[];b[a]=td(d,e,c);return{M:function(){b[a]=ud;for(var c=0;c<d.length;c++)d[c]()},aa:function(){b[a]=vd;for(var c=0;c<e.length;c++)e[c]()}}}
function td(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ud(a){a()}function vd(a,b){b()};function wd(a){var b=0,c=0,d=!1;return{add:function(){c++;return tc(function(){b++;d&&b>=c&&a()})},sc:function(){d=!0;b>=c&&a()}}}function xd(a,b){if(!bd)return;var c=function(a){var d=b.R(Ib[a])?"3":"4",f=Tb(Ib[a][T.zb],b.R,[]);f&&f.length&&c(f[0].index);pd(b.id,Ib[a],d);var h=Tb(Ib[a][T.Ab],b.R,[]);h&&h.length&&c(h[0].index)};c(a);}var yd=!1;var zd=function(a,b){var c={};c[T.G]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);Ib.push(c);return Ib.length-1};var Ad=/[A-Z]+/,Bd=/\s/,Cd=function(a){if(jc(a)&&(a=a.trim(),!Bd.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ad.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],na:d}}}}};var Dd=null,Ed={},Fd={},Gd;function Hd(){Dd=Dd||!cc.gtagRegistered;cc.gtagRegistered=!0;return Dd}var Id=function(a,b){var c={event:a};b&&(c.eventModel=ra(b,void 0),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function Jd(a){if(void 0===Fd[a.id]){var b;if("UA"==a.prefix)b=zd("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=zd("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=zd("gtagfl",{targetId:a.id});else return;if(!Gd){var c={name:"send_to",dataLayerVersion:2},d={};d[T.G]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);Fb.push(d);Gd=["macro",Fb.length-1]}var f={arg0:Gd,arg1:a.id,ignore_case:!1};f[T.G]="_lc";Hb.push(f);var h={"if":[Hb.length-1],add:[b]};h["if"]&&(h.add||h.block)&&
Gb.push(h);Fd[a.id]=b}}
var Sd={event:function(a){var b=a[1];if(jc(b)&&!(3<a.length)){var c;if(2<a.length){if(!qa(a[2]))return;c=a[2]}var d=Id(b,c);return d}},set:function(a){var b;2==a.length&&qa(a[1])?
b=ra(a[1],void 0):3==a.length&&jc(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=ra(b,void 0),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},Rd=tc(function(){});var Td=!1,Ud=[];function Vd(){if(!Td){Td=!0;for(var a=0;a<Ud.length;a++)O(Ud[a])}};var Wd=[],Xd=!1,Yd=function(a){var b=a.eventCallback,c=tc(function(){ic(b)&&O(function(){b(bc.m)})}),d=a.eventTimeout;d&&B.setTimeout(c,Number(d));return c},Zd=function(){for(var a=!1;!Xd&&0<Wd.length;){Xd=!0;delete vc.eventModel;var b=Wd.shift();if(ic(b))try{b.call(yc)}catch(Kd){}else if(ia(b)){var c=b;if(jc(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=xc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(Kd){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{var l=b;if(l.length&&jc(l[0])){var m=Sd[l[0]];if(m){b=m(l);break a}}b=void 0}if(!b){Xd=!1;continue}}var n;var p=void 0,q=b,u=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(u&&Fc(p,void 0),Fc(p,q[p]));var r=q.event;if(r){var w=q["gtm.uniqueEventId"];w||(w=rc(),q["gtm.uniqueEventId"]=w,Fc("gtm.uniqueEventId",w));dc=r;var E;var Q,A,M=q,D=M.event,N=M["gtm.uniqueEventId"],I=cc.zones;A=I?I.checkState(bc.m,N):Nc;if(A.active){var K=Yd(M);c:{var G=
A.isWhitelisted;if("gtm.js"==D){if(yd){Q=!1;break c}yd=!0}var L=N,H=D;if(bd&&!(0>=ld)&&gd!==L){od();gd=L;fd="";var S=hd,Z=L,ma,wa=H;ma=0===wa.indexOf("gtm.")?encodeURIComponent(wa):"*";S[Z]="&e="+ma+"&eid="+L;jd||(jd=B.setTimeout(od,500))}var fb=Kc(G),$a={id:N,name:D,Fc:K||hc,R:fb,La:Zb(fb)};for(var Cc,Pb=$a,Nd=wd(Pb.Fc),kf=[],Qb=[],gb=0;gb<Ib.length;gb++)if(Pb.La[gb]){var lf=Ib[gb];var ub=Nd.add();try{var Od=qd(gb,kf,ub,ub,ub,Pb);Od?Qb.push(Od):(xd(gb,Pb),ub())}catch(Kd){ub()}}Nd.sc();for(var Dc=0;Dc<Qb.length;Dc++)Qb[Dc]();Cc=0<Qb.length;if("gtm.js"===D||"gtm.sync"===D)d:{}if(Cc){for(var mf={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Rb=0;Rb<$a.La.length;Rb++)if($a.La[Rb]){var Qd=Ib[Rb];if(Qd&&!mf[Qd[T.G]]){Q=!0;break c}}Q=!1}else Q=Cc}E=Q?!0:!1}else E=!1;dc=null;n=E}else n=!1;a=n||a}Xd=!1}return!a},$d=function(){var a=Zd();try{var b=B["dataLayer"].hide;if(b&&void 0!==b[bc.m]&&b.end){b[bc.m]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&
!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},ae=function(){var a=Ea("dataLayer",[]),b=Ea("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Qc.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ud.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(Wd.push.apply(Wd,b);300<this.length;)this.shift();return Zd()};Wd.push.apply(Wd,a.slice(0));
O($d)};var be={};be.xa=new String("undefined");be.Pa={};var ce=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===be.xa?b:a[d]);return c.join("")}};ce.prototype.toString=function(){return this.resolve("undefined")};ce.prototype.valueOf=ce.prototype.toString;be.Mc=function(a){return new ce(a)};var de={};be.Hd=function(a,b){var c=rc();de[c]=[a,b];return c};be.Fb=function(a){var b=a?0:1;return function(a){var c=de[a];if(c&&"function"===typeof c[b])c[b]();de[a]=void 0}};
be.pd=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};be.Bd=function(a){if(a===be.xa)return a;var b=rc();be.Pa[b]=a;return'google_tag_manager["'+bc.m+'"].macro('+b+")"};be.ic=ce;var ee=new qc,fe=function(a,b){function c(a){var b=R(a),c=P(b,"protocol"),d=P(b,"host",!0),e=P(b,"port"),f=P(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function ge(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(r){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=ja(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,u=ee.get(q);u||(u=new RegExp(c,p),ee.set(q,u));n=u.test(b)}catch(r){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return fe(b,c)}return!1};function he(a,b,c,d){return(d||"https:"==B.location.protocol?a:b)+c}function ie(a,b){for(var c=b||(a instanceof t?new t:new x),d=a.L(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof t?(c.get(f)instanceof t||c.set(f,new t),ie(h,c.get(f))):h instanceof x?(c.get(f)instanceof x||c.set(f,new x),ie(h,c.get(f))):c.set(f,h)}}return c}function je(){return bc.m}function ke(){return(new Date).getTime()}function le(a,b){return ta(xc(a,b||2))}function me(){return dc}
function ne(a){return Ma('<a href="'+a+'"></a>')[0].href}function oe(a){return lc(sa(a))}function pe(a){return null===a?"null":void 0===a?"undefined":a.toString()}function qe(a,b){return pc(a,b)}function re(a,b,c){if(!(a instanceof t))return null;for(var d=new x,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof x&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var se=function(){var a=new Da;a.addAll(Pa());a.addAll({buildSafeUrl:he,decodeHtmlUrl:ne,copy:ie,generateUniqueNumber:rc,getContainerId:je,getCurrentTime:ke,getDataLayerValue:le,getEventName:me,makeInteger:oe,makeString:pe,randomInteger:qe,tableToMap:re});return function(b){return a.get(b)}};var te=new Ra,ue=function(){var a=data.runtime||[];Eb=function(a){return te.I(a)};Lb=ge;Qa(te,se());for(var b=0;b<a.length;b++){var c=a[b];if(!ia(c)||3>c.length){if(0==c.length)continue;break}te.I(c)}};var ve=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var we=function(a){return encodeURIComponent(a)},xe=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=P(R(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var U=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},ye=function(a,b){ra(a,b)},ze=function(a){return lc(a)},Ae=function(a,b){return ja(a,b)};var Be=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ja(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},Ce=function(a){cc.hasOwnProperty("autoEventsSettings")||(cc.autoEventsSettings={});var b=cc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},De=function(a,b,c,d){var e=Ce(a),f=sc(e,b,d);e[b]=
c(f)},Ee=function(a,b,c){var d=Ce(a);return sc(d,b,c)};var Fe=/(^|\.)doubleclick\.net$/i,Ge=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,He=function(a,b,c){for(var d=String(b||C.cookie).split(";"),e=[],f=0;f<d.length;f++){var h=d[f].split("="),k=oc(h[0]);if(k&&k==a){var l=oc(h.slice(1).join("="));l&&!1!==c&&(l=decodeURIComponent(l));e.push(l)}}return e},Ie=function(a,b,c,d,e,f){f&&(b=encodeURIComponent(b));var h=a+"="+b+"; ";c&&(h+="path="+c+"; ");e&&(h+="expires="+e.toGMTString()+"; ");var k,l;if("auto"==d){var m=P(B.location,"host",!0).split(".");if(4==
m.length&&/^[0-9]*$/.exec(m[3]))l=["none"];else{for(var n=[],p=m.length-2;0<=p;p--)n.push(m.slice(p).join("."));n.push("none");l=n}}else l=[d||"none"];k=l;for(var q=C.cookie,u=0;u<k.length;u++){var r=h,w=k[u],E=c;if(Fe.test(B.location.hostname)||"/"==E&&Ge.test(w))break;"none"!=k[u]&&(r+="domain="+k[u]+";");C.cookie=r;if(q!=C.cookie||0<=ja(He(a),b))break}};var Je=!1;if(C.querySelectorAll)try{var Ke=C.querySelectorAll(":root");Ke&&1==Ke.length&&Ke[0]==C.documentElement&&(Je=!0)}catch(a){}var Le=Je;var Me=function(a){for(var b=[],c=C.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}var h=[];if(!b||0==b.length)return h;for(var k=0;k<b.length;k++){var l=b[k].split(".");3==l.length&&"GCL"==l[0]&&l[1]&&h.push(l[2])}return h};var Ne=/^\w+$/,Oe=/^[\w-]+$/,Pe=/^\d+\.fls\.doubleclick\.net$/;function Qe(a){return a&&"string"==typeof a&&a.match(Ne)?a:"_gcl"}function Re(a){if(a){if("string"==typeof a){var b=Qe(a);return{ia:b,ha:b}}if(a&&"object"==typeof a)return{ia:Qe(a.dc),ha:Qe(a.aw)}}return{ia:"_gcl",ha:"_gcl"}}function Se(a){var b=R(B.location.href),c=P(b,"host",!1);if(c&&c.match(Pe)){var d=P(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Te(a){return a.filter(function(a){return Oe.test(a)})}var Ve=function(a){var b=Se("gclaw");if(b)return b.split(".");var c=Re(a);if("_gcl"==c.ha){var d=Ue();if(d&&(null==d.K||"aw.ds"==d.K))return[d.ka]}return Te(Me(c.ha+"_aw"))},We=function(a){var b=Se("gcldc");if(b)return b.split(".");var c=Re(a);if("_gcl"==c.ia){var d=Ue();if(d&&("ds"==d.K||"aw.ds"==d.K))return[d.ka]}return Te(Me(c.ia+"_dc"))};
function Ue(){var a=R(B.location.href),b=P(a,"query",!1,void 0,"gclid"),c=P(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=P(a,"fragment");b=b||Na(d,"gclid");c=c||Na(d,"gclsrc")}return void 0!==b&&b.match(Oe)?{ka:b,K:c}:null}
var Xe=function(a,b,c){var d=Re(a);c=c||"auto";b=b||"/";var e=Ue();if(null!=e){var f=(new Date).getTime(),h=new Date(f+7776E6),k=["GCL",Math.round(f/1E3),e.ka].join(".");e.K&&"aw.ds"!=e.K||Ie(d.ha+"_aw",k,b,c,h,!0);"aw.ds"!=e.K&&"ds"!=e.K||Ie(d.ia+"_dc",k,b,c,h,!0)}},Ye=function(){var a=Se("gac");if(a)return decodeURIComponent(a);for(var b=[],c=C.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({lb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=
0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].lb]||(h[b[k].lb]=[]),h[b[k].lb].push({timestamp:l[1],ka:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],u=0;u<q.length;u++)p.push(q[u].ka);p=Te(p);p.length&&m.push(n+":"+p.join(","))}return m.join(";")};var Ze;a:{Ze="G"}var $e={"":"n",UA:"u",AW:"a",DC:"d",GTM:Ze},af=function(a){var b=bc.m.split("-"),c=b[0].toUpperCase();return($e[c]||"i")+"4s"+(a&&"GTM"===c?b[1]:"")};var ff=!!B.MutationObserver,gf=void 0,hf=function(a){if(!gf){var b=function(){var a=C.body;if(a)if(ff)(new MutationObserver(function(){for(var a=0;a<gf.length;a++)O(gf[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;Ha(a,"DOMNodeInserted",function(){b||(b=!0,O(function(){b=!1;for(var a=0;a<gf.length;a++)O(gf[a])}))})}};gf=[];C.body?b():O(b)}gf.push(a)};var wf="www.googletagmanager.com/gtm.js";
var xf=wf,yf=function(a,b,c,d){Ha(a,b,c,d)},zf=function(a,b){return B.setTimeout(a,b)},Af=function(a,b,c){F(a,b,c)},Bf={},Cf=function(a,b,c){var d=Bf[a];if(void 0===d){var e=function(a,b){return function(){a.status=b;for(var c=2==b?a.ac:a.Ib,d=0;d<c.length;d++)B.setTimeout(c[d],0)}};d={status:1,ac:[],Ib:[],Ld:void 0};d.ne=F(a,e(d,2),e(d,3));Bf[a]=d}0===d.status&&(d.Ld(),d.status=2);2===d.status?b&&b():3===d.status?c&&c():1===d.status&&(b&&d.ac.push(b),c&&d.Ib.push(c))},Df=function(){return B.location.href},
Ef=function(a){return P(R(a),"fragment")},V=function(a,b){return xc(a,b||2)},Ff=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return B["dataLayer"].push(a)},Gf=function(a,b){B[a]=b},W=function(a,b,c){b&&(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},Hf=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},X=function(a,b,c,d){var e=!d&&"http:"==
B.location.protocol;e&&(e=2!==If());return(e?b:a)+c};
var Jf=function(a){var b=0;return b},Kf=function(a){},Lf=function(a){var b=!1;return b},Mf=function(a,b){var c;a:{if(a&&
ia(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},Nf=function(a,b,c,d){De(a,b,c,d)},Of=function(a,b,c){return Ee(a,b,c)},Pf=function(a){return!!Ee(a,"init",!1)},Qf=function(a){Ce(a).init=!0};
var If=function(){var a=xf;a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=C.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};
var Tf=function(a){var b=xf+"?id="+encodeURIComponent(a)+"&l=dataLayer",c=X("https://","http://",b);F(c,void 0,void 0)};var Vf=function(a,b,c){a instanceof be.ic&&(a=a.resolve(be.Hd(b,c)),b=hc);return{Xa:a,M:b}};var Y={a:{}};

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.b="jsm";Y.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.b="sp";Y.__sp.g=!0})(function(a){var b=a.vtp_gtmOnFailure;Af("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=W("google_trackConversion");if(ic(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=U(a.vtp_customParams,"key","value"));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_remarketing_only:!0,
onload_callback:a.vtp_gtmOnSuccess,google_gtm:af(void 0)})||b()}else b()},b)})}();
Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0})(function(){return dc})}();Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.b="f";Y.__f.g=!0})(function(a){var b=V("gtm.referrer",1)||C.referrer,c;if(b){var d;if(a.vtp_component&&"URL"!=a.vtp_component){var e=R(String(b));d=P(e,a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey)}else d=Oa(R(String(b)));c=d}else c=String(b);return c})}();
Y.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=Be(b);d.event="gtm.click";Ff(d)}}(function(a){Y.__cl=a;Y.__cl.b="cl";Y.__cl.g=!0})(function(b){if(!Pf("cl")){var c=W("document");Ha(c,"click",a,!0);Qf("cl");var d=Ee("cl","legacyTeardown",void 0);d&&d()}O(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.b="j";Y.__j.g=!0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.b="k";Y.__k.g=!0})(function(a){var b=V("gtm.cookie",1);return He(a.vtp_name,b,!!a.vtp_decodeCookie)[0]})}();
Y.a.u=["google"],function(){(function(a){Y.__u=a;Y.__u.b="u";Y.__u.g=!0})(function(a){var b;b=(b=a.vtp_customUrlSource?a.vtp_customUrlSource:V("gtm.url",1))||Df();var c=a.vtp_component,d;if(c&&"URL"!=c){var e=R(String(b));d=P(e,c,"HOST"==c?a.vtp_stripWww:void 0,"PATH"==c?a.vtp_defaultPages:void 0,"QUERY"==c?a.vtp_queryKey:void 0)}else d=Oa(R(String(b)));return d})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0})(function(a){var b=V(a.vtp_name.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==b?b:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a;(function(a){Y.__ua=a;Y.__ua.b="ua";Y.__ua.g=!0})(function(b){var c={},d={},e={},f={},h={};if(b.vtp_gaSettings){var k=b.vtp_gaSettings;ye(U(k.vtp_fieldsToSet,"fieldName","value"),d);ye(U(k.vtp_contentGroup,"index","group"),e);ye(U(k.vtp_dimension,"index","dimension"),f);ye(U(k.vtp_metric,"index","metric"),h);b.vtp_gaSettings=null;k.vtp_fieldsToSet=void 0;k.vtp_contentGroup=void 0;k.vtp_dimension=void 0;k.vtp_metric=void 0;var l=ra(k,void 0);b=ra(b,l)}ye(U(b.vtp_fieldsToSet,
"fieldName","value"),d);ye(U(b.vtp_contentGroup,"index","group"),e);ye(U(b.vtp_dimension,"index","dimension"),f);ye(U(b.vtp_metric,"index","metric"),h);var m=Wc(b.vtp_functionName),n="",p="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(p=b.vtp_trackerName,n=p+"."):(p="gtm"+rc(),n=p+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,
cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},u={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},r=function(a){var b=[].slice.call(arguments,0);b[0]=n+b[0];m.apply(window,b)},w=function(a,b){return void 0===b?b:a(b)},E=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&r("set",a+c,
b[c])},Q=function(){var a=function(a,b,c){if(!qa(b))return!1;var d;d=sc(Object(b),c,[]);for(var e=0;d&&e<d.length;e++)r(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=V("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!qa(c))return;c=Object(c);var e=sc(d,"currencyCode",c.currencyCode);void 0!==e&&r("set","&cu",e);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",c[c.promoClick?
"promoClick":"promoView"],"promotions")&&c.promoClick){r("ec:setAction","promo_click",c.promoClick.actionField);return}for(var f="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<f.length;h++){var k=c[f[h]];if(k){a("ec:addProduct",k,"products");r("ec:setAction",f[h],k.actionField);break}}},A=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&q[e]||!c&&void 0===q[e])){var f=u[e]?
mc(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},M={name:p};A(d,M,!0);m("create",b.vtp_trackingId||c.trackingId,M);r("set","&gtm",af(!0));(function(a,c){void 0!==b[c]&&r("set",a,b[c])})("nonInteraction","vtp_nonInteraction");E("contentGroup",e);E("dimension",f);E("metric",h);var D={};A(d,D,!1)&&r("set",D);var N;
b.vtp_enableLinkId&&r("require","linkid","linkid.js");r("set","hitCallback",function(){var a=d&&d.hitCallback;ic(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){}else if("TRACK_SOCIAL"==b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==
b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==b.vtp_trackType){}else{b.vtp_enableEcommerce&&(r("require","ec","ec.js"),Q());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");r("require","displayfeatures",void 0,{cookieName:ma})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&(ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),r("require","adfeatures",{cookieName:ma}));N?r("send","pageview",N):r("send","pageview");}if(!a){var wa=
b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&(wa="internal/"+wa);a=!0;Cf(X("https:","http:","//www.google-analytics.com/"+wa,d&&d.forceSSL),function(){var a=Vc();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}})}();Y.a.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.b="cid";Y.__cid.g=!0})(function(){return bc.m})}();
Y.a.gclidw=["google"],function(){(function(a){Y.__gclidw=a;Y.__gclidw.b="gclidw";Y.__gclidw.g=!0})(function(a){O(a.vtp_gtmOnSuccess);var b,c,d;a.vtp_enableCookieOverrides&&(d=a.vtp_cookiePrefix,b=a.vtp_path,c=a.vtp_domain);Xe(d,b,c)})}();
Y.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=W("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(b){return function(){d();a=!1;var c=Bf[b];c&&3==c.status&&(Bf[b]=void 0)}},f=function(){return function(){d();b={push:c};}};(function(a){Y.__awct=a;Y.__awct.b="awct";Y.__awct.g=!0})(function(c){var d={google_conversion_domain:"",
google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:af(void 0)};c.vtp_currencyCode&&(d.google_conversion_currency=c.vtp_currencyCode);c.vtp_orderId&&(d.google_conversion_order_id=c.vtp_orderId);c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?
(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,Cf("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))})}();



Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.b="paused";Y.__paused.g=!0})(function(a){O(a.vtp_gtmOnFailure)})}();Y.a.hid=["google"],function(){(function(a){Y.__hid=a;Y.__hid.b="hid";Y.__hid.g=!0})(function(){return be.xa})}();
Y.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,Fa(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){O(h)}}};var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,f=Vf(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Xa,k=f.M;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Ma(h),k,e)()}else zf(function(){c(d)},200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0}();




var Wf={macro:function(a){if(be.Pa.hasOwnProperty(a))return be.Pa[a]}};Wf.dataLayer=yc;Wf.onHtmlSuccess=be.Fb(!0);Wf.onHtmlFailure=be.Fb(!1);Wf.callback=function(a){fc.hasOwnProperty(a)&&ic(fc[a])&&fc[a]();delete fc[a]};Wf.yc=function(){cc[bc.m]=Wf;gc=Y.a;Mb=Mb||be;Nb=Lc};
Wf.ld=function(){cc=B.google_tag_manager=B.google_tag_manager||{};if(cc[bc.m]){var a=cc.zones;a&&a.unregisterChild(bc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Fb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Ib.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Hb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);Gb.push(p)}Kb=Y;ue();Wf.yc();ae();Oc=!1;Pc=0;if("interactive"==
C.readyState&&!C.createEventObject||"complete"==C.readyState)Rc();else{Ha(C,"DOMContentLoaded",Rc);Ha(C,"readystatechange",Rc);if(C.createEventObject&&C.documentElement.doScroll){var u=!0;try{u=!B.frameElement}catch(w){}u&&Sc()}Ha(B,"load",Rc)}Td=!1;"complete"===C.readyState?Vd():Ha(B,"load",Vd);a:{
if(!bd)break a;dd();kd=2;gd=void 0;hd={};ed={};jd=void 0;id={};fd="";B.setInterval(dd,864E5);B.setInterval(md,1E3);}}};Wf.ld();

})()
