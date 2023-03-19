function tambah() {
    var a, b, c;
    a = document.forms[0].a.value;
    b = document.forms[0].b.value;
    if (isNaN(a)|| isNaN(b)) {
        alert("Maaf yang anda input bukan Angka")
    } else {
        c = parseInt(a) + parseInt(b);
        document.forms[0].c.value = c;
    
    }
}

function kurang() {
    var a, b, c;
    a = document.forms[0].a.value;
    b = document.forms[0].b.value;
    if (isNaN(a) || isNaN(b)) {
        alert("Maaf yang anda input bukan Angka")
    } else {
        c = parseInt(a) - parseInt(b);
        document.forms[0].c.value = c;
    }
}
    
function kali() {
    var a, b, c;
    a = document.forms[0].a.value;
    b = document.forms[0].b.value;
    if (isNaN(a) || isNaN(b)) {
        alert("Maaf yang anda input bukan Angka")
    } else {
        c = parseInt(a) * parseInt(b);
        document.forms[0].c.value = c;
    }
}

function bagi() {
    var a, b, c;
    a = document.forms[0].a.value;
    b = document.forms[0].b.value;
    if (isNaN(a) || isNaN(b)) {
        alert("Maaf yang anda input bukan Angka")
    } else {
        c = parseInt(a) / parseInt(b);
        document.forms[0].c.value = c;
    }
}

function pangkat() {
    var a, b, c;
    a = document.forms[0].a.value;
    b = document.forms[0].b.value;
    if (isNaN(a) || isNaN(b)) {
        alert("Maaf yang anda input bukan Angka")
    } else {
        c = parseInt(a) ** parseInt(b);
        document.forms[0].c.value = c;
    }
}