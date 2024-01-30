import React, { useState } from 'react';

// reactstrap components
import {Container, Row, Button, Col} from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";

// Demo Sections for this page
import Carousel from "components/index-page/Carousel.js";
import NucleoIcons from "components/index-page/NucleoIcons.js";

import Upload from "components/upload/Upload.js";
import Selection from "components/selection/Selection.js";

import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";
import "views/examples/Test.css"


import { saveAs } from 'file-saver'; // 确保安装了 file-saver 库
function CustomPage() {

  // State to track the uploaded image
  const [uploadedImage, setUploadedImage] = useState(null);

  // Function to handle image upload (to be used in your Upload component)
  const handleImageUpload = (image) => {
    console.log("Image being uploaded:", image); // Check if the image is received
    setUploadedImage(image); // Assuming 'image' is the uploaded image data
  };

  // Function to handle submit click
  const handleSubmit = () => {
    console.log("Current uploadedImage state:", uploadedImage); // Check the state
    if (!uploadedImage) {
      alert("Please upload an image before submitting.");
      return;
    }

    console.log("Image uploaded:", uploadedImage);

    // Save Image
    if (uploadedImage instanceof File) {
      saveAs(uploadedImage, uploadedImage.name);
    } else {
      console.error("Uploaded image is not a file.");
    }


  // Create the JSON object
    const data = {
      modelCharacteristics: {
        gender: gender,
        age: ageRange,
        race: race,
        height: parseInt(Height),
        bodyShape: bodyShape,
        bodySize: size,
      },
      environmentSetting: {
        background: background,
        lighting: lightSource, // Modify as needed to fit your schema
      },
      poseAndExpression: {
        pose: pose,
        expression: expression,
      },
      accessories: {
        items: [accessory], // Adjust if multiple accessories can be selected
      },
      lightSourceAndTone: {
        mainLight1: lightSource, // Modify as needed
        mainLight2: "", // Add your logic
        additionalMainLights: "", // Add your logic
        tone: tone,
      },
      quality: {
        pixel: resolution,
      },
      portraitType: {
        body: "", // Add your logic
      },
      generalSetting: {
        consistency: true, // Modify as needed
        hoodless: true, // Modify as needed
      },
    };
    console.log("Creating JSON for:", {gender, ageRange, race, Height, bodyShape, size, background, lightSource, pose, expression, accessory, tone, resolution, clothing});

    // Save JSON
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    console.log("Saving JSON Blob:", blob);
    saveAs(blob, "options.json");

  };


  // Define state variables
  const [gender, setGender] = useState("Gender");
  const [ageRange, setAgeRange] = useState("Age Range");
  const [race, setRace] = useState("Race");
  const [Height, setHeight] = useState("Height");
  const [BodyType, setBodyType] = useState("Body Type");
  const [bodyShape, setBodyShape] = useState("Body Shape");
  const [size, setSize] = useState("Size");
  const [background, setBackground] = useState("Background Atmosphere");
  const [pose, setPose] = useState("Pose");
  const [expression, setExpression] = useState("Expression");
  const [accessory, setAccessory] = useState("Accessory");
  const [lightSource, setLightSource] = useState("Main Light Source");
  const [tone, setTone] = useState("Tone");
  const [resolution, setResolution] = useState("Resolution");
  const [clothing, setClothing] = useState("Clothing Type");

  // Option List
  const genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' }
  ];
  const ageRangeOptions = [
    { label: 'Teenager', value: 'Teenager' },
    { label: 'Middle', value: 'Middle' },
    { label: 'Elder', value: 'Elder' }
  ];
  const raceOptions = [
    { label: 'White', value: 'White' },
    { label: 'Black', value: 'Black' },
    { label: 'Asian', value: 'Asian' },
    { label: 'Latino or Hispanic', value: 'Latino or Hispanic' },
    { label: 'African American', value: 'African American' },
    { label: 'Native American', value: 'Native American' },
    { label: 'Multiracial or Mixed Race', value: 'Multiracial or Mixed Race' }
  ];

  const HeightOptions=[
    {label: '170', value: '170' },
    {label: '175', value: '175' },
    {label: '180', value: '180' },
    {label: '185', value: '185' },
    {label: '190', value: '190' },
  ]

  const BodyTypeOptions = [
    { label: 'Slim', value: 'Slim' },
    { label: 'Bulky', value: 'Bulky' },
  ];

    const bodyShapeOptions = [
      { label: 'Ectomorph', value: 'Ectomorph' },
      { label: 'Mesomorph', value: 'Mesomorph' },
      { label: 'Endomorph', value: 'Endomorph' },
      { label: 'CombinationType', value: 'CombinationType' }
    ];

  const sizeOptions = [
    { label: 'S', value: 'S' },
    { label: 'M', value: 'M' },
    { label: 'L', value: 'L' },
    { label: 'XL', value: 'XL' },
    { label: 'XXL', value: 'XXL' },
    { label: 'XXXL', value: 'XXXL' },
    { label: 'XXXXL', value: 'XXXXL' },
    { label: 'XXXXXL', value: 'XXXXXL' }
  ];
  const backgroundOptions = [
    { label: 'Street', value: 'Street' },
    { label: 'Natural Scenery', value: 'Natural Scenery' },
    { label: 'Architecture', value: 'Architecture' },
    { label: 'Forest', value: 'Forest' },
    { label: 'Mall', value: 'Mall' },
    { label: 'Snowy Mountain', value: 'Snowy Mountain' },
    { label: 'Sculpture', value: 'Sculpture' },
    { label: 'Indoor Plain Background', value: 'Indoor Plain Background' }
  ];
  const poseOptions = [
    { label: 'Standing', value: 'Standing' },
    { label: 'Walking', value: 'Walking' },
    { label: 'Hand in Pocket', value: 'Hand in Pocket' },
    { label: 'Jumping', value: 'Jumping' },
    { label: 'Squatting', value: 'Squatting' },
    { label: 'Sitting', value: 'Sitting' }
  ];
  const expressionOptions = [
    { label: 'Smiling', value: 'Smiling' },
    { label: 'Relaxed', value: 'Relaxed' },
    { label: 'Serious', value: 'Serious' },
    { label: 'Sad', value: 'Sad' },
    { label: 'No Expression', value: 'No Expression' },
    { label: 'Natural', value: 'Natural' }
  ];
  const accessoryOptions = [
    { label: 'Watch', value: 'Watch' },
    { label: 'Necklace', value: 'Necklace' },
    { label: 'Hat', value: 'Hat' },
    { label: 'Headphones', value: 'Headphones' },
    { label: 'Volleyball', value: 'Volleyball' },
    { label: 'Shoulder Bag', value: 'Shoulder Bag' },
    { label: 'Ice Axe', value: 'Ice Axe' }
  ];
  const lightSourceOptions = [
    { label: 'Left Side Light', value: 'Left Side Light' },
    { label: 'Right Side Light', value: 'Right Side Light' },
    { label: 'Back Light', value: 'Back Light' },
    { label: 'Front Light', value: 'Front Light' },
    { label: 'Left Square Light', value: 'Left Square Light' },
    { label: 'Right Square Light', value: 'Right Square Light' },
    { label: 'Left Back Light', value: 'Left Back Light' },
    { label: 'Right Back Light', value: 'Right Back Light' },
    { label: 'Back Contour Light', value: 'Back Contour Light' },
    { label: 'High Side Backlight', value: 'High Side Backlight' }
  ];
  const toneOptions = [
    { label: 'Dark', value: 'Dark' },
    { label: 'Bright', value: 'Bright' }
  ];
  const resolutionOptions = [
    { label: '720*480 (SD)', value: '720*480 (SD)' },
    { label: '1920*1080 (Full HD)', value: '1920*1080 (Full HD)' },
    { label: '3840*2160 (4K)', value: '3840*2160 (4K)' }
  ];
  const clothingOptions = [
    { label: 'Down Jacket', value: 'Down Jacket' },
    { label: 'Cotton Coat', value: 'Cotton Coat' },
    { label: 'Coat', value: 'Coat' },
    { label: 'Shirt', value: 'Shirt' },
    { label: 'Jacket', value: 'Jacket' },
    { label: 'T-Shirt', value: 'T-Shirt' },
    { label: 'POLO Shirt', value: 'POLO Shirt' },
    { label: 'Sweater', value: 'Sweater' },
    { label: 'Sweatshirt', value: 'Sweatshirt' }
  ];

  React.useEffect(() => {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var href = window.location.href.substring(
        window.location.href.lastIndexOf("#") + 1
    );
    if (
        window.location.href.lastIndexOf("#") > 0 &&
        document.getElementById(href)
    ) {
      document.getElementById(href).scrollIntoView();
    }
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  });

  return (
      <>
        <DemoNavbar type="transparent" />
        <div className="wrapper">
          <Button
              className="btn-icon-only back-to-top show"
              color="primary"
              name="button"
              type="button"
              onClick={() => {
                window.scrollTo(0, 0);
                document.body.scrollTop = 0;
              }}
          >
            <i className="ni ni-bold-up"></i>
          </Button>
          <div className="section section-hero section-shaped">
            <div className="page-header">
              <img
                  alt="..."
                  className="bg-image"
                  src={require("assets/img/ill/index_bg.svg").default}
              />
              <Container className="shape-container d-flex align-items-center py-lg">
                <div className="col px-0">
                  <Row className="align-items-center justify-content-center">
                    <Col md="4">
                      <Upload onImageSelected={handleImageUpload}/>
                    </Col>
                    <Col md="8">
                      <div className="dropdown-grid">
                        <Selection title="Gender" options={genderOptions} value={gender} onChange={setGender} />
                        <Selection title="Age Range" options={ageRangeOptions} value={ageRange} onChange={setAgeRange} />
                        <Selection title="Race" options={raceOptions} value={race} onChange={setRace} />
                        <Selection title="Height" options={HeightOptions} value={Height} onChange={setHeight} />
                        <Selection title="Body Type" options={BodyTypeOptions} value={BodyType} onChange={setBodyType} />
                        <Selection title="Body Shape" options={bodyShapeOptions} value={bodyShape} onChange={setBodyShape} />
                        <Selection title="Size" options={sizeOptions} value={size} onChange={setSize} />
                        <Selection title="Background Atmosphere" options={backgroundOptions} value={background} onChange={setBackground} />
                        <Selection title="Pose" options={poseOptions} value={pose} onChange={setPose} />
                        <Selection title="Expression" options={expressionOptions} value={expression} onChange={setExpression} />
                        <Selection title="Accessory" options={accessoryOptions} value={accessory} onChange={setAccessory} />
                        <Selection title="Main Light Source" options={lightSourceOptions} value={lightSource} onChange={setLightSource} />
                        <Selection title="Tone" options={toneOptions} value={tone} onChange={setTone} />
                        <Selection title="Resolution" options={resolutionOptions} value={resolution} onChange={setResolution} />
                        <Selection title="Clothing Type" options={clothingOptions} value={clothing} onChange={setClothing} />
                      </div>
                    </Col>
                  </Row>

                  <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                    <div className="btn-wrapper mt-5">
                      <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          onClick={handleSubmit}
                      >
                      <span className="btn-inner--icon">
                        {/* Embed SVG Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12" className="ni">
                          <title>send message</title>
                          <g fill="#ffffff" className="nc-icon-wrapper">
                            <path d="M11.854.146A.5.5,0,0,0,11.329.03l-11,4a.5.5,0,0,0-.015.934l4.8,1.921,1.921,4.8A.5.5,0,0,0,7.5,12h.008a.5.5,0,0,0,.462-.329l4-11A.5.5,0,0,0,11.854.146Z" fill="#ffffff"></path>
                          </g>
                        </svg>
                      </span>
                        <span className="btn-inner--text">Submit</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <Carousel />
          <NucleoIcons />
          <DemoFooter />
        </div>
      </>
  );
}

export default CustomPage;
