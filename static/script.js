let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let img = document.createElement('img');
    img.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    document.body.appendChild(img);
});