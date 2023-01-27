async function send_token () {
  const TKN_CONTRACT = "0x58364A0cdb842EF2f7e2a705D4B0B06D90e3fDd4";
  const FAUCET_ADDRESS = "0x2EB9fd322Fa127cDeD612896607BA4870f66e7ee";
  const SENDER_ADDRESS = "0xbfE90Cb9d618E91791741c6e460D650FB2D6F5Dd";
  const ERC20ABI = require('./ERC20ABI.json');

  
  const provider = ethers.provider;
  const TSTTKN = new ethers.Contract(TKN_CONTRACT, ERC20ABI, provider);
  const sender = await ethers.provider.getSigner(SENDER_ADDRESS);

  value = BigInt(10 * 10 ** 18);

  await TSTTKN.connect(sender).transfer(FAUCET_ADDRESS, value);
}
 

async function main() {
  send_token()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

