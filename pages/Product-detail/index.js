// Get product id from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const selectionPropertiesElement = document.getElementById("cardInfo");

fetch("/public/data/properties.json")
    .then(response => response.json())
    .then(data => { 

        const item = data.find(b => b.id == id);

        // if (!item) {
        //     selectionPropertiesElement.innerHTML = "<h1>Product not found</h1>";
        //     return;
        // }

        selectionPropertiesElement.innerHTML = `
                    <div class="card-item">
                            <div class="img-wrapper">
                                <img src="${item.images[0]}">
                            </div>

                            <h2>${item.title.en}</h2>
                            <h3>${item.price},${item.currency} / <span>${item.purpose}</span></h3>

                            <h4>
                                <i class="fa-solid fa-location-dot icon-info"></i>
                                ${item.location.address}, 
                                ${item.location.district}, 
                                ${item.location.city}
                            </h4>

                            <div class="bed-bath">
                                <div class="bed-bath-box">
                                    <div class="bed">
                                        <h1><i class="fa-solid fa-bed icon-bed-bath"></i>${item.bedrooms} Bedroom</h1>
                                    </div>
                                </div>
                                <div class="bed-bath-box">
                                    <div class="bath">
                                        <h1><i class="fa-solid fa-bath icon-bed-bath"></i>${item.bathrooms} Bathroom</h1>
                                    </div>
                                </div>
                            </div>

                            <h5>Description</h5>
                            <h6>This L.S-type 2-bedroom unit at Golden One Phnom Penh offers a smart and 
                                                functional layout designed for efficient city living. With a total size of 73sqm, 
                                                the unit features a bright front bedroom with direct balcony access, a centrally 
                                                located living room, and a second bedroom positioned conveniently near the kitchen
                                                and dining area. <br> <br> <br>
                                                • Type: 2 Bedroom, 1 Bathroom <br>
                                                • Unit Size: 73 sqm <br>
                                                • Floor: 16th <br>
                                                • Swimming pool <br>
                                                • Fitness center <br>
                                                • 24/7 security & reception <br>
                                                • Parking <br>
                                                • Elevator access <br>
                                                • Clean, modern common areas <br>
                                                • Located in Toulsvayprey1 district, close to city attractions, restaurants, coffee shops, retail stores, and
                            </h6>
                    </div>

                    <div class="more-info">
                            <h1>Location</h1>
                            <div class="live-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.284766436814!2d144.9630579153163!3d-37.8141079797519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218d6e30!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678912345678!5m2!1sen!2sau" 
                                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <h1>Listing Agent</h1>
                    <div class="agent-box">
                            <div class="agent-box-cover">
                                    <img src="-kakada-agnet.JPG" alt="">
                            </div>     
                            <h1>Kakada Estate  <br> <span>Luxe Realty Group<span></h1>
                            <a href="../Product-detail/index.html?id=${item.id}"><h2>Contact Now</h2></a>
                           
                    </div>
                    <div class="property-agent">
                            <h1>Similar Properties</h1>
                    </div>
        `;
    })
    .catch(error => {
        console.error("There was a problem fetching the data:", error);
    });

const recommendedEl = document.getElementById("cardContanier");
const featuredEl = document.getElementById("futureCard");

fetch("/public/data/properties.json")
    .then(response => response.json())
    .then(data => {

          
        let recLimit = 6;
        let recCount = 0;

        data.forEach(item => {
            if (item.is_available === "yes" && recCount < recLimit) {

                recommendedEl.innerHTML += createCard(item);
                recCount++;
            }
        });

    })
    .catch(err => console.log("Error loading properties:", err));


function createCard(item) 
{ console.log(item)
    return `
        <div class="card-item1">
            <div class="img-wrapper1">
                <a href="../Product-detail/index.html?id=${item.id}"><img src="${item.images}"></a>
            </div>

            <h2>${item.title.en}</h2>
            <h3>${item.location.address}</h3>
            <h4>${item.price},${item.currency} / <span>${item.purpose}</span></h4>

            <div class="bed-bath1">
                <div class="bed1"><h1><i class="fa-solid fa-bed icon-bed-bath"></i>${item.bedrooms} Bedroom</h1></div>
                <div class="bath1"><h1><i class="fa-solid fa-bath icon-bed-bath"></i>${item.bathrooms} Bathroom</h1></div>
            </div>

            <div class="view-detail1">
                <a href="../Product-detail/index.html?id=${item.id}"><h1>View Details</h1></a>
            </div>
        </div>
    `;
   
}

