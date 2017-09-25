<<<<<<< HEAD
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




=======
// all jquery dom actions can only be called inside document ready.

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
};

$(document).ready(function(){
	$("#cardForm").on("submit", function(event){
		event.preventDefault()

		var $title = $("#title").val();
		var $content = $("#content").val();
		var idString = convertToSlug($title);
		var $color = $("#color").val();

		btnid = convertToSlug($title) + "-button";
		styleString = "<style> #" + idString + " {background-color:" + $color + "}";
		btnString = '<button class="button" type="button" id="'+btnid+'">Edit this item</button>'
		cardString = '<div class="col-sm-3 card" '+'id="' + idString+'"'+"><h1>"+$title+"</h1><br><p>"+$content+"</p>"+btnString+"</div>";

		$("#row").append(cardString, styleString)
	});

	$("#row").on("click", ".button", function(){
		var $this = $(this);
		$this.siblings().remove();
		formString = '<form id="editForm" action="#" method="post"> <input type="text" id="title" name="title" placeholder="Enter Your Title"><br><input type="text" id="content" name="content" placeholder="Enter Your Content"><br><input type="text" id="color" name="color" placeholder="What color would you like the card to be?"><br><input type="submit" value="Add" id="addCard"></form>'
		$this.parent().append(formString);
	});
	$("#row").on("submit", "#editForm", function(event){
		var $this = $(this);
		console.log($this, $this.parent())
		event.preventDefault();
		editTitle = $("#editForm #title").val();
		editContent = $("#editForm #content").val();
		editColor = $("#editForm #color").val();

		editString = '<h1>' + editTitle + '</h1><br>' + '<p>' + editContent + '</p>';
		$this.parent().append(editString);
		$this.parent().css("background-color", editColor);
		// $this.siblings().css("background-color", editColor);
		$this.remove();

	})

>>>>>>> origin/lori
});
