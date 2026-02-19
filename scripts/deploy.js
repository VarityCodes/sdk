async function main() {
  const Varity = await ethers.getContractFactory("VarityValidator");
  const varity = await Varity.deploy();

  await varity.waitForDeployment();

  console.log("Varity deployed to:", await varity.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
