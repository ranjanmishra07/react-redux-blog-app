import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {fetchPost,deletePost} from '../actions/index'

class PostsShow extends Component{

    static contextTypes={
        router:PropTypes.object
    }
    componentWillMount(){
        this.props.fetchPost(this.props.params.id)
    }
    onDeleteClick(){

        this.props.deletePost(this.props.params.id)
          .then(()=>{
              this.context.router.push('/')
          })
    }
    render(){
        if (!this.props.post){
            return <div>loading....</div>
        }
        return(
            
            
            <div>
              <Link to="/">back to index page</Link>
              <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">Delete post</button>
              <h3>{this.props.post.title}</h3>
              <h4>Categories:{this.props.post.categories}</h4>
              <p>{this.props.post.content}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {post:state.posts.post}
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow)