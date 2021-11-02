const slider = function(id) {
    const element = document.querySelectorAll('#' + id);
    
    if(element.length > 1 || element.length == 0) return;

    const elem = element[0];
    elem.classList.add('slider');

    const list = elem.firstElementChild;
    list.classList.add('list');

    const item = list.children;

    let width = null;

    let count = 0;

    const init = function() {
        for(let i = 0; i < item.length; i++) {
                let item_one = item[i];
                
                width = item_one.offsetWidth;
            }
        elem.style.width = width + 'px';

        list.style.width =  width * item.length + 'px';
    }

    window.addEventListener('resize', init);

    init();
    
    const left = document.querySelector('.left');

    const right = left.previousElementSibling;

    const slider_right = function(event) {
        count++;
        if(count >= item.length) {
            count = 0;
        }
        slider_roll();
    }

    right.addEventListener('click', slider_right);

    const slider_left = function(event) {
        count--;
        if(count < 0) {
            count = item.length - 1;
        }

        slider_roll();
    }

    left.addEventListener('click', slider_left);

    const slider_roll = function() {
        list.style.transform = 'translate(-' + count * width + 'px)';
    }
}