/*

undefined
undefined

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../core/components/units';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId = 'http://maasglobal.com/environments/accounts.json';

// AccountId
// The purpose of this remains a mystery
export type AccountId = t.Branded<string, AccountIdBrand>;
export type AccountIdC = t.BrandC<t.StringC, AccountIdBrand>;
export const AccountId: AccountIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, AccountIdBrand> =>
    typeof x !== 'string' || x.match(RegExp('^[0-9]{12}$')) !== null,
  'AccountId',
);
export interface AccountIdBrand {
  readonly AccountId: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(AccountId)).decodeSync(examplesAccountId) // => examplesAccountId */
export const examplesAccountId: NonEmptyArray<AccountId> = ([
  '001234567890',
] as unknown) as NonEmptyArray<AccountId>;

// AccountAlias
// The purpose of this remains a mystery
export type AccountAlias = t.Branded<string & Units_.HostnameLabel, AccountAliasBrand>;
export type AccountAliasC = t.BrandC<
  t.IntersectionC<[t.StringC, typeof Units_.HostnameLabel]>,
  AccountAliasBrand
>;
export const AccountAlias: AccountAliasC = t.brand(
  t.intersection([t.string, Units_.HostnameLabel]),
  (x): x is t.Branded<string & Units_.HostnameLabel, AccountAliasBrand> => true,
  'AccountAlias',
);
export interface AccountAliasBrand {
  readonly AccountAlias: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(AccountAlias)).decodeSync(examplesAccountAlias) // => examplesAccountAlias */
export const examplesAccountAlias: NonEmptyArray<AccountAlias> = ([
  'production',
  'testing',
] as unknown) as NonEmptyArray<AccountAlias>;

// AccountName
// The purpose of this remains a mystery
export type AccountName = t.Branded<string, AccountNameBrand>;
export type AccountNameC = t.BrandC<t.StringC, AccountNameBrand>;
export const AccountName: AccountNameC = t.brand(
  t.string,
  (x): x is t.Branded<string, AccountNameBrand> => true,
  'AccountName',
);
export interface AccountNameBrand {
  readonly AccountName: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(AccountName)).decodeSync(examplesAccountName) // => examplesAccountName */
export const examplesAccountName: NonEmptyArray<AccountName> = ([
  'Production',
  'Testing',
] as unknown) as NonEmptyArray<AccountName>;

// AccountDescription
// The purpose of this remains a mystery
export type AccountDescription = t.Branded<string, AccountDescriptionBrand>;
export type AccountDescriptionC = t.BrandC<t.StringC, AccountDescriptionBrand>;
export const AccountDescription: AccountDescriptionC = t.brand(
  t.string,
  (x): x is t.Branded<string, AccountDescriptionBrand> => true,
  'AccountDescription',
);
export interface AccountDescriptionBrand {
  readonly AccountDescription: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(AccountDescription)).decodeSync(examplesAccountDescription) // => examplesAccountDescription */
export const examplesAccountDescription: NonEmptyArray<AccountDescription> = ([
  'Production account',
  'Testing account',
] as unknown) as NonEmptyArray<AccountDescription>;

// Account
// The purpose of this remains a mystery
export type Account = t.Branded<
  {
    id?: AccountId;
    name?: AccountName;
    description?: AccountDescription;
  } & {
    id: Defined;
  },
  AccountBrand
>;
export type AccountC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: typeof AccountId;
        name: typeof AccountName;
        description: typeof AccountDescription;
      }>,
      t.TypeC<{
        id: typeof Defined;
      }>,
    ]
  >,
  AccountBrand
>;
export const Account: AccountC = t.brand(
  t.intersection([
    t.partial({
      id: AccountId,
      name: AccountName,
      description: AccountDescription,
    }),
    t.type({
      id: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: AccountId;
      name?: AccountName;
      description?: AccountDescription;
    } & {
      id: Defined;
    },
    AccountBrand
  > => true,
  'Account',
);
export interface AccountBrand {
  readonly Account: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(Account)).decodeSync(examplesAccount) // => examplesAccount */
export const examplesAccount: NonEmptyArray<Account> = ([
  {
    id: '001234567890',
    name: 'Example Account',
    description: 'This account is but an example account',
  },
  { id: '001234567890' },
] as unknown) as NonEmptyArray<Account>;

// AccountIndex
// The purpose of this remains a mystery
export type AccountIndex = t.Branded<
  Record<AccountAlias, unknown> & Record<string, Account>,
  AccountIndexBrand
>;
export type AccountIndexC = t.BrandC<
  t.IntersectionC<
    [t.RecordC<typeof AccountAlias, t.UnknownC>, t.RecordC<t.StringC, typeof Account>]
  >,
  AccountIndexBrand
>;
export const AccountIndex: AccountIndexC = t.brand(
  t.intersection([t.record(AccountAlias, t.unknown), t.record(t.string, Account)]),
  (
    x,
  ): x is t.Branded<
    Record<AccountAlias, unknown> & Record<string, Account>,
    AccountIndexBrand
  > => true,
  'AccountIndex',
);
export interface AccountIndexBrand {
  readonly AccountIndex: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(AccountIndex)).decodeSync(examplesAccountIndex) // => examplesAccountIndex */
export const examplesAccountIndex: NonEmptyArray<AccountIndex> = ([
  {
    production: {
      id: '001234567890',
      name: 'Example Account',
      description: 'This account is but an example account',
    },
    testing: { id: '101234567890' },
  },
] as unknown) as NonEmptyArray<AccountIndex>;

// Accounts
// The default export. More information at the top.
export type Accounts = t.Branded<unknown, AccountsBrand>;
export type AccountsC = t.BrandC<t.UnknownC, AccountsBrand>;
export const Accounts: AccountsC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, AccountsBrand> => true,
  'Accounts',
);
export interface AccountsBrand {
  readonly Accounts: unique symbol;
}

export default Accounts;

// Success
