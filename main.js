// task 1
// Installation completed
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// task 2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName = "Eric";
console.log("hello ".concat(personName, ", would you like to learn some Python today?"));
//task 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Lower Case
var personName = "Abdullah";
console.log("lowercase:", personName.toLowerCase());
// Upper Case
console.log("uppercase:", personName.toUpperCase());
// Title Case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
// task 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var quote = "A person who never made a mistake never tried anything new";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
// task 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var quote = "A person who never made a mistake never tried anything new.";
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
// task 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personName = "\n\t ABDUL RAHMAN\t\n";
console.log(personName);
var stripped = personName.trim();
console.log(stripped);
// task 7,8
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// task 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favouritenumber = 100;
console.log("My favourite number is ".concat(favouritenumber));
// task 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// #project 01
// Abdul Rahman Azam
// 06-MAR-2024
// In this program we will write A-Z:
console.log("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,X,Y,Z");
// #project 02
// Abdul Rahman Azam
// 06-MAR-2024
// In this program we will write 1-10:
console.log("1,2,3,4,5,6,7,8,9,10");
// task 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friends = ["Abdullah", "Ibrahim", "Haseeb", "Tameem"];
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
// task 12
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var friends = ["Abdullah", "Ibrahim", "Haseeb", "Tameem"];
var message = "You are invideted on dinner tomorrow ";
for (var i = 0; i < friends.length; i++) {
    console.log(message + friends[i]);
}
// task 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["car", "bike", "train", "aeroplane"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to buy a beautiful " + transportation[i]);
}
// task 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest_list = ["Abdullah", "Ibrahim", "Haseeb", "Talha"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear " + guest_list[i] + "\n\nYou are invited for a dinner tomorrow.\n\nThank you.");
}
;
// task 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guest_list = ["Abdullah", "Ibrahim", "Haseeb", "Talha"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n"));
}
var not_coming = "Talha";
var new_guest = "Tameem";
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n"));
}
console.log("Mr ".concat(not_coming, ", is not coming for dinner tomorrow"));
// task17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guest_list = ["Abdullah", "Ibrahim", "Haseeb", "Talha"];
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}, \n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n `)
// }
var not_coming = "Talha";
var new_guest = "Tameem";
guest_list[3] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}, \n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n `)
// }
// console.log(`Mr ${not_coming}, is not coming for a dinner tomorrow`);
guest_list.unshift("Umar");
guest_list.splice(guest_list.length / 2, 2, "Sufyan");
guest_list.push("Ali");
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}, \n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n `)
// }
// console.log(`We have found a bigger dining table so we invited more guests`);0
console.log("\n\nUnfortunately we are out of space, so we have space for two guests only.\n\n");
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("Sorry, Dear ".concat(removed_guest, ", You are not invited for a dinner tomorrow."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], ", \n\nYou are still invited for a dinner tomorrow.\n\nThank you.\n\n "));
}
guest_list.splice(0, 2);
console.log(guest_list);
// task18
// //Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var places = ["Islamabad", "Makka", "Madina", "Palestine", "Kashmir"];
// • Print your array in its original order.
console.log("orginal " + places);
// • Print your array in alphabetical order without modifying the actual list.
console.log("copy " + __spreadArray([], places, true).sort());
// • Show that your array is still in its original order by printing it.
console.log("orginal " + places);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("copy " + __spreadArray([], places, true).sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("orginal " + places);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("orginal " + places.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("orginal " + places.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("orginal " + places.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("orginal " + places.sort().reverse());
// task19
var guest_list = ["Abdullah", "Ibrahim", "Haseeb", "Talha"];
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}, \n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n `)
// }
var not_coming = "Talha";
var new_guest = "Tameem";
guest_list[3] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}, \n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n `)
// }
// console.log(`Mr ${not_coming}, is not coming for a dinner tomorrow`);
guest_list.unshift("Umar");
guest_list.splice(guest_list.length / 2, 2, "Sufyan");
guest_list.push("Ali");
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}, \n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n `)
// }
// console.log(`We have found a bigger dining table so we invited more guests`);
// console.log(`\n\nUnfortunately we are out of space, so we have space for two guests only.\n\n`);
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    //    console.log(`Sorry, Dear ${removed_guest}, You are not invited for a dinner tomorrow.`);
}
// for(let i=0; i<guest_list.length; i++){
//         console.log(`Dear ${guest_list[i]}, \n\nYou are still invited for a dinner tomorrow.\n\nThank you.\n\n `)
//     }
guest_list.splice(0, 2);
console.log(guest_list);
// Exercise 19
// print a message indicating the number of people you are inviting to dinner.
console.log("Total number of guests are: ".concat(guest_list.length));
// task20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var programming_languages = ["Python", "JavaScript", "Typescript", "C++", "Java"];
console.log("Some programming languages are: ", programming_languages);
// Book object
var book = {
    title: "A Brave Man",
    author: "A.R",
    yearPublished: 2009,
};
// Print Book
console.log("Book name: ".concat(book.title, " written by: ").concat(book.author, ", published in ").concat(book.yearPublished));
// Car object
var car = {
    maker: "toyota",
    color: "Black",
    automatic: true
};
// Print car
console.log(car);
// task22
// If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Creating array
var fruits = ["mangoes", "banana", "oranges", "apple"];
// Accessing array by index
console.log(fruits[5]);
//  Make sure you correct the error before closing the program.
// Correct the error
console.log(fruits[3]);
// task23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Creating car variable
var car = 'subaru';
// Test no.1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test no.2
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test no.3
console.log("Is car !=' toyota'? I predict True.");
console.log(car != 'toyota');
// Test no.4
console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');
// Test no.5
console.log("Is car.Upper case == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');
// Test no.6
console.log("Is car == 'toyota'? I predict false.");
console.log(car == 'toyota');
// Test no.7
console.log("Is car === 'toyota'? I prdict False");
console.log(car === 'toyota');
// Test no.8
console.log("Is car != 'subaru'? I predict False");
console.log(car != 'subaru');
// Test no.9
console.log("Is car !== 'subaru'? I predict False");
console.log(car !== 'subaru');
// Test no.10
console.log("Is car == 'SUBARU'? I predict False");
console.log(car == 'SUBARU');
// task24
// Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
// Tests for equality
console.log("Equility test with strings: ", "Apple" === "Apple");
console.log("Equility test with strings: ", "Apple" === "Banana");
// Tests for inequality
console.log("Inequility test with strings: ", "Apple" !== "Orange");
console.log("Inequility test with strings: ", "Apple" !== "Apple");
//  Tests using the lower case function
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "HELLO");
// Numerical tests involving equality
console.log("Equility test with numbers: ", 26 === 26);
console.log("Equility test with numbers: ", 26 === 36);
// Numerical tests involving inequality
console.log("Inequility test with numbers: ", 26 !== 46);
console.log("Inequility test with numbers: ", 26 !== 26);
// Numerical tests involving greater than 
console.log("Greater than test with numbers: ", 10 > 5);
console.log("Greater than test with numbers: ", 4 > 5);
// Numerical tests involving less than 
console.log("Less than test with numbers: ", 5 < 15);
console.log("Less than test with numbers: ", 14 < 5);
//  Numerical tests involving greater than or equal to
console.log("Greater than or equal to test with numbers: ", 10 >= 10);
console.log("Greater than or equal to test with numbers: ", 10 >= 15);
//   Numerical tests involving less than or equal to
console.log("Less than or equal to test with numbers: ", 5 <= 10);
console.log("Less than or equal to test with numbers: ", 15 <= 10);
// Tests using "and" operator
console.log("And operator test: ", 5 === 5 && 10 > 5);
console.log("And operator test: ", 5 === 5 && 2 > 5);
// Tests using "or" operators
console.log("Or operator test: ", 5 === 5 || 10 > 5);
console.log("Or operator test: ", 5 === 8 || 2 > 5);
// Test whether an item is in a array
var fruits = ['Mangoes', 'Banana', 'Orange'];
console.log('Test "Mangoes" in the array: ', fruits.includes("Mangoes"));
console.log('Test "Strawberry" in the array: ', fruits.includes("Strawberry"));
// Test whether an item is not in a array
console.log('Test "Apples" in the array: ', !fruits.includes("Apples"));
console.log('Test "Banana" in the array: ', !fruits.includes("Banana"));
// task25
// Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
var alien_color = 'green';
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
// • Write one version of this program that passes the if test and another that fails.
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
// task26
// Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
var allineColors = 'green';
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (allineColors === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
allineColors = 'yellow';
if (allineColors === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
// • Write one version of this program that runs the if block and another that runs the else block.
// task27
// Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alienColors = 'green';
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// Version 1 of the program
if (alienColors === "green") {
    console.log("Version 1: Player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("Player earned 15 points.");
}
else {
    console.log("Please select right color.");
}
// Version 2 of the program
alienColors = 'yellow';
if (alienColors === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("Version 2: Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("Player earned 15 points.");
}
else {
    console.log("Please select right color.");
}
// Version 3 of the program
alienColors = 'red';
if (alienColors === "green") {
    console.log("Version 1: Player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("Version 3: Player earned 15 points.");
}
else {
    console.log("Please select right color.");
}
// task28
// Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
var age = 25;
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// task29
// Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
var favorite_fruits = ['apple', 'banana', 'orange'];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.includes('apple')) {
    console.log('I really like appple!');
}
if (favorite_fruits.includes('banana')) {
    console.log('I really like banana!');
}
if (favorite_fruits.includes('orange')) {
    console.log('I really like orange!');
}
if (favorite_fruits.includes('straberry')) {
    console.log('I really like straberry!');
}
if (favorite_fruits.includes('mango')) {
    console.log('I really like mango!');
}
// task30
// : Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var usernames = ['admin', 'Bugs Bunny', 'Daffy Duck', 'Sylvester', 'Tweety'];
usernames.forEach(function (usernames) {
    if (usernames === 'admin') {
        console.log(' Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(usernames, ", thank you for logging in again."));
    }
});
// task31
// Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var userNames = ['admin', 'Junaid', 'Zeeshan', 'Kamran', 'Daniyal'];
if (userNames.length === 0) {
    console.log('We need to find some users!');
}
else {
    userNames = [];
    console.log("All user names have been removed " + userNames.length);
}
// task32
// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users = ['TaHa', 'DaNiyal', 'SaLeem', 'Hamza', 'john'];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ['Bilal', 'TaHa', 'Dawood', 'Jameel', 'Hamza'];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
new_users.forEach(function (newUsername) {
    var lowerCase = newUsername.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowerCase)) {
        console.log("The username ".concat(newUsername, " is not valid. Please write a different username"));
    }
    else {
        console.log("The username ".concat(newUsername, " is available."));
    }
});
// task33
// Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    var ordinalEnding = void 0;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(num).concat(ordinalEnding));
}
// task34
// Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var pizzas = ['Pepperoni', 'Cuban', 'BBQ Chicken'];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza. "));
});
console.log('I really love pizza!');
// task35
// Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ['Dog', 'Cat', 'Rabbit'];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
// task36
// Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(text));
}
make_shirt('Large', 'Free Palestine');
make_shirt('Medium', 'Free Palestine');
make_shirt('Small', 'Free Palestine');
// task37
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love typescript'; }
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(text));
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'I love python');
// task38
// Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi");
describe_city("Islamabaad");
describe_city("Madina", "Saudia Arabia");
// task39
// Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Madina', 'Saudia Arabia'));
console.log(city_country('Tokyo', 'Japan'));
// task40
// Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Artist 1', 'Album title 1');
console.log(album1);
var album2 = make_album('Artist 2', 'Album title 2');
console.log(album2);
var album3 = make_album('Artist 3', 'Album title 3', 15);
console.log(album3);
// task41
// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magician = ['Harry pottor', 'Hermione', 'Ron Wasley', 'Albus Dumbledore'];
function show_magicians(megicians) {
    megicians.forEach(function (element) {
        console.log(element);
    });
}
show_magicians(magician);
// task42
// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magician = ['Harry pottor', 'Hermione', 'Ron Wasley', 'Albus Dumbledore'];
function make_great(megicianArry) {
    for (var i = 0; i < megicianArry.length; i++) {
        magician[i] = 'The Great ' + megicianArry[i];
    }
}
function show_magicians(megicians) {
    megicians.forEach(function (element) {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
// task43
// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magician = [
    "Harry pottor",
    "Hermione",
    "Ron Wasley",
    "Albus Dumbledore",
];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(megicianArry) {
    for (var i = 0; i < megicianArry.length; i++) {
        megicianArry[i] = "The Great " + megicianArry[i];
    }
}
function show_magicians(megicians) {
    megicians.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log("\n\nThis is my original array:");
show_magicians(magician);
console.log("\n\nThis is my modified copy of the array:");
show_magicians(copyMagicianArray);
// task44
// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(function (element) { return console.log("- " + element); });
    console.log('Enjoy your sandwich !\n');
}
makeSandwich(['Ham', 'Cheese', 'lettuce']);
makeSandwich(['Turkey', 'Bacon']);
makeSandwich(['Peanut butter', 'Jelly']);
function createCar(maufacture, model, optional) {
    return __assign({ maufacture: maufacture, model: model }, optional);
}
var myCar = createCar("Honda", "Civic", { color: "black", year: "2022" });
console.log(myCar);
