// Show timeline of historic events - milestones:

const url = "https://api.spacexdata.com/v4/history";

const resultsContainer = document.querySelector(".milestones");

async function fetchHistory(){

    try{
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);


        for(let i = 0; i < results.length; i++) {
            if(!results[i].title){
                continue;
            }

            resultsContainer.innerHTML += `<div class="events">
                                                <div class="timeline"></div>
                                                <div class="event-date">${results[i].event_date_utc.slice(0,10)}</div>
                                                <div class="event-title">${results[i].title}</div>
                                                <div class="event-details">${results[i].details}</div>
                                            </div>`;
        }
    }

    catch (error){
        console.log(error);
    }
}

fetchHistory();