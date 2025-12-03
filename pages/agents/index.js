// agents card
const sectionAgentsElement = document.getElementById("agentCardList")

fetch("../../public/data/agents.json")
 .then((response) => response.json())
 .then((data) => {
    if (data.length > 0) {
        for (let i = 0; i < 12; i++) {
            
            sectionAgentsElement.innerHTML += `
            <a class="agent-card" href="">
                <div class="agent-card-content">
                    <div class="img-cols">
                        <img src="${data[i].profile_photo}" alt="">
                    </div>

                    <h1>${data[i].full_name}</h1>
                    <span>${data[i].district}</span>
                    <p>${data[i].description}</p>
                </div>
            </a>
        `;
        }
    }
        
 })