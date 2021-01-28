# Part 1
- Question 1: the value of i (the length of prices -1) will be printed to the console. In the example from part 4, the number "3" will be printed

- Question 2: The last value of discountedPrice will be printed to the console. In the example from part 4, it would be 150 (0.5*300)

- Question 3: The last value of finalPrice will be printed to the console. In the example from part 4, it would be 150

- Question 4: The function will return an array with the discounted prices. In this example it would be [50, 100, 150] because the discount is 50%, the prices are halved

- Question 5: Unlike "var", "let" is a block scope. meaning that if we declare a variable inside "{}" and we used "let" then this variable is only effective within its scope. Thus, line 11 currently gives an error ("i is not defined"), as we would expect.

- Question 6: Similar to question 5 (we need to comment out line 11), we'd get an error.

- Question 7: Unlike lines 11&12, we wouldn't get an error for line 13 (after we comment out lines 11 and 12) because "finalPrice" is within the scope of the function, so when we want to print it, it's defined

- Question 8: The function will return similar results to part 4; an array with the prices after discount (assuming we resolve the errors from part 5&6)

- Question 9: "const" is similar to "let" by the fact that the variable is defined only within the block scope. Another constrain that "const" has is the fact that one cannot re-assigning the value. Thus, the first error in the current code raises on line 7 (when re-assigning value to finalPrice). But, ignoring this part, line 11 has an error because we try to print i outside of its scope. 

- Question 10: Similarly to the above question, and ignoring previous errors, line 12 raises an error because we try to print the variable outside of its scope

- Question 11: finalPrice is still within its scope, so theoretically, we can print its value. However, in line 7 we try to change its value, which is not possible since it's a const. 

- Question 12: Honestly, I'm not sure what to answer for this part because there's an error in line 7, we can't re-assign values to finalPrice. So if we were to ignore (comment out) that line, we would only push 0s to the array, so the return would be an array of 0s. If we don't ignore this line, then we get an error. 

- Question 13:
    - A. student.name
    - B. student["Grad Year"]
    - C. student.greeting()
    - D. student["Favorite Teacher"].name
    - E. student.courseLoad[0]

- Question 14:
    - A. output: 32. The number 2 is cast to be a string and then concatenated with '3' to create '32'
    - B. output: 1. the string '3' is cast to a number, thus the results is 1.
    - C. output: 3. The null becomes 0, th us the result is 3.
    - D. output: 3null. concatenate the string 3 and null.
    - E. output: 4. true becomes 1, and then added to the number 3.
    - F. output: 0. false becomes 0, null as well, so 0+0=0.
    - G. output: 3undefined. undefined is concatenated to the string 3 to create one word.
    - H. output: NaN. It doesn't make sense to subtract undefined from a string, so the result is NaN

- Question 15:
    - A. output: true. string '2' becomes a number 2, which yields a true boolean.
    - B. output: false. string comparison, each index is compared, since '2' is greater than '1' the equation is false.
    - C. output: true. the string is converted to a number.
    - D. output: false. they are two different types which immediately returns false.
    - E. output: false. true is the same as 1, not 2.
    - F. output: true. 2 is converted to boolean, since it's not 0, it's true.

- Question 16: the operator '===' is a strict equality operator, which means that it checks the equality without type conversion. If the types are different, then it's always false, unlike the '==' operator.

- Question 17: output: How are you?. Because 2 is not equal to 1 (true is converted to 1), but since 2 is not 0, the else if statment is true, so it prints its message.

- Question 18: in file "part1-question18.js"

- Question 19: The result of the function with the given example would be [6,8,10]. What then happens is that we call the function 'modifyArray', which inside the for loop calls the function 'doSomething'. 'doSomething' adds 2 to each value, then we double the result and store it in the array which is later returned. Also, to verify the results I copied and ran the code locally. 

- Quesstion 20: in file "part1-question20.js"

- Question 21: The output would be "1; 3; 2" in that order (a new line for each number). The reason is the number 2 is waiting 1 second before printing, the rest is going by order (so print 1, wait 1 sec for 2, print 3 then 2 is printed).

