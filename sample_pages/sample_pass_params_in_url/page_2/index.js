const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const purpose = urlParams.get("purpose");
const featured = urlParams.get("featured");
const latest = urlParams.get("latest");

const id = urlParams.get("id");

// Property List Purpose
const propertyListPurpose = document.querySelector("#propertyListPurpose");
propertyListPurpose.textContent = purpose;

// Property List Filters
const propertyListFilters = document.querySelector("#propertyListFilters");
propertyListFilters.innerHTML += `<li>Featured? ${featured}</li>`;
propertyListFilters.innerHTML += `<li>Latest: ${latest}`;

const jsonData = [
  {
    id: "1",
    name: "Yim",
  },
  {
    id: "2",
    name: "Lonf",
  },
];

for(let i=0; i<jsonData.length; i++){
    if(jsonData[i].id === id){
        console.log(jsonData[i]);
    }
}