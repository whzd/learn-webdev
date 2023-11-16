import List "mo:base/List";
import Debug "mo:base/Debug";
import Nat "mo:base/Int";

actor DKeeper {

  public type Note = {
    key: Nat;
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();

  public func createNote(idNumber: Nat, titleText: Text, contentText: Text){

    let newNote: Note = {
      key = idNumber;
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes);
    Debug.print(debug_show(notes));

  };

  public query func readNotes(): async [Note]{
    return List.toArray(notes);
  };

  public func deleteNote(id: Nat){
    Debug.print(debug_show(id));
    notes := List.filter(notes, func(item: Note) : Bool { item.key != id});
  };

}