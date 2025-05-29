let bagItems;
onload();

function onload() {
  let bagItemsString = localStorage.getItem("bagItems");
  bagItems = bagItemsString ? JSON.parse(bagItemsString) : [];
  displayItemOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}

function displayItemOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) {
    return;
  }

  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `
    <div class="item-container">
        <img src="${item.image}" class="item-image" alt="Item image" />
        <div class="rating">${item.rating.stars}⭐ | ${item.rating.reviews}</div>
        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% Off)</span>
        </div>
        <button class="add-to-bag-btn" onclick="addToBag(${item.id})" >Add to Bag</button>
    </div>
    `;
  });

  itemsContainerElement.innerHTML = innerHTML;
}
