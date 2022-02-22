import { objectType } from 'nexus'

export const Link = objectType({
	name: 'Link',
	definition(t) {
		t.nonNull.int('id')
		t.nonNull.string('description')
		t.nonNull.string('url')
	},
})

/* 
Feed query that retrieves array of Link elements
field name = id; type = Int
field name = description; type = String
field = url; type = String
Define Link type (represents links that can be posted)(each Link contains a nonnullable id, description, url)

*/
