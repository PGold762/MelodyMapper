const apiKey2 = 'FxPVrp5JjGn7rG5QR2c3H3qhNClz0Tkp';
const listEl =document.querySelector('#events ul')
// const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&keyword=concert`;
const api2URL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=nashville&apikey=${apiKey}`;
    fetch(api2URL)
    .then(response => response.json())
    .then(data => {  
        // const eventsDiv = document.getElementById('events');
        // eventsDiv.innerHTML = JSON.stringify(data, null, 2);

Promise.all([fetch(api2URL), fetch()])
  .then((responses) => Promise.all(responses.map((response) => response.json())))
  .then((dataArray) => {




        console.log(data)
        let events=data._embedded.events
        for (let i = 0; i < events.length; i++) {
            let liEl=document.createElement('li')
            let name=document.createElement('p')
            name.textContent =events[i].name
            let dateEl=document.createElement('p')
            let date=new Date(events[i].dates.start.dateTime)
            dateEl.textContent=date.toLocaleString()
            let venue=document.createElement('p')
            venue.textContent=events[i]._embedded.venues[0].name
            let image=document.createElement('img')
            image.src=events[i].images[0].url
            let btn=document.createElement('button')
            btn.textContent= 'Buy Tickets'
            btn.onclick=function (){
                window.location.assign(events[i].url)
            }
        
            liEl.append(name,dateEl, venue, image, btn)
            listEl.append(liEl)
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    


    