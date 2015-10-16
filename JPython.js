function question1() {
    var person = prompt("Please enter yes, no, or maybe.", "maybe");
    if (person = "yes") {
        document.getElementById("one").innerHTML =
        "But of course comedy isn't all fun. It's all very well to laugh at comedy, but when one considers the meaning of comedy, it is a struggle between alternative humors of comedy itself. And without the ability to defend one's own humor against other, perhaps more aggressive humors, then laughableness and hilarity could quite simply disappear. That is why we'll always need comedy, and may God strike me down were it to be otherwise! ";
    }
else {
document.getElementById("one").innerHTML =
"In that case, you’re in the right place! :)"
}
}

function ShowMessage()
         {
       var film;
       
       film = parseFloat(document.getElementById('filmBox').value); 
       
       if (film < 1) {
         alert('Always look on the bright side of life. You have much more Python to learn! :))');
       }
else{
if (film = 1){
alert('Salutations! You’ve made it to the middle of this webpage. Well, maybe not the exact middle. However, one word of advice: if you have seen one Python film, you have NOT seen them all!');
}
else{
if(film > 1){
alert('Congratulations, you’re a real Pythonophile! Of course, all you have to show for it is a familiarity with the airspeed velocity of an unladen European swallow!')}
}
}
     }