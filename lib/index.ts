class ComputeSystem {

    protected cache: Partial<Omit<this, "cache">> = {};

    static register<T>(this: {new(...args: any[]): T},
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

//TEST...
/*
class Test extends ComputeSystem {
    data: null = null;
}

interface Test {
    foo: number;
}
interface Test {
    faa: number;
}
function foo({data}: {data: null}) {
    return 4;
}

Test.register(foo);

const cs = new Test();
cs.foo;
/**/