$(function() {
	var store = $('#handlebars-store').html();
	var template = Handlebars.compile(store);
	//create a handlebars template for the  wishlist
	var wishList = $('#handlebars-wishlist').html();
	var wishListTemplate = Handlebars.compile(wishList);
	for (var i=0; i<productsData.productsList.length; i++){
		//appends the product info into .container
		// console.log($('.container').length);
		$('.container').append(template(productsData.productsList[i]));
	}

	//Click event handler goes here grab text from h1 and assign it to an object.title value
	//append the handlebars wishlist template with the object.title value
	$(document).on('click', '#add-to-wishlist', function(){
		var wishlistItem = {title : $(this).parent().siblings('#product-title').children('h1').text()};
		$('#wishlist').append(wishListTemplate(wishlistItem));
	});
	


});
