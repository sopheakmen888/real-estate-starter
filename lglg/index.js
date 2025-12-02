const sectionPropertiesElement = document.getElementById("section__properties");

fetch("../../public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      for (let i = 0; i < 4; i++) {
        sectionPropertiesElement.innerHTML += `
        <a class="card" href="/pages/property/${data[i].title.en}">
            <img class="card__media" src="${data[i].images}"
                alt="${data[i].title.en}" />
            <div class="card__body">
                <h3 class="card__title">${data[i].title.en}</h3>
                <div class="card__meta">${data[i].price} ${data[i].currency} / month</div>
                <span class="badge">Available</span>
            </div>
        </a>
      `;
      }
    }
  });

  const sectionPropertieElement = document.getElementById("section__properties2");

fetch("../../public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      for (let i = 4; i < 8; i++) {
        sectionPropertieElement.innerHTML += `
        <a class="card" href="/pages/property/${data[i].title.en}">
            <img class="card__media" src="${data[i].images}"
                alt="${data[i].title.en}" />
            <div class="card__body">
                <h3 class="card__title">${data[i].title.en}</h3>
                <div class="card__meta">${data[i].price} ${data[i].currency} / month</div>
                <span class="badge">Available</span>
            </div>
        </a>
      `;
      }
    }
  });
  

  
