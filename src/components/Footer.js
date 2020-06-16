import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer>
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column-1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Info Name</h4>
                            <ul className="list-unstyled">
                                <li>info</li>
                                <li>info</li>
                                <li>info</li>
                                <li>info</li>
                            </ul>
                        </div>
                        {/* Column-2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Info Name</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">info</a></li>
                                <li><a href="/">info</a></li>
                                <li><a href="/">info</a></li>
                                <li><a href="/">info</a></li>
                            </ul>
                        </div>
                        {/* Column-3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Info Name</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">info</a></li>
                                <li><a href="/">info</a></li>
                                <li><a href="/">info</a></li>
                                <li><a href="/">info</a></li>
                            </ul>
                        </div>
                        {/* Column-4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Info Name</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">info</a></li>
                                <li><a href="/">info</a></li>
                                <li><a href="/">info</a></li>
                                <li><a href="/">info</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom" >
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
                    </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background:var(--mainDark);
    padding-top:3rem;
    color:var(--mainWhite)
}
.footer-bottom{
    padding-top:3rem;
    padding-bottom:2rem;
}
ul li a {
    color:var(--mainGray);
}

ul li a:hover {
    color:var(--mainLightGray);
}
`;