// ==UserScript==
// @name           ForumClient 2 [Alkar]
// @namespace      FelikZ
// @description    enjoy it :)
// @include        http://games.alkar.net/phpBB*
// @version        2.0
// @author		   FelikZ ( http://thefelikz.blogspot.com/ )
// ==/UserScript==

(function() 
{
	var root = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
	//----------------------------------
	var scr = root.document.createElement('script');
	scr.setAttribute('type', 'text/javascript');
	scr.setAttribute('src', 'http://alkar-forum-client.googlecode.com/files/alkar_forum_client.user.js');
	//----------------------------------
	var body = root.document.getElementsByTagName('body')[0];
	body.appendChild(scr);
})();