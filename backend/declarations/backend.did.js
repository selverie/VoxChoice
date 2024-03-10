export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'becomeAdmin' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'isChoose' : IDL.Bool,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'role' : IDL.Text,
              'email' : IDL.Text,
              'updatedAt' : IDL.Nat64,
              'address' : IDL.Text,
              'birth' : IDL.Text,
              'phone' : IDL.Text,
              'isRegistered' : IDL.Bool,
            }),
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        [],
      ),
    'deleteCandidate' : IDL.Func(
        [IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Text,
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        [],
      ),
    'getAllCandidate' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Vec(
              IDL.Record({
                'id' : IDL.Text,
                'name' : IDL.Text,
                'vote' : IDL.Nat,
                'image' : IDL.Text,
              })
            ),
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        ['query'],
      ),
    'insertCandidate' : IDL.Func(
        [IDL.Record({ 'name' : IDL.Text, 'image' : IDL.Text })],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'name' : IDL.Text,
              'vote' : IDL.Nat,
              'image' : IDL.Text,
            }),
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        [],
      ),
    'loginUser' : IDL.Func(
        [],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'isChoose' : IDL.Bool,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'role' : IDL.Text,
              'email' : IDL.Text,
              'updatedAt' : IDL.Nat64,
              'address' : IDL.Text,
              'birth' : IDL.Text,
              'phone' : IDL.Text,
              'isRegistered' : IDL.Bool,
            }),
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        [],
      ),
    'registerUser' : IDL.Func(
        [
          IDL.Record({
            'name' : IDL.Text,
            'email' : IDL.Text,
            'address' : IDL.Text,
            'birth' : IDL.Text,
            'phone' : IDL.Text,
          }),
        ],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'isChoose' : IDL.Bool,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'role' : IDL.Text,
              'email' : IDL.Text,
              'updatedAt' : IDL.Nat64,
              'address' : IDL.Text,
              'birth' : IDL.Text,
              'phone' : IDL.Text,
              'isRegistered' : IDL.Bool,
            }),
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        [],
      ),
    'updateCandidate' : IDL.Func(
        [IDL.Text, IDL.Record({ 'name' : IDL.Text, 'image' : IDL.Text })],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'name' : IDL.Text,
              'vote' : IDL.Nat,
              'image' : IDL.Text,
            }),
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        [],
      ),
    'voteCandidate' : IDL.Func(
        [IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'name' : IDL.Text,
              'vote' : IDL.Nat,
              'image' : IDL.Text,
            }),
            'Err' : IDL.Record({ 'code' : IDL.Nat16, 'message' : IDL.Text }),
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
