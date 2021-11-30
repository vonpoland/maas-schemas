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

export const schemaId = 'https://schemas.maas.global/environments/apis.json';

// ApiId
// The purpose of this remains a mystery
export type ApiId = t.Branded<string, ApiIdBrand>;
export type ApiIdC = t.BrandC<t.StringC, ApiIdBrand>;
export const ApiId: ApiIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, ApiIdBrand> =>
    typeof x !== 'string' || x.match(RegExp('^[a-z]{2,20}$')) !== null,
  'ApiId',
);
export interface ApiIdBrand {
  readonly ApiId: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(ApiId)).decodeSync(examplesApiId) // => examplesApiId */
export const examplesApiId: NonEmptyArray<ApiId> = ([
  'fun',
  'boring',
] as unknown) as NonEmptyArray<ApiId>;

// ApiName
// The purpose of this remains a mystery
export type ApiName = t.Branded<string, ApiNameBrand>;
export type ApiNameC = t.BrandC<t.StringC, ApiNameBrand>;
export const ApiName: ApiNameC = t.brand(
  t.string,
  (x): x is t.Branded<string, ApiNameBrand> => true,
  'ApiName',
);
export interface ApiNameBrand {
  readonly ApiName: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(ApiName)).decodeSync(examplesApiName) // => examplesApiName */
export const examplesApiName: NonEmptyArray<ApiName> = ([
  'Production',
  'Testing',
] as unknown) as NonEmptyArray<ApiName>;

// ApiDescription
// The purpose of this remains a mystery
export type ApiDescription = t.Branded<string, ApiDescriptionBrand>;
export type ApiDescriptionC = t.BrandC<t.StringC, ApiDescriptionBrand>;
export const ApiDescription: ApiDescriptionC = t.brand(
  t.string,
  (x): x is t.Branded<string, ApiDescriptionBrand> => true,
  'ApiDescription',
);
export interface ApiDescriptionBrand {
  readonly ApiDescription: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(ApiDescription)).decodeSync(examplesApiDescription) // => examplesApiDescription */
export const examplesApiDescription: NonEmptyArray<ApiDescription> = ([
  'Production api',
  'Testing api',
] as unknown) as NonEmptyArray<ApiDescription>;

// Api
// The purpose of this remains a mystery
export type Api = t.Branded<
  {
    name?: ApiName;
    description?: ApiDescription;
  } & {},
  ApiBrand
>;
export type ApiC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        name: typeof ApiName;
        description: typeof ApiDescription;
      }>,
      t.TypeC<{}>,
    ]
  >,
  ApiBrand
>;
export const Api: ApiC = t.brand(
  t.intersection([
    t.partial({
      name: ApiName,
      description: ApiDescription,
    }),
    t.type({}),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      name?: ApiName;
      description?: ApiDescription;
    } & {},
    ApiBrand
  > => true,
  'Api',
);
export interface ApiBrand {
  readonly Api: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(Api)).decodeSync(examplesApi) // => examplesApi */
export const examplesApi: NonEmptyArray<Api> = ([
  { name: 'Fun Api', description: 'This api is used for fun stuff' },
  { name: 'Boring Api', description: 'This api is used for boring stuff' },
] as unknown) as NonEmptyArray<Api>;

// ApiIndex
// The purpose of this remains a mystery
export type ApiIndex = t.Branded<
  Record<ApiId, unknown> & Record<string, Api>,
  ApiIndexBrand
>;
export type ApiIndexC = t.BrandC<
  t.IntersectionC<
    [t.RecordC<typeof ApiId, t.UnknownC>, t.RecordC<t.StringC, typeof Api>]
  >,
  ApiIndexBrand
>;
export const ApiIndex: ApiIndexC = t.brand(
  t.intersection([t.record(ApiId, t.unknown), t.record(t.string, Api)]),
  (x): x is t.Branded<Record<ApiId, unknown> & Record<string, Api>, ApiIndexBrand> =>
    true,
  'ApiIndex',
);
export interface ApiIndexBrand {
  readonly ApiIndex: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(ApiIndex)).decodeSync(examplesApiIndex) // => examplesApiIndex */
export const examplesApiIndex: NonEmptyArray<ApiIndex> = ([
  {
    fun: { name: 'Fun Api', description: 'This api is used for fun stuff' },
    boring: { name: 'Boring Api', description: 'This api is used for boring stuff' },
  },
] as unknown) as NonEmptyArray<ApiIndex>;

// ApiUrl
// has to be url, has to start https://, has to end with slash
export type ApiUrl = t.Branded<string & Units_.Url, ApiUrlBrand>;
export type ApiUrlC = t.BrandC<
  t.IntersectionC<[t.StringC, typeof Units_.Url]>,
  ApiUrlBrand
>;
export const ApiUrl: ApiUrlC = t.brand(
  t.intersection([t.string, Units_.Url]),
  (x): x is t.Branded<string & Units_.Url, ApiUrlBrand> =>
    typeof x !== 'string' || x.match(RegExp('^https://[^\\s]+/$')) !== null,
  'ApiUrl',
);
export interface ApiUrlBrand {
  readonly ApiUrl: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(ApiUrl)).decodeSync(examplesApiUrl) // => examplesApiUrl */
export const examplesApiUrl: NonEmptyArray<ApiUrl> = ([
  'https://production.example.com/api/',
  'https://testing.example.com/api/',
  'https://environment13.example.com/api/',
  'https://fantasy-toppign.example.com/api/',
] as unknown) as NonEmptyArray<ApiUrl>;

// ApiConfig
// The purpose of this remains a mystery
export type ApiConfig = t.Branded<
  {
    url?: ApiUrl;
  } & {
    url: Defined;
  },
  ApiConfigBrand
>;
export type ApiConfigC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        url: typeof ApiUrl;
      }>,
      t.TypeC<{
        url: typeof Defined;
      }>,
    ]
  >,
  ApiConfigBrand
>;
export const ApiConfig: ApiConfigC = t.brand(
  t.intersection([
    t.partial({
      url: ApiUrl,
    }),
    t.type({
      url: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      url?: ApiUrl;
    } & {
      url: Defined;
    },
    ApiConfigBrand
  > => true,
  'ApiConfig',
);
export interface ApiConfigBrand {
  readonly ApiConfig: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(ApiConfig)).decodeSync(examplesApiConfig) // => examplesApiConfig */
export const examplesApiConfig: NonEmptyArray<ApiConfig> = ([
  { url: 'https://fantasy-topping.example.com/fun/' },
] as unknown) as NonEmptyArray<ApiConfig>;

// ApiConfigs
// The purpose of this remains a mystery
export type ApiConfigs = t.Branded<
  Record<ApiName, unknown> & Record<string, ApiConfig>,
  ApiConfigsBrand
>;
export type ApiConfigsC = t.BrandC<
  t.IntersectionC<
    [t.RecordC<typeof ApiName, t.UnknownC>, t.RecordC<t.StringC, typeof ApiConfig>]
  >,
  ApiConfigsBrand
>;
export const ApiConfigs: ApiConfigsC = t.brand(
  t.intersection([t.record(ApiName, t.unknown), t.record(t.string, ApiConfig)]),
  (
    x,
  ): x is t.Branded<
    Record<ApiName, unknown> & Record<string, ApiConfig>,
    ApiConfigsBrand
  > => true,
  'ApiConfigs',
);
export interface ApiConfigsBrand {
  readonly ApiConfigs: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(ApiConfigs)).decodeSync(examplesApiConfigs) // => examplesApiConfigs */
export const examplesApiConfigs: NonEmptyArray<ApiConfigs> = ([
  {
    fun: { url: 'https://fantasy-topping.example.com/fun/' },
    boring: { url: 'https://fantasy-topping.example.com/boring/' },
  },
] as unknown) as NonEmptyArray<ApiConfigs>;

// Apis
// The default export. More information at the top.
export type Apis = t.Branded<unknown, ApisBrand>;
export type ApisC = t.BrandC<t.UnknownC, ApisBrand>;
export const Apis: ApisC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, ApisBrand> => true,
  'Apis',
);
export interface ApisBrand {
  readonly Apis: unique symbol;
}

export default Apis;

// Success
