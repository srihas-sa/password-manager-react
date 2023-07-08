import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

const initialpassword = [
  {
    WebsiteName: 'youtube.com',
    UserName: 'srihas',
    Password: 'sai',
  },
]

class App extends Component {
  state = {
    WebsiteName: '',
    UserName: '',
    Password: '',
    Passwordlists: initialpassword,
  }

  onAddContact12 = event => {
    event.preventDefault()
    const {WebsiteName, UserName, Password} = this.state
    const newPassword = {
      id: uuidv4(),
      WebsiteName,
      UserName,
      Password,
    }

    this.setState(prevState => ({
      Passwordlists: [...prevState.contactsList, newPassword],

      WebsiteName: '',
      UserName: '',
      Password: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({WebsiteName: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({UserName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({Password: event.target.value})
  }

  render() {
    return (
      <div className="outer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="imagelogo"
        />

        <div className="inner">
          <div className="inner1">
            <h1 className="whitehead">Add New Password</h1>
            <div className="web">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="imageweb"
              />
              <input
                type="text"
                placeholder="Enter Website Name Ex:Youtube.com"
                className="website"
                onChange={this.onChangeWebsite}
              />
            </div>

            <div className="web">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="imageweb"
              />
              <input
                type="text"
                placeholder="Enter UserName"
                className="website"
                onChange={this.onChangeUsername}
              />
            </div>

            <div className="web">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="imageweb"
              />
              <input
                type="text"
                placeholder="Enter Password"
                className="website"
                onChange={this.onChangePassword}
              />
            </div>

            <div className="button1">
              <button
                type="button"
                className="button"
                onClick={this.onAddContact12}
              >
                Add
              </button>
            </div>
          </div>

          <div className="imagecontaineer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="passwordmanager"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App