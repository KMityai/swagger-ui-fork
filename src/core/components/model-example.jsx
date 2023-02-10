import React from "react"
import PropTypes from "prop-types"
import ImPropTypes from "react-immutable-proptypes"
import randomBytes from "randombytes"

export default class ModelExample extends React.Component {
  static propTypes = {
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    schema: PropTypes.object.isRequired,
    example: PropTypes.any.isRequired,
    isExecute: PropTypes.bool,
    getConfigs: PropTypes.func.isRequired,
    specPath: ImPropTypes.list.isRequired,
    includeReadOnly: PropTypes.bool,
    includeWriteOnly: PropTypes.bool,
  }

  constructor(props, context) {
    super(props, context)
    let { getConfigs, isExecute } = this.props
    let { defaultModelRendering } = getConfigs()

    let activeTab = defaultModelRendering

    if (defaultModelRendering !== "example" && defaultModelRendering !== "model") {
      activeTab = "example"
    }

    if(isExecute) {
      activeTab = "example"
    }

    this.state = {
      activeTab,
    }
  }

  activeTab = ( e ) => {
    let { target : { dataset : { name } } } = e

    this.setState({
      activeTab: name
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.isExecute &&
      !this.props.isExecute &&
      this.props.example
    ) {
      this.setState({ activeTab: "example" })
    }
  }

  render() {
    let { getComponent, specSelectors, schema, example, getConfigs, specPath, includeReadOnly, includeWriteOnly } = this.props
    let { defaultModelExpandDepth } = getConfigs()
    const ModelWrapper = getComponent("ModelWrapper")
    const HighlightCode = getComponent("highlightCode")
    const exampleTabId = randomBytes(5).toString("base64")
    const examplePanelId = randomBytes(5).toString("base64")
    const modelTabId = randomBytes(5).toString("base64")
    const modelPanelId = randomBytes(5).toString("base64")

    return (
      <div className="model-example">
        {this.state.activeTab === "example" && (
          <div
            aria-hidden={this.state.activeTab !== "example"}
            aria-labelledby={exampleTabId}
            data-name="examplePanel"
            id={examplePanelId}
            role="tabpanel"
            tabIndex="0"
          >
            {example ? example : (
              <HighlightCode value="(no example available)" getConfigs={ getConfigs } />
            )}
          </div>
        )}

        {this.state.activeTab === "model" && (
          <div
            aria-hidden={this.state.activeTab === "example"}
            aria-labelledby={modelTabId}
            data-name="modelPanel"
            id={modelPanelId}
            role="tabpanel"
            tabIndex="0"
          >
            <ModelWrapper
              schema={ schema }
              getComponent={ getComponent }
              getConfigs={ getConfigs }
              specSelectors={ specSelectors }
              expandDepth={ defaultModelExpandDepth }
              specPath={specPath}
              includeReadOnly = {includeReadOnly}
              includeWriteOnly = {includeWriteOnly}
            />
          </div>
        )}
      </div>
    )
  }

}
