import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tagActions from "../../redux/actions/tagActions";
const ArticlePreview = (props) => {
    return (
        <li >
            <a href="#" className={props.className} onClick={props.onClick}> {props.article}</a>
        </li>
    )
}
class Brands extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            article: "",
            selected: false
        };
    } 
    componentDidMount() {
        this.props.actions.getTagBrands()
    }
    distincTag(arr) {
        var brandArr = arr.map(x => x.brand);
        var filteredArray = brandArr.filter(function (item, pos) {
            return brandArr.indexOf(item) == pos;
        });
        return filteredArray;
    }

    filterByBrand(brand){
        this.props.actions.filterByBrand(brand);
    }
    onSelectArticle = (article) => {
        this.setState({
            selected: true,
            article: article
        })
        this.filterByBrand(article);
    }
    render() {
        return (
            <div>
                <div className="Brand">
                    <div className="BrandText">Marka</div>
                    <ul className="BrandList">
                        {this.distincTag(this.props.tagBrands).map((article, index) =>
                            <ArticlePreview
                                key={index}
                                className={(this.state.selected && (this.state.article === article)) ? 'TagsTextClicked' : 'TagsTextDefault'}
                                onClick={() => this.onSelectArticle(article)}
                                article={article}
                            />)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tagBrands: state.tagBrandsReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getTagBrands: bindActionCreators(tagActions.getTagBrands, dispatch),
            filterByBrand: bindActionCreators(tagActions.filterByBrand, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Brands);
