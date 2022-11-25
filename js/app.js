function initMap (){
    const home = {lat:-1.946787, lng:30.059526}
    const map = new google.maps.Map(document.getElementById('map'),{
        center: home,
        zoom:8
    })

    const marker = new google.maps.Marker({
        position:home,
        map
    })
}

window.addEventListener('scroll', function(){
    console.log(window.screenY);
    if(window.scrollY > 150){
        document.getElementById('navbar').style.opacity = 0.6
    }else{
        document.getElementById('navbar').style.opacity = 1
    }
})

$('#navbar a, .btn').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
    }
    const hash = this.hash
    $('html, body').animate({
        scrollTop :$(hash).offset().top  - 100
    }, 800)
})