console.log("swApp1-v8");
let name = "NoName";


setTimeout(()=>fetch("http://localhost:4001/bootIframe/app1/extract"),5000);

self.addEventListener('activate', function (event) {
    console.log("Activate event", event);

});

self.addEventListener('fetch', function (event) {
    console.log("Fetch event for", name, event.request.url);

    if (event.request.url.endsWith("extract") && event.request.method === "GET") {
        event.respondWith(new Promise((resolve) => {
            var init = {"status": 200, "statusText": "Request was fullfilled"};
            var blob = new Blob([name], {type: "text"});
            let response = new Response(blob, init);
            resolve(response);
        }));
    }


    if (event.request.url.indexOf("rename") && event.request.method === "POST") {
        event.respondWith(new Promise((resolve) => {

            event.request.json().then(data => {
                name = data.name;

                var init = {"status": 200, "statusText": "Rename was fulfilled"};
                var blob = new Blob([""], {type: "text"});
                let response = new Response(blob, init);
                resolve(response);

            });
        }));
    }
});

