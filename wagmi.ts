import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

import { base, sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Doma app demo",
  projectId: "YOUR_PROJECT_ID",
  chains: [
    {
      iconUrl: "/doma-logo.svg",
      id: 97476,
      name: "Doma",
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
      },
      blockExplorers: {
        default: {
          name: "DomaScan",
          url: "  https://explorer-testnet.doma.xyz",
        },
      },
      rpcUrls: {
        default: {
          name: "Doma",
          http: ["https://rpc-testnet.doma.xyz"],
          url: "https://rpc-testnet.doma.xyz",
        },
      },
    },
    base,
    sepolia,
  ],
  ssr: true,
});
