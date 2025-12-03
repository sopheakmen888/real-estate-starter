const agentInformation = document.getElementById('section__agents')

fetch("../public/data/agents.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      for (let i = 0; i < 3; i++) {
        agentInformation.innerHTML += `
        <div class="section__card">
            <div class="section__avatar">
                <img src="${data[i].profile_photo}">
            </div>
            <div class="section__content">
                <h3>${data[i].full_name}</h3>
                <p>${data[i].contact.phone}</p>
                <p>${data[i].contact.email}
                <div class="section__icon">
                    <a href="#"><i class="fa-brands fa-telegram"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                </div>
                <div class="section__button">
                    <a href="#" style="background-color: var(--badge); color: var(--text)">Profile</a>
                    <a href="#">Call</a>
                </div>
            </div>
        </div>
        `
      }
    }
  })
  .catch((error) => console.error("Error fetching JSON:", error));

const featuredProperty = document.getElementById('section__featured')

fetch('public/data/properties.json')
  .then((response) => response.json())
  .then((data) => {
    if(data.length > 0) {
      for(let i = 0; i < 3; i++) {
        featuredProperty.innerHTML += `
        <a class="card" href="/property/1">
            <img class="card__media" src="${data[i].images}"
                alt="${data[i].title.en}" />
            <div class="card__body">
                <h3 class="card__title">${data[i].title.en} - ${data[i].location.district}</h3>
                <div class="card__meta">${data[i].price} ${data[i].currency} • ${data[i].bedrooms} BR</div>
                <span class="badge">${data[i].purpose}</span>
            </div>
        </a>
        `
      }
    }
  })