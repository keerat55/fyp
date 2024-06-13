require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.1",
  networks: {
    localganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: ["0x9251fa17a184554a4378480833a2510d80c8c8d40afaf8ac1ea779151426f361"]
    } 
   
  }
};