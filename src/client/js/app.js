const loadApp = () => {
  
  const msg = document.querySelector('#msg');
  const btn = document.querySelector('#toggleBtn');
  let click = 0;

  const changeMsg = () => {
    msg.textContent = `Clicked: ${++click} times`;
  };

  btn.addEventListener('click', changeMsg);
};


window.addEventListener('load', loadApp);