const showsContent = [
    { date: "Mon Sept 09 2024", 
      venue:"Ronald Lane",
      location: "San Francisco, CA",
    },
    { date: "Tue Sept 17 2024", 
      venue:"Pier 3 East",
      location: "San Francisco, CA"
    },
    { date: "Sat Oct 12 2024", 
      venue:"View Lounge",
      location: "San Francisco, CA",
    },
    { date: "Sat Nov 16 2024", 
      venue:"Hyatt Agency",
      location: "San Francisco, CA",
    },
    { date: "Fri Nov 29 2024", 
      venue:"Moscow Center",
      location: "San Francisco, CA",
    },
    { date: "Wed Dec 18 2024", 
      venue:"Press Club",
      location: "San Francisco, CA",
    }
];

const showContentArray = ["DATE","VENUE","LOCATION"];

const buttonText = "BUY TICKETS";

const tabletView = window.matchMedia("(min-width: 767px)")

function createElementWithClass(tag, className1, className2) {
    const newElement = document.createElement(tag);
    newElement.classList.add(className1);
    newElement.classList.add(className2);
    return newElement;
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
    dateElementContent.innerText = showsObj.date;
    showsContainerElement.appendChild(dateElementContent);

    // Create and append venue title
    const venueElement = createElementWithClass("h3","shows-section__container__content__title");
    venueElement.innerText = titleObj[1];
    showsContainerElement.appendChild(venueElement);

    // Create and append venue element
    const venueElementContent = createElementWithClass("h3","shows-section__container__content__text");
    venueElementContent.innerText = showsObj.venue;
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
    dateElementContent.innerText = item.date;
    showsElementContentRow.appendChild(dateElementContent);

    // Create and append venue element
    const venueElementContent = createElementWithClass("td","shows-section__table__row__text");
    venueElementContent.innerText = item.venue;
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

  displayShows(showsContent);