import * as React from 'react';




export default function About_us() {
    return (<section id="цитата мыслителей" className="flex_end">
        <img src="../images/david.svg" alt="david" className="david" />
        <div className="citata_david">
            <img src="../images/rama_citata.svg" alt="ramka" style={{ width: "40vw" }} />
            <p className="slova_david Montserrat700_citata">Какой-то блок с мотивирующей фразой для покупателя</p>
        </div>

        <div className="citata_cesar">
            <img src="../images/ramka_citata.svg" alt="ramka" style={{ width: "30vw", height: "12vw" }} />
            <p className="slova_cesar Montserrat700_citata">Да-да, точно, с цитатой</p>
        </div>
        <img src="../images/cesar.svg" alt="cesar" className="cesar" />

    </section>)
}


