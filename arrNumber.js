function sorting(arrNumber) {
   var urutkan = arrNumber.sort()
    return urutkan
  }
  
  function getTotal(arrNumber) {
    var count = 0
    var cukurDouble = []
    for(var i = 0; i<arrNumber.length; i++){
        if(arrNumber[i] !== arrNumber[i+1]){
            cukurDouble.push(arrNumber[i])
        }
    }
    for(var j=0; j<arrNumber.length; j++){
        if(arrNumber[j] === cukurDouble[cukurDouble.length-1]){
            count += 1
        }
    }

    if(cukurDouble[cukurDouble.length-1] !== undefined){
        return "angka paling besar adalah " + cukurDouble[cukurDouble.length-1] + " dan jumlah kemunculan sebanyak " + count
    }else{
        return "[]"
    }
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''