const indexedDB = 
    window.indexedDB || 
    window.mozIndexedDB || 
    window.webkitIndexedDB || 
    window.msIndexedDB || 
    window.shimIndexedDB;

const request = indexedDB.open("Database", 1);

request.onerror = function (event) {
    console.error("An error occured with IndexedDB");
    console.error(event);
}