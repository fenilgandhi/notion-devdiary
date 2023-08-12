///////////////////////////////////////////////////////////////
// Website Details
///////////////////////////////////////////////////////////////

// This is the id of your root page
export const rootNotionPageId = '067dd719a912471ea9a3ac10710e7fdf'; // Notion-React-X
// export const rootNotionPageId = '9cf926b89a2941898d3a0f93e0d1f40e';  // Useful Websites

// rootNotionSpaceId is optional; set it to undefined if you don't want to// use it.
export const rootNotionSpaceId = undefined;


// This is required for the meta description of your website
export const socialDescription = `Fenil Gandhi's Portfolio`;
export const socialImage = '/images/logo.png';
export const enableDarkMode = true;


///////////////////////////////////////////////////////////////
// Deployment Options
///////////////////////////////////////////////////////////////
// Having this enabled can be pretty expensive as it re-generates preview
// images each time a page is built.
export const previewImagesEnabled = true

// Whether to use the official public Notion API or the unofficial private API.
// Note that the official API doesn't expose formatting options for many blocks
// and is currently not as well-supported.
// If you want to use the official API, you must provide a NOTION_TOKEN env var.
export const useOfficialNotionAPI =
  false ||
  (process.env.USE_OFFICIAL_NOTION_API === 'true' && process.env.NOTION_TOKEN)

export const isDev =
  process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

export const port = process.env.PORT || 3000
export const rootDomain = isDev ? `localhost:${port}` : null



