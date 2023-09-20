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
};

request.onupgradeneeded = function () {
    const db = request.result;
    const store = db.createObjectStore("cards", { keyPath: "id"});
    store.createIndex("card_set", ["set"], {unique: false});
    store.createIndex("set_favorite", ["set", "favorite"], {unique: false});
 };

 request.onsuccess = function () {
    const db = request.result;
    const transaction = db.transaction("cards", "readwrite");

    const store = transaction.objectStore("cards");
    const setIndex = store.index("card_set");
    const setFavorite = store.index("set_favorite");

    store.put( {id: 1, card_set: "Orgo", set_favorite: "true"});

    // store.put({ id: 1, color: "Red", make: "Toyota"});

    // const idQuery = store.get(1);
    // const colorQ = colorIndex.getAll("Red");

    const idQuery = store.get(1);
    const setQuery = store.getAll("Orgo");

    idQuery.onsuccess = function() {
        console.log('idQuery', idQuery.result);
    };

    setQuery.onsuccess = function() {
        console.log('setQuery', idQuery.result);
    };

    transaction.oncomplete = function() {
        db.close();
    };
 };

 const toggleMenuOpen = () => document.body.classList.toggle("open");