window.onload = function(){


    const form = document.getElementById("search-form");
    const inputShow = document.getElementById("input-show");
    const showContainer = document.querySelector(".show-container");


    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        showContainer.innerHTML = " ";



        const query = inputShow.value;

        if(query){

            const apiURL = `https://api.tvmaze.com/search/shows?q=${query}`;
            const response = await fetch(apiURL);
            const data = await response.json();

            data.forEach(show => {

                const showDataElement = document.createElement("div");
                        showDataElement.classList.add("show-data");

                        const imgElement = document.createElement("img");
                        imgElement.src = show.show.image ? show.show.image.medium : "NoImageAvailable.jpg";

                        const showInfoElement = document.createElement("div");
                        showInfoElement.classList.add("show-info");

                        const titleElement = document.createElement("h1");
                        titleElement.innerHTML = show.show.name;

                        const summaryElement = document.createElement("p");
                        summaryElement.innerHTML = show.show.summary || "No summary available.";

                        showInfoElement.appendChild(titleElement);
                        showInfoElement.appendChild(summaryElement);

                        showDataElement.appendChild(imgElement);
                        showDataElement.appendChild(showInfoElement);

                        showContainer.appendChild(showDataElement);


            }) 
        }




    })







}