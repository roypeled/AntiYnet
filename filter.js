chrome.tabs.onUpdated.addListener(function(tabID, change, tab){
    if(/https:\/\/www\.facebook\.com\/ynetnews\//.test(tab.url)){
        chrome.tabs.insertCSS(tabID, {
            code: '#imgBeforeLike, .fb-like-div {display:none !important;} .mainDiv{ overflow:auto !important};',
            allFrames: true
        })
    }
})