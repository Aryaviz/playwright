/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade(score) {
   let grade;
   switch (true) {
      case score>= 90:
         console.log(grade ='A');
         break;
      case score>= 80:
         console.log(grade ='B');
         break;
      case score>= 70:
         console.log(grade ='C');
         break;
      case score>= 60:
         console.log(grade ='D');
         break;
      case score>= 60:
         console.log(grade ='E');
         break;
   
      default:
         console.log(grade ='F');
         break;
   }
   
}
calculateGrade(60);