// Your code here!
/*
var chart = c3.generate({
  data: {
    url: '/data.js'
  }
});

*/

/*

var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        [data[0][0], data[0][1]],
        [data[1][0], data[1][1]],
        [data[2][0], data[2][1]],
        [data[3][0], data[3][1]],
        [data[4][0], data[4][1]],
      ],
      type: 'pie'
    }
});

*/

var chart = c3.generate({
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