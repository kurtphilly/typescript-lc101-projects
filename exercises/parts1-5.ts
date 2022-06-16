// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type

// let speedMph: number = 17500;
// let spacecraftName: string = "Determination";
// let kilometersToMars: number = 225000000;
// let milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars
// let milesToMars: number = milesPerKilometer * kilometersToMars;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;

// console.log(`The amount of days for ${spacecraftName} to get to Mars is ${daysToMars}`);


// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway: number): number {
//     let speedMph: number = 175000;
//     let milesAway: number = kilometersAway * milesPerKilometer;
//     let hours: number = milesAway / speedMph;

   


//     console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToMars)} days to get to Mars}`);
    
//     return hours / 24;
// }


// console.log(getDaysToLocation(500000));


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToMoon)} days to get to Moon}`);



// Part 4: Create a Spacecraft Class
class Spacecraft {
    milesPerKilometer: number = .621;
    name: string;
    speedMph: number = 17500;

    constructor(name: string, speedMph: number){
        this.name = name;
        this.speedMph = speedMph;
    }
    function getDaysToLocation(kilometersAway: number): number {
        let speedMph: number = 175000;
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hours: number = milesAway / this.speedMph;
    
       
    
    
        
        
        return hours / 24;
    }
}



// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination',17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

console.log(`${spaceShuttle.getDaysToLocation(kilometersToMars)} name is ${spaceShuttle.name} days to get to Mars}`);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here: