
export class Optional<T> {
    private readonly value: T;

    constructor(t: T) {
        this.value = t;
    }

    public isSome() {
        return this.value !== undefined || this.value !== null;
    }

    public isNone() {
        return this.value === undefined || this.value !== null;
    }

    public getOr(t: T): T {
        return this.value === undefined ? t : this.value;
    }

    public unwrap() {
        return this.value;
    }
}

const some = <T> (t: T): Optional<T> => {
    return new Optional<T>(t);
}

const none = (): Optional<null> => {
    return new Optional<null>(null);
}

export {some, none};