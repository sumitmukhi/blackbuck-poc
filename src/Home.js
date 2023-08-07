import React from "react";
import App from "./App";
import "./Home.css";

export const Home = () => {
    return (
        <div className="product">
            <div className="div">
                <div className="overlap-group">
                    <div className="ellipse" />
                    <div className="group">
                        <img className="where-to-vote" alt="Where to vote" src="/static/home/where-to-vote.png" />
                    </div>
                    <div className="humidity-mid-wrapper">
                        <img className="humidity-mid" alt="Humidity mid" src="/static/home/humidity-mid.png" />
                    </div>
                    <div className="monetization-on-wrapper">
                        <img className="monetization-on" alt="Monetization on" src="/static/home/monetization-on.png" />
                    </div>
                    <img className="img" alt="Ellipse" src="/static/home/ellipse-192.svg" />
                    <img
                        className="end-to-end-digital"
                        alt="End to end digital"
                        src="/static/home/end-to-end-digital-solutions-for-the-trucking-ecosystem.png"
                    />
                    <div className="products">PRODUCTS</div>
                    <App />
                    {/* <img className="frame" alt="Frame" src="/static/home/frame-39658.png" /> */}
                </div>
                <div className="assistant-navigation-wrapper">
                    <img className="assistant-navigation" alt="Assistant navigation" src="/static/home/assistant-navigation.png" />
                </div>
                <div className="credit-card-wrapper">
                    <img className="credit-card" alt="Credit card" src="/static/home/credit-card.png" />
                </div>
                <div className="navbar">
                    <div className="text-wrapper">Home</div>
                    <div className="text-wrapper-2">Company</div>
                    <div className="text-wrapper-3">Products</div>
                    <div className="text-wrapper-4">Teams</div>
                    <div className="text-wrapper-5">Life@BlackBuck</div>
                    <div className="blogs-news">Blogs &amp; News</div>
                    <img className="fill" alt="Fill" src="/static/home/fill-1.svg" />
                    <div className="rectangle" />
                </div>
                {/* <img className="bottom-nav" alt="Bottom nav" src="/static/home/bottomnav.png" /> */}
            </div>
        </div>
    );
};

export default Home;