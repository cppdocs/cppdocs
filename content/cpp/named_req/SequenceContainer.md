---
title: "C++ named requirements: SequenceContainer"
source_path: "cpp/named_req/SequenceContainer"
category: "named_req"
---

A SequenceContainer is a [Container](/cpp/named_req/container/) that stores objects of the same type in a linear arrangement.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 139 | C++98 | the optional operations were not required tobe implemented for the designated containers | required with amortized time |
| LWG 149 | C++98 | v.insert(p, t) returned Iter whilev.insert(p, n, t) and v.insert(p, n, t) returned void | they all return Iter |
| LWG 151 | C++98 | q1 was required to be dereferenceable[1] | it can be non-dereferenceable |
| LWG 355 | C++98 | calling v.back() or v.pop_back() wouldexecute --v.end(), which is dangerous[2] | decrements a copyof v.end() instead |
| LWG 589 | C++98 | the elements that i and j refer tomight not be convertible to C::value_type | they are implicitlyconvertible to C::value_type |
| LWG 2194 | C++11 | std::queue, std::priority_queue andstd::stack were also SequenceContainers[3] | they are not SequenceContainers |
| LWG 2231 | C++11 | the complexity requirement of v.clear()was mistakenly omitted in C++11 | complexity reaffirmed as linear |
| LWG 3927 | C++98 | operator[] had no implicit requirement | added the implicit requirement |
