
const texte = document.getElementById("text");

let affichage = "";

let precedent = 0; 

let operation = null;



window.onload = () => {
    const allBouton = document.querySelectorAll("button");
    for (let bouton of allBouton)
    {
        bouton.addEventListener("click", gererTouche)
    }

}

function gererTouche() {
    let touche = this.innerText
    if (parseFloat(touche) >= 0 || touche === ".")
    {
        affichage = (affichage === "") ? touche.toString() : affichage + touche.toString();
        texte.value =affichage;
    }
    else
    {
        switch(touche)
        {
            case "C": 
                precedent = 0;
                affichage = ""
                operation = null;
                texte.value = 0;
                break;
            case "+":
                precedent = (precedent === 0) ? parseFloat(affichage) : calcul(precedent, parseFloat(affichage), operation);
                texte.value = precedent;
                operation = touche;
                affichage = "";
                break;
            case "-":
                precedent = (precedent === 0) ? parseFloat(affichage) : calcul(precedent, parseFloat(affichage), operation);
                texte.value = precedent;
                operation = touche;
                affichage = "";
                break;
            case "*":
                precedent = (precedent === 0) ? parseFloat(affichage) : calcul(precedent, parseFloat(affichage), operation);
                texte.value = precedent;
                operation = touche;
                affichage = "";
                break;
            case "=":
                precedent = (precedent === 0) ? parseFloat(affichage) : calcul(precedent, parseFloat(affichage), operation);
                texte.value = precedent;
                affichage = precedent;
                precedent = 0 ;
                break;
            
        }
    }

 
    }



    
    


function calcul(op1, op2 , operation)
{
    op1 = parseFloat(op1)
    op2 = parseFloat(op2)
    if (operation === "+") return op1 + op2 ;
    if (operation === "-") return op1 - op2 ;
    if (operation === "*") return op1 * op2 ;

}
    
