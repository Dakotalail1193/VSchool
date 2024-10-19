import React from "react";
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate()
    
    return(
        <>
        <div class="is-preload">


    <section id="sidebar">
        <div class="inner">
            <nav>
                <ul>
                    <li><a href="#intro">Welcome</a></li>
                    <li><a href="#one">Who I am</a></li>
                    <li><a href="#two">What I Can do</a></li>
                    <li><a href="#three">Get in touch</a></li>
                </ul>
            </nav>
        </div>
    </section>


    <div id="wrapper">

        
            <section id="intro" class="wrapper style1 fullscreen fade-up">
                <div class="inner">
                    <h1>My name is Dakota</h1>
                    <p>After a many winding paths, follow me as I chase my passion of web development. Here is a little about me and a few examples of my projects!</p>
                    <ul class="actions">
                        <li><a href="#one" class="button scrolly">Learn more</a></li>
                    </ul>
                </div>
            </section>

        
            <section id="one" class="wrapper style2 spotlights">
                <section>
                    <a href="#" class="image"><img src="images/pic01.jpg" alt="" data-position="center center" /></a>
                    <div class="content">
                        <div class="inner">
                            <h2>Who I am</h2>
                            <p>An Air Force Veteran, prior criminal investigator, and currently offering insurance solutions, helping in any form is a true passion.</p>	
                        </div>
                        <ul class="actions">
                            <li><a href="#know" class="button scrolly">next</a></li>
                        </ul>
                    </div>
                </section>
                <section id="know">
                    <a href="#" class="image"><img src="images/pic02.jpg" alt="" data-position="top center" /></a>
                    <div class="content">
                        <div class="inner">
                            <h2>What I know</h2>
                            <p>Expansive knowledge in HTML5, CSS3, and JavaScript, specializing in React.js, MongoDB, Node.js and Express.js. With a knack of gaining more knowledge to expand and grow my expertise. </p>							
                        </div>
                        <ul class="actions">
                            <li><a href="#bring" class="button scrolly">next</a></li>
                        </ul>
                    </div>
                </section>
                <section id ="bring">
                    <a href="#" class="image"><img src="images/pic03.jpg" alt="" data-position="25% 25%" /></a>
                    <div class="content">
                        <div class="inner">
                            <h2>What I bring</h2>
                            <p>I strive in keen attention to detail, precise care in my craft, and eager pursuit of new challenges to continue to grow as a developer.</p>
                        </div>
                        <ul class="actions">
                            <li><a href="#two" class="button scrolly">next</a></li>
                        </ul>
                    </div>
                </section>
            </section>

        
            <section id="two" class="wrapper style3 fade-up">
                <div class="inner">
                    <h2>What I can do</h2>
                    <p>While I continue to pursue expansive knowledge in web development, here are a few selections of my current expertise.</p>
                    <div class="features">
                        <section>
                            <span class="icon solid major fa-code"></span>
                            <h3>HTML</h3>
                            <p>Understanding of the core fundamentals of web devlopment with HTML and the ground work and structure of web content.</p>
                        </section>
                        <section>
                            <span class="icon major fa-gem"></span>
                            <h3>CSS</h3>
                            <p>Creating stylized and responsive webpages utlizing Cascading Style Sheets and in-line styling.</p>
                        </section>
                        <section>
                            <span class="icon solid major fa-cog"></span>
                            <h3>JavaScript</h3>
                            <p>Utilizing JavaScript to bring the execution and interactivity to the webpage to bring better user experiences to the webpage.</p>
                        </section>
                        <section>
                            <span class="icon solid major fa-desktop"></span>
                            <h3>Front End Devlopment</h3>
                            <p>Bringing HTML, CSS, and JavaScript all together to the screen specializing in a React based Front End structure.</p>
                        </section>
                        <section>
                            <span class="icon solid major fa-link"></span>
                            <h3>Back End Devopment</h3>
                            <p>Connecting the Front End to the server database using Express, Mongoose, and MongoDB specifically to connect the pieces together.</p>
                        </section>
                        <section>
                            <span class="icon solid major fa-lock "></span>
                            <h3>Authentication</h3>
                            <p>Securing user data with authentication tools and setting up username and password requirements with token encrypting with Bcrypt.</p>
                        </section>
                    </div>
                    <ul class="actions">
                        <li><button onClick={() => navigate ("/Projects")} className="button">See My Work</button></li>
                    </ul>
                </div>
            </section>

        
            <section id="three" class="wrapper style1 fade-up">
                <div class="inner">
                    <h2>Get in touch</h2>
                    <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
                    <div class="split style1">
                        <section>
                            <form method="post" action="#">
                                <div class="fields">
                                    <div class="field half">
                                        <label for="name">Name</label>
                                        <input type="text" name="name" id="name" />
                                    </div>
                                    <div class="field half">
                                        <label for="email">Email</label>
                                        <input type="text" name="email" id="email" />
                                    </div>
                                    <div class="field">
                                        <label for="message">Message</label>
                                        <textarea name="message" id="message" rows="5"></textarea>
                                    </div>
                                </div>
                                <ul class="actions">
                                    <li><a href="" class="button submit">Send Message</a></li>
                                </ul>
                            </form>
                        </section>
                        <section>
                            <ul class="contact">
                                <li>
                                    <h3>Address</h3>
                                    <span>12345 Somewhere Road #654<br />
                                    Nashville, TN 00000-0000<br />
                                    USA</span>
                                </li>
                                <li>
                                    <h3>Email</h3>
                                    <a href="#">user@untitled.tld</a>
                                </li>
                                <li>
                                    <h3>Phone</h3>
                                    <span>(000) 000-0000</span>
                                </li>
                                <li>
                                    <h3>Social</h3>
                                    <ul class="icons">
                                        <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                                        <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                                        <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                                        <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                                        <li><a href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </section>

    </div>


    <footer id="footer" class="wrapper style1-alt">
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

export default Home