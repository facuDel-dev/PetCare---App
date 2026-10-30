import { View, Text } from "react-native";

export default function RecordatoriosScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        🔔 Alimentar a Rocky - 08:00
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        🚶 Pasear a Rocky - 18:00
      </Text>
      <Text style={{ fontSize: 16 }}>💉 Vacuna el 15/11/2026</Text>
    </View>
  );
}
