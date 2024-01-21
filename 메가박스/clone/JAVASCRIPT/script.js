
// 전체메뉴오픈

const handleMenuToggle = () => {
  let toggleMenu = document.querySelector(".menu_wrap");
  let toggleMenuBar = document.querySelector(".toggle_menu");
  toggleMenuBar.classList.toggle("change");
  if (toggleMenuBar.classList.contains("change")) {
    toggleMenu.style.display = "block";
  } else {
    toggleMenu.style.display = "none";
  }
};

//2단메뉴 오픈

const hoverMenu = (display) => {
  document.querySelector(".deth2_bg").style.display = display;
};

const hoverMenuli = (className, display) => {
  let hoverMenu = document.querySelector(`.deth2.${className}`); // 해당 클래스의 ul을 가져옴
  let hoverMenuli = hoverMenu.querySelectorAll("li"); // ul 의 li를 모두 가져옴, 유사배열임

  //forEach는 배열을 순회하는 메소드, map과 다르게 retruen값이 없다.
  hoverMenuli.forEach((currentE) => {
    currentE.style.display = display;
  });
};



//백그라운드 색상 변경

//window가 아닌 특정요소에 scroll이벤트를 등록하고자 한다면 해당요소의 css에 overflow auto 혹은 overflow scroll이 작성되어있어야 한다. 
const headerBg = document.getElementById('header');
window.addEventListener('scroll',()=> {
  let currentP = window.scrollY;
  let scrollH = headerBg.scrollTop;
  if(currentP >= 900){
    headerBg.style.backgroundColor = 'black';
  }else if(scrollH <= 900){
    headerBg.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  }
  })



  //기능준비중 js 

  const alertMsg = (event) => {
    event.preventDefault();
    let alertMsg = document.createElement('div');
    document.body.append(alertMsg);
    alertMsg.innerHTML = '<strong>기능을 준비중입니다. </strong>'
    alertMsg.style.cssText = `
      width: 160px;
      height: 40px;
      background-color: #037b94;
      position: fixed;
      top: 80px;
      right: 80px;
      z-index : 1005;
      border-radius: 15px;
      color: white;
      text-aligin: center;
      font-size: 14px;
      line-height: 40px;
      padding: 0 12px ;
      box-shadow: 10px 10px 10px black;
    `
    setTimeout(() => {
      alertMsg.remove()
    }, 3000);
  }


  // 탑으로 올리기

  let topUp = document.querySelector('.moveTop')
  window.addEventListener('scroll', () => {
    let scrollP2 = window.scrollY;
    if(scrollP2 > 900){
      topUp.style.display = 'block';
      topUp.addEventListener('click', () =>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      })
    }else if(scrollP2 < 900){
      topUp.style.display = 'none';
    }
  })