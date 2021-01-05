import React, { useState } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AnimatedFrame from "./AnimatedFrame";
import ImageIcon from "@material-ui/icons/Image";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import "./AnimatedFramePage.css";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import LinkIcon from "@material-ui/icons/Link";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import Share from "../Utils/Share";
import AuthHeader from "../components/nav/Header";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Loader from "react-loader-spinner";
import Tour from "reactour";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import { BrowserView } from "react-device-detect";
const secuseStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
  input: {
    display: "none",
  },
}));

export default function AnimatedFramePage() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [accentColor, setaccentColor] = useState("#70cff3");
  const [showoptions, setshowoptions] = useState(false);
  const [loading, setloading] = useState(false);
  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [fireurl, setFireUrl] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  // const [fbimg1, setfbimg1] = useState();
  const [image_url1, setimage_url1] = useState();
  const [opencrop1, setopencrop1] = useState(false);
  const [send1, setsend1] = useState();
  // const [fbimg2, setfbimg2] = useState();
  const [image_url2, setimage_url2] = useState();
  const [opencrop2, setopencrop2] = useState(false);
  const [send2, setsend2] = useState();
  const [title, settitle] = useState("Stop hovering");
  const secclasses = secuseStyles();

  const [fbimg2, setfbimg2] = useState(
    "https://unsplash.imgix.net/reserve/PPE2xapKRNyy2DlTt89F_Gutman_island.jpg?fit=crop&fm=jpg&h=1500&q=75&w=2400"
  );
  const [fbimg1, setfbimg1] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FAnimatedFramesImg1.jpg?alt=media&token=557aba90-f822-42de-b552-8e5299a9f102"
  );
  const onSelectFile1 = (e) => {
    setsend1(window.URL.createObjectURL(e.target.files[0]));

    setopencrop1(true);
  };

  const onSelectFile2 = (e) => {
    setsend2(window.URL.createObjectURL(e.target.files[0]));

    setopencrop2(true);
  };

  const handleFireBaseUpload = () => {
    setloading(true);
    var ud1 = uuidv4();
    var ud2 = uuidv4();

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    if (!livelink) {
      const todoRef = firebase.database().ref("AnimatedFrame");
      const todo = {
        url1: fbimg1,
        url2: fbimg2,
        title: title,
      };
      var newKey = todoRef.push(todo).getKey();
      setlivelink("http://localhost:3000/live/animatedframe/" + newKey);
      console.log(livelink, "livelink");
      setpreviewlink("/live/animatedframe/" + newKey);
      setloading(false);
    } else {
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (err) => {
          //catches the errors
          console.log(err);
        },
        () => {
          storage
            .ref("images")
            .child(ud1)
            .putString(image_url1, "base64", { contentType: "image/jpg" })
            .then((savedImage) => {
              savedImage.ref.getDownloadURL().then((downUrl1) => {
                console.log(downUrl1);
                setFireUrl(downUrl1);
                storage
                  .ref("images")
                  .child(ud2)
                  .putString(image_url2, "base64", { contentType: "image/jpg" })
                  .then((savedImage) => {
                    savedImage.ref.getDownloadURL().then((downUrl2) => {
                      console.log(downUrl2);
                      setFireUrl(downUrl2);
                      const todoRef = firebase.database().ref("AnimatedFrame");
                      const todo = {
                        url1: downUrl1,
                        url2: downUrl2,
                        title: title,
                      };
                      var newKey = todoRef.push(todo).getKey();
                      setlivelink(
                        "http://localhost:3000/live/animatedframe/" + newKey
                      );
                      console.log(livelink);
                      setpreviewlink("/live/animatedframe/" + newKey);
                    });
                    setloading(false);
                  });
              });
            });
        }
      );
    }
  };

  const tourConfig = [
    {
      selector: '[data-tut="reactour__changeImage"]',
      content: `The best part about pictures is that they never change even when the people in it do, select the images you want to design this frame with and show your boo how they make you so proud!`,
    },
    {
      selector: '[data-tut="reactour__yourname"]',
      content: `The best part about pictures is that they never change even when the people in it do, select the images you want to design this frame with and show your boo how they make you so proud!`,
    },
    {
      selector: '[data-tut="reactour__generatelink"]',
      content: `Tada! Almost done, do generate the link for enabling the various sharing options.`,
    },

    {
      selector: '[data-tut="reactour__preview"]',
      content: `Previews the component  created in a new page.`,
    },
    {
      selector: '[data-tut="reactour__copylink"]',
      content: `Copies the generated live link to clipboard.`,
    },
    {
      selector: '[data-tut="reactour__sharelink"]',
      content: `Displays options to share the live link on Facebook, WhatsApp, Twitter and Email.`,
    },
  ];

  return (
    <div style={{ backgroundColor: "#70cff3" }}>
      <AuthHeader />
      <div>
        {" "}
        <Tour
          onRequestClose={() => {
            setIsTourOpen(false);
          }}
          steps={tourConfig}
          isOpen={isTourOpen}
          maskClassName="mask"
          className="helper"
          rounded={5}
          accentColor={accentColor}
        />
      </div>

      <br />
      <div style={{ backgroundColor: "#70cff3" }} class="container-fluid pt-3">
        <div class="row">
          <div class="col-sm-9 ">
            <AnimatedFrame fbimg1={fbimg1} fbimg2={fbimg2} title={title} />
          </div>

          <div
            className="animatedrnav col-sm-3"
            style={{
              backgroundColor: "#009dd9",
              justifyContent: "center",
              alignItems: "center",
              position: "sticky",
              top: "0",
              right: "0",
            }}
          >
            <BrowserView>
              <center>
                <div
                  style={{
                    justifyContent: "center",
                    padding: "20px 0 0 0 ",
                  }}
                >
                  <span style={{ color: "#ffffff" }}>
                    {" "}
                    Hello! Allow us to give you a small tour on how to generate
                    this special gift. We are sure you wouldn't need one the
                    next time you are back.
                    <br /> P.S : Its that easy
                  </span>
                  <HeaderBtn
                    handleClick={() => {
                      setIsTourOpen(true);
                    }}
                    Icon={FlightTakeoffIcon}
                    title=" Start Tour "
                  />
                </div>
              </center>
              <hr />
            </BrowserView>

            <div style={{ justifyContent: "center", padding: "20px 0" }}>
              <div data-tut="reactour__changeImage">
                <input
                  style={{ display: "none" }}
                  accept="image/* "
                  className={secclasses.input}
                  id="LocalfileInput1"
                  name="LocalfileInput1"
                  multiple
                  type="file"
                  accept="image/*"
                  onChange={onSelectFile1}
                  onClick={(event) => {
                    event.target.value = null;
                  }}
                />
                {opencrop1 ? (
                  <CropPage
                    send={send1}
                    setfbimg={setfbimg1}
                    setimage_url={setimage_url1}
                    aspect_ratio={2 / 1}
                    opencrop={opencrop1}
                    setopencrop={setopencrop1}
                  />
                ) : null}
                <label htmlFor="LocalfileInput1">
                  <HeaderBtn Icon={ImageIcon} title="Change  image 1" />
                </label>
                <input
                  style={{ display: "none" }}
                  accept="image/* "
                  className={secclasses.input}
                  id="LocalfileInput2"
                  name="LocalfileInput2"
                  multiple
                  type="file"
                  accept="image/*"
                  onChange={onSelectFile2}
                  onClick={(event) => {
                    event.target.value = null;
                  }}
                />
                {opencrop2 ? (
                  <CropPage
                    send={send2}
                    setfbimg={setfbimg2}
                    setimage_url={setimage_url2}
                    aspect_ratio={2 / 1}
                    opencrop={opencrop2}
                    setopencrop={setopencrop2}
                  />
                ) : null}
                <label htmlFor="LocalfileInput2">
                  <HeaderBtn Icon={ImageIcon} title="Change  Image 2" />
                </label>
              </div>
              <center>
                <div
                  data-tut="reactour__yourname"
                  style={{ width: "200px" }}
                  className="RightSideBar2__Btn"
                >
                  <CreateIcon
                    style={{
                      margin: "0 10px 0 5px",
                      color: "#ffffff",
                      fontSize: "large",
                    }}
                  />
                  <InputBase
                    className="RightSideBar2__Btn"
                    multiline
                    style={{
                      color: "#068dc0",
                      margin: "0",
                      backgroundColor: "#ffffff",
                      width: "200px",
                    }}
                    value={title}
                    onChange={(e) => {
                      settitle(e.target.value);
                    }}
                  />
                </div>
              </center>

              <center data-tut="reactour__generatelink">
                <div style={{ marginTop: "20px" }}>
                  <button
                    onClick={() => {
                      handleFireBaseUpload();
                      setshowoptions(true);
                    }}
                    className="main-button"
                    data-tut="reactour__generatelink"
                  >
                    Generate Link
                  </button>
                </div>
              </center>
              {loading ? (
                <Loader
                  type="BallTriangle"
                  color="#00BFFF"
                  height={100}
                  width={100}
                />
              ) : (
                <center>
                  {livelink || isTourOpen ? (
                    <div>
                      <div
                        data-tut="reactour__preview"
                        style={{ marginTop: "20px" }}
                      >
                        <Link class="logo" to={previewlink} target="_blank">
                          <HeaderBtn Icon={VisibilityIcon} title="Preview " />
                        </Link>
                      </div>
                      <div
                        data-tut="reactour__copylink"
                        style={{ marginTop: "20px", width: "200px" }}
                      >
                        <Copy livelink={livelink} />
                      </div>
                      {!showshare ? (
                        <div
                          data-tut="reactour__sharelink"
                          style={{ marginTop: "20px" }}
                        >
                          <HeaderBtn
                            handleClick={() => {
                              setshowshare(true);
                            }}
                            Icon={ShareIcon}
                            title="Share "
                          />
                        </div>
                      ) : (
                        <Share livelink={livelink} />
                      )}
                    </div>
                  ) : null}
                </center>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
