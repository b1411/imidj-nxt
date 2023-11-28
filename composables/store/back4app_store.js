import Parse from "parse";

Parse.initialize(
    "A1M6dFgPkGXDpRQ67knd6AjafTyfdwNnfUNKY2HI",
    "BAjCdCNOZdq0e3uMt3fbiZLAgsTsBGjJ5VigQ6PC",
);

Parse.serverURL = "https://imidzh.b4a.io/";

export function useParse() {
    return Parse;
}
