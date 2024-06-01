  import BandSiteApi from "./band-site-api.js";
  import BAND_API_KEY from "./band-site-api.js";

  const bandApi = new BandSiteApi(BAND_API_KEY);

  const inputValues = document.getElementById("fullName");
  inputValues.addEventListener("click",()=>{
      inputValues.value = "";
  })

  const textValues = document.getElementById("comment");
  textValues.addEventListener("click",()=>{
      textValues.value = "";
  })

  // Function to create an element with a specified class
  function createElementWithClass(tag, className) {
    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    return newElement;
  }

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
      console.log(monthInterval+" "+"months ago");
      return monthInterval+" "+"months ago";
    }

    if (weekInterval > 1){
      console.log(weekInterval+" "+"weeks ago");
      return weekInterval+" "+"weeks ago";
    }

    if (dayInterval > 1){
      console.log(dayInterval+" "+"days ago");
      return dayInterval+" "+"days ago";
    }

    if (hourInterval > 1){
      console.log(hourInterval+" "+"hours ago");
      return hourInterval+" "+"hours ago";
    }

    if (minuteInterval > 1){
      console.log(minuteInterval+" "+"mins ago");
      return minuteInterval+" "+"mins ago";
    }

    if (secInterval >= 0){
      console.log(secInterval+" "+"secs ago");
      return secInterval+" "+"secs ago";
    }
  }

  //Function to create comment element for each person
  function createCommentElement(commentObj) {
    const commentContainerElement = createElementWithClass("article", "posted-comments__container");
  
    // Create and append avatar element
    const avatarDiv = createElementWithClass("div","posted-comments__container__avatar");
    const avatarElement = createElementWithClass("img");

    avatarDiv.appendChild(avatarElement);
    commentContainerElement.appendChild(avatarDiv);
  
    // Create and append comment content container
    const commentContentElement = createElementWithClass("div", "posted-comments__container__inputs");
  
    // Create and append time element
    const dateElement = createElementWithClass("h3","posted-comments__container__inputs__time");
    const dateElementContent = dynamicTimeStamp(commentObj.timestamp);
    console.log(dateElementContent);
    dateElement.innerText = dateElementContent;
    commentContentElement.appendChild(dateElement);

    // Create and append name element
    const nameElement = createElementWithClass("h3","posted-comments__container__inputs__name");
    nameElement.innerText = commentObj.name;
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
    //Create and append hr element
    const hrElement = createElementWithClass("hr");
    commentContainer.appendChild(hrElement);
    
    for (let i = 0; i < comment.length; i++) {
        const commentItem = comment[i];
        const commentElement = createCommentElement(commentItem);
        commentContainer.appendChild(commentElement);

        //Create and append hr element
        const hrElement = createElementWithClass("hr");
        commentContainer.appendChild(hrElement);
    }
  }
  
  //Function to add a new comment
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
  
  // Add event listener to the form for submitting a new comment
  const newCommentForm = document.querySelector(".comments__form");
  newCommentForm.addEventListener("submit", addNewComment);
