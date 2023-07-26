var UT = UT || {};

/* @group easing */

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing, {
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/* @end */

/* @group Image Preloader */

UT.imagePreloader = function() {
	var _this = this;
	_this.cache = {};

	_this.load = function(src, callback) {
		var cacheImage = document.createElement('img');
		cacheImage.src = src;
		if(cacheImage.complete && callback && typeof(callback) == "function") {
			callback();
			return cacheImage;
		}
		if(callback && typeof(callback) == "function") {
			cacheImage.onload = callback();
		}
		_this.cache[src] = cacheImage;
		return cacheImage;
	};

	_this.loaded = function(src, callback) {
		if(_this.cache[src]) {
			return true;
		} else {
			var cacheImage = _this.load(src, callback);
			if(cacheImage.complete) {
				return true;
			}
		}
		return false;
	};

	var argsLen = arguments.length;

	if(argsLen == 2 && typeof(arguments[0]) == "string" && typeof(arguments[1]) == "function") {
		_this.load(arguments[0], arguments[1]);
		return;
	}

	for (var i = argsLen; i--;) {
		if(typeof(arguments[i]) == "string")
			_this.load(arguments[i]);
	}

};

/* @end */

/* @group Carousel */

UT.carousel = function(scope, options) {
	var carousel = this,
		o = $.extend({}, UT.carousel.defaults, options);

	carousel.scope = $(scope);
	carousel.viewpane = $(o.viewpane, scope);
	carousel.slider = $(o.slider, scope);
	carousel.slides = $(o.slides, scope);
	carousel.prev = $(o.prev, scope);
	carousel.next = $(o.next, scope);
	carousel.pages = $([]);
	carousel.animating = false;

	function init() {

		var count = carousel.slides.length % o.slidesPerPane;
		if(count != 0) {
			count = o.slidesPerPane - count;
			for(var i = 0; i < count; i++) {
				carousel.slider.append("<li class='blank' />");
			}
		}

		if(carousel.slides.length <= o.slidesPerPane) {
			carousel.scope.addClass('off');
			carousel.prev.remove();
			carousel.next.remove();
			return;
		}

		while($(o.slides, carousel.slider).length) {
			page = $(o.page);
			carousel.slider.find(o.slides+':lt('+o.slidesPerPane+')').appendTo(page);
			page.appendTo(carousel.viewpane);
			carousel.pages = carousel.pages.add(page);
		}

		carousel.slider.remove();
		carousel.current = carousel.pages.first().addClass('current');

		carousel.scope.bind('next', function() {
			carousel.advance(1);
		});

		carousel.scope.bind('prev', function() {
			carousel.advance(-1);
		});

		carousel.next.bind('click', function(e) {
			e.preventDefault();
			carousel.scope.trigger('next');
		});

		carousel.prev.bind('click', function(e) {
			e.preventDefault();
			carousel.scope.trigger('prev');
		});

	};

	carousel.advance = function(direction) {
		if(!carousel.animating) {
			carousel.animating = true;
			var delta = direction*100,
				nextPos = carousel.current.prevAll().length + direction;

			if(nextPos >= carousel.pages.length) {
				next = carousel.pages.first();
			} else if(nextPos < 0) {
				next = carousel.pages.last();
			} else {
				next = carousel.pages.eq(nextPos);
			}

			next.addClass('next');

			next.css('left', delta + '%');
			carousel.current.add(next).animate({
				left: '-='+delta+'%'
			}, 'slow', 'easeInOutQuart', function() {
				carousel.animating = false;
				carousel.current.removeClass('current');
				carousel.current = next.addClass('current');
				carousel.viewpane.find('.next').removeClass('next');
			});


		}
	};


	init();

};

UT.carousel.defaults = {
	slidesPerPane: 3,
	viewpane: '.view-pane',
	slider: '.view-pane ul',
	slides: 'li',
	page: '<ul class="page"></ul>',
	prev: '.prev',
	next: '.next'
};

/* @end */

/* @group Accordion */

UT.accordion = function(scope) {
	return $(scope).each(function() {
		var $this = $(this);
		$this.children().children('a').bind('click', function(e) {
			e.preventDefault();
			$(this).parent().find('ul').slideToggle(200, 'easeInOutQuart', function() {
				$(this).parent().toggleClass('active');
			});
		});
	});
};

/* @end */

/* @group Slideshow */

UT.featureSlideshow = function(scope, slides, pagination, prev, next) {

	var s = this;
	s.scope = $(scope);

	s.showSlide = function(id, dir) {
		var staged = getSlide(id);

		if(!dir) {
			dir = 1;
		}

		if(!staged.hasClass('active')) {
			setActivePage(id);

			staged.addClass('staged').css({
				opacity: 0
			}).show().animate({
				opacity: 1,
				left: '0'
			}, 500, 'swing', function() {
				setActiveSlide(id);
			});
		}

	};

	function getSlide(o) {
		if(typeof(o) === 'string' && o.indexOf('#') != 0)
			var o = '#'+o;
		return $(o, s.scope);
	}

	function getID(o) {
		return "#" + getSlide(o).attr('id');
	}

	function getPage(o) {
		return $(pagination).find('a').filter(function() {
			return $(this).attr('href') === getID(o);
		}).parent();
	}

	function setActivePage(o) {
		getPage(o)
			.addClass('active')
			.removeClass('staged')
			.siblings('.active')
			.removeClass('active');
	}

	function setActiveSlide(o) {

		getSlide(o)
			.addClass('active')
			.removeClass('staged')
			.siblings('.active')
			.removeClass('active');

		s.active = getID(o);
	}

	function isImg(src) {
		return (/([^\s]+(?=\.(jpg|jpeg|gif|png|bmp))\.\2)/i).test(src);
	};

	function paginate(dir) {
		var index = getSlide(s.active).prevAll().length + dir,
			highIndex = $(slides, scope).length - 1;

		if(index > highIndex) {
			index = 0;
		} else if(index < 0) {
			index = highIndex;
		}

		s.showSlide($(slides, scope).eq(index), dir);
	}

	// Added by FB
	slide_delay = 8000;

	s.start = function() {
		if(s.paused) {
			s.paused = false;
			s.interval = setInterval(function() {
				paginate(1);
			}, slide_delay);
			s.timer = new UT.timer('.content .header', slide_delay);
			s.timer.start();
		}
	};

	s.pause = function() {
		if(!s.paused) {
			s.paused = true;
			clearInterval(s.interval);
			s.timer.pause();
		}
	};


	function init() {

		setActiveSlide(s.scope.find(slides).first());
		setActivePage(s.scope.find(slides).first());



		$(pagination).find('li').bind({
			click: function(e) {
				e.preventDefault();
				s.showSlide($(this).find('a').attr('href'));
			}
		});

		$(scope).hover(function() {
			s.pause();
		}, function() {
			s.start();
		});

		$(prev).bind({
			click: function() {
				paginate(-1);
			}
		});

		$(next).bind({
			click: function() {
				paginate(1);
			}
		});

		s.paused = true;
		s.start();

	}

	init();

};

/* @end */

/* @group Lightbox */

UT.lightbox = function(scope, nopagination) {
	nopagination = (nopagination == null) ? false : nopagination;

	var overlay = this,
		$scope = $(scope),
		count = $scope.length;

	function createShade() {
		overlay.shade = $('<div/>', {
			'class': 'shade'
		}).appendTo('body').bind({
			click: function() {
				$(this).trigger('dismiss');
				overlay.lightbox.trigger('dismiss');
			},
			show: function() {
				$(this).fadeIn(150, function() {
					$(this).css('opacity', '.75');
				});
			},
			dismiss: function() {
				$(this).fadeOut(150);
			}
		});
	}

	function createLightbox() {
		overlay.lightbox = $('<div class="lightbox-outer"> \
				<div class="lightbox-inner"> \
					<a class="alt pager prev">Prev</a> \
					<a class="alt pager next">Next</a> \
					<a class="alt close">Close</a> \
					<div class="lightbox"> \
						<p class="caption"> \
							<span "description"></span> \
							<span class="page"></span> \
						</p> \
					</div> \
				</div> \
			</div>').appendTo('body').bind({
				show: function() {
					setTimeout(function() {
						overlay.lightbox.fadeIn('fast');
					}, 100);
					overlay.shade.trigger('show');
				},
				dismiss: function() {
					overlay.lightbox.fadeOut('fast', function() {
						$(this).css({
							'display': 'block',
							'left': '-9999px',
							'top': '-9999px'
						});
					});
					setTimeout(function() {
						overlay.shade.trigger('dismiss');
					}, 150);
				}

			});
	}

	function createLightboxNoPaginate() {
		overlay.lightbox = $('<div class="lightbox-outer"> \
				<div class="lightbox-inner"> \
					<a class="alt close">Close</a> \
					<div class="lightbox"> \
						<p class="caption"> \
							<span "description"></span> \
						</p> \
					</div> \
				</div> \
			</div>').appendTo('body').bind({
				show: function() {
					setTimeout(function() {
						overlay.lightbox.fadeIn('fast');
					}, 100);
					overlay.shade.trigger('show');
				},
				dismiss: function() {
					overlay.lightbox.fadeOut('fast', function() {
						$(this).css({
							'display': 'block',
							'left': '-9999px',
							'top': '-9999px'
						});
					});
					setTimeout(function() {
						overlay.shade.trigger('dismiss');
					}, 150);
				}

			});
	}

	function bindActions() {
		overlay.lightbox.find('.close').bind({
			click: function() {
				overlay.lightbox.trigger('dismiss');
			}
		});

		overlay.lightbox.find('.prev').bind({
			click: function() {
				paginate(-1);
			}
		});

		overlay.lightbox.find('.next').bind({
			click: function() {
				paginate(1);
			}
		});

		$(document).bind('keyup', function(e) {
			// escape
			if(e.keyCode == 27)
				$('.lightbox').trigger('dismiss');
			// left arrow
			if(e.keyCode == 37 && overlay.lightbox.is(':visible'))
				paginate(-1);
			// right arrow
			if(e.keyCode == 39 && overlay.lightbox.is(':visible'))
				paginate(1);
		});




	}

	function paginate(dir) {
		var next, i;

		if(overlay.currentIndex + dir >= count) {
			i = 0;
		} else if(overlay.currentIndex + dir < 0) {
			i = count - 1;
		} else {
			i = overlay.currentIndex+dir;
		}

		next = $($scope[i]);
		show(next.attr('href'), next.data('caption'), i, function() {
			overlay.lightbox.trigger('show');
		});
	}

	function setPosition() {
		var imgWidth = overlay.lightbox.find('img')[0].width,
			compensation = 20;

		imgSrc = overlay.lightbox.find('img')[0].src;

		maxWidth = 940;

		//alert(imgSrc);
		//alert(imgWidth);

		if(imgWidth > maxWidth) { imgWidth = maxWidth; }

		overlay.lightbox.css({
			'display': 'none',
			'left': '50%',
			'margin-left': (imgWidth + compensation) / -2,
			'top': $(window).scrollTop()
		});
	}

	function show(src, caption, index, callback) {
		var incomingImg = $('<img />', {
			load: function() {

				var img = overlay.lightbox.find('img');
				if(img.length === 0) {
					incomingImg.prependTo(overlay.lightbox.find('.lightbox'));
				} else {
					img.replaceWith(incomingImg);
				}

				overlay.lightbox.find('.caption .description').html(caption);
				overlay.lightbox.find('.caption .page').html((index + 1) + ' of ' + count);

				setPosition();

				overlay.currentIndex = index;

				if(callback && typeof(callback) === 'function')
					callback();
			}
		});

		incomingImg.attr('src', src);

	}

	function init() {

		createShade();
		if (nopagination) {
			createLightboxNoPaginate();
		} else {
			createLightbox();
		}
		bindActions();

		$(scope).each(function(i) {
			$(this).bind('click', function(e) {
				e.preventDefault();
				var $this = $(this);
				show($this.attr('href'), $this.attr('data-caption','caption'), i, function() {
					overlay.lightbox.trigger('show');
				});
			});
		});

	}

	if($(scope).length > 0)
		init();

};

/* @end */

/* @group newsfeed */

UT.newsfeed = function(scope) {

	var feed = this,
		$scope = $(scope);

	feed.advance = function(dir) {
		if (feed.animating) {
			return;
		} else {
			feed.animating = true;
		}

		var index = feed.index + dir;

		if(index > feed.highIndex) {
			index = 0;
		} else if(index < 0) {
			index = feed.highIndex;
		}

		var next = feed.slides.eq(index);

		next.css({
			top: (dir * 100) + '%',
			left: 0
		});

		$('.active', scope).add(next).animate({
			top: '-='+(dir * 100)+'%'
		}, 500, 'swing', function() {
			setActive(next);
			feed.animating = false;
		});
	};

	// Added by FB
	news_delay = 5000;

	feed.start = function() {
		feed.interval = setInterval(function() {
			feed.advance(1);
		}, news_delay);
	};

	feed.pause = function() {
		clearInterval(feed.interval);
	};


	function setActive(o) {
		feed.active = $(o, scope).addClass('active');
		feed.active.siblings('.active').removeClass('active');
		feed.index = feed.active.prevAll().length;
	}

	function init() {
		feed.slides = $scope.find('li');
		feed.highIndex = feed.slides.length - 1;

		setActive(feed.slides.first());

		$scope.find('.prev').bind({
			click: function() {
				feed.advance(-1);
			}
		});

		$scope.find('.next').bind({
			click: function() {
				feed.advance(1);
			}
		});

		$scope.hover(function() {
			feed.pause();
		}, function () {
			feed.start();
		});

		feed.start();

	};

	init();

};

/* @end */

/* @group timer */

UT.timer = function(scope, time) {

	var t = this,
		interval = time/3,
		index = 0;

	t.reset = function(bar) {
		bar.css({
			left: '-41px',
			opacity: 1
		})
	}

	t.start = function() {
		t.bars.stop().css({
			left: '-41px',
			opacity: 1
		});

		t.bars.eq(1).delay(interval+Math.random()*10);
		t.bars.eq(2).delay(2*interval+Math.random()*10);

		animate();
		t.interval = setInterval(animate, time);
	};

	t.pause = function() {
		t.bars.stop(true, true);
		t.bars.fadeOut('fast', function() {
			t.bars.remove();
		})

	};

	function animate() {

		t.bars
			.animate({ left: '0px'}, interval)
			.animate({ opacity: 0 }, interval)
			.delay(interval)
			.queue(function() {
				$(this).css({
					left: '-40px',
					opacity: 1
				});
				$(this).dequeue();
			});

	}

	function init() {

		t.timer = $('ul.timer').length > 0 ?
			$('ul.timer').html('<li><span></span></li><li><span></span></li><li><span></span></li>') :
			$('<ul class="timer"><li><span></span></li><li><span></span></li><li><span></span></li></ul>');

		if(!($.browser.msie && $.browser.version < 8))
			t.timer.prependTo(scope);

		t.bars = t.timer.find('span');


	};

	init();

};


/* @end */

/* @group per-page execution logic */

UT.pages = {


	'common': function() {
		UT.accordion('.accordion');
		UT.lightbox('.lightbox');

		// preload layout images on finalize
		$(document).bind('finalized', function() {
			UT.imagePreloader('../images/layout/bg.lightbox.png');
		});
	},

	'academic_partners': function() {
		var $form = $('.filter-form')
			_first = true;

		$form.find('select').change(function() {
			if (_first) {
				_first = false;
			} else {
				$form.submit();
			}
		});
	},


	'licensing': function() {
		UT.carousel('.callout-carousel');
	},

	'purchase': function() {
		var $tabs = $('#licensing_tabs li'),
			$submit = $('.submit');

		if (window.location.hash == '#company-form' || window.location.hash == '#personal-form') {
			$tabs.removeClass('active');
			$('a[href="'+window.location.hash+'"]').parents('li').addClass('active');
			$('.form-sect').hide();
			$(window.location.hash).show()
		}

		$('#licensing_tabs a').click(function(e) {
			e.preventDefault();
			var target = $(this).attr('href');

			window.location.hash = target;

			$tabs.toggleClass('active');
			$('.form-sect').hide();
			$(target).show();
		});

		$('#companyType').change(function() {
			var $other = $('#companyTypeOther_div');

			if ($(this).val() == 'Other') {
				$other.show()
				.find('input').removeAttr('disabled');
			} else {
				$other.hide()
				.find('input').attr('disabled', 'disabled');
			}
		});

		$('.licensing_type input[type="radio"]').change(function() {
			var $this = $(this),
				$numseats = $this.parents('div').find('#number_of_seats_div');

			if ($this.val() == 'per-seat') {
				$numseats.show();
			} else {
				$numseats.hide();
			}
		});

		$('.select-wrapper select').change(function() {
			var $this = $(this);

			$this.siblings('.select-value').html($this.val());
		});

		$('select[name="country"]').change(function() {
			var $this = $(this),
				$form = $this.parents('form');

			if ($this.val() === 'US') {
				$form.find('.us-states').show();
				$form.find('.non-us-states').hide();
			} else {
				$form.find('.non-us-states').show();
				$form.find('.us-states').hide();
			}
		});

		$submit.find('a').click(function(e) {
			e.preventDefault();
			$(this).parents('.cta').find('input[type="submit"]').click();
		});
	},
	'checkout': function() {

		$('select[name="billing_address_country"]').change(function() {
			var $this = $(this),
				$form = $this.parents('form');

			if ($this.val() === 'US') {
				$form.find('.us-states').show();
				$form.find('.non-us-states').hide();
			} else {
				$form.find('.non-us-states').show();
				$form.find('.us-states').hide();
			}
		});

		$submit = $('.submit');
		$submit.find('a').click(function(e) {
			e.preventDefault();
			$(this).parents('.cta').find('input[type="submit"]').click();
		});

		function clear_form_elements(ele) {
			$(ele).find(':input').each(function() {
				switch(this.type) {
					case 'password':
					case 'select-multiple':
					case 'select-one':
					case 'text':
					case 'textarea':
						$(this).val('');
						break;
					case 'checkbox':
					case 'radio':
						this.checked = false;
				}
			});
		}

		$('#same-address').change(function(){
			if (this.checked) {
				var shipping_address = {
					company: $('#companyName').data('company'),
					first: $('#firstNamePersonal').data('first'),
					last: $('#lastNamePersonal').data('last'),
					street: $('#address_streetPersonal').data('street'),
					street2: $('#address_street_2Personal').data('street2'),
					city: $('#address_cityPersonal').data('city'),
					state: $('#statePersonal').data('state'),
					postcode: $('#address_postcodePersonal').data('postcode'),
					country: $('#company-country').data('country')
				};
				$('#billing-info input').attr('readonly','readonly');
			} else {
				var shipping_address = {
					company: ($('#companyName').data('b-company')) ? $('#companyName').data('b-company') : $('#companyName').data('company'),
					first: ($('#firstNamePersonal').data('b-first')) ? $('#firstNamePersonal').data('b-first') : $('#firstNamePersonal').data('first'),
					last: ($('#lastNamePersonal').data('b-last')) ? $('#lastNamePersonal').data('b-last') : $('#lastNamePersonal').data('last'),
					street: ($('#address_streetPersonal').data('b-street')) ? $('#address_streetPersonal').data('b-street') : $('#address_streetPersonal').data('street'),
					street2: ($('#address_street_2Personal').data('b-street2')) ? $('#address_street_2Personal').data('b-street2') : $('#address_street_2Personal').data('street2'),
					city: ($('#address_cityPersonal').data('b-city')) ? $('#address_cityPersonal').data('b-city') : $('#address_cityPersonal').data('city'),
					state: ($('#statePersonal').data('b-state')) ? $('#statePersonal').data('b-state') : $('#statePersonal').data('state'),
					postcode: ($('#address_postcodePersonal').data('b-postcode')) ? $('#address_postcodePersonal').data('b-postcode') : $('#address_postcodePersonal').data('postcode'),
					country: ($('#company-country').data('b-country')) ? $('#company-country').data('b-country') : $('#company-country').data('country')
				};
				$('#billing-info input').removeAttr('readonly');
			}

			$('#companyName').val(shipping_address.company);
			$('#firstNamePersonal').val(shipping_address.first);
			$('#lastNamePersonal').val(shipping_address.last);
			$('#address_streetPersonal').val(shipping_address.street);
			$('#address_street_2Personal').val(shipping_address.street2);
			$('#address_cityPersonal').val(shipping_address.city);
			$('#statePersonal option[value="'+shipping_address.state+'"]').attr("selected","selected").trigger('change');
			$('#company-country option[value="'+shipping_address.country+'"]').attr("selected","selected").trigger('change');
			$('#address_postcodePersonal').val(shipping_address.postcode);
		});
	},


	'feature-list': function() {
		/* swap b&w images with color images on hover */
		$('.feature-list a').hover(function() {
			var img = $(this).find('img');
			//img.data('base-image', img.attr('src'));
			//img.attr('src', img.data('alt-image'));
			img.removeClass('filter-greyscale');
		}, function() {
			var img = $(this).find('img');
			//img.attr('src', img.data('base-image'));
			img.addClass('filter-greyscale');
		});
	},


	'feature': function() {

		UT.carousel('.header .carousel', {
			slidesPerPane: 7
		});

	},

	'showcase': function() {

		UT.carousel('.header .carousel', {
			slidesPerPane: 7
		});

	},


	'home': function() {

		new UT.featureSlideshow('.header .slides', 'li', '.header .pagination', '.home-prev', '.home-next');

		new UT.newsfeed('.feed');

		$('.pagination ul').css({
			'margin-left': $('.pagination ul').outerWidth() / -2
		}).find('li:last').addClass('last');


	}

};

UTIL = {
	exec: function(page) {
		var ns = UT.pages;

		if ( page !== "" && ns[page] && typeof( ns[page] ) == "function" ) {
			ns[page]();
		}
	},

	init: function() {
		var body = document.body,
			page = body.getAttribute( "data-page" );


		UTIL.exec( "common" );
		UTIL.exec( page );

		$(document).trigger('finalized');
	}
};

$(document).ready( UTIL.init );

/* @end */

$(document).ready(function() {
	$("select.fancy").change(function () {
		var $_this = $(this);
		$("option:selected", this).each(function () {
			var str = $(this).text();
			$_this.siblings('.select-value').text(str);
		});
	})
	.change();
});
