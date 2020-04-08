function createElement(data) {
    let par = document.createElement("p");
    let text = document.createTextNode(data);
    par.appendChild(text);
    document.body.appendChild(par);
}
function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`); 
        } else { // show the result
            let res = JSON.parse(xhr.response);
            let text = res.query.pages[21721040].extract
            callback(text)
        }
    };

}
queryWikipedia(createElement)