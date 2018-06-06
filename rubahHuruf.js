function ubahHuruf(kata) {
    var cekHuruf  = "abcdefghijklmnopqrstuvwyx"
    var rubahHuruf = ""
    var buang = ""
    for(var i = 0; i < kata.length; i++){
      for(var j=0; j < cekHuruf.length; j++){
        if(kata[i] === cekHuruf[j]){
            rubahHuruf = rubahHuruf + cekHuruf[j+1]
        }else{
            buang = buang + buang[j]
        }
      }
    }
   return rubahHuruf
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
 