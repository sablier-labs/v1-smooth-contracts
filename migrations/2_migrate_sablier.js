/* global artifacts */
const Sablier = artifacts.require("./Sablier.sol");

module.exports = async deployer => {
  await deployer.deploy(Sablier);
  const sablier = await Sablier.deployed();
  console.log("sablier.address", sablier.address);
};
