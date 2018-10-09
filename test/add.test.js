const add = require('../src/add')
const assert = require('assert')
describe('Math', function () {
	it('1 plus 1 shuold return 2', function () {
		assert(add(1,1), 2)
	})
})
