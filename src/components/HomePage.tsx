import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import * as React from 'react';
import './HomePage.css';

interface IState {
  snackbarOpen: boolean;
  snackbarMessage: string;
}

class App extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      snackbarMessage: '',
      snackbarOpen: false,
    }
    this.addGroupGID = this.addGroupGID.bind(this);
    this.addMulticastGroupGID = this.addMulticastGroupGID.bind(this);
    this.deleteCurrentUser = this.deleteCurrentUser.bind(this);
    this.deleteGroupGID = this.deleteGroupGID.bind(this);
    this.deleteMulticastGroupGID = this.deleteMulticastGroupGID.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.hasGroupGID = this.hasGroupGID.bind(this);
    this.hasMulticastGroupGID = this.hasMulticastGroupGID.bind(this);
    this.hasValidUser = this.hasValidUser.bind(this);
    this.isMyGID = this.isMyGID.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.saveCurrentUser = this.saveCurrentUser.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.updateLastConnectedTime = this.updateLastConnectedTime.bind(this);
    this.updateLastLocation = this.updateLastLocation.bind(this);
  }

  public render() {
    return (
      <div className="app">
        <div className="navbar">Bob</div>
        <div className="main-content">
          <Button variant="contained" onClick={this.addGroupGID}>Add Group GID</Button>
          <Button variant="contained" onClick={this.addMulticastGroupGID}>Add Multicast Group GID</Button>
          <Button variant="contained" onClick={this.deleteCurrentUser}>Delete Current User</Button>
          <Button variant="contained" onClick={this.deleteGroupGID}>Delete Group GID</Button>
          <Button variant="contained" onClick={this.deleteMulticastGroupGID}>Delete Multicast Group GID</Button>
          <Button variant="contained" onClick={this.getCurrentUser}>Get Current User</Button>
          <Button variant="contained" onClick={this.hasGroupGID}>Has Group GID</Button>
          <Button variant="contained" onClick={this.hasMulticastGroupGID}>Has Multicast Group GID</Button>
          <Button variant="contained" onClick={this.hasValidUser}>Has Valid User</Button>
          <Button variant="contained" onClick={this.isMyGID}>Is My GID?</Button>
          <Button variant="contained" onClick={this.registerUser}>Register User</Button>
          <Button variant="contained" onClick={this.saveCurrentUser}>Save Current User</Button>
          <Button variant="contained" onClick={this.setCurrentUser}>Set Current User</Button>
          <Button variant="contained" onClick={this.updateLastConnectedTime}>Update Last Connected Time</Button>
          <Button variant="contained" onClick={this.updateLastLocation}>Update Last Location</Button>
          <Snackbar
            anchorOrigin={{
              horizontal: 'left',
              vertical: 'top',
            }}
            open={this.state ? this.state.snackbarOpen : false}
            autoHideDuration={1500}
            onClose={this.handleSnackbarClose}
            message={<span id="message-id">{this.state ? this.state.snackbarMessage : ''}</span>}
          />
        </div>
      </div>
    );
  }

  private addGroupGID() {
    this.execute(() => {
      gotenna.addGroupGID(2314321123);
      this.toast('addGroupGID: success');
    });
  }

  private addMulticastGroupGID() {
    this.execute(() => {
      gotenna.addMulticastGroupGID(1111111111);
      this.toast('addMulticastGroupGID: success');
    });
  }

  private deleteCurrentUser() {
    this.execute(() => {
      gotenna.deleteCurrentUser();
      this.toast('deleteCurrentUser: success');
    });
  }

  private deleteGroupGID() {
    this.execute(() => {
      gotenna.deleteGroupGID(2314321123);
      this.toast('deleteGroupGID: success')
    })
  }

  private deleteMulticastGroupGID() {
    this.execute(() => {
      gotenna.deleteMulticastGroupGID(1111111111);
      this.toast('deleteGroupGID: success')
    })
  }

  private getCurrentUser() {
    this.execute(async () => {
      const user = await gotenna.getCurrentUser();
      console.log(user);
      if(!user) {
        this.toast('getCurrentUser: undefined');
      } else {
        this.toast(`getCurrentUser: ${user.name} (${user.initials()}) - ${user.gid}`);
      }
    });
  }

  private hasGroupGID() {
    this.execute(async () => {
      const hasGID = await gotenna.hasGroupGID(2314321123);
      this.toast('hasGroupGID: ' + hasGID)
    })
  }

  private hasMulticastGroupGID() {
    this.execute(async () => {
      const hasGID = await gotenna.hasMulticastGroupGID(1111111111);
      this.toast('hasMulticastGroupGID: ' + hasGID)
    })
  }

  private hasValidUser() {
    this.execute(async () => {
      const hasValidUser = await gotenna.hasValidUser();
      this.toast('hasValidUser: ' + hasValidUser);
    });
  }

  private isMyGID() {
    this.execute(async () => {
      const isMyGID = await gotenna.isMyGID(1234567890);
      this.toast('isMyGID: ' + isMyGID)
    })
  }

  private registerUser() {
    this.execute(async () => {
      const user = await gotenna.registerUser("Bob the Builder", 9999999999);
      console.log(user);
      this.toast(`registerUser: ${user.name} (${user.gid})`);
    })
  }

  private saveCurrentUser() {
    this.execute(() => {
      gotenna.saveCurrentUser();
      this.toast('saveCurrentUser: success')
    });
  }

  private setCurrentUser() {
    this.execute(() => {
      const newUser = new gotenna.User({
        gid: 1234567890,
        name: "Dan Orama",
      })
      gotenna.setCurrentUser(newUser);
      this.toast('setCurrentUser: success')
    });
  }

  private updateLastConnectedTime() {
    this.execute(() => {
      gotenna.updateLastConnectedTime();
      this.toast('updateLastConnectedTime: success')
    });
  }

  private updateLastLocation() {
    this.execute(() => {
      gotenna.updateLastLocation(40.244261699999996, -111.64729609999999, 30, Date.now());
      this.toast('updateLastLocation: success')
    });
  }

  private execute(callback: () => void) {
    if(window.gotenna) {
      callback()
    } else {
      this.toast('goTenna Unavailable');
    }
  }

  private toast(message: string) {
    this.setState({
      snackbarMessage: message,
      snackbarOpen: true,
    })
  }

  private handleSnackbarClose = (event: any) => {
    this.setState({ snackbarOpen: false });
  };
}

export default App;
