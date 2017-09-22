// LOG IN COMPONENT

'use strict'

Vue.component('side-bar', {
    template: `      
                <div class="sideBarMenu">
 
                    <audio id="audio" loop>

                        <source src="audio/three_little_birds-bob_marley.mp3" type="audio/mp3">

                    </audio>

                    <nav id="navBar" role="navigation">

                      <div id="menuToggle">

                        <input type="checkbox" />


                        <span></span>
                        <span></span>
                        <span></span>


                        <ul id="menu">
                            
                            <li>

                                <i id="menuIcon" class="fa fa-tachometer" aria-hidden="true"></i>

                                <a href="dashboard.html">Dashboard</a>

                            </li>

                            <li>

                                <i id="menuIcon" class="fa fa-commenting" aria-hidden="true"></i>
    
                                <a href="messages.html">Messages</a>
                
                            </li>

                            <li>

                                <i id="menuIcon" class="fa fa-users" aria-hidden="true"></i>

                                <a href="#">Friends</a>

                            </li>

                              <li>

                                <i id="menuIcon" class="fa fa-cutlery" aria-hidden="true"></i>

                                <a href="#">Food & Drinks</a>

                            </li>

                            <li>

                                <i id="menuIcon" class="fa fa-percent" aria-hidden="true"></i>

                                <a href="#">Specials</a>

                            </li>

                            <li>

                                <button id="colorBtn">Change Light Mood</button>

                            </li>

                        
                            <li>

                                <button id="rastaBtn">Rasta Mode</button>

                            </li>

                        </ul>

                      </div>

                    </nav>

                </div>

              `,
});

var logIn = new Vue({
    el: '#sideBarMenu'
})


