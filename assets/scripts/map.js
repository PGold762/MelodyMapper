// This is the 2nd API built by Widewanderer,

// A timed event occurs between two specific points in time. Timed events use the start.dateTime and end.dateTime fields to specify when they occur

// https://developers.google.com/calendar/api/concepts/events-calendars
const api = "Rvs8lHK_Fag2frk5McQGzrluG17Sd - zYJ0ij";
const listEl2 = document.querySelector("#events ul");
const nashUrl =
  "https://api.setlist.fm/rest/1.0/search/cities?country=United%20States%20&name=Nashville&p=1" +
  api;

// band names should be dynamically inserted into an <h2> element

fetch(nashUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let events = data._embedded.events;
    for (let i = 0; i < events.length; i++);
  });
