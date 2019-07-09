console.log("Root","v1");



setTimeout(function(){
   fetch("bootIframe/app1/extract")
},5000);
self.addEventListener('fetch', function (event) {
    console.log("Event fetch in root",event);

    if (event.request.url.endsWith("parent") && event.request.method === "GET") {

    }


});