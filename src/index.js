import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';
import emojiList from './emojiList.json';

ReactDOM.render(<App emojiList={emojiList} />, document.getElementById('root'));