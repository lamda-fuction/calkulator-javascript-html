function mtk() {
    var angka1,angka2,s,hasil

    angka1=document.getElementById('angka1').value
    angka2=document.getElementById('angka2').value
    s=document.getElementById('s').value
     
    if (s == 'kali'){
        hasil=angka1*angka2

    }else if(s == 'bagi'){
        hasil=angka1/angka2

    }else if(s == 'tambah'){
        hasil=angka1+angka2

    }else{
        hasil=angka1-angka2

    }

    document.getElementById('hasil').innerHTML=hasil

    
}