# Part 1
- Question 1: the value of i (the length of prices -1) will be printed to the console. In the example from part 4, the number "3" will be printed

- Question 2: The last value of discountedPrice will be printed to the console. In the example from part 4, it would be 150 (0.5*300)

- Question 3: The last value of finalPrice will be printed to the console. In the example from part 4, it would be 150

- Question 4: The function will return an array with the discounted prices. In this example it would be [50, 100, 150] because the discount is 50%, the prices are halved

- Question 5: Unlike "var", "let" is a block scope. meaning that if we declare a variable inside "{}" and we used "let" then this variable is only effective within its scope. Thus, line 11 currently gives an error ("i is not defined"), as we would expect.

- Question 6: Similar to question 5 (we need to comment out line 11), we'd get an error.

- Question 7: Unlike lines 11&12, we wouldn't get an error for line 13 (after we comment out lines 11 and 12) because "finalPrice" is within the scope of the function, so when we want to print it, it's defined

- Question 8: The function will return similar results to part 4; an array with the prices after discount (assuming we resolve the errors from part 5&6)

