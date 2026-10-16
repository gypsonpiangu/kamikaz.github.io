function afficher(){
    const today = new Date()
    let heures = today.getHours()       //recuperation de l'heure actuel
    let minutes = today.getMinutes()
    let secondes = today.getSeconds()
    let nojour=["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi","Vendredi", "Samedi", ]
    let nomois=["Janvier", "fevrier", "mars","Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]
    let jour = nojour[today.getDay() ]
    let mois= nomois[today.getMonth()]
    let annee = today.getFullYear()
    let jourr = today.getDate()
    
    //Afficher la date
    document.querySelector("#date").innerHTML = jour + "  "+ jourr + "/" + mois + "/" + annee 

    if(heures <= 9){
        heures = "0"+ heures
    }if(secondes <=9){                  //Ajout de zero si h , m ,s <= 9
        secondes = "0"+ secondes
    }if(minutes <=9){
        minutes = "0"+ minutes
    }


  //afficher l'heure
    document.querySelector("#horloge").textContent = "HORLOGE " + " = " +  heures + " : " +  minutes + " : " +  secondes

    if(heures < 12){    
        document.querySelector("#message").textContent = "Bonjour"  ////afficher un message selon l'heure actuelle
        document.querySelector("body").style.backgroundColor = "antiquewhite" ///changer la couleur de fond selon l'heure
        document.querySelector("#horloge").style.color = "antiquewhite"
        document.querySelector("#message").style.color = "antiquewhite"

        let image1 = document.querySelector("#image1")
        image1.src ="images/matin.png" 
        image1.style.height = "50px"

        let image2 = document.querySelector("#image2")   //Ajouter une images de reference
        image2.src ="images/matin.png" 
        image2.style.height = "50px"


        let image3 = document.querySelector("#image3")
        image3.src ="images/matin.png" 
        image3.style.height = "50px"

    }if(heures >= 12){
        document.querySelector("#message").textContent = "Bon apres-midi"
        document.querySelector("body").style.backgroundColor = "darkkhaki"
        document.querySelector("#horloge").style.color = "darkkhaki"
        document.querySelector("#message").style.color = "darkkhaki"

        let image1 = document.querySelector("#image1")
        image1.src ="images/midi.png" 
        image1.style.height = "50px"

        let image2 = document.querySelector("#image2")
        image2.src ="images/midi.png" 
        image2.style.height = "50px"


        let image3 = document.querySelector("#image3")
        image3.src ="images/midi.png" 
        image3.style.height = "50px"


        
    }if(heures >=18){
        document.querySelector("#message").textContent = "Bonsoir"
        document.querySelector("body").style.backgroundColor = "black"
        document.querySelector("#horloge").style.color = "gray"
        document.querySelector("#message").style.color = "gray"

        let image1 = document.querySelector("#image1")
        image1.src ="images/soir.png" 
        image1.style.height = "50px"

        let image2 = document.querySelector("#image2")
        image2.src ="images/soir.png" 
        image2.style.height = "50px"


        let image3 = document.querySelector("#image3")
        image3.src ="images/soir.png" 
        image3.style.height = "50px"


    }if(heures >=22){
        document.querySelector("#message").textContent = "Bonne nuit"
        document.querySelector("body").style.backgroundColor = "aliceblue"
        document.querySelector("#horloge").style.color = "aliceblue"
        document.querySelector("#message").style.color = "aliceblue"
        

        let image1 = document.querySelector("#image1")
        image1.src ="images/nuit.png" 
        image1.style.height = "50px"

        let image2 = document.querySelector("#image2")
        image2.src ="images/nuit.png" 
        image2.style.height = "50px"


        let image3 = document.querySelector("#image3")
        image3.src ="images/nuit.png" 
        image3.style.height = "50px"

    }
}
//Exercice pratique Git : premiere modification

setInterval(afficher, 1000)  //renouveller l'heure a chaque 1000 secondesd