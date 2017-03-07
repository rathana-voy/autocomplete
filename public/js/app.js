$(document).ready(function(){



	$('#search-id').autoComplete({
		minChars: 1,
		source: function(term, response){
			term = term.toLowerCase();
			var choices = ['ActionScript', 'AppleScript', 'Asp', 'Assembly', 'BASIC', 'Batch', 'C', 'C++', 'CSS', 'Clojure', 'COBOL', 'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'HTML', 'Java', 'JavaScript', 'Lisp', 'Perl', 'PHP', 'PowerShell', 'Python', 'Ruby', 'Scala', 'Scheme', 'SQL', 'TeX', 'XML'];
		
			$.ajax({
	            dataType: "json",
	            type : 'POST',
	            url: 'http://localhost:8080/api/dictionary/'+term+'/15',
	            /*header:{"Authorization":"Basic S0FfS1BTOktBX0tQUw=="},*/
	            beforeSend: function(xhr){
	            	xhr.setRequestHeader('Authorization', 'Basic S0FfS1BTOktBX0tQUw==');
	            },
	            success: function(data) {
	                $('#search-id').removeClass('ui-autocomplete-loading');  
	                // hide loading image
	                console.log(data)

					var suggestions = [];
					if(data.DATA!=null){
						for (i=0;i<data.DATA.length;i++)
						    if (~data.DATA[i].KEYWORD.toLowerCase().indexOf(term)) suggestions.push(data.DATA[i].KEYWORD +" ("+data.DATA[i].MIAN_OR_SUBCATEGORY_NAME+")" );
						     	response(suggestions);
					}else{
						suggestions=[];
						response(suggestions);
					}
	            },
	            error: function(data) {
	            	console.log(data);
	                $('#search-id').removeClass('ui-autocomplete-loading');  
	            }
	        });

			/*var suggestions = [];
			for (i=0;i<choices.length;i++)
			    if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
			     	suggest(suggestions);*/
		}
	});

	/*$( "#search-id" ).autocomplete({
		minChars: 1,
	    source: function( request, response ) {
	    	request = request.toLowerCase();
	    	alert(request);
	        $.ajax({
	            dataType: "json",
	            type : 'Get',
	            url: 'http://localhost:8080/api/dictionary/'+request+'/15',
	            header:{"Authorization":"Basic S0FfS1BTOktBX0tQUw=="},
	            success: function(data) {
	                $('input.suggest-user').removeClass('ui-autocomplete-loading');  
	                // hide loading image

	                response( $.map( data, function(item) {
	                    // your operation on data
	                }));
	            },
	            error: function(data) {
	                $('input.suggest-user').removeClass('ui-autocomplete-loading');  
	            }
	        });
	    }
	});*/

});
