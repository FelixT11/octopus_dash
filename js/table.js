// TABLE COMPONENT

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
        loyaltyPoints: '72'}
      ],
}

Vue.component('table-page', {
    template: `      
                <div class="tablePage">

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

              `,
     data: function() {
        return loyalPointTable;
    }
});

var logIn = new Vue({
    el: '#tablePage',
   
})