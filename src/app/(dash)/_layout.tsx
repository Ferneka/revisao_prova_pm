import { Redirect, Tabs } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "../utils/authContext";



export default function DashLayout(){

    const auth = useContext(AuthContext);
    if(!auth.isReading) return null
    if(!auth.isLoggedIn) return <Redirect href={"/login"} />
    
    return (<Tabs />)
}