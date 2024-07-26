import { readContract } from "viem/actions";
import { localhost } from "viem/chains";
import { createPublicClient, http } from "viem";
import { useWriteContract } from "wagmi";

import { bankAbi, DbcoinAbi, DCRCAbi } from "../../controller/Web3/credentials";
import { dbcoinAddress, decentralBankAddress } from "../../Constant/constant";
import { useState, useLayoutEffect } from "react";
import { useAccount } from "wagmi";

export default function useBankingController() {
  const { writeContractAsync } = useWriteContract();

  const [balance, setBalance] = useState(0);
  const { address, isConnected, isConnecting, isDisconnected } = useAccount();

  //configure the public for readonly functions of the SC.
  const publicClient = createPublicClient({
    chain: localhost,
    transport: http(),
  });

  async function readBalance() {
    const balance = await readContract(publicClient, {
      abi: DbcoinAbi,
      address: dbcoinAddress,
      functionName: "balanceOf",
      args: [address],
    });
    return String(balance);
  }

  async function stakingBalance() {
    const stakingBalance = await readContract(publicClient, {
      abi: bankAbi,
      address: decentralBankAddress,
      functionName: "stakingBalance",
      args: [address],
    });
    return Number(stakingBalance);
  }



  function buyFunds() {
    writeContractAsync({
      abi: bankAbi,
      address: decentralBankAddress,
      functionName: "buyCoin",
      account: address,
    }).catch((err) => {
      console.log(err.details);
    });
  }

  

  useLayoutEffect(() => {
    async function getStakingBalance() {
      const balance = await stakingBalance();
      setBalance(balance);
    }
    getStakingBalance();
  }, []);

  return { readBalance, balance, address, isConnected, buyFunds };
}
