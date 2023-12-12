

function createElemWithText(stringElement = "p", stringContent = "", elementName){
    const myElement = document.createElement(stringElement)
    const elementContent = document.createTextNode(stringContent)
    myElement.appendChild(elementContent)
    if (elementName != null){
        myElement.classList.add(elementName)
    }

    return myElement
};

function createSelectOptions(users){
    let arrayOptions = []
  
    if(users = ""){
      return "undefined"
    } else{
      for(let i = 0; i < users.length; i++){
        let selectOption = document.createElement("option")
        selectOption.setAttribute("id", users.id)
        selectOption.text = users.name
        arrayOptions.push(selectOption[i])
      } return arrayOptions
    }
}

function toggleCommentSection(postId){
    const postComment = document.querySelector(postId)
    const classes = postComment.classList
    
    if(!postComment){
      return
    } else {postComment.addEventListener("click", () =>{
        const result = classes.toggle()
        postComment.textContent = "hide"
      });
    }
    return postComment
}

function toggleCommentButton(){
    const commentButton = document.querySelector(postId)
      
    return commentButton
}

function deleteChildElements(){
    let childElement = parentElement.lastElementChild
    while(parentElement.hasChildNodes()){
      parentElement.removeChild(parentElement.childNodes)
    }
  
    return parentElement
}

function addButtonListeners(){
    let buttons = document.querySelectorAll("button")
    if(!buttons){
      return 
    } else {
      buttons.addEventListener("click", () => {
        buttons.toggle()
      })
      
    }
}

function removeButtonListeners(){

}

function createComments(comments){
    let fragmentElement = document.createDocumentFragment(comments)
    for(let i = 0; fragmentElement != null; i++){
      let articleElement = document.createElement()
      let h3Element = createElemWithText("h3", comments.name)
      let paragraphElement = createElemWithText("p", comments.body)
      let paragraphElementTwo = createElemWithText("p", "From: ${comment.email}")
      if(!articleElement) return;
      const article = document.querySelector("article");
      article.append(h3Element, paragraphElement, paragraphElementTwo)
      fragmentElement.append(article)
    }
    return fragmentElement
}

function populateSelectMenu(users){
    let selectMenu = document.querySelector("#selectMenu")
    let selectOptions = document.createSelectOptions(users)
    while(selectOptions != null){
      selectMenu.append(selectOptions)
    }
    return selectMenu
}

const getUsers = async (userId) => {
    await fetch("https://jsonplaceholder.typicode.com/")
    
  }
  
  const getUserPosts = async (user) => {
    await fetch("https://jsonplaceholder.typicode.com/")
  }
  
  const getUser = async (userId) => {
    await fetch("https://jsonplaceholder.typicode.com/")
    
  };
  
  const getPostComments = async (postId) => {
    await fetch("https://jsonplaceholder.typicode.com/")
  };
  
  const displayComments = async (postId) => {
    
  };
  
  const createPosts = async (posts) => {
  
  };
  
  const displayPosts = async (posts) => {
  
  };
  
  function toggleComments(){
    
  };
  
  const refreshPosts = async (posts) => {
  
  };
  
  const selectMenuChangeEventHandler = async() => {
  
  };
  
  const initPage = async () => {
  
  };
  
  function initApp(initPage){
  
  };
  