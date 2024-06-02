<<<<<<< HEAD
  import BandSiteApi from "./band-site-api.js";
  import BAND_API_KEY from "./band-site-api.js";

  const bandApi = new BandSiteApi(BAND_API_KEY);
  console.log(await bandApi.getComments());
  const allComments = await bandApi.getComments();
  allComments.forEach(async (item)=>{
    console.log(item.id);
    if (item.id === "a1e691ee-2d54-4a60-a3bc-4bfdadd7e81f")
    await bandApi.deleteComment(item.id);
    console.log(await bandApi.getComments());
  })
  
=======
const existingComments = [
    { fullName: "Victor Pinto", 
      date:"11/02/2023",
      image:{
        URL: "",
        description: "Mercury plain background"
      },
      comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    { fullName: "Christina Cabrera", 
      date:"10/28/2023", 
      image:{
        URL: "",
        description: "Mercury plain background"
      }, 
      comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    { fullName: "Isaac Tadesse", 
      date:"10/20/2023" , 
      image:{
        URL: "",
        description: "Mercury plain background"
      }, 
      comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
];

    const inputValues = document.getElementById("fullName");
    inputValues.addEventListener("click",()=>{
        inputValues.value = "";
    })

    const textValues = document.getElementById("comment");
    textValues.addEventListener("click",()=>{
        textValues.value = "";
    })
>>>>>>> 60bddbf9c7713edda913d6eba00bfdf039887788


  // Function to create an element with a specified class
  function createElementWithClass(tag, className) {
    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    return newElement;
  }

<<<<<<< HEAD
  function removeElements(className) {
    const removeElement = document.querySelectorAll(className);
    removeElement.forEach((element)=>{
      element.remove();
    });
  }

  function dynamicTimeStamp (timestamp){
    const current = new Date();
    const datePosted = new Date(timestamp)
    let postedAgo = "";
    const diff = Math.floor((current-datePosted)/1000);

    let yearInterval = Math.floor(diff/(60*60*24*365));
    let monthInterval = Math.floor(diff/(60*60*24*30));
    let weekInterval = Math.floor(diff/(60*60*24*7));
    let dayInterval = Math.floor(diff/(60*60*24));
    let hourInterval = Math.floor(diff/(60*60));
    let minuteInterval = Math.floor(diff/(60));
    let secInterval = Math.floor(diff/(1));

    //if the date is years ago, then print the date
    if (yearInterval > 1){
      let year = datePosted.getFullYear();
      let month = String(datePosted.getMonth()+1).padStart(2,"0");
      let day = String(datePosted.getDate()).padStart(2,"0");
      return (month+"/"+day+"/"+year)
    }

    if (monthInterval > 1){
      return monthInterval+" "+"months ago";
    }

    if (weekInterval > 1){
      return weekInterval+" "+"weeks ago";
    }

    if (dayInterval > 1){
      return dayInterval+" "+"days ago";
    }

    if (hourInterval > 1){
      return hourInterval+" "+"hours ago";
    }

    if (minuteInterval > 1){
      return minuteInterval+" "+"mins ago";
    }

    if (secInterval >= 0){
      return secInterval+" "+"secs ago";
    }
  }

  //Function to create comment element for each person
  function createCommentElement(commentObj) {

=======

  //function to format the date
  function dateFormattor(){
    let current = new Date();
    let year = current.getFullYear();
    let month = String(current.getMonth()+1).padStart(2,"0");
    let day = String(current.getDate()).padStart(2,"0");

    return (month+"/"+day+"/"+year)
  }
  
  //Function to create comment element for each person
  function createCommentElement(commentObj) {
>>>>>>> 60bddbf9c7713edda913d6eba00bfdf039887788
    const commentContainerElement = createElementWithClass("article", "posted-comments__container");
  
    // Create and append avatar element
    const avatarDiv = createElementWithClass("div","posted-comments__container__avatar");
    const avatarElement = createElementWithClass("img");

<<<<<<< HEAD
=======
    if(commentObj.image.url !== undefined){
        avatarElement.src = commentObj.image.url;
        avatarElement.alt = commentObj.image.description;
    }
>>>>>>> 60bddbf9c7713edda913d6eba00bfdf039887788
    avatarDiv.appendChild(avatarElement);
    commentContainerElement.appendChild(avatarDiv);
  
    // Create and append comment content container
    const commentContentElement = createElementWithClass("div", "posted-comments__container__inputs");
  
    // Create and append time element
    const dateElement = createElementWithClass("h3","posted-comments__container__inputs__time");
<<<<<<< HEAD
    const dateElementContent = dynamicTimeStamp(commentObj.timestamp);
    dateElement.innerText = dateElementContent;
=======
    dateElement.innerText = commentObj.date;
>>>>>>> 60bddbf9c7713edda913d6eba00bfdf039887788
    commentContentElement.appendChild(dateElement);

    // Create and append name element
    const nameElement = createElementWithClass("h3","posted-comments__container__inputs__name");
<<<<<<< HEAD
    nameElement.innerText = commentObj.name;
=======
    nameElement.innerText = commentObj.fullName;
>>>>>>> 60bddbf9c7713edda913d6eba00bfdf039887788
    commentContentElement.appendChild(nameElement);
  
    // Create and append comment element
    const commentElement = createElementWithClass("p", "posted-comments__container__inputs__comment");
    commentElement.innerText = commentObj.comment;
    commentContentElement.appendChild(commentElement);
<<<<<<< HEAD

    // Create and append like button element
    const buttonContainer = createElementWithClass("div","posted-comments__container__inputs__buttons");

    const likeButtonContainer = createElementWithClass("div","posted-comments__container__inputs__buttons__button");
    const likeButtonElement = createElementWithClass("button", commentObj.id);
    likeButtonElement.innerText = "LIKE";
    likeButtonContainer.appendChild(likeButtonElement);

    const likeTextElement = createElementWithClass("h3","posted-comments__container__inputs__buttons__button__like-text")
    likeTextElement.innerText = commentObj.likes+" "+"likes";
    likeButtonContainer.appendChild(likeTextElement);

    buttonContainer.appendChild(likeButtonContainer);

    const deleteButtonContainer = createElementWithClass("div","posted-comments__container__inputs__buttons__button");
    const deleteButtonElement = createElementWithClass("button", commentObj.id);
    deleteButtonElement.innerText = "DELETE";
    deleteButtonContainer.appendChild(deleteButtonElement);

    buttonContainer.appendChild(deleteButtonContainer);

    commentContentElement.appendChild(buttonContainer);
=======
>>>>>>> 60bddbf9c7713edda913d6eba00bfdf039887788
    
    // Append the comment content to the comment container
    commentContainerElement.appendChild(commentContentElement);

    return commentContainerElement;
  }
  
  // Function to display the existing comments
  function displayComment(comment) {
    const commentContainer = document.querySelector(".posted-comments");
    //Create and append hr element
<<<<<<< HEAD
    const hrElement = createElementWithClass("hr");
=======
    const hrElement = document.createElement("hr");
>>>>>>> 60bddbf9c7713edda913d6eba00bfdf039887788
    commentContainer.appendChild(hrElement);
    
    for (let i = 0; i < comment.length; i++) {
        const commentItem = comment[i];
        const commentElement = createCommentElement(commentItem);
        commentContainer.appendChild(commentElement);

        //Create and append hr element
<<<<<<< HEAD
        const hrElement = createElementWithClass("hr");
=======
        const hrElement = document.createElement("hr");
>>>>>>> 60bddbf9c7713edda913d6eba00bfdf039887788
        commentContainer.appendChild(hrElement);
    }
  }
  
  //Function to add a new comment
<<<<<<< HEAD
  async function addNewComment(event) {
    event.preventDefault(); // Prevent the default form submission

    if(document.querySelectorAll("hr").length > 0){
      removeElements("hr");
    }

    if(document.querySelectorAll(".posted-comments__container").length > 0){
        removeElements(".posted-comments__container");
    }

    const form = event.target;
    const name = form.fullName.value;
    const comment = form.comment.value;

    // Create a new coment object
    const newComment = {
      name: name,
      comment: comment,
    };

    const newCommentFromApi = await bandApi.postComment(newComment);
  
    displayComment(await bandApi.getComments());

    form.reset(); // Reset the form fields
  }

  async function likeDeleteButton (event){
    event.target.closest("button");
    const commentId = event.target.closest("button").className;
    const buttonText = event.target.closest("button").innerText;

    if (buttonText === "DELETE"){
      const allComments = await bandApi.getComments();
      allComments.forEach(async (item)=>{
        console.log(item.id);
        if (item.id === commentId){
          await bandApi.deleteComment(item.id);
          console.log(await bandApi.getComments());
          if(document.querySelectorAll("hr").length > 0){
            removeElements("hr");
          }
          if(document.querySelectorAll(".posted-comments__container").length > 0){
            removeElements(".posted-comments__container");
          }
          //console.log(await bandApi.getComments());
          displayComment(await bandApi.getComments());
        }
      })
    }else if (buttonText === "LIKE"){
      await bandApi.likeComment(commentId);
      const allComments = await bandApi.getComments();
      allComments.forEach(async (item)=>{
        if (item.id === commentId){
          console.log("Added a like");
          if(document.querySelectorAll("hr").length > 0){
            removeElements("hr");
          }
      
          if(document.querySelectorAll(".posted-comments__container").length > 0){
              removeElements(".posted-comments__container");
          }
  
          displayComment(await bandApi.getComments());
        }
      })
    }
  }

  // Add event listener to the form for submitting a new comment
  const newCommentForm = document.querySelector(".comments__form");
  newCommentForm.addEventListener("submit", addNewComment);

  document.body.addEventListener("click",likeDeleteButton);


  
=======
  function addNewComment(event) {
    event.preventDefault(); // Prevent the default form submission

    const image = document.querySelector("img")
    
    const form = event.target;
    const name = form.fullName.value;
    const comment = form.comment.value;
    const imageURL = form.imgSRC.value;
    const date = dateFormattor();

    // Create a new coment object
    const newComment = {
      fullName: name,
      comment: comment,
      image: {
        url: imageURL,
        description: `Head shot of ${name}`,
      },
      date: date,
    };
  
    // Create and append the new comment
    const commentElement = createCommentElement(newComment);
    const commentContainer = document.querySelector(".posted-comments");
    commentContainer.appendChild(commentElement);
    
    //Create and append hr element
    const hrElement = document.createElement("hr");
    commentContainer.appendChild(hrElement);
  
    form.reset(); // Reset the form fields
  }
  
  // Call the function to display the existing comments
  displayComment(existingComments);
  
  // Add event listener to the form for submitting a new Simpson
  const newCommentForm = document.querySelector(".comments__form");
  newCommentForm.addEventListener("submit", addNewComment);
  

>>>>>>> 60bddbf9c7713edda913d6eba00bfdf039887788
