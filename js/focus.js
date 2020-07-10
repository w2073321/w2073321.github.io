(function () {
    $(function () {
		if($('.j_ptotos_swiper img').length>=2){
			function e(u) {
				var r = $("#" + u + " .swiper-container");
				if (r.length > 0) {
					var t = "",
						n = 0,
						p = 0,
						o = null,
						s = null;
					var q = r.swiper({
						pagination: "#" + u + " .pagination",
						loop: true,
						speed: 600,
						autoplay: 3000,
						keyboardControl: true,
						mousewheelControl: true,
						paginationClickable: true,
					   
					});
					o = r.find("img.img");
					n = o.length;
					p = q.activeIndex;
					s = o.eq(p - 1);
				}
			}
			function k() {
				var p = $(".j_ptotos_swiper"),
					n = p.length;
				if (n == 0) {
					return false
				}
				var o, q = "";
				for (o = 0; o < n; o++) {
					q = "j_photos_swiper_" + o;
					p.eq(o).attr("id", q);
					e(q)
				}
			}
			setTimeout(function () {
				k();
			}, 300);
		}
		else{
			$('.j_ptotos_swiper img').css('width','320px');
		}
    })
})();


(function(){ var id = "hx_m_ap_1094"; var imgurl = "../itv.hexun.com/lbi-html/ly/2013/2014neiguang/0527/800.jpg"; var html = ''; var slot = document.getElementById(id); if(slot == null ){ document.write(html); }else{ slot.innerHTML = html; } })(); 