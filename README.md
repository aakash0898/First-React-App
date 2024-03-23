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

### State => Data required for a components

<!-- var name = 'DevTown' -->
<!-- State = {
    [
        {

        },
        {

        }
    ]
}-->

## Hooks --> useState(),SetState()

import {usestate} from 'react';
const [variable, func] = usestate();
e.g --> const [count, setCount] = useState();

const [num, setNum] = useState(5);
num += 1;

btn =>

### Props (Where we will be passing data among the components)
## Parent Nodee --> Child Node
## eg. App.js -> ClassComponent.jsx | FunctionComponent.jsx

<FunctionComponent name='DevTown' age={25}>


## Routing and Layouts in ReactJs
Router >> Routes >> Route
/contact /aboutus /signin /signup

npm i react-router-dom

workflow wrt routes
>> index.js (Browser Router) >> App.js >> diff routes


## Workflow index,js >> app.js >> pages


//webpage
>> /contact /aboutus /signin /signup

Layouts (HOC || High Order Component)
/ParentSignInAndUp
>> Nav and Footer

<!-- HOC's can add additional info/features to the existing components-->

## React lifecycle method
render(){
}

CDM(component did mount)
componentDidMount(){
    
}

1 web page >> 4 components >> rest 2 components

componentDidUpdate(){
    input tab => enter
}

componentWillUnmount(){

}

# useEffect