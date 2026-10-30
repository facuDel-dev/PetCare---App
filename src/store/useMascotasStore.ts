import { create } from "zustand";
import { MisMascotas, Mascota } from "../constants/Mascotas";

interface MascotasStore {
  mascotas: Mascota[];
  agregarMascota: (nuevaMascota: Mascota) => void;
}

export const useMascotasStore = create<MascotasStore>((set) => ({
  mascotas: MisMascotas,

  //Agregar una nueva mascota a la lista
  agregarMascota: (nuevaMascota) =>
    set((state) => ({
      mascotas: [...state.mascotas, nuevaMascota],
    })),
}));
