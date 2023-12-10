import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Upload from "components/upload/Upload.js";
import Selection from "components/selection/Selection.js";

import Header1 from "components/headers/Header1.js";
import PreFooter1 from "components/pre-footers/PreFooter1.js";
import backgroundImage from "assets/img/ill/p8.svg";
import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";


function CustomPage() {
  // 定义状态变量
  const [gender, setGender] = useState("Gender");
  const [ageRange, setAgeRange] = useState("Age Range");
  const [race, setRace] = useState("Race");
  const [heightBodyType, setHeightBodyType] = useState("Height and Body Type");
  const [size, setSize] = useState("Size");
  const [background, setBackground] = useState("Background Atmosphere");
  const [pose, setPose] = useState("Pose");
  const [expression, setExpression] = useState("Expression");
  const [accessory, setAccessory] = useState("Accessory");
  const [lightSource, setLightSource] = useState("Main Light Source");
  const [tone, setTone] = useState("Tone");
  const [resolution, setResolution] = useState("Resolution");
  const [clothing, setClothing] = useState("Clothing Type");

  // 选项列表
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
  const heightBodyTypeOptions = [
    { label: 'Short - Slim', value: 'Short - Slim' },
    { label: 'Short - Bulky', value: 'Short - Bulky' },
    { label: 'Average - Slim', value: 'Average - Slim' },
    { label: 'Average - Bulky', value: 'Average - Bulky' },
    { label: 'Tall - Slim', value: 'Tall - Slim' },
    { label: 'Tall - Bulky', value: 'Tall - Bulky' }
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

  return (
      <>
        <Header1 />

        <div className="pt-300">
          <Container className="custom-container">
            <Row>
              <Col md="6">
                <Upload />
              </Col>
              <Col md="6">
                <Selection title="Gender" options={genderOptions} value={gender} onChange={setGender} />
                <Selection title="Age Range" options={ageRangeOptions} value={ageRange} onChange={setAgeRange} />
                <Selection title="Race" options={raceOptions} value={race} onChange={setRace} />
                <Selection title="Height and Body Type" options={heightBodyTypeOptions} value={heightBodyType} onChange={setHeightBodyType} />
                <Selection title="Size" options={sizeOptions} value={size} onChange={setSize} />
                <Selection title="Background Atmosphere" options={backgroundOptions} value={background} onChange={setBackground} />
                <Selection title="Pose" options={poseOptions} value={pose} onChange={setPose} />
                <Selection title="Expression" options={expressionOptions} value={expression} onChange={setExpression} />
                <Selection title="Accessory" options={accessoryOptions} value={accessory} onChange={setAccessory} />
                <Selection title="Main Light Source" options={lightSourceOptions} value={lightSource} onChange={setLightSource} />
                <Selection title="Tone" options={toneOptions} value={tone} onChange={setTone} />
                <Selection title="Resolution" options={resolutionOptions} value={resolution} onChange={setResolution} />
                <Selection title="Clothing Type" options={clothingOptions} value={clothing} onChange={setClothing} />
              </Col>
            </Row>
          </Container>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <div className="btn-wrapper mt-5">
              <Button
                  className="btn-icon mb-3 mb-sm-0"
                  color="info"
                  href="https://www.creative-tim.com/product/argon-design-system-pro-react?ref=adspr-header-index"
              >
              <span className="btn-inner--icon">
                {/* 嵌入SVG图标 */}
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

        <PreFooter1 />

      </>
  );
}

export default CustomPage;
