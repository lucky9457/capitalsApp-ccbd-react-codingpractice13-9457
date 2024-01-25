import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {stateid: countryAndCapitalsList[0].id}

  change = event => {
    const tar = event.target.value

    this.setState({
      stateid: tar,
    })
  }

  render() {
    const {stateid} = this.state
    const countries = countryAndCapitalsList.filter(each => each.id === stateid)
    console.log(countries)
    return (
      <div className="main">
        <div className="card">
          <h1 className="head">Countries And Capitals</h1>
          <div className="selectcon">
            <select onChange={this.change} id="sel" className="selection">
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <caption className="cap" htmlFor="sel">
              is capital of which country
            </caption>
            ?
          </div>
          <p className="country">{countries[0].country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
