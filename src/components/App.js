import React from 'react';

class App extends React.Component {
  state = {
    search: ''
  };

  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    let filteredEmojis = this.props.emojiList.filter(
      (emoji) => {
        return emoji.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || emoji.keywords.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div className="app">
        <h1>Search for an Emoji</h1>
        <p>Type a word like 'laugh' or 'kiss' or 'food' and get a matching emoji!</p>
        <form>
          <input 
          type="text" 
          value={this.state.search} 
          onChange={this.updateSearch.bind(this)}
          placeholder="Type your emoji word..." 
          />
        </form>
        <div className="results">
          {
            filteredEmojis.map(function (emoji, i) {
              return (
                <ul>
                  <li key={i}><p className="symbol">{emoji.symbol}</p><h3>{emoji.title}</h3></li>
                </ul>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;