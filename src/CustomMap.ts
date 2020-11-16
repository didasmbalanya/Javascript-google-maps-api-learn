import { Mappable } from "./types";

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(mapDiv: string, opts?: google.maps.MapOptions) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDiv)!, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
      ...opts,
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({ content: mappable.markerContent() });
      infoWindow.open(this.googleMap, marker)
    });
  }
}
