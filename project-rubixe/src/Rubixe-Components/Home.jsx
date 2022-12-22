import React from "react";
import InitiativeCard from './InitiativeCard/InitiativeCard'
import Header from './Header/Header'
import History from './History/History'
import Form from './Form/Form'
import Footer from './Footer/Footer'
const Home = ()=>{
    return <>
    <div><Header/></div>
    <div><InitiativeCard/></div>
    <div><Form/></div>
    <div><Footer/></div>
    <div><History/></div>
    </>
}
export default Home