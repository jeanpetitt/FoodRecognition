import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import CameraView from "./screens/Camera";
import Test from "./screens/Test";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          //options={{ title: 'Here is home' }}
        />
        
        <Stack.Screen name="camera" component={CameraView} />
        <Stack.Screen name="test" component={Test} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
