import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'https://linkup-academy.herokuapp.com/swagger/v1/swagger.json',
  apiFile: './src/core/services/emptyApi.ts',
  apiImport: 'baseApi',
  outputFile: './src/core/services/baseApi.ts',
  exportName: 'baseApi',
  hooks: true,
};

export default config;
