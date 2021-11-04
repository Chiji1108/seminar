import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Movie
 *
 *
 */
export interface Movie extends SanityDocument {
  _type: "movie";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Overview — `blockContent`
   *
   *
   */
  overview?: BlockContent;

  /**
   * Release date — `datetime`
   *
   *
   */
  releaseDate?: string;

  /**
   * External ID — `number`
   *
   *
   */
  externalId?: number;

  /**
   * Popularity — `number`
   *
   *
   */
  popularity?: number;

  /**
   * Poster Image — `image`
   *
   *
   */
  poster?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Cast Members — `array`
   *
   *
   */
  castMembers?: Array<SanityKeyed<CastMember>>;

  /**
   * Crew Members — `array`
   *
   *
   */
  crewMembers?: Array<SanityKeyed<CrewMember>>;
}

/**
 * Person
 *
 *
 */
export interface Person extends SanityDocument {
  _type: "person";

  /**
   * Name — `string`
   *
   * Please use "Firstname Lastname" format
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Screening
 *
 *
 */
export interface Screening extends SanityDocument {
  _type: "screening";

  /**
   * Title — `string`
   *
   * E.g.: Our first ever screening of Gattaca
   */
  title?: string;

  /**
   * Movie — `reference`
   *
   * Which movie are we screening
   */
  movie?: SanityReference<Movie>;

  /**
   * Published — `boolean`
   *
   * Set to published when this screening should be visible on a front-end
   */
  published?: boolean;

  /**
   * Location — `geopoint`
   *
   * Where will the screening take place?
   */
  location?: SanityGeoPoint;

  /**
   * Starts at — `datetime`
   *
   * When does the screening start?
   */
  beginAt?: string;

  /**
   * Ends at — `datetime`
   *
   * When does the screening end?
   */
  endAt?: string;

  /**
   * Who can come? — `string`
   *
   *
   */
  allowedGuests?: "members" | "friends" | "anyone";

  /**
   * More info at — `url`
   *
   * URL to imdb.com, rottentomatoes.com or some other place with reviews, stats, etc
   */
  infoUrl?: string;

  /**
   * Ticket — `file`
   *
   * PDF for printing a physical ticket
   */
  ticket?: { _type: "file"; asset: SanityReference<any> };
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type PlotSummary = {
  _type: "plotSummary";
  /**
   * Summary — `text`
   *
   *
   */
  summary?: string;

  /**
   * Author — `string`
   *
   *
   */
  author?: string;

  /**
   * Link to author — `url`
   *
   *
   */
  url?: string;
};

export type PlotSummaries = {
  _type: "plotSummaries";
  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Summaries — `array`
   *
   *
   */
  summaries?: Array<SanityKeyed<PlotSummary>>;
};

export type CastMember = {
  _type: "castMember";
  /**
   * Character Name — `string`
   *
   *
   */
  characterName?: string;

  /**
   * Actor — `reference`
   *
   *
   */
  person?: SanityReference<Person>;

  /**
   * External ID — `number`
   *
   *
   */
  externalId?: number;

  /**
   * External Credit ID — `string`
   *
   *
   */
  externalCreditId?: string;
};

export type CrewMember = {
  _type: "crewMember";
  /**
   * Department — `string`
   *
   *
   */
  department?: string;

  /**
   * Job — `string`
   *
   *
   */
  job?: string;

  /**
   * Person — `reference`
   *
   *
   */
  person?: SanityReference<Person>;

  /**
   * External ID — `number`
   *
   *
   */
  externalId?: number;

  /**
   * External Credit ID — `string`
   *
   *
   */
  externalCreditId?: string;
};

export type Documents = Movie | Person | Screening;
