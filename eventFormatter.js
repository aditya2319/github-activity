function formatEvent(event){
    const repo = event.repo.name;

    switch (event.type) {
        case 'PushEvent':
            return `Pushed commits to ${repo}`;
            
        case "WatchEvent":
            return `Starred ${repo}`;

        case "IssuesEvent":
            const action = event.payload.action;
            const caps = action.charAt(0).toUpperCase() + action.slice(1);
            return `${caps} an issue in ${repo}`;

        case "PullRequestEvent":
            const prAction = event.payload.action;
            if(prAction === "closed" && event.payload.pull_request.merged === true){
                return `Merged a pull request in ${repo}`;
            }
            return `${prAction.charAt(0).toUpperCase() + prAction.slice(1) } a pull request in ${repo}`;


        case "ForkEvent":
            return `Forked ${repo}`;

        case "CreateEvent":
            const refType = event.payload.ref_type;
            if(refType === "repository"){
                return `Created a new repository: ${repo}`;
            }
            return `Created a ${refType} in ${repo}`;

        case "DeleteEvent":
            const delRefType = event.payload.ref_type;
            return `Deleted a ${delRefType} in ${repo}`;

        default:
            return `Performed an action in ${repo}`;    

    }

}
export { formatEvent };