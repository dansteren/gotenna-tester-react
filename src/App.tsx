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
    if(window.goTenna){
      window.goTenna.bluetooth.GTConnectionManager.addGtConnectionListener(this.onConnectionStateUpdated);
      window.goTenna.commands.GTCommandCenter.setMessageListener(this.onIncomingMessage);
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
    const result = await window.goTenna.bluetooth.GTConnectionManager.getConnectedGotennaAddress();
    console.log('getConnectedGotennaAddress: ', result);
  }

  private async clearConnectedGotennaAddress() {
    const result = await window.goTenna.bluetooth.GTConnectionManager.clearConnectedGotennaAddress();
    console.log('clearConnectedGotennaAddress: ', result);
  }

  private async getConnectionState() {
    const result = await window.goTenna.bluetooth.GTConnectionManager.getGtConnectionState();
    console.log('getGtConnectionState: ', result);
  }

  private scanForNewGotenna() {
    window.goTenna.bluetooth.GTConnectionManager.scanAndConnect();
    console.log('New Scan clicked...');
  }

  private scanForOldGotenna() {
    window.goTenna.bluetooth.GTConnectionManager.scanAndConnect('MESH');
    console.log('Old Scan clicked...');
  }

  private async stopScan() {
    console.log('Stopping Scan...');
    await window.goTenna.bluetooth.GTConnectionManager.stopScan();
    console.log('Scan stopped');
  }

  private disconnect() {
    window.goTenna.bluetooth.GTConnectionManager.disconnect();
    console.log('Disconnecting...');
  }

  private onIncomingMessage(message: string) {
    console.log('onIncomingMessage: ',  message);
  }

  private async setGID() {
    try {
      await window.goTenna.commands.GTCommandCenter.setGoTennaGID(4321123123, 'Bob');
      console.log('goTennaGID set successfully!');
    } catch (error) {
      console.error('setGoTennaGID: ', error);
    }
  }

  private async sendMessage() {
    try {
      await window.goTenna.commands.GTCommandCenter.sendMessage('This is a message from Bob', 678912313, false);
      console.log('message sent!');
    } catch (error) {
      console.error('sendMessage: ', error);
    }
  }
}

export default App;
