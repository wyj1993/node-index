class Test {
    constructor(opts) { //这个是最先执行的; 这个钩子里面可以复制任何变量
        this.name = opts.name;
        this.config = opts.config;
        console.log(123123123123123123);
    }

    init() {
        console.log(this.name);
        console.log(this.config);
        console.log('----------------------');
        this.boot();
    }

    boot() {
        console.log(this.name);
        console.log(this.config);
    }
}


class Action extends Test {
    code() {
        console.log(`${this.name} can code`);
    }
}

let data = {
    name: 'yanle',
    config: {
        age: 15,
        address: '重庆'
    }
};

let test = new Test(data);
let action = new Action(data);
action.init();
action.code();

console.log('========================');

test.init();
try {
    test.code();
} catch (e) {
    console.log(`test 对象没有 code方法`);
}
