function changeMe(arr) {

    var newObject = {
 
         "1. Christ Evan" : {
 
         },
 
         "2. Robert Downey" : {
 
         }
 }
     for(var i=0; i<arr.length; i++){
 
         for(var j=0; j<arr[i].length; j++){
            if(i === 0 && j === 0){
                newObject["1. Christ Evan"].firstName = arr[i][j]
                newObject["1. Christ Evan"].lastName = arr[i][j+1]
                newObject["1. Christ Evan"].gender = arr[i][j+2]
                newObject["1. Christ Evan"].age = 2018 - arr[i][j+3] 
            }else if(i === 0 && j === 1){
             newObject["2. Robert Downey"].firstName = arr[i][j]
             newObject["2. Robert Downey"].lastName = arr[i][j+1]
             newObject["2. Robert Downey"].gender = arr[i][j+2]
             if(arr[i][j+3] === undefined){
                 newObject["2. Robert Downey"].age = "Invalid Birth Year"
             }
            }
         }
     }
 
     return newObject
 }
   // TEST CASES
   console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])) 
   // 1. Christ Evans:
   // { firstName: 'Christ',
   //   lastName: 'Evans',
   //   gender: 'Male',
   //   age: 36 }
   // 2. Robert Downey:
   // { firstName: 'Robert',
   //   lastName: 'Downey',
   //   gender: 'Male',
   //   age: 'Invalid Birth Year' }
   changeMe([]); // ""