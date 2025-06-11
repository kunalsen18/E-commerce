// Product Data
const products = {
    men: [
        {
            id: 'm1',
            name: 'Classic Denim Jacket',
            price: 89.99,
            image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Timeless denim jacket perfect for any casual outfit'
        },
        {
            id: 'm2',
            name: 'Slim Fit Chinos',
            price: 49.99,
            image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Comfortable and stylish chinos for everyday wear'
        },
        {
            id: 'm3',
            name: 'Cotton Polo Shirt',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Classic polo shirt in breathable cotton'
        },
        {
            id: 'm4',
            name: 'Leather Sneakers',
            price: 79.99,
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Versatile leather sneakers for any occasion'
        }
    ],
    women: [
        {
            id: 'w1',
            name: 'Floral Summer Dress',
            price: 69.99,
            image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Light and breezy summer dress with floral pattern'
        },
        {
            id: 'w2',
            name: 'High-Waist Jeans',
            price: 59.99,
            image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Flattering high-waist jeans with perfect fit'
        },
        {
            id: 'w3',
            name: 'Blazer',
            price: 89.99,
            image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Professional blazer for work and formal occasions'
        },
        {
            id: 'w4',
            name: 'Leather Handbag',
            price: 119.99,
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Elegant leather handbag with spacious interior'
        }
    ],
    kids: [
        {
            id: 'k1',
            name: 'Dinosaur T-Shirt',
            price: 19.99,
            image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Fun dinosaur print t-shirt for children'
        },
        {
            id: 'k2',
            name: 'Kids Sneakers',
            price: 39.99,
            image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Comfortable and durable sneakers for active kids'
        },
        {
            id: 'k3',
            name: 'Rainbow Dress',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Colorful and playful dress for little girls'
        },
        {
            id: 'k4',
            name: 'Kids Backpack',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1562546106-b9cb3a76a206?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Spacious and lightweight school backpack'
        }
    ],
    sports: [
        {
            id: 's1',
            name: 'Yoga Mat',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Non-slip yoga mat with carrying strap'
        },
        {
            id: 's2',
            name: 'Dumbbells Set',
            price: 79.99,
            image: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Adjustable dumbbells for home workouts'
        },
        {
            id: 's3',
            name: 'Basketball',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Official size indoor/outdoor basketball'
        },
        {
            id: 's4',
            name: 'Running Shoes',
            price: 89.99,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Lightweight running shoes with cushioning'
        }
    ],
    kitchen: [
        {
            id: 'kt1',
            name: 'Stand Mixer',
            price: 249.99,
            image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Professional stand mixer for baking enthusiasts'
        },
        {
            id: 'kt2',
            name: 'Knife Set',
            price: 129.99,
            image: 'https://images.unsplash.com/photo-1578643463396-0997cb5328c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Complete set of professional kitchen knives'
        },
        {
            id: 'kt3',
            name: 'Coffee Maker',
            price: 79.99,
            image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Programmable coffee maker with thermal carafe'
        },
        {
            id: 'kt4',
            name: 'Dutch Oven',
            price: 89.99,
            image: 'https://images.unsplash.com/photo-1585837575652-267c041d77d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Enameled cast iron dutch oven for cooking'
        }
    ],
    furniture: [
        {
            id: 'f1',
            name: 'Modern Sofa',
            price: 899.99,
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Contemporary 3-seater sofa with premium fabric'
        },
        {
            id: 'f2',
            name: 'Coffee Table',
            price: 299.99,
            image: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Wooden coffee table with storage shelf'
        },
        {
            id: 'f3',
            name: 'Dining Set',
            price: 699.99,
            image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Modern dining table with 6 chairs'
        },
        {
            id: 'f4',
            name: 'Bookshelf',
            price: 199.99,
            image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            description: 'Contemporary bookshelf with multiple compartments'
        }
    ]
};

// Shopping Cart
let cart = [];

// DOM Elements
const productContainers = {
    men: document.getElementById('men-products'),
    women: document.getElementById('women-products'),
    kids: document.getElementById('kids-products'),
    sports: document.getElementById('sports-products'),
    kitchen: document.getElementById('kitchen-products'),
    furniture: document.getElementById('furniture-products')
};

const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.querySelector('.close');
const cartItemsContainer = document.getElementById('cart-items');
const cartCountElement = document.getElementById('cart-count');
const cartTotalElement = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Display Products
function displayProducts(products, container) {
    if (!container) return; // Skip if container doesn't exist
    
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart('${product.id}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Initialize Products
Object.keys(products).forEach(category => {
    displayProducts(products[category], productContainers[category]);
});

// Cart Functions
function addToCart(productId) {
    const product = findProductById(productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        updateCartDisplay();
        showNotification(`${product.name} added to cart!`);
    }
}

function findProductById(productId) {
    for (const category in products) {
        const product = products[category].find(p => p.id === productId);
        if (product) return product;
    }
    return null;
}

function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        cartTotalElement.textContent = '0.00';
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})" class="quantity-btn">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})" class="quantity-btn">+</button>
                <button onclick="removeFromCart('${item.id}')" class="remove-item">×</button>
            </div>
        </div>
    `).join('');
    
    cartTotalElement.textContent = total.toFixed(2);
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartDisplay();
    }
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        const removedItem = cart[index];
        cart.splice(index, 1);
        updateCartDisplay();
        showNotification(`${removedItem.name} removed from cart!`);
    }
}

// Modal Functions
document.querySelector('a[href="#cart"]').addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
});

closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Checkout Function
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    showNotification('Thank you for your purchase!');
    cart = [];
    updateCartDisplay();
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after animation
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#cart') return; // Skip for cart link
        
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});