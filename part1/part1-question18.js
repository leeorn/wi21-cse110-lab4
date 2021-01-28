let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

// prints the value if they key starts with 'r' or the value is odd number
for(key in statistics){
    let oddVal = statistics[key] % 2;
    if(key[0] == 'r' || oddVal)
        console.log(statistics[key])
}