class Action {
    constructor(name) {
        this.name = name;
    }

    init(age) {
        const args1 = Array.prototype.slice.call(arguments, 1);
        const args = Array.prototype.slice.call(arguments);
        console.log(args);
        console.log(args1);
        console.log(this.name);
        console.log(age);
    }
}

let data = {
    name: 'yanle',
    config: {
        age: 15,
        address: '重庆',
        id: 123123,
        school: 'bilibili'
    }
};

let action = new Action(data.name);
action.init(...data.config);