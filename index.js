import { formatEvent } from "./eventFormatter.js";
import {fetchUserEvents} from "./apiClient.js";

const username = process.argv[2];
async function displayGitHubActivity(username){
    try{
        if(!username){
            console.error("Please provide a GitHub username as a command-line argument.");
            return;
        }
        const events = await fetchUserEvents(username);
        events.forEach(event => {
            const formattedEvent = formatEvent(event);
            console.log (`- ${formattedEvent}`);

        });
    } catch (error) {
        console.error("Error fetching GitHub events:", error);
    }
}

displayGitHubActivity(username);