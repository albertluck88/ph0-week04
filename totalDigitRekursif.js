function totalDigitRekursif(angka) {
	var toString = String(angka)

	if(toString.length === 1){
		return Number(angka)
	}else{
		var kurangLength = toString.slice(1)
		var hasilSementara = Number(toString[0])

		return hasilSementara + totalDigitRekursif(Number(kurangLength))
	}
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5