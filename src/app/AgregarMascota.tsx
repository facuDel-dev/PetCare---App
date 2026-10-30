import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useMascotasStore } from "../store/useMascotasStore";
import { colors } from "../theme/colors";

export default function AgregarMascota() {
  const router = useRouter();
  const agregarMascota = useMascotasStore((state) => state.agregarMascota);

  const [nombre, setNombre] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [foto, setFoto] = useState("");

  //Verificar que no se admitan valores vacios
  const guardarMascota = () => {
    if (!nombre.trim() || !especie.trim()) {
      alert("Por favor, ingrese al menos el nombre y la especie");
      return;
    }

    const nuevaMascota = {
      id: Date.now().toString(),
      nombre,
      especie,
      raza: raza || "Sin raza especificada",
      foto:
        foto ||
        "https://i0.wp.com/www.canal12misiones.com/wp-content/uploads/2023/12/Mascotas.png?w=600&ssl=1",
    };

    agregarMascota(nuevaMascota);
    router.back();
  };

  return (
    <ScrollView style={[styles.container]}>
      <Text style={[styles.title]}>Registrar Mascota 🐾</Text>

      <Text style={[styles.label]}>Nombre</Text>
      <TextInput
        style={[styles.input]}
        placeholder="Firulais"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={[styles.label]}>Especie</Text>
      <TextInput
        style={[styles.input]}
        placeholder="Perro, Gato, Loro"
        value={especie}
        onChangeText={setEspecie}
      />

      <Text style={[styles.label]}>Raza</Text>
      <TextInput
        style={[styles.input]}
        placeholder="Golden Retriever, Mestizo"
        value={raza}
        onChangeText={setRaza}
      />

      <Text style={[styles.label]}>URL de Foto (opcional)</Text>
      <TextInput style={[styles.input]} value={foto} onChangeText={setFoto} />

      <TouchableOpacity style={styles.button} onPress={guardarMascota}>
        <Text style={styles.buttonText}>Guardar Mascota</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, color: "#333" },
  label: { fontSize: 16, fontWeight: "600", marginBottom: 6, color: "#444" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
