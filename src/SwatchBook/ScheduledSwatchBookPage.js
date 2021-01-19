import React, { useState, useEffect } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwatchBook from "./SwatchBook";

import ImageIcon from "@material-ui/icons/Image";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import { useSelector } from "react-redux";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import Tour from "reactour";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import GradientIcon from "@material-ui/icons/Gradient";
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

function ScheduledSwatchBookPage({
  step,
  slug,
  getDoc,
  isTourOpen,
  setTourOpend,
}) {
  let { edit } = useSelector((state) => ({ ...state }));
  const [accentColor, setaccentColor] = useState("#70cff3");
  const [loading, setloading] = useState(false);
  const database = firebase.firestore();
  const secclasses = secuseStyles();
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [fireurl, setFireUrl] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const { user } = useSelector((state) => ({ ...state }));
  const [handscol, sethandscol] = useState("#000");
  const [toname, settoname] = useState("Lannister s");
  const [dummytoname, setdummytoname] = useState("Lannister s");
  const [editname, seteditname] = useState(false);
  const [fbimg, setfbimg] = useState(
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  );
  const [Cloading, setCLoading] = useState(false);
  const [showoptions, setshowoptions] = useState(false);
  useEffect(() => {
    setCLoading(true);
    if (edit.text != "") {
      const todoRef = firebase
        .database()
        .ref("/SwatchBook/" + edit.text)
        .once("value")
        .then((snapshot) => {
          var img = snapshot.val().url;
          setfbimg(img);
          var toname = snapshot.val().name;
          settoname(toname);
          setdummytoname(toname);
          setCLoading(false);
        });
    } else {
      setCLoading(false);
    }
  }, []);
  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));
    setshowoptions(false);
    setopencrop(true);
  };

  const handleFireBaseUpload = () => {
    setloading(true);
    var ud = uuidv4();
    console.log(ud);

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    if (edit.text != "") {
      console.log("in if bbb");
      const todoRef = firebase.database().ref("SwatchBook/" + edit.text);
      const todo = {
        url: fbimg,
        name: toname,
        handscol: handscol,
      };

      todoRef.update(todo);
      setlivelink(
        "http://localhost:3000/scheduledlive/swatchbook/" +
          edit.text +
          "/" +
          slug
      );
      console.log(livelink, "live");
      setpreviewlink("/scheduledlive/swatchbook/" + edit.text + "/" + slug);

      setloading(false);
    } else if (!livelink) {
      console.log("in elseif bbb");
      const todoRef = firebase.database().ref("SwatchBook");
      const todo = {
        url: fbimg,
        name: toname,
        handscol: handscol,
      };
      var newKey = todoRef.push(todo).getKey();
      setlivelink(
        "http://localhost:3000/scheduledlive/swatchbook/" + newKey + "/" + slug
      );
      setpreviewlink("/scheduledlive/swatchbook/" + newKey + "/" + slug);

      setloading(false);
    } else {
      console.log("in else bbb");
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (err) => {
          console.log(err);
        },
        () => {
          console.log(image_url);
          var s = storage
            .ref("images")
            .child(ud)
            .putString(image_url, "base64", { contentType: "image/jpg" })
            .then((savedImage) => {
              savedImage.ref.getDownloadURL().then((downUrl) => {
                setFireUrl(downUrl);
                const todoRef = firebase.database().ref("SwatchBook");
                const todo = {
                  url: downUrl,
                  name: toname,
                  handscol: handscol,
                };
                var newKey = todoRef.push(todo).getKey();
                setlivelink(
                  "http://localhost:3000/scheduledlive/swatchbook/" +
                    newKey +
                    "/" +
                    slug
                );
                setpreviewlink(
                  "/scheduledlive/swatchbook/" + newKey + "/" + slug
                );
              });
              setloading(false);
            });
        }
      );
    }
    {
      edit.text != "" && toast.success("Swatch Book updated successfully");
    }
  };

  async function EditPack() {
    const snapshot = await database
      .collection("n-day-pack")
      .doc(`${user.uid}`)
      .collection("giftshub")
      .doc(slug)
      .get();
    const data = snapshot.data().array_data;
    const newdata = data;
    newdata[step].url = livelink;

    await database
      .collection("n-day-pack")
      .doc(`${user.uid}`)
      .collection("giftshub")
      .doc(slug)
      .update(
        {
          array_data: newdata,
        },
        { merge: true }
      );
    await database.collection("Livelinks").doc(slug).update(
      {
        array_data: newdata,
      },
      { merge: true }
    );

    toast.success("Swatch Book successfully added to your pack");
    getDoc();
  }

  const tourConfig = [
    {
      selector: '[data-tut="reactour__changeImage"]',
      content: `Choose an image from you local device to be displayed on the Swatch Book.`,
    },
    {
      selector: '[data-tut="reactour__gradient"]',
      content: `Colors mean more to the eye than what it sees. Use these options to select the appropriate gradient range for the background.`,
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
      selector: '[data-tut="reactour__addtopack"]',
      content: `Adds this component to the n-day pack you created`,
    },
    {
      selector: '[data-tut="reactour__updatepack"]',
      content: `Updates this component with the changes you made in the n-day pack.`,
    },
    {
      selector: '[data-tut="reactour__sharelink"]',
      content: `Displays options to share the live link on Facebook, WhatsApp, Twitter and Email.`,
    },
  ];

  const func = () => {
    return (
      <SwatchBook
        name={toname.toUpperCase()}
        fbimg={fbimg}
        handscol={handscol}
      />
    );
  };
  useEffect(() => {
    console.log("inside func useeffect");
    func();
  }, [toname]);

  return (
    <div style={{ backgroundColor: "#70cff3" }}>
      <Tour
        onRequestClose={() => {
          setTourOpend(false);
        }}
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName="mask"
        className="helper"
        rounded={5}
        accentColor={accentColor}
      />

      <div style={{ backgroundColor: "#70cff3" }} class="container-fluid pt-3">
        <div class="row">
          <div class="  col-lg-1"></div>
          <div class="  col-lg-7">
            {Cloading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <div>{func()}</div>
            )}
          </div>
          <div class="col-lg-1"></div>
          <div
            className="threedrnav  col-lg-3"
            style={{
              backgroundColor: "#009dd9",
              justifyContent: "center",
              alignItems: "center",
              position: "sticky",
              top: "0",
              right: "0",
            }}
          >
            <div style={{ justifyContent: "center" }}>
              <div data-tut="reactour__changeImage">
                <input
                  style={{ display: "none" }}
                  accept="image/* "
                  className={secclasses.input}
                  id="LocalfileInput"
                  name="LocalfileInput"
                  multiple
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
                    aspect_ratio={4 / 3}
                    opencrop={opencrop}
                    setopencrop={setopencrop}
                  />
                ) : null}
                <label htmlFor="LocalfileInput">
                  <HeaderBtn Icon={ImageIcon} title="Change  image " />
                </label>
              </div>
              <center>
                <div data-tut="reactour__head">
                  {editname ? (
                    <div
                      style={{
                        width: "200px",
                        marginTop: "10px",
                      }}
                      className="RightSideBar2__Btn"
                    >
                      <CreateIcon
                        onClick={() => {
                          seteditname(false);
                          settoname(dummytoname);
                        }}
                        style={{
                          margin: "0 10px 0 5px",
                          color: "#ffffff",
                          fontSize: "large",
                        }}
                      />
                      <InputBase
                        className="RightSideBar2__Btn"
                        inputProps={{ maxLength: 11 }}
                        multiline
                        style={{
                          color: "#068dc0",
                          margin: "0",
                          backgroundColor: "#ffffff",
                          width: "200px",
                        }}
                        value={dummytoname}
                        onChange={(e) => {
                          setdummytoname(e.target.value);
                        }}
                      />
                    </div>
                  ) : (
                    <HeaderBtn
                      handleClick={() => {
                        seteditname(true);
                      }}
                      Icon={CreateIcon}
                      title="Change  Name"
                    />
                  )}
                </div>
              </center>
              <div data-tut="reactour__handcol">
                <input
                  type="color"
                  id="handcol"
                  initialValue={handscol}
                  value={handscol}
                  onChange={(e) => {
                    sethandscol(e.target.value);
                  }}
                  placement="right"
                  autoAdjust="true"
                  style={{
                    margin: "auto",
                    visibility: "hidden",
                    position: "relative",
                    display: "flex",
                    height: "5px",
                  }}
                />
                <label htmlFor="handcol">
                  <HeaderBtn Icon={GradientIcon} title="Clock hands color" />
                </label>
              </div>
              <center>
                {loading ? (
                  <Loader
                    type="BallTriangle"
                    color="#00BFFF"
                    height={100}
                    width={100}
                  />
                ) : (
                  <div style={{ marginTop: "20px" }}>
                    {edit.text == "" || isTourOpen ? (
                      <button
                        className="main-button"
                        onClick={() => {
                          handleFireBaseUpload();
                          setshowoptions(true);
                        }}
                        data-tut="reactour__generatelink"
                      >
                        Generate Link
                      </button>
                    ) : null}
                    {edit.text != "" || isTourOpen ? (
                      <button
                        className="main-button"
                        onClick={() => {
                          handleFireBaseUpload();
                          setshowoptions(true);
                        }}
                        data-tut="reactour__updatepack"
                      >
                        Update pack
                      </button>
                    ) : null}
                  </div>
                )}
              </center>
              <center>
                {(livelink && showoptions && !loading) || isTourOpen ? (
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
                      style={{ width: "200px", marginTop: "20px" }}
                    >
                      <Copy livelink={livelink} />
                    </div>
                    {edit.text == "" || isTourOpen ? (
                      <div
                        data-tut="reactour__addtopack"
                        style={{ marginTop: "20px" }}
                      >
                        <HeaderBtn
                          handleClick={() => {
                            EditPack();
                          }}
                          Icon={ShareIcon}
                          title="Add to Pack "
                        />
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduledSwatchBookPage;