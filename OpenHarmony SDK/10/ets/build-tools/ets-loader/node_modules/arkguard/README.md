# Arkguard
Arkguard is a javascript and typescript obfuscation tool.
For Chinese version please read [README-cn.md](README-cn.md)
(中文版说明请查看[README-cn.md](README-cn.md)).

# Usage in DevEco Studio
Arkguard has been integrated into SDK. It is convenient to use Arkguard in DevEco Studio.
In DevEco Studio, Arkguard can be enabled only in Stage Model (FA Model is not supported).
For now only name obfuscations can be used in DevEco Studio (because other obfuscation
abilities of Arkguard may hurt execution performance).
You can obfuscate the following names:
* parameter names and local variable names
* names in global scope
* property names

We enable the obfuscation of parameter names and local variable names by default. However,
global names obfuscation and property names obfuscation are disabled by default, as they may
cause runtime error if they are enabled by default.
You can enable them by [obfuscation options](#obfuscation-options).

When you create a new project, the following config will be generated in `build-profile.json5`.
```
"arkOptions": {
  "obfuscation": {
    "ruleOptions": {
      "enable": true,
      "files": ["obfuscation-rules.txt"],
    }
  }
}
```
When you create a new library, additional property `consumerFiles` will be added.
```
"arkOptions": {
  "obfuscation": {
    "ruleOptions": {
      "enable": true,
      "files": ["obfuscation-rules.txt"],
    }
    "consumerFiles": ["consumer-rules.txt"]
  }
}
```

To enable obfuscation, the following conditions should be satisfied:
* the property `ruleOptions.enable` is `true` and the property `ruleOptions.enable` of every dependent library is `true`.
* build in release mode

The files in the property `ruleOptions.files` will be applied when you build HAP or HAR.

The files in the property `consumerFiles` will be applied when you build the project or library which
depends on this library. They will also be merged into a file `obfuscation.txt` in the resulting HAR.

When you are building HAP or HAR, the final obfucation rules are combination of self's `ruleOptions.files`
property, dependent libraries' `consumerFiles` properties and dependent HAR's `obfuscation.txt`.
If you are building HAR, the content of `obfuscation.txt` is the combination of self's `consumerFiles` property,
dependent libraries' `consumerFiles` properties and dependent HAR's `obfuscation.txt`. If you are building
HAP, `obfuscation.txt` will not be generated. For more details, please jump to
"[How Arkguard merges rules](#how-arkguard-merges-rules)".

## Write rules

The files `obfuscation-rules.txt` and `consumer-rules.txt` are created by DevEco Studio automatically, but they do not
contain any rule by default. You can write rules in these files or include rules from other files, as the following
example shows.
```
"buildOption": {
  "arkOptions": {
    "obfuscation": {
      "ruleOptions": {
        "enable": true,
        "files": ["obfuscation-rules.txt", "myrules.txt"],
      }
      "consumerFiles": ["consumer-rules.txt", "my-consumer-rules.txt"]
    }
  }
}
```

In rule files, you can write [obfuscation options](#obfuscation-options) and [keep options](#keep-options).

### Obfuscation options

`-disable-obfuscation`

Specifies to disable all obfuscations. If you use this option, the resulting HAP or HAR will not be obfuscated. By default,
Arkguard only obfuscates the parameter names and local variable names by assigning random short names to them.

`-enable-property-obfuscation`

Specifies to obfuscate the property names. If you use this option, all property names will be obfuscated except the
following:
* the property names of `import/export` classes or objects. Note: Only for directly exported classes or objects, their
property names will be kept. For example, the property name `data` in
    ```
    export class MyClass {
       data: string;
    }
    ```
    will not be obfuscated.
For 'indirectly export' cases such as `export MyClass` and `let a = MyClass; export a;`, if you do not want to obfuscate
their property names, you need to use [keep options](#keep-options) to keep them. Besides, for the property names of properties of directly exported classes or objects, like `name` and `age` in the following example, if you do not want to obfuscate them, then you also need [keep options](#keep-options) to keep them.
    ```
    export class MyClass {
       person = {name: "123", age: 100};
    }
    ```
* the property names defined in UI components. For example, the property names `message` and `data` in
    ```
    @Component struct MyExample {
        @State message: string = "hello";
        data: number[] = [];
        ...
    }
    ```
    will not be obfuscated.
* the property names that are specified by [keep options](#keep-options).
* the property names in system API list. System API list is a name set which is extracted from SDK automatically by default.
* the property names that are string literals. For example, the property names "name" and "age" in the following code will not be obfuscated.
    ```
    let person = {"name": "abc"};
    person["age"] = 22;
    ```
    If you want to obfuscate these string literal property names, you should addtionally use the option `-enable-toplevel-obfuscation`. For example,
    ```
    -enable-property-obfuscation
    -enable-string-property-obfuscation
    ```
    Note: If there are string literal property names which contain special characters (that is, all characters except
    `a-z, A-Z, 0-9, _`, for example `let obj = {"\n": 123, "": 4, " ": 5}` then we would not suggest to enable the
    option `-enable-string-property-obfuscation`, because [keep options](#keep-options) may not allow to keep these
    names when you do not want to obfuscate them.

Specifies to obfuscate the names in the global scope. If you use this option, all global names will be obfuscated
except the following:
* the `import/export` global names.
* the global names that are not declared in the current file.
* the global names that are specified by [keep options](#keep-options).
* the global names in system API list.

`-compact`

Specifies to remove unnecessary blank spaces and all line feeds. If you use this option, all code will be compressed into
one line.

`-remove-log`

Specifies to remove all `console.*` statements.

`-print-namecache` filepath

Specifies to print the name cache that contains the mapping from the old names to new names. The cache will printed to
the given file. If you use `-enable-property-obfuscation` or `-enable-toplevel-obfuscation`, and you want incremental
obfuscation in the future (for example, hot fix), then you should use this option and keep the resulting cache file
carefully.

`-apply-namecache` filepath

Specifies to reuse the given cache file. The old names in the cache will receive the corresponding new names specified in
the cache. Other names will receive new random short names. This option should be used in incremental obfuscation.

By default, DevEco Studio will keep and update the namecache file in the temporary cache directory and apply the cache for
incremental compilation.

### Keep options

Keep options are useful only when you use `enable-property-obfuscation` or `enable-toplevel-obfuscation`.

`-keep-property-name` [,modifiers,...]

Specifies property names that you want to keep. For example,
```
-keep-property-name
age
firstName
lastName
```

**What property names should be kept?**

For safety, we would suggest keeping all property names that are not accessed through dot syntax.

Example:
```
var obj = {x0: 0, x1: 0, x2: 0};
for (var i = 0; i <= 2; i++) {
  console.log(obj['x' + i]);  // x0, x1, x2 should be kept
}

Object.defineProperty(obj, 'y', {});  // y should be kept
console.log(obj.y);

obj.s = 0;
let key = 's';
console.log(obj[key]);        // s should be kept

obj.u = 0;
console.log(obj.u);           // u can be safely obfuscated

obj.t = 0;
console.log(obj['t']);        // t and 't' can be safely obfuscated when `-enable-string-property-obfuscation`, but we suggest keeping t

obj['v'] = 0;
console.log(obj['v']);        // 'v' can be safely obfuscated when `-enable-string-property-obfuscation`, but we suggest keeping v
```

`-keep-global-name` [,modifiers,...]

Specifies names that you want to keep in the global scope. For example,
```
-keep-global-name
Person
printPersonName
```

**What global names should be kept?**

It is known that in javascript the variables in the global scope are properties of `globalThis`. So if in your code
you access a global variable as a property, then the global name should be kept.

Example:
```
var a = 0;
console.log(globalThis.a);  // a should be kept

function foo(){}
globalThis.foo();           // foo should be kept

var c = 0;
console.log(c);             // c can be safely obfuscated

function bar(){}
bar();                      // bar can be safely obfuscated

class MyClass {}
let d = new MyClass();      // MyClass can be safely obfuscated
```

`-keep-dts` filepath

Specifies to keep names in the given `.d.ts` file. Here filepath can be also a directory. If so, then the names in all
`d.ts` files under the given directory will be kept.
If your are building HAR with this option, then the kept names will be merged into the resulting `obfuscation.txt`.

### Comments

You can write comments in obfuscation rule file by using `#`. The line begins with `#` is treated as comment.
For example,
```
# white list for MainAbility.ets
-keep-global-name
MyComponent
GlobalFunction

-keep-property-name # white list for dynamic property names
firstName
lastName
age
```
If your are building HAR, comments will not be merged into the resulting `obfuscation.txt`.

### How Arkguard merges rules
Typically there may be serveral rule files in your project. These rule files come from:
* `ruleOptions.files` in main project (Here by main project we mean the project you are building)
* `consumerFiles` in local dependent libraries
* `obfuscate.txt` in remote dependent HARs
When building your main project, all these rules will be merged by the following strategy (in pseudo code):
```
let `listRules` be the list of all rule files that are mentioned above.
let finalRule = {
    disableObfuscation: false,
    enablePropertyObfuscation: false,
    enableToplevelObfuscation: false,
    compact: false,
    removeLog: false,
    keepPropertyName: [],
    keepGlobalName: [],
    keepDts: [],
    printNamecache: string,
    applyNamecache: string
}
for each file in `listRules`:
    for each option in file:
        switch(option) {
            case -disable-obfuscation:
                finalRule.disableObfuscation = true;
                continue;
            case -enable-property-obfuscation:
                finalRule.enablePropertyObfuscation = true;
                continue;
            case -enable-toplevel-obfuscation:
                finalRule.enableToplevelObfuscation = true;
                continue;
            case -compact:
                finalRule.compact = true;
                continue;
            case -remove-log:
                finalRule.removeLog = true;
                continue;
            case -print-namecache:
                finalRule.printNamecache = #{specified path};
                continue;
            case -apply-namecache:
                finalRule.applyNamecache = #{specified path};
                continue;
            case -keep-property-name:
                finalRule.keepPropertyName.push(#{specified names});
                continue;
            case -keep-global-name:
                finalRule.keepGlobalName.push(#{specified names});
                continue;
            case -keep-dts:
                finalRule.keepDts.push(#{specified file path});
                continue;
        }
    end-for
end-for
```
The final obfuscation rules are in the object `finalRule`.

If you are building HAR, the resulting `obfuscate.txt` are obtained by merging the rules from `consumerFiles` in main
project and local dependent libraries, and `obfuscate.txt` in remote dependent HARs. The merging strategy is the same
except:
* The `-keep-dts` option will be converted to `-keep-global-name` and `-keep-property-name` options in the resulting
`obfuscate.txt`.
* The options `-print-namecache` and `apply-namecache` will be omitted and will not appear in the resulting
`obfuscate.txt`.
