export default async function getLevelObjects(level) {
    try {
        const response = await fetch(`/data/${level}level.json`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

//This module gets the json object using the fetch api; in the future axios could be used for effective data handling