let addInfo = document.querySelector(".books-container")
let item
let list
let currentIndex

async function getData(){
    let response = await fetch ( "https://www.anapioficeandfire.com/api/books/")
    let responseBody = await response.json()
    return responseBody
}

async function render(){
    let list = await getData()
    let ul = document.querySelector("ul") 
    let itemPrototype = document.querySelector ("li.prototype")
    for (let item of list){
        let newItem = document.createElement("li")
        let para = document.createElement("p")
        para.classList.add("name")
        newItem.append(para)
        let  p=newItem.querySelector("p")
        p.innerText = item.name
        ul.append (newItem)  
        newItem.classList.remove("prototype")
        let currentIndex = list.indexOf(item)
        newItem.addEventListener ("click", async function getGameOfThrones(){
            document.querySelector("ul").remove()
            
            let leftBtn = document.createElement("button")
            leftBtn.classList.add("book-button-left")
            leftBtn.innerText = "<"
            document.querySelector(".books-container").appendChild(leftBtn);
            leftBtn.addEventListener("click", function(){
                if (currentIndex == 0) {
                    currentIndex = list.length - 1;
                } else {
                    currentIndex--;
                } 
                renderBook(addInfo, list[currentIndex]);      
            })
            
            let rightBtn = document.createElement("button")
            rightBtn.classList.add("book-button-right")
            rightBtn.innerText = ">"
            document.querySelector(".books-container").appendChild(rightBtn);
            rightBtn.addEventListener("click", function(){
                if (currentIndex  >= list.length-1){
                    currentIndex = 0 
                } else {
                    currentIndex++;   
                } 
                renderBook(addInfo, list[currentIndex]);     
            })
            renderBook(addInfo, item)
        })   
    }         
} 

function renderBook(paramater1, parameter2){
    let oldBook = addInfo.querySelector(".book-card")
    if(oldBook != null){
        oldBook.remove()
    }
    
    let bookCard = document.createElement ("div")
    bookCard.classList.add("book-card")
    paramater1.appendChild(bookCard);  
    
    let info = document.createElement ("div")
    info.classList.add("book-info")
    bookCard.appendChild(info); 
    
    let bookTitle = document.createElement("h2")
    bookTitle.innerText = parameter2.name
    info.appendChild(bookTitle);
    
    let bookAuthor = document.createElement("h3")
    bookAuthor.innerText = "Author: " + parameter2.authors[0]
    info.appendChild(bookAuthor);
    
    let bookPages = document.createElement ("p")
    bookPages.innerText = "Pages: " + parameter2.numberOfPages 
    info.appendChild(bookPages);
    
    let date = strDate(parameter2.released, 9, 0)
    let bookRelease = document.createElement ("p")
    bookRelease.innerText = "Release date: " + date
    info.appendChild(bookRelease);
}

function strDate (oldDate, stop, start){
    let newDate = ""
    for (i=start; i<=stop; i++){
        newDate += oldDate[i]
    }
    return newDate
}

render()

