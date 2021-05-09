import PropTypes from "prop-types"
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Hello' />
      <Button color='red' text='Hola' />
      <Button color='blue' text='こんにちは' />

    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// }

export default Header
