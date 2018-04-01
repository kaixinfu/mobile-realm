import React, {
    Component,
    StyleSheet,
} from 'react';

import {
    Stack,
    Scene,
    Router,
    Modal
} from 'react-native-router-flux';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Modal>
                    <Stack key="begin" hideNavBar headerMode={'screen'}>
                        {require("./scene/Splash")}
                    </Stack>
                    <Stack key="user" hideNavBar headerMode={'screen'}>
                        {require("./scene/User")}
                    </Stack>
                    <Stack key="root" hideNavBar>
                        {require("./scene/TabBar")}
                        {require("./scene/Home")}
                        {require("./scene/Find")}
                        {require("./scene/Main")}
                    </Stack>
                </Modal>
            </Router>
        );
    }
}
