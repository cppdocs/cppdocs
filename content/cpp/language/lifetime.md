---
title: "Lifetime"
source_path: "cpp/language/lifetime"
category: "language"
---

Every [object](/cpp/language/objects/) and [reference](/cpp/language/reference/) has a lifetime, which is a runtime property: for any object or reference, there is a point of execution of a program when its lifetime begins, and there is a moment when it ends.

## Notes
Until the resolution of [CWG issue 2256](https://cplusplus.github.io/CWG/issues/2256.html), the end of lifetime rules are different between non-class objects (end of storage duration) and class objects (reverse order of construction):

Until the resolution of [RU007](https://wg21.link/p1971r0#RU007), a non-static member of a const-qualified type or a reference type prevents its containing object from being transparently replaceable, which makes [std::vector](/cpp/container/vector/) and [std::deque](/cpp/container/deque/) hard to implement:

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 119 | C++98 | an object of a class type with a non-trivial constructor canonly start its lifetime when the constructor call has completed | lifetime also startedfor other initializations |
| CWG 201 | C++98 | lifetime of a temporary object in a default argumentof a default constructor was required to endwhen the initialization of the array completes | lifetime ends beforeinitializing the nextelement (also resolvesCWG issue 124) |
| CWG 274 | C++98 | an lvalue designating an out-of-lifetime object could beused as the operand of static_cast only if the conversionwas ultimately to cv-unqualified char& or unsigned char& | cv-qualified char&and unsigned char&also allowed |
| CWG 597 | C++98 | the following behaviors were undefined:1. a pointer to an out-of-lifetime object is implicitlyconverted to a pointer to a non-virtual base class2. an lvalue referring to an out-of-lifetime objectis bound to a reference to a non-virtual base class3. an lvalue referring to an out-of-lifetime object is usedas the operand of a static_cast (with a few exceptions) | made well-defined |
| CWG 2012 | C++98 | lifetime of references was specified to match storage duration,requiring that extern references are alive before their initializers run | lifetime beginsat initialization |
| CWG 2107 | C++98 | the resolution of CWG issue 124 was not applied to copy constructors | applied |
| CWG 2256 | C++98 | lifetime of trivially destructible objects were inconsistent with other objects | made consistent |
| CWG 2470 | C++98 | more than one arrays could provide storage for the same object | only one provides |
| CWG 2489 | C++98 | char[] cannot provide storage, but objectscould be implicitly created within its storage | objects cannot beimplicitly created within the storage of char[] |
| CWG 2527 | C++98 | if a destructor is not invoked because of reusing storage and theprogram depends on its side effects, the behavior was undefined | the behavior is well-defined in this case |
| CWG 2721 | C++98 | the exact time point of storage reuse was unclear for placement new | made clear |
| CWG 2849 | C++23 | function parameter objects were considered as temporaryobjects for range-for loop temporary object lifetime extension | not considered astemporary objects |
| CWG 2854 | C++98 | exception objects were temporary objects | they are nottemporary objects |
| CWG 2867 | C++17 | the lifetime of temporary objects created instructured binding declarations were not extended | extended to the endof the declaration |
| P0137R1 | C++98 | creating an object in an array of unsigned char reused its storage | its storage is not reused |
| P0593R6 | C++98 | a pseudo-destructor call had no effects | it destroys the object |
| P1971R0 | C++98 | a non-static data member of a const-qualified type or a reference typeprevented its containing object from being transparently replaceable | restriction removed |
| P2103R0 | C++98 | transparently replaceability did not require keeping the original structure | requires |

## See also
- [C documentation](/c/language/lifetime/)
