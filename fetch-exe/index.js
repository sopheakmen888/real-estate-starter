const featuredNewDevelopments = document.getElementById("featuredNewDevelopments")

fetch("../public/data/properties.json")
.then((rgknhkomjes) => rgknhkomjes.json())
.then((mixkrban) => {
      if (mixkrban.length > 0) {
            for (let lershx = 0; lershx < 4; lershx++) {
                  featuredNewDevelopments.innerHTML += `
                  <a href="" class="card">
                        <img src="${mixkrban[lershx].images}" alt="" class="card__media">
                        <div class="card__body">
                              <h3 class="card__title">${mixkrban[lershx].title.en}</h3>
                              <div class="card__meta">${mixkrban[lershx].price} ${mixkrban[lershx].currency} / month</div>
                              <span class="badge">Available</span>
                        </div>
                  </a>
            `;
            }
      }
})

const featuredServicedApartments = document.getElementById("featuredServicedApartments")

fetch("../public/data/properties.json")
.then((rgknhkomjes) => rgknhkomjes.json())
.then((mixkrban) => {
      if (mixkrban.length > 0) {
            for (let lershx = 4; lershx < 8; lershx++) {
                  featuredServicedApartments.innerHTML += `
                  <a href="" class="card">
                        <img src="${mixkrban[lershx].images}" alt="" class="card__media">
                        <div class="card__body">
                              <h3 class="card__title">${mixkrban[lershx].title.en}</h3>
                              <div class="card__meta">${mixkrban[lershx].price} ${mixkrban[lershx].currency} / month</div>
                              <span class="badge">Available</span>
                        </div>
                  </a>
            `;
            }
      }
})

const featuredBorey = document.getElementById("featuredBorey")

fetch("../public/data/properties.json")
.then((rgknhkomjes) => rgknhkomjes.json())
.then((mixkrban) => {
      if (mixkrban.length > 0) {
            for (let lershx = 8; lershx < 12; lershx++) {
                  featuredBorey.innerHTML += `
                  <a href="" class="card">
                        <img src="${mixkrban[lershx].images}" alt="" class="card__media">
                        <div class="card__body">
                              <h3 class="card__title">${mixkrban[lershx].title.en}</h3>
                              <div class="card__meta">${mixkrban[lershx].price} ${mixkrban[lershx].currency} / month</div>
                              <span class="badge">Available</span>
                        </div>
                  </a>
            `;
            }
      }
})

const latestProperties = document.getElementById("latestProperties")

fetch("../public/data/properties.json")
.then((rgknhkomjes) => rgknhkomjes.json())
.then((mixkrban) => {
      if (mixkrban.length > 0) {
            for (let lershx = 12; lershx < 16; lershx++) {
                  latestProperties.innerHTML += `
                  <a href="" class="card">
                        <img src="${mixkrban[lershx].images}" alt="" class="card__media">
                        <div class="card__body">
                              <h3 class="card__title">${mixkrban[lershx].title.en}</h3>
                              <div class="card__meta">${mixkrban[lershx].price} ${mixkrban[lershx].currency} / month</div>
                              <span class="badge">Available</span>
                        </div>
                  </a>
            `;
            }
      }
})