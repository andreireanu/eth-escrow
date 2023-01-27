const hre = require("hardhat");
const { Alchemy, Network, Wallet, Utils } = require("alchemy-sdk");

const contractAddress = "0x2EB9fd322Fa127cDeD612896607BA4870f66e7ee";

async function main() {
  
  const provider = new ethers.providers.EtherscanProvider("goerli", process.env.API_KEY);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  let wallet = new Wallet(process.env.PRIVATE_KEY);
  const myContract = await hre.ethers.getContractAt("FaucetV2", contractAddress, signer );
  // console.log(myContract);
  // console.log(await myContract.increase());
  console.log(await myContract.send_token());

}
  

// run main, catch error, if any, and log in console
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});