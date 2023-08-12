export class AJ {

    private static instance: AJ;
    private AJ() {}

    static getInstance = () => {
        return AJ.instance === undefined ? AJ.instance = new AJ() : AJ.instance;
    }

    GET = async <R> (url: string): Promise<R> => {
        const res = await fetch(url);
        return await res.json();
    }
}

const aj = () => {
    return AJ.getInstance();
}

export { aj }
