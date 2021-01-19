import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import CropPage from "../Utils/CropPage";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Loader from "react-loader-spinner";
import NavBar from "../NavBars/NavBar";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import FolderSharedOutlinedIcon from "@material-ui/icons/FolderSharedOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Swiper.css";
import $ from "jquery";
const useStyles = makeStyles((theme) => ({
  margin: {},
  paper: {
    borderRadius: "5px",
    width: "100%",
    maxWidth: "700px",
    minWidth: "280px",
    position: "absolute",
    color: "#ffffff",
    marginTop: "0vh",
    border: null,
    padding: theme.spacing(0, 0, 0),
  },
  DelBut: {
    position: "sticky",
    bottom: theme.spacing(142),
    left: theme.spacing(250),
  },
}));

function SevenDayHome({ history }) {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const classes = useStyles();
  const { user } = useSelector((state) => ({ ...state }));
  const { days_page } = useSelector((state) => ({ ...state }));
  const [sevenpackorder, setsevenpackorder] = useState([
    { id: "threedimage", ismailsent: false, content: "3D Image", url: "" },
    { id: "newspaper", ismailsent: false, content: "NewsPaper", url: "" },
    { id: "puzzle", ismailsent: false, content: "Slide Puzzle", url: "" },
    {
      id: "memorygame",
      ismailsent: false,
      content: "Memory Game",
      url: "",
    },
    { id: "cubes", ismailsent: false, content: " 3D Heart", url: "" },
    { id: "collage", ismailsent: false, content: "Collage", url: "" },
    {
      id: "greetingcard",
      ismailsent: false,
      content: "Greeting Card",
      url: "",
    },
  ]);
  const [fivepackorder, setfivepackorder] = useState([
    { id: "threedimage", ismailsent: false, content: "3D Image", url: "" },
    { id: "newspaper", ismailsent: false, content: "NewsPaper", url: "" },
    { id: "puzzle", ismailsent: false, content: "Slide Puzzle", url: "" },
    {
      id: "memorygame",
      ismailsent: false,
      content: "Memory Game",
      url: "",
    },
    { id: "cubes", ismailsent: false, content: " 3D Heart", url: "" },
  ]);
  const [threepackorder, setthreepackorder] = useState([
    { id: "threedimage", ismailsent: false, content: "3D Image", url: "" },
    { id: "newspaper", ismailsent: false, content: "NewsPaper", url: "" },
    { id: "puzzle", ismailsent: false, content: "Slide Puzzle", url: "" },
  ]);
  const [twopackorder, settwopackorder] = useState([
    { id: "threedimage", ismailsent: false, content: "3D Image", url: "" },
    { id: "newspaper", ismailsent: false, content: "NewsPaper", url: "" },
  ]);
  const database = firebase.firestore();
  const [Folder_name, setFolder_name] = useState();
  const [From_name, setFrom_name] = useState();
  const [To_name, setTo_name] = useState();
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState();
  const [openModal, setopenModal] = useState(false);
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const [fbimg, setfbimg] = useState();
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();
  const [Bday_date, setBday_date] = useState(new Date());

  $(document).ready(function () {
    $(".card").hover(
      function () {
        $(this).removeClass("shadow-none");
        $(this).addClass("shadow");
      },
      function () {
        $(this).removeClass("shadow");
        $(this).addClass("shadow-none");
      }
    );
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (!user) {
        history.push("/login");
      }
    });
  }, []);

  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));
    setopencrop(true);
  };

  const CreatePack = (e) => {
    setloading(true);
    e.preventDefault();
    var ud = uuidv4();
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        console.log(err);
      },
      () => {
        var selectedpackorder = [];
        if (days_page.days_redirect === "2") {
          selectedpackorder = [...twopackorder];
        } else if (days_page.days_redirect === "3") {
          selectedpackorder = [...threepackorder];
        } else if (days_page.days_redirect === "5") {
          selectedpackorder = [...fivepackorder];
        } else if (days_page.days_redirect === "7") {
          selectedpackorder = [...sevenpackorder];
        }
        var s = storage
          .ref("images")
          .child(ud)
          .putString(image_url, "base64", { contentType: "image/jpg" })
          .then((savedImage) => {
            savedImage.ref.getDownloadURL().then((downUrl) => {
              var sevendayPack = firebase.firestore().collection("/n-day-pack");
              var sevendayPackPack = sevendayPack
                .doc(`${user.uid}`)
                .collection("giftshub");
              sevendayPackPack
                .add({
                  Folder_name: Folder_name,
                  fbimg: downUrl,
                  Bday_date: Bday_date,
                  From_name: From_name,
                  To_name: To_name,
                  array_data: selectedpackorder,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(function (docRef) {
                  var LivelinkPack = firebase
                    .firestore()
                    .collection("/Livelinks");
                  var LivelinkPackPack = LivelinkPack.doc(docRef.id).set({
                    Folder_name: Folder_name,
                    fbimg: downUrl,
                    From_name: From_name,
                    Bday_date: Bday_date,
                    To_name: To_name,
                    array_data: selectedpackorder,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  });
                  history.push(`/ContinuePack/${docRef.id}`);
                  setloading(false);
                })
                .catch(function (error) {
                  console.error("Error adding Tutorial: ", error);
                });
            });
          });
      }
    );
  };
  var responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  };
  var responsive5 = {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  };
  var responsive3 = {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  };
  var responsive2 = {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  };
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://www.katalystcreativegroup.com/images/blog/maintenance/404-page-not-found-message.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <button
                  onClick={() => {
                    setopenModal(true);
                    dispatch({
                      type: "REDIRECT_USER",
                      payload: {
                        days_redirect: "3",
                      },
                    });
                  }}
                  className="main-button"
                >
                  3-Day Pack
                </button>
                {/* <p class="card-text">Some quick example text to build</p> */}
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-9 ">
            <section
              class="partners "
              style={{
                position: "relative",
                top: "50%",
                transform: "translate(0,-50%)",
              }}
            >
              <div class="container ">
                <div class="card shadow-lg ">
                  <div class="card-body p-2">
                    <div class="swiper-container">
                      <OwlCarousel
                        style={{ zIndex: "5" }}
                        dots={false}
                        loop
                        margin={0}
                        autoplayTimeout={3000}
                        items={3}
                        autoplay
                        autoplayHoverPause
                      >
                        <div class="swiper-wrapper align-items-center">
                          <div class="swiper-slide">
                            <img
                              src={require("../Images/logos/animatedframes.png")}
                              alt=""
                              // style={{ height: "150px" }}
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/journey.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/memorygame.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>{" "}
        <br />
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://www.katalystcreativegroup.com/images/blog/maintenance/404-page-not-found-message.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                {/* <p class="card-text">Some quick example text to build</p> */}
                <button
                  onClick={() => {
                    setopenModal(true);
                    dispatch({
                      type: "REDIRECT_USER",
                      payload: {
                        days_redirect: "5",
                      },
                    });
                  }}
                  className="main-button"
                >
                  5-Day Pack
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-9 ">
            <section
              class="partners "
              style={{
                position: "relative",
                top: "50%",
                transform: "translate(0,-50%)",
              }}
            >
              <div class="container ">
                <div class="card shadow-lg ">
                  <div class="card-body p-5">
                    <div class="swiper-container">
                      <OwlCarousel
                        style={{ zIndex: "5" }}
                        dots={false}
                        loop
                        margin={0}
                        autoplayTimeout={3000}
                        items={3}
                        autoplay
                        autoplayHoverPause
                      >
                        <div class="swiper-wrapper align-items-center">
                          <div class="swiper-slide">
                            <img
                              src={require("../Images/logos/animatedframes.png")}
                              alt=""
                              // style={{ height: "150px" }}
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/journey.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/memorygame.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/newspaper.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/collage.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://www.katalystcreativegroup.com/images/blog/maintenance/404-page-not-found-message.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                {/* <p class="card-text">Some quick example text to build</p> */}
                <button
                  onClick={() => {
                    setopenModal(true);
                    dispatch({
                      type: "REDIRECT_USER",
                      payload: {
                        days_redirect: "7",
                      },
                    });
                  }}
                  className="main-button"
                >
                  7-Day Pack
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-9 ">
            <section
              class="partners "
              style={{
                position: "relative",
                top: "50%",
                transform: "translate(0,-50%)",
              }}
            >
              <div class="container ">
                <div class="card shadow-lg ">
                  <div class="card-body p-5">
                    <div class="swiper-container">
                      <OwlCarousel
                        style={{ zIndex: "5" }}
                        dots={false}
                        loop
                        margin={0}
                        autoplayTimeout={3000}
                        items={3}
                        autoplay
                        autoplayHoverPause
                      >
                        <div class="swiper-wrapper align-items-center">
                          <div class="swiper-slide">
                            <img
                              src={require("../Images/logos/animatedframes.png")}
                              alt=""
                              // style={{ height: "150px" }}
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/journey.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/memorygame.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/newspaper.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/collage.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <br />
      </div>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          overflowY: "auto",
          alignItems: "center",
        }}
        open={openModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {
          <div className={classes.paper}>
            {loading ? (
              <center>
                {" "}
                <Loader
                  type="BallTriangle"
                  color="#00BFFF"
                  height={300}
                  width={300}
                />
              </center>
            ) : (
              <div>
                <div
                  style={{ backgroundColor: "#ffffff" }}
                  class="container-fluid pt-3"
                >
                  <div class="p-3">
                    <center>
                      <form onSubmit={CreatePack}>
                        <div className={classes.margin}>
                          <Grid
                            container
                            spacing={1}
                            alignItems="flex-end"
                            style={{ width: "250px" }}
                          >
                            <Grid item>
                              <FolderSharedOutlinedIcon
                                style={{ fill: "#0196de" }}
                              />
                            </Grid>
                            <Grid style={{ width: "210px" }} item>
                              <TextField
                                InputLabelProps={{
                                  style: { color: "#0196de" },
                                }}
                                id="input-with-icon-grid"
                                label="Folder Name"
                                value={Folder_name}
                                onChange={(e) => setFolder_name(e.target.value)}
                                required
                              />
                            </Grid>
                          </Grid>
                        </div>
                        <br />
                        <div className={classes.margin}>
                          <Grid
                            container
                            spacing={1}
                            alignItems="flex-end"
                            style={{ width: "250px" }}
                          >
                            <Grid item>
                              <AccountCircleOutlinedIcon
                                style={{ fill: "#0196de" }}
                              />
                            </Grid>
                            <Grid style={{ width: "210px" }} item>
                              <TextField
                                InputLabelProps={{
                                  style: { color: "#0196de" },
                                }}
                                id="input-with-icon-grid"
                                label="Your Name"
                                value={From_name}
                                onChange={(e) => setFrom_name(e.target.value)}
                                required
                              />
                            </Grid>
                          </Grid>
                        </div>
                        <br />
                        <div className={classes.margin}>
                          <Grid
                            container
                            spacing={1}
                            alignItems="flex-end"
                            style={{ width: "250px" }}
                          >
                            <Grid item>
                              <AccountCircleOutlinedIcon
                                style={{ fill: "#0196de" }}
                              />
                            </Grid>
                            <Grid style={{ width: "210px" }} item>
                              <TextField
                                InputLabelProps={{
                                  style: { color: "#0196de" },
                                }}
                                id="input-with-icon-grid"
                                label="Receivers Name"
                                value={To_name}
                                onChange={(e) => setTo_name(e.target.value)}
                                required
                              />
                            </Grid>
                          </Grid>
                        </div>
                        <br />
                        <div style={{ height: "45px" }}>
                          <input
                            required
                            style={{ display: "none" }}
                            accept="image/* "
                            id="ImageInput"
                            name="ImageInput"
                            type="file"
                            accept="image/*"
                            onChange={onSelectFile}
                            onClick={(event) => {
                              event.target.value = null;
                            }}
                          />
                          {opencrop ? (
                            <CropPage
                              send={send}
                              setfbimg={setfbimg}
                              setimage_url={setimage_url}
                              aspect_ratio={1 / 1}
                              opencrop={opencrop}
                              setopencrop={setopencrop}
                            />
                          ) : null}
                          <label htmlFor="ImageInput">
                            <div
                              style={{
                                height: "45px",
                                width: "250px",
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid #0196de",
                                cursor: "pointer",
                                borderRadius: "5px",
                              }}
                            >
                              {send ? (
                                <CheckBoxOutlinedIcon
                                  style={{
                                    fill: "#0196de",
                                    marginLeft: "7px",
                                  }}
                                />
                              ) : (
                                <ImageOutlinedIcon
                                  style={{
                                    fill: "#0196de",
                                    marginLeft: "7px",
                                  }}
                                />
                              )}
                              <h2
                                style={{
                                  fontSize: "18px",
                                  color: "#0196de",
                                  marginLeft: "8px",
                                  marginBottom: "0",
                                }}
                              >
                                {send ? "Image added" : "Add your image *"}{" "}
                              </h2>{" "}
                            </div>
                          </label>
                        </div>
                        <br />
                        <TextField
                          style={{}}
                          id="date"
                          label="Birthday"
                          type="date"
                          value={Bday_date}
                          // defaultValue={Bday_date}
                          className={classes.textField}
                          onChange={(e) => {
                            console.log(Bday_date, "birthday", e.target.value);
                            setBday_date(e.target.value.toLocaleString());
                          }}
                          InputLabelProps={{
                            shrink: true,
                            style: { color: "#0196de" },
                          }}
                        />{" "}
                        <br />
                        <br />
                        <center>
                          {!Bday_date ? (
                            <>
                              <input
                                disabled
                                style={{ display: "none" }}
                                id="submit"
                                type="submit"
                                value="Create 7 day pack"
                              />
                              <label
                                style={{ opacity: "0.4" }}
                                htmlFor="submit"
                              >
                                <button
                                  disabled
                                  style={{ cursor: "default" }}
                                  className="main-button"
                                >
                                  {" "}
                                  Create {days_page.days_redirect} day pack
                                </button>
                              </label>
                            </>
                          ) : (
                            <>
                              <input
                                style={{ display: "none" }}
                                id="submit"
                                type="submit"
                                value="Create 7 day pack"
                              />
                              <label htmlFor="submit">
                                <button className="main-button">
                                  {" "}
                                  Create {days_page.days_redirect} day pack
                                </button>
                              </label>
                            </>
                          )}{" "}
                        </center>
                      </form>
                    </center>
                  </div>
                </div>
                <Fab
                  onClick={() => {
                    setopenModal(false);
                  }}
                  className={classes.DelBut}
                  color="primary"
                  aria-label="add"
                >
                  <CloseIcon />
                </Fab>
              </div>
            )}
          </div>
        }
      </Modal>

      {loading ? (
        <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
      ) : (
        <div>{error ? <p>Ops, there is an error :(</p> : null}</div>
      )}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <p className="copyright">
                Copyright © 2020 Gift's Hub Company . Design:{" "}
                <a rel="nofollow" href="/">
                  Gift's Hub
                </a>
              </p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-rss" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SevenDayHome;
