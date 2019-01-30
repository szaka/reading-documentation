// Your code here!
/*
var chart = c3.generate({
  data: {
    url: '/data.js'
  }
});

*/



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