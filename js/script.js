var nama = prompt('Masukkan nama anda');
if (nama == null || nama == '') {
  text = 'Anda pengunjung ilegal!!!';
} else {
  text = 'Halo, ' + nama + '!' + ' Selamat Datang di Website Portofolioku';
}
alert(text);

function checker() {
  var result = confirm('Apakah Kamu Yakin Ingin Mengunjunginya ?');
  if (result == false) {
    event.preventDefault();
  }
}

function award() {
  document.getElementById('hasilAward').innerHTML = '"Mohon maaf saat ini belum banyak penghargaan yang bisa diraih, Namun untuk kedepannya saya akan mendapatkan banyak penghargaan untuk menunjang karir"';
}
