function c(n){
  console.log(n)
}

function displayData(data){
  c(data)
  let eve=data._embedded;
  eve=eve.events;
  /*if(!eve){ eve=  {priceRanges: [{ min: " na " }, {max:" na "} ] , url: "www.tickemaster.com", name:" no name found "    }; }
 */ let priceR;
  let U;
  c(eve)
  for(let elem in eve){
    if(eve[elem].priceRanges)
      {priceR=eve[elem].priceRanges; }
    else{
      priceR=[{min:" no min $ info. ", max:" no max $ info. "}];
    }
    if(eve[elem].url)
      {U=eve[elem].url; }
    else{
      U={url:"www.tickemaster.com"};
    }

    c(priceR)
    let node=document.createElement("div");
    let textNode=document.createTextNode(eve[elem].name + " : minimum price: "+priceR[0].min + " : max price: "+priceR[0].max);
    node.appendChild(textNode);
    let aTag=document.createElement("a");
    aTag.setAttribute("href", U);
    aTag.innerHTML=(" "+ eve[elem].name + " : minimum price: "+priceR[0].min + " : max price: "+priceR[0].max+"\n"+"<br>");

    if(!eve){aTag.innerHTML=(" "+ "name not found" + " : minimum price: "+"na" + " : max price: "+"na"+"\n"+"<br>");}
    
    document.getElementById( "mainContainer" ).appendChild(aTag)  
  c(  eve[elem].name + " : minimum price: "+priceR[0].min + " : max price: "+priceR[0].max)
  }

}

function searchData(searchThis){
 //c("this works")
  fetch( "https://app.ticketmaster.com/discovery/v2/events.json?keyword="+searchThis+"&countryCode=US&apikey=xioogYVWdGrcfoWjnVK3HdZt2XQy1jZq").then(function(response){
    //c(response.json())

    return response.json();
  }).then( function(data){
    //console.log(data);
    //update the containter
    c("this works")
    displayData(data)
    

  }).catch(function(data){
    c( data);
  } )


}
//console.log("f")

function getInput(ele){
   if(event.keyCode == 13) {
        alert(ele.value);        
    }
  let val=document.getElementById('mainInputField').value;
  clearData()
  searchData( val );

}

function clearData(){
  document.getElementById( "mainContainer" ).innerHTML="";

}

//searchData("JAY-Z")


