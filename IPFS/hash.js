const { ethers } = require("ethers");
require('dotenv').config()

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_ID)


console.log(1)

// console.log(`${ethers.utils.id("0x")}`)
// console.log(2)

var address  = '0x26461980Af71c91B1255d9eE38Da0236781e78aA';
var abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "x",
				"type": "string"
			}
		],
		"name": "sendHash",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getHash",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var contract = new ethers.Contract(address,abi,provider);
// console.log(contract.getHash().then((res)=>{
// 	
// }))


// contract.getHash().then((result) =>{
//   document.getElementById("btn").onclick = function () {
// 		location.href = "https://ipfs.io/ipfs/"+result;
//   	};
// });
