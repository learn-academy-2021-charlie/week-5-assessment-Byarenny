// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

//TEST:
    //describe "secretCoder"
    //it "takes in a string and returns a coded message converting 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0."
    //expect secretCodeWord1 to equal "L4ck4d41s1c4l"
    //expect secretCodeWord2 to equal  "G0bbl3dyg00k"
    //expect secretCodeWord3 to equal "3cc3ntr1c"

    describe("secretCoder", () => {
        it("takes in a string and returns a coded message converting 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. ", () => {
            expect(secretCoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
            expect(secretCoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
            expect(secretCoder(secretCodeWord3)).toEqual("3cc3ntr1c")
        })
})

// b) Create the function that makes the test pass.
// PROCESS:
    //create a function- secretCoder
    //parameter- string
    //use .replaceAll() to replace letters with numbers
    //Inputs and outputs- secretCodeWord1 --> "L4ck4d41s1c4l", secretCodeWord2 --> "G0bbl3dyg00k", secretCodeWord3 --> "3cc3ntr1c"
    
    const secretCoder = (string) => {
        return string.replaceAll("A", "4").replaceAll("a", "4").replaceAll("E", "3").replaceAll("e", "3").replaceAll("I", "1").replaceAll("i", "1").replaceAll("O", "0").replaceAll("o", "0")
    }
 
// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]

//TEST:
    //describe "onlyA"
    //it "takes in an array and returns all the words that contain the letter a"
    //expect arrayOfWords1 to equal ["Apple", "Banana", "Orange"]
    //expect arrayOfWords2 to equal ["Mango", "Apricot", "Peach"]
    
    describe("onlyA", () => {
        it("takes in an array and returns all the words that contain the letter a", () => {
            expect(onlyA(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
            expect(onlyA(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
        })
    })

// b) Create the function that makes the test pass.
//PROCESS:
    //declare a function- onlyA
    //parameter- array
    //declare a new variable filtered- filteredWord = array.filter()
    //return value that includes a
    //inputs and outputs- arrayOfWords1 --> ["Apple", "Banana", "Orange"], arrayOfWords2 --> ["Mango", "Apricot", "Peach"]
   
    const onlyA = (array) => {
        let filteredWord = array.filter(value => value.toLowerCase().includes("a"))
        return filteredWord
       }
   
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

//TEST:
    //describe "fullHouse"
    //it "takes in an array of 5 numbers and determines whether or not the array is a 'full house'"
    //expect hand1 to equal true
    //expect hand2 to equal false
    //expect hand3 to equal false
    
    describe("fullHouse", () => {
        it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
            expect(fullHouse(hand1)).toEqual(true)
            expect(fullHouse(hand2)).toEqual(false)
            expect(fullHouse(hand3)).toEqual(false)
        })
    })
// b) Create the function that makes the test pass.
//PROCESS:
    //declare a function- fullHouse
    //parameter- array
    //iteration- for loop to check for pairs and three of one kind in each index of the array
    //catchall- to make sure input array is 5 numbers
    //inputs and outputs- hand1 --> true, hand2 --> false, hand3 --> false
    
    const fullHouse = (array) => {
        for(let i=0; i<5; i++){
            if(array[0] === array[1] && array[0] === array[2] && array[3] === array[4]){
                return true
            }else if(array[0] === array[4] && array[1] === array[2] && array[1] === array[3]){
                return true
            }else if(array[0] === array[1] && array[2] === array[3] && array[2] === array[4]){
                return true
            }else if(array[0] === array[2] && array[2] === array[4] && array[1] === array[3]){
                return true  
            }else if(array.length != 5){
                return "Please enter 5 numbers"
            }else return false
        }
    }
//This was a hard one for me! I think it works for the given variables but I know there are more combinations of numbers that could possibly make my test fail. I couldn't figure out an easier/more dynamic way to make this work🤔 hmm..