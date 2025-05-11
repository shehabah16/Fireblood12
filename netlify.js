// This script handles routing for Netlify
// It ensures that all paths redirect to the root

// Check if the current URL is not the root
if (window.location.pathname !== '/' && 
    window.location.pathname !== '/index.html') {
  console.log('Netlify redirect: Redirecting from', window.location.pathname, 'to /');
  
  // Replace the current URL with the root URL
  window.history.replaceState(null, null, '/');
}

console.log('Netlify routing system initialized');