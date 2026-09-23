import { Redirect, Tabs } from "expo-router";



export default function DashLayout(){
    const logado = false;
    if(!logado) return <Redirect href={"/login"} />
    return <Tabs />
}