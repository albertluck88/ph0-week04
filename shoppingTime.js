function shoppingTime(memberId, money) {

        if(money === undefined && memberId === undefined){
            return "Mohon maaf, toko X hanya berlaku untuk member saja"
        }else if(memberId === ""){
            return "Mohon maaf, toko X hanya berlaku untuk member saja"
        }else if( money <= 15000 ){
            return "Mohon maaf, uang tidak cukup"
        }else{

    var jmlhUang = 0
    var listBarang = [["Sepatu brand Stacattu",1500000],["Baju brand Zoro",500000],["Baju brand H&N",250000],["Sweater brand Uniklooh",175000],["Casing Handphone",50000]]
    var totalBelanjaan = 0
    var pelanggan = {
        memberId : memberId,
        money    : money,
        listPurchased : []
    }

    for(var i=0 ; i<listBarang.length; i++){

        

        for(var j=0; j<listBarang[i].length; j++){

            if(pelanggan.money > listBarang[i][j+1]){
                pelanggan["listPurchased"].push(listBarang[i][j])
                totalBelanjaan += listBarang[i][j+1]
                pelanggan.changeMoney = pelanggan.money - totalBelanjaan
            }

            
        }
        


        

    }




        }

       
        return pelanggan
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja