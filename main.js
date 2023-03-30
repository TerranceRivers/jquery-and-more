
 let clickDiv = $("<div>Click Here</div>");
 $("body").append(clickDiv);
 
 let ul = $("<ul>");
 $("body").append(ul);
 

 clickDiv.on("click", function() {
   
   let inputText = $("#input-box").val();

   let li = $("<li>").text(inputText);
   ul.append(li);
   $("#input-box").val("");
 });

 const config = {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'My First Dataset',
      data: [12, 29, 3, 2, 10, 8],
      backgroundColor: [
        "red",
        'black',
        'green',
        'yellow',
        'purple',
        'goldenrod'
      ],
    
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};


let canvas = $("#myChart");
const myChart = new Chart(canvas, config);

const config1 = {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'My second Dataset',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "red",
        'black',
        'green',
        'yellow',
        'purple',
        'goldenrod'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};


let canvas2 = $("#myChart1");
const myChart1 = new Chart(canvas2, config1);