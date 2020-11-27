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

    // function loadDetails(id){
    //     fetch('https://api.mediehuset.net/sdg/goals/' + `${id}`)

    //     .then((response) => {
    //         return response.json();
    //     })

    //     .then((data) => {
    //         let myDetails = data.item; 
    //         buildView(myDetails);
    //     })

    //     .catch();
    // };

    // View
    buildView = (goaldata) => {

        goaldata.forEach(element => {
        
            let {id, title, byline, color, icon} = element; 
            let goalshtml = document.createElement('div');
            goalshtml.setAttribute('class','goals');
            document.body.appendChild(goalshtml);
            goalshtml.style.backgroundColor = `#${color}`

            goalshtml.innerHTML = `
            ${icon}
            <div class="header">
            <div class="id">${id+'.'}</div>
            <h2 class="title">${title}</h2> 
            </div>
            <div class="byline">${byline}</div>
            `;
            goalshtml.addEventListener('click', () => {
                
                console.log(id)
            }) 


        });
    };