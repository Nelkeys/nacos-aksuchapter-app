export async function fetchSupportedLevels() {
    try {
        const response = await fetch("/data/supportedLevels.json")
        const levelsGotten = await response.json()
        return levelsGotten
    } catch (error) {
        console.log(`Error Fetching Levels: ${error}`);
    }
}

const levelsObject = await fetchSupportedLevels()

async function populateScreen() {
    await levelsObject
    levelsObject.forEach(level => {
        let levelElement = ` <a href="${level.url}" onclick="showLoader()"><div class="set">
        <i class='bx bxs-book' ></i>
                <h3>${level.level} Level</h3>  
            </div></a>`
        document.querySelector(".levels").insertAdjacentHTML("beforeend", levelElement)

    });
}

populateScreen()