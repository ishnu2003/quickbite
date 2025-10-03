 // Restaurant data
    const restaurants = {
      "marios-pasta": {
        name: "Mario's Pasta",
        cuisine: "Italian",
        priceRange: "$$",
        rating: "4.5 (320 reviews)",
        deliveryTime: "15-30 min",
        startingPrice: "$12.99+",
        icon: "🍝",
        categories: {
          starters: [
            {
              name: "Garlic Bread",
              image: "resources/garlic.jpg",
              rating: "★★★★☆",
              description: "Freshly baked bread with garlic butter and herbs",
              calories: "Approx. 280 calories",
              price: "$5.99"
            },
            {
              name: "Bruschetta",
              image: "resources/Bruschetta.jpg",
              rating: "★★★★★",
              description: "Toasted bread topped with tomatoes, garlic, and basil",
              calories: "Approx. 220 calories",
              price: "$6.50"
            },
            {
              name: "Mozzarella Sticks",
              image: "resources/cheese.jpg",
              rating: "★★★★☆",
              description: "Crispy fried mozzarella with marinara sauce",
              calories: "Approx. 350 calories",
              price: "$7.99"
            }
          ],
          mains: [
            {
              name: "Spaghetti Carbonara",
              image: "resources/spag.jpg",
              rating: "★★★★★",
              description: "Classic pasta with eggs, cheese, pancetta, and black pepper",
              calories: "Approx. 650 calories",
              price: "$12.99"
            },
            {
              name: "Lasagna",
              image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              rating: "★★★★☆",
              description: "Layers of pasta, beef, cheese, and tomato sauce",
              calories: "Approx. 720 calories",
              price: "$14.99"
            },
            {
              name: "Chicken Parmesan",
              image: "resources/chicken.jpg",
              rating: "★★★★☆",
              description: "Breaded chicken topped with marinara and melted cheese",
              calories: "Approx. 780 calories",
              price: "$15.99"
            }
          ],
          desserts: [
            {
              name: "Tiramisu",
              image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              rating: "★★★★★",
              description: "Classic Italian dessert with coffee-soaked ladyfingers",
              calories: "Approx. 420 calories",
              price: "$7.99"
            },
            {
              name: "Cannoli",
              image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              rating: "★★★★☆",
              description: "Crispy pastry shells filled with sweet ricotta cream",
              calories: "Approx. 320 calories",
              price: "$6.50"
            },
            {
              name: "Panna Cotta",
              image: "resources/Panna Cotta.jpg",
              rating: "★★★★☆",
              description: "Silky cooked cream dessert with berry sauce",
              calories: "Approx. 290 calories",
              price: "$7.25"
            }
          ],
          beverages: [
            {
              name: "Italian Soda",
              image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              rating: "★★★★☆",
              description: "Refreshing sparkling drink with your choice of flavor",
              calories: "Approx. 120 calories",
              price: "$4.50"
            },
            {
              name: "Espresso",
              image: "resources/expresso.jpg",
              rating: "★★★★★",
              description: "Strong Italian-style coffee served in a small cup",
              calories: "Approx. 5 calories",
              price: "$3.25"
            },
            {
              name: "Red Wine",
              image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              rating: "★★★★☆",
              description: "House red wine, perfect with pasta dishes",
              calories: "Approx. 125 calories",
              price: "$8.99"
            }
          ]
        }
      },
      "tokyo-sushi": {
        name: "Tokyo Sushi",
        cuisine: "Japanese",
        priceRange: "$$$",
        rating: "4.7 (285 reviews)",
        deliveryTime: "20-35 min",
        startingPrice: "$15.99+",
        icon: "🍣",
        categories: {
          starters: [
            {
              name: "Edamame",
              image: "resources/Starters/s21.jpg",
              rating: "★★★★☆",
              description: "Steamed soybeans with sea salt",
              calories: "Approx. 120 calories",
              price: "$4.99"
            },
            {
              name: "Miso Soup",
              image: "resources/Starters/s22.jpg",
              rating: "★★★★☆",
              description: "Traditional Japanese soup with tofu and seaweed",
              calories: "Approx. 70 calories",
              price: "$3.50"
            },
            {
              name: "Agedashi Tofu",
              image: "resources/Starters/s23.jpg",
              rating: "★★★★☆",
              description: "Lightly fried tofu in dashi broth with grated daikon",
              calories: "Approx. 180 calories",
              price: "$6.99"
            }
          ],
          mains: [
            {
              name: "Sashimi Platter",
              image: "resources/Main/m21.jpg",
              rating: "★★★★★",
              description: "Assorted fresh raw fish slices",
              calories: "Approx. 320 calories",
              price: "$24.99"
            },
            {
              name: "Dragon Roll",
              image: "resources/Main/m22.jpg",
              rating: "★★★★★",
              description: "Eel, cucumber, avocado with eel sauce",
              calories: "Approx. 380 calories",
              price: "$16.50"
            },
            {
              name: "California Roll",
              image: "resources/Main/m23.jpg",
              rating: "★★★★☆",
              description: "Crab, avocado, cucumber wrapped in nori and rice",
              calories: "Approx. 255 calories",
              price: "$10.99"
            }
          ],
          desserts: [
            {
              name: "Mochi Ice Cream",
              image: "resources/Dessert/d21.jpg",
              rating: "★★★★☆",
              description: "Japanese rice cake with ice cream filling",
              calories: "Approx. 100 calories",
              price: "$6.99"
            },
            {
              name: "Matcha Cheesecake",
              image: "resources/Dessert/d22.jpg",
              rating: "★★★★★",
              description: "Creamy cheesecake with green tea flavor",
              calories: "Approx. 380 calories",
              price: "$7.50"
            },
            {
              name: "Dorayaki",
              image: "resources/Dessert/d23.jpg",
              rating: "★★★★☆",
              description: "Japanese pancake sandwich with sweet red bean paste",
              calories: "Approx. 280 calories",
              price: "$5.99"
            }
          ],
          beverages: [
            {
              name: "Green Tea",
              image: "resources/Beverage/b21.jpg",
              rating: "★★★★☆",
              description: "Traditional Japanese green tea",
              calories: "Approx. 5 calories",
              price: "$2.99"
            },
            {
              name: "Sake",
              image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              rating: "★★★★☆",
              description: "Japanese rice wine, served warm or cold",
              calories: "Approx. 180 calories",
              price: "$9.99"
            },
            {
              name: "Ramune",
              image: "resources/Beverage/b23.jpg",
              rating: "★★★★☆",
              description: "Japanese carbonated soft drink with marble stopper",
              calories: "Approx. 110 calories",
              price: "$4.50"
            }
          ]
        }
      },
      "burger-king": {
        name: "Burger King",
        cuisine: "American",
        priceRange: "$",
        rating: "4.2 (510 reviews)",
        deliveryTime: "10-25 min",
        startingPrice: "$8.99+",
        icon: "🍔",
        categories: {
          starters: [
            {
              name: "French Fries",
              image: "resources/Starters/s31.jpg",
              rating: "★★★★☆",
              description: "Golden crispy fries with ketchup",
              calories: "Approx. 365 calories",
              price: "$3.99"
            },
            {
              name: "Mozzarella Sticks",
              image: "resources/cheese.jpg",
              rating: "★★★★☆",
              description: "Breaded and fried mozzarella cheese sticks",
              calories: "Approx. 350 calories",
              price: "$5.49"
            },
            {
              name: "Chicken Nuggets (8pc)",
              image: "resources/Starters/s33.jpg",
              rating: "★★★★☆",
              description: "Crispy bite-sized chicken pieces with dipping sauce",
              calories: "Approx. 380 calories",
              price: "$5.99"
            }
          ],
          mains: [
            {
              name: "Whopper",
              image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              rating: "★★★★☆",
              description: "Flame-grilled beef patty with fresh toppings",
              calories: "Approx. 660 calories",
              price: "$8.99"
            },
            {
              name: "Chicken Royale",
              image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              rating: "★★★★☆",
              description: "Crispy chicken fillet with mayo and lettuce",
              calories: "Approx. 580 calories",
              price: "$7.99"
            },
            {
              name: "Bacon King",
              image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              rating: "★★★★★",
              description: "Two beef patties with bacon, cheese, and special sauce",
              calories: "Approx. 1150 calories",
              price: "$10.99"
            }
          ],
          desserts: [
            {
              name: "Apple Pie",
              image: "resources/Dessert/d31.jpg",
              rating: "★★★★☆",
              description: "Warm apple filling in a flaky crust",
              calories: "Approx. 250 calories",
              price: "$2.99"
            },
            {
              name: "Chocolate Sundae",
              image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              rating: "★★★★☆",
              description: "Vanilla soft serve with hot fudge topping",
              calories: "Approx. 340 calories",
              price: "$3.49"
            },
            {
              name: "Oreo Sundae",
              image: "resources/Dessert/d33.jpg",
              rating: "★★★★★",
              description: "Creamy milkshake with Oreo cookie pieces",
              calories: "Approx. 610 calories",
              price: "$4.99"
            }
          ],
          beverages: [
            {
              name: "Chocolate Shake",
              image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              rating: "★★★★☆",
              description: "Creamy chocolate milkshake",
              calories: "Approx. 560 calories",
              price: "$4.99"
            },
            {
              name: "Fountain Drink",
              image: "resources/Beverage/b32.jpg",
              rating: "★★★★☆",
              description: "Coca-Cola products with free refills",
              calories: "Approx. 200 calories",
              price: "$2.99"
            },
            {
              name: "Iced Coffee",
              image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              rating: "★★★★☆",
              description: "Chilled coffee with cream and sweetener",
              calories: "Approx. 120 calories",
              price: "$3.49"
            }
          ]
        }
      },
      "dragon-wok": {
        name: "Dragon Wok",
        cuisine: "Chinese",
        priceRange: "$$",
        rating: "4.4 (375 reviews)",
        deliveryTime: "25-40 min",
        startingPrice: "$10.99+",
        icon: "🥢",
        categories: {
          starters: [
            {
              name: "Spring Rolls",
              image: "resources/Starters/s41.jpg",
              rating: "★★★★☆",
              description: "Crispy rolls with vegetable filling",
              calories: "Approx. 200 calories",
              price: "$5.50"
            },
            {
              name: "Pork Dumplings",
              image: "resources/Starters/s42.jpg",
              rating: "★★★★★",
              description: "Steamed dumplings with pork filling",
              calories: "Approx. 280 calories",
              price: "$6.99"
            },
            {
              name: "Hot and Sour Soup",
              image: "resources/Starters/s43.jpg",
              rating: "★★★★☆",
              description: "Spicy and tangy soup with tofu and vegetables",
              calories: "Approx. 150 calories",
              price: "$4.99"
            }
          ],
          mains: [
            {
              name: "Kung Pao Chicken",
              image: "resources/Main/m41.jpg",
              rating: "★★★★☆",
              description: "Spicy stir-fry with chicken, peanuts, vegetables",
              calories: "Approx. 520 calories",
              price: "$13.99"
            },
            {
              name: "Beef with Broccoli",
              image: "resources/Main/m42.jpg",
              rating: "★★★★☆",
              description: "Tender beef stir-fried with fresh broccoli",
              calories: "Approx. 480 calories",
              price: "$14.50"
            },
            {
              name: "Sweet and Sour Pork",
              image: "resources/Main/m43.jpg",
              rating: "★★★★☆",
              description: "Crispy pork with bell peppers in tangy sauce",
              calories: "Approx. 580 calories",
              price: "$13.99"
            },
          ],
          desserts: [
            {
              name: "Fortune Cookies",
              image: "resources/Dessert/d41.jpg",
              rating: "★★★★☆",
              description: "Crispy cookies with a fortune inside",
              calories: "Approx. 30 calories",
              price: "Complimentary"
            },
            {
              name: "Sesame Balls",
              image: "resources/Dessert/d42.jpg",
              rating: "★★★★☆",
              description: "Sweet glutinous rice balls with red bean paste",
              calories: "Approx. 180 calories",
              price: "$5.99"
            },
            {
              name: "Mango Pudding",
              image: "resources/Dessert/d43.jpg",
              rating: "★★★★★",
              description: "Refreshing mango-flavored custard dessert",
              calories: "Approx. 210 calories",
              price: "$6.50"
            }
          ],
          beverages: [
            {
              name: "Jasmine Tea",
              image: "resources/Beverage/b41.jpg",
              rating: "★★★★☆",
              description: "Fragrant Chinese tea",
              calories: "Approx. 5 calories",
              price: "$2.99"
            },
            {
              name: "Bubble Tea",
              image: "resources/Beverage/b42.jpg",
              rating: "★★★★★",
              description: "Sweet tea with tapioca pearls",
              calories: "Approx. 250 calories",
              price: "$5.99"
            },
            {
              name: "Plum Wine",
              image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              rating: "★★★★☆",
              description: "Sweet Chinese alcoholic beverage",
              calories: "Approx. 150 calories",
              price: "$8.99"
            }
          ]
        }
      }
    };

function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    restaurant: params.get('restaurant') || 'marios-pasta'
  };
}

// -------------------- MENU TABS --------------------
function generateMenuTabs(restaurantData) {
  const tabsContainer = document.getElementById('menu-tabs');
  tabsContainer.innerHTML = '';

  Object.keys(restaurantData.categories).forEach((category, index) => {
    const button = document.createElement('button');
    button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    button.dataset.category = category;
    button.className = index === 0 ? 'active' : '';
    button.addEventListener('click', () => switchCategory(category));
    tabsContainer.appendChild(button);
  });
}

function switchCategory(category) {
  document.querySelectorAll('#menu-tabs button').forEach(button => {
    button.classList.toggle('active', button.dataset.category === category);
  });
  document.querySelectorAll('.category-section').forEach(section => {
    section.classList.toggle('hidden', section.id !== `${category}-items`);
  });
}

// -------------------- MENU ITEMS --------------------
function generateMenuItems(restaurantData, restaurantSlug) {
  const menuContainer = document.getElementById('menu-container');
  menuContainer.innerHTML = '';

  Object.entries(restaurantData.categories).forEach(([category, items]) => {
    const section = document.createElement('div');
    section.id = `${category}-items`;
    section.className = `category-section ${category === 'starters' ? '' : 'hidden'}`;

    const itemsGrid = document.createElement('div');
    itemsGrid.className = 'menu-items';

    items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'menu-item';
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <h3>${item.name}</h3>
          <div class="rating">${item.rating}</div>
          <p class="description">${item.description}</p>
          <div class="price">${item.price}</div>
          <div class="calories">${item.calories}</div>
          <button class="add-btn">Add to Cart</button>
        </div>
      `;

      // --- ADD TO CART EVENT ---
      itemElement.querySelector('.add-btn').addEventListener('click', async () => {
        try {
          const resp = await fetch('/api/order-item', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              restaurantSlug,
              itemName: item.name,
              category,
              price: parseFloat(item.price.replace(/[^0-9.]/g, '')) || null
            })
          });
          const data = await resp.json();
          if (resp.ok) {
            alert(`✅ Added ${item.name} to your orders!`);
          } else if (data.error === "Not logged in") {
            alert("⚠️ Please login first!");
            window.location.href = "login.html";
          } else {
            alert("❌ Failed: " + data.error);
          }
        } catch (err) {
          console.error(err);
          alert("❌ Error placing order");
        }
      });

      itemsGrid.appendChild(itemElement);
    });

    section.appendChild(itemsGrid);
    menuContainer.appendChild(section);
  });
}

// -------------------- RESTAURANT INFO --------------------
function updateRestaurantInfo(restaurantData) {
  document.getElementById('restaurant-name').textContent = `${restaurantData.icon} ${restaurantData.name}`;

  const infoContainer = document.getElementById('restaurant-info');
  infoContainer.innerHTML = `
    <span>${restaurantData.cuisine} • ${restaurantData.priceRange}</span>
    <span>★ ${restaurantData.rating}</span>
    <span>Delivery in ${restaurantData.deliveryTime} • Price starts from ${restaurantData.startingPrice}</span>
  `;
}

// -------------------- INIT --------------------
function init() {
  const params = getUrlParams();
  const restaurantData = restaurants[params.restaurant];

  if (restaurantData) {
    updateRestaurantInfo(restaurantData);
    generateMenuTabs(restaurantData);
    generateMenuItems(restaurantData, params.restaurant);
  } else {
    const firstRestaurant = Object.values(restaurants)[0];
    updateRestaurantInfo(firstRestaurant);
    generateMenuTabs(firstRestaurant);
    generateMenuItems(firstRestaurant, Object.keys(restaurants)[0]);
  }
}

document.addEventListener('DOMContentLoaded', init);