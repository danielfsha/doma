"use client";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

// Setting up list of evmNetworks
const evmNetworks = [
  {
    blockExplorerUrls: ["https://explorer-testnet.doma.xyz"],
    chainId: 97476,
    chainName: "Doma Testnet",
    iconUrls: ["/doma-logo.svg"],
    name: "Doma",
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
      iconUrl: "https://app.dynamic.xyz/assets/networks/eth.svg",
    },
    networkId: 1,

    rpcUrls: ["https://rpc-testnet.doma.xyz"],
    vanityName: "Doma Testnet",
  },
];

export default function WalletConnectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "92dabbbe-3a23-4c62-a383-5d0bf75b06d1",
        walletConnectors: [EthereumWalletConnectors],
        overrides: { evmNetworks },
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}
