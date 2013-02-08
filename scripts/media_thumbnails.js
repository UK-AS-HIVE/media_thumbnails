/*
var css = document.createElement('style');
css.type = 'text/css';
css.innerHTML = '
    	.media-thumbnail-animated #media-thumbnail-static, .media-thumbnail-static #media-thumbnail-animated {
    		display: none;
		}
		.media-thumbnail-animated #media-thumbnail-animated, .media-thumbnail-static #media-thumbnail-static {
    		display: inline;
		}';
document.body.appendChild(css);
*/


jQuery(function(){
	jQuery('div[id^=media-thumbnail-wrap-]').bind('mouseenter mouseleave', function() {
		jQuery(this).toggleClass('media-thumbnail-static');
		jQuery(this).toggleClass('media-thumbnail-animated');
	})
})