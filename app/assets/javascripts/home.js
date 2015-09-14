jQuery(document).ready(function($) {
                console.log("starrt");
        $(".age-nav p").click(function(event){            
                var txt = $(this).text()[0];
                console.log('.age-' + txt);
                $('html, body').animate({scrollTop : $('.age-' + txt).offset().top}, 500);
        });
        
        $('#goal_form').hide();
        $('#modify_done').hide();
        /*편집,완료 버튼*/
        $('#modify_button').click(function(){
            $('#modify_done').show();
            $('#modify_button').hide();
            
        });
        
        $('#modify_done').click(function(){
            $('#modify_button').show();
            $('#modify_done').hide();
            
        });
        /*편집,완료 버튼 끝*/
        
        /*새목표추가하기버튼*/
        $('#ad_button').click(function(){
            $('#goal_form').show();
            $('#ad_button').hide();
        });
        
        $('#plusbutton').click(
            function(){
                $.ajax({
                    data: { content: $('#new_goal_name').val() },
                    url: "/home/add_goal",
                    success: function(){
                        var goal = $('#new_goal_name').val();
                        $('#list_item').append('<div>'+  
        			                '<div style="display:inline-block;">'+'</div>'+
        			                '<div style="display:inline-block;">'+goal+'</div>'+
        			                '<div style="display:inline-block;">'+'<input type="checkbox">'+'</div>'+
        			            '</div>');
                        $('#new_goal_name').val('');
                        $('#new_goal_name').focus();
                        $('#ad_button').show();
                        $('#goal_form').hide();
                        
                    }
                });
            
        });
});
