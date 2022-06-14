// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', "Bobby"]

function findMatching(drivers , x){
    // for(const driver of names){
    //     if(driver.includes(string)){
    //         return driver;
    //     }
    // }
    let newarray = [];
    drivers.filter((driver=>{        
    
        if(driver.includes(x)){
        
            newarray.push(driver).toLowerCase() 

        }
    }))

    return newarray


}

findMatching(drivers , "Bo")


function fuzzyMatch(driver, p){
    const newdrivers =[];
    drivers.filter((driver=>{
        if(driver.startsWith(p)){
            newdrivers.push(driver)
        }
    }))
    return newdrivers
}
fuzzyMatch(drivers, 'sa')

function matchName(driver, y){
    const newdere =[];
    
}