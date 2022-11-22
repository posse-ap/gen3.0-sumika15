{
  $(function () {
    var container = $(".canvas-container");
    var ctx = $("#chart");
    ctx.attr("width", container.width(690));
    ctx.attr("height", 350);
  });
}
// const recordButton = document.querySelectorAll(".js-record-button");
const modalContainer = document.querySelector(".js-modal-container");
// // forEach(let i in recordButton){
// //   recordButton[i].addEventListener("click", ()=>{
// //     modalContainer.classList.toggle("active");
// //   })
// 	}
document.querySelectorAll(".js-record-button").forEach(function(recordButton){

  recordButton.addEventListener('click',function(){
      modalContainer.classList.toggle("active");
      console.log("bbbbbbb");
  });
});

{
  // const modalContainer = document.querySelector(".js-modal-container");
  // recordButton.addEventListener("click", ()=>{
  //   modalContainer.classList.toggle("active");
  // })
  const closeButton = document.querySelector(".js-close-button");

  closeButton.addEventListener("click", () => {
    modalContainer.classList.remove("active");

    window.location.reload();
  });

}

// 画面ローディング
{
  const modalRecordButton = document.getElementsByClassName("modal-record-button")
  const loading = document.getElementsByClassName("loading");
  const modalDisplay = document.getElementById("modal-display");
  const finishWindow = document.getElementById("js-finish-window");
  const twitterCheckbox = document.getElementById("twitter-checkbox");
  modalRecordButton[0].addEventListener("click", ()=>{
    if (twitterCheckbox.checked) {
      const commentTwitter = document.getElementById("comment-twitter").value;
      location.replace(`https://twitter.com/compose/tweet?text=${commentTwitter}`);
    } 
    else {
    loading[0].classList.toggle("js-close-button");
    loading[0].classList.toggle("loading-active");
    modalDisplay.style.display="none";
    var fn = function() {
      loading[0].classList.remove("loading-active");
      finishWindow.style.display= "block";
      console.log("aaaaaa")
    };
    
    var tm = 3000;
    setTimeout(fn,tm);
  }
  }
  );
}
