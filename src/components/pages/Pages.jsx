import React from "react"
// This line imports the React library, which is necessary for creating React components.
import Header from "../common/header/Header"
// This imports the `Header` component from the file located at `"../common/header/Header"` relative to the current file. 
// It's likely that this `Header` component represents the header section of a web page.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// This line imports components from the `react-router-dom` package. Specifically,
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"

const Pages = () => {
  return (
    <>
    {/* This part of the code contains the structure of the application's routes and components: */}
      <Router>
        {/* This component wraps the entire application and provides the routing context for the components inside it.
         It enables navigation between different pages of the application. */}
        <Header />
        {/* This component renders the header section of the application. It could contain navigation links or branding elements. */}
        <Switch>
          {/* This component ensures that only one route is rendered at a time. It iterates over its children `<Route>` elements 
          and renders the first one whose path matches the current URL. */}
          <Route exact path='/' component={Home} />
          {/* This `<Route>` component specifies that when the URL exactly matches `'/'`, the `Home` component should be rendered.
 */}
          <Route exact path='/about' component={About} />
          {/* This `<Route>` component specifies that when the URL exactly matches `'/about'`, the `About` component should be rendered. */}
          <Route exact path='/services' component={Services} />
          {/* This `<Route>` component specifies that when the URL exactly matches `'/services'`, the `Services` component should be rendered. */}
          <Route exact path='/blog' component={Blog} />
          {/* This `<Route>` component specifies that when the URL exactly matches `'/blog'`, the `Blog` component should be rendered. */}
          <Route exact path='/pricing' component={Pricing} />
          {/* This `<Route>` component specifies that when the URL exactly matches `'/pricing'`, the `Pricing` component should be rendered. */}
          <Route exact path='/contact' component={Contact} />
          {/* This `<Route>` component specifies that when the URL exactly matches `'/contact'`, the `Contact` component should be rendered. */}
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
// Finally, the `Pages` component is exported as the default export of the module, making it available for use in other parts of the application. 
// It encapsulates the entire structure of the application's pages and routing logic.
