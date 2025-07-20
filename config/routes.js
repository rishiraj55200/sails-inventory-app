module.exports.routes = {
  // Product Routes
  'POST /api/v1/products': { action: 'products/create' },
  'GET /api/v1/products': { action: 'products/find' },
  'GET /api/v1/products/:id': { action: 'products/find-one' },
  'PATCH /api/v1/products/:id': { action: 'products/update' },
  'DELETE /api/v1/products/:id': { action: 'products/destroy' },

  // Customer Routes
  'POST /api/v1/customers': { action: 'customers/create' },
  'GET /api/v1/customers': { action: 'customers/find' },
  'GET /api/v1/customers/:id/orders': { action: 'customers/find-orders' },
  
  // Order Routes
  'POST /api/v1/orders': { action: 'orders/create' },
  'GET /api/v1/orders': { action: 'orders/find' },
  'GET /api/v1/orders/:id': { action: 'orders/find-one' },
  'PATCH /api/v1/orders/:id/status': { action: 'orders/update-status' },
};