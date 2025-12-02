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

        let featLimit = 3;
        let featCount = 0;

        data.forEach(item => {
            if (item.is_featured === "yes" && featCount < featLimit) {

                featuredEl.innerHTML += createCard(item);
                featCount++;
            }
        });

    })
    .catch(err => console.log("Error loading properties:", err));


function createCard(item) 
{ console.log(item)
    return `
        <div class="card-item">
            <div class="img-wrapper">
                <a href="../Product-detail/index.html?id=${item.id}"><img src="${item.images}"></a>
            </div>

            <h2>${item.title.en}</h2>
            <h3>${item.location.address}</h3>
            <h4>${item.price},${item.currency} / <span>${item.purpose}</span></h4>

            <div class="bed-bath">
                <div class="bed"><h1><i class="fa-solid fa-bed icon-bed-bath"></i>${item.bedrooms} Bedroom</h1></div>
                <div class="bath"><h1><i class="fa-solid fa-bath icon-bed-bath"></i>${item.bathrooms} Bathroom</h1></div>
            </div>

            <div class="view-detail">
                <a href="../Product-detail/index.html?id=${item.id}"><h1>View Details</h1></a>
            </div>
        </div>
    `;
   
}
const filterBtn = document.getElementById("filterBtn");
const filterMenu = document.getElementById("filterMenu");

filterBtn.addEventListener("click", () => {
    filterMenu.style.display =
        filterMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
    if (!filterBtn.contains(e.target) && !filterMenu.contains(e.target)) {
        filterMenu.style.display = "none";
    }
});