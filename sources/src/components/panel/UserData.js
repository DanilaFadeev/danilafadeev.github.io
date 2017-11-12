import { setCookie, getCookie } from '../../helpers';

export default class UserData {
  constructor() {
    this.accountProfile = document.getElementById('accountProfile');
    this.usernameField  = document.getElementById('username_field');
    this.passwordField  = document.getElementById('password_field');

    this.usernameField.innerText = getCookie('username') || 'Guest';
    this.usernameField.onclick = this.changeUsername.bind(this);

    if (getCookie('userpass')) {
      this.passwordField.innerText = getCookie('userpass').replace(/\w/g, "*");
    } else {
      this.passwordField.innerText = "Click to input the password";
    }
    this.passwordField.onclick = this.changeUserpass.bind(this);
  }

  changeUsername(event) {
    if (this.usernameField.innerText.length > 0) {
      const username = this.usernameField.innerText;
      const input = document.createElement('input');

      input.type = 'text';
      input.value = username;
      input.onblur = () => {
        const newName = input.value;
        this.usernameField.innerText = newName;
        setCookie('username', newName);
      };
      this.usernameField.innerText = '';
      this.usernameField.append(input);
    }
  }

  changeUserpass(event) {
    if (this.passwordField.innerText.length > 0) {
      const userpass = getCookie('userpass');

      const input = document.createElement('input');
      input.type = 'text';
      input.value = userpass;
      input.onblur = () => {
        const newPass = input.value;
        this.passwordField.innerText = newPass.replace(/\w/g, "*");
        setCookie('userpass', newPass);
      };
      this.passwordField.innerText = '';
      this.passwordField.append(input);
    }
  }
}
