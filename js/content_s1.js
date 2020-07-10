/*
 * imgload
 */
window.onload = function() {
    var oBjt = document.getElementsByTagName('object')[0];
    var aImg = oBjt.getElementsByTagName('img');
    var arr = [];
    var arr1 = [];
	var iUrl = '';
     for (var i = 0; i < aImg.length; i++) {
        if (aImg[i].getAttribute('original') !=null && aImg[i].getAttribute('original').indexOf("_240x180") >= 0) {
            iUrl = aImg[i].getAttribute('original');
			arr.push(iUrl);
			arr1.push(iUrl.split('_240x180').join(''));
        } else{
			aImg[i].style.width='auto';
		    aImg[i].style.height='auto';
			aImg[i].style.border='0';
			iUrl = '../../../res.m.hexun.com/m/images/nofind.png';
			arr.push(iUrl);
			arr1.push(iUrl);
		}
    }
    loadImage();
    window.onscroll = loadImage;
    function loadImage() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = 0; i < aImg.length; i++) {
            if (getTop(aImg[i]) < scrollTop + document.documentElement.clientHeight && !aImg[i].isload) {
                aImg[i].src = arr[i];
                aImg[i].style.opacity = '0';
                move(aImg[i], {
                    opacity: 100
                });
                aImg[i].isload = true;
            }
        }
    }
    for (var i = 0; i < aImg.length; i++) {
        aImg[i].index = i;
        aImg[i].onclick = function() {
			
            if (this.src == arr[this.index]) {
                this.src = arr1[this.index];
            }else {
                this.src = arr[this.index];
            } 
        }
    }
    function getTop(obj) {
        var iTop = 0;
        while (obj) {
            iTop += obj.offsetTop;
            obj = obj.offsetParent;
        }
        return iTop;
    }
    function move(obj, json, fn) {
        clearInterval(obj.iTimer);
        var iCur = iSpeed = 0;
        obj.iTimer = setInterval(function() {
            var b = true;
            for (var attr in json) {
                if (attr == 'opacity') {
                    iCur = Math.round(css(obj, attr) * 100);
                } else {
                    iCur = parseInt(css(obj, attr));
                }

                iSpeed = (json[attr] - iCur) / 8;

                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

                if (iCur != json[attr]) {
                    b = false;
                    if (attr == 'opacity') {
                        obj.style.opacity = (iCur + iSpeed) / 100;
                        obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
                    } else {
                        obj.style[attr] = iCur + iSpeed + 'px';
                    }
                }
            }
            if (b) {
                clearInterval(obj.iTimer);
                fn && fn.call(obj);
            }
        }, 30);
    }
//获取计算后样式
    function css(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, false)[attr];
        }
    }
}

/*
 * share
 */
function hxshare_send(type) {
//    var hxs_url = "<{$news_host}>/share.php?";
//    var hxs_url = hxs_url + 'type=' + type + '&from_url=<{$url}>&title=<{$title}>';
//    //window.open(hxs_url);
    var hxs_url = news_host + '/share.php?type=' + type + '&from_url=' + url + '&title=' + title + '';
    window.location.href = hxs_url;
}

/*
 * set
 */
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/";
}

function getCookie(c_name, re_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return re_name;
}

function a_news() {
    var style = $('.news_nav').attr('style');
    if (style == 'display: none;') {
        $('.news_nav').attr('style', 'display: block;');
    } else if (style == 'display: block;') {
        $('.news_nav').attr('style', 'display: none;');
    }
}

function init_content() {
    var rizi = getCookie('rizi', 'from_day');
    var ziti = getCookie('ziti', 'c_ft28');
    $("#content").removeClass();
    $("#content").addClass(rizi);
    $("#content object").removeClass();
    $("#content object").addClass(ziti);
}

function init_rn_color() {
    var rizi = getCookie('rizi', 'from_day');
    if (rizi == 'from_dark') {
       // $(".rn_list").css("color", "#cecdcd");
    } else if (rizi == 'from_day') {
        $(".rn_list").css("color", "");
    }
}

function set_size(f) {
    setCookie('ziti', f, 3600);
    $("#content object").removeClass();
    $("#content object").addClass(f);
}
function fn_time() {
    var fn_time = $('#content').attr('class');
    if (fn_time == 'from_day') {
        setCookie('rizi', 'from_dark', 3600);
        $("#content").removeClass();
        $("#content").addClass('from_dark');

        //$(".rn_list").css("color", "#cecdcd");
        //alert($("#news_rel_list li").siblings('a'));
    } else if (fn_time == 'from_dark') {
        setCookie('rizi', 'from_day', 3600);
        $("#content").removeClass();
        $("#content").addClass('from_day');
        $(".rn_list").css("color", "");
    }
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
$(function() {
    $(".banner b").click(function() {
        $(".banner").css("display", "none");
    })
})

/*
 * 评论
 */
$(document).ready(function() {
    init_content();
    init_rn_color();

    $('#commentcount').on("click", function() {
        //if(channelid != '125780307')
        if (channelid == '125780307' && commentcount == 0) {
        } else {
            $.ajax({
                type: "GET",
                url: "http://kd.tool.hexun.com/interface/GetUserStatus?Callback=?",
                dataType: "jsonp",
                jsonp: 'jsonp_callback',
                success: function(data) {
                    if (data['code'] == 1) {//已登录
                        //alert(data['msg']);
                        window.location.href = commenturl;
                    } else {//未登录
                        //alert(data['msg']);
                        if (commentcount) {
                            window.location.href = commenturl;
                        } else {
                            window.location.href = '../../../reg.hexun.com/RegWap2012/login.aspx@gourl=' + ref_commenturl;
                        }
                    }
                }
            });
        }
    });
});

