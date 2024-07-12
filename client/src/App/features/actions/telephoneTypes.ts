export type Telephone = {
  code: string,
  countryName: string,
  flag: string
}

export type CountryData = {
  countryCode: Telephone[];
};
