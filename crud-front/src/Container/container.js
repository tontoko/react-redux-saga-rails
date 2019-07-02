import React from 'react'
import { connect } from 'react-redux'

import App from '../App'
import Actions from '../Actions/actions'
import {init} from '../Actions/actions'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
    return state
}

// function mapDispatchToProps(dispatch) {
//     return {
//         bindActionCreators(Actions, dispatch)
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return dispatch(init())
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App