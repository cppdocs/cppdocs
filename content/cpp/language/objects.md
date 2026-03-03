---
title: "Object"
source_path: "cpp/language/objects"
category: "language"
---

C++ programs create, destroy, refer to, access, and manipulate objects.

## Notes
Objects in C++ have different meaning from objects in [object-oriented programming (OOP)](https://en.wikipedia.org/wiki/Object-oriented_programming):

In the defect report [P0593R6](https://wg21.link/P0593R6), implicit object creation was considered happening when creating a byte array or invocating an [allocation function](/cpp/memory/new/operator_new/) (which is possibly user-defined and [constexpr](/cpp/language/constexpr/)) during constant evaluation. However, such allowance caused indeterminism in constant evaluation which was undesired and uninplementable in some aspects. As a result, [P2747R2](https://wg21.link/P2747R2) disallowed such implicit object creation in constant evaluation. We intentedly treat such change as a defect report although the whole paper is not.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 633 | C++98 | variables could only be objects | they can also be references |
| CWG 734 | C++98 | it was unspecified whether variables definedin the same scope that are guaranteed to havethe same value can have the same address | address is guaranteed to bedifferent if their lifetimes overlap,regardless of their values |
| CWG 1189 | C++98 | two base class subobjects of the sametype could have the same address | they always havedistinct addresses |
| CWG 1861 | C++98 | for oversize bit-fields of narrow charactertypes, all bits of the object representationstill participated in the value representation | allows padding bits |
| CWG 2489 | C++98 | char[] cannot provide storage, but objectscould be implicitly created within its storage | objects cannot be implicitly createdwithin the storage of char[] |
| CWG 2519 | C++98 | the definition of object representation did not address bit-fields | addresses bit-fields |
| CWG 2719 | C++98 | the behavior of creating an objectin misaligned storage was unclear | the behavior isundefined in this case |
| CWG 2753 | C++11 | it was unclear whether a backing array of aninitializer list can share storage with a string literal | they can share storage |
| CWG 2795 | C++98 | when determining whether two objects with overlappinglifetimes can have the same address, if any of them is asubobject of zero size, they could have similar distinct types | only allows non-similar types |
| P0593R6 | C++98 | previous object model did not support manyuseful idioms required by the standard libraryand was not compatible with effective types in C | implicit object creation added |

## See also
- [C documentation](/c/language/object/)
