alert("Hello Travelers");
   var UserName = prompt('What is your name');
    alert("Welcome "+UserName+" to our Website")   ;
     document.write('<h3>'+"welcome "+UserName+'</h3>');
   var place = prompt("Where would you like to spend Your vacation in Petra, Wadi Rum or Aqaba?");

while(place!='Petra'&& place!='Wadi rum'&& place!='Aqaba'){
    place=prompt('pleas only write Petra or Wadi rum or Aqaba and dont forget using CAPITAL LETTER at begining');

}

var rating=prompt('rate the webSite out of 5');
var star='<img src="star.jpg" alt="img" width="250px">';
var result='';
for( var i=0; i<rating; i++){
    result+=star;
}
document.write(result);

   /*if(place=="Petra"){
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
    }*/
