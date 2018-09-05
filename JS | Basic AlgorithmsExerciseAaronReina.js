//Start
console.log("I'm Ready!");
//Names and Input
//Create a variable hacker1 with the driver's name
var hacker1 = "Paco";
//Print "The driver's name is XXXX"
console.log("The driver's name is "+ hacker1);
//Create a variable hacker2 and ask the user for the navigator's name
var hacker2 = prompt("Please type the navigator's name")
//Print "The navigator's name is YYYY"
console.log("The navigator's name is "+ hacker2);
var charMin = "";
//Conditionals
/*Depending on which name is longer, print:
The Driver has the longest name, it has XX characters or
Yo, navigator got the longest name, it has XX characters or
wow, you both got equally long names, XX characters!!*/

if (hacker1.length === hacker2.length){
console.log("wow, you both got equally long names, " + hacker2.length + " characters!!");
//esta variable la modifico para el ejercicio 8
charMin= hacker1.length;

}
else if (hacker1.length > hacker2.length){
console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
//esta variable la modifico para el ejercicio 8
charMin= hacker2.length;
}
else {console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
//esta variable la modifico para el ejercicio 8
charMin= hacker1.length;
};
//Loops
//Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
for (var i = 0; i<hacker1.length; i++){
  console.log(hacker1[i].toUpperCase())
};
//Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
for (var j = hacker2.length-1; j>=0; j--){
  console.log(hacker2[j])
};
/*Depending on the lexicographic order of the strings, print:
The driver's name goes first
Yo, the navigator goes first definitely
What?! You both got the same name?*/
if (hacker1.toUpperCase()=== hacker2.toUpperCase()){
console.log("What?! You both got the same name?")
}
//En este caso al ser solo uno de los nombres variables no necesitaria compara ambas longitudes
//pero creo que es mejor opcion hacerlo asi para poder reutilizar el codigo con ambos nombres variables en un futuro
else if ((hacker1.substr(0,charMin)).toUpperCase()===(hacker2.substr(0,charMin)).toUpperCase()
&& hacker1.length<hacker2.length){ 
console.log("The driver's name goes first")  
}
else if ((hacker1.substr(0,charMin)).toUpperCase()===(hacker2.substr(0,charMin)).toUpperCase()
&& hacker1.length>hacker2.length){ 
console.log("Yo, the navigator goes first definitely")
}
for (var k = 0; k<charMin; k++){
  if (hacker1[k].toUpperCase()<hacker2[k].toUpperCase()){
console.log("The driver's name goes first")
break;
  }
 else if (hacker1[k].toUpperCase()>hacker2[k].toUpperCase()){
console.log("Yo, the navigator goes first definitely")
break;
  }
}
//Bonus Time!
//Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:
//esta primera variable no tengo muy claro como se ha generado, pero es lo que he encontrado
//al buscar un modo de saber si un char es una letra o no.
var letters = /^[A-Za-z]+$/;
var palindromes = prompt("Please type a new string to check if it is a Palindrome")
palindromes = palindromes.toUpperCase();
var palindromesFinal= "";
var index = 0;

for (var l= 0; l<palindromes.length;l++){  
      if(palindromes[l].match(letters)){
       palindromesFinal = palindromesFinal + palindromes[l]
      }
}
for (var m= 0; m<palindromesFinal.length;m++){  
      if(palindromesFinal[m] === palindromesFinal[(palindromesFinal.length-m-1)]){
       index++;
      }
}
if (index === palindromesFinal.length){console.log("OMG we have a palindrome here!!")}
else {console.log("Error 404, palindrome not found")}

/*Go to lorem ipsum generator and:
Generate 3 parragraphs. Store the text in a String*/
var paragraphs1 = "et et et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat quam ut cursus laoreet. Nam id nibh vitae tellus bibendum convallis at vel dolor. Etiam arcu sapien, malesuada eu finibus sed, tincidunt at est. Sed at varius massa, in efficitur nibh. Aenean a efficitur arcu, sed porttitor massa. In varius tortor sed condimentum sollicitudin. Aenean nec nunc suscipit, pellentesque metus vitae, faucibus ante. Aliquam sed lacus sit amet nibh suscipit suscipit quis eleifend velit. In dignissim lacus sit amet erat lacinia sollicitudin. Morbi eget iaculis odio. Sed egestas volutpat felis, eu tincidunt est egestas et.";
var paragraphs2 = "Vestibulum pellentesque vitae magna sit amet varius. Proin imperdiet turpis vitae libero congue, et molestie orci ornare. Nulla varius quam non erat rutrum, id consectetur erat sollicitudin. Nam ac sodales nulla, ac mattis mauris. Integer vestibulum, sem id tincidunt venenatis, nisi orci finibus turpis, eu mattis massa elit eget lacus. Aliquam ultrices nec ipsum et vulputate. Pellentesque purus neque, fringilla quis ligula quis, rhoncus convallis libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc pharetra quis felis non blandit. Mauris vitae eleifend leo, sed egestas orci. Fusce lacus nisi, laoreet at lacus eget, suscipit vestibulum sem. Morbi id elit sollicitudin, dignissim neque nec, hendrerit elit. Proin sed tempor nulla, non dictum sem.";
var paragraphs3 = "Nullam placerat magna at sagittis bibendum. Sed volutpat dui eu dolor dapibus molestie. Aliquam nec vehicula nunc, vitae fringilla arcu. Donec finibus sem mauris, quis laoreet est tempor at. Suspendisse sodales lorem ac diam gravida, quis dapibus purus vehicula. Suspendisse et iaculis libero. Ut luctus congue mollis. Integer non pellentesque diam. Vivamus nec tempor est. Morbi feugiat lacinia egestas. Maecenas suscipit luctus tempor. Phasellus at sodales enim, non tristique dui. Morbi venenatis velit vitae mi molestie, ut mollis libero vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;";
//Make your program count the number of words in the string
finalparagraphs1 = paragraphs1.split(" "); 
console.log("The first paragraph has "+finalparagraphs1.length+" words")
finalparagraphs2 = paragraphs2.split(" ");
console.log("The second paragraph has "+finalparagraphs2.length+" words")
finalparagraphs3 = paragraphs3.split(" ");
console.log("The third paragraph has "+finalparagraphs3.length+" words")

//Make your program count the number of times the latin word et appears
var index2 = 0;
var index3 = 0;
var index4 = 0;
var comparation = "et";
for(var p=0;p<finalparagraphs1.length;p++){
  if (finalparagraphs1[p]=== comparation){
    index2++
  }
}
for(var p=0;p<finalparagraphs2.length;p++){
  if (finalparagraphs2[p]=== comparation){
    index3++
  }
}
for(var p=0;p<finalparagraphs3.length;p++){
  if (finalparagraphs3[p]=== comparation){
    index4++
  }
}
console.log("The first paragraph has "+index2+" 'et' words")
console.log("The second paragraph has "+index3+" 'et' words")
console.log("The third paragraph has "+index4+" 'et' words")