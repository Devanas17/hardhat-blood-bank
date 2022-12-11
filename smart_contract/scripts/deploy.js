const {ethers} = require("hardhat")
async function main(){
    const BloodBank = await ethers.getContractFactory("BloodBank");
    const bloodBank = await BloodBank.deploy()
    await bloodBank.deployed()

    console.log(`Deploy at ${bloodBank.address}`)
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });