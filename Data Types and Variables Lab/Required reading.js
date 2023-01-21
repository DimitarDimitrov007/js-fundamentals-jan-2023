function requiredReading(totalPages,pagerPerHour,days){
    let timeNeeded = totalPages / pagerPerHour;
    let hoursPerDay = timeNeeded / days;
    console.log(hoursPerDay);
    
}
requiredReading(212,20,2);
requiredReading(432,15,4);