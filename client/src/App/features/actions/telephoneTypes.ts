export type Telephone = {
  code: string,
  countryName: string,
  flag: string,
  number: string
}

export type CountryData = {
  countryCode: Telephone[];
};
