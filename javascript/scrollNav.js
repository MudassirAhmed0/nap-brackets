
 let linkItemDes = document.querySelectorAll('.linkItemDes')
 let linkItemMob = document.querySelectorAll('.linkItem')
 let navSize = window.innerWidth > 768 ? (window.innerWidth / 100 * 5.9375) : 92.17
 let sec1= 0
 let sec2= document.getElementById('about-us').offsetTop - navSize
 let sec3= document.getElementById('prouduct-portfolio').offsetTop - navSize
 let sec4= document.getElementById('our-services').offsetTop - navSize
 let sec5= document.getElementById('why-nap').offsetTop - navSize
 let sec6= document.getElementById('contact-us').offsetTop - navSize
 const scrollTopBtn =document.getElementById('scrollTop')

 window.addEventListener('scroll',()=>{
 
    let scrolled=window.scrollY
    

   if(scrolled >= sec1 && scrolled < sec2){
    scrollTopBtn.classList.add('opacity-0')
    scrollTopBtn.classList.add('pointer-events-none')
    linkItemDes.forEach((item,index)=>{
        item.classList.remove('active')
        item.classList.add('opacity-[0.7]')
    })
    linkItemMob.forEach((item,index)=>{
        item.classList.remove('active')
        item.classList.add('opacity-[0.7]')
    })
   } else{
    scrollTopBtn.classList.remove('opacity-0')
    scrollTopBtn.classList.remove('pointer-events-none')
   }
   if(scrolled >= sec2 && scrolled < sec3){
      linkItemDes.forEach((item,index)=>{
            if(index==0){
            item.classList.add('active')
            item.classList.add('opacity-[0.7]')
            }else{

                item.classList.remove('active')
                item.classList.remove('opacity-[0.7]')
            }
        })
        linkItemMob.forEach((item,index)=>{
            if(index==0){
                item.classList.add('active')
                item.classList.add('opacity-[0.7]')
            }else{
                item.classList.remove('active')
                item.classList.remove('opacity-[0.7]')
            }
        })
       
   } 
   if(scrolled >= sec3 && scrolled < sec4){
        linkItemDes.forEach((item,index)=>{
            if(index==1){
            item.classList.add('active')
            item.classList.add('opacity-[0.7]')
            }else{

                item.classList.remove('active')
                item.classList.remove('opacity-[0.7]')
            }
        })
        linkItemMob.forEach((item,index)=>{
            if(index==1){
                item.classList.add('active')
                item.classList.add('opacity-[0.7]')
            }else{
                item.classList.remove('active')
                item.classList.remove('opacity-[0.7]')
            }
        })
        
   } 
   if(scrolled >= sec4 && scrolled < sec5){
       linkItemDes.forEach((item,index)=>{
            if(index==2){
            item.classList.add('active')
            item.classList.add('opacity-[0.7]')
            }else{

                item.classList.remove('active')
                item.classList.remove('opacity-[0.7]')
            }
        })
        linkItemMob.forEach((item,index)=>{
            if(index==2){
                item.classList.add('active')
                item.classList.add('opacity-[0.7]')
            }else{
                item.classList.remove('active')
                item.classList.remove('opacity-[0.7]')
            }
        }) 
   } 
   if(scrolled >= sec5 && scrolled < sec6){ 
        linkItemDes.forEach((item,index)=>{
            if(index==3){
            item.classList.add('active')
            item.classList.add('opacity-[0.7]')
            }else{

                item.classList.remove('active')
                item.classList.remove('opacity-[0.7]')
            }
        })
        linkItemMob.forEach((item,index)=>{
            if(index==3){
                item.classList.add('active')
                item.classList.add('opacity-[0.7]')
            }else{
                item.classList.remove('active')
                item.classList.remove('opacity-[0.7]')
            }
        })
       
   } 
   if(scrolled >= sec6){
       linkItemDes.forEach((item,index)=>{
            if(index==4){
            item.classList.add('active')
            item.classList.add('opacity-[0.7]')
            }else{

                item.classList.remove('active')
                item.classList.remove('opacity-[0.7]')
            }
        })
        linkItemMob.forEach((item,index)=>{
            if(index==4){
                item.classList.add('active')
                item.classList.add('opacity-[0.7]')
            }else{
                item.classList.remove('active')
                item.classList.remove('opacity-[0.7]')
            }
        })
        
   } 
})



linkItemDes.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        if(index==0){
            window.scrollTo(0,sec2)
            linkItemDes.forEach((i,ind)=>{
                if(ind ==0){
                    i.classList.add('opacity-[0.7]')
                }else{
                    i.classList.remove('opacity-[0.7]')
                }
            })
        }
        if(index==1){
            window.scrollTo(0,sec3)
            linkItemDes.forEach((i,ind)=>{
                if(ind ==1){
                    i.classList.add('opacity-[0.7]')
                }else{
                    i.classList.remove('opacity-[0.7]')
                }
            })
            
        }
        if(index==2){
            window.scrollTo(0,sec4)
            linkItemDes.forEach((i,ind)=>{
                if(ind ==2){
                    i.classList.add('opacity-[0.7]')
                }else{
                    i.classList.remove('opacity-[0.7]')
                }
            })
        }
        if(index==3){
            window.scrollTo(0,sec5)
            linkItemDes.forEach((i,ind)=>{
                if(ind ==3){
                    i.classList.add('opacity-[0.7]')
                }else{
                    i.classList.remove('opacity-[0.7]')
                }
            })
        }
        if(index==4){
            window.scrollTo(0,sec6)
            linkItemDes.forEach((i,ind)=>{
                if(ind ==4){
                    i.classList.add('opacity-[0.7]')
                }else{
                    i.classList.remove('opacity-[0.7]')
                }
            })
        }
    })
})  
linkItemMob.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        if(index==0){
            window.scrollTo(0,sec2)
            linkItem.forEach((i,ind)=>{
                if(ind ==0){
                    i.classList.add('opacity-[0.7]')
                }else{
                    i.classList.remove('opacity-[0.7]')
                }
            })
        }
        if(index==1){
            window.scrollTo(0,sec3)
            linkItem.forEach((i,ind)=>{
                if(ind ==1){
                    i.classList.add('opacity-[0.7]')
                }else{
                    i.classList.remove('opacity-[0.7]')
                }
            })
            
        }
        if(index==2){
            window.scrollTo(0,sec4)
            linkItem.forEach((i,ind)=>{
                if(ind ==2){
                    i.classList.add('opacity-[0.7]')
                }else{
                    i.classList.remove('opacity-[0.7]')
                }
            })
        }
        if(index==3){
            window.scrollTo(0,sec5)
            linkItem.forEach((i,ind)=>{
                if(ind ==3){
                    i.classList.add('opacity-[0.7]')
                }else{
                    i.classList.remove('opacity-[0.7]')
                }
            })
        }
        if(index==4){
            window.scrollTo(0,sec6)
            linkItem.forEach((i,ind)=>{
                if(ind ==4){
                    i.classList.add('opacity-[0.7]')
                }else{
                    i.classList.remove('opacity-[0.7]')
                }
            })
        }
    })
})  


scrollTopBtn.addEventListener('click',()=>{
     
    window.scrollTo(0,0)
})