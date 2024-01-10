const Notification = props => {
  const {buttonText, className, buttonImage} = props
  return (
    <div className={`card-container ${className}`}>
      <img src={buttonImage} />
      <p>{buttonText}</p>
    </div>
  )
}

const element = (
  <div className='main-container'>
    <div className='Notification-container'>
      <h1>Notifications</h1>
      <div className='buttons-container'>
        <Notification
          buttonText='Information Message'
          className='Information-Message'
          buttonImage='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        />
        <Notification
          buttonText='Success Message'
          className='Success-Message'
          buttonImage='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        />
        <Notification
          buttonText='Warning Message'
          className='Warning-Message'
          buttonImage='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        />
        <Notification
          buttonText='Error Message'
          className='Error-Message'
          buttonImage='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
