$(document).ready(function(){

	/*$('#search-id').autoComplete({
		minChars: 1,
		source: function(term, response){
			term = term.toLowerCase();
			var choices = ['ActionScript', 'AppleScript', 'Asp', 'Assembly', 'BASIC', 'Batch', 'C', 'C++', 'CSS', 'Clojure', 'COBOL', 'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'HTML', 'Java', 'JavaScript', 'Lisp', 'Perl', 'PHP', 'PowerShell', 'Python', 'Ruby', 'Scala', 'Scheme', 'SQL', 'TeX', 'XML'];
		
			$.ajax({
	            dataType: "json",
	            type : 'POST',
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
		}
	});*/

	$(document).ready(function(){
	
		$('#search-id').autoComplete({
			minChars: 1,
			source: function(term, response){
				term = term.toLowerCase();
				$.ajax({
		            dataType: "json",
		            type : 'POST',
		            url: 'http://www.knongdai.com/api/dictionary/'+term+'/15',
		            beforeSend: function(xhr){
		            	xhr.setRequestHeader('Authorization', 'Basic S0FfS1BTOktBX0tQUw==');
		            },
		            success: function(data) {
		                $('#search-id').removeClass('ui-autocomplete-loading');  
		                // hide loading image
		                //console.log(data)

						var suggestions = [];
						if(data.DATA!=null){
							for (i=0;i<data.DATA.length;i++){
							    if (~data.DATA[i].KEYWORD +' '+ data.DATA[i].MIAN_OR_SUBCATEGORY_NAME.toLowerCase().indexOf(term)) suggestions.push(data.DATA[i]);
							     	response(suggestions);
							}
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

			},
			renderItem: function (item, search){
				console.log(item);
	            search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	            var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
	            return '<div class="autocomplete-suggestion" data-langname="'+item.KEYWORD+'" data-lang="'+item.MIAN_OR_SUBCATEGORY_NAME+'" data-val="'+search+'"> <span>'+ item.KEYWORD.replace(re, "<b>$1</b>")+' ('+item.MIAN_OR_SUBCATEGORY_NAME +')'+'</span></div>';
	        },
	        onSelect: function(e, term, item){
	        	$('#search-id').val(item.data('langname'));
	        }
		});
	});


});
