import { useRouter } from "expo-router";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MascotaCard from "../../components/MascotaCard";
import { useMascotasStore } from "../../store/useMascotasStore";
import { colors } from "../../theme/colors";

export default function Index() {
  const router = useRouter();
  const mascotas = useMascotasStore((state) => state.mascotas);

  return (
    <View>
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
          <Text style={styles.titulo}>🐾 PetCare</Text>
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
        style={styles.boton}
        activeOpacity={0.8}
        onPress={() => router.push("/AgregarMascota")}
      >
        <Text style={styles.textoBoton}>＋</Text>
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

  boton: {
    position: "absolute",
    backgroundColor: colors.primary,
    padding: 14,
    alignItems: "center",
    marginBottom: 15,
    right: 20,
    bottom: 25,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    elevation: 5,
  },

  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginBottom: 20,
  },
});
