const latestLaunch = document.querySelector(".latest-launch");

async function fetchLatestLaunch(){
    const response = await fetch("https://api.spacexdata.com/v4/launches/latest");
    const json = await response.json();

    console.log(json);

    latestLaunch.innerHTML = `<div class="launch-name">${json.name}</div>
                                <div class="launch-date">${json.date_utc.slice(0,10)}</div>
                                <div class="launch-details">${json.details}</div>`;
}

fetchLatestLaunch();


//


const nextLaunch = document.querySelector(".next-launch");

async function fetchNextLaunch(){
    const response = await fetch("https://api.spacexdata.com/v4/launches/next");
    const json = await response.json();

    console.log(json);

    nextLaunch.innerHTML = `<div class="launch-name">${json.name}</div>
                            <div class="launch-date">${json.date_utc.slice(0,10)}</div>
                            <div class="launch-details">${json.details}</div>`;
}

fetchNextLaunch();
