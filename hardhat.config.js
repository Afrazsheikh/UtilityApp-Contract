require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");


const private_key = "Your walltet private Key"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.16",
  networks : { 
    // polygon_edge : { 
      Matic_Mumbai : { 
      // url: "http://localhost:10002/",
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [`0x${private_key}`],
      chainId: 80001,
    }
  },
  etherscan: {
    apiKey:"etherScan private key",
 }

};
