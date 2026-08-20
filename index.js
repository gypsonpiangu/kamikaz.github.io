function afficher(){
    const today = new Date()
    let heures = today.getHours()       //recuperation de l'heure actuel
    let minutes = today.getDate()
    let secondes = today.getSeconds()

    if(heures <= 9){
        heures = "0"+ heures
    }if(secondes <=9){                  //Ajout de zero si h , m ,s <= 9
        secondes = "0"+ secondes
    }if(minutes <=9){
        minutes = "0"+ minutes
    }
  //afficher l'heure
    document.querySelector("#horloge").textContent = "HORLOGE " + " = " +  heures + " : " +  minutes + " : " +  secondes

    if(heures < 12){    //afficher un messag selon l'heure actuelle
        document.querySelector("#message").textContent = "Bonjour"
        document.querySelector("body").style.backgroundColor = "antiquewhite"

    }if(heures >= 12){
        document.querySelector("#message").textContent = "Bon apres-midi"
        document.querySelector("body").style.backgroundColor = "darkkhak"

        
    }if(heures >=18){
        document.querySelector("#message").textContent = "Bonsoir"
        document.querySelector("body").style.backgroundColor = "gray"

    }if(heures >=22){
        document.querySelector("#message").textContent = "Bonne nuit"
    }
}

setInterval(afficher, 1000)  //renouveller l'heure a chaque 1000 secondes