/*

undefined
Response schema for itineraries-list

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Itinerary_ from 'maas-schemas-ts/core/itinerary';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId =
  'http://maasglobal.com/maas-backend/itineraries/itinerary-list/response.json';

// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    itineraries?: Array<Itinerary_.Default>;
    maas?: {};
  } & {
    itineraries: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      itineraries: t.array(Itinerary_.Default),
      maas: t.type({}),
    }),
    t.type({
      itineraries: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      itineraries?: Array<Itinerary_.Default>;
      maas?: {};
    } & {
      itineraries: Defined;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success