require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
// Any file that has require('dotenv').config() statement 
// will automatically load any variables in the root's .env file.
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.RPC_URL  ,
      accounts: [process.env.PRIVATE_KEY ],
      gas: 2100000,
      gasPrice: 8000000000
    }
  },
  etherscan: {
    apiKey: {
      goerli: [process.env.API_KEY]
    }
  }

};
