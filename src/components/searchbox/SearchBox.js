import React, { Component } from 'react';
import Vector from './Vector.png'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tagActions from "../../redux/actions/tagActions";

var word = "";

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
      }
   
      handleKeyUp = event => {
        console.log(event.target.value);
        var key = event.target.value   
        console.log(key)
        var items = this.props.actions.getTagsByKeyPress(key);
        this.props.actions.getTagSuccess(items.payload); 
        this.props.actions.searchString(key); 
      }
  
     keyPress(e){
        var key = e.target.value     
        console.log(key)
        var a = this.props.currentTag.filter(x => x.title.includes("a"));
        // this.props.actions.getTagSuccess(items.payload); 
     }
    componentDidMount() {
        this.props.actions.getTags()
    }



    render() {
        return (
            <div className="Search">
                <div className="Icon">
                    <img src={Vector} id="glass" alt="glass"></img>
                </div>
                <input className="SearchBox" id="myInput" placeholder="25 milyon’dan fazla ürün içerisinde ara"  onKeyUp={this.handleKeyUp}/>
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
            searchString: bindActionCreators(tagActions.searchString, dispatch)   
            
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
