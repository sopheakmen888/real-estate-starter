// const featureListCard = document.getElementById("featureList")

// fetch("../../public/data/properties.json")
//     .then((resp) => resp.json())
//     .then ((data) => {
//         if (data.length > 0) {
//             for (let i= 0; i < 4; i++) {
//             sectionPropertiesElement.innerHTML += '
            
//             '
//             }
//         }
//     });
const sectionPropertiesElement = document.getElementById("featureList");

fetch("../../public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      for (let i = 0; i < 4; i++) {
        console.log(data)
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
