// Menu Data
const menuItems = [
    // Hot Drinks
    {
        id: 1,
        name: "Classic Espresso",
        description: "Rich and bold single shot of our house espresso",
        price: 2.75,
        category: "hot",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: "Cappuccino",
        description: "Espresso with steamed milk and a thick layer of foam",
        price: 4.25,
        category: "hot",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        name: "Latte",
        description: "Smooth espresso with velvety steamed milk",
        price: 4.50,
        category: "hot",
        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        name: "Americano",
        description: "Espresso shots topped with hot water for a lighter taste",
        price: 3.25,
        category: "hot",
        image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        name: "Mocha",
        description: "Espresso with chocolate syrup, steamed milk and whipped cream",
        price: 5.25,
        category: "hot",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        name: "Hot Chocolate",
        description: "Rich chocolate with steamed milk, topped with whipped cream",
        price: 4.00,
        category: "hot",
        image: "https://images.unsplash.com/photo-1542990253-a781e04c0082?w=400&h=300&fit=crop"
    },
    
    // Cold Drinks
    {
        id: 7,
        name: "Iced Latte",
        description: "Chilled espresso with cold milk over ice",
        price: 4.75,
        category: "cold",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        name: "Cold Brew",
        description: "Smooth, slow-steeped coffee served over ice",
        price: 4.25,
        category: "cold",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        name: "Iced Caramel Macchiato",
        description: "Vanilla syrup, milk, espresso, caramel drizzle over ice",
        price: 5.50,
        category: "cold",
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        name: "Frappuccino",
        description: "Blended coffee with ice, milk and your choice of flavor",
        price: 5.75,
        category: "cold",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        name: "Iced Green Tea",
        description: "Refreshing green tea served over ice with a hint of lemon",
        price: 3.50,
        category: "cold",
        image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=400&h=300&fit=crop"
    },
    
    // Pastries
    {
        id: 12,
        name: "Croissant",
        description: "Buttery, flaky French pastry baked fresh daily",
        price: 3.25,
        category: "pastries",
        image: "https://images.unsplash.com/photo-1555507036-ab794f4ade0a?w=400&h=300&fit=crop"
    },
    {
        id: 13,
        name: "Blueberry Muffin",
        description: "Moist muffin bursting with fresh blueberries",
        price: 3.75,
        category: "pastries",
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop"
    },
    {
        id: 14,
        name: "Chocolate Chip Cookie",
        description: "Warm, gooey cookie with premium chocolate chips",
        price: 2.50,
        category: "pastries",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop"
    },
    {
        id: 15,
        name: "Cinnamon Roll",
        description: "Sweet roll with cinnamon and cream cheese frosting",
        price: 4.25,
        category: "pastries",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=300&fit=crop"
    },
    {
        id: 16,
        name: "Scone",
        description: "Traditional British scone served with jam and clotted cream",
        price: 3.50,
        category: "pastries",
        image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=400&h=300&fit=crop"
    },
    
    // Food
    {
        id: 17,
        name: "Avocado Toast",
        description: "Sourdough toast topped with mashed avocado and everything seasoning",
        price: 8.75,
        category: "food",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop"
    },
    {
        id: 18,
        name: "Breakfast Sandwich",
        description: "Egg, bacon, and cheddar cheese on a fresh croissant",
        price: 7.50,
        category: "food",
        image: "https://images.unsplash.com/photo-1553905346-3b6e399115b4?w=400&h=300&fit=crop"
    },
    {
        id: 19,
        name: "Bagel with Cream Cheese",
        description: "Toasted bagel with our house-made cream cheese",
        price: 4.25,
        category: "food",
        image: "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?w=400&h=300&fit=crop"
    },
    {
        id: 20,
        name: "Quiche Slice",
        description: "Homemade quiche with spinach, mushrooms, and goat cheese",
        price: 6.25,
        category: "food",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop"
    }
];

// Cart array to store items
let cart = [];

// Get category icon
function getCategoryIcon(category) {
    switch(category) {
        case 'hot': return '<i class="fas fa-mug-hot"></i>';
        case 'cold': return '<i class="fas fa-glass-whiskey"></i>';
        case 'pastries': return '<i class="fas fa-cookie-bite"></i>';
        case 'food': return '<i class="fas fa-hamburger"></i>';
        default: return '<i class="fas fa-utensils"></i>';
    }
}

// Render menu items
function renderMenu(filter = 'all') {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';
    
    const filteredItems = filter === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === filter);
    
    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 2rem;">No items in this category</p>';
        return;
    }
    
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop'">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-category">
                        ${getCategoryIcon(item.category)}
                        ${item.category}
                    </span>
                    <button class="add-to-cart" data-id="${item.id}">
                        <i class="fas fa-plus"></i>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = parseInt(btn.getAttribute('data-id'));
            addToCart(itemId);
        });
    });
}

// Add item to cart
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(c => c.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCart();
    openCart();
    
    // Add visual feedback
    const btn = event.target.closest('.add-to-cart');
    if (btn) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i><span>Added!</span>';
        btn.style.background = 'linear-gradient(135deg, var(--success) 0%, #2ECC71 100%)';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)';
        }, 1000);
    }
}

// Update cart display
function updateCart() {
    const cartBadge = document.getElementById('cartBadge');
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) {
        cartBadge.textContent = totalItems;
    }
    
    // Clear cart items
    if (cartItems) {
        cartItems.innerHTML = '';
    }
    
    if (cart.length === 0) {
        if (cartEmpty) cartEmpty.classList.add('active');
        if (cartFooter) cartFooter.classList.remove('active');
        if (cartTotal) cartTotal.textContent = '$0.00';
        return;
    }
    
    if (cartEmpty) cartEmpty.classList.remove('active');
    if (cartFooter) cartFooter.classList.add('active');
    
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        if (cartItems) {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop'">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="cart-qty-btn" onclick="decreaseQuantity(${item.id})">-</button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="cart-qty-btn" onclick="increaseQuantity(${item.id})">+</button>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        }
    });
    
    if (cartTotal) {
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

// Increase quantity
function increaseQuantity(itemId) {
    const item = cart.find(c => c.id === itemId);
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

// Decrease quantity
function decreaseQuantity(itemId) {
    const itemIndex = cart.findIndex(c => c.id === itemId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity -= 1;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        updateCart();
    }
}

// Remove from cart
function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(c => c.id === itemId);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        updateCart();
    }
}

// Open cart
function openCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    const cartDrawer = document.getElementById('cartDrawer');
    if (cartOverlay) cartOverlay.classList.add('active');
    if (cartDrawer) cartDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close cart
function closeCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    const cartDrawer = document.getElementById('cartDrawer');
    if (cartOverlay) cartOverlay.classList.remove('active');
    if (cartDrawer) cartDrawer.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    // Render menu
    renderMenu('all');
    
    // Category filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter menu
            const category = btn.getAttribute('data-category');
            renderMenu(category);
        });
    });
    
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }
    
    // Cart close
    const cartClose = document.getElementById('cartClose');
    if (cartClose) {
        cartClose.addEventListener('click', closeCart);
    }
    
    // Cart overlay
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }
    
    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close nav when clicking links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Checkout button - open order modal
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            closeCart();
            openOrderModal();
        });
    }
    
    // Order modal
    const orderModalClose = document.getElementById('orderModalClose');
    if (orderModalClose) {
        orderModalClose.addEventListener('click', closeOrderModal);
    }
    
    const orderModalOverlay = document.getElementById('orderModalOverlay');
    if (orderModalOverlay) {
        orderModalOverlay.addEventListener('click', closeOrderModal);
    }
    
    const backToCart = document.getElementById('backToCart');
    if (backToCart) {
        backToCart.addEventListener('click', () => {
            closeOrderModal();
            openCart();
        });
    }
    
    // Order form submission
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateOrderForm()) {
                placeOrder();
            }
        });
    }
    
    // Phone input formatting
    const customerPhone = document.getElementById('customerPhone');
    if (customerPhone) {
        customerPhone.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 10) value = value.slice(0, 10);
            if (value.length >= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
            } else if (value.length >= 3) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            }
            e.target.value = value;
        });
    }
    
    // Confirmation modal
    const confirmModalOverlay = document.getElementById('confirmModalOverlay');
    if (confirmModalOverlay) {
        confirmModalOverlay.addEventListener('click', closeConfirmationModal);
    }
    
    const newOrderBtn = document.getElementById('newOrderBtn');
    if (newOrderBtn) {
        newOrderBtn.addEventListener('click', () => {
            closeConfirmationModal();
            cart = [];
            updateCart();
            // Reset form
            if (orderForm) orderForm.reset();
            // Scroll to menu
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Open order modal
function openOrderModal() {
    const orderModal = document.getElementById('orderModal');
    const orderModalOverlay = document.getElementById('orderModalOverlay');
    
    // Populate order summary
    const summaryItems = document.getElementById('summaryItems');
    const summaryTotal = document.getElementById('summaryTotal');
    
    if (summaryItems) {
        summaryItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            const summaryItem = document.createElement('div');
            summaryItem.className = 'summary-item';
            summaryItem.innerHTML = `
                <span class="summary-item-name">${item.name}</span>
                <span class="summary-item-qty">x${item.quantity}</span>
                <span class="summary-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            `;
            summaryItems.appendChild(summaryItem);
        });
        if (summaryTotal) {
            summaryTotal.textContent = `$${total.toFixed(2)}`;
        }
    }
    
    if (orderModal) orderModal.classList.add('active');
    if (orderModalOverlay) orderModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close order modal
function closeOrderModal() {
    const orderModal = document.getElementById('orderModal');
    const orderModalOverlay = document.getElementById('orderModalOverlay');
    if (orderModal) orderModal.classList.remove('active');
    if (orderModalOverlay) orderModalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Validate order form
function validateOrderForm() {
    let isValid = true;
    
    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    
    if (name === '') {
        document.getElementById('nameError').textContent = 'Please enter your name';
        isValid = false;
    } else if (name.length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
        isValid = false;
    }
    
    // Phone validation - check if it has 10 digits
    const phoneDigits = phone.replace(/\D/g, '');
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Please enter your phone number';
        isValid = false;
    } else if (phoneDigits.length !== 10) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number';
        isValid = false;
    }
    
    return isValid;
}

// Place order
function placeOrder() {
    closeOrderModal();
    
    // Calculate total
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    
    // Show confirmation
    const confirmModal = document.getElementById('confirmationModal');
    const confirmModalOverlay = document.getElementById('confirmModalOverlay');
    const confirmTotal = document.getElementById('confirmTotal');
    
    if (confirmTotal) {
        confirmTotal.textContent = `$${total.toFixed(2)}`;
    }
    
    if (confirmModal) confirmModal.classList.add('active');
    if (confirmModalOverlay) confirmModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close confirmation modal
function closeConfirmationModal() {
    const confirmModal = document.getElementById('confirmationModal');
    const confirmModalOverlay = document.getElementById('confirmModalOverlay');
    if (confirmModal) confirmModal.classList.remove('active');
    if (confirmModalOverlay) confirmModalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}
