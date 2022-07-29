const { ethers } = require("ethers");
const {saveFile}=require('./ipfs');
const express=require('express')
const router=express.Router();
const app=express()
app.use(express.json())

app.listen(8000,()=>{
	console.log(`server is working on 8000`)
})

var hashAddress=saveFile()
const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_ID)

var address  = '0x26461980Af71c91B1255d9eE38Da0236781e78aA';//polygon smart card address
var abi=[
{
	"inputs":[],
	"stateMutability":"nonpayable",
	"type":"constructor"
},
{
	"inputs":[],
	"name":"deposits",
	"outputs":[
	{
		"internalType":"uint256",
		"name":"",
		"type":"uint256"
	}
	],

	"stateMutability":"view",
	"type":"function"
},
{
	"inputs":[],
	"name":"getHash",
	"outputs":[
	{
		"internalType":"string",
		"name":"","type":"string"
	}
	],
	"stateMutability":"view",
	"type":"function"
},
{
	"inputs":[],
	"name":"owner",
	"outputs":[
	{
		"internalType":"address",
		"name":"",
		"type":"address"
	}
	],
	"stateMutability":"view",
	"type":"function"
},
{
	"inputs":[
	{
		"internalType":"string",
		"name":"_hash",
		"type":"string"
	}
	],
	"name":"setHash",
	"outputs":[],
	"stateMutability":"nonpayable",
	"type":"function"
},
{
	"inputs":[],
	"name":"transfer",
	"outputs":[],
	"stateMutability":"payable",
	"type":"function"
},
{
	"stateMutability":"payable",
	"type":"receive"
}
]

var contract = new ethers.Contract(address,abi,provider);

	const sethash=async (req,res,next)=>{
		contract.setHash(hashAddress)
		res.status(200).json({
    	setSuccess: true,
		})
	}
	const gethash=async (req,res,next)=>{
		contract.getHash().then((result)=>function () {
		location.href = "https://ipfs.io/ipfs/"+result;
 		})
		res.status(200).json({
    	getSuccess: true,
		})
	}

router.route("/gethash").get(gethash)
router.route("/sethash").post(sethash)
