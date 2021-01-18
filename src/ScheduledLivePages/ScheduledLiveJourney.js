import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Journey from "../Journey/Journey";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import ScheduledLiveNav from "./SchdeuledLiveNav";
import CircleTimer from "./CircleTimer";
export default function ScheduledLiveCubes({ match }) {
  let dispatch = useDispatch();
  const database = firebase.firestore();
  const [Livelinks, setLivelinks] = useState("");
  const [t1, sett1] = useState("");
  const [t2, sett2] = useState("");
  const [t3, sett3] = useState("");
  const [t4, sett4] = useState("");
  const [t5, sett5] = useState("");
  const [heading, setheading] = useState("");
  const [fbimg1, setfbimg1] = useState("");
  const [fbimg2, setfbimg2] = useState("");
  const [fbimg3, setfbimg3] = useState("");
  const [fbimg4, setfbimg4] = useState("");
  const [fbimg5, setfbimg5] = useState("");
  const [fbimg6, setfbimg6] = useState("");
  const [loading, setloading] = useState(false);
  const [dataurl, setdataurl] = useState([]);
  const [today, settoday] = useState();
  async function getDoc() {
    const snapshot = await database
      .collection("Livelinks")
      .doc(match.params.slug)
      .get();
    const data = snapshot.data();
    setLivelinks(data);
    data.array_data.map((item, index) => {
      if (item.id == "journey") {
        settoday(index);
        dispatch({
          type: "ACTIVE_STEP",
          payload: { day: index + 1 },
        });
      }
      dataurl[index] = item.url;
    });
  }
  useEffect(() => {
    getDoc();
    console.log(Livelinks, "liveData");
    console.log(match.params.slug, "slug", match.params.id, "id");
  }, []);
  useEffect(() => {
    setloading(true);
    const todoRef = firebase
      .database()
      .ref("/Journey/" + match.params.id)
      .once("value")
      .then((snapshot) => {
        var img1 = snapshot.val().url1;
        setfbimg1(img1);
        var img2 = snapshot.val().url2;
        setfbimg2(img2);
        var img3 = snapshot.val().url3;
        setfbimg3(img3);
        var img4 = snapshot.val().url4;
        setfbimg4(img4);
        var img5 = snapshot.val().url5;
        setfbimg5(img5);
        var img6 = snapshot.val().url6;
        setfbimg6(img6);
        var t1 = snapshot.val().t1;
        sett1(t1);
        var t2 = snapshot.val().t2;
        sett2(t2);
        var t3 = snapshot.val().t3;
        sett3(t3);
        var t4 = snapshot.val().t4;
        sett4(t4);
        var t5 = snapshot.val().t5;
        sett5(t5);
        var heading = snapshot.val().heading;
        setheading(heading);
        setloading(false);
      });
  }, []);
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    var difference =
      +new Date(Livelinks.Bday_date) -
      +new Date() -
      19800000 -
      86400000 * (dataurl.length - today);
    console.log(difference, "difference");
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
      <ScheduledLiveNav slug={match.params.slug} />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0.1" }}></div>
        <div style={{ flex: "0.8", height: "70vh" }}>
          {loading ? (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={100}
              width={100}
            />
          ) : (
            <div>
              {new Date(Livelinks.Bday_date) -
                +new Date() -
                19800000 -
                86400000 * (dataurl.length - today - 1) >
              0 ? (
                <div>
                  <h5 className="example"> This Gift opens in </h5>
                  <CircleTimer
                    Bday={
                      +new Date(Livelinks.Bday_date) -
                      +new Date() -
                      19800000 -
                      86400000 * (dataurl.length - today - 1)
                    }
                  />
                </div>
              ) : (
                <div>
                  <center>
                    {" "}
                    {dataurl.length - today - 1 == 0 ? (
                      <h1 className="example">The Big day is here !!!</h1>
                    ) : dataurl.length - today - 1 == 1 ? (
                      <h1 className="example">
                        {dataurl.length - today - 1} day to go !!!
                      </h1>
                    ) : (
                      <h1 className="example">
                        {dataurl.length - today - 1} days to go !!!
                      </h1>
                    )}
                  </center>
                  <Journey
                    fbimg1={fbimg1}
                    fbimg2={fbimg2}
                    fbimg3={fbimg3}
                    fbimg4={fbimg4}
                    fbimg5={fbimg5}
                    fbimg6={fbimg6}
                    t1={t1}
                    t2={t2}
                    t3={t3}
                    t4={t4}
                    t5={t5}
                    heading={heading}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div style={{ flex: "0.1" }}></div>
      </div>
      <footer style={{ padding: "30px 0", marginTop: "150px" }}>
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