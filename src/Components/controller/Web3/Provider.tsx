import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { sepolia, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Bank from "../../Bank";

const Provider = () => {
  //configuration for wagmi
  const config = getDefaultConfig({
    appName: "Decentral Bank",
    projectId: "1028e6cd70d9e451d11275c9cda97e19",
    chains: [mainnet, sepolia],
    ssr: true,
  });

  // queyclient
  const client = new QueryClient();

  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <RainbowKitProvider>
            <Bank />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
};

export default Provider;
