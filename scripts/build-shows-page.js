import BandSiteApi from "./band-site-api.js";
import BAND_API_KEY from "./band-site-api.js";

const bandApi = new BandSiteApi(BAND_API_KEY);

const showContentArray = ["DATE","VENUE","LOCATION"];

const buttonText = "BUY TICKETS";

const tabletView = window.matchMedia("(min-width: 767px)")

function createElementWithClass(tag, className1, className2) {
    const newElement = document.createElement(tag);
    newElement.classList.add(className1);
    newElement.classList.add(className2);
    return newElement;
}

 //function to format the date
 function dateFormattor(timestamp){
  let current = new Date(timestamp)
  let year = current.getFullYear();
  let month = String(current.getMonth()+1).padStart(2,"0");
  let day = String(current.getDate()).padStart(2,"0");

  return (month+"/"+day+"/"+year)
}

//Function to create shows in the mobile format
function showsElementMobile(showsObj,titleObj) {
    const showsElement = createElementWithClass("article", "shows-section__container");

    // Create and append comment content container
    const showsContainerElement = createElementWithClass("div", "shows-section__container__content");

    // Create and append date title
    const dateElement = createElementWithClass("h3","shows-section__container__content__title");
    dateElement.innerText = titleObj[0];
    showsContainerElement.appendChild(dateElement);

    // Create and append date content
    const dateElementContent = createElementWithClass("h3","shows-section__container__content__text", "shows-section__container__content__text--bold");
    const dateElementContentText = dateFormattor(showsObj.date);
    console.log(dateElementContentText);
    dateElementContent.innerText = dateElementContentText;
    showsContainerElement.appendChild(dateElementContent);

    // Create and append venue title
    const venueElement = createElementWithClass("h3","shows-section__container__content__title");
    venueElement.innerText = titleObj[1];
    showsContainerElement.appendChild(venueElement);

    // Create and append venue element
    const venueElementContent = createElementWithClass("h3","shows-section__container__content__text");
    venueElementContent.innerText = showsObj.place;
    showsContainerElement.appendChild(venueElementContent);

    // Create and append location title
    const locationElement = createElementWithClass("h3","shows-section__container__content__title");
    locationElement.innerText = titleObj[2];
    showsContainerElement.appendChild(locationElement);

    // Create and append location element
    const locationElementContent = createElementWithClass("h3","shows-section__container__content__text");
    locationElementContent.innerText = showsObj.location;
    showsContainerElement.appendChild(locationElementContent);

    // Create and append location element
    const buttonElement = createElementWithClass("button");
    buttonElement.innerText = buttonText;
    showsContainerElement.appendChild(buttonElement);

    // Append the comment content to the comment container
    showsElement.appendChild(showsContainerElement);

    return showsElement;
}

//Function to create shows in the tablet/desktop format
function showsElementTabletDesktop(showsObj,titleObj) {
  const showsTable = createElementWithClass("table", "shows-section__table");

  // Create and append comment content container
  const showsHeaderRow = createElementWithClass("tr", "shows-section__table__row");
 
  // Create and append row header
  for(let i = 0; i< titleObj.length; i++){
    const headerElement = createElementWithClass("th","shows-section__table__header");
    headerElement.innerText = titleObj[i];
    showsHeaderRow.appendChild(headerElement);
  }
  showsTable.appendChild(showsHeaderRow);

  showsObj.forEach(item => { 
    const showsElementContentRow = createElementWithClass("tr", "shows-section__table__row", "shows-section__table__row--border-bottom");
    
    // Create and append date element
    const dateElementContent = createElementWithClass("td","shows-section__table__row__text", "shows-section__table__row__text--bold");
    const dateElementContentText = dateFormattor(item.date);
    dateElementContent.innerText = dateElementContentText;
    showsElementContentRow.appendChild(dateElementContent);

    // Create and append venue element
    const venueElementContent = createElementWithClass("td","shows-section__table__row__text");
    venueElementContent.innerText = item.place;
    showsElementContentRow.appendChild(venueElementContent);

    // Create and append location element
    const locationElementContent = createElementWithClass("td","shows-section__table__row__text");
    locationElementContent.innerText = item.location;
    showsElementContentRow.appendChild(locationElementContent);

    // Create and append button element
    const buttonElementColumn = createElementWithClass("td");
    const buttonElement = createElementWithClass("button","shows-section__table__row__button");
    buttonElement.innerText = buttonText;
    buttonElementColumn.appendChild(buttonElement);
    showsElementContentRow.appendChild(buttonElementColumn);

    showsTable.appendChild(showsElementContentRow);
    }); 

  return showsTable;
}

// Function to display the shows
function displayShows(shows) {
    const showContainer = document.querySelector(".shows-section");
    
    if(tabletView.matches === false){
      for (let i = 0; i < shows.length; i++) {
        const showItem = shows[i];
        const showElement = showsElementMobile(showItem,showContentArray);
        showContainer.appendChild(showElement);

        //Create and append hr element
        const hrElement = document.createElement("hr");
        showContainer.appendChild(hrElement);
      }
    } else{
        const showElement = showsElementTabletDesktop(shows,showContentArray);
        showContainer.appendChild(showElement);
    }
  }

  displayShows(await bandApi.getShows());

  const tableElement = document.querySelector(".shows-section__table");
  tableElement.addEventListener("click", (event)=>{ 
    const rows = document.querySelector(".selected");
    if(rows !== null){
      rows.classList.remove("selected");
    }
    const row = event.target.closest("tr");
    row.classList.add("selected");
  });
