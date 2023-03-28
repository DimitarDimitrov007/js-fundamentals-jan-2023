function fancyBarCodes(array) {
    let barCodePattern = /[@][#]{1,}(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])[@][#]{1,}/g;
    let n = array.shift();

    for(let barcode of array){
        if(barcode.match(barCodePattern)){
            let productGroup = "";
            for(let i = 0 ; i < barcode.length; i++){
                let currentChar = barcode[i];
                let asciChar = currentChar.charCodeAt(0);

                if(asciChar >= 48 && asciChar <= 57){
                    productGroup += currentChar;

                }
            }

            if(productGroup === ""){
                console.log("Product group: 00");

            }else{
                console.log(`Product group: ${productGroup}`);

            }
        }else{
            console.log("Invalid barcode");

        }
    }
}
fancyBarCodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);

fancyBarCodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
