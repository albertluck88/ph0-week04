function kaliTerusRekursif(angka) {
	var ubahAngka = String(angka)
	if(ubahAngka.length === 1){
		return ubahAngka
	}else{
		var potongLength = ubahAngka.slice(1)
		var sementara = ubahAngka[0]
	
		return  kaliTerusRekursif(Number(sementara) * Number(potongLength))
	}
  }
  
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6