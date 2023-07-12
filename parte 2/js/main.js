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