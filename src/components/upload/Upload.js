import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";


class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage,
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });

      // Call the callback function with the file
      if (this.props.onImageSelected) {
        this.props.onImageSelected(file);
      }
    };

    reader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();
    // Implement your submission logic here
  }

  handleClick() {
    this.refs.fileInput.click();
  }

  handleRemove() {
    this.setState({
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage,
    });

    if (this.props.onImageSelected) {
      this.props.onImageSelected(null); // No file selected
    }

    this.refs.fileInput.value = null;
  }

  render() {
    return (
        <div className="fileinput text-center">
          <input type="file" onChange={this.handleImageChange} ref="fileInput" style={{ display: "none" }} />
          <div className={"thumbnail" + (this.props.avatar ? " img-circle" : "")} onClick={() => this.handleClick()}>
            <img src={this.state.imagePreviewUrl} alt="..." style={{ cursor: "pointer" }} />
          </div>
          <div>
            {this.state.file === null ? (
                <Button
                    color={this.props.addBtnColor}
                    className={this.props.addBtnClasses}
                    onClick={() => this.handleClick()}
                >
                  {this.props.avatar ? "Add Photo" : "Select image"}
                </Button>
            ) : (
                <span>
              <Button
                  color={this.props.changeBtnColor}
                  className={this.props.changeBtnClasses}
                  onClick={() => this.handleClick()}
              >
                Change
              </Button>
                  {this.props.avatar ? <br /> : null}
                  <Button
                      color={this.props.removeBtnColor}
                      className={this.props.removeBtnClasses}
                      onClick={() => this.handleRemove()}
                  >
                <i className="fa fa-times" /> Remove
              </Button>
            </span>
            )}
          </div>
        </div>
    );
  }
}


ImageUpload.defaultProps = {
  avatar: false,
  removeBtnClasses: "btn-round",
  removeBtnColor: "danger",
  addBtnClasses: "btn-round",
  addBtnColor: "file",
  changeBtnClasses: "btn-round",
  changeBtnColor: "file",
};

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
  removeBtnClasses: PropTypes.string,
  removeBtnColor: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "link",
    "file",
  ]),
  addBtnClasses: PropTypes.string,
  addBtnColor: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "link",
    "file",
  ]),
  changeBtnClasses: PropTypes.string,
  changeBtnColor: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "link",
    "file",
  ]),
};

export default ImageUpload;
