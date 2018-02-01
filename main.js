function loadLink() {
	$.getJSON('http://anyorigin.com/go?url=https%3A//pastebin.com/archive&callback=?', function(data){
				var html = $.parseHTML(data.contents);

				var newestrow = $( data.contents ).find( "tr" ).eq(1);
				
				var newestcell = $( newestrow ).find( "td" ).eq(0);
				
				var newestlink = $( newestcell ).find( "a" );
				
				var newesthref = $(newestlink).attr('href');

				loadContent(newesthref);
				console.log(newesthref);
			});
}

function loadContent(newestlink) {
	$.getJSON('http://anyorigin.com/go?url=https%3A//pastebin.com/raw' + newestlink + '&callback=?', function(data){
				$('#queryResult').text(data.contents);
			});
}