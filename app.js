let forma = document.querySelector("form");
let ul = document.querySelector(".list");
let sel = document.querySelector("#transport");

let object = {
  Airplane: 400,
  Car: 90,
  Bicycles: 20,
  Motorbike: 30,
  Train: 120,
  Bus: 80,
  OnFoot: 10,
};

forma.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("#inputtext");
  let transport = sel.value;
  let tr = sel.value;
  let masofa = parseFloat(input.value);
  
    if (isNaN(masofa) || masofa <= 0 || transport === "") {
          alert("Masofa yoki transport berilmagan");
          return;
        }
      
      let tezlik = object[transport];
      
      let soat = masofa / tezlik;
      
      let minut = (soat * 60) % 60;
      let sekunt = (minut * 60) % 60;
      
      let le = document.createElement("li");
      le.textContent = `transport ${transport} bilan ${masofa} km masofani${parseInt(
          soat
          )}Soat ${parseInt(minut)}Minut ${parseInt(sekunt)}Sekuntda bosib otasiz`;
          
          ul.prepend(le);
          
  e.target.reset();
});
