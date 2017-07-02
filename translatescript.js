function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    var xml = xmlHttp.responseXML;
    return xml.getElementsByTagName("definition")[0].textContent;
}
function translateOnClick(info, tab) 
{
	window.translatecallback = function(response) {alert(response); };
    var acronym = encodeURIComponent(info.selectionText);
    var translateUrl = "http://www.stands4.com/services/v2/defs.php?uid=5823&tokenid=ynpDGev3xVT3tmmu&word=" + acronym;
    alert(httpGet(translateUrl));
}
var id = chrome.contextMenus.create({"title": "Acronym...", 
                                        "contexts":["selection"],
                                        "onclick": translateOnClick});

