export interface IAddress {
  location: number[];
  googlePlaceId: string;
  kind: string;
  streetNumber: string;
  route: string;
  zipcode: string;
  locality: string;
  county: string;
  state: string;
  stateCode: string;
  formattedAddress: string;
}

export interface IUnit {
  _id: string;
  bedroom: number;
  bathroom: number;
  squareFootage: number;
}

export interface IProperty {
  addressObject: {
    location: {
      coordinates: number[];
    };
    streetNumber: string;
    route: string;
    locality: string;
    county: string;
    stateCode: string;
    formattedAddress: string;
  };
  address: IAddress;
  purchasePrice: number;
  rehabPrice: number;
  images: string[];
  dealType: string;
  squareFootage: number;
  expectedRent: number;
  yearBuilt: number;
  lotSize: number;
  pageviews: number;
  impressions: number;
  status: string;
  skipVerification: boolean;
  interiorFeatures: string[];
  exteriorFeatures: string[];
  _id: string;
  user: string;
  name: string;
  units: IUnit[];
  comps: any[];  // I'm assuming this because it's an empty array in the provided JSON
  createdAt: string;
  updatedAt: string;
  __v: number;
  friendlyUrl: string;
  slackThreadId: string;
  acAge: string;
  description: string;
  emd: null | any; // Specify the possible type if known
  hoa: string;
  hubspotDealId: string;
  hubspotDealOwnerId: string;
  lastPublishedAt: string;
  lastPublishedBy: string;
  plumbing: string;
  pricingStrategy: string;
  propertyType: string;
  roofAge: string;
  dealAlertCreatedAt: string;
}

