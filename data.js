// use this data to generate your pie chart
/*
var data = [
  ['sleep', 8],
  ['eat', 3],
  ['code', 7],
  ['relax', 2],
  ['other', 4]
];
*/
/*
sleep should be color #D81159
eat should be color #8F2D56
code should be color #218380
relax should be color #FBB13C
other should be color #726DA8
*/

// Default Chart
var chart_default = c3.generate({
    data: {
        
        columns: [
            ['sleep', 8],
            ['eat', 3],
            ['code', 7],
            ['relax', 2],
            ['other', 4]
        ],
        type : 'pie',
      
        
    },

  // Default colors
    color: {
        pattern: ['blue', 'orange', 'green', 'red', 'purple']
    },


});



/*

// Different colors from the default colors 
    color: {
        pattern: ['#D81159', '#8F2D56', '#218380', '#FBB13C', '#726DA8']
    },

*/

/*
pie: {
        label: {
            format: function (value, ratio, id) {
                return d3.format('v')(value * 100 / 100) + ' ' + 'hours';

            }
        }
    

        },

*/











