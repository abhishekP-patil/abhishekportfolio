import React from "react";
import { ImCross } from "react-icons/im";
import "../css/project-modals.css";

function Spreecommerce({ setModalShow }) {
  return (
    <>
      <div
        className="modal-content-container"
        style={{
          backgroundColor: "white",
          paddingLeft: "6.7%",
        }}
      >
        <div className="heading-div project-heading" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>I</span>
            TW21&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>H</span>
            ackathon&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>W</span>
            inner
          </span>
          <span style={{ color: "#5a00ed" }}>&nbsp;:&nbsp;</span>
          <span>
            <span style={{ color: "#5a00ed" }}>E</span>
            -commerce&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>W</span>
            ebsite
          </span>
        </div>
        <div
          className="modal-close-icon-container"
          style={{
            color: "black",
          }}
        >
          <h3 onClick={() => setModalShow(false)} style={{ cursor: "pointer" }}>
            <ImCross />
          </h3>
        </div>
        <div className="introduction" style={{ color: "#5a00ed" }}>
          This project was created as a part of Hof University of Applied
          Science's International Week 2021 Web Development Hackathon. It won
          the highest grade amongst all the teams participating in the
          hackathon.
        </div>
        <div style={{ marginTop: "20px" }}>
          <span className="role-duration-key" style={{ color: "#5a00ed" }}>
            Role :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "black" }}>
            &nbsp;Team Lead, Frontend Developer (Home Page, Category Page,
            Single Product Page, Cart Preview, Cart Page, Frontend Cache)
          </span>
          <br />
          <span className="role-duration-key" style={{ color: "#5a00ed" }}>
            Time Frame :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "black" }}>
            &nbsp;Spring 2020
          </span>
          <br />
          <span className="role-duration-key" style={{ color: "#5a00ed" }}>
            Other Members :&nbsp;
          </span>
          <span className="role-duration-value" style={{ color: "black" }}>
            &nbsp;
          </span>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>O</span>
            bjective&nbsp;
          </span>
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            The goal of this application was to fetch data from Spree Commerce
            API. The application can fetch the data from Spree Commerce API
            according to given taxons, filters and search terms. It also has an
            authentication system that allows users to create accounts. The
            application also provides users with a cart where they can manually
            store products fetched from the Spree Commerce API. This cart allows
            modification of data whenever the user desires.
          </span>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>P</span>
            roblem&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>S</span>
            tatement&nbsp;
          </span>
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            <span style={{ color: "#5a00ed" }}>1.&nbsp;</span>To create a simple
            e-commerce web app that shows a list of products organized by
            category.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>2.&nbsp;</span>Use modern
            technology stack such as Fastify (Backend) and ReactJS (Frontend).
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>3.&nbsp;</span>Use REST APIs
            provided by https://spreecommerce.org/.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>4.&nbsp;</span>We expect you to
            create your own wrapper that performs the API call, process the
            result, and make objects available to the web app.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>5.&nbsp;</span>As soon as the
            user opens the app, it will see several categories of your choice.
            The user then will be able to click on the category and see the list
            of related products.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>6.&nbsp;</span>When the user
            selects a product, the details are loaded. In this page, the user
            can see the image, the description, and the details.
            <br />
          </span>
        </div>
        <div className="project-sub-container">
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/spreecommerce/overview.png"
            }
          />
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>T</span>
            echnologies&nbsp;
          </span>
        </div>
        <div
          className="introduction"
          style={{ color: "black", marginTop: "0px" }}
        >
          <span>
            <span style={{ color: "#5a00ed" }}>Fastify :&nbsp;</span>
            Fastify is a web framework highly focused on providing the best
            developer experience with the least overhead and a powerful plugin
            architecture. It helps in building extremely fast HTTP APIs that use
            JSON as the data format. Fastify uses JavaScript as the scripting
            language.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>ReactJS :&nbsp;</span>React is a
            JavaScript library for building user interfaces. React allows you to
            build encapsulated components that manage their own state, then
            compose them to make complex UIs.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>MongoDB :&nbsp;</span>MongoDB is
            a document based, general purpose, distributed database that stores
            data in JSON format documents. As the data fetched from the Spree
            Commerce API is also in JSON format, mongoDB is a good fit for the
            project.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>Mongoose :&nbsp;</span>Mongoose
            is an Object Data Modeling (ODM) library for MongoDB and Node.js. It
            manages relationships between data, provides schema validation, and
            is used to translate between objects in code and the representation
            of those objects in MongoDB.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>Axios :&nbsp;</span>Axios is a
            promise-based HTTP client for the browser and node.js. It makes the
            process of making GET, PUT, POST and DELETE requests easier and more
            convenient.
            <br />
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>BCrypt :&nbsp;</span>BCrypt is a
            library that provides password hashing features. It is helpful while
            creating a custom authentication system to protect user privacy.
          </span>
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>H</span>
            ome&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>P</span>
            age&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/spreecommerce/homepage.png"
            }
          />
          <div
            className="introduction"
            style={{ color: "black", marginTop: "0px" }}
          >
            <span>
              {
                "The home page is the landing page of the website. Below the navigation bar it has a carousel created using <Carousel/> from react-bootstrap. The carousel displays the acknowledgements regarding the creation of the website. Below the carousel there are 2 <div/> that serve as quick access to ‘Men’ and ‘Women’ categories. These are nested in react-router <Link/> so that when the divs are clicked, they reroute the user to the appropriate category page. Below this is a Bestsellers <div/> which has 4 Product Previews in it. When the home page is rendered, it makes an Axios.get request with URL ‘http://localhost:3001/api/storefront/products/bestsellers’ which fetches the product details of 4 random products from bestsellers. The details of these products are then passed into the Product Previews to be displayed in the bestsellers <div/>"
              }
            </span>
          </div>
          {/* <div className="image-subtext" style={{ color: "#5a00ed" }}>
            Meeting Creation UseCase Diagram
          </div> */}
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>C</span>
            ategory&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>P</span>
            age&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/spreecommerce/categorypage.png"
            }
          />
          <div
            className="introduction"
            style={{ color: "black", marginTop: "0px" }}
          >
            <span>
              {
                "Upon rendering the category page makes an Axios.post request with the URL ‘http://localhost:3001/api/storefront/products /category/${cat}/${active}’, where the ${cat} is the is of the category selected (taxon id) and ${active} is the page number that is being displayed, and the body containing minimum price and maximum price according to the filter selected. The response to this request fetches the details of the products in the appropriate page of the category within the provided price range. This Axios.post call is within a useEffect hook with the second parameter as [active, minPrice, pager] so that when the products are fetched again when the page or price filter change. The fetched products are stored in a react state array. This array items are iterated over one by one using the array.map method and from the array.map method, Product Preview is returned with the details and image of the product in the array. All the Product Previews returned from array.map are arranged in rows and columns using the <Row/> and <Column/> components from react-bootstrap. On the left side of this Product Previews grid there is a filters menu which has been implemented using the <Accordion/> component from react-bootstrap."
              }
              <br />
              <br />
              {
                " The Size and Color filters have not been implemented yet however, the Price filter is completely working. Upon choosing a price range from the expanded accordion under the ‘Price’ header, the minPrice and maxPrice states get updated accordingly. As minPrice changes, the useEffect with Axios.post that fetches products gets called again with the updated values of minPrice and maxPrice as a result, fetching the filtered product list."
              }
              <br />
              <br />
              {
                "Below the Product Previews grid, there is a dynamic pagination menu created using the <Pagination/> component of react-bootstrap which provides a list of page numbers that users can click on to view the products on that page. The number of page numbers to be displayed is determined by the number of pages in the API for the category. When a page number is selected the value of ‘active’ state gets updated with the new page number which causes the useEffect with Axios.post to be called again with an updated URL with the new value of active which fetches the products on the ‘active’ page in the category."
              }
            </span>
          </div>
          <br />
          {/* <div className="image-subtext" style={{ color: "#5a00ed" }}>
            Meeting Creation UseCase Diagram
          </div> */}
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>P</span>
            roduct&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>P</span>
            review&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/spreecommerce/productpreview.png"
            }
            style={{ width: "25%", minWidth: "300px" }}
          />
          <div
            className="introduction"
            style={{ color: "black", marginTop: "0px" }}
          >
            <span>
              {
                "The Product Preview is a reusable react functional component that takes in product name, price and one image as its props and displays them in a react-bootstrap <Card/> with image as the background and price and name as the overlay text. The primary purpose of this component is to display the preview of the product. The <Card/> is inside a react-router <Link/> that reroutes the user to the product page of the particular product by passing the product id as its parameter.                "
              }
            </span>
          </div>
          <br />
          {/* <div className="image-subtext" style={{ color: "#5a00ed" }}>
            Meeting Creation UseCase Diagram
          </div> */}
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>P</span>
            roduct&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>P</span>
            age&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/spreecommerce/productpage.png"
            }
          />
          <div
            className="introduction"
            style={{ color: "black", marginTop: "0px" }}
          >
            <span>
              {
                "The cart page fetches the user’s cart upon initial rendering by making an Axios.post request inside a useEffect hook with the URL ‘http://localhost:3001/api/cart/’ to the backend. The products fetched are stored in an array state ‘cart_items’ and the quantities of the products are copied into another state array ‘quantities’ such that the product in the cart_items array has its quantity stored at the same index in the quantities array. This has been done so that if the quantities are updated on the product page, then we do not need to push the entire product but just the updated quantity to the backend to update the database. The products are displayed on the cart page in a react-bootstrap <ListGroup/> as <ListGroup.Item/>. Every <ListGroup.Item/> displays the image of the product, the name (which is linked to the product page of that product with a react-router <Link/>), the price, the color, and the size. The is also a counter with subtract and add buttons to increase or decrease the quantity of the product in the cart. This updates the quantity in the quantities array and is only updated in the backend during checkout. Every <ListGroup.Item/> also has a remove button that makes an Axios.post request to the backend with the URL ‘http://localhost:3001/api/cart/remove’ with the product object and removeAll set as true. This removes the entire product from the cart regardless of the quantity."
              }
              <br />
              <br />
              {
                "Besides the list of products, there is also a <ListGroup/> in which the total price of the cart is displayed with the total quantity of articles in the cart. There is also a checkout button which makes an Axios.post request to the backend with the URL ‘http://localhost:3001/api/cart/checkout’ with the updated quantities from the quantities array in its body in order to store the updated values in the mongo database.                  "
              }
            </span>
          </div>
          <br />
          {/* <div className="image-subtext" style={{ color: "#5a00ed" }}>
            Meeting Creation UseCase Diagram
          </div> */}
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>C</span>
            art&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>P</span>
            age&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/spreecommerce/cartpage.png"
            }
          />
          <div
            className="introduction"
            style={{ color: "black", marginTop: "0px" }}
          >
            <span>
              {
                "The cart page fetches the user’s cart upon initial rendering by making an Axios.post request inside a useEffect hook with the URL ‘http://localhost:3001/api/cart/’ to the backend. The products fetched are stored in an array state ‘cart_items’ and the quantities of the products are copied into another state array ‘quantities’ such that the product in the cart_items array has its quantity stored at the same index in the quantities array. This has been done so that if the quantities are updated on the product page, then we do not need to push the entire product but just the updated quantity to the backend to update the database. The products are displayed on the cart page in a react-bootstrap <ListGroup/> as <ListGroup.Item/>. Every <ListGroup.Item/> displays the image of the product, the name (which is linked to the product page of that product with a react-router <Link/>), the price, the color, and the size. The is also a counter with subtract and add buttons to increase or decrease the quantity of the product in the cart. This updates the quantity in the quantities array and is only updated in the backend during checkout. Every <ListGroup.Item/> also has a remove button that makes an Axios.post request to the backend with the URL ‘http://localhost:3001/api/cart/remove’ with the product object and removeAll set as true. This removes the entire product from the cart regardless of the quantity."
              }
              <br />
              <br />
              {
                "Besides the list of products, there is also a <ListGroup/> in which the total price of the cart is displayed with the total quantity of articles in the cart. There is also a checkout button which makes an Axios.post request to the backend with the URL ‘http://localhost:3001/api/cart/checkout’ with the updated quantities from the quantities array in its body in order to store the updated values in the mongo database."
              }
            </span>
          </div>
          <br />
          {/* <div className="image-subtext" style={{ color: "#5a00ed" }}>
            Meeting Creation UseCase Diagram
          </div> */}
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>C</span>
            art&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>P</span>
            review&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/spreecommerce/cartmenu.png"
            }
            style={{ width: "40%", minWidth: "300px" }}
          />
          <div
            className="introduction"
            style={{ color: "black", marginTop: "0px" }}
          >
            <span>
              {
                "The cart menu option appears in the navigation bar after a user is signed in. It displays the number of products in the user’s cart in the preview. In the dropdown of the cart option created using <NavDropdown/>, all the products in the user’s cart are displayed along with one of their images and their name and price. This data is fetched from the backend by sending an Axios.get request with the URL ‘http://localhost:3001/api/cart/’. The product image, name and price are nested in a react-router <link/> which links them to the product page of that specific product by passing in the id of that product in its URL as a parameter. There is also a ‘To Cart’ option that reroutes the player to the cart page using a react-router <Link/>."
              }
            </span>
          </div>
          <br />
          {/* <div className="image-subtext" style={{ color: "#5a00ed" }}>
            Meeting Creation UseCase Diagram
          </div> */}
        </div>
        <div className="project-subtitles" style={{ color: "black" }}>
          <span>
            <span style={{ color: "#5a00ed" }}>F</span>
            rontend&nbsp;
          </span>
          <span>
            <span style={{ color: "#5a00ed" }}>C</span>
            ache&nbsp;
          </span>
        </div>
        <div className="project-sub-container">
          <img
            className="image-center"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/spreecommerce/frontendcache.png"
            }
          />
          <div
            className="introduction"
            style={{ color: "black", marginTop: "0px" }}
          >
            <span>
              {
                "Due to the high loading times for fetching data of multiple products while displaying them on Category Page (2.5.5), we have implemented a caching system that stores the previously fetched product according to their category and page number data so that revisiting pages results in almost no-load times. The cache is a react object state. When a page renders for the first time, the fetched object from the backend that contains the list of products, included, links and meta fields is stored as value for key ‘data’ which is nested inside the key ‘cache_categoryID_pageNumber_minPrice_’. Whenever the user is being routed to a Category Page (2.5.5), the application checks if the page exists in the cache and if it does then it fetches the product list from the cache object rather than requesting it from the backend."
              }
              <br />
              <br />
              {
                "There is also a usage key in the cache which has an object as its value. This object has keys in the aforementioned cache naming format and every key has an integer value. The first page to be cached gets the value ‘pageVisitNum’ (which is 0 by default) and with the addition of a page to the cache ‘pageVisitNum’ gets incremented by 1 and the key of that cache in usage gets the incremented value of ‘pageVisitNum’. If  a page is revisited, the pageVisitNum still gets incremented that key of that page in usage of cache gets the new value of ‘pageVisitNum’. This has been set up to implement a cache cleaning by using a Least Recently Used (LRU) algorithm. The limit for cache cleaning has not been set yet so no items get removed from the cache in the current build."
              }
              <br />
              <br />
              {
                "If a person stops browsing categories and visits a product, cart or home page then the cache gets wiped as it is not a global cache. This should be rectified in further builds."
              }
            </span>
          </div>
          <br />
          {/* <div className="image-subtext" style={{ color: "#5a00ed" }}>
            Meeting Creation UseCase Diagram
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Spreecommerce;
