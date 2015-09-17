$(function(){
		 $('.age').html(moment("19941213", "YYYYMMDD").fromNow());
		 $('.coding').html(moment("20130601","YYYYMMDD").fromNow());
	   
		var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
		lineNumbers: true,
		styleActiveLine: true,
		matchBrackets: true,
		readOnly: true,
		theme: "monokai"
	  });
	    $('.enlarge').hover(function(){
				$(this).transition({ scale: 1.5});
			}, 
	        function () {
				$(this).transition({ scale: 1.0 });
			}
    	);
		$('.instagram').hover(function(){
       		$(this).css({"color":"#3f729b"});
	   	}, 
	        function () {
			$(this).css({"color":"#EEEEEE"});
	        }
    	);
	    $('.facebook').hover(function(){
       		$(this).css({"color":"#3b5998"});
	   	}, 
	        function () {
			$(this).css({"color":"#EEEEEE"});
	        }
    	);
		$('.twitter').hover(function(){
       		$(this).css({"color":"#8b9dc3"});
	   	}, 
	        function () {
			$(this).css({"color":"#EEEEEE"});
	        }
    	);
		$('.github').hover(function(){
       		$(this).css({"color":"#666666"});
	   	}, 
	        function () {
			$(this).css({"color":"#EEEEEE"});
	        }
    	);
		$('.gplus').hover(function(){
       		$(this).css({"color":"#dc4e41"});
	   	}, 
	        function () {
			$(this).css({"color":"#EEEEEE"});
	        }
    	);
});