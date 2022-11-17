// Register the plugin to all charts:
Chart.register(ChartDataLabels);

const w = $(".contents").width("690px");
const h = $(".contents").height("350px");
const log_chart = $(".log-chart");
$("#japanese_people_chart").attr("width", log_chart.width());
$("#japanese_people_chart").attr("height", 350);



// 棒グラフ
let context = document.querySelector("#japanese_people_chart").getContext("2d");
new Chart(context, {
  type: "bar",
  data: {
    labels: [
      "",
      "2",
      "",
      "4",
      "",
      "6",
      "",
      "8",
      "",
      "10",
      "",
      "12",
      "",
      "14",
      "",
      "16",
      "",
      "18",
      "",
      "20",
      "",
      "22",
      "",
      "24",
      "",
      "26",
      "",
      "28",
      "",
      "30",
    ],
    datasets: [
      {
        background: ["#1ebede"

      ],
        data: [
          2.1, 2.5, 5.6, 6, 4, 5, 7, 8, 7, 6, 4, 3, 2, 1, 4, 5, 6, 7, 7, 3, 5,
          4, 5, 6, 7, 3,4,7,3
        ],
      },
    ],
  },
  options: {
    scales:{
        x:{
            min: 0,
            max: 30,
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
        },
        
    },
    responsive: false,
    plugins: {

      legend: {
        display: false,
      },
    },
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
      responsive: false,
      plugins: {
        datalabels: {
          color: "#fff",
          font: {
            size: 20,
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
      responsive: false,
      plugins: {

        datalabels: {
          color: "#fff",
          font: {
            size: 20,
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
