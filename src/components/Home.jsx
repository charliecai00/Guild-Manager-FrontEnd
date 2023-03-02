import React from "react";
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap';


const Home = () => {


    return (
        <div className="body-2">
            <section className="features-table wf-section">
                <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
                    role="banner" className="navbar w-nav">
                    <div className="container-5 w-container">
                        <a href="/#" className="brand w-nav-brand">
                            <Button variant="contained" href="https://guild-manager.herokuapp.com/GuildGuild/Reload">
                                Reload
                            </Button>
                            <img src="https://uploads-ssl.webflow.com/63dd34e66ca34e4b9f4199d7/63dd593001b9b889a46919e0_logo.jpeg"
                                loading="lazy" width="66" alt="" sizes="66px"
                                srcSet="https://uploads-ssl.webflow.com/63dd34e66ca34e4b9f4199d7/63dd593001b9b889a46919e0_logo-p-500.jpeg 500w, https://uploads-ssl.webflow.com/63dd34e66ca34e4b9f4199d7/63dd593001b9b889a46919e0_logo-p-800.jpeg 800w, https://uploads-ssl.webflow.com/63dd34e66ca34e4b9f4199d7/63dd593001b9b889a46919e0_logo.jpeg 900w" /></a>
                        <nav role="navigation" className="w-nav-menu">
                            <Link to="/" aria-current="page" className="nav-link w-nav-link w--current">Home</Link>
                            <Link to="/warfield" className="nav-link-2 w-nav-link">WarField</Link>
                        </nav>
                        <div className="w-nav-button">
                            <div className="w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-6 w-container">
                <div className="w-layout-grid grid-4">
                    <div id="w-node-c920977c-e895-676e-2b6b-0e3c1d08f11c-f94199d8" data-current="Tab 3" data-easing="ease"
                        data-duration-in="300" data-duration-out="100" className="tabs w-tabs">
                        <div className="w-tab-menu"><a href='/#' data-w-tab="Tab 1" className="tab-link-tab-1 w-inline-block w-tab-link">
                            <div>Party1</div>
                        </a><a href='/#' data-w-tab="Tab 2" className="tab-link-tab-2-2 w-inline-block w-tab-link">
                                <div>Party2</div>
                            </a><a href='/#' data-w-tab="Tab 3" className="tab-link-tab-3 w-inline-block w-tab-link w--current">
                                <div>Party3</div>
                            </a></div>
                        <div className="w-tab-content">
                            <div data-w-tab="Tab 1" className="partytab w-tab-pane">
                                <div className="w-layout-grid grid-3">
                                    <p id="w-node-e040523d-c925-c91d-da58-604e1c320bdd-f94199d8" className="paragraph">Hero
                                        descriptions: including health, skills, and belongings.</p>
                                    <div data-hover="false" data-delay="0"
                                        id="w-node-af4b68af-720e-881d-70f7-723b642e25fa-f94199d8" className="w-dropdown">
                                        <div className="dropdown-toggle-2 w-dropdown-toggle">
                                            <div className="icon-3 w-icon-dropdown-toggle"></div>
                                            <div className="text-block-4">HeroName</div>
                                        </div>
                                        <nav className="w-dropdown-list"><a href="/#" className="w-dropdown-link">Link 1</a><a href="/#"
                                            className="w-dropdown-link">Link 2</a><a href="/#" className="w-dropdown-link">Link 3</a>
                                        </nav>
                                    </div><a id="w-node-_3e30ac69-f854-9a76-ae62-da3599c60563-f94199d8" href="/#"
                                        className="button-2 w-button">RECOVER</a><a
                                            id="w-node-_99c3ae5e-abda-6ea8-ba06-0d560d2455c8-f94199d8" href="/#"
                                            className="button-3 w-button">FIRE</a>
                                </div>
                            </div>
                            <div data-w-tab="Tab 2" className="w-tab-pane">
                                <div className="w-layout-grid grid-3">
                                    <p id="w-node-_6ee33b5c-3c48-71ee-deb9-f518a35ec9be-f94199d8" className="paragraph">Hero
                                        descriptions: including health, skills, and belongings.</p>
                                    <div data-hover="false" data-delay="0"
                                        id="w-node-_6ee33b5c-3c48-71ee-deb9-f518a35ec9c0-f94199d8" className="w-dropdown">
                                        <div className="dropdown-toggle-2 w-dropdown-toggle">
                                            <div className="icon-3 w-icon-dropdown-toggle"></div>
                                            <div className="text-block-4">HeroName</div>
                                        </div>
                                        <nav className="w-dropdown-list"><a href="/#" className="w-dropdown-link">Link 1</a><a href="/#"
                                            className="w-dropdown-link">Link 2</a><a href="/#" className="w-dropdown-link">Link 3</a>
                                        </nav>
                                    </div><a id="w-node-_6ee33b5c-3c48-71ee-deb9-f518a35ec9cc-f94199d8" href="/#"
                                        className="button-2 w-button">RECOVER</a><a
                                            id="w-node-_6ee33b5c-3c48-71ee-deb9-f518a35ec9ce-f94199d8" href="/#"
                                            className="button-3 w-button">FIRE</a>
                                </div>
                            </div>
                            <div data-w-tab="Tab 3" className="w-tab-pane w--tab-active">
                                <div className="w-layout-grid grid-3">
                                    <p id="w-node-f464c27a-6657-b7f0-cd55-02163752cc8e-f94199d8" className="paragraph">Hero
                                        descriptions: including health, skills, and belongings.</p>
                                    <div data-hover="false" data-delay="0"
                                        id="w-node-f464c27a-6657-b7f0-cd55-02163752cc90-f94199d8" className="w-dropdown">
                                        <div className="dropdown-toggle-2 w-dropdown-toggle">
                                            <div className="icon-3 w-icon-dropdown-toggle"></div>
                                            <div className="text-block-4">HeroName</div>
                                        </div>
                                        <nav className="w-dropdown-list"><a href="/#" className="w-dropdown-link">Link 1</a><a href="/#"
                                            className="w-dropdown-link">Link 2</a><a href="/#" className="w-dropdown-link">Link 3</a>
                                        </nav>
                                    </div><a id="w-node-f464c27a-6657-b7f0-cd55-02163752cc9c-f94199d8" href="/#"
                                        className="button-2 w-button">RECOVER</a><a
                                            id="w-node-f464c27a-6657-b7f0-cd55-02163752cc9e-f94199d8" href="/#"
                                            className="button-3 w-button">FIRE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-_79f6d300-c96c-fd52-1da5-818921a8b43c-f94199d8" className="div-block">
                        <div className="w-layout-grid grid-6"><img
                            src="https://uploads-ssl.webflow.com/63dd34e66ca34e4b9f4199d7/63deb656371dddf3370e7bf8_coin.png"
                            loading="lazy" width="143" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                            srcSet="https://uploads-ssl.webflow.com/63dd34e66ca34e4b9f4199d7/63deb656371dddf3370e7bf8_coin-p-500.png 500w, https://uploads-ssl.webflow.com/63dd34e66ca34e4b9f4199d7/63deb656371dddf3370e7bf8_coin-p-800.png 800w, https://uploads-ssl.webflow.com/63dd34e66ca34e4b9f4199d7/63deb656371dddf3370e7bf8_coin-p-1080.png 1080w, https://uploads-ssl.webflow.com/63dd34e66ca34e4b9f4199d7/63deb656371dddf3370e7bf8_coin-p-1600.png 1600w"
                            alt="" className="image-3" />
                            <div className="text-block">88888</div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63dd34e66ca34e4b9f4199d7"
                type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                crossOrigin="anonymous"></script>
            <script src="https://uploads-ssl.webflow.com/63dd34e66ca34e4b9f4199d7/js/webflow.942be9691.js"
                type="text/javascript"></script>
        </div>




    );
};


export default Home;