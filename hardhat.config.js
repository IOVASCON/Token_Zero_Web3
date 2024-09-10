require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.7",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/43cde936ed2c40a5a0e1ba1eef636f9c`,  // Project ID da Infura
      accounts: [`0x7abb54f69f0e6bd1df8a1080942f30d455564c08ccbdd73ee877cd65dbe2ac64`],  // Sua chave privada
    },
  },
};
