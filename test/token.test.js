const { expect } = require("chai");

describe("DIOToken", function () {
  it("Deve atribuir o total supply ao deployer", async function () {
    const [owner] = await ethers.getSigners();
    
    const Token = await ethers.getContractFactory("DIOToken");
    const token = await Token.deploy();

    const ownerBalance = await token.balanceOf(owner.address);
    expect(await token.totalSupply()).to.equal(ownerBalance);
  });
});
