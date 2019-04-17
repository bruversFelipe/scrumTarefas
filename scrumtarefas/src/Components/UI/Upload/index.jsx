import React from "react";
import Upload from "antd/lib/upload";
import message from "antd/lib/message";
import Loading from "../../Loading";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === "image/jpeg";
  if (!isJPG) {
    message.error("Você só pode fazer o upload de arquivos JPG!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("A imagem deve ser menor que 2MB!");
  }
  return isJPG && isLt2M;
}

class UploadExtends extends React.Component {
  state = {
    loading: false
  };

  handleChange = info => {
    const {
      props: { handleValueUpload }
    } = this;

    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState(
          {
            imageUrl,
            loading: false
          },
          handleValueUpload(imageUrl)
        )
      );
    }
  };

  renderUploadButton() {
    const { loading } = this.state;
    return (
      <div>
        <Loading loading={loading} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
  }
  render() {
    const { imageUrl } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" />
        ) : (
          this.renderUploadButton()
        )}
      </Upload>
    );
  }
}

export default UploadExtends;
