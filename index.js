const ratingSort = (itemA, itemB) => {
    return itemA.querySelector(".rating-display>.value").innerHTML - itemB.querySelector(".rating-display>.value").innerHTML;
};

const nameSort = (parkA, parkB) => {
    const parkNameA = parkA.querySelector("h2").innerText;
    const parkNameB = parkB.querySelector("h2").innerText;
    if (parkNameA < parkNameB) {
        return -1;
    }
    if (parkNameA > parkNameB) {
        return 1;
    }
    return 0;
};

const nameSortHandler = (event) => {
    event.preventDefault();
    // Get <main> element
    const main = document.querySelector("main");
    // Get list of parks
    const parks = main.querySelectorAll(".park-display")
    // Empty main element
    main.innerHTML = "";
    // Create array from parks Nodelist
    const parksArray = Array.from(parks);
    // Sort array
    parksArray.sort(nameSort);
    // Append to main element
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
}

const main = () => {
    const nameSorter = document.querySelector("#name-sorter");
    
    nameSorter.addEventListener("click", nameSortHandler);

}

window.addEventListener("DOMContentLoaded", main);