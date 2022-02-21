//import { schema } from './schema';
import { makeSchema } from 'nexus';
import { join } from 'path';

export const schema = makeSchema({
	types: [], //1
	outputs: {
		schema: join(process.cwd(), 'schema.graphql'), //2
		typegen: join(process.cwd(), 'nexus-typegen.ts'), //3
	},
})
