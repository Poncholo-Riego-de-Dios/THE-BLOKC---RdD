import { ethers } from "hardhat";

async function main() {
  const lock = await ethers.deployContract("BOOM", ["0xb2770b640cc3A32E0542403FF2F545eCEB3DA949"]);

  await lock.waitForDeployment();

  console.log(
    `Token deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});