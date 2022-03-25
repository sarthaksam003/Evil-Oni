import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ControlledCarousel from "../../components/Carousel/ControlledCarousel";
import Multicarousel from "../../components/Carousel/Multicarousel";
import Images from "./index";

const Home = () => {
  useEffect(() => {
    document.title = "Evil Oni - Home";
  }, []);
  return (
    <React.Fragment>
      <div>
        <ControlledCarousel />
      </div>
      <div className="new-arrivals">
        <h2 className="headings">New Arrivals</h2>
        <Multicarousel>
          <div className="layout">
            <Link to="/product/tdbsv" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.one} alt="tdbsv" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        Tie Dye: Blue Spiral Vortex
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">Sweatshirt</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 999</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/ltblp" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.two} alt="ltblp" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        Looney Tunes: B & L Pattern
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">Sweatshirt</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 999</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/go" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.three} alt="go" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">GAME OVER SWEATER</h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">Knitted Sweater</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 1299</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/tfdp" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.four} alt="tfdp" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        The Flintstones: Dino Pattern
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">Sweatshirt</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 999</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="layout">
            <Link to="/product/spos" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.five} alt="spos" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        Solids: Pink Orange Stripes
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">Knitted Sweater</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 1199</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/rmogtd" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.six} alt="rmogtd" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        Rick And Morty: Oh Geez!
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">Sweatshirt</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 999</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/ctcdp" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.seven} alt="ctcdp" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        Courage Lavender Hoodie
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">Hoodie</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 1399</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="product/cah" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.eight} alt="cah" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        Rick And Morty: Space
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">Knitted Sweater</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 1299</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Multicarousel>
        <h2 className="headings">Top Selling</h2>
        <Multicarousel>
          <div className="layout">
            <Link to="/product/ltst" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.nine} alt="ltst" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        Looney Tunes: S & T Pattern
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">T-Shirt</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 599</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/mks" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.ten} alt="mks" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        Mortal Kombat: Scorpion
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">T-Shirt</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 599</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/cah" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.eleven} alt="cah" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        Captain America: Hero
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">T-Shirt</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 599</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/tdst" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.twelve} alt="tdst" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        Tie Dye: Stay Trippy
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">T-Shirt</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 599</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="layout">
            <Link to="/product/tfyddtd" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img
                    className="kard-img"
                    src={Images.thirteen}
                    alt="tfyddtd"
                  />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        The Flintstones: YDD Tie Dye
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">Sweatshirt</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 999</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/fg" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.fourteen} alt="fg" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">Feelin' Groovy</h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">T-Shirt</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 599</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product/rmp" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.fifteen} alt="rmp" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        Rick And Morty: Pounders
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">T-Shirt</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 599</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="product/mmogp" className="remove-dec">
              <div className="kard">
                <div className="kard-contents">
                  <img className="kard-img" src={Images.sixteen} alt="mmogp" />
                  <div className="container kard-itemdetails">
                    <div className="container kard-itemname">
                      <h2 className="kard-body-heading">
                        Mickey Mouse: Olive Green
                      </h2>
                    </div>
                    <div className="container kard-itemtype">
                      <p className="kard-body-size">Sweatshirt</p>
                    </div>
                    <div className="container kard-itemprice">
                      <h3 className="kard-body-price">₹ 999</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Multicarousel>
      </div>
    </React.Fragment>
  );
};

export default Home;
