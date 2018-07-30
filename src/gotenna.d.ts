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

  //#region UserDataStore
  addGroupGID(groupGID: number): void;
  addMulticastGroupGID(groupGID: number): void;
  deleteCurrentUser(): void;
  deleteGroupGID(groupGID: number): void;
  deleteMulticastGroupGID(groupGID: number): void;
  getCurrentUser(): Promise<gotenna.User | undefined>;
  hasGroupGID(groupGID: number): Promise<boolean>;
  hasMulticastGroupGID(groupGID: number): Promise<boolean>;
  hasValidUser(): Promise<boolean>;
  isMyGID(gid: number): Promise<boolean>;
  registerUser(name: string, gid: number): Promise<gotenna.User>;
  saveCurrentUser(): void;
  setCurrentUser(user: gotenna.User): void;
  updateLastConnectedTime(): void;
  updateLastLocation(latitude: number, longitude: number, accuracy: number, timestamp: number): void;
  //#endregion UserDataStore
}

declare namespace gotenna {

  export interface IUserOptions {
    gid?: number;
    kGroupGIDs?: number[];
    kMulticastGroupGIDs?: number[];
    lastConnectedTime?: number;
    latitude?: number;
    locationAccuracy?: number;
    locationTimestamp?: number;
    longitude?: number;
    name?: string;
  }
  export class User {
    /**
     * Helper methods for creating a brand new user object.
     * @param name The name of the user.
     * @param gid The goTenna ID of the user.
     */
    static createUser(name: string, gid: number): User;
    gid: number;
    kGroupGIDs: number[];
    kMulticastGroupGIDs: number[];
    lastConnectedTime: number;
    latitude: number;
    locationAccuracy: number;
    locationTimestamp: number;
    longitude: number;
    name: string;
    /**
     * A model representing the current goTenna User. There is typically only one instance of this class via UserDataStore
     */
    constructor(options?: IUserOptions);
    /**
     * Adds the group GID to the list of the user's valid group GIDs.
     * @param groupGID The group GID to add.
     */
    addGroupGID(groupGID: number): void;
    /**
     * Adds the multicast group GID to the list of the user's valid group GIDs.
     * @param groupGID The group GID to add.
     */
    addMulticstGroupGID(groupGID: number): void;
    /**
     * Removes the group GID from the user's list of valid GIDs.
     * @param groupGID The group GID to delete.
     */
    deleteGroupGID(groupGID: number): void;
    /**
     * Removes the group GID from the user's list of valid GIDs.
     * @param groupGID The multicast group GID to delete.
     */
    deleteMulticastGroupGID(groupGID: number): void;
    /**
     * The GID (goTenna ID) of this specific user.
     */
    getGID(): number;
    /**
     * Retrieves the list of the GIDs of all the groups this user belongs to.
     */
    getGroupGIDs(): number[];
    /**
     * The last known time that the user was connected to the goTenna.
     */
    getLastConnectedTime(): number;
    /**
     * Retrieves the user's last recorded gps location.
     */
    getLastLocation(): Coordinates;
    /**
     * Retrieves the user's last recorded position.
     */
    getLastPosition(): Position;
    /**
     * Retrieves the list of the GIDs of all the multicast groups this user belongs to.
     */
    getMulticastGroupGIDs(): number[];
    /**
     * The name of the user i.e.) John Doe.
     */
    getName(): string;
    /**
     * Checks to see if this group GID is already listed as one of the user's valid group GIDs.
     * @param groupGID The group GID to check.
     */
    hasGroupGID(groupGID: number): boolean;
    /**
     * Checks to see if this multicast group GID is already listed as one of the user's valid group GIDs.
     * @param groupGID The multicast group GID to check.
     */
    hasMulticastGroupGID(groupGID: number): boolean;
    /**
     * The users initials based on their name. **Note:** this may not work the same as the native SDK.
     */
    initials(): string;
    /**
     * Sets the GID (goTenna ID) of this specific user.
     * @param gid The GID (goTenna ID) of this specific user.
     */
    setGID(gid: number): void;
    /**
     * Sets the last known time that the user was connected to the goTenna.
     * @param timestamp The milliseconds timestamp of the last known time that the user was connected to the goTenna.
     */
    setLastConnectedTime(timestamp: number): void;
    /**
     * Sets the user's name i.e.) John Doe.
     * @param name The user's name.
     */
    setName(name: string): void;
    /**
     * Updates the user's last recorded location. This location is cached with the user's basic info.
     * @param latitude The user's last recorded latitude.
     * @param longitude The user's last recorded longitude.
     * @param accuracy The horizontal accuracy of the recorded location.
     * @param timestamp The milliseconds timestamp of when the location was recorded.
     */
    updateLocation(latitude: number, longitude: number, accuracy: number, timestamp: number): void;
    /**
     * Updates the user's last recorded position.
     * @param position The user's last recorded position.
     */
    updatePosition(position: Position): void;
  }

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

  //#region UserDataStore
  function addGroupGID(groupGID: number): void;
  function addMulticastGroupGID(groupGID: number): void;
  function deleteCurrentUser(): void;
  function deleteGroupGID(groupGID: number): void;
  function deleteMulticastGroupGID(groupGID: number): void;
  function getCurrentUser(): Promise<User | undefined>;
  function hasGroupGID(groupGID: number): Promise<boolean>;
  function hasMulticastGroupGID(groupGID: number): Promise<boolean>;
  function hasValidUser(): Promise<boolean>;
  function isMyGID(gid: number): Promise<boolean>;
  function registerUser(name: string, gid: number): Promise<User>;
  function saveCurrentUser(): void;
  function setCurrentUser(user: User): void;
  function updateLastConnectedTime(): void;
  function updateLastLocation(latitude: number, longitude: number, accuracy: number, timestamp: number): void;
  //#endregion UserDataStore
}

interface Window {
  gotenna: Gotenna
}
