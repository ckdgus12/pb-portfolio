window.onload = ()=>{
  const reveal = document.querySelectorAll('.reveal')
  // console.log(reveal[0].dataset.thres)
  const observer = new IntersectionObserver((e)=>{
    e.forEach((el)=>{
      if(el.isIntersecting){
        el.target.classList.add('active')
      }
    })
  },
  {threshold: .2})
  for(let i = 0 ; i < 6; i++){
    observer.observe(reveal[i])
    // console.log(reveal[i].dataset.thres)
  }
}