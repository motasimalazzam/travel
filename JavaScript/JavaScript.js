alert("Hello Travelers");
   var UserName = prompt('What is your name');
    alert("Welcome "+UserName+" to our Website")   ;
     document.write('<h3>'+"welcome "+UserName+'</h3>');
   var place = prompt("Where would you like to spend Your vacation Petra, Wadi Rum or Aqaba");
if(place=="Petra"){
    alert("Petra is a great choice for lovers of archeology and history");
}
else if(place == "Wadi rum"){
    alert("Wadi rum is a good place to camp");
    }
    else if(place=="Aqaba"){
        alert("You will spend a good time at the beach");
    }
    else{
        alert("DONT FORGET USING A CAPITAL LETTER AT BEGINNING OF THE PLACE NAME" );
    }
