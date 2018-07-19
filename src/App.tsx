import * as React from 'react';
import './App.css';

enum ConnectionState {
  Connected = "CONNECTED",
  Disconnected ="DISCONNECTED",
  Scanning = "SCANNING"
}

class App extends React.Component<{}, {}> {
  public constructor(props: {}) {
    super(props);
    this.getConnectionState = this.getConnectionState.bind(this);
    this.getConnectedGotennaAddress = this.getConnectedGotennaAddress.bind(this);
    this.clearConnectedGotennaAddress = this.clearConnectedGotennaAddress.bind(this);
    this.scanForNewGotenna = this.scanForNewGotenna.bind(this);
    this.scanForOldGotenna = this.scanForOldGotenna.bind(this);
    this.stopScan = this.stopScan.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.onIncomingMessage = this.onIncomingMessage.bind(this);
    this.setGID = this.setGID.bind(this);
    if(window.gotenna){
      gotenna.addGtConnectionListener(this.onConnectionStateUpdated);
      gotenna.setMessageListener(this.onIncomingMessage);
    }
  }

  public render() {
    return (
      <div className="app">
        <div className="navbar">Bob</div>
        <button className="button-block" onClick={this.getConnectionState}>GET CONNECTION STATE</button>
        <button className="button-block" onClick={this.getConnectedGotennaAddress}>GET CONNECTED GOTENNA ADDRESS</button>
        <button className="button-block" onClick={this.clearConnectedGotennaAddress}>CLEAR CONNECTED GOTENNA ADDRESS</button>
        <button className="button-block" onClick={this.scanForNewGotenna}>SCAN FOR V1 GOTENNA</button>
        <button className="button-block" onClick={this.scanForOldGotenna}>SCAN FOR MESH GOTENNA</button>
        <button className="button-block" onClick={this.stopScan}>STOP SCAN</button>
        <button className="button-block" onClick={this.disconnect}>DISCONNECT</button>
        <button className="button-block" onClick={this.setGID}>SET GID</button>
        <button className="button-block" onClick={this.sendMessage}>SEND MESSAGE</button>
      </div>
    );
  }

  private onConnectionStateUpdated(gtConnectionState: ConnectionState) {
    console.log('onConnectionStateUpdated ' + gtConnectionState);
  }

  private async getConnectedGotennaAddress() {
    const result = await gotenna.getConnectedGotennaAddress();
    console.log('getConnectedGotennaAddress: ', result);
  }

  private async clearConnectedGotennaAddress() {
    const result = await gotenna.clearConnectedGotennaAddress();
    console.log('clearConnectedGotennaAddress: ', result);
  }

  private async getConnectionState() {
    const result = await gotenna.getGtConnectionState();
    console.log('getGtConnectionState: ', result);
  }

  private scanForNewGotenna() {
    gotenna.scanAndConnect();
    console.log('New Scan clicked...');
  }

  private scanForOldGotenna() {
    gotenna.scanAndConnect('MESH');
    console.log('Old Scan clicked...');
  }

  private async stopScan() {
    console.log('Stopping Scan...');
    await gotenna.stopScan();
    console.log('Scan stopped');
  }

  private disconnect() {
    gotenna.disconnect();
    console.log('Disconnecting...');
  }

  private onIncomingMessage(message: string) {
    console.log('onIncomingMessage: ',  message);
  }

  private async setGID() {
    try {
      await gotenna.setGoTennaGID(4321123123, 'Bob');
      console.log('goTennaGID set successfully!');
    } catch (error) {
      console.error('setGoTennaGID: ', error);
    }
  }

  private async sendMessage() {
    try {
      await gotenna.sendMessage('This is a message from Bob', 678912313, false);
      console.log('message sent!');
    } catch (error) {
      console.error('sendMessage: ', error);
    }
  }
}

export default App;
