const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
        animations: {
            tension: {
              duration: 1000,
              easing: 'easeInCirc',
              from: 1,
              to: 0,
              loop: true
            }
          },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });