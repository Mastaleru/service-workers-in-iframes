let makeRequest = function (requestPath) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", requestPath, true);

    xhr.onload = function () {

        if (xhr.readyState === 4 && xhr.status == "200") {
            console.log(xhr.responseText);

        }
    };
    xhr.send();
}

let makeRenameRequest = function (requestPath, appName) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", requestPath, true);

    xhr.onload = function () {

        if (xhr.readyState === 4 && xhr.status == "200") {
            console.log(xhr.responseText);

        }
    };
    xhr.send(JSON.stringify({name:appName}));
};