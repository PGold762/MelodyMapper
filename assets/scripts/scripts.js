// ...
const apiKey = "FxPVrp5JjGn7rG5QR2c3H3qhNClz0Tkp";
const listEl = document.querySelector("#events ul");
const favoritesListEl = document.querySelector("#favorites");
// const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&keyword=concert`;
const api2URL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=nashville&apikey=${apiKey}`;

const url =
  "https://real-time-events-search.p.rapidapi.com/search-events?query=Concerts%20in%20Nashville&start=0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9bd041fa6bmshcc6f6801efb512fp1bc8e9jsn33f8d2b24803",
    "X-RapidAPI-Host": "real-time-events-search.p.rapidapi.com",
  },
};

const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "133fbda330msh8b862db29762994p175fdejsn0b19badc8128",
    "X-RapidAPI-Host": "real-time-events-search.p.rapidapi.com",
  },
};

Promise.all([fetch(api2URL), fetch(url, options2)])
  .then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  )
  .then((dataArray) => {
    const ticketmasterData = dataArray[0];
    const rapidAPIData = dataArray[1];

    // Process Ticketmaster API data
    let ticketmasterEvents = ticketmasterData._embedded.events;
    for (let i = 0; i < ticketmasterEvents.length; i++) {
      createEventElement(ticketmasterEvents[i]);
    }

    // Process RapidAPI data
    let rapidAPIEvents = rapidAPIData.data;
    for (let i = 0; i < rapidAPIEvents.length; i++) {
      createRapidAPIEventElement(rapidAPIEvents[i]);
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Function to create Ticketmaster Event elements
function createEventElement(event) {
  let liEl = document.createElement("li");
  let name = document.createElement("p");
  name.textContent = events[i].name;
  let dateEl = document.createElement("p");
  let date = new Date(events[i].dates.start.dateTime);
  dateEl.textContent = date.toLocaleString();
  let venue = document.createElement("p");
  venue.textContent = events[i]._embedded.venues[0].name;
  let imageEl = document.createElement("p");
  let image = document.createElement("img");
  image.src = events[i].images[0].url;
  let btn = document.createElement("button");
  btn.textContent = "Buy Tickets";
  btn.onclick = function () {
    window.location.assign(events[i].url);
  };
}

// Function to create RapidAPI event elements
function createRapidAPIEventElement(event) {
  let liEl = document.createElement("li");
  liEl.className = "event-item";
  let eventName = document.createElement("h3");
  eventName.textContent = event.name;

  let dateEl = document.createElement("p");
  let date = new Date(event.start_time);
  dateEl.textContent = date.toLocaleString();

  let venue = document.createElement("p");
  venue.textContent = event.venue.name;

  let image = document.createElement("img");
  image.className = "event-image";
  image.src = event.thumbnail;

  let btn = document.createElement("button");
  btn.className = "buy-button";
  btn.textContent = "Buy Tickets";
  btn.onclick = function () {
    window.location.assign(event.ticket_links[0].link);
  };

  liEl.append(eventName, dateEl, venue, image, btn);
  listEl.append(liEl);
}

// const fullData = []
// fullData.push(api1Data)
// fullData.push(api2Data)
// console.log(fullData) //To make sure it contains all of the information from both apis
// // for loop that loops through full data and creates an element for each item then appends to the parent container
