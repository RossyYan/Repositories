// MyConfig.ets
export interface Config {
  type:string;
  username: string;
  password: string;
  login:(usernameEntry:string,passwordEntry:string) =>Boolean
}

export enum loginType{
  a="alipay",
  w="wechat",
  e="empty"
}

