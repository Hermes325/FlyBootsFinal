import * as React from 'react';




export default function Catalog() {
    return (<section id="catalog" className="catalog_media" style={{ transform: "translateY(-7vw)" }}>
        <h1 className="Montserrat700 flex_center">
            Каталог
        </h1>
        <div className="catalog_text_media">
            <p className="Roboto400 flex_center" style={{ marginTop: "2vw" }}>
                Congue arcu aliquam amet sapien, sollicitudin egestas.
                Sed volutpat tristique bibendum senectus consectetur sagittis, at.
                Euismod <br /> praesent viverra rutrum eget tellus dignissim habitant mauris elit.
                Integer fringilla purus faucibus at viverra erat id.
            </p>
        </div>

        <div className="container">
            <a href="./Snikers" className="ramochka_child">
                <div className="btn">
                    Кроссовки
                    <img src="../images/Vector.svg" alt="купить" />
                </div>
            </a>

            <a href="./Snikers" className="ramochka_man">
                <div className="btn">
                    Одежда
                    <img src="../images/Vector.svg" alt="купить" />
                </div>
            </a>

            <a href="./Accessories" className="ramochka_woman">
                <div className="btn">
                    Аксессуары
                    <img src="../images/Vector.svg" alt="купить" />
                </div>
            </a>
        </div>


        <p className="Roboto400 flex_center" style={{ marginTop: "2vw" }}>Congue arcu aliquam amet sapien, sollicitudin
            egestas.
            Sed volutpat tristique bibendum senectus consectetur sagittis, at.
            Euismod < br /> praesent viverra rutrum eget tellus dignissim habitant mauris elit.
            Integer fringilla purus faucibus at viverra erat id.
        </p>

        <div className="flex_center" id="Каталог" style={{ paddingTop: "10vw" }}>
            <a href={`/catalog}`} className="zakazat jost500_1 flex_center" style={{ alignItems: "center" }}>Каталог</a>
        </div>

    </section>)
}
