// Type definitions for cordova-plugin-gotenna v0.0.1
// Project: https://github.com/dansteren/cordova-plugin-gotenna
// Definitions by: Dan Steren <https://github.com/dansteren/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Gotenna {
  getApplicationBuildId(): Promise<{}>;
  isInDebugMode(): Promise<{}>;
  setApplicationToken(token: string): void;
  tokenIsVerified(): Promise<{}>;
  bluetoothIsEnabled(): Promise<{}>;
  deviceSupportsBluetooth(): Promise<{}>;
  disableBluetooth(): void;
  getBluetoothStatus(): Promise<{}>;
  showRequestBluetoothPermissionDialog(): void;
  addGtConnectionListener(callback: (gtConnectionState: "CONNECTED" | "DISCONNECTED" | "SCANNING") => any): Promise<{}>;
  clearConnectedGotennaAddress(): void;
  disconnect(): void;
  disconnectWithRetry(): void;
  getConnectedGotennaAddress(): Promise<{}>;
  getGtConnectionState(): Promise<{}>;
  isConnected(): Promise<{}>;
  scanAndConnect(deviceType?: 'V1' | 'MESH'): Promise<{}>;
  stopScan(): Promise<{}>;
  setGoTennaGID(gid: number, username: string): Promise<{}>;
  sendMessage(outgoingData: string, receiverGID: number, willEncrypt: boolean): Promise<{}>;
  setMessageListener(callback: (messageData: any) => void): Promise<{}>;
}

declare namespace gotenna {
  function getApplicationBuildId(): Promise<{}>;
  function isInDebugMode(): Promise<{}>;
  function setApplicationToken(token: string): void;
  function tokenIsVerified(): Promise<{}>;
  function bluetoothIsEnabled(): Promise<{}>;
  function deviceSupportsBluetooth(): Promise<{}>;
  function disableBluetooth(): void;
  function getBluetoothStatus(): Promise<{}>;
  function showRequestBluetoothPermissionDialog(): void;
  function addGtConnectionListener(callback: (gtConnectionState: "CONNECTED" | "DISCONNECTED" | "SCANNING") => any): Promise<{}>;
  function clearConnectedGotennaAddress(): void;
  function disconnect(): void;
  function disconnectWithRetry(): void;
  function getConnectedGotennaAddress(): Promise<{}>;
  function getGtConnectionState(): Promise<{}>;
  function isConnected(): Promise<{}>;
  function scanAndConnect(deviceType?: 'V1' | 'MESH'): Promise<{}>;
  function stopScan(): Promise<{}>;
  function setGoTennaGID(gid: number, username: string): Promise<{}>;
  function sendMessage(outgoingData: string, receiverGID: number, willEncrypt: boolean): Promise<{}>;
  function setMessageListener(callback: (messageData: any) => void): Promise<{}>;
}

interface Window {
  gotenna: Gotenna
}
