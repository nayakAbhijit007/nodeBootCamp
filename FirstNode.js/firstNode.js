const fs = require("fs");

//Creating a new file with Node
//fs.writeFileSync("read.txt", "Welcome to Node")
//fs.writeFileSync("read.txt","Here we are learning FileSystem in Node

//fs.appendFileSync("read.txt","  How are you ? I'm fine , what about you ")



//Node.js includes an additional data type called Buffer.

//not available in browsers Javascript

//Buffer is mainly used to store Binary Data

// While reading from a file or Receiving Packets Over the Network






// Actual Buffer output of buf_data:-

//<Buffer 48 65 72 65 20 77 65 20 61 72 65 20 6c 65 61 72 6e 69 6e 67 20 46 69 6c 65 53 79 73 74 65 6d 20 69 6e 20 4a 73 48 6f 77 20 61 72 65 20 79 6f 75 20 3f ... 73 more bytes>



const buf_data = fs.readFileSync("read.txt");
const org_data = buf_data.toString();
console.log(org_data); 