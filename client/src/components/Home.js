import React, { useState, useEffect } from 'react'

const Home = () => {
    const [data, setData] = useState([])
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserName(data.name);

            const resp = await fetch('https://data.covid19india.org/data.json');
            const actualData = await resp.json()
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0])
            setShow(true);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    {/* <h1>{userName}</h1> */}
                    <h2> {show ? <>
                        <h1>LIVE Covid 19 UPDATES 🔴</h1 >

                        <div className="row">
                            <div className="column">
                                <div className="card">
                                    <h3>our counrty</h3>
                                    <p>INDIA</p>

                                </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <h3>recovered</h3>
                                    <p>{data.recovered}</p>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <h3>our counrty</h3>
                                    <p>{data.recovered}</p>
                                </div>
                            </div>

                            <div className="column">
                                <div className="card">
                                    <h3>confirmed</h3>
                                    <p>{data.confirmed}</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <h3>Death</h3>
                                    <p>{data.deaths}</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <h3>Active</h3>
                                    <p>{data.active}</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <h3>Updated</h3>
                                    <p>{data.lastupdatedtime}</p>
                                </div>
                            </div>
                        </div>


                    </> : 'We Are The MERN Developer'}</h2>
                </div>
            </div>

        </>
    )
}

export default Home
