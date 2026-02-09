
async function fetchUserEvents(username){
    try{
        const url = `https://api.github.com/users/${username}/events`;
        const response = await fetch(url);
        if(!response.ok){
            throw new Error (`Network error: ${response.statusText}`);

        }
        const events = await response.json();
        return events;

}   catch(error){
        console.error ('Error fetching user events:', error);
        throw error;
}
}

export {fetchUserEvents};