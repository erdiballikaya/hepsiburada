import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tagActions from "../../redux/actions/tagActions";

class Order extends Component {
    lowestPrice(){
        this.props.actions.lowestPrice()
    }
    highestPrice(){
        this.props.actions.hihgestPrice()
    }
    latest(){
        this.props.actions.latest()
    }
    oldest(){
        this.props.actions.oldest()
    }
    render() {
        return (
            <div className="Order">
                <div className="OrderText">Sıralama</div>
                <ul className="OrderList">
                    <li onClick={() => this.lowestPrice()}>En Düşük Fiyat</li>
                    <li onClick={() => this.highestPrice()}>En Yüksek Fiyat</li>
                    <li onClick={() => this.latest()}>En Yeniler {"(A>Z)"}</li>
                    <li onClick={() => this.oldest()}>En Yeniler {"(Z>A)"}</li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentTag: state.changeTagReducer,
        tags: state.tagListReducer,
        searchString: state.searchStringReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getTags: bindActionCreators(tagActions.getTags, dispatch),
            changeTag: bindActionCreators(tagActions.changeTag, dispatch),
            getTagsByKeyPress: bindActionCreators(tagActions.getTagsByKeyPress, dispatch),
            getTagSuccess: bindActionCreators(tagActions.getTagSuccess, dispatch),
            searchStringSuccsess: bindActionCreators(tagActions.searchStringSuccsess, dispatch),
            getSearchString: bindActionCreators(tagActions.getSearchString, dispatch),
            lowestPrice: bindActionCreators(tagActions.lowestPrice, dispatch),
            hihgestPrice: bindActionCreators(tagActions.hihgestPrice, dispatch),
            latest: bindActionCreators(tagActions.latest, dispatch),
            oldest: bindActionCreators(tagActions.oldest, dispatch),

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);
