function makanTerusRekursif(waktu) {
    // you can only write your code here!
    var jmlhPesanan = 0; // buat menampung berapa banyak dia makan
    var waktuSisa = 0 // buat nampung hasil dari pengurangan waktu

    if (waktu === 0) // jika sisa waktu nol maka jmlh pesanan akan bernilai 0 {
      return 0;
    } else if (waktu < 15) // jika sisa waktu kurang dari 15 maka jmlh pesana akan bernilai 1 {
      return 1;
    } else {
      jmlhPesanan++; // JmlhMakan akan bertambah jika waktu masih ada dan lebih dari 15
      waktuSisa = waktu - 15; // akan menampung hasil dari pengurangan nilai waktu - 15
    }
    return jmlhPesanan + makanTerusRekursif(waktuSisa); // ini akan terus berulang sampai sisa waktu bernilai 0 atau kurang dari 15
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0