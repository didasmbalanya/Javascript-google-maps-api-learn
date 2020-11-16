import { address, name } from "faker";
import { location, Mappable } from "./types";

export class User implements Mappable{
  name: string;
  location: location;

  constructor() {
    this.name = `${name.firstName()} ${name.lastName()}`;
    this.location = { lat: Number(address.latitude()), lng: Number(address.longitude()) };
  }

  markerContent () {
    return `<h3>${this.name}</h3>`
  }

}
