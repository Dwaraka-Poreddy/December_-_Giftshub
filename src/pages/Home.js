import React, { useEffect, useState } from "react";
import Background from "../Images/the.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import HeaderBtn from "../Studio/HeaderBtn";
import ImageIcon from "@material-ui/icons/Image";
import CropPage from "../Utils/CropPage";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import NpackSelect from "./NPackSelect";
import AuthHeader from "../components/nav/Header";
import Loader from "react-loader-spinner";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Grid from "@material-ui/core/Grid";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import TextField from "@material-ui/core/TextField";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import FolderSharedOutlinedIcon from "@material-ui/icons/FolderSharedOutlined";
import CheckCircle from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles((theme) => ({
  margin: {},
  paper: {
    borderRadius: "5px",
    width: "100%",
    height: "70vh",
    minWidth: "280px",
    maxWidth: "900px",
    position: "absolute",
    color: "#ffffff",
    marginTop: "0vh",
    border: null,
    backgroundColor: "#ffffff",
    padding: theme.spacing(0, 0, 0),
  },
  DelBut: {
    position: "sticky",
    bottom: theme.spacing(142),
    left: theme.spacing(250),
  },
}));

const Home = ({ history }) => {
  const [loading, setloading] = useState(false);
  const classes = useStyles();
  const [openModal, setopenModal] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const [npackorder, setnpackorder] = useState([]);
  const database = firebase.firestore();
  const [Folder_name, setFolder_name] = useState();
  const [From_name, setFrom_name] = useState();
  const [To_name, setTo_name] = useState();
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState();
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const [fbimg, setfbimg] = useState();
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();
  const [Bday_date, setBday_date] = useState(new Date());

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (!user) {
        history.push("/login");
      } else {
        await getPrevious(user.uid);
      }
    });
  }, []);
  const setpackfunc = (selected) => {
    setnpackorder(selected);
  };
  const getPrevious = async (useruid) => {
    setloading(true);
    await database
      .collection("n-day-pack")
      .doc(useruid)
      .collection("giftshub")
      .get()
      .then((response) => {
        const fetchedGifts = [];
        response.forEach((document) => {
          const fetchedMovie = {
            id: document.id,
            ...document.data(),
          };
          fetchedGifts.push(fetchedMovie);
        });
        setGifts(fetchedGifts);
        setloading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };
  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));

    setopencrop(true);
  };
  const CreatePack = (e) => {
    setloading(true);

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
                  array_data: npackorder,
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
                    array_data: npackorder,
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
  const handleDelete = (id) => {
    setGifts((prevgifts) => {
      return prevgifts.filter((giftitem) => {
        return giftitem.id !== id;
      });
    });
    database
      .collection("n-day-pack")
      .doc(user.uid)
      .collection("giftshub")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted from ndaypack!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
    database
      .collection("Livelinks")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted friom libe!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  return (
    <div
      style={{
        background:
          "linear-gradient( 135deg, rgba(0, 136, 232, 1) 0%, rgba(0, 182, 198, 1) 0%, rgba(0, 136, 232, 1) 100% )",
        height: "80vh",
      }}
    >
      <AuthHeader />
      <br />
      <button
        className="main-button"
        onClick={() => {
          setopenModal(true);
        }}
      >
        Create New Pack
      </button>
      <br />
      <br />
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
                  <div>
                    <center>
                      <form onSubmit={CreatePack}>
                        {" "}
                        <div class="row">
                          <div class="col-xl-4  p-0 pt-3">
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
                                    required
                                    InputLabelProps={{
                                      style: { color: "#0196de" },
                                    }}
                                    id="input-with-icon-grid"
                                    label="Folder Name"
                                    value={Folder_name}
                                    onChange={(e) =>
                                      setFolder_name(e.target.value)
                                    }
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
                                    onChange={(e) =>
                                      setFrom_name(e.target.value)
                                    }
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
                            <center>
                              <div>
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
                                      {send
                                        ? "Image added"
                                        : "Add your image *"}{" "}
                                    </h2>{" "}
                                  </div>
                                </label>
                              </div>
                            </center>
                            <br />
                            <TextField
                              style={{}}
                              id="date"
                              label="Event Date"
                              type="date"
                              value={Bday_date}
                              defaultValue={Bday_date}
                              className={classes.textField}
                              onChange={(e) =>
                                setBday_date(e.target.value.toLocaleString())
                              }
                              InputLabelProps={{
                                shrink: true,
                                style: { color: "#0196de" },
                              }}
                            />{" "}
                            <br />
                            <br />
                          </div>
                          <div class="col-xl-7 ml-0 mr-0">
                            <center>
                              <NpackSelect setpackfunc={setpackfunc} />
                            </center>
                          </div>
                        </div>
                        <br />
                        <center>
                          {npackorder.length == 0 ? (
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
                                  Create 7 day pack
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
                                  Create 7 day pack
                                </button>
                              </label>
                            </>
                          )}{" "}
                        </center>
                      </form>
                    </center>
                  </div>

                  <br />
                </div>

                <Fab
                  onClick={() => {
                    setopenModal(false);
                    setsend(false);
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
      <hr />
      {loading ? (
        <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
      ) : (
        <div>
          {error ? <p>Ops, there is an error :(</p> : null}

          <ul>
            {gifts.map((gift, index) => (
              <div>
                <div class="container">
                  <div class="card">
                    <h5
                      class="card-header "
                      style={{ justifyContent: "space-between" }}
                    >
                      {" "}
                      <div class="row">
                        <div class="col-6">{gift.Folder_name}</div>{" "}
                        <div class="col-6">
                          {gift.Bday_date.toLocaleString()}
                        </div>{" "}
                      </div>
                    </h5>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-3 p-0 ">
                          <div class="container-fluid">
                            <div class="row">
                              <div
                                style={{
                                  height: "38.5px",
                                  alignItems: "center",
                                  border: "none",
                                }}
                                class="col-12  card"
                              >
                                <h2
                                  style={{
                                    fontSize: "18px",
                                    color: "#0196de",
                                    marginLeft: "8px",
                                    marginTop: "10px",
                                    marginBottom: "0",
                                  }}
                                >
                                  {gift.To_name}
                                </h2>
                              </div>
                              <div class="col-6 col-md-12">
                                <div
                                  style={{
                                    height: "38.5px",
                                    alignItems: "center",
                                    border: "1px solid #0196de",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                  }}
                                  class="col-12"
                                >
                                  <Link
                                    class="logo"
                                    to={`/scheduledlive/main/${gift.id}`}
                                    target="_blank"
                                  >
                                    <h2
                                      style={{
                                        fontSize: "18px",
                                        color: "#0196de",
                                        marginLeft: "8px",
                                        marginTop: "10px",
                                        marginBottom: "0",
                                      }}
                                    >
                                      {" "}
                                      Preview{" "}
                                    </h2>
                                  </Link>
                                </div>
                              </div>

                              <div class="col-6 col-md-12">
                                <div
                                  onClick={() => {
                                    handleDelete(gift.id);
                                  }}
                                  class="col-12"
                                  style={{
                                    height: "38.5px",
                                    // width: "242.63px",
                                    alignItems: "center",
                                    border: "1px solid #0196de",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <h2
                                    style={{
                                      fontSize: "18px",
                                      color: "#0196de",
                                      marginLeft: "8px",
                                      marginTop: "10px",
                                      marginBottom: "0",
                                    }}
                                  >
                                    Delete
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-7 p-0 ">
                          {" "}
                          <div class="container-fluid">
                            <div class="row">
                              {gift.array_data.map((c) => (
                                <div
                                  style={{
                                    border: "none",
                                  }}
                                  class="col-6 col-md-4 card p-0 m-0 "
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      textAlign: "justify",
                                    }}
                                  >
                                    {c.url ? (
                                      <CheckCircle
                                        style={{
                                          fill: "#0196de",
                                          margin: "5px 7px",
                                        }}
                                      />
                                    ) : (
                                      <img
                                        style={{
                                          width: "23.5px",
                                          height: "23.5px",
                                          margin: "5px 11px 0 8px",
                                        }}
                                        src="assets/images/icon.png"
                                        alt=""
                                      />
                                    )}
                                    <h2
                                      style={{
                                        fontSize: "18px",
                                        color: "#0196de",
                                        marginLeft: "8px",
                                        marginTop: "10px",
                                        marginBottom: "3px",
                                      }}
                                    >
                                      {" "}
                                      {c.content}
                                    </h2>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          {" "}
                          <div>
                            <center>
                              <br />
                              <Link to={`/ContinuePack/${gift.id}`}>
                                <button
                                  style={{ height: "100%", margin: "auto" }}
                                  class="main-button"
                                >
                                  Proceed
                                </button>
                              </Link>{" "}
                            </center>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            ))}
          </ul>
        </div>
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
};

export default Home;
