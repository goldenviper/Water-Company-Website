


/* The lightbox code was built with help from the following website:

http://webdesign.tutsplus.com/articles/super-simple-lightbox-with-css-and-jquery--webdesign-3528

Thank You!
*/



//Problem: We want a nice, nifty lightbox to display on the screen as an overlay when a user clicks a photo.

//solution: We will insert the lightbox into the page using jquery and style it with css.

/* To do this, I have to complete the following steps:

    1) Prevent the browser from following the link by default
    
    2) Next, I have to check if the lightbox is "running"
    
        If So: Find and replace the existing image with the new one
        
        If Not: "run" the lightbox by inserting the markup dynamically, and then set the img to whatever link
        was clicked.
    
    3) Allow any click on the lightbox to close it.
*/

$('div.img a').click(function(e) {
    var $imgLink = $(this).attr("href");
	e.preventDefault();
		if ($('#lightbox').length > 0) { //is the lightbox currently up?
		$('#lightbox').fadeIn('slow');
		$('#content').html('<img src="'+ $imgLink +'" />');
		} else { // Create HTML markup for lightbox window
			var lightbox = '<div id="lightbox">' + '<p>Click to close</p>' + '<div id="content">' + '<img src="' + $imgLink + '" />' + '</div>' + '</div>';        
			//insert lightbox HTML into page
			$('body').append(lightbox).show('slow'); //adds it in slow mo
		}
});

$(#lightbox).live('click', function() {
		$('#lightbox').fadeOut("slow");
	});