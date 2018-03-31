import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {SegmentedControl, WingBlank, WhiteSpace} from 'antd-mobile';
import {toJS} from 'mobx';
import {observer, inject} from 'mobx-react/native';

type Props = {};
@inject("searchNewsStore")
@observer
export default class SearchNews extends Component<Props> {
    constructor() {
        super();
    }

    renderHeader = () => {
        const {selectNews, selectState} = this.props.searchNewsStore;
        return (
            <WingBlank size="lg" style={styles.scExampleStyle}>
                <WhiteSpace size="lg"/>
                <WhiteSpace size="lg"/>
                <SegmentedControl selectedIndex={selectState}
                                  onValueChange={(type) => this.setSelectState(type)}
                                  values={toJS(selectNews)}/>
            </WingBlank>
        )
    }
    setSelectState = (type) => {
        this.props.searchNewsStore.setSelectState(type)
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
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
    },
    scExampleStyle: {
        paddingBottom: 13
    }
});
