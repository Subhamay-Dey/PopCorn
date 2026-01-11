import { View, Text, ImageBackground, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import search from './search'

const TabIcon = ({focused, icon, tab}: {icon: ImageSourcePropType, tab: string, focused: any}) => {

  const props = {icon, tab}

  if (!focused) {

    return (
      <ImageBackground
        source={images.highlight}
        className='flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden'
      >
        <Image source={props.icon} tintColor="#151312" className='size-5'/>
        <Text className='text-secondary text-base font-semibold ml-2'>{props.tab}</Text>
      </ImageBackground>
    )
  }

}

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name='index'
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <TabIcon focused={focused} icon={icons.home} tab='Home'/>
                )
            }}
        />
        <Tabs.Screen
          name='saved'
          options={{
            title: "Saved",
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused} icon={icons.save} tab='Saved'/>
            )
          }}
        />
        <Tabs.Screen
          name='search'
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused} icon={icons.search} tab='Search'/>
            )
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused} icon={icons.person} tab='Profile'/>
            )
          }}
        />
    </Tabs>
  )
}

export default _layout