import { lazy, Component } from "react";
import { getSession } from "../../actions/session";
import { infoDialog } from "../../helpers/alerts.js";
const ProfileForm = lazy(() => import("../../components/account/ProfileForm"));
const ChangePasswordForm = lazy(() => import("../../components/account/ChangePasswordForm"));
const SettingForm = lazy(() => import("../../components/account/SettingForm"));
const CardListForm = lazy(() => import("../../components/account/CardListForm"));

class MyProfileView extends Component {
  constructor(props) {
    super(props);
    const session = getSession();
    if (!session) {
      window.location.href = "/account/signin";
    }
  }

  state = { imagePreview: "", isDeleting: false };

  onSubmitProfile = async (values) => {
    infoDialog(JSON.stringify(values));
  };

  onSubmitChangePassword = async (values) => {
    infoDialog(JSON.stringify(values));
  };

  onImageChange = async (obj) => {
    if (obj) {
      const val = await this.getBase64(obj);
      this.setState({ imagePreview: val });
    } else {
      this.setState({ imagePreview: "" });
    }
  };

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
      reader.onerror = (error) => reject(error);
    });
  };
  
  render() {
    return (
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-4">
            <ChangePasswordForm onSubmit={this.onSubmitChangePassword} />
          </div>
          <div className="col-md-8">
            <ProfileForm
              onSubmit={this.onSubmitProfile}
              onImageChange={this.onImageChange}
              imagePreview={this.state.imagePreview}
              session={session}
            />
            <br></br>
            {/* <SettingForm /> */}
            <CardListForm />
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfileView;
