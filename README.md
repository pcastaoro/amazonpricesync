
# NestJS Amazon-Shopify Sync Project

This project is a NestJS-based application that synchronizes product data between Amazon and Shopify. The application reads product data from Amazon and updates or creates corresponding products in Shopify.

---

## 📂 **Project Structure**
```
src/
├── amazon/                    # Amazon-related services and configuration
│   ├── amazon.config.ts       # Configuration for Amazon API
│   ├── amazon.service.ts      # Amazon service for retrieving product data
├── shopify/                   # Shopify-related services and DTOs
│   ├── shopify.client.ts      # HTTP client for Shopify API calls
│   ├── shopify.module.ts      # Module for Shopify services
│   ├── shopify.product.dto.ts # DTO for Shopify product data
│   ├── shopify.service.ts     # Shopify service for handling product updates
├── product/                   # Main product synchronization logic
│   ├── product.controller.ts  # Controller for product-related endpoints
│   ├── product.module.ts      # Module for product services
│   ├── product.service.ts     # Service for syncing product data
└── utils/                     # Utility functions
```

---

## 🚀 **Setup and Installation**
### 1. **Install Dependencies**
```bash
  cd nestjs-amazon-shopify-sync
  npm install
```

### 2. **Set Up Environment Variables**
Create a `.env` file in the root directory and add the following:

```env
# Amazon Configuration
AMAZON_BASE_URL=https://amazon-api.example.com
AMAZON_ACCESS_TOKEN=your-amazon-token

# Shopify Configuration
SHOPIFY_BASE_URL=https://your-shop.myshopify.com/admin/api/2024-01
SHOPIFY_ACCESS_TOKEN=your-shopify-token
```

### 4. **Start the Application**
```bash
  npm run start:dev
```

---

## 🛠️ **How It Works**
1. **Amazon Sync Flow**
    - Loads product links from a CSV file.
    - Extracts product ID from the Amazon link.
    - Retrieves product data from Amazon.
    - Attempts to update existing product data in Shopify.
    - If the product does not exist in Shopify, it creates a new one.

2. **Error Handling**
    - If the Shopify product retrieval fails, it creates a new product.
    - If the update fails, the error is logged for further analysis.

---

## 📦 **Main Components**
### 1. **Amazon Service** (`amazon.service.ts`)
- Fetches product data from Amazon using the configured API.

### 2. **Shopify Service** (`shopify.service.ts`)
- Fetches and updates product data on Shopify.
- Uses DTOs (`shopify.product.dto.ts`) to validate product data.

### 3. **Product Service** (`product.service.ts`)
- Handles the main business logic for product synchronization.
- Logs events and errors for monitoring.

---

## ✅ **API Endpoints**
### 1. **GET /products/sync**
- Triggers Amazon-to-Shopify product synchronization.

### 2. **POST /products**
- Creates a new product in Shopify based on Amazon data.

---

## 🧪 **Testing**
### Run Tests:
```bash
  npm run test
```

---

## 📝 **Future Improvements**
- ✅ Store failed product sync attempts for retry.
- ✅ Implement more detailed logging and monitoring.
- ✅ Improve handling for specific Amazon/Shopify API errors.
