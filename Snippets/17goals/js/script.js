    // Model 
    let myFetchedData = loadData('https://api.mediehuset.net/sdg/goals');


    // Controller
    function loadData(uri){
        fetch(uri)

        .then((response) => {
            return response.json();
        })

        .then((data) => {
            let myData = data.items; 
            buildView(myData);
        })

        .catch();
    };

    function loadDetails(goal) {
        fetch(`https://api.mediehuset.net/sdg/goals/${goal}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let dataDetails = data.item;
            return dataDetails.item;
        })
        .catch();
    }

    // View
    buildView = async (goaldata) => {

        goaldata.forEach(element => {
        
            let {id, title, byline, color, icon} = element; 
            let goalshtml = document.createElement('div');
            goalshtml.setAttribute('class','goals');
            document.body.appendChild(goalshtml);
            goalshtml.style.backgroundColor = `#${color}`

            goalshtml.innerHTML = `
            ${icon}
            <div class="id">${id+'.'}</div>
            <h2 class="title">${title}</h2> 
            <div class="byline">${byline}</div>
            `;

            goalshtml.addEventListener('click', () => {
                let details = loadDetails(id);

                console.log(details);
            })
        });
    };