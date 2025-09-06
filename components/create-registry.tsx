"use client";

import { useWalletClient } from "wagmi";
import {
  createDomaOrderbookClient,
  OrderbookType,
  viemToEthersSigner,
} from "@doma-protocol/orderbook-sdk";
import { base } from "viem/chains";

const DOMA_API_KEY = process.env.DOMA_API_KEY;

if (!DOMA_API_KEY) {
  throw new Error("DOMA_API_KEY is not set");
}

// Initialize the client
const config = {
  apiClientOptions: {
    baseUrl: "https://api.doma.xyz",
    apiKey: DOMA_API_KEY,
  },
  source: "doma-app-demo",
  chains: [base],
};

const client = createDomaOrderbookClient(config);

// Or get the existing client instance
// const client = getDomaOrderbookClient();

export function CreateRegistry() {
  const { data: walletClient } = useWalletClient();

  const handleCreateListing = async () => {
    if (!walletClient) return;

    // Convert Viem wallet client to Ethers signer
    const signer = viemToEthersSigner(walletClient, "eip155:1");

    const result = await client.createListing({
      params: {
        source: "doma-app-demo",
        items: [
          {
            contract: "0x...",
            tokenId: "123",
            price: "1000000000000000000", // 1 ETH in wei
          },
        ],
        orderbook: OrderbookType.DOMA,
      },
      signer,
      chainId: "eip155:1",
      onProgress: (progress) => {
        console.log("Progress:", progress);
      },
    });
  };

  return <button onClick={handleCreateListing}>Create Listing</button>;
}
