 // Check if the current page is FaceBook
 if (window.location.hostname.includes("facebook.com")) {
    // Check if the current URL is not already Fb Feeds
    if (!window.location.href.includes("https://www.facebook.com/?filter=all&sk=h_chr")) {
      // Redirect to Fb Feeds
      window.location.href = "https://www.facebook.com/?filter=all&sk=h_chr";
    }
  }