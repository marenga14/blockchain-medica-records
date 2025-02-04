import React, {Component} from 'react';
import {Header} from "semantic-ui-react";

export default class HeaderComponent extends Component {
    render(){
        return (
            <>
                <div className="ui grid top-24 bg-opacity-5" style={{
                    position: "relative",
                    overflow: "hidden",
                    height: "80vh"
                }}>
                    <div className="sixteen wide column" style={{
                        backgroundImage: `url(/images/hero_bg.jpg)`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100vh',
                        zIndex: -0.1,
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} />
                    <Header style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        backgroundColor: "black",
                        opacity: 0.5,
                        right: 0,
                        left: 0,
                        display: "flex",

                        alignItems: "center",
                        justifyContent: "center",
                        color: 'black',
                        zIndex: 2,
                    }}>
                        <h1 style={{
                            fontWeight: 'bold',
                            padding: "10px",
                            fontSize: '54px',
                            backgroundColor: 'white',
                            border: "1px solid",
                            borderRadius: "5px",
                        }}>Blockchain Integrated EMR System</h1>
                    </Header>
                </div>
            </>
        );
    }
};
