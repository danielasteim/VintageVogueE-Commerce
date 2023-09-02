import { catalog } from "./catalog";
import { renderCatalog } from "./products";

export function searchInput() {
  const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const anos = [];

  for (const item of catalog) {
    if (!anos.includes(item.ano)) {
      anos.push(item.ano);
    }
  }

  const monthsSelect = document.getElementById("months");
  const yearsSelect = document.getElementById("years");

  for (const mes of meses) {
    const option = document.createElement("option");
    option.value = mes;
    option.textContent = mes;
    monthsSelect.appendChild(option);
  }

  for (const ano of anos) {
    const option = document.createElement("option");
    option.value = ano;
    option.textContent = ano;
    yearsSelect.appendChild(option);
  }
}

export function Search() {
  const inputMes = document.getElementById("mes");
  const inputAno = document.getElementById("ano");

  const searchButton = document.getElementById("click-search");

  let anoValue = null;
  let mesValue = null;

  searchButton.addEventListener("click", function () {
    anoValue = inputAno.value;
    mesValue = inputMes.value;

    // Check if either year or month is selected, and perform the search accordingly
    if (anoValue || mesValue) {
      filterCatalog(anoValue, mesValue);
    } else {
      // If neither year nor month is selected, reset the catalog to display all items
      const catalogContainer = document.getElementById("container-produto");
      catalogContainer.innerHTML = "";
      renderCatalog(catalog);
    }
  });
}

function filterCatalog(anoValue, mesValue) {
    const searched = [];
  
    for (const item of catalog) {
      if ((anoValue && item.ano == anoValue) || (mesValue && item.mes == mesValue)) {
        searched.push(item);
      }
    }
  
    // Clear the previous catalog before rendering the new search results
    const catalogContainer = document.getElementById("container-produto");
    catalogContainer.innerHTML = "";
  
    renderCatalog(searched);
  }
  
