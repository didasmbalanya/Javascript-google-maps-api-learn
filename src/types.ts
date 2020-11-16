export interface location {
  lat: number;
  lng: number;
}

export interface Mappable {
  location: location;
  markerContent(): string;
}
