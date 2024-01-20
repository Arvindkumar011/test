var CRUMINA = {};
!(function (y) {
    "use strict";
    var e = y(window),
        i = y(document),
        t = y("body"),
        w = {},
        a = y("#site-header"),
        n = y("#site-footer"),
        s = y(".counter"),
        o = y(".countdown-timer"),
        r = y(".skills-item"),
        l = y("#primary-menu"),
        c = y("#hellopreloader"),
        d = y(".cd-overlay-nav"),
        u = y(".cd-overlay-content");
    (CRUMINA.layerInit = function () {
        var e = 2 * Math.sqrt(Math.pow(y(window).height(), 2) + Math.pow(y(window).width(), 2));
        d
            .children("span")
            .velocity({ scaleX: 0, scaleY: 0, translateZ: 0 }, 50)
            .velocity({ height: e + "px", width: e + "px", top: -e / 2 + "px", left: -e / 2 + "px" }, 0),
            u
                .children("span")
                .velocity({ scaleX: 0, scaleY: 0, translateZ: 0 }, 50)
                .velocity({ height: e + "px", width: e + "px", top: -e / 2 + "px", left: -e / 2 + "px" }, 0);
    }),
        (CRUMINA.fixedHeader = function () {
            a.headroom({ offset: 210, tolerance: 5, classes: { initial: "animated", pinned: "slideDown", unpinned: "slideUp" } });
        }),
        (CRUMINA.parallaxFooter = function () {
            n.length && n.hasClass("js-fixed-footer") && (n.before('<div class="block-footer-height"></div>'), y(".block-footer-height").matchHeight({ target: n }));
        }),
        (CRUMINA.preloader = function () {
            return (
                e.scrollTop(0),
                setTimeout(function () {
                    c.fadeOut(800);
                }, 500),
                !1
            );
        });
    new SmoothScroll('a[href*="#"]', { ignore: "[data-toggle]", offset: 40 });
    (CRUMINA.counters = function () {
        s.length &&
            s.each(function () {
                jQuery(this).waypoint(
                    function () {
                        y(this.element).find("span").countTo(), this.destroy();
                    },
                    { offset: "95%" }
                );
            });
    }),
        (CRUMINA.countdown = function () {
            o.length &&
                o.each(function () {
                    var i = y(this),
                        e = i.data("countdown");
                    i.countdown(e).on("update.countdown", function (e) {
                        i.html(
                            e.strftime(
                                '<div class="column"><div class="text">DAY%!d</div><div class="timer">%D</div></div><div class="timer">:</div><div class="column"><div class="text">HRS</div><div class="timer">%H</div></div><div class="timer">:</div><div class="column"><div class="text">MIN</div><div class="timer">%M</div></div><div class="timer">:</div><div class="column"><div class="text">SEC</div><div class="timer">%S</div></div>'
                            )
                        );
                    });
                });
        }),
        (CRUMINA.progresBars = function () {
            r.length &&
                r.each(function () {
                    jQuery(this).waypoint(
                        function () {
                            y(this.element).find(".count-animate").countTo(), y(this.element).find(".skills-item-meter-active").fadeTo(300, 1).addClass("skills-animate"), this.destroy();
                        },
                        { offset: "90%" }
                    );
                });
        }),
        (CRUMINA.toggleSearch = function () {
            y(".search-popup").toggleClass("open"), y(".search-full-screen input").focus();
        }),
        (CRUMINA.mediaPopups = function () {
            y(".js-popup-iframe").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
                y(".js-zoom-image, .link-image").magnificPopup({
                    type: "image",
                    removalDelay: 500,
                    callbacks: {
                        beforeOpen: function () {
                            (this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")), (this.st.mainClass = "mfp-zoom-in");
                        },
                    },
                    closeOnContentClick: !0,
                    midClick: !0,
                });
        }),
        (CRUMINA.equalHeight = function () {
            y(".js-equal-child").find(".theme-module").matchHeight({ property: "min-height" });
        }),
        (CRUMINA.rangeSlider = function () {
            y(".range-slider-js").ionRangeSlider({ type: "double", grid: !0, min: 0, max: 1e3, from: 200, to: 800, prefix: "$" });
        }),
        (CRUMINA.IsotopeSort = function () {
            y(".sorting-container").each(function () {
                var i = y(this),
                    e = i.data("layout").length ? i.data("layout") : "masonry";
                i.isotope({ itemSelector: ".sorting-item", layoutMode: e, percentPosition: !0 }),
                    i.imagesLoaded().progress(function () {
                        i.isotope("layout");
                    }),
                    i
                        .siblings(".sorting-menu")
                        .find("li")
                        .on("click", function () {
                            if (y(this).hasClass("active")) return !1;
                            y(this).parent().find(".active").removeClass("active"), y(this).addClass("active");
                            var e = y(this).data("filter");
                            return void 0 !== e ? (i.isotope({ filter: e }), !1) : void 0;
                        });
            });
        }),
        (CRUMINA.initSwiper = function () {
            var g = 0;
            y(".swiper-container").each(function () {
                var t = y(this),
                    e = "swiper-unique-id-" + g,
                    i = !1;
                t.addClass("swiper-" + e + " initialized").attr("id", e),
                    t
                        .closest(".crumina-module")
                        .find(".swiper-pagination")
                        .addClass("pagination-" + e);
                var a = t.data("effect") ? t.data("effect") : "slide",
                    n = !t.data("crossfade") || t.data("crossfade"),
                    s = 0 != t.data("loop") || t.data("loop"),
                    o = t.data("show-items") ? t.data("show-items") : 1,
                    r = t.data("scroll-items") ? t.data("scroll-items") : 1,
                    l = t.data("direction") ? t.data("direction") : "horizontal",
                    c = !!t.data("mouse-scroll") && t.data("mouse-scroll"),
                    d = t.data("autoplay") ? parseInt(t.data("autoplay"), 10) : 0,
                    u = !!t.hasClass("auto-height"),
                    p = !!t.data("nospace") && t.data("nospace"),
                    m = !!t.data("centered-slider") && t.data("centered-slider"),
                    f = t.data("stretch") ? t.data("stretch") : 0,
                    h = t.data("depth") ? t.data("depth") : 0,
                    v = 1 < o && 1 != p ? 20 : 0;
                1 < o && (i = { 480: { slidesPerView: 1, slidesPerGroup: 1 }, 768: { slidesPerView: 2, slidesPerGroup: 2 } }),
                    (w["swiper-" + e] = new Swiper(".swiper-" + e, {
                        pagination: ".pagination-" + e,
                        paginationClickable: !0,
                        direction: l,
                        mousewheelControl: c,
                        mousewheelReleaseOnEdges: c,
                        slidesPerView: o,
                        slidesPerGroup: r,
                        spaceBetween: v,
                        keyboardControl: !0,
                        setWrapperSize: !0,
                        preloadImages: !0,
                        updateOnImagesReady: !0,
                        centeredSlides: m,
                        autoplay: d,
                        autoHeight: u,
                        loop: s,
                        breakpoints: i,
                        effect: a,
                        fade: { crossFade: n },
                        parallax: !0,
                        onImagesReady: function (e) {},
                        coverflow: { stretch: f, rotate: 0, depth: h, modifier: 2, slideShadows: !1 },
                        onSlideChangeStart: function (e) {
                            var i;
                            t.closest(".crumina-module").find(".slider-slides").length &&
                                (t.closest(".crumina-module").find(".slider-slides .slide-active").removeClass("slide-active"),
                                (i = e.slides.eq(e.activeIndex).attr("data-swiper-slide-index")),
                                t.closest(".crumina-module").find(".slider-slides .slides-item").eq(i).addClass("slide-active"));
                        },
                    })),
                    g++;
            }),
                y(".btn-prev").on("click", function () {
                    var e = y(this).closest(".crumina-module-slider").find(".swiper-container").attr("id");
                    w["swiper-" + e].slidePrev();
                }),
                y(".btn-next").on("click", function () {
                    var e = y(this).closest(".crumina-module-slider").find(".swiper-container").attr("id");
                    w["swiper-" + e].slideNext();
                }),
                y(".slider-slides .slides-item").on("click", function (e) {
                    e.preventDefault();
                    var i = y(this).closest(".crumina-module-slider").find(".swiper-container").attr("id");
                    if (y(this).hasClass("slide-active")) return !1;
                    var t = y(this).parent().find(".slides-item").index(this);
                    return w["swiper-" + i].slideTo(t + 1), y(this).parent().find(".slide-active").removeClass("slide-active"), y(this).addClass("slide-active"), !1;
                });
        }),
        (CRUMINA.burgerAnimation = function () {
            var t = 80,
                a = 320,
                i = 80,
                n = 320;
            function e(e) {
                e.draw("80% - 240", "80%", 0.3, {
                    delay: 0.1,
                    callback: function () {
                        e.draw("100% - 545", "100% - 305", 0.6, { easing: ease.ease("elastic-out", 1, 0.3) });
                    },
                });
            }
            function s(e) {
                e.draw(i - 60, n + 60, 0.1, {
                    callback: function () {
                        e.draw(i + 120, n - 120, 0.3, { easing: ease.ease("bounce-out", 1, 0.3) });
                    },
                });
            }
            function o(i) {
                i.draw("90% - 240", "90%", 0.1, {
                    easing: ease.ease("elastic-in", 1, 0.3),
                    callback: function () {
                        var e;
                        (e = i).draw("20% - 240", "20%", 0.3, {
                            callback: function () {
                                e.draw(t, a, 0.7, { easing: ease.ease("elastic-out", 1, 0.3) });
                            },
                        });
                    },
                });
            }
            var r = document.getElementById("pathD"),
                l = document.getElementById("pathE"),
                c = document.getElementById("pathF"),
                d = new Segment(r, t, a),
                u = new Segment(l, i, n),
                p = new Segment(c, t, a),
                m = document.getElementById("menu-icon-wrapper"),
                f = document.getElementById("menu-icon-trigger"),
                h = !0;
            (m.style.visibility = "visible"),
                (f.onclick = function () {
                    (m.className = "menu-icon-wrapper scaled"),
                        h ? (e(d), s(u), e(p)) : (o(d), u.draw(i, n, 0.7, { delay: 0.1, easing: ease.ease("elastic-out", 2, 0.4) }), o(p)),
                        (h = !h),
                        setTimeout(function () {
                            m.className = "menu-icon-wrapper";
                        }, 450);
                });
        }),
        e.keydown(function (e) {
            27 == e.which && (t.removeClass("overlay-enable"), y(".search-standard").removeClass("open"), l.css({ visibility: "visible" }), y("#menu-icon-trigger").css({ opacity: "1" }), y(".top-bar").removeClass("open"));
        }),
        jQuery(".js-open-search-popup > *").on("click", function () {
            return CRUMINA.toggleSearch(), !1;
        }),
        jQuery("#top-bar-js").on("click", function () {
            return y(".top-bar").addClass("open"), !1;
        }),
        jQuery(".js-open-search-standard > *").on("click", function () {
            return (
                l.find(".search-standard").addClass("open"),
                l.css({ visibility: "hidden" }),
                y("#menu-icon-trigger").css({ opacity: "0" }),
                setTimeout(function () {
                    l.find(".search-input").focus();
                }, 100),
                !1
            );
        }),
        jQuery(".js-search-close > *").on("click", function () {
            return l.find(".search-standard").removeClass("open"), l.css({ visibility: "visible" }), y("#menu-icon-trigger").css({ opacity: "1" }), !1;
        }),
        jQuery("#top-bar-close-js").on("click", function () {
            return y(".top-bar").removeClass("open"), !1;
        }),
        jQuery(".js-message-popup").on("click", function () {
            return (
                setTimeout(function () {
                    y(".message-popup").addClass("open");
                }, 300),
                !1
            );
        }),
        jQuery(".js-popup-close").on("click", function () {
            return y(".search-popup").removeClass("open"), y(".message-popup").removeClass("open"), y(".popup-gallery").removeClass("open"), !1;
        }),
        jQuery(".js-popup-clear-input").on("click", function () {
            y(".js-popup-clear-input").closest(".typeahead__field").find(".js-typeahead").val("").focus();
        }),
        y(".collapse").collapse(),
        jQuery(".back-to-top").on("click", function () {
            return y("html,body").animate({ scrollTop: 0 }, 1200), !1;
        }),
        (CRUMINA.formValidate = function () {
            y(".form-validate").parsley();
        }),
        (CRUMINA.cruminaSelect = function () {
            y("select").niceSelect();
        }),
        (CRUMINA.languageSelect = function () {
            var e = y("#language").niceSelect();
            y(e).change(function () {
                location.href = y(this).val();
            });
        }),
        i.ready(function () {
            jQuery(function () {
                jQuery(".social__item.main").hover(function () {
                    jQuery(".social__item.main").siblings(".share-product").addClass("open");
                }),
                    jQuery(".share-product").mouseleave(function () {
                        jQuery(".share-product").removeClass("open");
                    });
            }),
                jQuery(".js-pricing-switcher").on("click", function () {
                    var e = y(this).prev().is(":checked");
                    y(this)
                        .closest(".crumina-pricings")
                        .find(".price")
                        .each(function () {
                            e ? y(this).text(y(this).data("annually")) : y(this).text(y(this).data("monthly"));
                        });
                }),
                y("#menu-icon-wrapper").length && CRUMINA.burgerAnimation(),
                l.crumegamenu({ showSpeed: 0, hideSpeed: 0, trigger: "hover", animation: "drop-up", effect: "fade", indicatorFirstLevel: "&#xf0d7", indicatorSecondLevel: "&#xf105" }),
                CRUMINA.fixedHeader(),
                CRUMINA.initSwiper(),
                CRUMINA.equalHeight(),
                CRUMINA.mediaPopups(),
                CRUMINA.IsotopeSort(),
                CRUMINA.parallaxFooter(),
                CRUMINA.rangeSlider(),
                CRUMINA.cruminaSelect(),
                CRUMINA.languageSelect(),
                CRUMINA.layerInit(),
                CRUMINA.countdown(),
                CRUMINA.counters(),
                CRUMINA.progresBars(),
                CRUMINA.formValidate();
        }),
        y(window).on("resize", function () {
            window.requestAnimationFrame(CRUMINA.layerInit);
        });
})(jQuery),
    $(document).ready(function () {
        var e = window.location.href;
    });
