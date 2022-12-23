import React from "react";
import InitiativeCard from './InitiativeCard/InitiativeCard'
import Header from './Header/Header'
import WhoWe from './WhoWe/WhoWe'
import History from './History/History'
import Form from './Form/Form'
import Footer from './Footer/Footer'
const Home = ()=>{
    return <>
    <div><Header/></div>
    <div><WhoWe/></div>
    <div><History/></div>
    <div><InitiativeCard/></div>
    <div><Form/></div>
    <div><Footer/></div>
    </>
}
export default Home