const sectionPropertiesElement = document.getElementById("imgages");

fetch("../../public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      console.log(data);
      
      for (let i = 0; i < 4; i++) {
        sectionPropertiesElement.innerHTML += `
        <a class="card" href="/pages/property/${data[i].title.en}">
            <img class="images-photo" src="${data[i].images}"
            </div>  
        </a>
      `;
      }
    }
  });
