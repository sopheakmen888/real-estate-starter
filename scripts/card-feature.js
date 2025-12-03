// feature card
const sectionFeatureElement = document.getElementById("featureCard")

fetch("../public/data/properties.json")
 .then((response) => response.json())
 .then((data) => {
    if (data.length > 0) {
        for (let i = 0; i < 20; i++) {
            console.log(data);
            
            sectionFeatureElement.innerHTML += `
            <a class="card" href="/property/${data[i].title.en}">
                <img class="card__media" src="${data[i].images}"
                    alt="" />
                <div class="card__body">
                    <small>
                        <i class="fa-solid fa-bed"></i> ${data[i].bedrooms} Bedroom
                        <i class="fa-solid fa-bath"></i> ${data[i].bathrooms}  Bathroom
                    </small>
                    <h3 class="card__title">${data[i].title.en}</h3>
                    <span class="badge">${data[i].location.district}</span>
                    <div class="card__meta">USD ${data[i].price}</div>
                </div>
            </a>
        `;
        }
    }
        
 })


const scrollers = document.querySelectorAll(".scroller");

for (var i = 0; i < scrollers.length; i++) {
  var scroller = scrollers[i];
  console.log("scroller: ", scroller);
  const track = scroller.querySelector(".scroller__track");
  const firstGroup = track.querySelector(".scroller__group");

  // Clone group
  const clone = firstGroup.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  track.appendChild(clone);

  // Set duration based on total width (bigger content, longer scroll)
  const totalWidth = firstGroup.scrollWidth * 2; // A + clone
  const pxPerSecond = 13;
  const duration = totalWidth / pxPerSecond;
  track.style.setProperty("--marquee-duration", `${duration}s`);
}
