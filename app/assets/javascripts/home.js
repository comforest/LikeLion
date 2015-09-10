jQuery(document).ready(function($) {
                console.log("starrt");
        $(".age-nav p").click(function(event){            
                var txt = $(this).text()[0];
                console.log('.age-' + txt);
                $('html, body').animate({scrollTop : $('.age-' + txt).offset().top}, 500);
        });
});
