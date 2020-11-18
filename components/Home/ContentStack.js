import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Page";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Viewer" component={Home} />
      <Stack.Screen name="Page" component={Home} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
