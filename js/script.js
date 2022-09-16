// 我的课程点击事件
var more = document.querySelector('.more');
more.addEventListener('click', function() {
        alert("没有更多课程了");
    })
    // navbar鼠标移动事件
var navbar = document.querySelector('.navbar');
var lis = navbar.children;
for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function() {
        this.children[1].style.display = 'block';
    }
    lis[i].onmouseout = function() {
        this.children[1].style.display = 'none';
    }
}
// // 移动天使
// var pic = document.querySelector('.angel');
// document.addEventListener('mousemove', function(e) {
//     var x = e.pageX;
//     var y = e.pageY;
//     pic.style.left = x - 50 + 'px';
//     pic.style.top = y - 40 + 'px';

// });