import {Tabs} from 'expo-router';

export default function RootLayout (){
    return <Tabs>
        <Tabs.Screen name= 'home'/>
        <Tabs.Screen name= 'premios'/>
        <Tabs.Screen name= 'modulos'/>
        <Tabs.Screen name= 'scanner'/>
        <Tabs.Screen name= 'perfil'/>
    </Tabs>;
}