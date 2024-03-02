import { Contract, ContractRunner } from "ethers";
import abi from "./abi.json";

export function getContract(signer: ContractRunner) {
    return new Contract(
        "0x1D0E8da8c591e34EDE73Bdcf55D9B8f85B35B0d1",
        abi as any,
        signer
    );
}