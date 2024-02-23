import {
  createActor as azleActor,
  canisterId as azleCanisterId,
} from "../../backend/declarations";
import { _SERVICE } from "../../backend/declarations/backend.did";

export const makeActor = async (canisterId: string, createActor: any, agentOptions: any) => {
  return createActor(canisterId, {
    agentOptions: {
      host: process.env.NEXT_PUBLIC_IC_HOST,
      ...agentOptions,
    },
  });
};

export function makeAzleActor(agentOptions = {}) {
  return makeActor(process.env.NEXT_PUBLIC_CANISTER_ID_AZLE!, azleActor, agentOptions);
}