import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({
  focused,
  icon,
  tab,
}: {
  icon: any;
  tab: any;
  focused: any;
}) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 16,
          height: 40,
          borderRadius: 999,
          overflow: "hidden",
        }}
      >
        <Image
          source={icon}
          tintColor="#151312"
          style={{ width: 20, height: 20 }}
        />
        <Text
          style={{
            color: "#151312",
            fontSize: 14,
            fontWeight: "600",
            marginLeft: 8,
          }}
        >
          {tab}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={icon}
        tintColor="#A8B5DB"
        style={{ width: 20, height: 20 }}
      />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} tab="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} tab="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} tab="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} tab="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
