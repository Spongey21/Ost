(function(){
    const burger = document.querySelector('.burgerMenuButton');
    const primaryNavigation = document.querySelector('.primaryNavigation');
    burger.addEventListener('click', clickHandler)

    function clickHandler(){
        primaryNavigation.classList.toggle('primaryNavigation--show');
        if (primaryNavigation.ariaHidden === 'true'){
             primaryNavigation.ariaHidden = 'false';
        }
         else primaryNavigation.ariaHidden = 'true';
    }
})()