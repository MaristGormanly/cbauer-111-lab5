/* function to count and limit amout of characters typed */
var comments = document.getElementById('comments');
comments.addEventListener('keyup', function(e) {
    var count = document.getElementById('comments').value.length;
    document.getElementById('count').value = count;
    if (count > 100) {
        comments.value = comments.value.slice(0,100);
    }
});

/* for liking images and counting the amount of likes */
var like = document.getElementById('like');
var likes = document.getElementById('likes');
like.addEventListener('click', function(e) {
    likes.innerHTML = (Number(likes.innerHTML) + 1) + '';
}); 

/* for enlarging an image when clicked on */
var img = document.getElementById('smallPic');
img.addEventListener('click', function(e) {
    img.style.transform = "scale(2)"
    img.style.transition = "transform 0.25s ease";
})

/* resets enlarged image to original size */
var resetImg = document.getElementById('resetImg');
resetImg.addEventListener('click', function(e) {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
})
