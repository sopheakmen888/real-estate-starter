const propertyList = document.getElementById("propertyList");
const purpose = "rent";

fetch("/public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      const maxItems = 6;
      let count = 0;
      for (let i = 0; i < data.length; i++) {
        if (count < maxItems) {
          if (data[i].purpose === purpose) {
            let purposeSpanHTML = "";
            if (data[i].purpose === "rent") {
              purposeSpanHTML = `<span style="color: red">(${data[i].purpose})</span>`;
            } else {
              purposeSpanHTML = `<span style="color: blue">(${data[i].purpose})</span>`;
            }

            propertyList.innerHTML += `
          <a class="card" href="/pages/property/${data[i].title.en}">
              <img class="card__media" src="${data[i].images[0]}"
                  alt="${data[i].title.en}" />
              <div class="card__body">
                  <h3 class="card__title">${data[i].title.en} ${purposeSpanHTML}</h3>
                  <div class="card__meta">${data[i].price} ${data[i].currency} / month</div>
                  <span class="badge">Available: ${data[i].is_available}</span>
              </div>
          </a>
        `;
            count++;
          }
        } else {
          break;
        }
      }
    }
  });
