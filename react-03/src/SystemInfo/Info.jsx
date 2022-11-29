import React from "react";
import { useState } from 'react'

const Info = () => {
    let [info, setInfo] = useState({
        os: "",
        plat: "",
        browser: {}
    })
    let getInfo = (event) => {
        console.log(event)
        setInfo({ ...info, os: event.view.clientInformation.userAgentData.platform, plat: event.view.clientInformation.platform, browser: event.view.clientInformation.userAgentData.brands[0] })
    }
    return<>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header bg-dark text-white text-center">
                        <h2>Information about the System</h2>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item"><strong>OS Name:</strong>{info.os}</li>
                            <li className="list-group-item"><strong>Platform Name:</strong>{info.plat}</li>
                            <li className="list-group-item"><strong>Browser Name:</strong>{info.browser.brand}</li>
                            <li className="list-group-item"><strong>Browser Version:</strong>{info.browser.version}</li>
                        </ul>
                        <button onClick={getInfo} className="btn btn-success mt-4">Get Info</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Info