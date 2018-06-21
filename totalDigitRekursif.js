function totalDigitRekursif(nilai){
    var ubahAngka = String(nilai)
    if(ubahAngka.length === 1){
        return Number(nilai)
    }else{
        var potongNilai = ubahAngka.slice(1) // akan dipotong sebanyak 1
        var ambilNilaiDepan = Number(ubahAngka[0])
        

        return ambilNilaiDepan + totalDigitRekursif(Number(potongNilai))

    }
}
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5