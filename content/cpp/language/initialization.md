---
title: "Initialization"
source_path: "cpp/language/initialization"
category: "language"
---

Initialization of a variable provides its initial value at the time of construction.

## Notes
The order of destruction of non-local variables is described in [std::exit](/cpp/utility/program/exit/).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 270 | C++98 | the order of initializing static data membersof class templates was unspecified | specified as unordered except forexplicit specializations and definitions |
| CWG 441 | C++98 | non-local references with static storage duration werenot always initialized before dynamic initializations | considered as static initialization, alwaysinitialized before dynamic initializations |
| CWG 1415 | C++98 | a block-scope extern variabledeclaration could be a definition | prohibited (no initializerallowed in such declarations) |
| CWG 2599 | C++98 | it was unclear whether evaluating functionarguments in the initializer is part of initialization | it is part of initialization |

## See also
- [copy elision](/cpp/language/copy_elision/)
- [converting constructor](/cpp/language/converting_constructor/)
- [copy constructor](/cpp/language/copy_constructor/)
- [default constructor](/cpp/language/default_constructor/)
- [explicit](/cpp/language/explicit/)
- [move constructor](/cpp/language/move_constructor/)
- [new](/cpp/language/new/)
- [C documentation](/c/language/initialization/)
