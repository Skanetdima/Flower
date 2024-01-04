let msg = document.querySelectorAll(".msgForU h2");
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
    msg.classList.add("active");
  };
