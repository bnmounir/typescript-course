export interface Mappable {
    location: { lat: number; lng: number };
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(location: { lat: number; lng: number }, divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 2,
            center: location,
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: mappable.location,
        });

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            infoWindow.open(this.googleMap, marker);
        });
    }
}
