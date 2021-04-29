function animations(scroll){
 

    if($('.section[data-section-id="1"]').offset().top < scroll + $('#to-top-btn').position().top){
        $('#to-top-btn').removeClass('hide')
    }

    if($('.section[data-section-id="1"]').offset().top - 10 <= scroll){
        $('#logo-btn svg').removeClass().addClass('index0')
    }
 

    if($('.section[data-section-id="2"]').offset().top < scroll + $('#to-top-btn').position().top){
        $('#to-top-btn').addClass('hide')
    }
    
    

    if($('.section[data-section-id="2"]').offset().top - 10 <= scroll){
        $('#logo-btn svg').removeClass().addClass('index1')
    }
 

    if($('.section[data-section-id="3"]').offset().top - 10 <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }

    if($('.section[data-section-id="11"]').offset().top - 10 <= scroll){
        $('#logo-btn svg').removeClass().addClass('index1')
    }


    if($('.section[data-section-id="4"]').offset().top  - 10 <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }

    if($('.section[data-section-id="5"]').offset().top - 10 <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }

    if($('.section[data-section-id="6"]').offset().top - 10 <= scroll){
        $('#logo-btn svg').removeClass().addClass('index1')
    }

 
    if($('.section[data-section-id="7"]').offset().top - 10 <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }

  

    if($('.section[data-section-id="8"]').offset().top  - 10 <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }

    if($('.section[data-section-id="9"]').offset().top - 10  <= scroll){
        $('#logo-btn svg').removeClass().addClass('index1')

        if($(window).width() < 751){
            $('#logo-btn').removeClass('active')
        } else{
            $('#logo-btn').removeClass('active')
        }
    }

    if($('.section[data-section-id="10"]').offset().top - 10  <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')

        if($(window).width() < 751){
            $('#logo-btn').addClass('active')
        } else{
            $('#logo-btn').removeClass('active')
        }
    }


    
   
}
const settings = {
    infinite:false,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
}
function fixPos(){
    let wrapperCoordination = $('.wrapper').css('margin-left')
    let leftCoordination = $('.container').css('margin-left')
    let headerWidth = $('.header').css('width')
    $('#logo-btn').css({left: `calc(${leftCoordination} + ${wrapperCoordination})`})
    $('#to-top-btn').css({left: `calc(${leftCoordination} + ${wrapperCoordination})`})
    $('.forms__desc').css({left: `calc(${leftCoordination} + ${wrapperCoordination})`})
    $('.header').css({right: `calc(${leftCoordination} - ${headerWidth})`})

    if($(window).width() < 751){
        if(!$('.confident__slider').hasClass('slick-initialized')){
            $('.confident__slider').slick(settings)
        }
        
    } else{

        if($('.confident__slider').hasClass('slick-initialized')){
            $('.confident__slider').slick('unslick')
        }
       
    }
}

$(window).resize(function(){
    fixPos()
})

window.addEventListener("orientationchange", function() {
    fixPos()
}, false);

$(document).ready(function(){

    $('.development-video').trigger('play');

    $('.industries-title').click(function(e){
        const $this = $(this)

        if($(window).width() < 768){
            if(!$this.parents('.industries-item').hasClass('active')){
                $('.industries-texts').slideUp()
                $('.industries-item').removeClass('active')
                $this.parents('.industries-item').addClass('active')
                $this.siblings('.industries-texts').slideDown()
            } else{
                $this.parents('.industries-item').removeClass('active')
                $this.siblings('.industries-texts').slideUp()
            }
        }
       
    })

    if($('body').hasClass('fp-viewing-0')){
        $('body').addClass('animate-0')
    }
    const pos1 = $('.stages__slider').position().top
    const pos2 = $('.havystages__content').position().top


    $('.stages__slider-wrapper').on('scroll', function(event) {
        console.log($('.stages__slider').position().top)
        if($('.stages__slider').position().top < pos1){
            $('.stages__slider-wrapper-hide').addClass('active')
        } else{
            $('.stages__slider-wrapper-hide').removeClass('active')
        }
    })

    $('.havystages__content-wrapper').on('scroll', function(event) {
        console.log($('.havystages__content').position().top)
        if($('.havystages__content').position().top < pos2){
            $('.havystages__content-wrapper-hide').addClass('active')
        } else{
            $('.havystages__content-wrapper-hide').removeClass('active')
        }
    })

    // $(".stages__slider-wrapper").on("swipe", function(e) {
    //     if($('.stages__slider').position().top < pos1){
    //         $('.stages__slider-wrapper-hide').addClass('active')
    //     } else{
    //         $('.stages__slider-wrapper-hide').removeClass('active')
    //     }
    
    // });
    
    // $(".havystages__content-wrapper").on("swipe", function(e) {
    //     if($('.havystages__content').position().top < pos2){
    //         $('.havystages__content-wrapper-hide').addClass('active')
    //     } else{
    //         $('.havystages__content-wrapper-hide').removeClass('active')
    //     }
    
    // });


    fixPos()
    animations($(window).scrollTop())

    $(document).scroll(function(){
        let scroll = $(window).scrollTop()
        animations(scroll)
    })

    // $('.stages__slider').slick({
    //     infinite: false,
    //     arrows: true,
    //     dots: false,
    //     speed:300,
    //     vertical: true,
    //     verticalSwiping: true,
    //     slidesToShow: 8,
    //     responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 5,
    //             slidesToScroll: 3,
    //           }
    //         },
    //     ]
    // });
    // var	wheel = 0;
	// var	newDate = new Date();
	// var	oldDate = new Date();
	// $('.stages').on('mousewheel', function(event) {
	// 	newDate = new Date();
	// 	var scrollAllowed = true;

	// 	if( wheel < 10 && (newDate.getTime()-oldDate.getTime()) < 100 ) {
	// 		wheel++;
	// 	}
	// 	else {
	// 		if( (newDate.getTime()-oldDate.getTime()) > 100 ) {
	// 			wheel = 0;
	// 		}
	// 		else {
	// 			scrollAllowed = false;
	// 		}
	// 	}
	// 	oldDate = new Date();
	// 	if( scrollAllowed ) {
	// 		if (event.deltaY > 0) {
	// 			$('.stages .slick-prev').trigger('click');
	// 		} else {
	// 			$('.stages .slick-next').trigger('click');
	// 		}
	// 	}
	// });

    

    $('.allstages__heading').click(function(){
        const $this = $(this)
        if(!$this.hasClass('active')){
            $('.allstages__heading').removeClass('active')
            $('.allstages__content').slideUp()
            $this.addClass('active');
            $this.siblings('.allstages__content').slideDown()
        } else{
            $this.removeClass('active');
            $this.siblings('.allstages__content').slideUp()
        }
    })

    $('#to-top-btn').click(function(e){
        e.preventDefault()
        fullpage_api.moveSectionDown()
    })

  $('.header__item').click(function(e){
      e.preventDefault()
      const id = $(this).data('id')
      fullpage_api.moveTo(id)
      console.log(id)
  })

    // if($('input[type="checkbox"]').prop('checked')){
    //     $('.forms__submit-btn').attr('disabled', false);
    // }else{
    //     $('.forms__submit-btn').attr('disabled', true);
    // }

    // $(document).on('change', 'input[type="checkbox"]', function(){
    //     console.log('up')
    //     if($('input[type="checkbox"]').prop('checked')){
    //     $('.forms__submit-btn').attr('disabled', false);
    //     }else{
    //     $('.forms__submit-btn').attr('disabled', true);
    //     }
    // });


    $('.forms__input[type="text"], .forms__textarea, .forms__input[type="email"]').focus(function(){
        console.log('focus')
        $(this).parent('.forms__label').addClass('active')
    })

    $('.forms__input[type="text"], .forms__textarea, .forms__input[type="email"]').blur(function(){
        console.log('blur', $(this).val())
        if(!$(this).val()){
            $(this).parent('.forms__label').removeClass('active').addClass('error')
        }
    })
    $('.message-btn').click(function(e){
        e.preventDefault()
        fullpage_api.moveTo(11)
    })
    
    $('.confident__item svg').click(function(){
        $('.confident__slider').slick('next')
    })
    var filesWrapper = $('.forms__files')

    $(document).on('change','.forms__label-file input[type="file"]', function(){
        const $this = $(this) 
        const files = $this[0].files
        console.log(files)
        if ($('.file-item').length > 2 || files.length > 3){
            $this.parent('.forms__label').addClass('active')
            $this.siblings('.forms__file-name').text('Выбрано больше 3-х файлов')
            $('.forms__submit-btn').addClass('untach')
        }

            if (files){
                for (let i = 0; i < files.length; i++) {
                    filesWrapper.append(`
                    <div class="file-item">
                        <span class="file-name">${files[i].name}</span>
                        <div class="file-remove">x</div>
                    </div>
                    `)

                    if(files[i].size > 64000000){
                        $this.parent('.forms__label').addClass('active')
                        $('.forms__submit-btn').addClass('untach')
                        $this.siblings('.forms__file-name').text('Файл слишком большой')
                    }
                }
            } else{
            }
    });

    $(document).on('click', '.file-remove', function(e){
        $(this).parent('.file-item').remove()
        const $this = $(this) 
        const fileInput = $('.forms__label-file input[type="file"]') 
        const index = $this.index() - 1
        const dt = new DataTransfer()
        const files = fileInput[0].files
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            if (index !== i) dt.items.add(file)
            fileInput.files = dt.files
        }

        if ($('.file-item').length < 4){
            $('.forms__label-file').removeClass('active')
            $('.forms__file-name').text('')
            $('.forms__submit-btn').removeClass('untach')
        }
        console.log($('.file-item').length )
        
    })
})
// function fullpage_toggle(toggle, direction) {
//     $.fn.fullpage.setAllowScrolling(toggle, direction);
//     $.fn.fullpage.setKeyboardScrolling(toggle, direction);
// }

$('#fullpage').fullpage({
    licenseKey: '930B3D8E-64114A48-BE58EB40-E2698A87',
    scrollingSpeed: 600,
    scrollHorizontally: false,
    controlArrows: false,
    loopHorizontal: false,
    //scrollOverflow: false,
    bigSectionsDestination: top,
    normalScrollElements: '',
    //normalScrollElements: '.contacts',
    autoScrolling: false,
    // keyboardScrolling: true,
    // responsiveWidth: 1260,
    
    // parallax: false,
    // parallaxKey: 'YWx2YXJvdHJpZ28uY29tXzlNZGNHRnlZV3hzWVhnPTFyRQ==',
	// 	parallaxOptions: {
	// 		type: 'cover',
	// 		percentage: 62,
	// 		property: 'translate'
	// 	},
    afterResponsive: function(isResponsive){
        //console.log(isResponsive);
    },
    onLeave: function( origin, destination, direction){

        // if(destination.index == 0 || destination.index == 1 || destination.index == 2 || destination.index == 4 || destination.index == 5){
        //     fullpage_toggle(true);
        // }

        // if(destination.index == 3){
        //     fullpage_toggle(false);
        // }

        if(destination.index == 0){
            // $('#logo-btn svg').removeClass().addClass('index0')
            // $('#to-top-btn').removeClass('dark').addClass('active').removeClass('hide')
            $('body').addClass('animate-0')
            $('.development-video').trigger('play');
        }

        if(destination.index == 1){
            // $('#to-top-btn').addClass('dark').removeClass('active').addClass('hide')
            // $('#logo-btn svg').removeClass().addClass('index1')
            $('body').addClass('animate-1')
        }

        if(destination.index == 2){
            // $('#to-top-btn').removeClass('dark')
            // $('#logo-btn svg').removeClass().addClass('index2')
            $('body').addClass('animate-2')
        }

        if(destination.index == 3){
            // $('#to-top-btn').removeClass('dark')
            // $('#logo-btn svg').removeClass().addClass('index2')
            $('header').removeClass('hide')
            $('body').addClass('animate-3')
        }

        if(destination.index == 4){
            // $('#to-top-btn').removeClass('dark')
            // $('#logo-btn svg').removeClass().addClass('index2')
            $('body').addClass('animate-4')

            if($(window).width() < 768){
                $('header').addClass('hide')
            }
        }

        if(destination.index == 5){
            // $('#logo-btn svg').removeClass().addClass('index1')
            // $('#to-top-btn').addClass('dark')
            $('header').removeClass('hide')
            $('body').addClass('animate-5')
        }
        if(destination.index == 6){
            // $('#logo-btn svg').removeClass().addClass('index2')
            // $('#to-top-btn').removeClass('dark')
            $('header').removeClass('hide')
            $('body').addClass('animate-6')
        }

        if(destination.index == 7){
            // $('#logo-btn svg').removeClass().addClass('index2')
            // $('#to-top-btn').removeClass('dark')
            $('header').addClass('hide')
            $('body').addClass('animate-7')
        }

        if(destination.index == 8){
            // $('#logo-btn svg').removeClass().addClass('index1')
            // $('#to-top-btn').addClass('dark').removeClass('hide')
            $('header').removeClass('hide')
            $('body').addClass('animate-8')
            // $('#logo-btn').removeClass('active')
        }

        if(destination.index == 9){
            // $('#logo-btn svg').removeClass().addClass('index2')
            // $('#to-top-btn').addClass('dark').addClass('hide')
            $('header').addClass('hide')
            $('body').addClass('animate-9')
            // $('#logo-btn').addClass('active')
        }

        if(destination.index == 10){
            // $('#logo-btn svg').removeClass().addClass('index2')
            // $('#to-top-btn').addClass('dark').addClass('hide')
            $('header').addClass('hide')
            $('body').addClass('animate-10')
            // $('#logo-btn').addClass('active')
        }
    }
});



// $('.stages__slider').on('afterChange', function(event, slick, currentSlide) {
//     console.log(currentSlide)

//     if($(window).width() <1024){
//         if(currentSlide == 0){
//             fullpage_toggle(true,'up');
//         }
    
//         if(currentSlide == 6){
//             fullpage_toggle(true,'down');
//         }

//     } else{
//         if(currentSlide == 0){
//             fullpage_toggle(true,'up');
//         }
    
//         if(currentSlide == 2){
//             fullpage_toggle(true,'down');
//         }
//     }
    
// });

// $("#form1").submit(function(){
//     $.ajax({ 
//         type: "POST", 
//         url: "assets/php/form1.php",
//         data: $("#form1").serialize(),
//         success: function(html) { 
//             console.log('up')
//         }
//     });
//     $('#form1').trigger("reset");
//     return false;
// });


// Отправка данных на сервер
function send(event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response);
            console.log(json);
            
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                alert("Сообщение отправлено");
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
        // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
    }

    

        grecaptcha.ready(function () {
            grecaptcha.execute('6LecjL0aAAAAAN8Ffw7ZqwyZH6WtjxnaxBSIzwLS', { action: 'contact' }).then(function (token) {
                var recaptchaResponse = document.getElementById('recaptchaResponse');
                recaptchaResponse.value = token;
            });
        });