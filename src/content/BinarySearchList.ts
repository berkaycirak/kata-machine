// assumption: list is ordered

export default function bs_list(haystack: number[], needle: number): boolean {
    // low of array
    let lo = 0;
    // high of array
    let hi = haystack.length - 1;

    do {
        // find the mid point of the array
        let m = Math.floor((lo + hi) / 2);
        // find the value
        let v = haystack[m];
        // check whether the needle (searched value) is equal to m'th value
        if (v === needle) {
            return true;
        } else if (v > needle) {
            // search left side, if the value found is larger than the needle
            hi = m - 1;
        } else {
            // search right side if the value foind is less than the needle
            lo = m + 1;
        }
    } while (lo <= hi);

    console.log("hello from world");

    return false;
}
