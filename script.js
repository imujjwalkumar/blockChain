const { ethers } = require("ethers");
require('dotenv').config()


const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_ID)

const sendAddress='0x1bD34B8D7963237e4c830974687bFC7010a9feBE'
const receiveAddress='0xa29E963992597B21bcDCaa969d571984869C4FF5'


const wallet = new ethers.Wallet(process.env.privateKey1, provider)

const main = async () => {
     const senderBalanceBefore = await provider.getBalance(sendAddress)
    const recieverBalanceBefore = await provider.getBalance(receiveAddress)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    const tx = await wallet.sendTransaction({
        to: receiveAddress,
        value: ethers.utils.parseEther("0.1")
    })

    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(sendAddress)
    const recieverBalanceAfter = await provider.getBalance(receiveAddress)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}
main()
