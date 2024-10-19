import React from "react";
import { useNavigate } from "react-router-dom";

function Projects(){

    const navigate = useNavigate()
    
    return(

       
        <>
        <div class="is-preload">


    <header id="header">
        <a href="index.html" class="title">Dakota Lail's Portfolio</a>
        <nav>
            <ul>
                <li><button onClick={() => navigate ("/")} className="button">Home</button></li>
            </ul>
        </nav>
    </header>


    <div id="wrapper">

        
            <section id="main" class="wrapper">
                <div class="inner">
                    <h1 class="major">Examples Of My Work</h1>
                    <span class="image fit"><img src="images/pic04.jpg" alt="" /></span>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
                </div>
            </section>

    </div>


    <footer id="footer" class="wrapper alt">
        <div class="inner">
            <ul class="menu">
                <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>


    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.scrollex.min.js"></script>
    <script src="assets/js/jquery.scrolly.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>

</div>
        </>
    )
}

export default Projects