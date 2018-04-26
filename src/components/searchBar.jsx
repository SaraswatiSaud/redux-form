import React, {Component} from 'react'
import '../css/searchBar.css'

class SearchBar extends Component{
  constructor(props) {
    super(props)
    this.state = {
      initialItems: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      items: [],
      showMenu: false
    }
  }

  showMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  filterList = (event) => {
    let updatedList = this.state.initialItems
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1
    })
    this.setState({items: updatedList})
  }

  componentWillMount(){
    this.setState({items: this.state.initialItems})
  }

  render(){
    return (
      <div>
        <button onClick={this.showMenu} className="button">Show Menu</button>
        {
          this.state.showMenu ?
          <div>
            <input type="text" placeholder="Search a day" onChange={this.filterList} className='input' />
            <List items={this.state.items}/>
          </div>
          : ''
        }
        {
          this.state.items.length === 0 ? <p>No items</p> : ''
        }
      </div>
    );
  }
}

class List extends Component{
  render(){
    return (
      <div>
        {
          this.props.items.map((item) => {
            return (
              <div>
                <a href='#' key={item}>{item}</a>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default SearchBar
