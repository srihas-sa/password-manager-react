import './index.css'

const Passwords = props => {
  const {passwordDetails} = props
  const {WebsiteName, UserName, Password} = passwordDetails

  return (
    <div className="container">
      <p className="websitefirstletter">{WebsiteName[0]}</p>
      <div>
        <p>{WebsiteName}</p>
        <p>{UserName}</p>
        <p>{Password}</p>
      </div>

      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        alt="delete"
        className="image123"
      />
    </div>
  )
}

export default Passwords
