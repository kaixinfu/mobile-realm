import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {SegmentedControl, WingBlank} from 'antd-mobile';

import SearchNews from './searchNews'
import {inject, observer} from "mobx-react/native";

type Props = {};
@inject("searchNewsStore")
@observer
export default class Find extends Component<Props> {
    constructor() {
        super();
    };

    componentDidMount() {
        this.props.searchNewsStore.init();
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchNews/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf: 'center',
    }
});
