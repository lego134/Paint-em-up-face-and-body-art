{ // the brackets around this file create a private scope so you can run this chrome dev tools as a "snippet"

    /* ======== VARIABLES RECAP ======== */
    
    // variable declaration and assignment
    const fancyCoffeeBeans = "Sumatra";
    
    // variable declaration
    let anyBean;
    
    // STEP 1: assign the string "Arabica" to the variable anyBean.
    anyBean = "Arabica"
    
    // STEP 2: declare and assign a new variable to represent different coffee beans (use const)
    const differentBearn = "Robusta"
    const differentBearn2 = "Liberica"
    const differentBearn3 = "Excelsa"
    
    // STEP 3: declare a new variable but do not assign it a value.
    let Beans;
    
    // STEP 4: console.log this new variable.
    console.log(Beans);
    
    // STEP 5: what is the output? (answer as a comment)
    
    
    //STEP 6: do your best to explain what caused this result:
    
          
    /* ================================= */
    
    
    
    
    /* ======== FUNCTIONS RECAP ======== */
    
    // this is the syntax for an "arrow" function (the parentheses are able to contain any parameters you want your function to accept)
    () => {    // sometimes they are called "fat arrow functions"
               // this is where your function logic lives. between the curly braces
    }          // the curly braces also create "scope"
               // you almost always want to use function declaration so that your function is assigned to a variable you can use multiple times
    
    // function declaration
    let kettle = (liquid) => { // "liquid" is a parameter
    
        // a return statement is needed so your function can output a value    
        return "nice piping hot " + liquid; // string concatenation
    }
    
    // function invocation (also known as executing, calling, triggering)
    // "a cup of water" is the argument. As the function is run, the parameter liquid takes on the value "a cup of water"
    kettle("a cup of water");
    
    // STEP 1: comment out the function invocation "kettle("a cup of water");"
    
    
    // STEP 2: replace the string with your own invocation of the kettle function. pass the parameter "milk" into your invocation of kettle
    const hotMilk = "invoke here";
    
    // STEP 3: console log the variable hotMilk
    
    
    // STEP 4: check that the output "milk" is printed to the console (what you just did was log the output of the function kettle by using the variable hotMilk)
    
    
    // STEP 5: now try calling the kettle function with a different argument
    
    
    // STEP 6: assign that function call to a variable of your choosing
    
    
    // STEP 7: console.log that variable
    
    
    // STEPS 8-10: create a new function named coffeeMachine.
    //             have coffeeMachine accept TWO parameters named beanType and cream (just separate your parameters between the parentheses with a comma. (first, second))
    //             add a return statement to your function that returns beanType
    
    
    /* ================================= */
    
    
    
    
    /* ========= CONDITIONALS ========= */
    
    // STEP 1: move your coffeeMachine function here. (cut and paste, or comment it out and paste the function here)
    
    
    // STEPS 2-4: invoke the coffeeMachine function, and pass in the variable you created in "VARIABLES RECAP STEP 2" as an argument
    //            now assign that function invocation to a variable called myCoffee
    
    
    // STEP 5: console.log the myCoffee variable
    
    
    // STEP 6: adjust the coffeeMachine invocation from STEP 2 so that a second argument is passed in. make it the boolean true
    
    
    // NOTE: the rest of the steps will have you modify the coffeeMachine function in STEP 1
    // STEP 7: in our coffeeMachine function, add an if statement (conditional) before the return statement
    
    
    // STEP 8: use the strict equality operator to check if cream is true inside the parentheses of your new "if" statement
    
    
    // STEPS 9-10: above your if block (but still inside your function), declare a new variable called yourDrink
    //             change your return statement so that it returns yourDrink instead of beanType
    
    
    // STEP 11: inside of your if block, re-assign the yourDrink variable to a string that says "Here's a tasty cup of coffee with cream, Enjoy!"
    
    
    // STEP 12: use string concatenation so that beanType is used in the yourDrink variable
    //          an example output would be "Here's a tasty cup of Arabica coffee with cream, enjoy!"
    
    
    // STEP 13: but what if someone wants black coffee? our function should be able to handle that. add an else statement to the end of your if block that assigns yourDrink to a string offering up a cup of black coffee
    
    
    // STEPS 14-15: let's adjust our conditional so that it can handle a third possibility of nothing being ordered at all. change the else statement to an else if()
    //              in the parentheses of the else if, check that cream is NOT true (!==)
    
    
    // STEP 16: finally add an else statement to the end of your conditional block that assigns yourDrink to a string that says "You didn't order any coffee!"
    
    
    /* ================================ */
    
    
    
    
    /* ======== BONUS STEPS ========== */
    
    // can you modify the coffeeMachine function so that it accepts the kettle() function you built at the beginning? (yes functions can accept other functions as arguments!)
    // HINT: pass in the kettle function to coffeeMachine and then console log it to see what it's value is.
    
    // can you fix the coffeeMachine function so that if only the "true" cream parameter is passed in, it doesn't log "Here's a tasty cup of true black coffee, enjoy!"
    
    // can you add a feature to your coffeeMachine function that allows users to ask for decaf?
    // HINT: you could start by adding a third parameter to your function
    
    /* =============================== */
    
    }