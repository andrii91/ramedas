$(document).ready(function () {
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 70
    }, 1500);

  });
  $('.cases-slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<div class="slick_btn prev"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.21297 0.292893C7.60349 0.683417 7.60349 1.31658 7.21297 1.70711L2.42007 6.5L7.21297 11.2929C7.60349 11.6834 7.60349 12.3166 7.21297 12.7071C6.82244 13.0976 6.18928 13.0976 5.79875 12.7071L0.298753 7.20711C-0.0917717 6.81658 -0.0917717 6.18342 0.298753 5.79289L5.79875 0.292893C6.18928 -0.0976311 6.82244 -0.0976311 7.21297 0.292893Z" fill="white"/></svg></div>',
    nextArrow: '<div class="slick_btn next"><svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.798753 12.7071C0.408228 12.3166 0.408228 11.6834 0.798753 11.2929L5.59165 6.5L0.798752 1.70711C0.408227 1.31658 0.408227 0.683418 0.798752 0.292894C1.18928 -0.0976309 1.82244 -0.0976309 2.21296 0.292894L7.71297 5.79289C8.10349 6.18342 8.10349 6.81658 7.71297 7.20711L2.21297 12.7071C1.82244 13.0976 1.18928 13.0976 0.798753 12.7071Z" fill="white"/></svg></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,

        }
    },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  });
  var slick_btnPrev = ($('.cases-slider').width() / 2) - ($('.cases-slider .slick-dots').width() / 2 + 70);
  var slick_btnNext = ($('.cases-slider').width() / 2) - ($('.cases-slider .slick-dots').width() / 2 + 70);
  $('.slick_btn.prev').css({
    'left': slick_btnPrev + 'px',
  })
  $('.slick_btn.next').css({
    'right': slick_btnNext + 'px',
  });


  $('.faq-item').click(function () {
    $(this).toggleClass('active');
    $(this).find('.more').slideToggle();
  })

  if ($(window).width() < 1200) {

    $('#menu li a').click(function () {
      $('#menu').hide('200')
    })
    
    $('.slider_mob img').each(function(){
      $(this).removeClass('lozad');
      $(this).removeAttr('data-src');
//      $(this).data('lazy', $(this).data('src'));
//      $(this).attr('src', '#');
    })
    
    $('.slider_mob2 img').each(function(){
      $(this).removeClass('lozad');
//      $(this).data('lazy', $(this).data('src'));
//      $(this).attr('src', '#');
    })

    $('.slider_mob').slick({
       lazyLoad: 'ondemand',
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
//      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 6000
    });

    $('.slider_mob2').slick({
       lazyLoad: 'ondemand',
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
//      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 6000
    });


  }

  /* form valid*/
  var alertImage = '<svg style="width: 20px; position:absolute;top: 50%;transform: translateY(-50%); right: 23px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';
  var error;
  $('.submit').click(function (e) {
    e.preventDefault();
    var ref = $(this).closest('form').find('[required]');
    $(ref).each(function () {
      if ($(this).val() == '') {
        var errorfield = $(this);
        if ($(this).attr("type") == 'email') {
          var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          if (!pattern.test($(this).val())) {
            $("input[name=email]").val('');
            $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else if ($(this).attr("type") == 'tel') {
          var patterntel = /^()[- +()0-9]{9,18}/i;
          if (!patterntel.test($(this).val())) {
            $("input[name=phone]").val('');
            $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else {
          $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
          error = 1;
          $(":input.error:first").focus();
          return false;
        }
        error = 1;
        return false;
      } else {
        error = 0;
        $(this).addClass('error').parent('.label').find('.allert').remove();
      }
    });
    if (error !== 1) {
      $(this).unbind('submit').submit();
    }
  });

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }
  $('input[name="utm_source"]').val(getUrlVars()["utm_source"]);
  $('input[name="utm_campaign"]').val(getUrlVars()["utm_campaign"]);
  $('input[name="utm_medium"]').val(getUrlVars()["utm_medium"]);
  $('input[name="utm_term"]').val(getUrlVars()["utm_term"]);
  $('input[name="utm_content"]').val(getUrlVars()["utm_content"]);
  $('input[name="click_id"]').val(getUrlVars()["aff_sub"]);
  $('input[name="affiliate_id"]').val(getUrlVars()["aff_id"]);
  $('input[name="user_agent"]').val(navigator.userAgent);
  $('input[name="ref"]').val(document.referrer);
  $('input[name="page_url"]').val(window.location);

  $.get("https://ipinfo.io", function (response) {
    $('input[name="ip_address"]').val(response.ip);
    $('input[name="city"]').val(response.city);
    $('input[name="country"]').val(response.country);
    $('input[name="region"]').val(response.region);
  }, "jsonp");

  $('input[name="phone"]').inputmask("+38(099) 99 999 99");

  function readCookie(name) {
    var n = name + "=";
    var cookie = document.cookie.split(';');
    for (var i = 0; i < cookie.length; i++) {
      var c = cookie[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(n) == 0) {
        return c.substring(n.length, c.length);
      }
    }
    return null;
  }
  setTimeout(function () {
    $('.gclid_field').val(readCookie('gclid'));
    if ($('.gclid_field').val() == '') {
      $('.gclid_field').val(readCookie('_gid'));
    }
  }, 2000);




  $('form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $form.find('.submit').addClass('inactive');
    $form.find('.submit').prop('disabled', true);



    $.ajax({
      type: 'POST',
      url: 'reg.php',
      dataType: 'json',
      data: $form.serialize(),
      success: function (response) {}
    });


    setTimeout(function () {
      window.location.href = "success.html";
    }, 1000);

  });


  $('#nav-icon').click(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })

    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('#menu, .nav .callme-btn').slideToggle(200);
  });

  $('#menu').hover(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));

    })
  })
  
  
  
  var observer = lozad();
  observer.observe();
});
