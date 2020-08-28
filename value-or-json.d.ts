export = valueOrJson;
declare function valueOrJson(arg: any, ...args: any[]): any;
declare namespace valueOrJson {
    export { needsStringify };
}
declare function needsStringify(arg: any): boolean;
