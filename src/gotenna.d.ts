// Type definitions for cordova-plugin-gotenna v0.0.1
// Project: https://github.com/dansteren/cordova-plugin-gotenna
// Definitions by: Dan Steren <https://github.com/dansteren/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface GoTenna {
  getApplicationBuildId: () => Promise<{}>;
  isInDebugMode: () => Promise<{}>;
  setApplicationToken: (token: string) => void;
  tokenIsVerified: () => Promise<{}>;
  bluetooth: {
      BluetoothAdapterManager: {
          BluetoothStatus: {
              NOT_SUPPORTED: 'NOT_SUPPORTED';
              SUPPORTED_AND_ENABLED: 'SUPPORTED_AND_ENABLED';
              SUPPORTED_NOT_ENABLED: 'SUPPORTED_NOT_ENABLED';
          };
          bluetoothIsEnabled: () => Promise<{}>;
          deviceSupportsBluetooth: () => Promise<{}>;
          disableBluetooth: () => void;
          getBluetoothStatus: () => Promise<{}>;
          showRequestBluetoothPermissionDialog: () => void;
      };
      GTConnectionManager: {
          GTConnectionState: {
              CONNECTED: 'CONNECTED';
              DISCONNECTED: 'DISCONNECTED';
              SCANNING: 'SCANNING';
          };
          addGtConnectionListener: (callback: (gtConnectionState: "CONNECTED" | "DISCONNECTED" | "SCANNING") => void) => Promise<{}>;
          clearConnectedGotennaAddress: () => void;
          disconnect: () => void;
          disconnectWithRetry: () => void;
          getConnectedGotennaAddress: () => Promise<{}>;
          getGtConnectionState: () => Promise<string>;
          isConnected: () => Promise<{}>;
          scanAndConnect: (deviceType?: 'V1' | 'MESH') => Promise<{}>;
          stopScan: () => Promise<{}>;
      };
  };
  commands: {
      GTCommandCenter: {
          setGoTennaGID: (gid: number, username: string) => Promise<{}>;
          sendMessage: (outgoingData: string, receiverGID: number, willEncrypt: boolean) => Promise<{}>;
          setMessageListener: (callback: (messageData: any) => void) => Promise<{}>;
      };
  };
}

interface Window {
  goTenna: GoTenna
}
