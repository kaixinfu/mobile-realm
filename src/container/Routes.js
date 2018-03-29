import React, {
    Component,
    StyleSheet,
} from 'react';

import {
    Scene,
    Router,
} from 'react-native-router-flux';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    {require("./scene/TabBar")}
                </Scene>
            </Router>
        );
    }
}
