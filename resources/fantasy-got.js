//let input = document.querySelector("input")
let input = "dance"


async function getData(){
    let response = await fetch ( "https://www.anapioficeandfire.com/api/books/")
    let responseBody = await response.json()
    return responseBody
}



//function checkTitle (gotBooks, input){
    
    
    async function render(input){
        let list = await getData()
        let temp= []   
        for (let i= 0; i< list.length; i++){
            let currentBooks = list[i].name.toLowerCase()
            let currentInput = input.toLowerCase()
            if (currentBooks.includes (currentInput)){  //input.value
                temp.push (list[i])
                console.log(temp)
            }
            
            //async function renderBook(article, searchResult){
                //    let list = await getData()
                document.querySelector("ul").remove()
                let createList = document.createElement ("ul")
                document.querySelector('.gotTitle').appendChild(createList)
                for (let item of temp){
                    let tempItem = document.createElement ("li")
                    tempItem.innerText = temp.name
                    createList.appendChild(tempItem)
                    console.log(tempItem)
                    
                }        
                return temp
            }

    /*let ul = document.querySelector("ul") 
    let itemPrototype = document.querySelector ("li.prototype")
    for (let item of list){
        let newItem = document.createElement("li")
        let para = document.createElement("h1")
        para.classList.add("name")
        newItem.append(para)
        newItem.classList.remove("prototype")

        newItem.addEventListener ("click", async function getGameOfThrones(){
            document.body.querySelector(".authors").innerText = "Author: " + item.authors[0]
            document.body.querySelector(".pages").innerText = "Pages: " + item.numberOfPages 
            let date = strDate(item.released, 9, 0)
            document.body.querySelector(".released").innerText = "Release date: " + date
           
              
                
           
                 
        })
        let  p=newItem.querySelector("h1")
        p.innerText = item.name
        ul.append (newItem)  
     */
}


function strDate (oldDate, stop, start){
    let newDate = ""
    for (i=start; i<=stop; i++){
        newDate += oldDate[i]
    }
    return newDate
}







function bookInfo (event){
    searchResult = render(input.value) 
/*    if(searchResult.length != 0){    
        renderBook(searchResult)
    } else{
        let error = document.querySelector("ul")
        error.innerText = "Book not found!" 
    }
}
    //if(searchResult.length != 0){    
       
    //} else{
    //    let error = document.querySelector("ul")
    //    error.innerText = "Book not found!" 
    //}
*/
}

document.querySelector(".gotButton").addEventListener ("click", render)
