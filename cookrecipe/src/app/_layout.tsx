import { UserContent } from '@/content/UserContent';
import { LogtoProvider, UserScope, type LogtoConfig } from '@logto/rn';
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import { useState } from 'react';
export default function RootLayout() {

const config: LogtoConfig = {
  endpoint: 'https://v7e8rq.logto.app/',
  appId: 'x74kdh1e4nm1izb1kkgqj',
  scopes:[
    UserScope.Email,
    UserScope.Profile
  ]
};
  const [loaded, error] = useFonts({
  'outfit': require("@/assets/fonts/Outfit-Regular.ttf"),
  'outfit-bold': require("@/assets/fonts/Outfit-Bold.ttf"),

});
const [user, setUser] = useState();
  return (
  <LogtoProvider config={config}>
    <UserContent.Provider value={{user,setUser}}>
    <Stack >
      <Stack.Screen name="Landing" options={{ headerShown: false }} />
             <Stack.Screen name="index" options={{ headerShown: false }}/>   
          <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>    
          
    </Stack>
    </UserContent.Provider>
  </LogtoProvider>

  );
}
