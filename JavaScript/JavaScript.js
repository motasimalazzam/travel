alert("Hello Travelers");

   var UserName = prompt('What is your name');
   
   function GetTheName(Name) {
    alert("Welcome "+Name+" to our Website")   ;
    // document.write('<h3>'+"Thank you "+UserName+'</h3>');   
  }
   GetTheName(UserName);
    

     
   var place = prompt("Where would you like to spend Your vacation in Petra, Wadi Rum or Aqaba?"); 
     
   function GetFavourtPlace(Fplace) {
         
     while(Fplace!='Petra'&& Fplace!='Wadi rum'&& Fplace!='Aqaba'){
    Fplace=prompt('pleas only write Petra or Wadi rum or Aqaba and dont forget using CAPITAL LETTER at begining');

         }
   }
      GetFavourtPlace(place);
     
      var GetRate = function(){
     var rating=prompt('rate the webSite out of 5');
     var star='<img src="star.jpg" alt="img" width="150px">';
     var result='';
     document.write('<h3>'+"Thank you "+UserName+'</h3>'); 
     for( var i=0; i<rating; i++){
         result+=star;
             }
     return result
    }
     


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
