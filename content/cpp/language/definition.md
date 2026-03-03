---
title: "Definitions and ODR (One Definition Rule)"
source_path: "cpp/language/definition"
category: "language"
---

Definitions are [declarations](/cpp/language/declarations/) that fully define the entity introduced by the declaration. Every declaration is a definition, except for the following:

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 261 | C++98 | a deallocation function for a polymorphic classmight be odr-used even if there were no relevantnew or delete expressions in the program | supplemented theodr-use cases to coverconstructors and destructors |
| CWG 678 | C++98 | an entity could have definitionswith different language linkages | the behavior isundefined in this case |
| CWG 1472 | C++98 | reference variables which satisfy the requirements forappearing in a constant expression were odr-used evenif the lvalue-to-rvalue conversion is immediately applied | they are notodr-used in this case |
| CWG 1614 | C++98 | taking address of a pure virtual function odr-used it | the function is not odr-used |
| CWG 1741 | C++98 | constant objects that are immediately lvalue-to-rvalueconverted in potentially-evaluated expressions were odr-used | they are not odr-used |
| CWG 1926 | C++98 | array subscript expressions did not propagate potential results | they propagate |
| CWG 2242 | C++98 | it was unclear whether a const object that is onlyconstant-initialized in part of its definitions violates ODR | ODR is not violated; the object isconstant-initialized in this case |
| CWG 2300 | C++11 | lambda expressions in different translationunits could never have the same closure type | the closure type can be thesame under one definition rule |
| CWG 2353 | C++98 | a static data member was not a potential resultof a member access expression accessing it | it is |
| CWG 2433 | C++14 | a variable template could not havemultiple definitions in a program | it can |
