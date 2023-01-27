// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

interface ERC20Token {
    function transferFrom(address from, address to, uint tokens) external returns (bool success);
    function approve(address spender, uint tokens) external returns (bool);   
} 

 
contract FaucetV2 {

    uint public number;

    function send_token() external  
    {
        address token_address = 0x58364A0cdb842EF2f7e2a705D4B0B06D90e3fDd4;
        ERC20Token(token_address).approve(address(this), 100000000000000000);
        ERC20Token(token_address).transferFrom(address(this), msg.sender, 100000000000000000);
    }   
 
   function increase() external {
       number += 1;
   }

   function decrease() external {
       number -= 1;
   } 

}
