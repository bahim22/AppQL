import { objectType } from 'nexus'

export const Link = objectType({
	name: 'Link',
	definition(t) {
		t.nonNull.int('id')
		t.nonNull.string('description')
		t.nonNull.string('url')
	},
})
