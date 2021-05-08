import React from "react";
import NavBar from "./NavBars/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "./AboutUs.css";
import Footer from "./Footers/Footer";
export default function AboutUs() {
  return (
    <div>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Gifts Hub - ABout us Page</title>
        <meta
          name="description"
          content=" Pre-renders a web app into static HTML. Uses Headless Chrome to crawl all available links starting from the root. Heavily inspired by prep and react-snapshot, but written from scratch."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content=" personalised, gifts, customized, scheduled, virtual , free,e-gift, online gifts, online gift delivery, buy gifts online, online gift shop, send gifts, gifts to india,"
        />
        <meta name="language" content="EN" />
      </Helmet>
      <NavBar />
      <br />
      <br />
      <br />
      <br />

      <div class="container">
        <div class="row bootstrap snippets bootdey">
          <div class="col-md-4">
            <div class="team-member">
              <figure class="effect-zoe">
                <div class="team-photo">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="Rachel James Johnes"
                    class="img-responsive"
                  />
                </div>
                <div class="team-attrs">
                  <div class="team-name font-accident-two-bold-italic">
                    Jack Moss
                  </div>
                  <div class="team-position">Founder</div>
                </div>
                {/* <div class="team-content small">
                  Truong is also the recipient of The George C. Lin Emerging
                  Filmmaker Award from the San Diego
                </div> */}
                <figcaption>
                  <p class="icon-links">
                    <a href="#!">
                      <i class="fa fa-google"></i>
                    </a>
                    <a href="#!">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#!">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </p>

                  <p class="phone-number">
                    <a href="#!">tel: 1 234 567-89-10</a>
                  </p>
                </figcaption>
              </figure>
            </div>
            <div class="dividewhite4"></div>
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="team-member">
              <figure class="effect-zoe">
                <div class="team-photo">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt="Rachel James Johnes"
                    class="img-responsive"
                  />
                </div>
                <div class="team-attrs">
                  <div class="team-name font-accident-two-bold-italic">
                    Kate Keppler
                  </div>
                  <div class="team-position">Founder</div>
                </div>
                {/* <div class="team-content small">
                  Truong is also the recipient of The George C. Lin Emerging
                  Filmmaker Award from the San Diego
                </div> */}
                <figcaption>
                  <p class="icon-links">
                    <a href="#!">
                      <i class="fa fa-google"></i>
                    </a>
                    <a href="#!">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#!">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </p>

                  <p class="phone-number">
                    <a href="#!">tel: 1 234 567-89-10</a>
                  </p>
                </figcaption>
              </figure>
            </div>
            <div class="dividewhite4"></div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row bootstrap snippets bootdey">
          <div class="col-md-4">
            <div class="team-member">
              <figure class="effect-zoe">
                <div class="team-photo">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    alt="Rachel James Johnes"
                    class="img-responsive"
                  />
                </div>
                <div class="team-attrs">
                  <div class="team-name font-accident-two-bold-italic">
                    Jack Moss
                  </div>
                  <div class="team-position">UI, UX</div>
                </div>
                {/* <div class="team-content small">
                  Truong is also the recipient of The George C. Lin Emerging
                  Filmmaker Award from the San Diego
                </div> */}
                <figcaption>
                  <p class="icon-links">
                    <a href="#!">
                      <i class="fa fa-google"></i>
                    </a>
                    <a href="#!">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#!">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </p>

                  <p class="phone-number">
                    <a href="#!">tel: 1 234 567-89-10</a>
                  </p>
                </figcaption>
              </figure>
            </div>
            <div class="dividewhite4"></div>
          </div>

          <div class="col-md-4">
            <div class="team-member">
              <figure class="effect-zoe">
                <div class="team-photo">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt="Rachel James Johnes"
                    class="img-responsive"
                  />
                </div>
                <div class="team-attrs">
                  <div class="team-name font-accident-two-bold-italic">
                    Mario Quinn
                  </div>
                  <div class="team-position">content</div>
                </div>
                {/* <div class="team-content small">
                  Truong is also the recipient of The George C. Lin Emerging
                  Filmmaker Award from the San Diego
                </div> */}
                <figcaption>
                  <p class="icon-links">
                    <a href="#!">
                      <i class="fa fa-google"></i>
                    </a>
                    <a href="#!">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#!">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </p>

                  <p class="phone-number">
                    <a href="#!">tel: 1 234 567-89-10</a>
                  </p>
                </figcaption>
              </figure>
            </div>
            <div class="dividewhite4"></div>
          </div>

          <div class="col-md-4">
            <div class="team-member">
              <figure class="effect-zoe">
                <div class="team-photo">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="Rachel James Johnes"
                    class="img-responsive"
                  />
                </div>
                <div class="team-attrs">
                  <div class="team-name font-accident-two-bold-italic">
                    Ramon Vasquez
                  </div>
                  <div class="team-position">Public relations</div>
                </div>
                {/* <div class="team-content small">
                  Truong is also the recipient of The George C. Lin Emerging
                  Filmmaker Award from the San Diego
                </div> */}
                <figcaption>
                  <p class="icon-links">
                    <a href="#!">
                      <i class="fa fa-google"></i>
                    </a>
                    <a href="#!">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#!">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </p>

                  <p class="phone-number">
                    <a href="#!">tel: 1 234 567-89-10</a>
                  </p>
                </figcaption>
              </figure>
            </div>
            <div class="dividewhite4"></div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
