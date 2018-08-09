import * as React from 'react';

interface Props {
  onSubmit: (file: Blob) => void;
}

export class FileSelect extends React.Component<Props> {
  private file: HTMLInputElement;

  handleShowReport = async () => {
    if (!this.file.files || !this.file.files[0]) {
      return;
    }
    this.props.onSubmit(this.file.files[0]);
  };

  render() {
    return (
      <div>
        <p className="App-intro">CSVファイルを選択してください。</p>
        <input
          type="file"
          className="file"
          ref={(file: HTMLInputElement) => (this.file = file)}
          accept="text/csv"
        />
        <button onClick={this.handleShowReport}>Show Report</button>
      </div>
    );
  }
}
