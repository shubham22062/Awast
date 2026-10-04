# Awast Clothing Brand Website

Awast is a modern clothing brand website designed for a fashion label focused on elevated everyday essentials, premium streetwear, and timeless style. The project combines a polished storefront experience with a lightweight backend foundation for future product, cart, and order APIs.

## Overview

This repository contains the complete frontend and backend structure for the Awast brand website, including:

- A responsive landing page with hero banners and brand storytelling
- Featured collections and product highlights
- Shop and catalog layout for apparel categories
- About section, brand values, and editorial content
- Contact and newsletter section for customer engagement
- Express backend foundation for future storefront APIs and admin workflows

## Brand Vision

Awast blends minimal design, comfort, and confidence. The brand is built for customers who want versatile pieces that transition from everyday wear to statement styling without sacrificing quality or identity.

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- CSS

### Backend

- Node.js
- Express

## Project Structure

```text
Awast/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   └── index.html
├── backend/
│   ├── src/
│   └── package.json
├── README.md
└── .gitignore
```

## Features

### Current Website Experience

- Clean and modern landing page
- Fashion-focused hero and promotional sections
- Modular product display structure
- Responsive build for mobile and desktop users

### Backend Foundation

- Express server setup
- API-ready architecture for products, cart, and orders
- Easy extension for future authentication and admin features

## Getting Started

### 1. Install frontend dependencies

```bash
cd frontend
npm install
```

### 2. Run the frontend locally

```bash
npm run dev
```

The frontend typically runs on:

```text
http://localhost:5173
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

### 4. Run the backend

```bash
npx tsx src/index.ts
```

The backend server is configured to run on port 8000.

## Scripts

### Frontend

```bash
npm run dev     # start development server
npm run build   # create production build
npm run preview # preview production build
```

### Backend

```bash
npx tsx src/index.ts   # start Express API server
```

## Future Roadmap

- Product catalog with category filtering
- Shopping cart and wishlist functionality
- Checkout flow and order management
- User authentication and profile pages
- Admin dashboard for inventory and content management
- Stripe or payment gateway integration
- Deployments for production hosting

## Contributing

Contributions are welcome as the project evolves. To contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request with a description of the update

## License

This project is currently intended for learning and portfolio/demo purposes.

## Contact

For brand inquiries or development discussions, connect through the official Awast website channels or the project maintainers.
