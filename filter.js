chrome.tabs.onUpdated.addListener(function(tabID, change, tab){
    if(/https:\/\/www\.facebook\.com\/ynetnews\//.test(tab.url)){
        chrome.tabs.insertCSS(tabID, {
            code: '#imgBeforeLike, .fb-like-div {display:none !important;} .mainDiv{ overflow:auto !important};',
            allFrames: true
        })

        // Sometimes it takes time for the iframe to load, so I'll add a delay and try again

        setTimeout(function(){
            chrome.tabs.insertCSS(tabID, {
                code: '#imgBeforeLike, .fb-like-div {display:none !important;} .mainDiv{ overflow:auto !important};',
                allFrames: true
            })
        }, 5000);
    }
})