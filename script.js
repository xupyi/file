window.onload=function(){
    var input1=document.querySelector('form input');
    var seek=document.querySelector('form .seek');
    var search=document.querySelector('.search');
    var form=document.querySelector('form');
    var formp=document.querySelector('form p');
    
    // 搜索
    input1.onclick=function(){
        seek.style.display='none';
        search.style.display='block';
        form.style.border='1px solid #ff6700';
        formp.style.borderleft='1px solid #ff6700';
       
    }
    input1.onmouseout=function(){
        seek.style.display='block';
        search.style.display='none';
        form.style.border='1px solid #ccc';
        formp.style.borderleft='1px solid #ccc';
       
    }
    //xiaomi
    var boxxul=document.querySelectorAll('.boxx ul');
    var bannerli=document.querySelectorAll('.banner ul li');
    var boxx=document.querySelector('.boxx')
    for(var i = 0;i<boxxul.length;i++){
        bannerli[i].index=i;
        bannerli[i].onmouseover=function(){
            for(var f=0;f<boxxul.length;f++){
                boxxul[this.index].style.display ='none';
            }
            boxx.style.display='block';
            boxxul[this.index].style.display ='block';
        }
        bannerli[i].onmouseout=function(){
            boxx.style.display='none';
            boxxul[this.index].style.display ='none';
        }
       
    }

     //lunbo
     var carouseimg=document.querySelector('.flie .carouse ul');
     var dotsspan=document.querySelectorAll('.flie .carouse .dots span');
     var pleft=document.querySelector('.carouse .fa-angle-left');
     var pright=document.querySelector('.carouse .fa-angle-right');
     var dotspan=document.querySelectorAll('.carouse .dots span');
     var jj = 0;
    pleft.onclick=function () {
        jj=jj-1226;
        carouseimg.style.left=jj+'px';
        clearInterval(play);
        if(jj==-4904){
            jj=1226;
        }
    }
    pright.onclick=function () {

        carouseimg.style.left=-1226+'px';
        clearInterval(play);


    }
     function play(){
           jj = jj - 1226;
           carouseimg.style.left =jj+'px';
           if(jj==-4904){
               jj=1226;
           }
     }
     setInterval(play,3000);


   
    //  tab切换
    var lists=document.querySelectorAll('.carouse .list li');
    var table=document.querySelectorAll('.conceal div');
    var conceal=document.querySelector('.conceal')
    for(var i = 0;i<table.length;i++){
        lists[i].index=i;
        lists[i].onmouseover=function(){
            for(var f=0;f<lists.length;f++){
                table[this.index].style.display ='none';
            }
            conceal.style.display='block';
            table[this.index].style.display ='block';
        }
        lists[i].onmouseout=function(){
           conceal.style.display='none';
            table[this.index].style.display ='none';
        }
       
    }
     //mibuy
     var mibuywindoli=document.querySelectorAll('.mibuy-windo ul li');
     var fayaleft=document.querySelector('.mibuy-top .faya .fa-chevron-left');
     var fayaright=document.querySelector('.mibuy-top .faya .fa-chevron-right');
     var a=0; 

     fayaright.onclick=function(){
           a++;
         if(a>2){
             a=2;
         }
         console.log(a);
     for(var i=0;i<mibuywindoli.length;i++){
         mibuywindoli[i].style.left=-992*a+'px';
         }
     }
     fayaleft.onclick=function(){
         console.log(a)
        a--;
        if(a<0){
            a=0;
             }
        for(var i=0;i<mibuywindoli.length;i++){ 
             mibuywindoli[i].style.left=-992*a+'px';
       
            }
        }



        //timer
        var hour=document.querySelector(' .hour');
        var min=document.querySelector(' .min');
        var soms=document.querySelector(' .soms');
        var time =Number(hour.innerHTML)*60*60+Number(min.innerHTML)*60+Number(soms.innerHTML);
        setInterval(function timer(){
            time--;
        var hourer=parseInt(time/60/60);
        var miner=parseInt(time/60%60);
        var somser=parseInt(time%60);
        if(hourer<10){
            hourer='0'+ hourer;
        }
        if(miner<10){
            miner='0'+miner;
        }
        if(somser<10){
            somser='0'+somser;
        }
        if(time==0){
            clearInterval(timer);
        }
       hour.innerHTML=hourer;
        min.innerHTML=miner;
        soms.innerHTML=somser;
        },1000 );
        
       

        //tab切换
        //鼠标放上更换图片
        //home-1
        var homeli= document.querySelectorAll('.home-1 .home-top .home-tul li');
        var homeul=document.querySelectorAll('.home-1 .home-right ul')
        for(var i = 0;i<homeli.length;i++){
            homeli[i].index=i;
            homeli[i].onmouseover=function(){
                for(var j = 0;j<homeli.length;j++){
                    homeul[j].style.display='none';
                    homeli[j].className='';
                }
                    homeul[this.index].style.display='block';
                    homeli[this.index].className='fir-botm';
            }
        }
        //home-2
        var home2li= document.querySelectorAll('.home-2 .home-top .home-tul li');
        var home2ul=document.querySelectorAll('.home-2 .home-right ul')
        for(var i = 0;i<home2li.length;i++){
            home2li[i].index=i;
            home2li[i].onmouseover=function(){
                for(var j = 0;j<home2li.length;j++){
                    home2ul[j].style.display='none';
                    home2li[j].className='';
                }
                    home2ul[this.index].style.display='block';
                    home2li[this.index].className='fir-botm';
            }
        }
        //home-3
        var home3li= document.querySelectorAll('.home-3 .home-top .home-tul li');
        var home3ul=document.querySelectorAll('.home-3 .home-right ul')
        for(var i = 0;i<home3li.length;i++){
            home3li[i].index=i;
            home3li[i].onmouseover=function(){
                for(var j = 0;j<home3li.length;j++){
                    home3ul[j].style.display='none';
                    home3li[j].className='';
                }
                    home3ul[this.index].style.display='block';
                    home3li[this.index].className='fir-botm';
            }
        }
        //home-4
        var home4li= document.querySelectorAll('.home-4 .home-top .home-tul li');
        var home4ul=document.querySelectorAll('.home-4 .home-right ul')
        for(var i = 0;i<home4li.length;i++){
            home4li[i].index=i;
            home4li[i].onmouseover=function(){
                for(var j = 0;j<home4li.length;j++){
                    home4ul[j].style.display='none';
                    home4li[j].className='';
                }
                    home4ul[this.index].style.display='block';
                    home4li[this.index].className='fir-botm';
            }
        }
        //home-5
        var home5li= document.querySelectorAll('.home-5 .home-top .home-tul li');
        var home5ul=document.querySelectorAll('.home-5 .home-right ul')
        for(var i = 0;i<home5li.length;i++){
            home5li[i].index=i;
            home5li[i].onmouseover=function(){
                for(var j = 0;j<home5li.length;j++){
                    home5ul[j].style.display='none';
                    home5li[j].className='';
                }
                    home5ul[this.index].style.display='block';
                    home5li[this.index].className='fir-botm';
            }
        }



            // 为你推荐
    var recomwulindo =document.querySelectorAll('.recom-windo ul li');
        var recfaleft=document.querySelector('.recom-top .fa-chevron-left');
        var recfaright=document.querySelector('.recom-top .fa-chevron-right')
    var qq = 0;
    recfaleft.onclick=function () {
        qq--;
        if(qq<0){
            qq=0;
        }
        console.log(qq)
        for(var i=0;i<recomwulindo.length;i++){
            recomwulindo[i].style.left=-1240*qq+'px';
        }

    }


    recfaright.onclick=function () {
        qq++;
        if(qq>3){
            qq=3;
        }
        console.log(qq);
        for(var i=0;i<recomwulindo.length;i++){
            recomwulindo[i].style.left=-1240*qq+'px';
        }
    }
//    内容
// 111111111111111111111111
var dobbimg1=document.querySelectorAll('.contera-ing .li1 .dobb ul li');
var dott1 = document.querySelectorAll('.contera-ing .li1 .dott ul li');
var dobbileft1=document.querySelector('.contera-ing .li1 .arrow a .fa-chevron-left');
var dobbiright1=document.querySelector('.contera-ing .li1 .arrow a .fa-chevron-right');
var a=0; 
dobbiright1.onclick=function(){
      a++;
    if(a>2){
        a=2;
    }
    console.log(a);
for(var i=0;i<dobbimg1.length;i++){

  dobbimg1[i].style.left=-296*a+'px';
    }
}
dobbileft1.onclick=function(){
    console.log(a)
   a--;
   if(a<0){
       a=0;
        }
   for(var i=0;i<dobbimg1.length;i++){ 
      dobbimg1[i].style.left=-296*a+'px';
  
       }
   }


// 22222222222
var dobbimg2=document.querySelectorAll('.contera-ing .li2 .dobb ul li');
var dott2 = document.querySelectorAll('.contera-ing .li2 .dott ul li');
var dobbileft2=document.querySelector('.contera-ing .li2 .arrow a .fa-chevron-left');
var dobbiright2=document.querySelector('.contera-ing .li2 .arrow a .fa-chevron-right');
var b=0; 
dobbiright2.onclick=function(){
      b++;
    if(b>3){
        b=3;
    }
for(var i=0;i<dobbimg2.length;i++){
  
  dobbimg2[i].style.left=-296*b+'px';
    }
}
dobbileft2.onclick=function(){
   b--;
   if(b<0){
       b=0;
        }
   for(var i=0;i<dobbimg2.length;i++){ 
      dobbimg2[i].style.left=-296*b+'px';
  
       }
   }
// 
var dobbimg3=document.querySelectorAll('.contera-ing .li3 .dobb ul li');
var dott3 = document.querySelectorAll('.contera-ing .li3 .dott ul li');
var dobbileft3=document.querySelector('.contera-ing .li3 .arrow a .fa-chevron-left');
var dobbiright3=document.querySelector('.contera-ing .li3 .arrow a .fa-chevron-right');
var c=0; 
dobbiright3.onclick=function(){
      c++;
    if(c>3){
        c=3;
    }
    console.log(c);
for(var i=0;i<dobbimg3.length;i++){
  
  dobbimg3[i].style.left=-296*c+'px';
    }
}
dobbileft3.onclick=function(){
    console.log(c)
   c--;
   if(c<0){
       c=0;
        }
   for(var i=0;i<dobbimg3.length;i++){ 
      dobbimg3[i].style.left=-296*c+'px';
  
       }
   }

// 44444444
var dobbimg4=document.querySelectorAll('.contera-ing .li4 .dobb ul li');
var dott4 = document.querySelectorAll('.contera-ing .li4 .dott ul li');
var dobbileft4=document.querySelector('.contera-ing .li4 .arrow a .fa-chevron-left');
var dobbiright4=document.querySelector('.contera-ing .li4 .arrow a .fa-chevron-right');
var d=0; 
dobbiright4.onclick=function(){
      d++;
    if(d>3){
        d=3;
    }
for(var i=0;i<dobbimg4.length;i++){
  
  dobbimg4[i].style.left=-296*d+'px';
    }
}
dobbileft4.onclick=function(){
   d--;
   if(d<0){
       d=0;
        }
   for(var i=0;i<dobbimg4.length;i++){ 
      dobbimg4[i].style.left=-296*d+'px';
  
       }
   }


}
