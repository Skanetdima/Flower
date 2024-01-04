let msgAnim = document.querySelector(".msgForU_h2");
function mainAnimation(){
    msgAnim.classList.add("anim");
}
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);

    }, 1000);
    mainAnimation();
};


