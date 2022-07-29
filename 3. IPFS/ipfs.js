const ipfs =require( "ipfs-http-client");
const fs = require("fs")
async function ipfsClient() {
    const ipfs = await create(
        {
            host: "ipfs.infura.io",
            port: 5001,
            protocol: "https"
        }
    );
    return ipfs
}


const saveFile=async ()=> {

    let ipfs = await ipfsClient();

    let data = fs.readFileSync("./ka4.jpg")
    
    let result = await ipfs.add(data);
    return result.path
}
module.exports=ipfs