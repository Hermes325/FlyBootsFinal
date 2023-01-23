import * as React from 'react';


export default function Main() {
    return (<section id="main">
    <div className="flex_main">
        <div>
            <h1 style={{ paddingTop: "6vw" }} className="h1_transfer">
                Fly <br /> Boots
            </h1>
        </div>
    
        <div className="krugmain flex_center">
            <img src="../images/FBlogo.svg" alt="FBlogo" className="Logotip" />
        </div>
    
    
        <div className="praviy_text_flex">
            <p className="jost400 praviy_text">Congue arcu aliquam amet sapien, sollicitudin egestas.
                Sed volutpat tristique bibendum senectus consectetur sagittis, at.
            </p>
            <div id="Рамка_узнать_подробнее" className=" more_media flex_end_end">
                <div className="ramochka2">
                    <div className="ramochka1 grid_ramochka">
                        <div className="flex_colomn">
                            <div className="flex_space-evenly"
                                style={{ justifyContent: "space-around", gap: "45px", paddingTop: "15px" }}>
                                <p className="jost400_4" style={{ width: "15vw" }}>Узнайте о нас поподробнее</p>
    
                                <img src="../images/globus.svg" alt="globus" className="globus" />
    
                            </div>
    
                            <p className="jost400_2" style={{ paddingLeft: "2.5vw", marginTop: "1vw", width: "27vw" }}>
                                Congue arcu aliquam amet sapien, <br /> sollicitudin egestas.
                                Sed volutpat tristique bibendum senectus consectetur sagittis, at.
                            </p>
                        </div>
    
                        <div className="flex_soc">
                            <a href="https://www.avito.ru/" className="avito">
                                Авито
                                <img src="../images/avito.svg" alt="avito_icon" />
                            </a>
    
                            <a href="https://www.vk.ru/" className="vk">
                                <img src="../images/vk.svg" alt="vk_icon" />
                            </a>
    
                            <a href="https://www.tg.ru/">
                                <div className="tg">
                                    <img src="../images/tg.svg" alt="tg_icon" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img src="../public/images/shnurki2.svg" alt="shnurki2" style={{ display: "none" }} />
    <img src="../images/Subtract.png" alt="shnurki1" className="shnurki1" />
    
    <div className="flex_end_end golubi" style={{ transform: "translate(-25vw, -10vw)" }}>
        <img src="../images/golub1.svg" alt="golub1" />
        <img src="../images/golub2.svg" alt="golub2" className="golub2" />
    </div>
    
    <div className="more_media">
        <div className="krug1"></div>
        <div className="krug2"></div>
        <div className="krug3"></div>
        <div className="krug4"></div>
    </div>
    </section>)
}

