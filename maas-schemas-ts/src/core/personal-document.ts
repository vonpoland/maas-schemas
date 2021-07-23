/*

undefined
Personal document object

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from './components/units';
import * as Common_ from './components/common';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

export interface NullBrand {
  readonly Null: unique symbol;
}
export type NullC = t.BrandC<t.UnknownC, NullBrand>;
export const Null: NullC = t.brand(
  t.unknown,
  (n): n is t.Branded<unknown, NullBrand> => n === null,
  'Null',
);
export type Null = t.TypeOf<typeof Null>;

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

export const schemaId = 'http://maasglobal.com/core/personal-document.json';

// DocumentId
// The purpose of this remains a mystery
export type DocumentId = t.Branded<Units_.Uuid, DocumentIdBrand>;
export type DocumentIdC = t.BrandC<typeof Units_.Uuid, DocumentIdBrand>;
export const DocumentId: DocumentIdC = t.brand(
  Units_.Uuid,
  (x): x is t.Branded<Units_.Uuid, DocumentIdBrand> => true,
  'DocumentId',
);
export interface DocumentIdBrand {
  readonly DocumentId: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(DocumentId)).decodeSync(examplesDocumentId) // => examplesDocumentId */
export const examplesDocumentId: NonEmptyArray<DocumentId> = ([
  '932116e4-94cf-41cd-a62b-82d5f2730586',
] as unknown) as NonEmptyArray<DocumentId>;

// DocumentType
// The purpose of this remains a mystery
export type DocumentType = t.Branded<string, DocumentTypeBrand>;
export type DocumentTypeC = t.BrandC<t.StringC, DocumentTypeBrand>;
export const DocumentType: DocumentTypeC = t.brand(
  t.string,
  (x): x is t.Branded<string, DocumentTypeBrand> => true,
  'DocumentType',
);
export interface DocumentTypeBrand {
  readonly DocumentType: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(DocumentType)).decodeSync(examplesDocumentType) // => examplesDocumentType */
export const examplesDocumentType: NonEmptyArray<DocumentType> = ([
  'DRIVERS_LICENSE',
] as unknown) as NonEmptyArray<DocumentType>;

// DocumentNumber
// The purpose of this remains a mystery
export type DocumentNumber = t.Branded<string, DocumentNumberBrand>;
export type DocumentNumberC = t.BrandC<t.StringC, DocumentNumberBrand>;
export const DocumentNumber: DocumentNumberC = t.brand(
  t.string,
  (x): x is t.Branded<string, DocumentNumberBrand> => true,
  'DocumentNumber',
);
export interface DocumentNumberBrand {
  readonly DocumentNumber: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(DocumentNumber)).decodeSync(examplesDocumentNumber) // => examplesDocumentNumber */
export const examplesDocumentNumber: NonEmptyArray<DocumentNumber> = ([
  '123456789012',
] as unknown) as NonEmptyArray<DocumentNumber>;

// IssuingCountry
// The purpose of this remains a mystery
export type IssuingCountry = t.Branded<string, IssuingCountryBrand>;
export type IssuingCountryC = t.BrandC<t.StringC, IssuingCountryBrand>;
export const IssuingCountry: IssuingCountryC = t.brand(
  t.string,
  (x): x is t.Branded<string, IssuingCountryBrand> =>
    typeof x !== 'string' || x.length >= 2,
  'IssuingCountry',
);
export interface IssuingCountryBrand {
  readonly IssuingCountry: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(IssuingCountry)).decodeSync(examplesIssuingCountry) // => examplesIssuingCountry */
export const examplesIssuingCountry: NonEmptyArray<IssuingCountry> = ([
  'CX',
] as unknown) as NonEmptyArray<IssuingCountry>;

// DocumentStatus
// The purpose of this remains a mystery
export type DocumentStatus = t.Branded<
  string &
    (
      | 'PENDING'
      | 'APPROVED'
      | 'DECLINED'
      | 'EXPIRED'
      | 'RESUBMISSION_REQUESTED'
      | 'ABANDONED'
    ),
  DocumentStatusBrand
>;
export type DocumentStatusC = t.BrandC<
  t.IntersectionC<
    [
      t.StringC,
      t.UnionC<
        [
          t.LiteralC<'PENDING'>,
          t.LiteralC<'APPROVED'>,
          t.LiteralC<'DECLINED'>,
          t.LiteralC<'EXPIRED'>,
          t.LiteralC<'RESUBMISSION_REQUESTED'>,
          t.LiteralC<'ABANDONED'>,
        ]
      >,
    ]
  >,
  DocumentStatusBrand
>;
export const DocumentStatus: DocumentStatusC = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('PENDING'),
      t.literal('APPROVED'),
      t.literal('DECLINED'),
      t.literal('EXPIRED'),
      t.literal('RESUBMISSION_REQUESTED'),
      t.literal('ABANDONED'),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    string &
      (
        | 'PENDING'
        | 'APPROVED'
        | 'DECLINED'
        | 'EXPIRED'
        | 'RESUBMISSION_REQUESTED'
        | 'ABANDONED'
      ),
    DocumentStatusBrand
  > => true,
  'DocumentStatus',
);
export interface DocumentStatusBrand {
  readonly DocumentStatus: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(DocumentStatus)).decodeSync(examplesDocumentStatus) // => examplesDocumentStatus */
export const examplesDocumentStatus: NonEmptyArray<DocumentStatus> = ([
  'APPROVED',
] as unknown) as NonEmptyArray<DocumentStatus>;

// DocumentStatusPENDING
// The purpose of this remains a mystery
export type DocumentStatusPENDING = t.Branded<
  DocumentStatus & 'PENDING',
  DocumentStatusPENDINGBrand
>;
export type DocumentStatusPENDINGC = t.BrandC<
  t.IntersectionC<[typeof DocumentStatus, t.LiteralC<'PENDING'>]>,
  DocumentStatusPENDINGBrand
>;
export const DocumentStatusPENDING: DocumentStatusPENDINGC = t.brand(
  t.intersection([DocumentStatus, t.literal('PENDING')]),
  (x): x is t.Branded<DocumentStatus & 'PENDING', DocumentStatusPENDINGBrand> => true,
  'DocumentStatusPENDING',
);
export interface DocumentStatusPENDINGBrand {
  readonly DocumentStatusPENDING: unique symbol;
}
/** require('io-ts-validator').validator(DocumentStatusPENDING).decodeSync(defaultDocumentStatusPENDING) // => defaultDocumentStatusPENDING */
export const defaultDocumentStatusPENDING: DocumentStatusPENDING = ('PENDING' as unknown) as DocumentStatusPENDING;

// DocumentStatusAPPROVED
// The purpose of this remains a mystery
export type DocumentStatusAPPROVED = t.Branded<
  DocumentStatus & 'APPROVED',
  DocumentStatusAPPROVEDBrand
>;
export type DocumentStatusAPPROVEDC = t.BrandC<
  t.IntersectionC<[typeof DocumentStatus, t.LiteralC<'APPROVED'>]>,
  DocumentStatusAPPROVEDBrand
>;
export const DocumentStatusAPPROVED: DocumentStatusAPPROVEDC = t.brand(
  t.intersection([DocumentStatus, t.literal('APPROVED')]),
  (x): x is t.Branded<DocumentStatus & 'APPROVED', DocumentStatusAPPROVEDBrand> => true,
  'DocumentStatusAPPROVED',
);
export interface DocumentStatusAPPROVEDBrand {
  readonly DocumentStatusAPPROVED: unique symbol;
}
/** require('io-ts-validator').validator(DocumentStatusAPPROVED).decodeSync(defaultDocumentStatusAPPROVED) // => defaultDocumentStatusAPPROVED */
export const defaultDocumentStatusAPPROVED: DocumentStatusAPPROVED = ('APPROVED' as unknown) as DocumentStatusAPPROVED;

// DocumentStatusDECLINED
// The purpose of this remains a mystery
export type DocumentStatusDECLINED = t.Branded<
  DocumentStatus & 'DECLINED',
  DocumentStatusDECLINEDBrand
>;
export type DocumentStatusDECLINEDC = t.BrandC<
  t.IntersectionC<[typeof DocumentStatus, t.LiteralC<'DECLINED'>]>,
  DocumentStatusDECLINEDBrand
>;
export const DocumentStatusDECLINED: DocumentStatusDECLINEDC = t.brand(
  t.intersection([DocumentStatus, t.literal('DECLINED')]),
  (x): x is t.Branded<DocumentStatus & 'DECLINED', DocumentStatusDECLINEDBrand> => true,
  'DocumentStatusDECLINED',
);
export interface DocumentStatusDECLINEDBrand {
  readonly DocumentStatusDECLINED: unique symbol;
}
/** require('io-ts-validator').validator(DocumentStatusDECLINED).decodeSync(defaultDocumentStatusDECLINED) // => defaultDocumentStatusDECLINED */
export const defaultDocumentStatusDECLINED: DocumentStatusDECLINED = ('DECLINED' as unknown) as DocumentStatusDECLINED;

// DocumentStatusEXPIRED
// The purpose of this remains a mystery
export type DocumentStatusEXPIRED = t.Branded<
  DocumentStatus & 'EXPIRED',
  DocumentStatusEXPIREDBrand
>;
export type DocumentStatusEXPIREDC = t.BrandC<
  t.IntersectionC<[typeof DocumentStatus, t.LiteralC<'EXPIRED'>]>,
  DocumentStatusEXPIREDBrand
>;
export const DocumentStatusEXPIRED: DocumentStatusEXPIREDC = t.brand(
  t.intersection([DocumentStatus, t.literal('EXPIRED')]),
  (x): x is t.Branded<DocumentStatus & 'EXPIRED', DocumentStatusEXPIREDBrand> => true,
  'DocumentStatusEXPIRED',
);
export interface DocumentStatusEXPIREDBrand {
  readonly DocumentStatusEXPIRED: unique symbol;
}
/** require('io-ts-validator').validator(DocumentStatusEXPIRED).decodeSync(defaultDocumentStatusEXPIRED) // => defaultDocumentStatusEXPIRED */
export const defaultDocumentStatusEXPIRED: DocumentStatusEXPIRED = ('EXPIRED' as unknown) as DocumentStatusEXPIRED;

// DocumentStatusRESUBMISSION_REQUESTED
// The purpose of this remains a mystery
export type DocumentStatusRESUBMISSION_REQUESTED = t.Branded<
  DocumentStatus & 'RESUBMISSION_REQUESTED',
  DocumentStatusRESUBMISSION_REQUESTEDBrand
>;
export type DocumentStatusRESUBMISSION_REQUESTEDC = t.BrandC<
  t.IntersectionC<[typeof DocumentStatus, t.LiteralC<'RESUBMISSION_REQUESTED'>]>,
  DocumentStatusRESUBMISSION_REQUESTEDBrand
>;
export const DocumentStatusRESUBMISSION_REQUESTED: DocumentStatusRESUBMISSION_REQUESTEDC = t.brand(
  t.intersection([DocumentStatus, t.literal('RESUBMISSION_REQUESTED')]),
  (
    x,
  ): x is t.Branded<
    DocumentStatus & 'RESUBMISSION_REQUESTED',
    DocumentStatusRESUBMISSION_REQUESTEDBrand
  > => true,
  'DocumentStatusRESUBMISSION_REQUESTED',
);
export interface DocumentStatusRESUBMISSION_REQUESTEDBrand {
  readonly DocumentStatusRESUBMISSION_REQUESTED: unique symbol;
}
/** require('io-ts-validator').validator(DocumentStatusRESUBMISSION_REQUESTED).decodeSync(defaultDocumentStatusRESUBMISSION_REQUESTED) // => defaultDocumentStatusRESUBMISSION_REQUESTED */
export const defaultDocumentStatusRESUBMISSION_REQUESTED: DocumentStatusRESUBMISSION_REQUESTED = ('RESUBMISSION_REQUESTED' as unknown) as DocumentStatusRESUBMISSION_REQUESTED;

// DocumentStatusABANDONED
// The purpose of this remains a mystery
export type DocumentStatusABANDONED = t.Branded<
  DocumentStatus & 'ABANDONED',
  DocumentStatusABANDONEDBrand
>;
export type DocumentStatusABANDONEDC = t.BrandC<
  t.IntersectionC<[typeof DocumentStatus, t.LiteralC<'ABANDONED'>]>,
  DocumentStatusABANDONEDBrand
>;
export const DocumentStatusABANDONED: DocumentStatusABANDONEDC = t.brand(
  t.intersection([DocumentStatus, t.literal('ABANDONED')]),
  (x): x is t.Branded<DocumentStatus & 'ABANDONED', DocumentStatusABANDONEDBrand> => true,
  'DocumentStatusABANDONED',
);
export interface DocumentStatusABANDONEDBrand {
  readonly DocumentStatusABANDONED: unique symbol;
}
/** require('io-ts-validator').validator(DocumentStatusABANDONED).decodeSync(defaultDocumentStatusABANDONED) // => defaultDocumentStatusABANDONED */
export const defaultDocumentStatusABANDONED: DocumentStatusABANDONED = ('ABANDONED' as unknown) as DocumentStatusABANDONED;

// ValidFrom
// The purpose of this remains a mystery
export type ValidFrom = t.Branded<Units_.IsoDate, ValidFromBrand>;
export type ValidFromC = t.BrandC<typeof Units_.IsoDate, ValidFromBrand>;
export const ValidFrom: ValidFromC = t.brand(
  Units_.IsoDate,
  (x): x is t.Branded<Units_.IsoDate, ValidFromBrand> => true,
  'ValidFrom',
);
export interface ValidFromBrand {
  readonly ValidFrom: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(ValidFrom)).decodeSync(examplesValidFrom) // => examplesValidFrom */
export const examplesValidFrom: NonEmptyArray<ValidFrom> = ([
  '2020-01-01',
] as unknown) as NonEmptyArray<ValidFrom>;

// ValidTo
// The purpose of this remains a mystery
export type ValidTo = t.Branded<Units_.IsoDate, ValidToBrand>;
export type ValidToC = t.BrandC<typeof Units_.IsoDate, ValidToBrand>;
export const ValidTo: ValidToC = t.brand(
  Units_.IsoDate,
  (x): x is t.Branded<Units_.IsoDate, ValidToBrand> => true,
  'ValidTo',
);
export interface ValidToBrand {
  readonly ValidTo: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(ValidTo)).decodeSync(examplesValidTo) // => examplesValidTo */
export const examplesValidTo: NonEmptyArray<ValidTo> = ([
  '2030-12-31',
] as unknown) as NonEmptyArray<ValidTo>;

// Category
// The purpose of this remains a mystery
export type Category = t.Branded<string | Null, CategoryBrand>;
export type CategoryC = t.BrandC<t.UnionC<[t.StringC, typeof Null]>, CategoryBrand>;
export const Category: CategoryC = t.brand(
  t.union([t.string, Null]),
  (x): x is t.Branded<string | Null, CategoryBrand> => true,
  'Category',
);
export interface CategoryBrand {
  readonly Category: unique symbol;
}

// Details
// The purpose of this remains a mystery
export type Details = t.Branded<Record<string, unknown>, DetailsBrand>;
export type DetailsC = t.BrandC<t.UnknownRecordC, DetailsBrand>;
export const Details: DetailsC = t.brand(
  t.UnknownRecord,
  (x): x is t.Branded<Record<string, unknown>, DetailsBrand> => true,
  'Details',
);
export interface DetailsBrand {
  readonly Details: unique symbol;
}

// MediaItemContent
// The purpose of this remains a mystery
export type MediaItemContent = t.Branded<string, MediaItemContentBrand>;
export type MediaItemContentC = t.BrandC<t.StringC, MediaItemContentBrand>;
export const MediaItemContent: MediaItemContentC = t.brand(
  t.string,
  (x): x is t.Branded<string, MediaItemContentBrand> => true,
  'MediaItemContent',
);
export interface MediaItemContentBrand {
  readonly MediaItemContent: unique symbol;
}

// MediaItemContext
// The purpose of this remains a mystery
export type MediaItemContext = t.Branded<string, MediaItemContextBrand>;
export type MediaItemContextC = t.BrandC<t.StringC, MediaItemContextBrand>;
export const MediaItemContext: MediaItemContextC = t.brand(
  t.string,
  (x): x is t.Branded<string, MediaItemContextBrand> => true,
  'MediaItemContext',
);
export interface MediaItemContextBrand {
  readonly MediaItemContext: unique symbol;
}

// MediaItem
// The purpose of this remains a mystery
export type MediaItem = t.Branded<
  {
    content?: MediaItemContent;
    context?: MediaItemContext;
  } & {
    content: Defined;
    context: Defined;
  },
  MediaItemBrand
>;
export type MediaItemC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        content: typeof MediaItemContent;
        context: typeof MediaItemContext;
      }>,
      t.TypeC<{
        content: typeof Defined;
        context: typeof Defined;
      }>,
    ]
  >,
  MediaItemBrand
>;
export const MediaItem: MediaItemC = t.brand(
  t.intersection([
    t.partial({
      content: MediaItemContent,
      context: MediaItemContext,
    }),
    t.type({
      content: Defined,
      context: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      content?: MediaItemContent;
      context?: MediaItemContext;
    } & {
      content: Defined;
      context: Defined;
    },
    MediaItemBrand
  > => true,
  'MediaItem',
);
export interface MediaItemBrand {
  readonly MediaItem: unique symbol;
}

// Media
// Media documents related to user personal document.
export type Media = t.Branded<Array<MediaItem>, MediaBrand>;
export type MediaC = t.BrandC<t.ArrayC<typeof MediaItem>, MediaBrand>;
export const Media: MediaC = t.brand(
  t.array(MediaItem),
  (x): x is t.Branded<Array<MediaItem>, MediaBrand> => true,
  'Media',
);
export interface MediaBrand {
  readonly Media: unique symbol;
}

// KycServiceId
// Id of kyc service used
export type KycServiceId = t.Branded<string, KycServiceIdBrand>;
export type KycServiceIdC = t.BrandC<t.StringC, KycServiceIdBrand>;
export const KycServiceId: KycServiceIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, KycServiceIdBrand> =>
    typeof x !== 'string' || x.length >= 2,
  'KycServiceId',
);
export interface KycServiceIdBrand {
  readonly KycServiceId: unique symbol;
}

// FirstName
// The purpose of this remains a mystery
export type FirstName = t.Branded<Common_.PersonalName, FirstNameBrand>;
export type FirstNameC = t.BrandC<typeof Common_.PersonalName, FirstNameBrand>;
export const FirstName: FirstNameC = t.brand(
  Common_.PersonalName,
  (x): x is t.Branded<Common_.PersonalName, FirstNameBrand> => true,
  'FirstName',
);
export interface FirstNameBrand {
  readonly FirstName: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(FirstName)).decodeSync(examplesFirstName) // => examplesFirstName */
export const examplesFirstName: NonEmptyArray<FirstName> = ([
  'Tea',
] as unknown) as NonEmptyArray<FirstName>;

// LastName
// The purpose of this remains a mystery
export type LastName = t.Branded<Common_.PersonalName, LastNameBrand>;
export type LastNameC = t.BrandC<typeof Common_.PersonalName, LastNameBrand>;
export const LastName: LastNameC = t.brand(
  Common_.PersonalName,
  (x): x is t.Branded<Common_.PersonalName, LastNameBrand> => true,
  'LastName',
);
export interface LastNameBrand {
  readonly LastName: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(LastName)).decodeSync(examplesLastName) // => examplesLastName */
export const examplesLastName: NonEmptyArray<LastName> = ([
  'Snowman',
] as unknown) as NonEmptyArray<LastName>;

// PartyId
// The purpose of this remains a mystery
export type PartyId = t.Branded<string, PartyIdBrand>;
export type PartyIdC = t.BrandC<t.StringC, PartyIdBrand>;
export const PartyId: PartyIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, PartyIdBrand> =>
    (typeof x !== 'string' || x.length >= 1) && (typeof x !== 'string' || x.length <= 64),
  'PartyId',
);
export interface PartyIdBrand {
  readonly PartyId: unique symbol;
}

// PartyType
// The purpose of this remains a mystery
export type PartyType = t.Branded<string, PartyTypeBrand>;
export type PartyTypeC = t.BrandC<t.StringC, PartyTypeBrand>;
export const PartyType: PartyTypeC = t.brand(
  t.string,
  (x): x is t.Branded<string, PartyTypeBrand> =>
    (typeof x !== 'string' || x.length >= 1) && (typeof x !== 'string' || x.length <= 64),
  'PartyType',
);
export interface PartyTypeBrand {
  readonly PartyType: unique symbol;
}

// PersonalDocument
// The default export. More information at the top.
export type PersonalDocument = t.Branded<
  {
    id?: DocumentId;
    identityId?: Units_.IdentityId;
    type?: DocumentType;
    documentNumber?: DocumentNumber;
    category?: Category;
    issuingCountry?: IssuingCountry;
    status?: DocumentStatus;
    validFrom?: ValidFrom;
    validTo?: ValidTo;
    details?: Details;
    media?: Media;
    kycServiceId?: KycServiceId;
    firstName?: FirstName | Null;
    lastName?: LastName | Null;
  } & {
    type: Defined;
    documentNumber: Defined;
    issuingCountry: Defined;
    status: Defined;
    validFrom: Defined;
    validTo: Defined;
  },
  PersonalDocumentBrand
>;
export type PersonalDocumentC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: typeof DocumentId;
        identityId: typeof Units_.IdentityId;
        type: typeof DocumentType;
        documentNumber: typeof DocumentNumber;
        category: typeof Category;
        issuingCountry: typeof IssuingCountry;
        status: typeof DocumentStatus;
        validFrom: typeof ValidFrom;
        validTo: typeof ValidTo;
        details: typeof Details;
        media: typeof Media;
        kycServiceId: typeof KycServiceId;
        firstName: t.UnionC<[typeof FirstName, typeof Null]>;
        lastName: t.UnionC<[typeof LastName, typeof Null]>;
      }>,
      t.TypeC<{
        type: typeof Defined;
        documentNumber: typeof Defined;
        issuingCountry: typeof Defined;
        status: typeof Defined;
        validFrom: typeof Defined;
        validTo: typeof Defined;
      }>,
    ]
  >,
  PersonalDocumentBrand
>;
export const PersonalDocument: PersonalDocumentC = t.brand(
  t.intersection([
    t.partial({
      id: DocumentId,
      identityId: Units_.IdentityId,
      type: DocumentType,
      documentNumber: DocumentNumber,
      category: Category,
      issuingCountry: IssuingCountry,
      status: DocumentStatus,
      validFrom: ValidFrom,
      validTo: ValidTo,
      details: Details,
      media: Media,
      kycServiceId: KycServiceId,
      firstName: t.union([FirstName, Null]),
      lastName: t.union([LastName, Null]),
    }),
    t.type({
      type: Defined,
      documentNumber: Defined,
      issuingCountry: Defined,
      status: Defined,
      validFrom: Defined,
      validTo: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: DocumentId;
      identityId?: Units_.IdentityId;
      type?: DocumentType;
      documentNumber?: DocumentNumber;
      category?: Category;
      issuingCountry?: IssuingCountry;
      status?: DocumentStatus;
      validFrom?: ValidFrom;
      validTo?: ValidTo;
      details?: Details;
      media?: Media;
      kycServiceId?: KycServiceId;
      firstName?: FirstName | Null;
      lastName?: LastName | Null;
    } & {
      type: Defined;
      documentNumber: Defined;
      issuingCountry: Defined;
      status: Defined;
      validFrom: Defined;
      validTo: Defined;
    },
    PersonalDocumentBrand
  > => true,
  'PersonalDocument',
);
export interface PersonalDocumentBrand {
  readonly PersonalDocument: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(PersonalDocument)).decodeSync(examplesPersonalDocument) // => examplesPersonalDocument */
export const examplesPersonalDocument: NonEmptyArray<PersonalDocument> = ([
  {
    identityId: '44ae30b6-eebc-4c00-9e46-704554c2a8a0',
    type: 'DRIVERS_LICENSE',
    documentNumber: '123456789012',
    category: 'ordinary',
    issuingCountry: 'CX',
    status: 'APPROVED',
    validFrom: '2020-01-01',
    validTo: '2030-12-31',
    stateLog: [
      { status: 'PENDING', timestamp: 1609845548067 },
      { status: 'APPROVED', timestamp: 1609945548067 },
    ],
    created: '2020-01-04T12:34:50.123456+00:00',
    modified: '2020-01-05T12:34:50.123456+00:00',
    id: '932116e4-94cf-41cd-a62b-82d5f2730586',
    firstName: 'Tea',
    lastName: 'Snowman',
  },
] as unknown) as NonEmptyArray<PersonalDocument>;

export default PersonalDocument;

// Success
