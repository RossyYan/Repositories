//index.ets
import { Auth, Wechat, Alipay } from "../../utils/MyClass"

//User input
let loginType:string = "wechat"
let usernameEntry:string ="YYH"
let passwordEntry:string ="12345"

//Server data
let auth : Auth = TypeSelection(loginType)
let msg: string
auth.username= "Rossy"
auth.password= "46525"

toLogin(auth)

//Functions
function TypeSelection(loginType:string):Auth{
  switch (loginType) {
    case 'alipay':
      return new Alipay();
    case 'wechat':
      return new Wechat();
    default:
      return new Auth();
  }
}
function toLogin(x:Auth){
  if(x.login(usernameEntry,passwordEntry)){
    msg = x.type+"登录成功"
  }else{
    msg = x.type+"登录失败"
  }
}


@Entry
@Component
struct Index {
  @State message:string = msg

  build() {
    RelativeContainer() {
      Text(this.message)
        .id('login')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
    }
    .height('100%')
    .width('100%')
  }
}
