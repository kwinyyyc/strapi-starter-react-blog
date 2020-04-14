# Strapi Starter React Blog

This repo aims to enabling people to quickly generate a playground environment to actually get started playing with Strapi. It has the basic features for both frontend and backend as a blogging platform.

This is a starter cloned from Official strapi repository for which you can find here
[repo](https://github.com/strapi/strapi-starter-react-blog)
[tutorial](https://strapi.io/blog/build-a-blog-with-react-strapi-and-apollo)

### Initial Deployment Steps

1. Backend deployment

   [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/kwinyyyc/strapi-starter-react-blog)

   1.1 Log in your Heroku account

   1.2 Type in `App name`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` and `CLOUDINARY_CLOUD_NAME`

   1.3 Click the `Deploy app` button and wait for the build to complete

   1.4 Click the `View` button

1. Frontend deployment

   [![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kwinyyyc/strapi-starter-react-blog)

   2.1 Log in your Netlify account

   2.2 Connect to your github account

   2.3 Input the `Repository name` and `REACT_APP_BACKEND_URL` with the backend Strapi on Heroku `https://${APP_NAME}.herokuapp.com`

   2.4 Click the `Save & Deploy` button

![screenshot image](/screenshot.png)

### Continuous Deployment Steps

### Enhancement

- Upgrade strapi version that supports Single Type
- Restrict only the owner to edit the blog post
  <a href="https://strapi.io/documentation/3.0.0-beta.x/guides/is-owner.html" target="_blank">
  (original guide)
  </a>
- Draft system to publish blog post when it is ready
  <a href="https://strapi.io/documentation/3.0.0-beta.x/guides/draft.html" target="_blank">
  (original guide)
  </a>
- Scheduled date of publication
  <a href="https://strapi.io/documentation/3.0.0-beta.x/guides/scheduled-publication.html" target="_blank">
  (original guide)
  </a>
- Create a slug system
  <a href="https://strapi.io/documentation/3.0.0-beta.x/guides/slug.html" target="_blank">
  (original guide)
  </a>

### Getting started

**Clone the repository and install dependencies**

```bash
git clone https://github.com/strapi/strapi-starter-react-blog.git
cd strapi-starter-react-blog

# Using yarn
yarn setup:yarn

# Using npm
npm run setup:npm
```

### Scaffold your project

This command will launch both of your backend and frontend server and do a data migration in your backend server

```bash
# Using yarn
yarn build:yarn
yarn develop:yarn

# Using npm
npm run build:npm
npm run develop:npm
```

Alternatively, you can still start your servers separately:

### Start the backend server

```bash
cd backend

# Using yarn
yarn build
yarn seed
yarn develop

# Using npm
npm run build
npm run seed
npm run develop
```

### Start the frontend server

```bash
cd frontend

# Using yarn
yarn develop

# Using npm
npm run develop
```

React server is running here => [http://localhost:3000](http://localhost:3000)
Strapi server is running here => [http://localhost:1337](http://localhost:1337)

Enjoy this starter
