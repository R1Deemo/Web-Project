window.addEventListener('load', function() {
    // 轮播图箭头的隐藏与显示
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
        // 轮播图中的按钮根据图片数量生成
    var ol = lunbo.querySelector('.promo-nav');
    var ul = lunbo.querySelector('ul');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        // 为当前选中的按钮绑定类
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'selected';
            var index = this.getAttribute('index');
            var owidth = lunbo.offsetWidth;
            animate(ul, -index * owidth);


        })
    }
    ol.children[0].className = 'selected';
    var num = 0;
    pre.addEventListener('click', function() {

    })
    next.addEventListener('click', function() {

        if (num = ul.children.length - 1) {
            num = 0;
        }
        num++;
        animate(ul, -num * owidth);
    })



})