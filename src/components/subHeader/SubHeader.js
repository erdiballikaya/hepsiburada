import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tagActions from "../../redux/actions/tagActions";

class SubHeader extends Component {

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

    componentDidMount() {
        this.props.actions.getSearchString()
    }
    render() {
        return (
            <div className="SubHeader">
                <div className="PageTitle">
                    <div className="MainTitle">{this.props.searchString}
                        <div className="SubTitle">Aranan Kelime: {this.props.searchString}</div>
                    </div>
                </div>


                <div className="dropdown">
                <div className="OrderButtonWrap">
                    <span className="OrderButtonText">Sıralama                    
                        <span className="OrderVector">
                            <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.34375 0L5.34375 5L10.3438 0L0.34375 0Z" fill="#BDBDBD" />
                            </svg>
                        </span>
                    </span>
                </div>
                    <div className="dropdown-content">
                        <a href="#" onClick={() => this.lowestPrice()}>En Düşük Fiyat</a>
                        <a href="#" onClick={() => this.highestPrice()}>En Yüksek Fiyat</a>
                        <a href="#" onClick={() => this.latest()}>En Yeniler {"(A>Z)"}</a>
                        <a href="#" onClick={() => this.oldest()}>En Yeniler {"(Z>A)"}</a>
                    </div>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);

