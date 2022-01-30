$(document).ready(()=>{
    $('.menu-btn').click(()=>{
        $('.menu').toggleClass('active');
    $('li a').css("display","block");
    });
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
$('.btn-generate').click(()=>{  
        const images = [$('#image1'), $('#image2'),$('#image3'), $('#image4'), $('#image5'), $('#image6'), $('#image7'), $('#image8'), $('#image9'), $('#image10'), $('#image11'), $('#image12')];
        for(let i = 0; i < images.length; i++){
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then((data) =>{  
        let imgCat = data[0].url;
        images[i].attr("src", `${imgCat}`);
            })
        }
})

});