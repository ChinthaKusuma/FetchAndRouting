// Write your JS code here

import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  getData = () => {
    const {item} = this.props
    const {id, title, imageUrl, avatarUrl, author, topic} = item
    return (
      <Link className="one" to={`blogs/${id}`}>
        <img src={imageUrl} alt={title} className="img1" />
        <div>
          <h1>{title}</h1>
          <p>{topic}</p>
          <div className="two">
            <img src={avatarUrl} alt={title} className="img2" />

            <p>{author}</p>
          </div>
        </div>
      </Link>
    )
  }

  render() {
    return (
      <li className="li1">
        <div>{this.getData()}</div>
      </li>
    )
  }
}
export default BlogItem
