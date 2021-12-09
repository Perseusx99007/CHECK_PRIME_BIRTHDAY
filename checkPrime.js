/**create a CLI app to check whether user's birthday is a prime number.
 * Ask user his / her name.
 * Ask his / her Date of Birth.
 * This time ask only DD/MM and don't take year.
 * Calculate and show his / her whether it's a prime number or not.
 * 
 * Bonus (Optional): check the input type and show an error if user entered "potato" instead of a DD/MM format.
 * Give an error if DD is more than 31 or MM is more than 12.
 * take it further and check the entire date for validity like 30/02 can never happen.
 */

 var readLineSync = require('readline-sync');

 var i;                                                             //loop counter
 var flag = 0;
 var stringFiltered;
 var stringFirst;
 var sF;
 var stringSecond;
 var sS;
 var stringMiddle;
 var stringConcat;
 var numberConcat;
 var length;
 
 var userName = readLineSync.question("Hi User, Please Enter your Name :- ");
 var dateOfbirth = readLineSync.question("\n\nHi " + userName + "!!! PLEASE ENTER YOUR DATE OF BIRTH IN DD/MM FORMAT - \n\nYEAR NOT REQUIRED \n\n:- ");
 
 function prime(a)                                                      //defining function to check prime number
 {
   if (a == 1)                           
   {
     return false;
   }
   else if (a == 2)
   {
     return true;
   }
   else
   {
     for (i = 2; i < a; i++)
     {
       if (a % i == 0)                                          //checking if number is divisible
       {
         flag = 1;
         break;
       }
     }
 
     if (flag == 1)
     {
       return false;
     }
     else
     {
       return true;
     }
   }
 }
 
 stringFiltered = +(dateOfbirth.replace("/", ""));                //removing "/" from the string altogether
 stringFirst = dateOfbirth.substr(0, dateOfbirth.length - 3)    //Extracting the first half of the string
 sF = +stringFirst;                     //changing the first half of the string into a numerical value
 stringSecond = dateOfbirth.substr(3, dateOfbirth.length);  //Extracting the second half of the string
 sS = +stringSecond;                                 //changing the second half of the string into a numerical value
 stringConcat = stringFirst + stringSecond;         //concatinating the string value of the first and second half of the string
 numberConcat = +("" + sF + sS);        //concatinatinating the numerical values of the first and second half od the string and changing it into a number
 stringMiddle = dateOfbirth.slice(2, dateOfbirth.length - 2);                  //extracting "/" from the string
 length = +(dateOfbirth.length);                                                //getting a numerical value of the length
 
 //console.log(stringFiltered);
 //console.log(stringFirst);
 //console.log(stringSecond);
 //console.log(stringMiddle);
 //console.log(sF);
 //console.log(sS);
 //console.log(stringConcat);
 //console.log(numberConcat);
 //console.log(dateOfbirth.length);
 
 if (length == 5)
 {
   if (!isNaN(stringFirst) && !isNaN(stringSecond))
   {
     if (stringMiddle === "/")
     {
       if ((sF <= 31 && sS == 1) || (sF <= 29 && sS == 2) || (sF <= 31 && sS == 3) || (sF <= 30 && sS == 4) || (sF <= 31 && sS == 5) || (sF <= 30 && sS == 6) || (sF <= 31 && sS == 7) || (sF <= 31 && sS == 8) || (sF <= 30 && sS == 9) || (sF <= 31 && sS == 10) || (sF <= 30 && sS == 11) || (sF <= 31 && sS == 12))
       {
         if (prime(sF) == true)
         {
           console.log("\n\n\nYou Were born on a PRIME DAY!!!");
         }
         else
         {
           console.log("\n\n\nYou were not born on a prime day.");
         }
         if (prime(sS) == true)
         {
           console.log("\n\n\nYou Were born on a PRIME MONTH!!!");
         }
         else
         {
           console.log("\n\n\nYou were not born on a prime month.");
         }
         if (prime(numberConcat) == true)
         {
           console.log("\n\n\nYou are PRIME!!!");
         }
         else
         {
           console.log("\n\n\nYou are not PRIME.");
         }
         if (prime(stringFiltered) == true)
         {
           console.log("\n\n\nHello Optimus Prime!!!");
         }
         else
         {
           console.log("\n\n\nYou are not Optimus Prime.");
         }
       }
       else
       {
         console.log("DATE / MONTH IS INVALID.");
       } 
     }
     else
     {
       console.log("FORMAT INCORRECT.");
     }
   }
   else
   {
     console.log("DATE AND MONTH SHOULD HAVE NUMBERS ONLY.");
   }
 }
 else
 {
   console.log("INVALID ENTRY");
 }