const { ethers, upgrades } = require("hardhat");

async function main() {
   const gas = await ethers.provider.getGasPrice()
   const Faucet = await ethers.getContractFactory("Faucet");
   console.log("Deploying Faucet...");
   const faucet = await upgrades.deployProxy(Faucet, {
      gasPrice: gas
   });
   await faucet.deployed();
   console.log("Faucet deployed to:", faucet.address);
}

main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
 });