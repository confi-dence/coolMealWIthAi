import { ImageIconPack } from '@/assets/images'
import { Image } from '@/ui/image'
import { Tabs } from 'expo-router'


const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name="Home"  options={{ title: "Home", tabBarIcon: ({focused,color,size})=>  <Image source={ImageIconPack.icon_1} style={{width:size,height:size ,opacity: focused ? 1 : 0.4}}/>  }} />
        <Tabs.Screen name="Explore" options={{ title: "Explore",tabBarIcon: ({focused,color,size})=>  <Image source={ImageIconPack.icon_2} style={{width:size,height:size ,opacity: focused ? 1 : 0.4}}/>  }}/>
        <Tabs.Screen name="Cookbook" options={{ title: "Cookbook",tabBarIcon: ({focused,color,size})=>  <Image source={ImageIconPack.icon_3} style={{width:size,height:size ,opacity: focused ? 1 : 0.4}}/>  }}/>
        <Tabs.Screen name="Profile" options={{ title: "Profile",tabBarIcon: ({focused,color,size})=>  <Image source={ImageIconPack.icon_4} style={{width:size,height:size ,opacity: focused ? 1 : 0.4}}/>  }}/>
    </Tabs>
  )
}

export default TabLayout