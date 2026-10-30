import { Tabs } from "expo-router";
import { Text } from "react-native";
import { colors } from "../../theme/colors";

export default function TabsNavigator() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerShown: false,
          tabBarIcon: () => <Text>🏠</Text>,
        }}
      />
      <Tabs.Screen
        name="AgendaPantalla"
        options={{
          title: "Agenda",
          tabBarIcon: () => <Text>📅</Text>,
        }}
      />
      <Tabs.Screen
        name="Historial"
        options={{
          title: "Historial",
          tabBarIcon: () => <Text>📋</Text>,
        }}
      />
      <Tabs.Screen
        name="Recordatorios"
        options={{
          title: "Recordatorios",
          tabBarIcon: () => <Text>🔔</Text>,
        }}
      />
    </Tabs>
  );
}
