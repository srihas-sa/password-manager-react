import './index.css'

const Passwords = props => {
  const {passwordDetails, deleteTransaction} = props
  const {id, WebsiteName, UserName, Password} = passwordDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <div className="container">
      <p className="websitefirstletter">{WebsiteName[0]}</p>
      <div>
        <p className="whites">{WebsiteName}</p>
        <p className="whites">{UserName}</p>
        <p className="whites">{Password}</p>
      </div>

      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        alt="delete"
        className="image123"
        onClick={onDeleteTransaction}
      />
    </div>
  )
}

export default Passwords
