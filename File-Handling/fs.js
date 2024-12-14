let fs =  require("fs");
fs.writeFileSync("fayyaz.txt", "Hello, world");;


// sync
// let result = fs.readFileSync("./fayyaz.txt","utf-8");
// console.log(result);

// console.log(fs);


// async
// fs.readFile('./fayyaz.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data);  
// });
    

fs.appendFileSync("./fayyaz.txt", `eveyOne\n`)

  let os =  require("os")

console.log(os.cpus().length);
