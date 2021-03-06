declare module 'n3' {
  export interface N3Parser {
    _contextStack: []
    _graph: null
    _base: ''
    _basePath: ''
    _n3Mode: false
    _supportsNamedGraphs: true
    _supportsQuads: true
    _blankNodePrefix: ''
    _lexer: unknown
    _explicitQuantifiers: false
  }

  export class Parser {
    _base: string
    _prefixes: { [key: string]: string }
    parse(content: string): Quad[]
  }

  export class Writer {
    constructor({ prefixes }: { prefixes: { [key: string]: string } })
    _prefixRegex: RegExp
    _lists?: unknown
    _outputStream: { write: [Function]; end: [unknown] }
    _endStream: true
    _subject: null
    _graph: { id: string }
    _prefixIRIs: [unknown]
    _write: Function
    _writeQuad: Function
    addQuads: (quads: Quad[]) => void
    end: (cb: (error: Error, result: string) => void) => void
  }

  export class Store {
    constructor(quads: Quad[])
    getQuads(
      subject?: { id: string },
      predicate?: { id: string },
      value?: { id: string }
    ): Quad[]
    addQuad(
      subject: { id: string },
      predicate: { id: string },
      value: { id: string }
    ): void
    removeQuads(quads: Quad[]): void
  }

  export const DataFactory: {
    namedNode(value: string): { id: string }
    blankNode: Function
    variable: Function
    literal(value: string): { id: string }
    defaultGraph: Function
    quad: Function
    triple: Function
    internal: {
      Term: Function
      NamedNode: Function
      BlankNode: Function
      Variable: Function
      Literal: Function
      DefaultGraph: Function
      Quad: Function
      Triple: Function
      fromId: Function
      toId: Function
    }
  }

  export type Quad = {
    subject: { id: string }
    predicate: { id: string }
    object: { id: string }
    graph: { id: string }
  }
}
