// MyClass.ets
import { Config,loginType} from './MyConfig';

export class Auth implements Config {
  type:string = loginType.e;
  username: string = "";
  password: string = "";
  login = (usernameEntry: string,passwordEntry: string): boolean => {
    console.log(`Logging in: ${this.username}`);
    return this.username === usernameEntry && this.password ===passwordEntry;
  };
}

export class Alipay extends Auth {
  type = loginType.a
  username: string = "";
  password: string = "";
  login = (usernameEntry: string,passwordEntry: string): boolean => {
    console.log(`Logging in with Alipay: ${this.username}`);
    return this.username === usernameEntry && this.password ===passwordEntry;
  };
}

export class Wechat extends Auth {
  type = loginType.w
  username: string = "";
  password: string = "";
  login = (usernameEntry: string,passwordEntry: string): boolean => {
    console.log(`Logging in with Wechat: ${this.username}`);
    return this.username === usernameEntry && this.password ===passwordEntry;
  };
}

