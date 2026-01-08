browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);
    
    const searchParams = url.searchParams;
    const query = searchParams.get('q') || searchParams.get('query') || searchParams.get('search_query') || '';
    
    const i2pPattern = /^([a-z0-9-]+\.)*[a-z0-9-]+\.i2p$/i;
    
    if (i2pPattern.test(query.trim())) {
      return { redirectUrl: 'http://' + query.trim().toLowerCase() };
    }
    
    return {};
  },
  {
    urls: [
      "*://*.google.com/*",
      "*://*.duckduckgo.com/*",
      "*://*.bing.com/*",
      "*://*.startpage.com/*",
      "*://*.search.yahoo.com/*"
    ]
  },
  ["blocking"]
);
