 $(document).ready(function() {

    
    $('.btn').on('click', function(e){
        e.preventDefault();
        
        console.log($(this).closest('.ba-menu'));

        if ( $(this).closest('.ba-menu').length ){
            $('.ba-menu-list').removeClass('visually-hidden');
        }

    });

    $('.ba-gallery__img').on('click', function(e){
        
        var $imgSrc = $(this).attr('src');
        var $modalImage = $('<img>'); 
        $modalImage.attr('src', $imgSrc).addClass('modal__image');

        $('.modal-content-wrapper').append($modalImage);

        openModal();

    })
    var openModal = function(){
        $('.modal').show();

        $(document).on('keydown', function(e){
            if (e.keyCode == 27){
                closeModal();
            }
        })
    }

    var closeModal = function () {
        $('.modal').hide();
        $('.modal-content-wrapper').empty();
    }

    $('.modal-close').on('click', function(){
        closeModal();
    });

    $('.modal').mouseup(function (e){ // событие клика по веб-документу
		var div = $('.modal-content'); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
            closeModal();
		}
	});


    // var animateBlock = $('.sc-animate');

    // $(window).on('scroll', function(e){
    //     if($(this).scrollTop() > (animateBlock.offset().top - animateBlock.height() - 200) ){
    //         animateBlock.removeClass('sc-animate');
    //     }
    // })

    new WOW().init();

  
});




// $('.ba-slider').slick({
//     slidesToShow: 4,
//     slidesToScroll:2,
//     arrows: false,
//     infinite: false,
//     dots: true,
//     autoPlay: true,
//     appendDots: '.slider-nav'
// });

