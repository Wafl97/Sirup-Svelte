enum Option {
    SOME,NONE
}

export class Optional<T> {
    private readonly value: T;
    private readonly option: Option;

    constructor(t: T) {
        this.value = t;
        this.option = t === null ? Option.NONE : Option.SOME;
    }

    public isSome() {
        return this.option === Option.SOME;
    }

    public isNone() {
        return this.option === Option.NONE;
    }

    public unwrap() {
        return this.value;
    }
}

const some = <T> (t: T): Optional<T> => {
    return  new Optional<T>(t);
}

const none = (): Optional<never> => {
    return new Optional<never>(null);
}

export {some, none};