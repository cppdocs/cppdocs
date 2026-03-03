---
title: "C++ named requirements: Container"
source_path: "cpp/named_req/Container"
category: "named_req"
---

A Container is an object used to store other objects and taking care of the management of the memory used by the objects it contains.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 179 | C++98 | iterator and const_iterator types might be incomparable | required to be comparable |
| LWG 276 | C++98 | T was required to be CopyAssignable | T is required to beCopyConstructible |
| LWG 322 | C++98 | the value types of iterator and const_iterator were not specified | specified as T |
| LWG 774 | C++98 | there was no requirement on swap(a, b) | added |
| LWG 883 | C++98 | a.swap(b) was defined as swap(a, b),resulted in circular definition | defined as exchangingthe values of a and b |
| LWG 1319 | C++98 | iterator and const_iteratormight not have multipass guarantee | they are required to satisfythe requirements ofLegacyForwardIterator |
| LWG 2114(P2167R3) | C++98 | non-bool return types of some functions were allowed | disallowed |
| LWG 2182 | C++98 | the types deonted by reference andconst_reference were poorly specified | improved wording |
| LWG 2257 | C++98 | two containers required linear time to compareequal even if they have different sizes | only requires constanttime in this case |
| LWG 2263 | C++11 | the resolution of LWG issue 179 was accidentally dropped in C++11 | restored |
| LWG 2839 | C++11 | self move assignment of standard containers was not allowed | allowed but theresult is unspecified |
| N3346 | C++11 | C::value_type was required to be Destructible | required to be Erasable from C |

## See also
- [C++ documentation](/cpp/container/)
