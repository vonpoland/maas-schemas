/*

undefined
Response schema for autocomplete

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

export const schemaId =
  'http://maasglobal.com/maas-backend/autocomplete/autocomplete-query/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    suggestions?: Array<string>;
    debug?: Record<string, unknown>;
  } & {
    suggestions: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        suggestions: t.ArrayC<t.StringC>;
        debug: t.UnknownRecordC;
      }>,
      t.TypeC<{
        suggestions: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      suggestions: t.array(t.string),
      debug: t.UnknownRecord,
    }),
    t.type({
      suggestions: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      suggestions?: Array<string>;
      debug?: Record<string, unknown>;
    } & {
      suggestions: Defined;
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
