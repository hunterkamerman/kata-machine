export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length - 1;

    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo <= hi); // Keep the do...while loop condition the same

    return false;
}





