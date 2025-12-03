const relateAgentSection = document.getElementById("relatedToAgent")
 
fetch("../../public/data/properties.json")
    .then((response) => response.json())
    .then((data) => {
        if (data.length > 0){
          for ( let i = 0 ; i < 3; i++) {
            relateAgentSection.innerHTML += `
            <article class="card-items" href="">
                <div class="card-items_media">
                    <a href=""><img src="${data[i].images}" alt=""></a>
                </div>

                <div class="card-items__body">
                    <div class="top-cols-item">
                        <h2>USD ${data[i].price}</h2>
                        <small><i class="fa-solid fa-star"></i> 4.9/5.0</small>
                    </div>

                    <h1 class="title-cols">${data[i].title.en}</h1>
                    <p class="txt-cols">${data[i].location.district}</p>
                    <small>
                        <i class="fa-solid fa-bed"></i> ${data[i].bedrooms} Bedroom
                        <i class="fa-solid fa-bath"></i> ${data[i].bathrooms} Bathroom
                    </small>

                    <div class="card-btn">
                        <a href="">View Detail</a>
                    </div>
                </div>
            </article>
            `
          }
        }
    })