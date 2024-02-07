import fetchLevelObjects from "./utils/courseFetcher.js";

const supportedLevels = [100, 200, 300, 400];
const urlParams = new URLSearchParams(window.location.search);
const levelParam = urlParams.get('level');

let levelIndicator = document.getElementById("currentLevelIndicator")
levelIndicator.innerHTML = "Loading..."

//Parameter Check
if (!levelParam) {

    console.log("No level requested");
    levelIndicator.innerHTML = "No level requested"
    document.title = "No level requested"

    // Handle conditions where the page is requested without any level parameter
} else {
    const levelRequested = parseInt(levelParam);
    if (supportedLevels.includes(levelRequested)) {
        getLevelObjects(levelRequested);
    } else {

        console.log("Level not found");
        levelIndicator.innerHTML = "Level not found"
        document.title = "Level not found"

        // Handle conditions where the page is requested with an invalid level parameter
    }
}

async function getLevelObjects(levelRequested) {
    try {
        const courseObjects = await fetchLevelObjects(levelRequested);
        populateScreen(courseObjects)
    } catch (error) {

        console.error("Error fetching level objects:", error);
        levelIndicator.innerHTML = "Error fetching level information"
        document.title = "Error: Can't fetch level information"

        // Handle errors while fetching level objects
    }
}

function populateScreen(objectsGotten) {
    pageContent()
    objectsGotten.forEach(object => {
        let htmlElement = `
        <a href="${object.url}"><div class="course">
        <i class='bx bxs-book' ></i>
        <div class="c-code-and-c-title">
            <h3>${object.courseCode}</h3>
            <p>${object.courseName}</p>
        </div>
    </div></a>`
        document.querySelector('.course-list').insertAdjacentHTML("beforeend", htmlElement)
    });
}

function pageContent(){
    levelIndicator.innerHTML = `<b>${levelParam} Level</b>`
    document.title = `${levelParam} Level | Materials`
}