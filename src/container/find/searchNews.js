import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';
import {SegmentedControl, WingBlank, WhiteSpace} from 'antd-mobile';
import {CachedImage} from 'react-native-img-cache';
import {toJS} from 'mobx';
import {observer, inject} from 'mobx-react/native';

type Props = {};
@inject("searchNewsStore")
@observer
export default class SearchNews extends Component<Props> {
    constructor() {
        super();
        state = {selected: (new Map(): Map<string, boolean>)}
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
        this.props.searchNewsStore.setSelectState(type);
        this.props.searchNewsStore.fetchNews('init');
    }
    _keyExtractor = (item, index) => index + '';
    _renderItem = ({item, key}) => {
        return (
            <TouchableOpacity key={key}>
                <View>
                    <View style={styles.header}>
                        <View style={styles.spaceStyle}/>
                        <Text style={styles.imageTextStyle}>{item.user_info ? item.user_info.name : '无'}</Text>
                        <Text style={styles.userIdStyle}>{item.tag_id}</Text>
                        <View style={styles.userTimeStyle}>
                            <Text style={styles.userTimeTextStyle}>{item.publish_time}</Text>}
                        </View>
                    </View>
                    <View style={styles.userContentStyle}>
                        {/*source={{uri: item.middle_image.url}}/>*/}
                        <CachedImage style={styles.imageStyle}
                                     source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                        <View style={styles.imageViewStyle}>
                            <Text style={styles.imageTextStyle}>{item.title}</Text>
                            <View style={styles.imageViewKeywordsStyle}>
                                <Text style={styles.imageViewKeywordsTextStyle}>{item.keywords}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };
    onRefresh = () => {
        console.log('到顶了...')
        this.props.searchNewsStore.refreshing = true;
        this.props.searchNewsStore.fetchNews('top');
    }
    onEndReached = () => {
        console.log('到底了 ....')
        this.props.searchNewsStore.fetchNews('end');
    }

    render() {
        const {newsInfo, refreshing} = this.props.searchNewsStore;
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <FlatList
                    data={toJS(newsInfo)}//列表中的数据
                    extraData={this.state}//
                    keyExtractor={this._keyExtractor}//用于为给定的item生成一个不重复的key
                    renderItem={this._renderItem}//子组件
                    refreshing={refreshing}//是否正在加载数据,将此属性设为true，列表就会显示出一个正在加载的符号
                    onRefresh={() => this.onRefresh()}//在列表头部添加一个标准的RefreshControl 控件，实现“下拉刷新”的功能
                    onEndReachedThreshold={0.05}//决定当距离内容最底部还有多远时触发onEndReached
                    onEndReached={() => this.onEndReached()}//当列表被滚动到距离内容最底部不足onEndReachedThreshold 的距离时调用
                />
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
    },
    header: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    spaceStyle: {
        height: 15,
    },
    imageTextStyle: {
        fontSize: 14,
        marginLeft: 14,
        color: '#000000'
    },
    userIdStyle: {
        fontSize: 13,
        marginLeft: 8,
        color: '#a6a7a9'
    },
    userTimeStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 15
    },
    userTimeTextStyle: {
        color: '#e6350d',
        fontSize: 12
    },
    userContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fafafa'
    },
    imageStyle: {
        width: 70,
        height: 70,
        borderRadius: 5,
        marginLeft: 15,
    },
    imageViewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    imageViewKeywordsStyle: {
        flexDirection: 'row',
        marginTop: 6
    },
    imageViewKeywordsTextStyle: {
        fontSize: 14,
        marginLeft: 14,
        color: '#666666',
    },
});
