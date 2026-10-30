import { Text, View, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

type TarjetaMascotaProps = {
  nombre: string;
  especie: string;
  raza: string;
};

export default function TarjetaMascota({
  nombre,
  especie,
  raza,
}: TarjetaMascotaProps) {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.detalle}>
          {especie} • {raza}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  nombre: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },

  info: {
    color: colors.text,
    marginTop: 4,
  },

  detalle: {
    fontSize: 14,
    color: colors.text,
  },
});
