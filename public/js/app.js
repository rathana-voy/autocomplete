$(document).ready(function(){



	$('#search-id').autoComplete({
		minChars: 1,
		source: function(term, suggest){
		term = term.toLowerCase();
		var choices = ['ActionScript', 'AppleScript', 'Asp', 'Assembly', 'BASIC', 'Batch', 'C', 'C++', 'CSS', 'Clojure', 'COBOL', 'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'HTML', 'Java', 'JavaScript', 'Lisp', 'Perl', 'PHP', 'PowerShell', 'Python', 'Ruby', 'Scala', 'Scheme', 'SQL', 'TeX', 'XML'];
		alert($('#search-id').val());


		var suggestions = [];
		for (i=0;i<choices.length;i++)
		    if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
		     	suggest(suggestions);
		}
	});

});
