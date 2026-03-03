---
title: "Classes"
source_path: "cpp/language/classes"
category: "language"
---

A class is a user-defined type.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 148 | C++98 | POD classes could not contain pointers to member,which are themselves POD (scalar) types | restriction removed |
| CWG 383 | C++98 | copy assignment operators or destructors could beuser-declared in POD classes if they are not defined | not allowed |
| CWG 1363 | C++11 | a class that has both trivial default constructors and non-trivial default constructors at the same time could be trivial | it is non-trivial |
| CWG 1496 | C++11 | a class that only has constructors thatare all defined as deleted could be trivial | it is non-trivial |
| CWG 1672 | C++11 | a class could be a standard-layout classif it has multiple empty base classes | it is not a standard-layout class |
| CWG 1734 | C++11 | a trivially copyable class could not have non-trivialdeleted copy/move constructors/assignment operators | can be trivial if deleted |
| CWG 1813 | C++11 | a class was never a standard-layout class if it has abase class that inherits a non-static data member | it can be a standard-layout class |
| CWG 1881 | C++11 | for a standard-layout class and its base classes,unnamed bit-fields might be declared in adifferent class declaring the data members | all non-static data membersand bit-fields need to be firstdeclared in the same class |
| CWG 1909 | C++98 | a member template could have the same name as its class | prohibited |
| CWG 2120 | C++11 | the definition of M(X) in determining a standard-layout class did not consider the case ofa class whose first member is an array | addressed this case inthe definition of M(X) |
| CWG 2605 | C++98 | an implicit-lifetime class could have a user-provided destructor | prohibited |
