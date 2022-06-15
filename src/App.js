import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css"

class App extends React.Component {

    // constructor() {
    //     this.state = {
    //         lastHeight
    //     }
    // }

    componentDidMount() {
        let observer = new IntersectionObserver((entry) => {
            entry.forEach(change => {
                if(!change.isIntersecting) {
                    document.getElementById("header").style.display = "flex";
                    setTimeout(() => {
                        document.getElementById("header").classList.add('header-show')
                    }, 10)
                } else {
                    document.getElementById("header").classList.remove('header-show')
                    setTimeout(() => {
                        document.getElementById("header").style.display = "none";
                    }, 300)
                }
            })
        }, {threshold: [0.5]});
        observer.observe(document.getElementById("title-navigation"))
        new IntersectionObserver((entry) => {
            entry.forEach(change => {
                if(change.isIntersecting) {
                    document.getElementById("what-is-yumi").style.marginLeft = "50px";
                } else {
                    document.getElementById("what-is-yumi").style.marginLeft = "-50%";
                }
            })
        }).observe(document.getElementById("what-is-yumi"))
        new IntersectionObserver((entry) => {
            entry.forEach(change => {
                if(change.isIntersecting) {
                    document.getElementById("yumi-description").style.opacity = "1";
                } else {
                    document.getElementById("yumi-description").style.opacity = "0";
                }
            })
        }).observe(document.getElementById("yumi-description"))
        new IntersectionObserver((entry) => {
            entry.forEach(change => {
                if(change.isIntersecting) {
                    document.getElementById("projects-title").style.opacity = "1";
                } else {
                    document.getElementById("projects-title").style.opacity = "0";
                }
            })
        }).observe(document.getElementById("projects-title"))
        new IntersectionObserver((entry) => {
            entry.forEach(change => {
                if(change.isIntersecting) {
                    document.getElementById("projects-text").style.opacity = "1";
                } else {
                    document.getElementById("projects-text").style.opacity = "0";
                }
            })
        }).observe(document.getElementById("projects-text"))
        window.onscroll = () => {
            if(window.scrollY < window.innerHeight/3) {
                document.getElementById("title").style.transform = `scale(${(100-scrollY)/100})`
            }
        }
    }

    render() {
        return (
            <div>
                <div id={"header"}>
                    <Link
                        to={"title-page"}
                        spy={false}
                        smooth={true}
                        duration={500}
                        id={"logo-href"}
                        >
                        <img src={"/materials/logo.png"} alt={"Yumi"}/>
                    </Link>
                    <div className={"navigation"}>
                        <Link
                            to={"info"}
                            spy={false}
                            smooth={true}
                            duration={500}
                            offset={-50}
                        >О нас</Link>
                        <Link
                            to={"projects"}
                            spy={false}
                            smooth={true}
                            duration={500}
                        >Проекты</Link>
                        <Link
                            to={"contact"}
                            spy={false}
                            smooth={true}
                            duration={500}
                        >Контакты</Link>
                    </div>
                </div>
                <div className={"content-wrapper"}>
                    <div id={"title-page"} className={"content-page"}>
                        <div id={"title"}>
                            юми<svg style={{marginBottom: "0.25px"}} version="1.1" xmlns="http://www.w3.org/2000/svg" width={"15px"} height={"15px"}>
                            <linearGradient id={"yumi-gradient"} x1={"0"} x2={"1"} y1={"0"} y2={"1"}>
                                <stop offset={"0%"} stopColor={"#ce4ae6"}/>
                                <stop offset={"50%"} stopColor={"#e589f2"}/>
                                <stop offset={"100%"} stopColor={"#ffffff"}/>
                            </linearGradient>
                            <circle fill={"url(#yumi-gradient"} id={"circle"} cx="7.5" cy={"7.5"} r={"7.5"}/>
                        </svg>
                        </div>
                        <div id={"title-navigation"} className={"navigation"}>
                            <Link
                                to={"info"}
                                spy={false}
                                smooth={true}
                                duration={500}
                                offset={-50}
                                >О нас</Link>
                            <Link
                                to={"projects"}
                                spy={false}
                                smooth={true}
                                duration={500}
                            >Проекты</Link>
                            <Link
                                to={"contact"}
                                spy={false}
                                smooth={true}
                                duration={500}
                            >Контакты</Link>
                        </div>
                    </div>
                    <div id={"info"} className={"content-page"}>
                        <div id={"info-text"}>
                            <div id={"what-is-yumi"}>
                                Кто мы?
                            </div>
                            <div id={"yumi-description"}>
                                Команда любителей,<br/>
                                состоящая из разносторонних людей.<br/>
                                Мы не останавливаемся на чём-то одном,<br/>
                                а пробуем много всего разного.<br/>
                                А еще очень любим чай и котиков.
                            </div>
                        </div>
                        <div id={"info-logo"}>
                            <img src={"/materials/mockup.png"} alt={"Юми"}/>
                        </div>
                    </div>
                    <div id={"projects"} className={"content-page"}>
                        <div>
                            <div id={"projects-title"}>
                                Наши проекты
                            </div>
                            <div id={"projects-text"}>
                                На данный момент у нас<br/>
                                только этот сайт, но когда-то здесь<br/>
                                будет что-то большое!
                            </div>
                        </div>
                        <div id={"tbc"}>
                            <img src={"/materials/mac.png"} alt={"мяу"}/>
                        </div>
                    </div>
                    <div id={"contact"} className={"content-page"}>
                        <div id={"contact-title"}>Связаться с нами</div>
                        <div id={"contacts"}>
                            <div>
                                <div id={"contact-vk"}>
                                    <a href={"https://vk.com/yumi_team"}><img src={"/materials/vk.png"} alt={"ВКонтакте"}/></a>
                                    <a href={"https://vk.com/yumi_team"}><span style={{
                                        color: "#0077FF"
                                    }}>vk.com/</span>yumi_team</a>
                                </div>
                            </div>
                            <div>
                                <div id={"contact-mail"}>

                                    <a href={"mailto:contact@yumi-team.ru"}><img src={"/materials/mail.png"} alt={"ВКонтакте"}/></a>
                                    <a href={"mailto:contact@yumi-team.ru"}>contact@yumi-team.ru</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;