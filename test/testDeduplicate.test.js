const dedup = require('../deduplicate');

it('works with one duplicate item', async done => {
    expect(dedup([1, 2, 3, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    done()
});

it('works with many duplicate items', async done => {
    expect(dedup([1, 2, 3, 3, 4, 4, 5, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    done()
});

it('works with one item duplicated many times', async done => {
    expect(dedup([1, 2, 3, 3, 4, 3, 5, 3, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    done()
});

it('works with duplicate item in the beginning', async done => {
    expect(dedup([1, 1, 2, 3, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    done()
});

it('works with duplicate item in the end', async done => {
    expect(dedup([1, 2, 3, 3, 4, 5, 6, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    done()
});

it('works with different value types', async done => {
    expect(dedup([1, 2, '3', '3', 4, '5', 6, 6])).toEqual([1, 2, '3', 4, '5', 6]);
    done()
});
