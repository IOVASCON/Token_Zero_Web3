require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.7",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/43cccccccccccccccccccccccccccc`,  // Project ID da Infura
      accounts: [`0x7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa4`],  // Sua chave privada
    },
  },
};
