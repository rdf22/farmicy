let dataDiri = document.getElementById('dataDiri');
let nama = document.getElementById('nama');
let kontak = document.getElementById('kontak');
let email = document.getElementById('email');
let kota = document.getElementById('kota');
let hewan = document.getElementById('hewan');
function regis(){
    localStorage.setItem("datauser",dataDiri.value);
    
}
localStorage.setItem("datadiri", nama, kontak, email, kota, hewan);

console.log('datadiri');



