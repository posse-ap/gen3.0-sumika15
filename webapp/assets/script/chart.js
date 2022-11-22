// Register the plugin to all charts:
Chart.register(ChartDataLabels);

const w = $(".contents").width("690px");
const h = $(".contents").height("350px");
const log_chart = $(".log-chart");
$("#japanese_people_chart").attr("width", log_chart.width());
$("#japanese_people_chart").attr("height", 300);



// 棒グラフ
let context = document.querySelector("#japanese_people_chart").getContext("2d");
new Chart(context, {
  type: "bar",
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],    
    datasets: [
      {
        backgroundColor: ["#1ebede",

        ],
      
        data: [
          2.1, 2.5, 5.6, 6, 4, 5, 7, 8, 7, 6, 4, 3, 2, 1, 4, 5, 6, 7, 7, 3, 5,
          4, 5, 6, 7, 3,4,7,3,5
        ],
      },
    ],
  },
  options: {
    scales:{
        x:{
            min: 0,
            max: 30,
            ticks: {
              stepSize: 2,
              callback: function(value){
                if(value % 2 != 0  && value != 0){
                  return value + 1;
                };
              }
            },
            grid: {
              drawBorder: false,
              display: false,
            },
        },
        y:{
            max: 8,
            min: 0,
            ticks: {
                stepSize: 2,
                callback:function(value) {
                    return value + 'h';
                }
            },
            grid: {
              drawBorder: false,
              display: false,
            },
        },
        
    },
    responsive: false,
    plugins: false,
  },
}
);

//円グラフ
const lw = $(".contents").width("690px");
const lh = $(".contents").height("350px");
const log_chart_language = $("log-graph-language");
$("sushi_circle").attr("width", log_chart.width());
$("#sushi_circle").attr("height", 350);

window.addEventListener("load", function () {
  let context = document.querySelector("#sushi_circle").getContext("2d");
  new Chart(context, {
    type: "doughnut",
    data: {
      labels: [
        "Javascript",
        "CSS",
        "PHP",
        "HTML",
        "Laravel",
        "SQL",
        "SHELL",
        "情報システム基礎知識",
      ],
      datasets: [
        {
          backgroundColor: [
            "#1ebede",
            "#0d72be",
            "#0445ec",
            "#3ccefe",
            "#b29ef3",
            "#6d46ec",
            "#4a17ef",
            "#3005c0",
          ],
          data: [42, 18, 10, 5, 5, 5, 7.5, 7.5],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        datalabels: {
          color: "#fff",
          font: {
            size: 10,
          },
          formatter: (value, ctx) => {
            return value + "%";
          },
        },
          legend: {
            display: false,
          },
      },
    },
  });
});

const cw = $(".contents").width("690px");
const ch = $(".contents").height("350px");
const log_chart_content = $("log-graph-content");
$("sushi").attr("width", log_chart.width());
$("#sushi").attr("height", 350);

window.addEventListener("load", function () {
  let context = document.querySelector("#sushi").getContext("2d");
  new Chart(context, {
    type: "doughnut",
    data: {
      labels: ["ドットインストール", "N予備校", "POSSE課題"],
      datasets: [
        {
          backgroundColor: ["#1ebede", "#0d72be", "#0445ec"],
          data: [42, 33, 25],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {

        datalabels: {
          color: "#fff",
          font: {
            size: 10,
          },
          formatter: (value, ctx) => {
            return value + "%";
            
          },
          },
          legend: {
            display: false,
            },
      },
    },
  });
});
