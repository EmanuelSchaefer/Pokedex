function htmelPokemonRender(i, j, pokeId, pokeName, pokemonImage, pokemonType) {
    return `                                             
    <div onclick="openInfoContainer(${i})" class="PositionsContainer">
      <div class="inStyle">
  
        <div class="NameIDstyle">
           <p>#${pokeId}</p>
           <h2>${pokeName}</h2>
        </div>
                 
        <div class="ImgTypestyle">
           <img src="${pokemonImage}">
           <p class="pColor" id="pType${j}" style="color: ${alltypecolors(pokemonType)}">${pokemonType}</p>
        </div>
  
      </div>
    </div>                            
    `;
  }

  function htmlPokemonCard(i, PokeId, PokeName, PokemonImage, statHin, statFor, statHin1, statHin2, statHin3, statHin4, statFor1, statFor2, statFor3, statFor4) {
    return `
    <div id="allSingelCard" class="allSingelCard(${i})">
    
      <div class="pokeSingleCardH">
        <div class="centerHdiv">
         <div class="headCardID">
            <p>#${PokeId}</p>
         </div>
         <div class="headCardNAME">
            <h3>${PokeName}</h3>     
         </div>
         </div>
         <div class="UHeadImg">
            <img class="imgCard" src="${PokemonImage}">
         </div>
      </div>
    
      <div class="pokeSingleCardF">
         <div class="InfoPOKEMON">
            <div class="stat">
            <table class="Ntable">
            <tbody class="Tbody">
             <tr class="Trtr">
              <td>${statHin}</td>
              <td>${statHin1}</td>
              <td>${statHin2}</td>
              <td>${statHin3}</td>
              <td>${statHin4}</td>
             </tr>
             <tr class="trTr">
              <td>${statFor}</td>
              <td>${statFor1}</td>
              <td>${statFor2}</td>
              <td>${statFor3}</td>
              <td>${statFor4}</td>
             </tr>
             </tbody>
            </table>
          </div>
        </div>
      </div>
    
    </div>
      `;
  }