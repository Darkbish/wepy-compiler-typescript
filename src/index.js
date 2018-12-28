import ts from 'typescript'
import babel from '@babel/core'

export default function compile(content) {
  let p
  try {
    console.log(process.cwd())
    const { outputText } = ts.transpileModule(content)
    const compiled = babel.transform(outputText)
    p = Promise.resolve(compiled)
  } catch (e) {
    Promise.reject(e)
  }
  return p
}
