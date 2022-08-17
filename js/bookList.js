/*fetch("js/bookList.json")
.then(res => res.json())
.then(data => console.log(data));*/
const bookList = [];
const response = await fetch('js/bookList.json');
if (response.ok) {
    let json = await response.json();
    for(let i = 0; i < json.length; i++){
        if (json[i].active == true) {
        bookList.push(json[i]);
    }
    }
} else {
    alert (`HTTP-Error: ${response.status}`);
}
const bookGrid = document.getElementById("bookGrid");

for (let i = 0; i < bookList.length; i++) {
    let title = document.createElement('h3');
    title.innerHTML = bookList[i].title;
    let bookTile = document.createElement('div').appendChild(title);
    bookGrid.appendChild(bookTile);
    console.log(`Title ${i+1}: ${bookList[i].title}`);
}