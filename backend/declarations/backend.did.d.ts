import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'becomeAdmin' : ActorMethod<
    [],
    {
        'Ok' : {
          'id' : Principal,
          'isChoose' : boolean,
          'name' : string,
          'createdAt' : bigint,
          'role' : string,
          'email' : string,
          'updatedAt' : bigint,
          'address' : string,
          'birth' : bigint,
          'phone' : string,
          'isRegistered' : boolean,
        }
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'deleteCandidate' : ActorMethod<
    [string],
    { 'Ok' : string } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'getAllCandidate' : ActorMethod<
    [],
    {
        'Ok' : Array<
          { 'id' : string, 'name' : string, 'vote' : bigint, 'image' : string }
        >
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'insertCandidate' : ActorMethod<
    [{ 'name' : string, 'image' : string }],
    {
        'Ok' : {
          'id' : string,
          'name' : string,
          'vote' : bigint,
          'image' : string,
        }
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'loginUser' : ActorMethod<
    [],
    {
        'Ok' : {
          'id' : Principal,
          'isChoose' : boolean,
          'name' : string,
          'createdAt' : bigint,
          'role' : string,
          'email' : string,
          'updatedAt' : bigint,
          'address' : string,
          'birth' : bigint,
          'phone' : string,
          'isRegistered' : boolean,
        }
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'registerUser' : ActorMethod<
    [
      {
        'name' : string,
        'email' : string,
        'address' : string,
        'birth' : bigint,
        'phone' : string,
      },
    ],
    {
        'Ok' : {
          'id' : Principal,
          'isChoose' : boolean,
          'name' : string,
          'createdAt' : bigint,
          'role' : string,
          'email' : string,
          'updatedAt' : bigint,
          'address' : string,
          'birth' : bigint,
          'phone' : string,
          'isRegistered' : boolean,
        }
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'updateCandidate' : ActorMethod<
    [string, { 'name' : string, 'image' : string }],
    {
        'Ok' : {
          'id' : string,
          'name' : string,
          'vote' : bigint,
          'image' : string,
        }
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
  'voteCandidate' : ActorMethod<
    [string],
    {
        'Ok' : {
          'id' : string,
          'name' : string,
          'vote' : bigint,
          'image' : string,
        }
      } |
      { 'Err' : { 'code' : number, 'message' : string } }
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
