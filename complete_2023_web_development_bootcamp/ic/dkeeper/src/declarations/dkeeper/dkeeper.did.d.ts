import type { Principal } from '@dfinity/principal';
export interface Note { 'key' : bigint, 'title' : string, 'content' : string }
export interface _SERVICE {
  'createNote' : (arg_0: bigint, arg_1: string, arg_2: string) => Promise<
      undefined
    >,
  'deleteNote' : (arg_0: bigint) => Promise<undefined>,
  'readNotes' : () => Promise<Array<Note>>,
}
