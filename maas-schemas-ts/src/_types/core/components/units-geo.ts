/*

undefined
MaaS common geolocaion units that are used consistently within our own objects

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

export const schemaId = 'https://schemas.maas.global/core/components/units-geo.json';

// Latitude
// Geographic latitude (north-south axis) in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System
export type Latitude = t.Branded<number, LatitudeBrand>;
export type LatitudeC = t.BrandC<t.NumberC, LatitudeBrand>;
export const Latitude: LatitudeC = t.brand(
  t.number,
  (x): x is t.Branded<number, LatitudeBrand> =>
    (typeof x !== 'number' || x >= -90) && (typeof x !== 'number' || x <= 90),
  'Latitude',
);
export interface LatitudeBrand {
  readonly Latitude: unique symbol;
}
/** require('io-ts-validator').validator(Latitude).decodeSync(minimumLatitude) // => minimumLatitude */
export const minimumLatitude: Latitude = (-90 as unknown) as Latitude;
/** require('io-ts-validator').validator(Latitude).decodeSync(maximumLatitude) // => maximumLatitude */
export const maximumLatitude: Latitude = (90 as unknown) as Latitude;

// Longitude
// Geographic longitude (east-west axis) in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System
export type Longitude = t.Branded<number, LongitudeBrand>;
export type LongitudeC = t.BrandC<t.NumberC, LongitudeBrand>;
export const Longitude: LongitudeC = t.brand(
  t.number,
  (x): x is t.Branded<number, LongitudeBrand> =>
    (typeof x !== 'number' || x >= -180) && (typeof x !== 'number' || x <= 180),
  'Longitude',
);
export interface LongitudeBrand {
  readonly Longitude: unique symbol;
}
/** require('io-ts-validator').validator(Longitude).decodeSync(minimumLongitude) // => minimumLongitude */
export const minimumLongitude: Longitude = (-180 as unknown) as Longitude;
/** require('io-ts-validator').validator(Longitude).decodeSync(maximumLongitude) // => maximumLongitude */
export const maximumLongitude: Longitude = (180 as unknown) as Longitude;

// RelaxedLatitude
// No-numeric precision version of MaaS core latitude
export type RelaxedLatitude = t.Branded<number, RelaxedLatitudeBrand>;
export type RelaxedLatitudeC = t.BrandC<t.NumberC, RelaxedLatitudeBrand>;
export const RelaxedLatitude: RelaxedLatitudeC = t.brand(
  t.number,
  (x): x is t.Branded<number, RelaxedLatitudeBrand> =>
    (typeof x !== 'number' || x >= -90) && (typeof x !== 'number' || x <= 90),
  'RelaxedLatitude',
);
export interface RelaxedLatitudeBrand {
  readonly RelaxedLatitude: unique symbol;
}
/** require('io-ts-validator').validator(RelaxedLatitude).decodeSync(minimumRelaxedLatitude) // => minimumRelaxedLatitude */
export const minimumRelaxedLatitude: RelaxedLatitude = (-90 as unknown) as RelaxedLatitude;
/** require('io-ts-validator').validator(RelaxedLatitude).decodeSync(maximumRelaxedLatitude) // => maximumRelaxedLatitude */
export const maximumRelaxedLatitude: RelaxedLatitude = (90 as unknown) as RelaxedLatitude;

// RelaxedLongitude
// No-numeric precision version of MaaS core longitude
export type RelaxedLongitude = t.Branded<number, RelaxedLongitudeBrand>;
export type RelaxedLongitudeC = t.BrandC<t.NumberC, RelaxedLongitudeBrand>;
export const RelaxedLongitude: RelaxedLongitudeC = t.brand(
  t.number,
  (x): x is t.Branded<number, RelaxedLongitudeBrand> =>
    (typeof x !== 'number' || x >= -180) && (typeof x !== 'number' || x <= 180),
  'RelaxedLongitude',
);
export interface RelaxedLongitudeBrand {
  readonly RelaxedLongitude: unique symbol;
}
/** require('io-ts-validator').validator(RelaxedLongitude).decodeSync(minimumRelaxedLongitude) // => minimumRelaxedLongitude */
export const minimumRelaxedLongitude: RelaxedLongitude = (-180 as unknown) as RelaxedLongitude;
/** require('io-ts-validator').validator(RelaxedLongitude).decodeSync(maximumRelaxedLongitude) // => maximumRelaxedLongitude */
export const maximumRelaxedLongitude: RelaxedLongitude = (180 as unknown) as RelaxedLongitude;

// Distance
// Distance in meters
export type Distance = t.Branded<number, DistanceBrand>;
export type DistanceC = t.BrandC<t.NumberC, DistanceBrand>;
export const Distance: DistanceC = t.brand(
  t.number,
  (x): x is t.Branded<number, DistanceBrand> =>
    (typeof x !== 'number' || x <= 40075000) && (typeof x !== 'number' || x % 1 === 0),
  'Distance',
);
export interface DistanceBrand {
  readonly Distance: unique symbol;
}
/** require('io-ts-validator').validator(Distance).decodeSync(minimumDistance) // => minimumDistance */
export const minimumDistance: Distance = (0 as unknown) as Distance;
/** require('io-ts-validator').validator(Distance).decodeSync(maximumDistance) // => maximumDistance */
export const maximumDistance: Distance = (40075000 as unknown) as Distance;

// Polyline
// Google encoded polyline, see: https://developers.google.com/maps/documentation/utilities/polylinealgorithm
export type Polyline = t.Branded<string, PolylineBrand>;
export type PolylineC = t.BrandC<t.StringC, PolylineBrand>;
export const Polyline: PolylineC = t.brand(
  t.string,
  (x): x is t.Branded<string, PolylineBrand> =>
    (typeof x !== 'string' ||
      x.match(RegExp('^([\\x5F-\\x7E]*[\\x3F-\\x5E])+$')) !== null) &&
    (typeof x !== 'string' || x.length >= 3) &&
    (typeof x !== 'string' || x.length <= 65535),
  'Polyline',
);
export interface PolylineBrand {
  readonly Polyline: unique symbol;
}

// Location
// Geographic latitude-longitude object in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System
export type Location = t.Branded<
  {
    lat?: Latitude;
    lon?: Longitude;
  } & {
    lat: Defined;
    lon: Defined;
  },
  LocationBrand
>;
export type LocationC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        lat: typeof Latitude;
        lon: typeof Longitude;
      }>,
      t.TypeC<{
        lat: typeof Defined;
        lon: typeof Defined;
      }>,
    ]
  >,
  LocationBrand
>;
export const Location: LocationC = t.brand(
  t.intersection([
    t.partial({
      lat: Latitude,
      lon: Longitude,
    }),
    t.type({
      lat: Defined,
      lon: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      lat?: Latitude;
      lon?: Longitude;
    } & {
      lat: Defined;
      lon: Defined;
    },
    LocationBrand
  > => true,
  'Location',
);
export interface LocationBrand {
  readonly Location: unique symbol;
}

// RelaxedLocation
// No-numeric precision version of MaaS core location
export type RelaxedLocation = t.Branded<
  {
    lat?: RelaxedLatitude;
    lon?: RelaxedLongitude;
  } & {
    lat: Defined;
    lon: Defined;
  },
  RelaxedLocationBrand
>;
export type RelaxedLocationC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        lat: typeof RelaxedLatitude;
        lon: typeof RelaxedLongitude;
      }>,
      t.TypeC<{
        lat: typeof Defined;
        lon: typeof Defined;
      }>,
    ]
  >,
  RelaxedLocationBrand
>;
export const RelaxedLocation: RelaxedLocationC = t.brand(
  t.intersection([
    t.partial({
      lat: RelaxedLatitude,
      lon: RelaxedLongitude,
    }),
    t.type({
      lat: Defined,
      lon: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      lat?: RelaxedLatitude;
      lon?: RelaxedLongitude;
    } & {
      lat: Defined;
      lon: Defined;
    },
    RelaxedLocationBrand
  > => true,
  'RelaxedLocation',
);
export interface RelaxedLocationBrand {
  readonly RelaxedLocation: unique symbol;
}

// ShortLocation
// Geographic latitude-longitude number-pair array in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System
export type ShortLocation = t.Branded<[Latitude, Longitude], ShortLocationBrand>;
export type ShortLocationC = t.BrandC<
  t.TupleC<[typeof Latitude, typeof Longitude]>,
  ShortLocationBrand
>;
export const ShortLocation: ShortLocationC = t.brand(
  t.tuple([Latitude, Longitude]),
  (x): x is t.Branded<[Latitude, Longitude], ShortLocationBrand> => true,
  'ShortLocation',
);
export interface ShortLocationBrand {
  readonly ShortLocation: unique symbol;
}

// ShortLocationString
// Geographic latitude-longitude number-pair as a string in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System
export type ShortLocationString = t.Branded<string, ShortLocationStringBrand>;
export type ShortLocationStringC = t.BrandC<t.StringC, ShortLocationStringBrand>;
export const ShortLocationString: ShortLocationStringC = t.brand(
  t.string,
  (x): x is t.Branded<string, ShortLocationStringBrand> =>
    (typeof x !== 'string' ||
      x.match(RegExp('^[+-]?\\d{1,3}(\\.\\d+)?,[+-]?\\d{1,3}(\\.\\d+)?$')) !== null) &&
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 64),
  'ShortLocationString',
);
export interface ShortLocationStringBrand {
  readonly ShortLocationString: unique symbol;
}

// UnitsGeo
// The default export. More information at the top.
export type UnitsGeo = t.Branded<unknown, UnitsGeoBrand>;
export type UnitsGeoC = t.BrandC<t.UnknownC, UnitsGeoBrand>;
export const UnitsGeo: UnitsGeoC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, UnitsGeoBrand> => true,
  'UnitsGeo',
);
export interface UnitsGeoBrand {
  readonly UnitsGeo: unique symbol;
}

export default UnitsGeo;

// Success
