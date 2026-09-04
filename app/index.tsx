import { Text, View, Image, ScrollView, StyleSheet } from 'react-native'
import MascotaCard from '../src/components/MascotaCard'
import {MisMascotas} from '../src/constants/Mascotas'

export default function Index() {
  
  return (
  <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fdfdfdde', padding: 20 }}>
    <View style={{ padding: 20 }}>
    <Text style={{ fontSize: 27, fontWeight: 'bold', textAlign: 'center',marginBottom: 20 }}>
      <Text style={{color: '#bd803ae5'}}>Pet</Text>
      <Text style={{color: '#1f1f1f'}}>Care</Text>
    </Text>

    <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1' }} 
        style={{ 
          width: "100%", 
          height: 200, 
          borderRadius: 14, 
          alignSelf: 'center',
          marginBottom: 20 
        }} 
        resizeMode="cover"
      />
    
    <View style={{ padding: 10, borderRadius: 5, marginBottom: 15 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold',color: '#333' }}>🐾 ¡Bienvenido!</Text>
    </View>
    
    <Text style={styles.sectionTitle}>Mis Mascotas</Text>
    {MisMascotas.map((mascota) => (
      <MascotaCard
          key={mascota.id}
          nombre={mascota.nombre}
          especie={mascota.especie}
          raza={mascota.raza}
        />
    ))}
  </View>
  </ScrollView>
  )
}


const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
    marginBottom: 10,
  },
});