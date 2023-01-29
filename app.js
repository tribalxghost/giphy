console.log("Let's get this party started!");

$("#search__form").submit(async function (event) {
    
    let result = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: $("#search").val(),
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    })
    let randomNumber = Math.floor((Math.random() * result.data.data.length) + 1) 
    let img = $('<img />', {
        class: 'images',
        src: result.data.data[randomNumber].images.original.url
    }).appendTo("#image__container")
    
})



$('#remove__btn').click(function (event) {
    $('.images').remove()
})