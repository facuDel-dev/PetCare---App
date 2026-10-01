import { Text, View, StyleSheet } from 'react-native';

type TarjetaMascotaProps = {
  nombre: string;
  especie: string;
  raza: string;
};

export default function TarjetaMascota({ nombre, especie, raza }: TarjetaMascotaProps) {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.detalle}>{especie} • {raza}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  info: {
    flexDirection: 'column',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detalle: {
    fontSize: 14,
    color: '#555',
  },
});