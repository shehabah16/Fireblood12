// Site-wide constants
export const APP_TITLE = "Fireblood";
export const APP_DESCRIPTION = "Power your day with Fireblood - the premium health supplement for optimal performance.";

// This handles the base URL for routing in different environments
export const getBasePath = () => {
  // Check if we're in a Replit environment (deployment or preview)
  const isReplit = 
    typeof window !== 'undefined' && 
    (window.location.hostname.includes('replit.dev') || 
     window.location.hostname.includes('replit.app'));

  // Return an appropriate base path based on the environment
  return isReplit ? window.location.pathname.split('/').slice(0, -1).join('/') || '/' : '/';
};