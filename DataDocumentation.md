# Project Documentation

Here are our proposed data types:

```mermaid
classDiagram
    class Pokemon{
      +String name
      +String characteristics
      +String type
      +Move[] Move
      +img Image
      +String generation
    }
    class Move{
      +String name
      +String type
      +img Image
      +damage()
      +String accuracy
      +String generation
      +String description
    }
    Pokemon --> "0..4" Move : Can have
    Move --> "0..*" Pokemon : Can be acquired by
```

Relations:

* A **Move** can have any number of **Pokemon** (including 0). Pokemon have a max of four moves, so they will be the ones with a connection to move. There is no ownership.
  A Pokemon can forget a move and if a Pokemon is deleted the moves all still exist.
  * Relationship stored on Pokemon side
  * When a move is deleted, all Pokemon lose that specific move and are updated with the **clear** policy
