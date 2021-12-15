/*

undefined
Request schema for itinerary-list

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../core/components/units';
import * as Booking_ from '../../../core/booking';
import * as ApiCommon_ from '../../../core/components/api-common';

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
  'https://schemas.maas.global/maas-backend/itineraries/itinerary-list/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: {
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      states?: string;
      bookingId?: Booking_.Id;
      originalFare?: string;
    };
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_.IdentityId;
        payload: t.PartialC<{
          startTime: typeof Units_.Time;
          endTime: typeof Units_.Time;
          states: t.StringC;
          bookingId: typeof Booking_.Id;
          originalFare: t.StringC;
        }>;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: t.partial({
        startTime: Units_.Time,
        endTime: Units_.Time,
        states: t.string,
        bookingId: Booking_.Id,
        originalFare: t.string,
      }),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: {
        startTime?: Units_.Time;
        endTime?: Units_.Time;
        states?: string;
        bookingId?: Booking_.Id;
        originalFare?: string;
      };
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success