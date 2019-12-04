document.addEventListener("DOMContentLoaded", () => {
  let karty = ["griezmann.png","hazard.png","messi.png",
  "neymar.png", "ronaldo.png", "suarez.jpg",
  "griezmann.png", "hazard.png","messi.png",
  "neymar.png","ronaldo.png","suarez.jpg"];

  for (let i = 0; i < 12; i++) {
    document.querySelector("#a"+i).style.opacity = 1;
    document.querySelector("#a"+i).addEventListener("click", () => {
      odsloniecie_karty(i);
    });
  }


let pier_ods = false;
let licznik = 0;
let nr_pierwszy;
let blokada = false;
let par_pozostale = 6;

function odsloniecie_karty(nr) {
  //alert(nr);
  let karta = document.querySelector("#a"+nr);
  console.log(document.querySelector("#a"+nr).style);
  let nieprzejrzyste = karta.style.opacity;
  if(nieprzejrzyste != 0 && blokada == false) {
    blokada = true;
    karta.style.backgroundImage = "url(img/" + karty[nr] + ")";
    karta.classList.add("karta_aktywna");
    karta.classList.remove("karta");

    if (pier_ods == false) {
      // pierwsza karta
      pier_ods = true;
      nr_pierwszy = nr;
      blokada = false;
    } else {
      // druga karta
      if(karty[nr_pierwszy] == karty[nr]) {
        setTimeout(() => {
          ukryj_karty(nr,nr_pierwszy)
        },1000);
      } else {
        setTimeout(() => {
          przywroc_karty(nr,nr_pierwszy)
        },1000);

      }

      licznik++;
      document.querySelector("#punkty").innerHTML = licznik;
      pier_ods = false;
    }
  }
}


function ukryj_karty(pierwsza,druga) {
  document.querySelector("#a"+ pierwsza).style.opacity = 0;
  document.querySelector("#a"+ druga).style.opacity = 0;
  par_pozostale--;

  if(par_pozostale == 0) {
    document.querySelector(".tablica").innerHTML = '<h2> Wygrałeś :) w <br>' + licznik +  '<br> rundzie </h2>';
  }
  blokada = false;
}

function przywroc_karty(pierwsza,druga) {
  document.querySelector("#a"+ pierwsza).style.backgroundImage = 'url(img/kluby.gif)';
  document.querySelector("#a"+ pierwsza).classList.add("karta");
  document.querySelector("#a"+ pierwsza).classList.remove("karta_aktywna");

  document.querySelector("#a"+ druga).style.backgroundImage = 'url(img/kluby.gif)';
  document.querySelector("#a"+ druga).classList.add("karta");
  document.querySelector("#a"+ druga).classList.remove("karta_aktywna");

  blokada = false;
}

});
