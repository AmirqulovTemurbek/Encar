import React from "react";
import './navbar.scss';
import yapon from "../images/yapon.png";
import qazoq from "../images/qazoq.png";
import baa from "../images/baa.png";
import xitoy from "../images/xitoy.png";


const Home = () =>{
    return(
        <>
            <div className="header">
                <div className="container">
                        <div className="analiz col-6">
                            <h1>Анализируем
                            мировой авто-рынок </h1>
                            <h4>
                            в сравнении в Российским и помогаем выбрать лучший вариант не только по деньгам, но и по срокам.
                            </h4>
                            <ul>
                                <li>
                                    Опыт работы более 30 лет
                                </li>
                                <li>
                                    Помощь с выбором авто и страны покупки
                                </li>
                                <button className="btn">
                                    Получить консультацию
                                </button>
                            </ul>
                        </div>
                        <div className="countries col-6">
                            <div className="row">
                                <div>
                                    <img src={yapon} alt="Yapon" />
                                </div>
                                <div>
                                    <h3>Южная Корея</h3>
                                    <p>Лучшие европейские авто с жирными комплектациями</p>
                                </div>
                            </div>
                            <div className="row">
                                <div>
                                    <img src={qazoq} alt="qazoq" />
                                </div>
                                <div>
                                    <h3>Казахстан</h3>
                                    <p>Только новые авто без пробега</p>
                                </div>
                            </div>
                            <div className="row">
                                <div>
                                    <img src={baa} alt="baa" />
                                </div>
                                <div>
                                    <h3>Арабские Эмираты</h3>
                                    <p>Уникальные авто</p>
                                </div>
                            </div>
                            <div className="row">
                                <div>
                                    <img src={xitoy} alt="xitoy" />
                                </div>
                                <div>
                                    <h3>Китай</h3>
                                    <p>Электрокары и лучший китайский автопром</p>
                                </div>
                            </div>
                        </div>
                </div>                
            </div>
        </>
    )
    
};

export default Home;