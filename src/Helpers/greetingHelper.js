function getGreetingBasedOnTimeOfDay(currentHour){
    return (currentHour < 12) ? "Good morning" :
        ((currentHour <= 18 && currentHour >= 12 ) ?
            "Good afternoon" : "Good evening");
}
export default getGreetingBasedOnTimeOfDay;