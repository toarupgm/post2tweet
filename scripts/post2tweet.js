var base = this.document.querySelector("#react-root");
var layer_n = 0;
var main_n = 0;
const obs = new MutationObserver(function(mutations,obs){
    for(const m of mutations) {
        var e = m.target;
        var layers = e.querySelector("#layers");
        if(layers)
        {
            if(layer_n==0)
            {
                const obs = new MutationObserver(function(mutations,obs){
                    for(const m of mutations) {
                        var e = m.target;
                        var tweetbtn_text = e.querySelector('div[data-testid="tweetButton"] > div > span > span');
                        if(tweetbtn_text)
                        {
                            tweetbtn_text.innerText = "ツイートする";
                        }
                    }
                });
                obs.observe(layers,{childList:true,subtree:true});

                layer_n++;
            }
        }
        
        var tweetbtn = e.querySelector('a[data-testid="SideNav_NewTweet_Button"]');
        if(tweetbtn)
        {
            tweetbtn.querySelector("span > span").innerText = "ツイートする";
        }
        
        var tweetbtn_inline = e.querySelector('div[data-testid="tweetButtonInline"] > div > span > span')
        if(tweetbtn_inline)
        {
            tweetbtn_inline.innerText = "ツイートする";
        }

        var draft_placeholder = e.querySelector('div.public-DraftEditorPlaceholder-inner');
        if(draft_placeholder)
        {
            draft_placeholder.innerText = "返信をツイート";
        }
        var timeline = e.querySelector('[aria-label="ホームタイムライン"] div > h2 > span');
        if(timeline)
        {
            timeline.innerText = "ツイート";
        }
    }
});
obs.observe(base,{childList:true,subtree:true});