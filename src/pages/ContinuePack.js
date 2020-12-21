import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Share from "../Utils/Share";
import HeaderBtn from "../Studio/HeaderBtn";
import ShareIcon from "@material-ui/icons/Share";
import ScheduledCubesPage from "../Cubes/ScheduledCubesPage";
import ScheduledMemoryGamePage from "../MemoryGame/ScheduledMemoryGamePage";
import ScheduledThreeDImagePage from "../ThreeDImage/ScheduledThreeDImagePage";
import ScheduledNewsPaperPage from "../NewsPaper/ScheduledNewsPaperPage";
import ScheduledSlidePuzzlePage from "../SlidePuzzle/ScheduledSlidePuzzlePage";
import ScheduledOpenGreetingCardPage from "../OpenGreetingCard/ScheduledOpenGreetingCardPage";
import Loader from "react-loader-spinner";
function ContinuePack({ match }) {
  const database = firebase.firestore();
  const { user } = useSelector((state) => ({ ...state }));
  const [FolderData, setFolderData] = useState("");
  const [loading, setloading] = useState(false);
  const [slag, setslag] = useState(match.params.slug);
  const [livelink, setlivelink] = useState();
  const [showshare, setshowshare] = useState(false);
  async function getDoc() {
    const snapshot = await database
      .collection("7-day-pack")
      .doc(`${user.uid}`)
      .collection("giftshub")
      .doc(match.params.slug)
      .get();
    const data = await snapshot.data();
    setlivelink(
      "http://localhost:3000/scheduledlive/main/" + `${match.params.slug}`
    );
    // setlivelink("http://localhost:3000/ContinuePack/" + `${user.uid}`);
    setFolderData(data);

    if (data.url1 != "") {
      const newCompleted = completed;
      newCompleted[0] = true;
      setCompleted(newCompleted);
    }
    if (data.url2 != "") {
      const newCompleted = completed;
      newCompleted[1] = true;
      setCompleted(newCompleted);
    }
    if (data.url3 != "") {
      const newCompleted = completed;
      newCompleted[2] = true;
      setCompleted(newCompleted);
    }
    if (data.url4 != "") {
      const newCompleted = completed;
      newCompleted[3] = true;
      setCompleted(newCompleted);
    }
    if (data.url5 != "") {
      const newCompleted = completed;
      newCompleted[4] = true;
      setCompleted(newCompleted);
    }
    if (data.url6 != "") {
      const newCompleted = completed;
      newCompleted[5] = true;
      setCompleted(newCompleted);
    }
    if (data.url7 != "") {
      const newCompleted = completed;
      newCompleted[6] = true;
      setCompleted(newCompleted);
    }
    if (data.url1 == "") {
      setActiveStep(0);
    } else if (data.url2 == "") {
      setActiveStep(1);
    } else if (data.url3 == "") {
      setActiveStep(2);
    } else if (data.url4 == "") {
      setActiveStep(3);
    } else if (data.url5 == "") {
      setActiveStep(4);
    } else if (data.url6 == "") {
      setActiveStep(5);
    } else if (data.url7 == "") {
      setActiveStep(6);
    } else {
      setActiveStep(7);
    }
    // for (var i = 0; i < 7; i++) {
    //   if (data.url + "i") {
    //     console.log(data.url + i);
    //     const newCompleted = completed;
    //     newCompleted[i] = true;
    //     setCompleted(newCompleted);
    //     console.log(i, completed, "completed");
    //   }
    // }
  }
  useEffect(async () => {
    // setloading(true);
    await getDoc();
    setloading(true);
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setloading(true);
  //   }, 3000);
  // }, []);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: "inline-block",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  function getSteps() {
    return [
      "ThreeDImage",
      "NewsPaper",
      "Greeting Card",
      "Slide Puzzle",
      "Memory Game",
      "Cubes in Heart",
      "Select campaign settings",
    ];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ScheduledThreeDImagePage slug={slag} />;
      case 1:
        return <ScheduledNewsPaperPage slug={slag} />;
      case 2:
        return <ScheduledOpenGreetingCardPage slug={slag} />;
      case 3:
        return <ScheduledSlidePuzzlePage slug={slag} />;
      case 4:
        return <ScheduledMemoryGamePage slug={slag} />;
      case 5:
        return <ScheduledCubesPage slug={slag} />;
      case 6:
        return "New Component will be added here";
      default:
        return "Unknown step";
    }
  }
  const Stepperclasses = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    console.log(activeStep, "Hi");
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const horizontalStepper = () => {
    return (
      <div className={Stepperclasses.root}>
        {loading ? (
          <Stepper alternativeLabel nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton
                  onClick={handleStep(index)}
                  completed={completed[index]}
                >
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        ) : (
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={100}
            width={100}
            // timeout={3000} //3 secs
          />
        )}
        <div>
          {allStepsCompleted() && loading ? (
            <div>
              <Typography className={Stepperclasses.instructions}>
                All Componenets completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={Stepperclasses.instructions}>
                {loading && getStepContent(activeStep)}
              </Typography>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <br />
      <br />
      <br />
      {loading ? (
        <div style={{ float: "right" }}>
          {!showshare ? (
            <div style={{ width: "150px", marginTop: "20px" }}>
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

      {horizontalStepper()}
    </div>
  );
}

export default ContinuePack;