const labels = ['Jan','Feb','March','April','May'];
const data = {
  labels: labels,
  datasets: [{
    label: 'Monthly Sales',
    data: [65, 59, 80, 81, 56],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
        },
    },
  };
   const context = document.getElementById("dataVisualization").getContext('2d');
   let chart = new Chart(context, config);

//    chart.options.plugins.tooltip = {
//     callbacks: {
//         label: function (context) {
//             return `Sales: ${context.parsed.y}`;
//         },
//     },
// };

   let animation=anime({
    targets: chart.data.datasets[0].data,
    delay: anime.stagger(200),
    duration: 1000,
    loop: true,
    direction: 'alternate',
    easing: 'linear',
    update: function(anime) {
      chart.update();
    }
  });
