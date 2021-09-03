// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="config-container">
          <h1 className="config-heading">Layout</h1>
          <div className="input-container">
            <div className="each-input">
              <input
                checked={showContent}
                type="checkbox"
                id="content"
                onChange={onChangeShowContent}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </div>

            <div className="each-input">
              <input
                type="checkbox"
                id="left-navbar"
                onChange={onChangeShowLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="left-navbar" className="label">
                Left Navbar
              </label>
            </div>

            <div className="each-input">
              <input
                type="checkbox"
                id="right-navbar"
                onChange={onChangeShowRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="right-navbar" className="label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
