const { ethers, upgrades } = require("hardhat");

const UPGRADEABLE_PROXY = "0x2EB9fd322Fa127cDeD612896607BA4870f66e7ee";

async function main() {
   const gas = await ethers.provider.getGasPrice()
   const FaucetV2 = await ethers.getContractFactory("FaucetV2");
   console.log("Upgrading V1Contract...");
   let upgrade = await upgrades.upgradeProxy(UPGRADEABLE_PROXY, FaucetV2, [10], {
      gasPrice: gas, 
      initializer: "initialvalue",
   });
   console.log("V1 Upgraded to V2");
   console.log("V2 Contract Deployed To:", upgrade.address)
}

main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
 });