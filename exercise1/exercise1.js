function CekAngka(number) {
    let isEligible = number %2===1 ? "ganjil" : "genap";
    console.log(isEligible);
}
CekAngka(19)