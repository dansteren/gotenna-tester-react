// Type definitions for cordova-plugin-gotenna v0.0.1
// Project: https://github.com/dansteren/cordova-plugin-gotenna
// Definitions by: Dan Steren <https://github.com/dansteren/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type GotennaConnectionState = "CONNECTED" | "DISCONNECTED" | "SCANNING";
type GotennaBluetoothStatus = "NOT_SUPPORTED" | "SUPPORTED_AND_ENABLED" | "SUPPORTED_NOT_ENABLED";

interface Gotenna {
  getApplicationBuildId(): Promise<{}>;
  hasSuperToken(): Promise<boolean>;
  isInDebugMode(): Promise<boolean>;
  setApplicationToken(token: string): void;
  tokenIsVerified(): Promise<boolean>;
  bluetoothIsEnabled(): Promise<boolean>;
  deviceSupportsBluetooth(): Promise<boolean>;
  disableBluetooth(): void;
  getBluetoothStatus(): Promise<GotennaBluetoothStatus>;
  showRequestBluetoothPermissionDialog(): void;
  addGtConnectionListener(callback: (gtConnectionState: GotennaConnectionState) => any): Promise<{}>;
  clearConnectedGotennaAddress(): void;
  disconnect(): void;
  disconnectWithRetry(): void;
  getConnectedGotennaAddress(): Promise<string>;
  getGtConnectionState(): Promise<GotennaConnectionState>;
  isConnected(): Promise<boolean>;
  scanAndConnect(deviceType?: 'V1' | 'MESH'): Promise<{}>;
  stopScan(): Promise<{}>;
  setGoTennaGID(gid: number, username: string): Promise<{}>;
  sendMessage(outgoingData: string, receiverGID: number, willEncrypt: boolean): Promise<{}>;
  setMessageListener(callback: (messageData: any) => void): Promise<{}>;
}

declare namespace gotenna {
  function getApplicationBuildId(): Promise<{}>;
  function hasSuperToken(): Promise<boolean>;
  function isInDebugMode(): Promise<boolean>;
  function setApplicationToken(token: string): void;
  function tokenIsVerified(): Promise<boolean>;
  function bluetoothIsEnabled(): Promise<boolean>;
  function deviceSupportsBluetooth(): Promise<boolean>;
  function disableBluetooth(): void;
  function getBluetoothStatus(): Promise<GotennaBluetoothStatus>;
  function showRequestBluetoothPermissionDialog(): void;
  function addGtConnectionListener(callback: (gtConnectionState: GotennaConnectionState) => any): Promise<{}>;
  function clearConnectedGotennaAddress(): void;
  function disconnect(): void;
  function disconnectWithRetry(): void;
  function getConnectedGotennaAddress(): Promise<string>;
  function getGtConnectionState(): Promise<GotennaConnectionState>;
  function isConnected(): Promise<boolean>;
  function scanAndConnect(deviceType?: 'V1' | 'MESH'): Promise<{}>;
  function stopScan(): Promise<{}>;
  function setGoTennaGID(gid: number, username: string): Promise<{}>;
  function sendMessage(outgoingData: string, receiverGID: number, willEncrypt: boolean): Promise<{}>;
  function setMessageListener(callback: (messageData: any) => void): Promise<{}>;
}

interface Window {
  gotenna: Gotenna
}
