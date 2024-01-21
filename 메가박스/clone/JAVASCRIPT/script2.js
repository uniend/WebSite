
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

  const alertMsg = () => {
    let alertMsg = document.createElement('div');
    document.body.append(alertMsg);
    alertMsg.innerHTML = '<strong>기능을 준비중입니다. </strong>'
    alertMsg.style.cssText = `
      width: 160px;
      height: 40px;
      background-color: #037b94;
      position: absolute;
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