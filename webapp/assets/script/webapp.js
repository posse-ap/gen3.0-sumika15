{
  $(function () {
    var container = $(".canvas-container");
    var ctx = $("#chart");
    ctx.attr("width", container.width(690));
    ctx.attr("height", 350);
  });
}

{
  const recordButton = document.querySelector(".js-record-button");
  const modalContainer = document.querySelector(".js-modal-container");
  recordButton.addEventListener("click", ()=>{
    modalContainer.classList.add("active");
  })
  const closeButton = document.querySelector(".js-close-button");

  closeButton.addEventListener("click", () => {
    modalContainer.classList.remove("active");
  });
}
