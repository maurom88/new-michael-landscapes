import React from 'react'
import ContactLink from './items/ContactLink'

function Header() {
    return (
        <header>
            <img alt="Michael's Landscapes" className="mainlogo" src="images/MichaelsLandscapes_White.png" />

            <nav class="navbar navbar-expand-lg navbar-dark">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto mx-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Galleries
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/gallery">All Categories</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Forests</a>
                                <a class="dropdown-item" href="#">Lakes</a>
                                <a class="dropdown-item" href="#">Mountains</a>
                                <a class="dropdown-item" href="#">Night Skies</a>
                            </div>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/contact_me">Contact me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header