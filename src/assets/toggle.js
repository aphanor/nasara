var bodyEl = document.body,
    content = document.querySelector('.content-wrap'),
    nav = document.querySelector('.icon-list a.nav1'),
    nav1 = document.querySelector('.icon-list a.nav2'),
    nav2 = document.querySelector('.icon-list a.nav3'),
    nav3 = document.querySelector('.icon-list a.nav4'),
    nav4 = document.querySelector('.icon-list a.nav5'),
    nav5 = document.querySelector('.icon-list a.nav6'),
    nav6 = document.querySelector('.icon-list a.nav7'),
    nav7 = document.querySelector('.icon-list a.nav8'),
    nav8 = document.querySelector('.icon-list a.nav9'),
    openbtn = document.getElementById('open-but'),
    closebtn = document.getElementById('close-button'),
    article = document.getElementById('maino'),
    isOpen = false;

var toggleM = {
    toggleMenu: function() {
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
            $('body').css('overflow', 'auto');
        } else {
            classie.add(bodyEl, 'show-menu');
            $('body').css('overflow', 'hidden');
        }
        isOpen = !isOpen;
    },
    init: function() {
        toggleM.initEvents();
    },
    initEvents: function() {
        //openbtn.addEventListener( 'mouseover', toggleMenu );
        if(openbtn) {
            openbtn.addEventListener('click', toggleM.toggleMenu);
        }
        if (closebtn) {
            closebtn.addEventListener('click', toggleM.toggleMenu);
        }

        // close the menu element if the target it´s not the menu element or one of its descendants..
        if(content) {
            content.addEventListener('click', function(ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleM.toggleMenu();
                }
            });
        }

        if(nav) {
            nav.addEventListener('click', function(ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleM.toggleMenu();
                }
            });
        }

        if(nav1) {
            nav1.addEventListener('click', function(ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleM.toggleMenu();
                }
            });
        }

        if(nav2) {
            nav2.addEventListener('click', function(ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleM.toggleMenu();
                }
            });
        }

        if(nav3) {
            nav3.addEventListener('click', function(ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleM.toggleMenu();
                }
            });
        }

        if(nav4) {
            nav4.addEventListener('click', function(ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleM.toggleMenu();
                }
            });
        }

        if(nav5) {
            nav5.addEventListener('click', function(ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleM.toggleMenu();
                }
            });
        }

        if(nav6) {
            nav6.addEventListener('click', function(ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleM.toggleMenu();
                }
            });
        }

        if(nav7) {
            nav7.addEventListener('click', function(ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleM.toggleMenu();
                }
            });
        }

        if(nav8) {
            nav8.addEventListener('click', function(ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleM.toggleMenu();
                }
            });
        }
    }
}