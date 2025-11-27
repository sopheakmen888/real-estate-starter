const sectionPropertiesElement = document.getElementById("featureCardProperties")

fetch("../public/data/properties.json")
    .then ((respon) => respon.json())
    .then ((data) => {
        if (data.length > 0) {
            for (let i = 0; i < 4; i++) {
                sectionPropertiesElement.innerHTML += `
                <a class="card" href="/pages/property/${data[i].title.en}">
                <img class="card__media" src="${data[i].images}"/>
                <div class="card__body">
                    <h3 class"card__title">${data[i].title.km}</h3>
                    <div class="card__meta">${data[i].title.price} ${data[i].currency}</div>
                <span>For Rent</span>
                </a>
                `
            }
        }
    });
