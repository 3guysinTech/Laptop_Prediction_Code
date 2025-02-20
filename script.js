// function fil(p){
//     if(p==="HP"){
//         brand=1;
//     }else if(p==="ASUS"){
//         brand=2;
//     }else if(p==="ACER"){
//         brand=3;
//     }else if(p==="LENOVO"){
//         brand=4;
//     }else if(p==="DELL"){
//         brand=5;
//     }
// }

// function fil2(d){
//     if(d==="Ryzen 3"){
//         proc=1;
//     }else if(d==="i3"){
//         proc=2;
//     }else if(d==="Ryzen 5"){
//         proc=3;
//     }else if(d==="i5"){
//         proc=4;
//     }else if(d==="i7"){
//         proc=5;
//     }
// }

// function pp(){
// let ram=document.getElementById("RAM");
// let ssd=document.getElementById("SSD");
// let proc=document.getElementById("Processor");
// let brand=document.getElementById("Brand");
// let p=document.getElementById("price_p");
// fil(brand);
// fil2(proc);
// let pred=16735.17+(37.5596*brand)+(5117.916*proc)+(294.9563*ram)+(6.612832*ssd);
// p.innerText=pred;
// }

// document.querySelector("button").addEventListener("onclick",pp);

function fil(p) {
    let brand = 0;
    if (p === "HP") {
        brand = 1;
    } else if (p === "ASUS") {
        brand = 2;
    } else if (p === "ACER") {
        brand = 3;
    } else if (p === "LENOVO") {
        brand = 4;
    } else if (p === "DELL") {
        brand = 5;
    }
    return brand;
}

function fil2(d) {
    let proc = 0;
    if (d === "Ryzen 3") {
        proc = 1;
    } else if (d === "i3") {
        proc = 2;
    } else if (d === "Ryzen 5") {
        proc = 3;
    } else if (d === "i5") {
        proc = 4;
    } else if (d === "i7") {
        proc = 5;
    }
    return proc;
}

function pp(event) {
    event.preventDefault(); // Prevent form submission

    let ram = parseFloat(document.getElementById("RAM").value.trim()) || 0;
    let ssd = parseFloat(document.getElementById("SSD").value.trim()) || 0;
    let proc = fil2(document.getElementById("Processor").value.trim());
    let brand = fil(document.getElementById("Brand").value.trim());

    let p = document.getElementById("price_p");
    let pred = 16735.17 + (37.5596 * brand) + (5117.916 * proc) + (294.9563 * ram) + (6.612832 * ssd);
    
    p.innerText = `Predicted Price: ₹${pred.toFixed(2)}`;
}

document.getElementById("btn").addEventListener("click", pp);

