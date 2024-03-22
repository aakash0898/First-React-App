# React Intro

React JS
.ts extension used

SPA (Single page application)
Components (Group codes)
Data Binding => uni Directional, flow of data
Virtual DOM

                        home.jsx(combination of js and html)
      BannerSection.jsx         Navbar.jsx          Section.jsx           Footer.jsx

                        home.jsx            aboutUs.jsx

Virtual DOM:
I updated<p> in <body> ----> Virtual DOM -----> DOm -----> HTML Manipulation reflected on web page

SPA:

index.html

<html>
    <body>
        <div id="root">
        </div>
    </body>
</html>

We will access root in js and write content from there.

Components:

> > Class components (old version)
> > Function Components (new version)(most commonly used now)

Redux (State Management)
Hooks (Lifecycle methods)

command:-> npx create-react-app project-name

# Run
cd project-name (to change the directory to your project)
npm start(to start project)

### Components & Workflow
## State & Props