// LOG IN COMPONENT

'use strict'

Vue.component('top-bar', {
    template: `      

                <div class="topBar">
      
                    <ul class="settings">

                        <li><a href="#"><i id="addCharts" class="fa fa-cog" aria-hidden="true"></i></a></li>

                        <li><a href="index.html"><i id="leavePage" class="fa fa-sign-out" aria-hidden="true"></i></a></li>

                    </ul>

                    <hr>
                    
                    <div class="infoContainer">

                        <img class="profilePicture" src="images/felix.jpg">

                        <h2>Felix Talla</h2>

                        <i class="fa fa-envelope envelope" aria-hidden="true"></i>

                        <i class="fa fa-bell bell" aria-hidden="true"></i>
                        
                        <li class="hide"><a href="#"><img class="weed" src="images/weed.png"></a></li>

                        <div class="skillbar clearfix " data-percent="75%">
                            <div class="skillbar-title" style="background: transparent;"><span>Level</span><span class="level">18</span></div>
                            <div class="skillbar-bar" style="background: #d14b4b; height: 20px;"></div>
                            <div class="skill-bar-percent">75%</div>
                        </div> 
                    </div>
                
                </div>

              `,
});

var logIn = new Vue({
    el: '#topBar'
})