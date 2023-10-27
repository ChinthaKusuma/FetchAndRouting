// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogs: [], isLoad: true}

  componentDidMount() {
    this.getData1()
  }

  getData1 = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({
      blogs: updatedData,
      isLoad: false,
    })
  }

  render() {
    const {blogs, isLoad} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogs

    return (
      <ul>
        {isLoad ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="bgContainer">
            <h1>{title}</h1>
            <div className="three">
              <img src={avatarUrl} alt="title" className="img2" />
              <p>{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="img3" />
            <p>{content}</p>
          </div>
        )}
      </ul>
    )
  }
}
export default BlogItemDetails
