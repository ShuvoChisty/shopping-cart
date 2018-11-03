var products = [
  {name: "MI 7", price: "220", image: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/10/06/source-img/20171006100751_75953.jpg"},
  {name: "REDMI6", price: "250", image: "https://image2.geekbuying.com/ggo_pic/2018-09-20/Xiaomi-Mi-8-Lite-6-26-Inch-6GB-64GB-Smartphone-Blue-736638-.jpg"},
  {name: "Pocophone", price: "500", image: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/10/06/source-img/20171006100751_75953.jpg"},
  {name: "REDMIPRO", price: "100", image: "https://image2.geekbuying.com/ggo_pic/2018-09-20/Xiaomi-Mi-8-Lite-6-26-Inch-6GB-64GB-Smartphone-Blue-736638-.jpg"},
  {name: "MI5", price: "600", image: "https://cdn3.techadvisor.co.uk/cmsdata/reviews/3680578/xiaomi_mi8_review_4_thumb1200_4-3.jpg"},
  {name: "MI1", price: "300", image:"https://cdn2.techadvisor.co.uk/cmsdata/reviews/3680578/xiaomi_mi8_review_2.jpg"},
   {name: "REDMINOTE-4", price: "350", image: "https://www.gizmochina.com/wp-content/uploads/2018/09/Xiaomi-Mi-8-Lite-Dark-Gray.jpg"},
  {name: "Pocophone", price: "333", image: "https://asset.winnetnews.com/image/cache/slide/post/image-pocophone-f1-akan-tersedia-di-indonesia-akhir-agustus-2018.jpg"},
   {name: "Pocophone", price: "460", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUTTkV-01NCkIpSZo4IFHQPoB55GwVeyv3k5TTD0MkSq4PXft"},
  {name: "REDMINOTE-8", price: "230", image: "https://cdn3.techadvisor.co.uk/cmsdata/reviews/3680578/xiaomi_mi8_review_4_thumb1200_4-3.jpg"},
  {name: "REDMINOTE-5", price: "120", image: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/10/06/source-img/20171006100751_75953.jpg"},
  {name: "REDMINOTE-3", price: "190", image: "https://image2.geekbuying.com/ggo_pic/2018-09-20/Xiaomi-Mi-8-Lite-6-26-Inch-6GB-64GB-Smartphone-Blue-736638-.jpg"}
];
var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):{
  items: [],
  total: 0
};

localStorage.setItem('cart',JSON.stringify(cart));

$(document).ready(function(){
    
    $('#itemNo').text(cart.items.length);
    
    products.forEach(function(product, index){
      var colDiv = $('<div>').addClass('col-md-4');
      var cardDiv = $('<div>').addClass('card');
      
      var prodImg = $('<img>').addClass('card-img-top');
      prodImg.attr('src', product.image);
      cardDiv.append(prodImg);
      
      var cardBody = $('<div>').addClass('card-body');
      cardDiv.append(cardBody);
      
      var productTitle = $('<h5>').addClass('carf-title').text(product.name); 
      cardBody.append(productTitle);
      
      var produtPrice = $('<p>').addClass('card-text').text("$" + product.price);
      cardBody.append(produtPrice);
      // var cardTitle = $('<h5>').addClass('card-title');
      // var cardText = $('<p>').addClass('card-text');
      var addtoCartbtn = $('<button>').addClass('btn btn-primary').text('Add to Cart').attr('id', index);
      cardBody.append(addtoCartbtn);
      
      addtoCartbtn.click(function(event){
        var cartItem = products[event.target.id];
        cartItem.quantity = 1;
        cart.items.push(cartItem);
        $('#itemNo').text(cart.items.length);
        localStorage.setItem('cart',JSON.stringify(cart));
      });
      
     
      
      cardDiv.append(cardBody);
      
      
      colDiv.append(cardDiv);
      
      $('#prod-row').append(colDiv);
    });
  // <!-- Sample product card -->
  //       <!--<div class="col-md-4">-->
  //       <!--  <div class="card">-->
  //       <!--    <img class="card-img-top" src="https://s3.amazonaws.com/mernbook/marketplace/tardis.png" alt="Card image cap">-->
  //       <!--    <div class="card-body">-->
  //       <!--      <h5 class="card-title">Tardis Figurine</h5>-->
  //       <!--      <p class="card-text">$ 14</p>-->
  //       <!--      <button class="btn btn-primary">Add to Cart</button>-->
  //       <!--    </div>-->
  //       <!--  </div>-->
  //       <!--</div>-->
  $("#showCartBtn").click(function(){
    $("#cart").show();
    $("#products").hide();
    $("#showCartBtn").hide();
  });
  
  $("#showProdBtn").click(function(){
    $("#cart").hide();
    $("#products").show();
    $("#showCartBtn").show();
  });
  
  console.log("Start here");
  // Basic tasks
  // 1. Show / hide cart section on button click (Cart button / close cutton)
  // 2. Dynamically load products to view
  // 3. Dynamically show total items in Cart
  // 4. Add to cart button functionality
  // 5. Dynamically load cart items
  // 6. Implement quantity update for each cart item and update total cost dynamically.
  // 7. Store and load cart from localStorage
});