let sWversion = "swRoot-v12";
console.log("Root", sWversion);


self.addEventListener('fetch', function (event) {
    console.log(sWversion,":File interceptat in root-sw", event.request.url);

    if (event.request.url.indexOf("index.html?app")>0) {
        event.respondWith(
            new Promise((resolve) => {
                    let search = new URL(event.request.url).search;

                    let appName = search.substring(1);

                    var init = {"status": 200, "statusText": "File was successfully extracted"};
                    var jsCode = scriptTxt.toString().substring(11,scriptTxt.toString().length-1);

                    var blob = new Blob(["<html><head></head><body><p>AppSinica#"+appName+"</p><script type='text/javascript'>"+jsCode+"</script></body></html>"], {type: 'text/html'});
                    let response = new Response(blob, init);
                    resolve(response);

            })
        )
    }


});