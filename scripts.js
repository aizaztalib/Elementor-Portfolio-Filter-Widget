/* --------------------------------------------------
	* projects filter isotope
	* --------------------------------------------------*/
         
    var projectsFilter = function () {
        function updateFilter() {
            $('.project_filters a').each(function() {
                var data_filter = this.getAttribute('data-filter');
                var num = $(this)
                    .closest('.project-filter-wrapper')
                    .find('.project-item')
                    .filter(data_filter).length;
                $(this)
                    .find('.filter-count')
                    .text( num );
            });
        }
        $('.projects-grid').each( function(){
            var $container = $(this); 
            $container.imagesLoaded(function(){
                $container.isotope({ 
                    itemSelector : '.project-item', 
                    animationEngine : 'css',
                    masonry: {
                        columnWidth: '.grid-sizer'
                    },
                    isOriginLeft: rtl_isotop(),
                });
            });
    
            var $optionSets  = $(this).closest('.project-filter-wrapper').find('.project_filters'),
                $optionLinks = $optionSets.find('a');
    
            $optionLinks.on('click', function(){
                var $this = $(this);
    
                if ( $this.hasClass('selected') ) {
                    return false;
                }
                var $optionSet = $this.parents('.project_filters');
                    $optionSet.find('.selected').removeClass('selected');
                    $this.addClass('selected');
    
                var selector = $(this).attr('data-filter');
                    $container.isotope({ 
                        filter: selector 
                    });
                return false;
            });
            /* popup gallery */
            if( $container.hasClass('img-popup') ){
                $('.img-popup').lightGallery({
                    selector: '.projects-thumbnail',
                    share: false,
                    pager: false,
                    thumbnail: false
                });
            }
            /* count filters */
            updateFilter();
        });
    };