document.querySelector("#searchInput").addEventListener("input", function() {
    // Obtiene el texto de búsqueda, lo convierte a minúsculas y elimina los espacios en blanco al principio y al final
    let searchText = this.value.trim().toLowerCase();
    // Selecciona todas las filas de la tabla
    let rows = document.querySelectorAll("#data_output tr");
 
    // Itera sobre cada fila de la tabla
    rows.forEach(function(row) {
       // Obtiene el texto en la segunda celda de la fila (nombre del competidor) y lo convierte a minúsculas
       let nameCell = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
       // Obtiene el texto en la primera celda de la fila (rango del competidor), elimina espacios en blanco al principio y al final
       let rankCell = row.querySelector("td:nth-child(1)").textContent.trim();
       
       // Verifica si el texto de búsqueda está vacío o coincide con el nombre del competidor o el rango del competidor
       if (searchText === "" || nameCell.includes(searchText) || rankCell === searchText) {
          // Si el texto de búsqueda está vacío o coincide con el nombre del competidor o el rango del competidor, muestra la fila
          row.style.display = "";
       } else {
          // Si el texto de búsqueda no coincide con el nombre del competidor ni el rango del competidor, oculta la fila
          row.style.display = "none";
       }
    });
 });
 



function createTable(data){
 // Selecciona el elemento HTML con el ID "data_output" donde se mostrarán los resultados
 let placeholder = document.querySelector("#data_output");
 // Inicializa una cadena vacía para almacenar el contenido HTML de la tabla
 let out = "";
 // Itera sobre cada elemento "ranking" en la matriz "data.rankings"
 for(let ranking of data.rankings){
     // Itera sobre cada "competitor_ranking" dentro de la matriz "ranking.competitor_rankings"
     for(let competitor_ranking of ranking.competitor_rankings){
         // Construye las filas de la tabla utilizando los datos de cada "competitor_ranking"
         out +=`
             <tr>
                 <td>${competitor_ranking.rank}</td> <!-- Muestra el rango del competidor -->
                 <td>${competitor_ranking.competitor.name}</td> <!-- Muestra el nombre del competidor -->
                 <td>${competitor_ranking.competitor.country}</td> <!-- Muestra el país del competidor -->
                 <td>${competitor_ranking.points}</td> <!-- Muestra los puntos del competidor -->
             </tr>
         `;
     }
 }
 // Inserta el contenido HTML construido en el elemento seleccionado
 placeholder.innerHTML = out;
}

const options = {method: 'GET', headers: {accept: 'application/json'}};
const api_Url = "https://api.sportradar.com/tennis/trial/v3/en/rankings.json?api_key=oPsMFg3Tqv4LWLSABb1b56jAaPS8sHNR4Sk86GYW"





fetch(api_Url, options)
  .then(response => response.json())
  .then(data => createTable(data))
  .catch(err => console.error(err));
