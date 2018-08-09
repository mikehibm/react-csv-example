import * as React from 'react';
import './App.css';
import { FileSelect } from './FileSelect';
import { Report } from './Report';
import { readFileAsText, mapCSVToArray } from './helpers';
import { mapArrayToWorkItem } from './WorkItem';

class App extends React.Component {
  state = { screen: 'home', items: [] };

  handleSubmit = async (file: Blob) => {
    try {
      const csv = await readFileAsText(file);
      const arr = mapCSVToArray(csv);
      const items = mapArrayToWorkItem(arr);
      this.setState({ screen: 'report', items });
    } catch (error) {
      alert(error);
    }
  };

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Work Report</h1>
        </header>
        {this.state.screen === 'home' ? (
          <FileSelect onSubmit={this.handleSubmit} />
        ) : (
          <Report items={this.state.items} />
        )}
      </div>
    );
  }
}

export default App;
