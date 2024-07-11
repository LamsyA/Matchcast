const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjhlYjVkOWJmLTc3OGEtNDlkNi1iNzhmLTU1ZTM0MjQwOGM5YyIsIm9yZ0lkIjoiMzk5NjQ4IiwidXNlcklkIjoiNDEwNjU1IiwidHlwZUlkIjoiM2JiZTE5ZTMtNzVjYy00NmQxLTg1NTktMTJlY2FlYmFmYTI0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjA2Mzg3NzEsImV4cCI6NDg3NjM5ODc3MX0.GY7GN3IKyuR8u-tpMAntsnSDMXS2FLMiNXmTtEhDltk",
    // ...and any other configuration
  });

  const address = "0x2b40B516E84e2218F98F7e9c0b3Ea2D9FCcD1Eaf";

  const chain = EvmChain.POLYGON;

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
  });

  console.log(response.toJSON());
};

runApp();
