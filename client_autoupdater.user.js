// ==UserScript==
// @name           ForumClient 2 [Alkar]
// @namespace      FelikZ
// @description    enjoy it :)
// @include        http://games.alkar.net/phpBB*
// ==/UserScript==
(function() 
{
	var root = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
	//----------------------------------
	var scr = root.document.createElement('script');
	scr.setAttribute('type', 'text/javascript');
	scr.setAttribute('src', 'https://sites.google.com/site/thefelikz/alkar_forum_client.user.js?attredirects=0');
	//----------------------------------
	var body = root.document.getElementsByTagName('body')[0];
	body.appendChild(scr);
})();