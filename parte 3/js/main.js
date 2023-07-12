//parte 1
function businessHours (dayNumber, hourNumber){
    if ((dayNumber!=1) && (dayNumber<=5) && (hourNumber>=9) && (hourNumber<=18)){
        return true;
    } else return false;
}

//parte 2
function getDayNumber(janFirtsDayNumber, yearDayNumber){
    return (yearDayNumber-1)%7;
    console.log(getDayNumber(3,60));

} 
//parte 3
function part3
    (yearDayNumber,hourNumber){
            let day=getDayNumber (0, yearDayNumber);
            return businessHours(day,hourNumber);
}
console.log(part3(72,17));
