$(document).ready(function() {

    $('body').fadeIn('fast');

    // svg_img to inline_svg converter
    $('.icon').each(function() {
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });


    $('.stars').each(function(){
        var $rating = $(this).find('.rating').attr('data-rating');
        var i = 0;
        $(this).find('.star').each(function(){
            if( i < $rating){
                $(this).addClass('active');
            }
            i++;
        })
    })
    var wrapW = $('.wrap').width();
    var catW = wrapW - (wrapW / 100 * 20);
    $('.catalog-panel-list_item_block').width(catW);
$(window).resize(function(){
    wrapW = $('.wrap').width();
    catW = wrapW - (wrapW / 100 * 20);
    $('.catalog-panel-list_item_block').width(catW);
})


//catalog start
$('.menuLine-catalogButton').click(function() {
        if ($('.catalog').is(':hidden')) {
            $('.catalog').slideDown('fast');
            $(this).addClass('active');
            $('.menuLine-catalogButton_icon').addClass('close');
            $('.overlay').fadeIn('fast');
        } else {
            $('.catalog').slideUp('fast');
            $(this).removeClass('active');
            $('.menuLine-catalogButton_icon').removeClass('close');
            $('.overlay').fadeOut();
        }
    });
$('.overlay').click(function() {
    $('.catalog').slideUp('fast');
            $('.menuLine-catalogButton').removeClass('active');
            $('.menuLine-catalogButton_icon').removeClass('close');
            $('.overlay').fadeOut();
})
//catalog end

//carousel start
$('.mainBanner_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 2000
});
$('.contactPage_block.gallery').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 2000
});
    var sliders = $('.carousel-products');
    var loop;
    $.each(sliders, function(){
        var srlen = $(this).find('.product').length;
        var vdlen = $(this).find('.vendorlink').length;
        if (srlen > 6 || vdlen > 6 ){ loop = true;}
        else { loop = false; }
        $(this).owlCarousel({
            loop: loop,
            margin: 5,
            nav: false,
            dots: false,
            lazyLoad: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0:{
                    items:1
                },
                420:{
                    items:2
                },
                800:{
                    items:3
                },
                1000:{
                    items:5
                },
                1366:{
                    items:6
                }
            }
        })
    })

var tagline = {
    loop: true,
    nav: false,
    dots: false,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:4
        },
        1366:{
            items:5
        }
    }
}
$('.tagline-block').owlCarousel(tagline);
//carousel control
    $('.mainBanner_ctrl.prev').on('click',function(){
        $('.mainBanner_slider').slick('slickPrev');
    })
    $('.mainBanner_ctrl.next').on('click',function(){
        $('.mainBanner_slider').slick('slickNext');
    })


    $('.navbar-ctrl_prev').on('click',function(){
        $(this).closest('.navbar').next('.carousel-products').trigger('prev.owl.carousel');
    })
    $('.navbar-ctrl_next').on('click',function(){
        $(this).closest('.navbar').next('.carousel-products').trigger('next.owl.carousel');
    })

     $('.tagline_btn').on('click',function(){
        if($(this).closest('.tagline').find('.tagline-block').hasClass('open')){
            $(this).closest('.tagline').find('.tagline-block').toggleClass('open');
            $(this).closest('.tagline').find('.tagline-block').owlCarousel(tagline);
            $(this).text('Все категории');
        }
        else{
            $(this).closest('.tagline').find('.tagline-block').trigger('destroy.owl.carousel');
            $(this).closest('.tagline').find('.tagline-block').toggleClass('open');
            $(this).text('Скрыть');   
        }
        
     })
//carousel end

//to Top button start
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.totop').fadeIn().css('display','flex');
        } else {
            $('.totop').fadeOut();
        }
        /*if ($(this).scrollTop() > 150 && $('footer').offset().top > 1500){
            $('.comparePage_head').addClass('scroll');
        } else {
            $('.comparePage_head').removeClass('scroll');
        }*/
    });
    $('.totop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
//to Top button end

$('.btn_show').on('click',function(){
    $(this).next('.hidden').slideDown();
    $(this).hide();
})
$('.btn_hide').on('click',function(){
    $(this).closest('div').find('.hidden').slideUp();
    $(this).closest('div').find('.btn_show').show();
})


//popup window start

    $('.popup_open').on('click',function(e){
        e.preventDefault();
        $('.popup[data-popup="'+$(this).attr('data-popup')+'"]').fadeIn().css('display','flex');
    })
    $('.popup_close, .popup_overlay').on('click',function(){
        $(this).closest('.popup').fadeOut();
    })
//popup window end

//productPage start
    // Gallery start
    var $wd = $(window).width();
        if (jQuery().slick) {
            var tgThumbs = $('.productPage_gallery_thumbs img').length - 1;
            if (tgThumbs == 0) {
                tgThumbs = 1;
            }
            if (tgThumbs > 3) {
                tgThumbs = 3;
            }

            $('.productPage_gallery_slider').slick({
                infinite: true,
                slidesToShow: 1,
                arrows: false,
                fade: true,
                autoplay: true,
                autoplaySpeed: 5000,
                asNavFor: '.productPage_gallery_thumbs'
            });
            $('.productPage_gallery_thumbs').slick({
                infinite: true,
                asNavFor: '.productPage_gallery_slider',
                arrows: false,
                vertical: true,
                verticalSwiping: true,
                slidesToShow: tgThumbs,
                focusOnSelect: true,
                autoplay: true,
                autoplaySpeed: 5000,
                centerMode: true,
            });
            $('.productPage_gallery_slider').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                removalDelay: 300,
                image: {
                    verticalFit: true,
                },
                gallery: {
                    enabled: true,
                    tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function(element) {
                        return element.find('img');
                    }
                }
            });
            $('.contactPage_block.gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                removalDelay: 300,
                image: {
                    verticalFit: true,
                },
                gallery: {
                    enabled: true,
                    tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function(element) {
                        return element.find('img');
                    }
                }
            });
        };
    //Gallery end
//productPage end

// Блок "Количество" - start
$('.btn_range.minus').on('click', function(){
    var range = $(this).next(); 
    if(range.val() > 1){
        range.val(+range.val() - 1);  
    }
})
$('.btn_range.plus').on('click', function(){
    var range = $(this).prev();
    range.val(+range.val() + 1);
})

// Блок "Количество" - end

//tabs start   
if ($(".productPage_tabs")) {
        var i = 1;
        $(".productPage_tabs ul li:first").addClass('active_tab');
        $(".productPage_tabs ul li").each(function() {
            if (i <= $('.productPage_tabs_tab').length) {
                $(this).attr('tab_control', 'tabs-' + i);
                i++;
            }
        });
        $('.productPage_tabs_tab:first').show();
        $('.productPage_tabs_tab').not(':first').hide();

        $(".productPage_tabs > ul li").on('click', function() {
            event.preventDefault();
            var tabid = $(this).attr('tab_control');
            $(this).addClass('active_tab');
            $(".productPage_tabs ul li").not(this).removeClass('active_tab');
            $('#' + tabid).show();
            $('.productPage_tabs_tab').not('#' + tabid).hide();
        });
    }
    var filterRange = $('.prodcat_filter_slider');
    $.each(filterRange, function(){
        var rangeMin = $(this).find('input[filter-range="min"]').attr('value');
        var rangeMax = $(this).find('input[filter-range="max"]').attr('value');
        $(this).find('.prodcat_filter_slider_range').slider({
              range: true,
              min: + rangeMin,
              max: + rangeMax,
              values: [ rangeMin, rangeMax ],
              slide: function( event, ui ) {
                $(this).parent().find('input[filter-range="min"]').val( ui.values[ 0 ] );
                $(this).parent().find('input[filter-range="max"]').val( ui.values[ 1 ] );
              }
            });
            
            $('input[filter-range="min"]').on('change',function(){
                var thval = $(this).val();
                var rmin;
                if (parseInt(thval) < parseInt(rangeMin)) { rmin = 0; }
                else if (parseInt(thval) > parseInt(rangeMax)) { rmin = rangeMax; }
                else { rmin = thval; };
                $(this).closest('.prodcat_filter_slider').find('.prodcat_filter_slider_range').slider("values", 0, rmin);
                $(this).val(rmin);
            });

            $('input[filter-range="max"]').on('change',function(){
                var thval = $(this).val();
                var rmax;
                if (parseInt(thval) > parseInt(rangeMax)) { rmax = rangeMax; }
                else if (parseInt(thval) < parseInt(rangeMin)) { rmax = rangeMin; }
                else { rmax = thval; };
                $(this).closest('.prodcat_filter_slider').find('.prodcat_filter_slider_range').slider("values", 1, rmax);
                $(this).val(rmax);
            });

        });

    $('.prodcat_filter_top').on('click', function(){
        $(this).next().slideToggle();
        $(this).find('.prodcat_filter_ancer').toggleClass('close');
    })
//compare start

$('.comparePage_head_btns').find('.prev').on('click',function(){
    var item = Math.ceil($('.comparePage_item').width());
    var pos = $('.comparePage_row').css("left").replace('px', '');
    $('.comparePage_row').animate({left: "+=" + item},500, "linear"); 
})
$('.comparePage_head_btns').find('.next').on('click',function(){
    var item = $('.comparePage_item').width();
    $('.comparePage_row').animate({left: "-=" + item},500, "linear");
})
if($('.comparePage_row').width() > $('.wrap').width()){
        $('.comparePage').addClass('slider');
        $('.comparePage_head_btns').fadeIn().css('display','flex');
    }
else{
        $('.comparePage').removeClass('slider');
        $('.comparePage_head_btns').fadeOut();
    }

//compare end


//reviewTabs

    $('.reviewPage_control_item').on('click',function(){
        if($(this).hasClass('active') === false){
            $(this).addClass('active');
            $('.reviewPage_control_item').not(this).removeClass('active');
            $('.reviewPage_list_block[reviewId="'+$(this).attr('reviewId')+'"]').addClass('active');
            $('.reviewPage_list_block[reviewId="'+$('.reviewPage_control_item').not(this).attr('reviewId')+'"]').removeClass('active');
        }
    })

//reviewTabs end


});