
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

//==================index==============
var tdate=LastModified.substring(0,11);
var astartime = new Date(tdate+'09:15:00').getTime();
var aendtime = new Date(tdate+'12:16:00').getTime();
var pstartime = new Date(tdate+'13:00:00').getTime();
var pendtime = new Date(tdate+'16:16:00').getTime();
var gaptime=new Date().getTime()-new Date(LastModified).getTime();
var week = new Date(LastModified).getDay();
var hday=LastModified.split('/').join('').substring(4,8);

function syncIndex(dataObj) {
	if(dataObj=='exit'){
		setTimeout("get_hq_data()", 1000 * 10);
	}
	else{
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
				setTimeout("get_hq_data()", 1000 * 10);
			}
		});
	}
}
var iId;
var dataObj = {type: 1}; //1 头条,2 股票,3 基金,4 黄金,5 美股,6 港股,7 期指,8 期货,9 外汇,10 债券
function setType(sType) {
    dataObj.type = sType;
    syncIndex(dataObj);
}
function get_hq_data() {
	var oDate=new Date()
	var devicetime=oDate.getTime();
	var servtime=devicetime-gaptime;
	if(week==0 || week==6){
		syncIndex('exit');
		return false;
	}
	if(hday=='0501' || hday=='0602' || hday=='1001' || hday=='1002'){
		syncIndex('exit');
		return false;
	}
	if((servtime-astartime>0 && servtime-aendtime<0) || (servtime-pstartime>0 && servtime-pendtime<0)){
		syncIndex(dataObj);
	}
	else{
		syncIndex('exit');
		return false;
	}
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
        url: "ajax/ajax_news_s1.php",
        beforeSend: function() {
            $('.funds_news_list').empty().append('<div class="onload"><img src="../res.m.hexun.com/m/images/onload.gif" alt="" /><br/>正在加载...</div>');
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
                $('.click_more').attr('style', 'display:none');
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
        url: "ajax/ajax_news_s1.php",
        data: {
            'id': id,
            'pn': pn,
            'pc': pc
        },
        success: function(data) {
            $('#news_list').append(data);
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
    //alert('id='+id+"\npn="+pn+"\npc="+pc);
    if (pn < getPageCount) {
        ajax_news_more(id, pn, pc);
    } else {
        $('.click_more').attr('style', 'display:none');
    }
});


$(document).ready(function() {
    if (id == '100234721') {
       //$('.click_more').hide();
        setType(1);
    } else if (id == '100228599') {
        setType(2);
    } else if (id == '101710857') {
        setType(4);
    } else if (id == '100235854') {
        setType(6);
    }
});

$(function(){
	$('.hq_nav li:nth-child(-n+9)').css('display','block');
	add();
	$('.nav_more').live('click',function(){
		$('.hq_nav li:gt(8)').css('display','block');
		$(this).removeClass('nav_more').removeClass('checked').addClass('nav_fold').find('a').html('收起').css('background-position','right top');
		if($(window).width()>640){
			$('.nav_fold a').css('margin-left','16px');
		}else{
			$('.nav_fold a').css('margin-left','10px');
		}
	})
	$('.nav_fold').live('click',function(){
		$('.hq_nav li:gt(8)').css('display','none');
		$('.hq_nav li:last-child').css('display','block');
		$(this).removeClass('nav_fold').addClass('nav_more').find('a').html('更多').css('background-position','right bottom');
		add();
	})
	
	function add(){
		$('.hq_nav li:gt(8)').each(function(){
			if($(this).attr('class')=='checked'){
				$('.nav_more').addClass('checked');
				$('.nav_more a').css('background-position','98% 92%');
				if($(window).width()>640){
					$('.nav_more a').css('margin-left','6px');
				}else{
					$('.nav_more a').css('margin-left','2px');
				}
			}
		})
	}
})