import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PageHeading from "../../components/PageHeading/PageHeading";
import "./Rozvoz.css"
import Footer from '../../components/Footer/Footer';

export default function Rozvoz() {
  
  return (
    <>
    <NavBar />
    <PageHeading pageH1="Rozvoz"/>
    <ul className='rozvoz-ul'>
      <li>Mladá Boleslav.............. Zdarma!</li>
      <li>Kosmonosy................... Zdarma!</li>
      <li>Bradlec..................... 50Kč</li>
      <li>Bezděčín.................... 30Kč</li>
      <li>Debř........................ 30Kč</li>
      <li>Jemníky..................... 30Kč</li>
      <li>Čejetice.................... 40Kč</li>
      <li>Dalovice.................... 50Kč</li>
      <li>Hrdlořezy................... 50Kč</li>
      <li>Chrást...................... 40Kč</li>
      <li>Chudoplesy.................. 50Kč</li>
      <li>Josefův důl................. 50Kč</li>
      <li>Michalovice................. 50Kč</li>
      <li>Plazy....................... 50Kč</li>
      <li>Podchlumí................... 30Kč</li>
      <li>Podlázky.................... 30Kč</li>
      <li>Řepov....................... 30Kč</li>
      <li>Sahara...................... 20Kč</li>
    </ul>
    <Footer />
    </>
  )
}
