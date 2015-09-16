        jQuery(document).ready(function($) {
        $(".age-nav p").click(function(event){            
                var txt = $(this).text()[0];
                console.log('.age-' + txt);
                $('html, body').animate({scrollTop : $('.age-' + txt).offset().top}, 500);
        });
        
        
        $(".add-plan-button").click(
            function(){
                var txt = $(this).next().val();
                var mthis = $(this);
                $.ajax({
                    data: { content: txt, sgid: mthis.attr("value")},
                    url: "/home/add_doplan",
                    success: function(){
                        console.log(mthis.parent().prev().attr("class"));
                        mthis.parent().prev().append(
    						'<div class="doplan-line">' +
    							txt +
    			                '<input type="checkbox" name="option">' +
    			                '<img src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672366-x-128.png">' +
    			                '<img src="http://goo.gl/ntkbMh">' +
    						'</div>'
    					);
                        
                        console.log(mthis.parent().prev().attr("class"));
                    }
                });
        });
       
       
        /* 큰목표추가하기부분 jQuery.. 근데 왜 안먹지 ㅠ*/
        
        
        $('#goal_form').hide();
        $('#modify_done').hide();
        /*편집,완료 버튼*/
        $('#modify_button').click(function(){
            console.log("test");
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
        
         /* 큰목표추가하기 jQuery 끝*/
         
         
});
