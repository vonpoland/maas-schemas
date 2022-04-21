/*

undefined
Response schema for upload call to a TSP adapter, expecting a signed url

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

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

export const schemaId = 'https://schemas.maas.global/tsp/booking-upload/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    uploadUrl?: string;
  } & {
    uploadUrl: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        uploadUrl: t.StringC;
      }>,
      t.TypeC<{
        uploadUrl: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      uploadUrl: t.string,
    }),
    t.type({
      uploadUrl: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      uploadUrl?: string;
    } & {
      uploadUrl: Defined;
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
