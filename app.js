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

    new WOW().init();


    $('.ba-category-wrapper').masonry({
        // options
        itemSelector: '.ba-category-item'
      });

      $('.ba-category-wrapper').isotope({

      });

      var filters = [];

      $('.ba-category-nav-item').on( 'click', 'button', function() {
        $(this).toggleClass('active');
        
        var isChecked = $(this).hasClass('active'),
            filter = $(this).attr('data-filter');

        if (isChecked){
            addFilter(filter)
        } else {
            removeFilter(filter)
        }

        $('.ba-category-wrapper').isotope({
             filter: filters.join(',') 
            });
      });

      function addFilter(filter){
          if ( filters.indexOf( filter ) == -1 ){
              filters.push( filter );
             
          }
      }

      function removeFilter(filter){
          var index = filters.indexOf(filter);
          if(index != -1){
              filters.splice(index, 1);
          }
      }

    //    slider
    $('.ba-slider').slick({
        slidesToShow: 4,
        autoplay: false,
        infinite: false,
        dots: true
    });

  
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

