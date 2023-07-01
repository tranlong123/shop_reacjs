import React from "react";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Search = (cartItem) => {
  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".Search")
  //   search.classList.toggle("active", this.window.scrollY > 100)
  // })
  return (
    <>
      <section className="Search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter ..." />
            <span>All Category</span>
          </div>
          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>
                  {cartItem.length === 0 ? "" : cartItem.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;