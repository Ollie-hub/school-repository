async function fetchData() {
    let response = await fetch('https://api.mediehuset.net/sdg/goals');
    let data = await response.json(); 

    return data.result;
}; 

goals = () => {

    goalsHTML += 
    `
    `
}