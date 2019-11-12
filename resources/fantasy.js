let books = [
    {
        author: "J.K.Rowling",
        title: "The Philosopher's Stone",
        release: "1997",  
        description: "First book of the series.",
        pages: 310,
    },
    {
        author: "J.K.Rowling",
        title: "The Chamber of Secrets",
        release: "1998",  
        description: "Second book of the series.",
        pages: 341,
    },
    {
        author: "J.K.Rowling",
        title: "The Prisoner of Azkaban",
        release: "1999",  
        description: "Third book of the series.",
        pages: 435,
    },
    {
        author: "J.K.Rowling",
        title: "The Goblet of Fire",
        release: "2000",  
        description: "Fourth book of the series.",
        pages: 734,
    },
    {
        author: "J.K.Rowling",
        title: "The Order of the Phoenix",
        release: "2003",  
        description: "Fifth book of the series.",
        pages: 870,
    },
    {
        author: "J.K.Rowling",
        title: "The Half-Blood Prince",
        release: "2005",  
        description: "Sixth book of the series.",
        pages: 652,
    },
    {
        author: "J.K.Rowling",
        title: "The Deathly Hallows",
        release: "2007",  
        description: "Seventh book of the series.",
        pages: 758,
    },
]

let input = document.querySelector("input")
let searchResult





let submitButton = document.createElement("button");
submitButton.innerText = "Submit"
document.querySelector(".fantasy").appendChild(submitButton);

function checkTitle (books, input){
    let temp = []   
    for (let i= 0; i< books.length; i++){
        let currentBooks = books[i].title.toLowerCase()
        let currentInput = input.toLowerCase()
        if (currentBooks.includes (currentInput)){  //input.value
            temp.push (books[i])
        }
    }        
    return temp
}
//console.log (checkTitle(books, input))



function render (books){
    document.querySelector("ul").remove()
    let list = document.createElement ("ul")
    document.querySelector(".book-list").appendChild(list)
    for (let item of books){
        let listItem = document.createElement ("li")
        listItem.innerText = item.title
        list.appendChild(listItem)
        console.log(listItem)
        
        
        //build virtual DOM and show bookinfo
        listItem.addEventListener("click", function (){
            document.querySelector("ul").remove()
            //document.querySelector(".book-info").remove()
            
            let leftBtn = document.createElement("button")
            leftBtn.classList.add("book-button-left")
            leftBtn.innerText = "<"
            document.querySelector(".thing-3").appendChild(leftBtn);
            console.log(listItem.innerText)
            let currentBook = searchResult.find(function(element) {
                return element.title == listItem.innerText;
            });

            let currentIndex = books.indexOf(currentBook);
              console.log(currentIndex)
              
              

              leftBtn.addEventListener("click", function(){
                  if (currentIndex == 0) {
                    currentIndex = books.length - 1;
                } else {
                    currentIndex--;
                }

                renderBook(c, books[currentIndex]); 
                 
            })
            let rightBtn = document.createElement("button")
            rightBtn.classList.add("book-button-right")
            rightBtn.innerText = ">"
            document.querySelector(".thing-3").appendChild(rightBtn);


            rightBtn.addEventListener("click", function(){
               if (currentIndex  >= books.length-1){
                currentIndex = 0 
              } else {
                  currentIndex++;
              }

              renderBook(c, books[currentIndex]); 
               
          })

            renderBook(c, item)
        })
        
        
    }

    
}


function renderBook (article, books){
    
    let oldBook = article.querySelector(".book-card")
    if(oldBook != null){
        oldBook.remove()
    }

    

    let bookCard = document.createElement ("div")
    bookCard.classList.add("book-card")
    article.append(bookCard); 
    
    let info = document.createElement ("div")
    info.classList.add("book-info")
    bookCard.appendChild(info);  
    
    let bookTitle = document.createElement("h2")
    bookTitle.innerText = books.title
    info.appendChild(bookTitle);
    
    
    let bookAuthor = document.createElement("h3")
    bookAuthor.innerText = books.author
    info.appendChild(bookAuthor);
    
    let bookRelease = document.createElement ("p")
    bookRelease.innerText = books.release
    info.appendChild(bookRelease);
    
    let bookPages = document.createElement ("p")
    bookPages.innerText = books.pages
    info.appendChild(bookPages);
    
    let bookDescription = document.createElement ("p")
    bookDescription.innerText = books.description  
    info.appendChild(bookDescription);
}

function bookInfo (event){
    searchResult = checkTitle(books, input.value) 
    if(searchResult.length != 0){    
        render(searchResult)
    } else{
        let error = document.querySelector("ul")
        error.innerText = "Book not found!" 
    }
}
submitButton.addEventListener ("click", bookInfo)



let a = document.querySelector("article.thing-2")



let c = document.querySelector("article.thing-3")