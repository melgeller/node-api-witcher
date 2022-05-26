const personajeSection$$ = document.querySelector('.personajes')
const charBox =[]

const getchar = async () => {
    const charAPI = await fetch("http://localhost:5000/personajes");
    const charJSON = await charAPI.json();
    charBox.push(charJSON)
    console.log(charBox)
;
}



const witchPaint = (charBox) => {
    for(i=0; i<charBox.length; i++) {
    const char = charBox[i]
//NODOS
const cardDiv$$ = document.createElement("div");
    const titulo$$ = document.createElement("h2");
    const image$$ = document.createElement("img");
    const raza$$ = document.createElement("p");
    const prof$$ = document.createElement("p");
    const about$$ = document.createElement("p");

//INFO-NODOS
titulo$$.textContent = char.name
image$$.src = char.img
raza$$.textContent = char.raza
prof$$.textContent = char.profesion
about$$.textContent = char.about

//HIJOS
personajeSection$$.appendChild(cardDiv$$)
cardDiv$$.appendChild(titulo$$)
cardDiv$$.appendChild(image$$)
cardDiv$$.appendChild(raza$$)
cardDiv$$.appendChild(prof$$)
cardDiv$$.appendChild(about$$)

}


}


getchar()
witchPaint()