import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import MascotaCard from "../components/MascotaCard";
import { useRouter } from "expo-router";
import { useMascotasStore } from "../store/useMascotasStore";

export default function Index() {
  const router = useRouter();
  const mascotas = useMascotasStore((state) => state.mascotas);

  return (
    <View style={styles.mainWrapper}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#fdfdfdde",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 27,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "#bd803ae5" }}>Pet</Text>
          <Text style={{ color: "#1f1f1f" }}>Care</Text>
        </Text>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
          }}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 14,
            alignSelf: "center",
            marginBottom: 20,
          }}
          resizeMode="cover"
        />

        <View style={{ padding: 10, borderRadius: 5, marginBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
            🐾 ¡Bienvenido!
          </Text>
        </View>

        {/*Listado de Mascotas*/}
        <Text style={styles.sectionTitle}>Mis Mascotas</Text>
        {mascotas.map((mascota) => (
          <TouchableOpacity
            key={mascota.id}
            activeOpacity={0.6}
            onPress={() =>
              router.push({
                pathname: "/DetalleMascota",
                params: { id: mascota.id },
              })
            }
          >
            <MascotaCard
              nombre={mascota.nombre}
              especie={mascota.especie}
              raza={mascota.raza}
            />
          </TouchableOpacity>
        ))}

        {/*Boton Agenda de Cuidados*/}
        <View style={{ marginTop: 20, marginBottom: 80 }}>
          <Button
            title="Ver Agenda de Cuidados"
            onPress={() => router.push("/AgendaPantalla")}
          />
        </View>
      </ScrollView>

      {/*Boton flotante Agregar Mascota*/}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={() => router.push("/AgregarMascota")}
      >
        <Text style={styles.fabIcon}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
    marginBottom: 10,
  },

  fab: {
    position: "absolute",
    right: 20,
    bottom: 25,
    backgroundColor: "#bd803a",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
