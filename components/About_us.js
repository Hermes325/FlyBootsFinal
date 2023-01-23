import * as React from 'react';




export default function About_us() {
    return (
        <section id="About_us">

            <div className="flex_end_1">
                <img src="../images/NEW BALANCE MS 327 LY1 - AFEW STORE.png" alt="box/"
                    style={{ width: "25vw", transform: "translate(4vw)", marginTop: "2vw" }} />

                <div className="flex_colomn">
                    <p className="Roboto400 text1" style={{ marginTop: "2vw" }}>
                        Congue arcu aliquam amet sapien, sollicitudin egestas.
                        Sed volutpat tristique bibendum senectus consectetur sagittis, at.
                        Euismod praesent viverra rutrum eget tellus dignissim habitant mauris elit.
                        Integer fringilla purus faucibus at viverra erat id.
                    </p>

                    <p className="Roboto400 text1">
                        Congue arcu aliquam amet sapien, sollicitudin egestas.
                        Sed volutpat tristique bibendum senectus consectetur sagittis, at.
                    </p>

                </div>
                <img src="../images/righthand.svg" alt="righthand" style={{ width: "30vw" }} />
            </div>

            <div className="flex_end_end">
                <p className="Montserrat700_citata flex_end_end"
                    style={{ width: "18vw", fontSize: "2.5vw", marginRight: "8vw", transform: "translate(0vw, -2vw)" }}>
                    Congue arcu aliquam amet
                </p>
            </div>

            <div className="flex_end_1">
                <img src="../images/lefthand.svg" alt="lefthand" style={{
                    width: "24vw "
                }} />

                <div className="flex_colomn">
                    <p className="Roboto400 text">
                        Congue arcu aliquam amet sapien, sollicitudin egestas.
                        Sed volutpat tristique bibendum senectus consectetur sagittis, at.
                        Euismod praesent viverra rutrum eget tellus dignissim habitant mauris elit.
                        Integer fringilla purus faucibus at viverra erat id.
                    </p>

                    <p className="Roboto400 text" style={{ width: "25vw" }}>
                        Congue arcu aliquam amet sapien, sollicitudin egestas.
                        Sed volutpat tristique bibendum senectus consectetur sagittis, at.
                    </p>
                </div>
                <div>
                    <img src="../images/whitenike.png" alt="box" style={{ width: "25vw", transform: "translate(-2vw)" }} />
                </div>
            </div>
        </section>)
}