import Papa from 'papaparse'

export default function csvPlugin() {
  return {
    name: 'vite-plugin-csv',
    transform(code, id) {
      if (id.endsWith('.csv')) {
        const parsed = Papa.parse(code, { header: true })
        return {
          code: `export default ${JSON.stringify(parsed.data)};`,
          map: null
        }
      }
    }
  }
}