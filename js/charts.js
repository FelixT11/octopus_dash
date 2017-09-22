// CHARTS DOC

'use strict'

var loyalPointTable = {
    tables:  [
      {
        date: "10.04.17", 
        mealTotal: 'R380', 
        waiterName: 'Geoff', 
        loyaltyPoints: '67'
      },
        
      {
        date: "27.04.17", 
        mealTotal: 'R837', 
        waiterName: 'Jeniffer', 
        loyaltyPoints: '85'
      },
        
      {
        date: "11.05.17", 
        mealTotal: 'R421', 
        waiterName: 'Rose', 
        loyaltyPoints: '72'
      },
        
      {
        date: "20.05.17", 
        mealTotal: 'R231', 
        waiterName: 'Jim', 
        loyaltyPoints: '54'
      },
        
      {
        date: "07.06.17", 
        mealTotal: 'R197', 
        waiterName: 'Geoff', 
        loyaltyPoints: '67'
      },
        
      {
        date: "18.06.17", 
        mealTotal: 'R592', 
        waiterName: 'Rose', 
        loyaltyPoints: '127'
      },
        
      {
        date: "15.07.17", 
        mealTotal: 'R156', 
        waiterName: 'Jeniffer', 
        loyaltyPoints: '57'
      },
        
      {
        date: "21.07.17", 
        mealTotal: 'R243', 
        waiterName: 'Jim', 
        loyaltyPoints: '102'
      }
      ],
}


Vue.component('chart-page', {
    template: `      
            
                    <div class="charts">

                        <div id="1" class="chartPage">
                            
                             <i id="closeWindow1" class="fa fa-times close" aria-hidden="true"></i>

                            <h2>Favourite Drinks</h2>
                       
                            <canvas id="myChart1" width="400" height="400"></canvas>

                        </div> 

                        <div id="2" class="chartPage">
 
                            <i id="closeWindow2" class="fa fa-times close" aria-hidden="true"></i>

                            <h2>Times you visited us</h2>

                            <canvas id="myChart2" width="400" height="400"></canvas>

                        </div> 

                        <div id="3" class="chartPage">
 
                            <i id="closeWindow3" class="fa fa-times close" aria-hidden="true"></i>

                            <h2>Favourite Food</h2>

                            <canvas id="myChart3" width="400" height="400"></canvas>

                        </div>   

                        <div id="4" class="table">

                            <i id="closeWindow4" class="fa fa-times close" aria-hidden="true"></i>

                            <h2>Statistics</h2>
            
                            <hr>
                        
                            <table>

                                <thead>

                                    <tr>

                                        <th>DATE</th>
                                        <th>MEAL TOTAL</th>
                                        <th>WAITER NAME</th>
                                        <th>LOYALTY POINTS</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <template v-for="table in tables">

                                        <tr>

                                            <td>{{table.date}}</td>
                                            <td>{{table.mealTotal}}</td>
                                            <td>{{table.waiterName}}</td>
                                            <td>{{table.loyaltyPoints}}</td>

                                        </tr>

                                    </template>

                                </tbody>

                            </table>
                        </div>  
                    </div>  
               

              `,
         data: function() {
        return loyalPointTable;
    }
});

var logIn = new Vue({
    el: '#chartPage'
})


var ctx = document.getElementById("myChart1").getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Savanna", "Black Label", "Apple Juice", "Water", "Coffee", "Red Wine"],
        datasets: [{
            label: 'Liter you drunk by us',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
                display: true,
                position: 'bottom'                             },
               
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
        datasets: [{
            label: 'Visiting time in minutes',
            data: [192, 389, 98, 587, 293, 183, 83],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
           legend: {
                display: true,
                position: 'bottom'                             },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx = document.getElementById("myChart3").getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Seafood Pasta", "Calamari and Chips", "Seafood Platter", "Lobster", "Fish Soup", "Grilled Hake"],
        datasets: [{
            label: 'Favourite Food',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
           legend: {
                display: false,
                                         },
    }
});