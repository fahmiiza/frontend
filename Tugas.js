const app = document.getElementById('app'); 
const header = document.createElement('h1');
const headercontent = document.createTextNode('Mahasiswa SM3.1 Belajar Dasar Frontend');
header.appendChild(headercontent);
app.appendChild(header);

const tombol = Document.getElementById('tombol')
const hasil = document.getElementById('hasil')
tombol.addEventlistener('click', function() {
    hasil.textContent ='tombol Sudah Ditekan'
});