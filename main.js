$(document).ready(function(){
	$("#cardForm").on("submit", function(event){
		event.preventDefault()

		
		var cardname = $("#cardname").val()
		var cardcontent = $("#cardcontent").val()
		var background = $("#background").val()

		var cardHtml = "<div>" + "<li>"

		cardHtml += ("<p>" + cardname + "</p>")
		cardHtml += ("<p>" + cardcontent + "</p>")
		

		cardHtml += "</li>"

		cardHtml += "<button class=" + "edit" + ">Edit</button>"

		cardHtml += "</div>" + "<br>"

		console.log(cardHtml)
		console.log(background)

		cardHtml = $(cardHtml).css("background-color", background)

		$("#printout").append(cardHtml)
	

	})

	$("#printout").on("click", "li", function(){

		console.log($(this))

		setTimeout($(this).hide(), 5000)


	})

	$(".edit").on("click", function(event){
		
		event.preventDefault()

		
		var cardname = $("#cardname").val()
		var cardcontent = $("#cardcontent").val()
		var background = $("#background").val()

		var cardHtml = "<div>" + "<li>"

		cardHtml += ("<p>" + cardname + "</p>")
		cardHtml += ("<p>" + cardcontent + "</p>")
		

		cardHtml += "</li>"

		cardHtml += "</div>" + "<br>"

		console.log(cardHtml)
		console.log(background)

		cardHtml = $(cardHtml).css("background-color", background)

		$("#printout").replaceWith(cardHtml)
	})




});
