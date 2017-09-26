$(document).ready(function(){
	var $cardForm = $("#cardForm")
	var $main = $(".main")

	var boxTemplate = $('#box-template').html();

	cards = JSON.parse(localStorage.getItem('cards')) || [];

	$cardForm.on('submit', function(event){
		event.preventDefault();

		var $form = $(this);

		var card = {
			title: $form.find('[name="name"]').val(),
			body: $form.find('[name="body"]').val(),
			color: $form.find('[name="color"]').val()
		}

		addCard(card);
		cards.push(card)

		updateCardStorage()

		
	})
	$main.on('click', '.card-close', function(event){

		
		$(this).parents(".card").remove()
		

		
		updateCardStorage()
	})

	addCard = function(card) {
		var $card = $(boxTemplate);
		$card.find('span.card-title').text(card.title);
		$card.find('p.card-body').text(card.body);
		$card.css('background-color', card.color);
		$card.draggable();
		$("#printout").append($card);
	}

	var updateCardStorage = function(){
		var cardss = [];
		$('.card').each(function(idx, el){
			
			var tittle = $(el).find('span.card-title').text()
			var booty = $(el).find('p.card-body').text()

			var color = $(el).css('background-color')

			var eachCard = {"title": tittle, "body": booty, "color":color}

			cardss.push(eachCard)
			

		})
		// console.log(currentCards)
		localStorage.setItem('cards', JSON.stringify(cardss))
		// console.log(JSON.stringify(cards))
		// console.log(cards)
		
	}

	cards.forEach(addCard)
});




// // all jquery dom actions can only be called inside document ready.

// function convertToSlug(Text)
// {
//     return Text
//         .toLowerCase()
//         .replace(/[^\w ]+/g,'')
//         .replace(/ +/g,'-')
//         ;
// };

// $(document).ready(function(){
	
// 	cards = JSON.parse(localStorage.getItem('cards')) || [];
// 	$("#cardForm").on("submit", function(event){
// 		event.preventDefault()

// 		var $title = $("#title").val();
// 		var $content = $("#content").val();
// 		var idString = convertToSlug($title);
// 		var $color = $("#color").val();
// 		var $form = $(this)
// 		var card = $form.find('[name="')

// 		var addCard = function(cardObj){

// 			var $card = $()
// 		}

// 		var cardObj = {
// 			"card": card
// 		}

// 		cards.push(cardObj)

// 		btnid = convertToSlug($title) + "-button";
// 		styleString = "<style> #" + idString + " {background-color:" + $color + "}";
// 		btnString = '<button class="button" type="button" id="'+btnid+'">Edit this item</button>'
// 		cardString = '<div class="col-sm-3 card" '+'id="' + idString+'"'+"><h1>"+$title+"</h1><br><p>"+$content+"</p>"+btnString+"</div>";

// 		$("#row").append(cardString, styleString)

// 		updateCardStorage();
// 	});

// 	$("#row").on("click", ".button", function(){
// 		var $this = $(this);
// 		$this.siblings().remove();
// 		formString = '<form id="editForm" action="#" method="post"> <input type="text" id="title" name="title" placeholder="Enter Your Title"><br><input type="text" id="content" name="content" placeholder="Enter Your Content"><br><input type="text" id="color" name="color" placeholder="What color would you like the card to be?"><br><input type="submit" value="Add" id="addCard"></form>'
// 		$this.parent().append(formString);
// 	});
// 	$("#row").on("submit", "#editForm", function(event){
// 		var $this = $(this);
// 		console.log($this, $this.parent())
// 		event.preventDefault();
// 		editTitle = $("#editForm #title").val();
// 		editContent = $("#editForm #content").val();
// 		editColor = $("#editForm #color").val();

// 		editString = '<h1>' + editTitle + '</h1><br>' + '<p>' + editContent + '</p>';
// 		$this.parent().append(editString);
// 		$this.parent().css("background-color", editColor);
// 		// $this.siblings().css("background-color", editColor);
// 		$this.remove();

// 	})

// 	var updateCardStorage = function(){
// 		localStorage.setItems('cards', JSON.stringify(cards))
// 	}

// });
