jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
   GitHubActivity.feed({
        username: "nikhilrane1992",
        selector: "#feed",
        limit: 7 // optional
    });
    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    GitHubCalendar(".github-graph", "nikhilrane1992");


});