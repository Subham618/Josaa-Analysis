

//  localStorage.type = localStorage.getItem('type')? 'line' :'bar';


const ctx = document.getElementById('myChart');
const chart_type = document.querySelector('.body-card');
chart_type.addEventListener('click', e=>{
    e.preventDefault();
    if(e.target.tagName==="BUTTON"){
       changetype(e.target.id);
       //console.log(`the chart is conveted into ${e.target.id} chart`);
    }
        
});

const chart =  new Chart(ctx, {
     type: 'bar',
    data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [{
      label: 'First dataset',
      backgroundColor: ['#FFC0CB','red','pink','orange'],
      borderColor: ['#FFC0CB','pink','black','yellow'],
      data: [12, 19, 7, 9],
      borderWidth: 1,
      
    }]
  },
  options: {
    // top value which is displayed in the above of the chart 
    legend: {
      display: false
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
  function changetype(id){
    
          chart.config.type = id;
          console.log(id);
          chart.update();
  }
