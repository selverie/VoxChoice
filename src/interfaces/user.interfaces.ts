import { Principal } from "@dfinity/principal";

export interface IUser {
  id: Principal,
  name: string,
  email: string,
  address: string,
  birth: string,
  phone: string,
  role: string,
  isRegistered: boolean,
  isChoose: boolean,
  createdAt: bigint,
  updatedAt: bigint
}
