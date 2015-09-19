jQuery(document).ready(function($) {
        //나이 이동하기
        $(".age-nav p").click(function(event){            
                var txt = $(this).text()[0];
                console.log('.age-' + txt);
                $('html, body').animate({scrollTop : $('.age-' + txt).offset().top}, 500);
        });
        
        // 실행계획 추가하기
        $(".add-plan-button").click(function(){
                var txt = $(this).next().val();
                var mthis = $(this);
                var sgid = mthis.attr("value");
                if(txt != ""){
                    $.ajax({
                        data: { content: txt, sgid: sgid},
                        url: "/home/add_doplan",
                        success: function(){
                            mthis.parent().prev().append(
        						'<div class="doplan-line">' +
        							txt +
        			                '<input type="checkbox" name="option">' +
        			                '<img src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672366-x-128.png" class="del_button" value="0">' +
        			                '<img src="http://goo.gl/ntkbMh" class="edit_button">' +
        						'</div>'
        					);
        					mthis.next().val("")
                            
                        }
                    });
                }
        });
       
       
       //실행계획 삭제하기
       
        $(".doplan-line .del_button").click(function(){
            var mthis = $(this);
            
            $.ajax({
                data: {gid: mthis.attr("value")},
                url: "/home/rm_doplan",
                success: function(){
                    mthis.parent().parent().remove();
                }
            });
        });
       
       //실행계획 수정하기
       
        $(".doplan-line .edit_button").click(function(){
            $(this).parent().hide();
            $(this).parent().next().show();
        });
       
        $(".doplan-line .edit_submit").click(function(){
            var mthis = $(this);
            var txt = mthis.prev().val();
            $.ajax({
                data: {gid: mthis.parent().attr("value"), txt: txt},
                url: "/home/edit_doplan",
                success: function(){
                    $(this).parent().prev().show();
                    $(this).parent().hide();
                    mthis.parent().prev().val(txt);
                }
            });
        });
       
        /* 큰목표추가하기부분 jQuery.. 근데 왜 안먹지 ㅠ*/
        
        
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
        
         /* 큰목표추가하기 jQuery 끝*/
         
         
         
         /*  새 페이지 목표 추가하기 */
         
         $('#write-small-goal .add_cate a').click(function(){
            console.log("test");
            var txt = $('#add_docate').val();
            console.log(txt);
            $('#biggoal .list .list-second').append(
			'<div class="list-item">' +
            '<div style= "background: #0ba29b;"> </div>' +
            '<div style="">' + txt + '</div>' +
            '<input type="checkbox">' +
            '</div>'
	    	);
         });
          
         
         
         /*  새 페이지 실행계획 추가하기 */
         
         $('#write-small-goal .add-plan img').click(function(){
            console.log("test");
            var txt = $('#add_dolist').val();
            console.log(txt);
            $('#plan-list .list-item').append(
			'<div class="doplan-line">' +
				txt +
                '<input type="checkbox" name="option">' +
                '<img src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672366-x-128.png" class="del_button" value="0">' +
                '<img src="http://goo.gl/ntkbMh" class="edit_button">' +
			'</div>'
	    	);
         });
         
         /*  새 페이지 실행계획 추가하기 끝 */
         
         
         
});

