/*

undefined
Response schema for tsp-auth verify

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Definitions_ from './definitions';

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

export const schemaId =
  'https://schemas.maas.global/maas-backend/tsp-auth/verify/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    allProductsVerified?: boolean;
    products?: Definitions_.VerifiedProducts;
    verificationFailureKey?: Definitions_.VerificationFailureKey;
  } & {
    allProductsVerified: Defined;
    products: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        allProductsVerified: t.BooleanC;
        products: typeof Definitions_.VerifiedProducts;
        verificationFailureKey: typeof Definitions_.VerificationFailureKey;
      }>,
      t.TypeC<{
        allProductsVerified: typeof Defined;
        products: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      allProductsVerified: t.boolean,
      products: Definitions_.VerifiedProducts,
      verificationFailureKey: Definitions_.VerificationFailureKey,
    }),
    t.type({
      allProductsVerified: Defined,
      products: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      allProductsVerified?: boolean;
      products?: Definitions_.VerifiedProducts;
      verificationFailureKey?: Definitions_.VerificationFailureKey;
    } & {
      allProductsVerified: Defined;
      products: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
