interface Person{
  name: string
  age: number
  jump:(height:number)=>string
}

class Student implements Person {
  name: string = "";
  age: number;
  constructor() {
    this.age = 10
  }
  jump(height:number){
    return""
  };
  study(){
    console.log("学生在课堂学习")
  }
}

class superStudent extends Student{
  play(){}
  study(): void {
    console.log("super在学习")
  }
}

 class Teacher implements Person{
  name:string = "";
  age:number;
  constructor() {
    this.age = 10
  }
  jump(height:number){
    return""
  };
  teach(){}
}

function say(p: Person ){
  p.jump(10)
}

const yyh:Student = new Student()
const li:Teacher = new Teacher()
const yan:superStudent = new superStudent()

yyh.study()
yan.study()

let x = 1
let y = "1"

say(yyh)
say(li)
say(yan)

const ID:Person = {
  name: "Yan-yu-han",
  age: 19,
  jump: (height: number): string => {
    throw new Error('Function not implemented.')
  }
}

import { default as Student} from:"../../utils/MyTest"
import Tea from:"../../utils/MyTest"
import Teacher{test as testhere }from"../../utils/MyTest"
const s = new Student("Tom")

@Entry
@Component
struct Index {
  @State message: string = 'Hello! 🙂 ArkTS World';

  build() {
    RelativeContainer() {
      Text(s.name)
        .id('HelloWorld')
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
// let p = new class-name(a,b);
//