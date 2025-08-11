// Product data
const products = {
    1: {
        name: "Premium Meal Plan",
        price: "$49.99",
        image: "public/premium-meal-plan-recipies.png",
        description: "Transform your eating habits with our comprehensive 30-day personalized meal plan. Designed by certified nutritionists, this plan includes detailed recipes, grocery shopping lists, and nutritional guidance tailored to your specific goals.",
        features: [
            "30 days of personalized meal plans",
            "Detailed grocery shopping lists",
            "Step-by-step recipe instructions",
            "Nutritional information for every meal",
            "Portion control guidelines",
            "Meal prep tips and tricks",
            "24/7 customer support"
        ],
        category: "Meal Plans",
        rating: 4.8,
        reviews: 156
    },
    2: {
        name: "Nutrition Tracker Pro",
        price: "$19.99/mo",
        image: "public/nutrition-tracker-premium.png",
        description: "Take your nutrition tracking to the next level with our Pro subscription. Get advanced features, AI-powered insights, and personalized recommendations to optimize your health journey.",
        features: [
            "Advanced meal logging with barcode scanner",
            "AI-powered nutrition insights",
            "Personalized meal recommendations",
            "Detailed analytics and progress tracking",
            "Integration with fitness devices",
            "Priority customer support",
            "Export data functionality"
        ],
        category: "Subscriptions",
        rating: 4.9,
        reviews: 203
    },
    3: {
        name: "Healthy Living Guide",
        price: "$29.99",
        image: "public/healthy-lifestyle-guide.png",
        description: "A comprehensive 200-page guide to building sustainable healthy habits without exercise routines. Learn the science behind nutrition, meal timing, and lifestyle changes that actually work.",
        features: [
            "200+ pages of expert content",
            "Science-based nutrition principles",
            "Meal timing optimization strategies",
            "Habit formation techniques",
            "Real-world case studies",
            "Printable meal planning templates",
            "Lifetime access to updates"
        ],
        category: "Guides",
        rating: 4.7,
        reviews: 89
    },
    4: {
        name: "Weight Loss Meal Plan",
        price: "$69.99",
        image: "public/weight-loss-meal-plan.jpg",
        description: "Achieve sustainable weight loss with our scientifically designed 60-day meal plan. Focused on portion control and nutrient density, this plan helps you lose weight without feeling deprived.",
        features: [
            "60 days of weight-loss focused meals",
            "Calorie-controlled portions",
            "High-protein, nutrient-dense recipes",
            "Weekly progress tracking sheets",
            "Hunger management strategies",
            "Plateau-breaking techniques",
            "Maintenance phase guidance"
        ],
        category: "Meal Plans",
        rating: 4.6,
        reviews: 124
    },
    5: {
        name: "Daily Nutrition Pack",
        price: "$39.99",
        image: "https://i.pinimg.com/736x/ed/0b/fc/ed0bfc19c324860d0f780811d242fe73.jpg",
        description: "Essential vitamins and minerals pack designed to complement your healthy eating journey. Made from natural ingredients and third-party tested for purity and potency.",
        features: [
            "30-day supply of essential nutrients",
            "Third-party tested for purity",
            "Made from natural ingredients",
            "Supports energy and immunity",
            "Easy-to-swallow capsules",
            "No artificial colors or preservatives",
            "Money-back guarantee"
        ],
        category: "Supplements",
        rating: 4.5,
        reviews: 67
    },
    6: {
        name: "Meal Timing Mastery",
        price: "$24.99",
        image: "public/meal-timing-guide.png",
        description: "Master the science of when to eat for optimal digestion, energy, and weight management. This guide reveals the secrets of meal timing that can transform your health.",
        features: [
            "Science-backed meal timing strategies",
            "Circadian rhythm optimization",
            "Digestive health improvement",
            "Energy level stabilization",
            "Weight management techniques",
            "Practical implementation guides",
            "Quick reference charts"
        ],
        category: "Guides",
        rating: 4.8,
        reviews: 92
    }
};

// Load product details
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId && products[productId]) {
        const product = products[productId];
        loadProductDetails(product);
        updateBreadcrumb(product.name);
    } else {
        // Redirect to products page if invalid ID
        window.location.href = 'products.html';
    }
});

function loadProductDetails(product) {
    const container = document.getElementById('product-details');
    
    container.innerHTML = `
        <div class="col-lg-6">
            <img src="${product.image}" alt="${product.name}" class="img-fluid product-image">
        </div>
        <div class="col-lg-6">
            <div class="product-info">
                <div class="mb-3">
                    <span class="badge bg-primary">${product.category}</span>
                </div>
                <h1 class="mb-3">${product.name}</h1>
                <div class="d-flex align-items-center mb-3">
                    <div class="stars me-2">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="text-muted">(${product.reviews} reviews)</span>
                </div>
                <h2 class="price mb-4">${product.price}</h2>
                <p class="lead mb-4">${product.description}</p>
                
                <h4 class="mb-3">What's Included:</h4>
                <ul class="list-unstyled mb-4">
                    ${product.features.map(feature => `
                        <li class="mb-2">
                            <i class="fas fa-check text-success me-2"></i>
                            ${feature}
                        </li>
                    `).join('')}
                </ul>
                
                <div class="d-flex gap-3 mb-4">
                    <div class="quantity-controls">
                        <label for="quantity" class="form-label">Quantity:</label>
                        <input type="number" class="form-control quantity-selector" id="quantity" value="1" min="1" max="10">
                    </div>
                </div>
                
                <div class="d-grid gap-2 d-md-flex">
                    <button class="btn btn-primary btn-lg flex-fill" onclick="addToCart()">
                        <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                    </button>
                    <button class="btn btn-outline-primary btn-lg" onclick="addToWishlist()">
                        <i class="fas fa-heart me-2"></i>Wishlist
                    </button>
                </div>
                
                <div class="mt-4 pt-4 border-top">
                    <div class="row text-center">
                        <div class="col-4">
                            <i class="fas fa-shipping-fast fa-2x text-primary mb-2"></i>
                            <p class="small mb-0">Fast Delivery</p>
                        </div>
                        <div class="col-4">
                            <i class="fas fa-shield-alt fa-2x text-primary mb-2"></i>
                            <p class="small mb-0">Secure Payment</p>
                        </div>
                        <div class="col-4">
                            <i class="fas fa-undo fa-2x text-primary mb-2"></i>
                            <p class="small mb-0">30-Day Return</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-warning"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-warning"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-warning"></i>';
    }
    
    return stars;
}

function updateBreadcrumb(productName) {
    document.getElementById('product-breadcrumb').textContent = productName;
}

function addToCart() {
    const quantity = document.getElementById('quantity').value;
    alert(`Added ${quantity} item(s) to cart!`);
}

function addToWishlist() {
    alert('Added to wishlist!');
}
