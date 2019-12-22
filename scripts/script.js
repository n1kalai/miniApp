let mainContainer = document.querySelector('.__images_box')
let selection = document.querySelector('.toggler');
let allA = document.querySelectorAll('.__images-box a');
let myArr = [];

selection.addEventListener('change', function () {
    // console.log(selection.value);
    
    for (let i = 0; i < allA.length; i++){
        //davitrie yvela a
        let data = allA[i];
        // davitrie yvela a-s atributebi
        let datas = allA[i].getAttribute('data-type');
        
      
       // shevadare ertmanets mnishvneloba da atributebi
       if ((selection.value === 'All')){
        allA[i].style.opacity = 1; 
       } 
       else if (selection.value === datas) {
            // davtove yvela is sadac atributi igivea
            // myArr.push(allA[i]);
            // console.log(myArr);
            allA[i].style.opacity = 1; 
            console.log(allA[i],selection.value);
            
            
        } else {
            allA[i].style.opacity = 0; 
        }
        
        
    }
})

