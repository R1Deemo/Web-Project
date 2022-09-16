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
    ol.children[0].className = 'selected';
})