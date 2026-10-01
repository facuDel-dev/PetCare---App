import { create } from "zustand";
import { MisMascotas, Mascota } from "../constants/Mascotas";

//Se declaran que datos va a guardar la store
interface MascotasStore {
  mascotas: Mascota[];
  agregarMascota: (nuevaMascota: Mascota) => void;
}

export const useMascotasStore = create<MascotasStore>((set) => ({
  //Arranca con los datos estáticos que ya tenías
  mascotas: MisMascotas,

  //Agregar una nueva mascota a la lista
  agregarMascota: (nuevaMascota) =>
    set((state) => ({
      mascotas: [...state.mascotas, nuevaMascota],
    })),
}));
