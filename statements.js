console.log("Statements Start");
//KOŞUL BLOKLARI
//True - False
 //mantıksal operator boolean döndürür.
 // == != > >= || =<
 // === tip ve değer kontrolü yapmak 
 // == sadece deger kontrolü yapmak
 
 if(1==1){
    console.log("if içerisi calıstı");
 }
 else if(2==2){
    console.log("else if calıştı")
 }
 else{
    console.log("else blogu calıstı");
}

let dolarKurDun = 18.74;
let dolarKurBugun = 18.73;
//dolarKurBugün daha fazlaysa veya eşitse consola fazla
//daha azsa az yazdır.

if(dolarKurBugun >= dolarKurDun){
    console.log("fazla");
}
else{
    console.log("az");
}

//ternancy operator
//tek satırlık if-one line if statement
//koşul ? kod1 :kod2
//kod1 : kosul true
//kod2 : kosul false
dolarKurBugun >= dolarKurDun ? console.log("yukselis") :console.log("dusus");

//switch-case
let toplamBakiye = 100;
let secilenKur = "EUR";

switch (secilenKur) {
	case "USD":
		toplamBakiye *= 17;
		break;
	case "EUR":
		toplamBakiye *= 20;
		break;
	default:
		console.warn("Bilinmedik kur türü..");
		break;
}
console.log("Toplam Bakiye:" , toplamBakiye);

//seçilenKredi
//krediTutarı
//seçilen kredi taşıt ise 2 ile 
//ihtiyac ise 1.5 ve konut ise 2.5 ile carp
//hiç biri değil ise hata bas 
//en son krediTutarlarını yazdır.
let krediTutari= 150000;
let secilenKredi = 3;
switch (secilenKredi) {
	case 0:
		krediTutari *= 1.5;
		break;
	case 1:
		krediTutari *= 2;
		break;	
	case 2:
		kediTutari *= 2.5;
		break;

	default:
		console.warn("Bilinmedik kredi türü..");
		break;
}
console.log("Kredi tutarınız ", krediTutari);

//girilen sayi cift ise cift tek ise tek yazalım.
let girilenSayi= 10 ;
if (girilenSayi % 2 == 0){
	console.log ("girilen sayi cifttir")
}
else{
	console.log("girilen sayi tektir")
}

