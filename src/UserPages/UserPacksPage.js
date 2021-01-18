import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckCircle from "@material-ui/icons/CheckCircle";
import AuthHeader from "../components/nav/Header";
function UserPacksPage({ history }) {
  const { user } = useSelector((state) => ({ ...state }));
  const database = firebase.firestore();
  const [gifts, setGifts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (!user) {
        history.push("/login");
      } else {
        await getPrevious(user.uid);
      }
    });
  }, []);
  const getPrevious = async (useruid) => {
    setloading(true);
    await database
      .collection("n-day-pack")
      .doc(useruid)
      .collection("giftshub")
      .orderBy("timestamp", "desc")
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
    <div style={{ backgroundColor: "#70cff3" }}>
      <AuthHeader />
      <br />
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
                    <div class="col-6">{gift.Bday_date.toLocaleString()}</div>{" "}
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
  );
}

export default UserPacksPage;