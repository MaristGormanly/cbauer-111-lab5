var comments = document.getElementById('comments');

comments.addEventListener('keyup', function(e) {
    var count = document.getElementById('comments').value.length;
    document.getElementById('count').value = count;
    if (count > 100) {
        comments.value = comments.value.slice(0,100);
    }
});

var like = document.getElementById('like');
var likes = document.getElementById('likes');
like.addEventListener('click', function(e) {
    likes.innerHTML = (Number(likes.innerHTML) + 1) + '';
}); 