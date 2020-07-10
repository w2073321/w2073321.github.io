
//=======================================add2home

function isIOS() {
    return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
}
function isSafari() {
    return /(Safari)/i.test(navigator.userAgent);
}
//alert(isIOS());
//alert(isSafari());
//document.writeln(navigator.userAgent);
if (isIOS() && isSafari()) {
    window.addToHomeConfig = {
        touchIcon: true,
        animationIn: 'fade',
        expire: 30 * 24 * 60 * 60,
        message: '<strong>添加手机和讯到桌面</strong>点击 %icon <br>选择“添加至主屏幕”'
    };
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.media = 'screen';
    link.href = '../res.m.hexun.com/m/css/add2home.css';
    document.getElementsByTagName('head')[0].appendChild(link);
    var script = document.createElement('script');
    script.src = '../res.m.hexun.com/m/js/add2home.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}

//==========================index

//function syncIndex(dataObj) {
//    var parameters = {
//        type: 'GET',
//        dataType: "html", //返回json格式的数据
//        url: 'ajax/syncindex.php',
//        data: dataObj, //发送到服务器的数据
//        success: function(data) {
//            if (data !== null && data !== "") {
//                $(".hq_tit").html(data);
//            }
//        }
//    };
//    $.ajax(parameters);
//}
//
//var iId;
//var dataObj = {type: 1}; //1 头条,2 股票,3 基金,4 黄金,5 美股,6 港股,7 期指,8 期货,9 外汇,10 债券
//function setType(sType) {
//    dataObj.type = sType;
//    syncIndex(dataObj);
//    window.clearInterval(iId);
//    iId = window.setInterval("syncIndex (dataObj)", 1000 * 10);
//}

function syncIndex(dataObj) {
    $.ajax({
        type: 'GET',
        dataType: "html", //返回json格式的数据
        url: 'ajax/syncindex.php',
        data: dataObj, //发送到服务器的数据
        success: function(data) {
            if (data !== null && data !== "") {
                $(".hq_tit").html(data);
            }
        },
        complete: function(XHR, TS) {
            setTimeout("get_hq_data()",1000*10);
        }
    });
}

var iId;
var dataObj = {type: 1}; //1 头条,2 股票,3 基金,4 黄金,5 美股,6 港股,7 期指,8 期货,9 外汇,10 债券
function setType(sType) {
    dataObj.type = sType;
    syncIndex(dataObj);
    //window.clearInterval(iId);
    //iId = window.setInterval("syncIndex (dataObj)", 1000 * 5);
}
function get_hq_data() {
    syncIndex(dataObj);
}

//=================================news
//var id = $('#id').html();
var pn = $('#pn').html();
var pc = $('#pc').html();
function ajax_news(id, pn, pc) {
    $('#mwx1').removeClass();
    $('#mwx1').addClass("funds_news_list");
    $.ajax({
        type: "GET",
        dataType: "html",
        url: "ajax/ajax_news.php",
        beforeSend: function() {
            $('.funds_news_list').empty().append('<div class="onload">正在加载</div>');
        },
        data: {
            'id': id,
            'pn': pn,
            'pc': pc
        },
        success: function(data) {
            $('.funds_news_list').empty().append('<ul class="hx_funds ft28">' + data + '</ul>');
            if (data.length > 0) {
                if (id != 100234721) {
                    $('.click_more').attr('style', 'display:block');
                }
            } else {
                $('.click_more').css('style', 'display:none');
            }
        }
    });
}


function ajax_news_more(id, pn, pc) {
    $('#mwx1').removeClass();
    $('#mwx1').addClass("funds_news_list");
    var getPageCount = 10;
    $.ajax({
        type: "GET",
        dataType: "html",
        url: "ajax/ajax_news.php",
        data: {
            'id': id,
            'pn': pn,
            'pc': pc
        },
        success: function(data) {
            $('.hx_funds').append(data);
            if (pn < getPageCount) {
                if (data.length > 0) {
                    $('.click_more').css('display', 'block');
                } else {
                    $('.click_more').css('display', 'none');
                }
            } else {
                $('.click_more').css('display', 'none');
            }
        }
    });
}

$('.click_more').live("click", function() {
    var id = $('.checked').attr("data-sort");
    var pn = parseInt($('#pn').html()) + 1;
    $('#pn').html(pn);
    var pc = $('#pc').html();
    var getPageCount = 11;
    if (pn < getPageCount) {
        ajax_news_more(id, pn, pc);
    } else {
        $('.click_more').attr('style', 'display:none');
    }
});
$(document).ready(function() {
    if (id == '100234721') {
        setType(1);
    } else if (id == '100000000') {
//setType(0);
    } else if (id == '100228599') {
        setType(2);
    } else if (id == '101767368') {
//setType(3);
    } else if (id == '101710857') {
        setType(4);
    } else if (id == '100235854') {
        setType(6);
    } else {
//setType(0);
    }

    if (id == '6' || id == '7' || id == '8' || id == '000000000') {
// ajax_stock_list(id);
    } else {
        ajax_news(id, pn, pc);
    }
});
