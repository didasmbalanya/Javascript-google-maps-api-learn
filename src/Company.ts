import { company, address } from "faker";
import { location, Mappable } from "./types";

export class Company implements Mappable {
  location: location;
  companyName: string;
  catchPhrase: string;
  constructor() {
    this.companyName = company.companyName();
    this.location = {
      lat: Number(address.latitude()),
      lng: Number(address.longitude()),
    };
    this.catchPhrase = company.catchPhrase();
  }

  markerContent() {
    return `
    <h3>${this.companyName}</h3>
    <p>${this.catchPhrase}</p>
    `;
  }
}
