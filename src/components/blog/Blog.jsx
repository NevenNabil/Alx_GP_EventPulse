import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"
// `import React from "react";`: This imports the React library, necessary for writing JSX and creating React components.
// `import Back from "../common/Back";`: This imports a component named `Back` from the file located at `"../common/Back"`.
// `import RecentCard from "../home/recent/RecentCard";`: This imports a component named `RecentCard` from the file located at `"../home/recent/RecentCard"`.
// `import "../home/recent/recent.css";`: This imports the CSS file `recent.css` to apply specific styles to this component.
// `import img from "../images/about.jpg";`: This imports an image file named `about.jpg` from the `../images` directory and assigns it to the variable `img`.

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}
// `const Blog = () => { ... }`: This declares a functional component named `Blog` using arrow function syntax.
// `<section className='blog-out mb'> ... </section>`: This defines a section with class names `'blog-out'` and `'mb'`.
// `<Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />`: This renders the `Back` component, passing it props such as name, `title`, and `cover`.
// `<div className='container recent'> ... </div>`: This defines a `<div>` element with class names `'container'` and `'recent'`.
// `<RecentCard />`: This renders the `RecentCard` component.

export default Blog
// This exports the `Blog` component as the default export of this file, allowing other files to import and use it.
