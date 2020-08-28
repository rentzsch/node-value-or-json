export = valueOrJson;
declare function valueOrJson<T>(arg: T): T | string;
declare namespace valueOrJson {
    export { needsStringify };
}
declare function needsStringify(arg: any): boolean;
