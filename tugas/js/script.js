document.addEventListener('DOMContentLoaded', function() {
    
    var namaElem = document.getElementById('nama');
    var namaInput = prompt('Masukkan nama Anda:');
    namaElem.textContent = namaInput;

    
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        var namaPengirim = document.getElementById('namaPengirim').value.trim();
        var pesan = document.getElementById('pesan').value.trim();

        if (namaPengirim === '' || pesan === '') {
            alert('Silakan lengkapi formulir dengan benar!');
            event.preventDefault();
        }
    });
});
