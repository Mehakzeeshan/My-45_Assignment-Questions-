// Question 33: Ordinal Numbers

let num: number[] =[1, 2, 3, 4, 5, 6, 7, 8, 9];

num.forEach(item => {


    let suffix = "th";
    if(item === 1) {
        suffix = "st";
    } else if(item === 2){
        suffix = "nd"
    } else if(item === 3) {
        suffix = "rd";
    } 
     {
        console.log(`${item}${suffix}`);
    }
 } ); 