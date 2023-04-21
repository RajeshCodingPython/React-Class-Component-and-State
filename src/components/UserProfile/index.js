import './index.css'

const UserProfile = props => {
  const {userDetails, deleteUser} = props
  const {imageUrl, name, role, uniqueNo} = userDetails

  const onDilete = () => {
    console.log(uniqueNo)
    deleteUser(uniqueNo)
  }

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
        <div>
          <button className="delete-button" type="button" onClick={onDilete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
              alt="cross"
              className="delete-img"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default UserProfile
