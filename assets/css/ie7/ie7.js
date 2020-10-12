/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-images': '&#xe90e;',
		'icon-book': '&#xe91f;',
		'icon-file-text': '&#xe922;',
		'icon-file-text2': '&#xe926;',
		'icon-file-picture': '&#xe927;',
		'icon-file-music': '&#xe928;',
		'icon-file-play': '&#xe929;',
		'icon-cart': '&#xe93a;',
		'icon-phone': '&#xe942;',
		'icon-location': '&#xe947;',
		'icon-search': '&#xe986;',
		'icon-list2': '&#xe9bb;',
		'icon-menu': '&#xe9bd;',
		'icon-download3': '&#xe9c7;',
		'icon-sphere': '&#xe9c9;',
		'icon-link': '&#xe9cb;',
		'icon-bookmark': '&#xe9d2;',
		'icon-cross': '&#xea0f;',
		'icon-checkmark': '&#xea10;',
		'icon-checkbox-checked': '&#xea52;',
		'icon-checkbox-unchecked': '&#xea53;',
		'icon-mail3': '&#xea85;',
		'icon-facebook': '&#xea90;',
		'icon-instagram': '&#xea92;',
		'icon-twitter': '&#xea96;',
		'icon-dribbble': '&#xeaa7;',
		'icon-github': '&#xeab0;',
		'icon-appleinc': '&#xeabe;',
		'icon-file-pdf': '&#xeadf;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
