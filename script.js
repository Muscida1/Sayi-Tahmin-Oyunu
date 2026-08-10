// Not:
// Bu ödevde yapay zekadan yardım alınmıştır.

let gizliSayi = Math.floor(Math.random() * 20) + 1;
let tahminEdildiMi = false;

for(let hak = 1; hak <= 5; hak++) {
    let tahmin = Number(prompt("1 ile 20 arasına bir sayı tahmin et. \nKullanılan hak:" + hak +"/5"));

    if(tahmin == gizliSayi) {
        alert("Tebrikler! Sayıyı doğru tahmin ettiniz!");
        console.log("Doğru Tahmin: " + tahmin);
        console.log("Kullanılan tahmin hakkı: " + hak);
        tahminEdildiMi = true;
        break;
    }

    else if(tahmin < gizliSayi) {
        alert("Tahmin küçük, daha büyük bir sayı gir");
    }

    

    else {
        alert("Tahminin büyük, daha küçük bir sayı gir");
    }
}

if (tahminEdildiMi == false) {
    alert("Tahmin Hakkın bitti. Gizli Sayı: " + gizliSayi)
}

// bu kısımda yapay zeka else kullanmam gerektiğini söyledi ama sadece 2. bölüm olmayacağı için else if kullandım ve çalıştı

else {
    alert("Bölüm 2 ye geçiyorsun")

    gizliSayi = Math.floor(Math.random() * 50) + 1;
    tahminEdildiMi = false;

    for(let hak = 1; hak <= 7; hak++) {
        let tahmin = Number(prompt("1 ile 50 arasında bir sayı tahmin et. \nKullanılan hak" + hak + "/7"));

        if(tahmin == gizliSayi) {
            alert("Tebrikler! 2. bölümüde tamamladın");
            console.log("Doğru tahmin: " + tahmin);
            console.log("Kullanılan tahmin hakkı: " + hak);

            tahminEdildiMi = true
            break;
        }

        else if(tahmin < gizliSayi) {
            alert("Tahminin küçük, daha büyük bir sayı gir");
        }

        else {
            alert("Tahminin büyük, daha küçük bir sayı gir")
        }
    }

    if (tahminEdildiMi == false) {
        alert("Tahmin hakkın bitti. Gizli sayı: " + gizliSayi);
    }

    else {
    alert("3. bölüme geçiyorsun")

    gizliSayi = Math.floor(Math.random() * 100) + 1;
    tahminEdildiMi = false;

    for(let hak = 1; hak <= 10; hak++) {
        let tahmin = Number(prompt("1 ile 100 arasında bir sayı tahmin et. \nKullanılan hak:" + hak + "/10"));

        if(tahmin == gizliSayi) {
            alert("Tebrikler! Son bölümü de tamamladın! Kahin falanmısın?");
            console.log("Doğru tahmin: " + tahmin);
            console.log("Kullanılan tahmin hakkı: " + hak);

            tahminEdildiMi = true
            break;
        }

        else if(tahmin < gizliSayi) {
            alert("Tahminin küçük, daha büyük bir sayı gir")
        }

        else {
            alert("Tahminin büyük, daha küçük bir sayı gir")
        }
    }

    if(tahminEdildiMi == false) {
        alert("Tahmin hakkın bitti. gizli sayı: " + gizliSayi)
    }
}
}

// kodların hepsini yapay zeka yazmıştı ama kopyala yapıştır yapmadım elle teker teker yazdım





