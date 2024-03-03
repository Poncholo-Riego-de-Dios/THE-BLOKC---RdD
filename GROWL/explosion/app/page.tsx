"use client";
import { BrowserProvider } from "ethers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getContract } from "../config";

export default function Home() {
  const [walletKey, setwalletKey] = useState("");
  const [currentData, setcurrentData] = useState("");

  const connectWallet = async () => {
    const { ethereum } = window as any;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setwalletKey(accounts[0]);
  };
  //<Minting>
  const [mintingAmount, setMintingAmount] = useState<number>();
  const [submitted, setSubmitted] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");

  const mintCoin = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const tx = await contract.mint(signer, mintingAmount);
      await tx.wait();
      setSubmitted(true);
      setTransactionHash(tx.hash);
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Minting failed: ${decodedError?.args}`);
    }
  };
  const mintAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!isNaN(Number(inputValue))) {
      setMintingAmount(Number(inputValue));
      console.log(inputValue);
    } else {
      setMintingAmount(0);
    }
  };
  //</Minting>

  //<Staking>
  const [stakingAmount, setStakingAmount] = useState<number>();
  const stakeCoin = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const tx = await contract.stake(stakingAmount);
      await tx.wait();
      setSubmitted(true);
      setTransactionHash(tx.hash);
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Minting failed: ${decodedError?.args}`);
    }
  };
  const stakeAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!isNaN(Number(inputValue))) {
      setStakingAmount(Number(inputValue));
      console.log(inputValue);
    } else {
      setStakingAmount(0);
    }
  };
  //</Staking>

  //<Withdraw>
  const withdrawCoin = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const tx = await contract.withdraw();
      await tx.wait();
      setSubmitted(true);
      setTransactionHash(tx.hash);
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Minting failed: ${decodedError?.args}`);
    }
  };
  //</Withdraw>
  //<Import Token>
  const importToken = async () => {
    const { ethereum } = window as any;
    const tokenAddress = "0x1D0E8da8c591e34EDE73Bdcf55D9B8f85B35B0d1";
    const tokenSymbol = "BOOM";
    const tokenDecimal = 18;
    const tokenImage = "https://media3.giphy.com/media/oe33xf3B50fsc/giphy.gif?cid=6c09b952o3bd6e4yo6s1y3pg45594n1a943cot2y0p68k2z9&ep=v1_gifs_search&rid=giphy.gif&ct=g";

    try {
      const wasAdded = await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimal,
            image: tokenImage,
          },
        },
      });
    }
    catch (error) {
      console.log(error);
    }
  };
  //</Import Token>

  return (
    <main className="text-white bg-[#02050A]" style={{ fontFamily: 'Libre Franklin, sans' }}>
      {/* style={{ fontFamily: 'Impact, sans-serif'}} */}
      <section className="flex  justify-center items-center mb-[250vh] ">

        <div className=" bg-gradient-to-t from-transparent from-20% to-[#00224E] h-[150vh] w-[100vw]" />
        <div className="-mt-[50vh] w-[100vw] h-auto flex flex-col absolute justify-center items-center ">

          <article className="flex flex-col justify-center items-center">
            <p className="text-[8vh]" >A BLOCKCHAIN PROJECT</p>
            <p className="text-[3vh] -mt-3" >a requirement for certification by the blokc</p>
          </article>

          <section className="absolute flex justify-center items-center mt-[350vh] gap-24 w-full h-[150vh] bg-gradient-to-b from-transparent from-20% via-[#003521] to-transparent">
            <div className=" bg-cover bg-center border-2 border-gray-500 rounded-full w-[40vh] h-[40vh] " style={{ backgroundImage: 'url("https://scontent.fmnl25-1.fna.fbcdn.net/v/t39.30808-6/380720363_6507949725993259_5607206228177018191_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGpuv6d0VJYPCTqruwo9K-71uEzXq_GPw7W4TNer8Y_DvuD1OLHrXVYvSFKA43uN4pkO5p-sMM7UKD_yNIZhY6j&_nc_ohc=wRCEkUeNHwkAX-Bg9zR&_nc_ht=scontent.fmnl25-1.fna&oh=00_AfAoKzk6b6ztEOdo_Q6siVl31ubHB_5nUxIAZNrK5A5CBQ&oe=65E9D399")' }} />

            <article className="flex flex-col text-[3vh] text-white max-w-[30vw]">
              <p className="text-[5vh]">About the Creator</p>
              <p className="italic">Poncholo T. Riego de Dios is a student of Adamson University pursuing a degree in Bachelor of Scinece in Computer Engineering where he hopes to enhance the skills and interest in the field of technology</p>
            </article>
          </section>

          <section className=" absolute flex justify-center items-center mt-[700vh] gap-24 w-full h-[150vh] bg-gradient-to-b from-transparent from-20% via-[#666800] to-transparent">

            <article className="flex flex-col text-[3vh] text-white max-w-[60vw] justify-center items-center">
              <p className="text-[6vh]">About the Project</p>
              <p className="italic text-justify indent-5">The staking project is a innovative web application that seamlessly integrates with the popular e-wallet MetaMask, providing users with a user-friendly interface to manage their crypto assets. Users can effortlessly import tokens from their MetaMask wallet into the platform, gaining access to a variety of staking options. One notable feature is the ability for users to determine the precise amount they wish to mint or stake, offering a customizable and flexible experience. This empowers users to tailor their staking strategy according to their investment goals and risk tolerance. Additionally, the platform facilitates a straightforward withdrawal process, allowing users to effortlessly retrieve their staked assets whenever they desire. This integration of MetaMask, token importation, and customizable staking options provides a streamlined and accessible means for users to actively engage in staking activities, enhancing the overall user experience in the decentralized finance (DeFi) ecosystem. TY GPT hehehehe</p>
            </article>
          </section>
        </div>
      </section>

      <section className="mt-[330vh] py-[50vh] h-auto w-full pt-[80vh] flex bg-gradient-to-b from-transparent from-20% via-[#381001] to-transparent">
        <section className="flex flex-col items-center justify-center gap-8 w-[50vw]">

          <button onClick={() => { connectWallet(); }}
            className="py-1 px-5 bg-[#00224E] text-white border-transparent rounded-xl text-[3vh] bg-opacity-50 flex gap-2 items-center justify-center hover:bg-opacity-70 border-2 border-[#4376AB] border-opacity-10 hover:border-opacity-50 hover:-translate-y-2 hover:text-[3.5vh] hover:text-[#F6BF41] hover:animate-pulse h-[10vh] w-[20vw]">
            <div className=" bg-cover bg-center rounded-full w-[8vh] h-[8vh] " style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png")' }} />
            {walletKey != "" ? walletKey : " Connect wallet"}
          </button>

          <button onClick={importToken}
            className="py-1 px-5 bg-[#00224E] text-white border-transparent rounded-xl text-[3vh] bg-opacity-50 flex gap-2 items-center justify-center hover:bg-opacity-70 border-2 border-[#4376AB] border-opacity-10 hover:border-opacity-50 hover:-translate-y-2 hover:text-[3.5vh] hover:text-[#F6BF41] hover:animate-pulse h-[10vh] w-[20vw]">
            <div className=" bg-cover bg-center rounded-full w-[6vh] h-[6vh] " style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/019/026/033/small/3d-golden-button-for-empty-emblem-medal-or-badge-png.png")' }} />
            Import Token
          </button>
          <article className="italic text-[1.8vh] flex-col flex justify-center items-center">
          <p >Transaction may take a while</p>
          <p> please wait a moment before withdrawing </p>
          </article>
          <button
            onClick={withdrawCoin}
            className="py-1 px-5 bg-[#00224E] text-white border-transparent rounded-xl text-[3vh] bg-opacity-50 flex gap-2 items-center justify-center hover:bg-opacity-70 border-2 border-[#4376AB] border-opacity-10 hover:border-opacity-50 hover:-translate-y-2 hover:text-[3.5vh] hover:text-[#F6BF41] hover:animate-pulse h-[10vh] w-[20vw] -mt-4"
          >
            <div className=" bg-cover bg-center rounded-full w-[7vh] h-[7vh] " style={{ backgroundImage: 'url("https://cdn-icons-png.freepik.com/512/6466/6466947.png")' }} />
            
            {"Withdraw"}
          </button>
        </section>

        <section className="flex flex-col items-center justify-start gap-8 w-[50vw]">
          <section className="flex-col flex items-center justify-center gap-5">
            <p className="text-[4vh]"> Input Amount To Mint</p>
            <section className="flex items-end justify-start gap-3">
            <input
              type="number"
              value={mintingAmount}
              onChange={(e) => mintAmountChange(e)}
              className="bg-transparent border-b-2 border-[#4376AB] border-opacity-50 focus:border-2 focus:border-[#4376AB] h-[7vh] w-[6vw] text-[#4376AB] text-center text-[5vh]"
            />
            <button
              onClick={() => { mintCoin(); }}
              className="py-1 px-3 bg-[#00224E] text-white border-transparent rounded-md text-[3vh] bg-opacity-50 flex gap-2 items-center justify-center hover:bg-opacity-70 border-2 border-[#4376AB] border-opacity-10 hover:border-opacity-50 hover:-translate-y-1 hover:text-[3.5vh] hover:text-[#F6BF41] hover:animate-pulse h-[7vh] w-[10vw]"
            >
              {"Mint Token"}
            </button>
            </section>
          </section>


          <section className="flex-col flex items-center justify-center gap-5">
            <p className="text-[4vh]"> Input Amount To Stake</p>
            <section className="flex items-end justify-start gap-3">
            <input
              type="number"
              value={stakingAmount}
              onChange={(e) => stakeAmountChange(e)}
              className="bg-transparent border-b-2 border-[#4376AB] border-opacity-50 focus:border-2 focus:border-[#4376AB] h-[7vh] w-[6vw] text-[#4376AB] text-center text-[5vh]"
            />
            <button
              onClick={stakeCoin}
              className="py-1 px-3 bg-[#00224E] text-white border-transparent rounded-md text-[3vh] bg-opacity-50 flex gap-2 items-center justify-center hover:bg-opacity-70 border-2 border-[#4376AB] border-opacity-10 hover:border-opacity-50 hover:-translate-y-1 hover:text-[3.5vh] hover:text-[#F6BF41] hover:animate-pulse h-[7vh] w-[10vw]"
            >
              {"Stake"}
            </button>
            </section>
          </section>
        </section>

      </section>
    </main >
  );
}
