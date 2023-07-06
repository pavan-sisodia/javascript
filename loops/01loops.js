// For Loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
    //    console.log(`Inner loop value ${j} and Inner loop ${i}`);
    // console.log(i + '*' + j + '=' + i*j);  
    } 
}

let supperheros = ["Thor", "Hulk", "Ironman"];
// console.log(supperheros.length);
for (let index = 0; index < supperheros.length; index++) {
    const element = supperheros[index];
    // console.log(element);
    
}

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5 `);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5 `);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}

