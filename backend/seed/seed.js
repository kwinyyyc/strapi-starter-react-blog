module.exports = {
  categories: [{ name: "news" }, { name: "trends" }],
  articles: [
    {
      mimeType: "image/jpeg",
      imageFileName: "blog-header-network.jpg",
      publish_at: new Date(),
      category: 1,
      status: "published",
      title: "Thanks for giving this Starter a try!",
      content: `# Thanks
    We hope that this starter will make you want to discover Strapi in more details.
    
    ## Features
    
    - 2 Content types: Article, Category
    - Permissions set to 'true' for article and category
    - 2 Created Articles
    - 3 Created categories
    - Responsive design using UIkit
    
    ## Pages
    
    - "/" display every articles
    - "/article/:id" display one article
    - "/category/:id" display articles depending on the category`,
    },
    {
      mimeType: "image/jpeg",
      imageFileName: "blog-header-balloon.jpg",
      publish_at: new Date(),
      category: 2,
      status: "published",
      title: "Enjoy!",
      content: "Have fun!",
    },
  ],
};
