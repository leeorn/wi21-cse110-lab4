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
