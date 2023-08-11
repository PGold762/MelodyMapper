const apiKey = 'FxPVrp5JjGn7rG5QR2c3H3qhNClz0Tkp';
const listEl = document.querySelector('#events ul');
const api2URL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=nashville&apikey=${apiKey}`;
fetch(api2URL)
  .then(response => response.json())
  .then(data => {
    let events = data._embedded.events;
    for (let i = 0; i < events.length; i++) {
      let liEl = document.createElement('li');
      liEl.className = 'event-item';  // Add class to the li element
      let eventName = document.createElement('h3');
      eventName.className = 'flow-text center-align';  // Add class to the h3 element
      eventName.textContent = events[i].name;
      let dateEl = document.createElement('p');
      dateEl.className = 'event-date';  // Add class to the p element
      let date = new Date(events[i].dates.start.dateTime);
      dateEl.textContent = date.toLocaleString();
      let venue = document.createElement('p');
      venue.className = 'event-venue';  // Add class to the p element
      venue.textContent = events[i]._embedded.venues[0].name;
      let image = document.createElement('img');
      image.className = 'event-image';  // Add class to the img element
      image.src = events[i].images[0].url;
      let btn = document.createElement('button');
      btn.className = 'buy-button';  // Add class to the button element
      btn.textContent = 'Buy Tickets';
      btn.onclick = function() {
        window.location.assign(events[i].url);
      };
      let btnAddToFavorites = document.createElement('button');
      btnAddToFavorites.className = 'favorites-button';  // Add class to the button element
      btnAddToFavorites.textContent = 'Add to Favorites';
      btnAddToFavorites.onclick = function() {
        const favoritesArray = JSON.parse(localStorage.getItem('favorites')) || [];
        const eventToAdd = events[i];
        if (!favoritesArray.some(event => event.id === eventToAdd.id)) {
          favoritesArray.push(eventToAdd);
          localStorage.setItem('favorites', JSON.stringify(favoritesArray));
          renderFavorites();
          btnAddToFavorites.disabled = true;
          btnAddToFavorites.textContent = 'Added to Favorites';
        } else {
          alert('This event is already in favorites.');
        }
      };
      liEl.append(eventName, dateEl, venue, image, btn, btnAddToFavorites);
      listEl.append(liEl);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
function renderFavorites() {
  const favoritesListEl = document.querySelector('#favorites ul');
  favoritesListEl.innerHTML = '';
  const favoritesArray = JSON.parse(localStorage.getItem('favorites')) || [];
  for (let i = 0; i < favoritesArray.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = favoritesArray[i].name;
    favoritesListEl.append(liEl);
  }
}
renderFavorites();const apiKey = 'FxPVrp5JjGn7rG5QR2c3H3qhNClz0Tkp';
const listEl = document.querySelector('#events ul');
const api2URL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=nashville&apikey=${apiKey}`;
fetch(api2URL)
  .then(response => response.json())
  .then(data => {
    let events = data._embedded.events;
    for (let i = 0; i < events.length; i++) {
      let liEl = document.createElement('li');
      liEl.className = 'event-item';  // Add class to the li element
      let eventName = document.createElement('h3');
      eventName.className = 'event-name';  // Add class to the h3 element
      eventName.textContent = events[i].name;
      let dateEl = document.createElement('p');
      dateEl.className = 'event-date';  // Add class to the p element
      let date = new Date(events[i].dates.start.dateTime);
      dateEl.textContent = date.toLocaleString();
      let venue = document.createElement('p');
      venue.className = 'event-venue';  // Add class to the p element
      venue.textContent = events[i]._embedded.venues[0].name;
      let image = document.createElement('img');
      image.className = 'event-image';  // Add class to the img element
      image.src = events[i].images[0].url;
      let btn = document.createElement('button');
      btn.className = 'buy-button';  // Add class to the button element
      btn.textContent = 'Buy Tickets';
      btn.onclick = function() {
        window.location.assign(events[i].url);
      };
      let btnAddToFavorites = document.createElement('button');
      btnAddToFavorites.className = 'favorites-button';  // Add class to the button element
      btnAddToFavorites.textContent = 'Add to Favorites';
      btnAddToFavorites.onclick = function() {
        const favoritesArray = JSON.parse(localStorage.getItem('favorites')) || [];
        const eventToAdd = events[i];
        if (!favoritesArray.some(event => event.id === eventToAdd.id)) {
          favoritesArray.push(eventToAdd);
          localStorage.setItem('favorites', JSON.stringify(favoritesArray));
          renderFavorites();
          btnAddToFavorites.disabled = true;
          btnAddToFavorites.textContent = 'Added to Favorites';
        } else {
          alert('This event is already in favorites.');
        }
      };
      liEl.append(eventName, dateEl, venue, image, btn, btnAddToFavorites);
      listEl.append(liEl);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
function renderFavorites() {
  const favoritesListEl = document.querySelector('#favorites ul');
  favoritesListEl.innerHTML = '';
  const favoritesArray = JSON.parse(localStorage.getItem('favorites')) || [];
  for (let i = 0; i < favoritesArray.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = favoritesArray[i].name;
    favoritesListEl.append(liEl);
  }
}
renderFavorites();