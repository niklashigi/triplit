import { schemaObject as DBConsoleSchemaObject } from './schema';
import { TriplitClient } from '@triplit/client';

export function formConsolePrimaryKey(projectId: string, server: string) {
  return `${projectId}-${server}`;
}

export const consoleClient = new TriplitClient({
  db: {
    schema: { collections: DBConsoleSchemaObject, version: 0 },
  },
});