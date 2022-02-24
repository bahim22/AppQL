import { extendType, objectType } from 'nexus'
import { NexusGenObjects } from '../../nexus-typegen'

export const Link = objectType({
	name: 'Link',
	definition(t) {
		t.nonNull.int('id')
		t.nonNull.string('description')
		t.nonNull.string('url')
	},
})

let links: NexusGenObjects['Link'][] = [
	{
		id: 1,
		url: 'www.github.com/bahim22/next-ded-apql',
		description: 'Fullstack GraphQL App',
	},
	{
		id: 2,
		url: 'www.github.com/bahim22',
		description: 'Hima Dionysus Balde Profile',
	},
]

export const LinkQuery = extendType({
	type: 'Query',
	definition(t) {
		t.nonNull.list.nonNull.field('feed', {
			type: 'Link',
			resolve(parent, args, context, info) {
				return links
			},
		})
	},
})
