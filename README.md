# Inlab_web


# TL,DR:
Inlab_web is an attempt to fully migrate Inlab [website](http:/http://inlab.nisci.gov.vn/) to NextJs


# Reason
  - React in a nutshell, component breakdown for more maintainance capability
  - Built-in [Link component](https://nextjs.org/docs/api-reference/next/link) and [useRouter hook](https://nextjs.org/docs/api-reference/next/router) with prefetch, native navigate and routing (++UX)
  - [File-system based router](https://nextjs.org/docs/routing/introduction) built on the concept of pages (++ readable code structure)
  - Server Side Rendering and Static Site Generators
  - Ability to intergrate with many plugin: Babel, TypeScript, Eslint (++ dev exp && code convetion)
  - ... (on update)

# Front-end

### &emsp;Component
  - Reuseable component can be found at `./components/` ~  ~ a.k.a ~ ~ `@components/`
  - Component comes with component-level CSS ([read more](#css))

### &emsp;CSS
  - Module CSS mostly for clear boundary between pages and pages, pages and components, components and components
  - Inline JSX style tag for page top-level CSS: `html,body,...`  (in research for Module CSS replacement)
  - App top-level CSS likes `Bootstrap` `AOS` **MUST** be intitated at _app.js
  - CSS files should be centralized in `./styles/` ~ ~ a.k.a ~ ~ `@styles/`


# Back-end

### &emsp;API
  - API should be write in TypeScript due to complex nature of JSON
  - API should have APIdoc
  - API inherits [file-system based router](https://nextjs.org/docs/routing/introduction)
  - API should have HTTP response code (mention in [coding covention](https://docs.google.com/document/d/1wQ-QT7HJtQ9xPkBAPFiolEmZcoOXSsNVjhSxFlWaahs/edit?usp=sharing))
  - Can be found at `./pages/api/` ~ ~ a.k.a ~ ~ `@api/`

### &emsp;Authorization
  - JWT tokens implements for intergrated with mobile apps
    - long time access token (1 month) or short time access token (1 hour) with long time refresh token (1 month) (needing testing)
    - data contain inside JWT:
  - Middleware handler (NextApiHandler) for authentication can be found at `./utils/authentication` ~ ~ a.k.a ~ ~ `@utils/authentication`

### &emsp;Database Connection
  - Database connection **MUST** follow singleton patern, implementation can be found at `./utils/database.js` ~ ~ a.k.a ~ ~ `@utils/database`

# Plugins

### &emsp;ESLint
  - Config can be found at `.eslintrc.json`
  - Babel ESLint for `*.js` `*.jsx` file, TypeScript ESLint for `*.ts` `*.tsx` file
  - Mainly use [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)

### &emsp;Babel
  - Config can be found at `.babelrc`
  - Babel module import resolver:

### &emsp;Prettier
  - Config can be found at `.prettierrc`

# DotEnv


# In Development
  - Docker Compose(Nginx, PostgreSQL, Node)
  - pm2 
  - Instruction (setup, run, build, dev,... )
  - Readme (Table of content,...)





