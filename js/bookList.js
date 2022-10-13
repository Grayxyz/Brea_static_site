/*fetch("js/bookList.json")
.then(res => res.json())
.then(data => console.log(data));*/
const bookList = [];
const response = await fetch('js/bookList.json');
if (response.ok) {
    let json = await response.json();
    for(let i = 0; i < json.length; i++){
        if (json[i].active == true && json[i].coverImage !== "") {
        bookList.push(json[i]);
    } else {
        console.log(`${json[i].title} active: ${json[i].active}`);
        }
    }
} else {
    alert (`HTTP-Error: ${response.status}`);
    }
const bookGrid = document.getElementById("bookGrid");

for(let i = 0; i < bookList.length; i++) {
    if(bookList[i].series == "Minnesota Raiders Novel" || bookList[i].series == "Arizona Rattlesnakes Novel"){
        console.log("this title has been removed at the request of Pippa Grant.")
    }
    let tile = document.createElement('div');
    let cover = bookList[i].coverImage;
    cover = cover.replace("https://breaviragh.com", "..");
    tile.innerHTML = `<h4>${bookList[i].title}</h4><img src="${cover}" alt="${bookList[i].title} cover image">`;
    function bookPage() {
        window.open(bookList[i].amazon, '_blank');
    }
    tile.addEventListener("click", bookPage);
    tile.className = 'bookTile';
    bookGrid.appendChild(tile);
}