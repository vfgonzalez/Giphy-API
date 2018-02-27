// Objective:
// use the API to populate at least 10 gif's from the Giphy website,
// Gif's are called by pressing a button with string that is the query
// Required:
// 1. display rating
// 2.Play animation on Click
// 3.add a search term and append new string



$(document).ready(function(){
    for( i=0; i< topics.length; i++){
        var topicsadd = $(".button-add").append("<button type='button' class='btn btn-dark array-list' name='search-term' id='"+topics[i]+"' >"+ topics[i]+"</button>")
        topicsadd
    }
})


$(".btn-outline-dark").click(function(){
    event.preventDefault()
    var searchvalue = $("input:text").val();
    var buttonadd = $(".button-add").append("<button type='button' class='btn btn-dark array-list' name='search-term'>"+ searchvalue+"</button>")
    buttonadd
    $("#searchVal").empty()
    
})
var usertyped = $("input:text").val()


$(".button-add").on("click",function(){
    var searchvalue = $(event.target).text()

    console.log(searchvalue)
   



    // event.preventDefault()
var APIKey = "fi6P2HJpI6tlPq7b1fupGzo8PFi1AYXA"  
var QueryUrl = "https://api.giphy.com/v1/gifs/search?api_key="+ APIKey+"&q="+ searchvalue+"&limit=15&offset=0&rating=G&lang=en"
// AJAX Call Below
$.ajax({
    url: QueryUrl,
    method: 'GET'
}).then(function (result) {
    $(".gif-holder").empty()
    
    
    
    console.log(result)
    
    
    for (j = 1; j < 11; j++) {
        // Parameter Variables:
        var gifrate = "Rating: "+ result.data[j].rating
        var bootcard ="<div class='card' style='width: 18rem;'><img class='card-img-top' data-state="+state+" data-still="+stillurl+" data-animate="+animatedurl+"  src=" +stillurl+ " alt='Card image cap'><div class='card-body'><p class='card-text'>"+gifrate+" </p></div></div>"        
        var animatedurl = result.data[j].images.preview_gif.url
        var stillurl = result.data[j].images.downsized_still.url
        var state = "still"
        $(".gif-holder").append(bootcard)
        
    }   
    $(".card-img-top").on("click",function(){
        if($(this).attr("data-state") === "still"){
            console.log("true")
            $(this).attr("src", $(this).attr("data-animate"))
            $(this).attr("data-state","animate")
        }
        else if($(this).attr("data-state") ==="animate"){
            console.log("false")
            $(this).attr("src", $(this).attr("data-still"))
            $(this).attr("data-state","still")
            
        }
    })
    console.log(result)
            
}).catch(function(err){
console.error(err);
});
})



var topics = [
    "Jedi", "Morty", "Nacho Libre", "Star Wars", "Drifting",
    "The Office", "Big Bang Theory", "Soccer"    
]