import { Marker } from 'leaflet';
import { create } from "zustand";


interface MarkersStore {
    markers: { [key: string]: Marker };
    setMarker: (id: string, marker: Marker) => void;
    getMarker: (id: string) => Marker | undefined;
}

export const useMarkersStore = create<MarkersStore>()((set, get) => ({
    markers: {},
    setMarker: (id, marker) => set((state) => ({
        markers: { ...state.markers, [id]: marker }
    })),
    getMarker: (id) => {
        return (get().markers[id]);
    }
}));
