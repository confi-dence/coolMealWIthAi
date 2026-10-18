import { UserContent } from '@/content/UserContent';
import { Image } from '@/ui/image';
import { useContext, useState } from 'react';
import { Switch, Text, View } from 'react-native';

export default function IntroHeader() {
    const {user} = useContext(UserContent);
//  console.log("IntroHeader user:", user); 
const [isEnabled,setIsEnabled] = useState(false);
  return (
    <View style={{flexDirection:"row", alignItems:"center",display:"flex", gap:8, justifyContent:"space-between"}}>
      <View style={{flexDirection:"row", alignItems:"center",display:"flex", gap:8}}>
        <Image source={{ uri: user?.picture }} style={{ width: 45, height: 45, borderRadius: 99 }} />
      <Text style={{ fontFamily: "outfit-bold", fontSize:20 }}>Hello, {user?.name }</Text>
      </View>
      <View style={{flexDirection:"row", alignItems:"center",display:"flex", gap:12}}>
        <Text style={{fontFamily:"outfit", fontSize:16}}>{isEnabled ? "Veg" : "Non-Veg"}</Text>
        <Switch
          value={isEnabled}
          onValueChange={setIsEnabled}
        />
      </View>
    </View>
  )
}