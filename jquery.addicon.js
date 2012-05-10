/*
 * jquery.addicon.js
 * 
 * Editor Poundhound
 *
 * 利用方法は当ブログをご覧ください。
 * 
 * http://www.nk0206.com/life/
 * 
 * permalink
 * http://www.nk0206.com/life/2010/02/add_icon_plugin.html
 *
 */

(function($) {
	$.fn.addIcon = function(options) {		
		var o = $.extend({
			elem: 'a[href$=".pdf"], a[href$=".doc"], a[href$=".xls"], a[href$=".zip"]',
			iconPos: 'after',
			noIconClass: '.noIcon'
		}, options);
		
		$(o.elem).each(function() {
			var etx = $(this).attr('href');
			var docElem = $(this);
			
			if(etx.match(/.pdf$/)) {
				if(o.iconPos == 'after') {
					docElem.not(o.noIconClass).after('<span class="pdfAfter">&nbsp;</span>');
				} else if (o.iconPos == 'before') {
					docElem.not(o.noIconClass).before('<span class="pdfBefore">&nbsp;</span>');
				}
			} else if(etx.match(/.xls$/)) {
				if(o.iconPos == 'after') {
					docElem.not(o.noIconClass).after('<span class="xlsAfter">&nbsp;</span>');
				} else if (o.iconPos == 'before') {
					docElem.not(o.noIconClass).before('<span class="xlsBefore">&nbsp;</span>');
				}
			} else if(etx.match(/.doc$/)) {
				if(o.iconPos == 'after') {
					docElem.not(o.noIconClass).after('<span class="docAfter">&nbsp;</span>');
				} else if (o.iconPos == 'before') {
					docElem.not(o.noIconClass).before('<span class="docBefore">&nbsp;</span>');
				}
			} else if(etx.match(/.zip$/)) {
				if(o.iconPos == 'after') {
					docElem.not(o.noIconClass).after('<span class="zipAfter">&nbsp;</span>');
				} else if (o.iconPos == 'before') {
					docElem.not(o.noIconClass).before('<span class="zipBefore">&nbsp;</span>');
				}
			}
			
			$(o.elem).click(function() {
				this.target = "_blank";
			});
		});
		return this;
	}
	
})(jQuery);
