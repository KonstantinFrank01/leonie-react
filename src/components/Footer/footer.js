import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4">
                <div class="container">
                    <ul class="list-unstyled list-inline text-center">
                        <li class="list-inline-item">
                            <a class="btn-flaoting btn-fb mx-1">
                                <i class="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn-flaoting btn-tw mx-1">
                                <i class="fab fa-twitter" />
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn-flaoting btn-li mx-1">
                                <i class="fab fa-linkedin-in" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer-copyright text-center py-3"> 2019 HTL Leonding: 
                    <a href="http://www.htl-leonding.at/index.php?id=1561">htl-leonding.at</a>
                </div>
            </footer>
        );
    }
}

export default Footer;