console.log ("merhaba kodlamaio 2");
//degiskenler ve türleri
//var (variable)
// javascript tip güvenli değildir.
var dolarKur = 10; //number
console.log(dolarKur);
var euroKur = "15";//string metinsel ifade
console.log(euroKur) 
//var keyword yerine let kullanacağız! 
 //boolean = true ya da false
 let euroYukselis = true;
 console.log(euroYukselis);
 //number ondalıklı sayı olabilir; float, double, decimal 
 dolarKur= 12.5;
 console.log(dolarKur);
 //array=dizi programlama bir koleksiyon türüdür.
 let krediler = ["ihtiyac","tasıt","konut"];
 console.log(krediler);

let odemeBilgileri = {
    aylikOdeme:415.53,
    faizOranu:1.89,
    toplamGeriOdeme: 14950,
    krediTipi: "ihtiyac Kredisi",

};
console.log(odemeBilgileri);
//camelCase isimlendirme kuralları kullanılır.
//arayin elemanları 0 dan başlayarak sayılmalıdır.
//krediler arayinin 1.elemanı tasıttır.
//krediler de tasıta erişmek istiyor isem;
//console.log(krediler[1]); şeklinde yapmam gerekiyor.
