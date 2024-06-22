import React, { ElementType } from "react";
import { Tabs } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";


const TabsLayout = () => {
  const addIcons = (Icon: ElementType, name: string) => ({
    tabBarIcon: () => <Icon name={name} size={24} color="black" />,
  });

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="movie-roll" size={24} color="black" />
          ),
          title: "Portada",
        }}
      />

      <Tabs.Screen
        name="personajes"
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="person-booth" size={24} color="black" />
          ),
          title: "Personajes",
        }}
      />
      <Tabs.Screen
        name="momentos"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="movie-filter" size={24} color="black" />
          ),
          title: "Momentos",
        }}
      />

      <Tabs.Screen
        name="acerca"
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home-roof" size={24} color="black" />
          ),
          title: "Acerca",
        }}
      />
      <Tabs.Screen 
      name="vida"
        options={{
          tabBarIcon: () => (
            <Ionicons name="happy-outline" size={24} color="black" />
          ),
          title: "Vida",
        }} />
       <Tabs.Screen 
      name="contratame"
        options={{
          tabBarIcon: () => (
            <FontAwesome6 name="hire-a-helper" size={24} color="black" />
          ),
          title: "Contratame",
        }} />
    </Tabs>
  );
};

export default TabsLayout;
