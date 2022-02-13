import React from "react";
import trophy from "../images/trop.jpg";
class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <div
                        style={{
                            backgroundImage: `url(${trophy})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            maxWidth: "100%",
                            height: "525px",
                        }}
                    >
                        <h2 style={{ marginLeft: "1%" }}>
                            Awards & Achievement
                        </h2>

                        <ul style={{ marginTop: "10%" }}>
                            <li style={{ marginTop: "20px" }}>
                                <h5>
                                    Excellence Award By The Quality Circle Forum
                                    Of India (QCFI)
                                </h5>
                            </li>
                            <li style={{ marginTop: "20px" }}>
                                <h5>
                                    Corporate Citizen Award 2016 by Indian Drug
                                    Manufacturers Association
                                </h5>
                            </li>
                            <li style={{ marginTop: "20px" }}>
                                <h5>
                                    The Prestigiuos Annual Innovator Award From
                                    BioNJ, New Jersey
                                </h5>
                            </li>
                            <li style={{ marginTop: "20px" }}>
                                <h5>
                                    Cardinal Supply Chain Excellence Award For
                                    2015
                                </h5>
                            </li>
                        </ul>
                    </div>
                    <h4
                        style={{
                            padding: " 20px  0px",
                            backgroundColor: "rgb(227, 242, 253)",
                        }}
                    >
                        Contact Us
                    </h4>
                    <div
                        style={{
                            maxWidth: "75%",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div className="office">
                            <h5>Head Office</h5>
                            <p>
                                XYZ Pharma Limited <br></br>
                                Embassy Tower<br></br>
                                M.G Road, Bengaluru - 560002<br></br>
                                Phone: +91 &nbsp; 9876543210<br></br>
                                Fax: +91 &nbsp; 9123456780<br></br>
                                contact@xyzpharma.com<br></br>
                            </p>
                        </div>

                        <div className="business">
                            <h5>Business Hour</h5>
                            <p>
                                We operate 24 * 7<br></br>
                                From 8.00 a.m. To 8.00 p.m.<br></br>
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;
