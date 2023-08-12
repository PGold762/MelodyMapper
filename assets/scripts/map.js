const url =
  "https://real-time-events-search.p.rapidapi.com/search-events?query=Concerts%20in%20Nashville&start=0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9bd041fa6bmshcc6f6801efb512fp1bc8e9jsn33f8d2b24803",
    "X-RapidAPI-Host": "real-time-events-search.p.rapidapi.com",
  },
};

// const listEl = document.querySelector("#events ul");
// const favoritesListEl = document.querySelector("#favorites");
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
     let events = data.data;
     for (let i = 0; i < events.length; i++) {
          let liEl = document.createElement("li");
          liEl.className = "event-item"; // Add class to the li element
          let eventName = document.createElement("h3");
          eventName.id = `event-name-${i}`; // Add id to the h3 element
          eventName.textContent = events[i].name;
          let dateEl = document.createElement("p");
          dateEl.id = `event-date-${i}`; // Add id to the p element
          let date = new Date(events[i].start_time);  // ask about date structuring *** 
          dateEl.textContent = date.toLocaleString();
          let venue = document.createElement("p");
          venue.id = `event-venue-${i}`; // Add id to the p element
          venue.textContent = events[i].venue.name;
          let image = document.createElement("img");
          image.id = `event-image-${i}`; // Add id to the img element
          image.className = "event-image"; // Add class to the img element
          image.src = events[i].thumbnail;
          let btn = document.createElement("button");
          btn.id = `buy-button-${i}`; // Add id to the button element
          btn.className = "buy-button"; // Add class to the button element
          btn.textContent = "Buy Tickets";
          btn.onclick = function () {
            window.location.assign(events[i].ticket_links[0].link);
          };
    //       let btnAddToFavorites = document.createElement("button");
    //       btnAddToFavorites.id = `favorites-button-${i}`; // Add id to the button element
    //       btnAddToFavorites.className = "favorites-button"; // Add class to the button element
    //       btnAddToFavorites.textContent = "Add to Favorites";
    //       const favoritesArray =
    //         JSON.parse(localStorage.getItem("favorites")) || [];
    //       for (let j = 0; j < favoritesArray.length; j++) {
    //         if (events[i].id === favoritesArray[j].id) {
    //           isButtonClicked = true;
    //           btnAddToFavorites.disabled = true;
    //           btnAddToFavorites.textContent = "Added to Favorites";
    //         }
    //       }
    //       btnAddToFavorites.onclick = function () {
    //         var foundFavorites = false;
    //         console.log(events[i]);
    //         const favoritesArray =
    //           JSON.parse(localStorage.getItem("favorites")) || [];
    //         for (let j = 0; j < favoritesArray.length; j++) {
    //           if (events[i].id === favoritesArray[j].id) {
    //             foundFavorites = true;
    //           }
    //         }
    //         if (!foundFavorites) {
    //           favoritesArray.push(events[i]);
    //           localStorage.setItem("favorites", JSON.stringify(favoritesArray));
    //           renderFavorites();
    //         }
    //         isButtonClicked = true;
    //         btnAddToFavorites.disabled = true;
    //         btnAddToFavorites.textContent = "Added to Favorites";
    //       };
    //       liEl.append(name, dateEl, venue, image, btn, btnAddToFavorites);
    //       listEl.append(liEl);
    //     }
    //     renderFavorites();
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
  };

// function renderFavorites() {
//   favoritesListEl.innerHTML = "";
//   const favoritesArray = JSON.parse(localStorage.getItem("favorites")) || [];
//   for (let i = 0; i < favoritesArray.length; i++) {
//     let liEl = document.createElement("li");
//     liEl.textContent = favoritesArray[i].name;
//     favoritesListEl.append(liEl);
//   }
// }
