window.addEventListener('load', function() {
    var pre = document.querySelector('.pre');
    var next = document.querySelector('.next');
    var lunbo = document.querySelector('.lunbo');
    lunbo.addEventListener('mouseenter', function() {
        pre.style.display = 'block';
        next.style.display = 'block';

    })
    lunbo.addEventListener('mouseleave', function() {
        pre.style.display = 'none';
        next.style.display = 'none';

    })
    var ol = lunbo.querySelector('.promo-nav');
    var ul = lunbo.querySelector('ul');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
    }
    li.addEventListener('click', function() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.childern[i].className = '';
        }
        this.className = 'selected';

    })

})