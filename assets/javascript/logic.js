// Objective:
// use the API to populate at least 10 gif's from the Giphy website,
// Gif's are called by pressing a button with string that is the query
// Required:
// 1. display rating
// 2.Play animation on Click
// 3.add a search term and append new string
// 4. 



$(document).ready(function(){
    for( i=0; i< topics.length; i++){
        var topicsadd = $(".button-add").append("<button type='button' class='btn btn-dark array-list gif' id='"+topics[i]+"' >"+ topics[i]+"</button>")
        topicsadd
    }
})


$(".btn-outline-dark").click(function(){
    var searchvalue = $("input:text").val();
    var buttonadd = $(".button-add").append("<button type='button' class='btn btn-dark array-list'>"+ searchvalue+"</button>")
    buttonadd
    console.log($("input:text").val())
})
var usertyped = $("input:text").val()
// // Need Help below
var searchTerm = "spongebob"
$(".button-add").on("click",function(){


    event.preventDefault()
var APIKey = "fi6P2HJpI6tlPq7b1fupGzo8PFi1AYXA"  
var QueryUrl = "https://api.giphy.com/v1/gifs/search?api_key="+ APIKey+"&q="+ searchTerm+"&limit=10&offset=0&rating=G&lang=en"
// AJAX Call Below
$.ajax({
    url: QueryUrl,
    method: 'GET'
}).then(function (result) {
    
    
    // searchTerm filler: $(this).text()
    
    
    console.log(result)
    
    
    for (j = 1; j < 10; j++) {
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
            
}).catch(function(err){
console.error(err);
});
})



var topics = [
    "Jedi", "Morty", "Nacho Libre", "Star Wars", "Drifting",
    "The Office", "Big Bang Theory", "Soccer"    
]