
function translateOnClick(info, tab) 
{
    // Setup the callback function to show the translation
	window.translatecallback = function(response) {alert(response); };
	
	var appId = "66A8CA727C20371BED579D93DC7E476479EAC832";  //--- Replace your own API code here. Register at http://go.microsoft.com/?linkid=9782667
    var toLanguage = "en";
    
    // Encode the text and build the AJAX URL
    var textToTranslate = encodeURIComponent(info.selectionText);
    var translateUrl = "https://api.microsofttranslator.com/V2/Ajax.svc/Translate?to=" + toLanguage + "&oncomplete=translatecallback&appid=" + appId + "&text=" + textToTranslate;

    // Setup a script element with the required elements
    var s = document.createElement("script");
    s.src = translateUrl;
    document.getElementsByTagName("head")[0].appendChild(s);
}

var id = chrome.contextMenus.create({"title": "Translate to English...", 
                                        "contexts":["selection"],
                                        "onclick": translateOnClick});

