    // Model 
    let myFetchedData = loadData('https://api.mediehuset.net/sdg/goals');

    // Controller
    function loadData(uri){
        fetch(uri)

        .then((response) => {
            return response.json();
        })

        .then((data) => {
            let myData = data.items[0]; 
            let id = data.id;
            let title = data.title; 
            let byline = data.byline;
            let color = data.color; 
            let icon = data.icon; 
            buildView(id, title, byline, color, icon);
        })

        .catch();
    };

    // View

    let widget = document.getElementById('goals');

    buildView = (id, title, byline, color, icon) => {
        
        widget.innerHTML = `
        <h1 class="goal-title">${title}</h1>
        <pclass="goal-content"> ${byline}<p>
        <span>${icon}</span> 
        `
    };