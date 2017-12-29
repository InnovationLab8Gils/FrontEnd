
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch("assets2/img/backgrounds/1.jpg");
    
    /*
        Forms show / hide
    */
    $('.show-register-form').on('click', function(){
    	if( ! $(this).hasClass('active') ) {
    		$('.show-login-form').removeClass('active');
    		$(this).addClass('active');
    		$('.login-form').fadeOut('fast', function(){
    			$('.register-form').fadeIn('fast');
    		});
    	}
    });
    // ---
    $('.show-login-form').on('click', function(){
    	if( ! $(this).hasClass('active') ) {
    		$('.show-register-form').removeClass('active');
    		$(this).addClass('active');
    		$('.register-form').fadeOut('fast', function(){
    			$('.login-form').fadeIn('fast');
    		});
    	}
    });
    
    /*
        Login form validation
    */
    $('.l-form input[type="text"], .l-form input[type="password"], .l-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.l-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    /*
        Registration form validation
    */
    $('.r-form input[type="text"], .r-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.r-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    
});
function bs_input_file() {
    $(".input-file").before(
        function() {
            if ( ! $(this).prev().hasClass('input-ghost') ) {
                var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0'>");
                element.attr("name",$(this).attr("name"));
                element.change(function(){
                    element.next(element).find('input').val((element.val()).split('\\').pop());
                });
                $(this).find("button.btn-choose").click(function(){
                    element.click();
                });
                $(this).find("button.btn-reset").click(function(){
                    element.val(null);
                    $(this).parents(".input-file").find('input').val('');
                });
                $(this).find('input').css("cursor","pointer");
                $(this).find('input').mousedown(function() {
                    $(this).parents('.input-file').prev().click();
                    return false;
                });
                return element;
            }
        }
    );
}
$(function() {
    bs_input_file();
});
