class ComputeSystem<T> {

    constructor(data: T) {
        this.data = data;
        // @ts-ignore
        this.cache = {data};
    }

    readonly data: T;
    private cache: Partial<Omit<this, "cache">>;

    static addComputation<T>(this: {new(...args: any[]): T},
                           fct: (args: T) => void) {

        const name = fct.name;

        Object.defineProperty(this.prototype, name, {
            enumerable: true,
            get: function() {
                let value = this.cache[name];
                if(value === undefined)
                    value = this.cache[name] = fct(this);
                return value;
            }
        });
    }
}

/*
//TEST...

class Test extends ComputeSystem<{}> {}

interface Test {
    foo: number;
}
interface Test {
    faa: number;
}
function foo({data}: {data: {}}) {
    return 4;
}

Test.addComputation(foo);

const cs = new Test({});
cs.foo;
*/