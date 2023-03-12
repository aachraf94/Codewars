/**
 * The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
 */


function generateHashtag (str) {
    let text = str.trim(); // Do this first
    if (text == "") {return false;}
    else
      {
       const myArray = text.split(" ");
       let mot ="";
       let finalStr = ""
       for(let i=0; i< myArray.length; i++)
         {
           mot = myArray[i];
           mot = mot.charAt(0).toUpperCase() + mot.slice(1);
           finalStr =finalStr + mot;
         }
       if(finalStr.length >=140){return false;} // Take "#" into account
       else {return "#"+finalStr;}
     }
 }