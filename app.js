console.log("Hello World!\n==========\n");

// Exercise 1: Print Odds Continued
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 0; i <= count; i++) {
        if(count < 0) {
            console.log("This is a negative number")
        } else if(i%2 !== 0){
            console.log(`This number is odd ${i}`)
        } else {
            continue;
        }
    }
}

// Exercise 2: Legal?
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you an drive!`
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
    if(!age && !userName){
        console.log("Not valid age/userName")
    }else if(age<16){
        console.log(belowSixteen)
    } else {
        console.log(aboveSixteen)
    }
}

// Exercise 3: Which Quadrant?
function quadrant(a, b) {
    if (a === 0) {
        console.log("This point is on the y axis")
    } else if ( b === 0) {
        console.log("This point is on the x axis")
    } else if (a > 0 && b > 0) {
        console.log("You are in Quadrant 1")
    } else if (a < 0 && b > 0 ) {
        console.log("You are in Quadrant 2")
    } else if (a < 0 && b < 0) {
        console.log("You are in Quadrant 3")
    } else if (a > 0 && b < 0) {
        console.log("You are in Quadrant 4")
    }
}

// Exercise 4: What type of triangle?
function isTriangle(a, b, c){
    if (a + b > c && b + c > a && b + c > a) {
        console.log("This is an invalid triangle")
    } else if (a === b && b == c) {
        console.log("This is a equilateral triangle")
    } else if ((a === b && b !== c) || (a === c && c !== b) || (b === c && c !== a)) {
        console.log("This is an isosceles triangle")
    } else if (a !== b && b !== c && c !== a) {
        console.log("This is a scalene triangle")
    }
}

//Exercise 5: Data Plan Status
function dataPlan (planLimit, day, usage) {
    let daysRemaining = 30 - day
    let realAvgDaily = usage / day
    let avgDailyExpected = planLimit / 30
    let avgDailyText
    let overUnderPlanBy 
    let overUnderText
    let newAvgDaily
    let newAvgDailyText
    if (avgDailyExpected < realAvgDaily) {
        avgDailyText = `You are ECEEDING your average daily use (${realAvgDaily} GB/day),`
    } else if (avgDailyExpected > realAvgDaily) {
        avgDailyText = `You are NOT EXCEEDING your average daily use (${realAvgDaily} GB/day)`
    }
    if (realAvgDaily * 30 > planLimit){
        overUnderPlanBy = (realAvgDaily * 30) - planLimit
        overUnderText = `continuing this high usage, you'll exceed your data plan by ${overUnderPlanBy} GB.`
        newAvgDaily = (planLimit - usage) / daysRemaining
        newAvgDailyText = `To stay below your data plan, use no more than ${newAvgDaily} GB/day.`
    } else if (realAvgDaily * 30 < planLimit){
        overUnderPlanBy = planLimit - (realAvgDaily * 30)
        overUnderText = `continuing your usage, you will not exceed your data plan if you continue using (${realAvgDaily} GB/day),`
        newAvgDailyText = `If you continue using ${realAvgDaily} and you will stay below your data plan`
    }
    console.log(`${day} days used, ${daysRemaining} days remaining `/n` ${avgDailyText} `/n` ${overUnderText} `/n` ${newAvgDailyText}`)
}
