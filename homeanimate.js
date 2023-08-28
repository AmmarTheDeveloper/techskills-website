$(document).ready(function () {
    $('.card-group').waypoint(function(){
        $('.card-group').addClass('animate__animated animate__zoomIn')
    },{
        offset:'30%'
    })
    $('.our-team').waypoint(function(){
        $('.our-team').addClass('animate__animated animate__zoomInUp')
    },{
        offset:'30%'
    })
    $('.column-1').waypoint(function(){
        $('.column-1').addClass('animate__animated animate__fadeInLeftBig')
    },{
        offset:'30%'
    })
    $('.column-2').waypoint(function(){
        $('.column-2').addClass('animate__animated animate__fadeInRight');
    },{
        offset:'30%'
    })
})