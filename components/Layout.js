import About_us from "./About_us";
import Catalog from './Catalog';
import Header from "./Header";
import Footer from "./Footer";
import Citata from "./Citata";
import Main from './Main';
import Hits from "./Hits";
import HIW from "./HIW";
import * as React from 'react';








export default function Layout({ title }) {
    return (
        <>
            <head>
                <title>{title ? title + ' FlyBoots' : 'FlyBoots'} </title>
            </head>

            <Header></Header>

            <main>

                <Main></Main>

                <Catalog></Catalog>

                <Hits></Hits>

                <Citata></Citata>

                <HIW></HIW>

                <About_us></About_us>

            </main>

            <Footer></Footer>

        </>
    )
}