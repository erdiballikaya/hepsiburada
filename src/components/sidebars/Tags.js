import React, { Component } from 'react'
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
class Tags extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: "",
            selected: false
        };
    }   

    distincTag(arr) {
        var colorArr = arr.map(x => x.color);
        var filteredArray = colorArr.filter(function (item, pos) {
            return colorArr.indexOf(item) == pos;
        });
        return filteredArray;
    }

    onSelectArticle = (article) => {
        this.setState({
            selected: true,
            article: article
        })
        this.props.actions.changeTag(article);
        this.props.actions.filterByColor(article);

    }
    componentDidMount() {
        this.props.actions.getTags();
        this.props.actions.getTagColors();
    }

    render() {
        return (
            <div className="Tags">
                <div className="TagsText">Renk</div>
                <ul className="TagsList">
                    {
                        this.distincTag(this.props.tagColors).map((article, index) =>
                            <ArticlePreview
                                key={index}
                                className={(this.state.selected && (this.state.article === article)) ? 'TagsTextClicked' : 'TagsTextDefault'}
                                onClick={() => this.onSelectArticle(article)}
                                article={article}
                            />)
                    }
                </ul>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        currentTag: state.changeTagReducer,
        tags: state.tagListReducer,
        tagColors: state.tagColorsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getTags: bindActionCreators(tagActions.getTags, dispatch),
            changeTag: bindActionCreators(tagActions.changeTag, dispatch),
            getTagColors:  bindActionCreators(tagActions.getTagColors, dispatch),
            filterByColor: bindActionCreators(tagActions.filterByColor, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
