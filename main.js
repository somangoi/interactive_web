(()=>{
    //이미지와 텍스트에 data-index주기
    const stepElems = document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let currentItem = graphicElems[0]; 
    //현재 활성화된 (visible 클래스가 붙음) .graphic-item을 지정

    const io = new IntersectionObserver((entries, observer) =>{
        console.log(entries);
    });

    for (let i = 0; i < stepElems.length; i ++) {
        io.observe(stepElems[i])
        // stepElems[i].setAttribute('data-index', i);
        //이렇게 해도 좋지만, data-n은 아래와 같이 이용할 수 있다.
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }

    function activate() {
        currentItem.classList.add('visible');
    }

    function deactivate() {
        currentItem.classList.remove('visible')
    }   

    // DOM 엘레먼트의 위치 값 구하기
    window.addEventListener('scroll', () => {
        let step;
        let boundingRect;

        for (let i = 0; i < stepElems.length; i++){
            step = stepElems[i];
            boundingRect = step.getBoundingClientRect();

            if(boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8){

                deactivate();
                currentItem = graphicElems[step.dataset.index]
                activate();
            }
        }
    });
    activate();
})();

//전역변수의 사용을 피하기 위해서 익명 함수를 사용한다.