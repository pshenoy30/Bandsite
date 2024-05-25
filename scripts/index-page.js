const existingComments = [
    { fullName: "Victor Pinto", 
      time:"11/02/2023",
      image:{
        URL: "",
        description: "Mercury plain background"
      },
      comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    { fullName: "Christina Cabrera", 
      time:"10/28/2023", 
      image:{
        URL: "",
        description: "Mercury plain background"
      }, 
      comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    { fullName: "Isaac Tadesse", 
      time:"10/20/2023" , 
      image:{
        URL: "",
        description: "Mercury plain background"
      }, 
      comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
];

    const inputValues = document.getElementById("fullName");
    inputValues.addEventListener("click",()=>{
        console.log("clicked on input field");
        inputValues.value = "";
    })

    const textValues = document.getElementById("comment");
    textValues.addEventListener("click",()=>{
        console.log("clicked on textarea");
        textValues.value = "";
    })


  // Function to create an element with a specified class
  function createElementWithClass(tag, className) {
    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    return newElement;
  }


  //function to format the date
  function dateFormattor(){
    let current = new Date();
    let year = current.getFullYear();
    let month = current.getMonth();
    let day = current.getDay();

    return (month+"/"+day+"/"+year)
  }
  
  //Function to create comment element for each person
  function createCommentElement(commentObj) {
    const commentContainerElement = createElementWithClass("article", "posted-comments__container");
  
    // Create and append avatar element
    const avatarDiv = createElementWithClass("div","posted-comments__container__avatar");
    const avatarElement = createElementWithClass("img");

    if(commentObj.image.url !== undefined){
        avatarElement.src = commentObj.image.url;
        avatarElement.alt = commentObj.image.description;
    }
    avatarDiv.appendChild(avatarElement);
    commentContainerElement.appendChild(avatarDiv);
  
    // Create and append comment content container
    const commentContentElement = createElementWithClass("div", "posted-comments__container__inputs");
  
    // Create and append time element
    const timeElement = createElementWithClass("h3","posted-comments__container__inputs__time");
    timeElement.innerText = commentObj.time;
    commentContentElement.appendChild(timeElement);

    // Create and append name element
    const nameElement = createElementWithClass("h3","posted-comments__container__inputs__name");
    nameElement.innerText = commentObj.fullName;
    commentContentElement.appendChild(nameElement);
  
    // Create and append comment element
    const commentElement = createElementWithClass("p", "posted-comments__container__inputs__comment");
    commentElement.innerText = commentObj.comment;
    commentContentElement.appendChild(commentElement);
    
    // Append the comment content to the comment container
    commentContainerElement.appendChild(commentContentElement);

    return commentContainerElement;
  }
  
  // Function to display the existing comments
  function displayComment(comment) {
    const commentContainer = document.querySelector(".posted-comments");
    for (let i = 0; i < comment.length; i++) {
        const commentItem = comment[i];
        const commentElement = createCommentElement(commentItem);
        commentContainer.appendChild(commentElement);

        //Create and append hr element
        const hrElement = document.createElement("hr");
        commentContainer.appendChild(hrElement);
    }
  }
  
  //Function to add a new comment
  function addNewComment(event) {
    event.preventDefault(); // Prevent the default form submission

    const image = document.querySelector("img")
    const timeElement = new Date();
    
    const form = event.target;
    const name = form.fullName.value;
    const comment = form.comment.value;
    const imageURL = form.imgSRC.value;
    const time = dateFormattor();

    // const time = moment(timeElement).fromNow();
    // console.log(time);
  
    // Create a new coment object
    const newComment = {
      fullName: name,
      comment: comment,
      image: {
        url: imageURL,
        description: `Head shot of ${name}`,
      },
      time: time,
    };
  
    // Create and append the new comment
    const commentElement = createCommentElement(newComment);
    console.log(commentElement);
    const commentContainer = document.querySelector(".posted-comments");
    commentContainer.appendChild(commentElement);
    
    //Create and append hr element
    const hrElement = document.createElement("hr");
    commentContainer.appendChild(hrElement);
  
    form.reset(); // Reset the form fields
  }
  
  // Call the function to display the existing Simpsons family
  displayComment(existingComments);
  
  // Add event listener to the form for submitting a new Simpson
  const newCommentForm = document.querySelector(".comments__form");
  newCommentForm.addEventListener("submit", addNewComment);
  

