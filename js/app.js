function initMap (){
    const home = {lat:-1.946787, lng:30.059526}
    const map = new google.maps.Map(document.getElementById('map'),{
        center: home,
        zoom:8
    })

    const marker = new google.maps.Marker({
        position:home,
        map:ma
    })
}