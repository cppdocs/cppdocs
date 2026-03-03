---
title: "new expression"
source_path: "cpp/language/new"
category: "language"
---

Creates and initializes objects with dynamic [storage duration](/cpp/language/storage_duration/), that is, objects whose lifetime is not necessarily limited by the scope in which they were created.

## Notes
[Itanium C++ ABI](https://itanium-cxx-abi.github.io/cxx-abi/abi.html#array-cookies) requires that the array allocation overhead is zero if the element type of the created array is trivially destructible. So does MSVC.

Some implementations (e.g. MSVC before VS 2019 v16.7) require non-zero array allocation overhead on non-allocating placement array new if the element type is not trivially destructible, which is no longer conforming since [CWG issue 2382](https://cplusplus.github.io/CWG/issues/2382.html).

A non-allocating placement array new expression that creates an array of unsigned char, or [std::byte](/cpp/types/byte/)(since C++17) can be used to [implicitly create objects](/cpp/language/lifetime/) on given region of storage: it ends lifetime of objects overlapping with the array, and then implicitly creates objects of implicit-lifetime types in the array.

[std::vector](/cpp/container/vector/) offers similar functionality for one-dimensional dynamic arrays.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 74 | C++98 | value in the first dimension must have integral type | enumeration types permitted |
| CWG 299 | C++98 | value in the first dimension musthave integral or enumeration type | class types with a singleconversion function to integralor enumeration type permitted |
| CWG 624 | C++98 | the behavior was unspecified when thesize of the allocated object would exceedthe implementation-defined limit | no storage is obtained and anexception is thrown in this case |
| CWG 1748 | C++98 | non-allocating placement new needto check if the argument is null | undefined behavior for null argument |
| CWG 1992 | C++11 | new (std::nothrow) int[N]could throw std::bad_array_new_length | changed to return a null pointer |
| CWG 2102 | C++98 | it was unclear whether default/value-initialization isrequired to be well-formed when initializing empty arrays | required |
| CWG 2382 | C++98 | non-allocating placement array newcould require allocation overhead | such allocation overhead disallowed |
| CWG 2392 | C++11 | the program might be ill-formed even if thefirst dimension is not potentially-evaluated | well-formed in this case |
| P1009R2 | C++11 | the array bound could not bededuced in a new expression | deduction permitted |

## See also
- [constructor](/cpp/language/initializer_list/)
- [copy elision](/cpp/language/copy_elision/)
- [default constructor](/cpp/language/default_constructor/)
- [delete](/cpp/language/delete/)
- [destructor](/cpp/language/destructor/)
- [initialization](/cpp/language/initialization/)
- [aggregate initialization](/cpp/language/aggregate_initialization/)
- [default initialization](/cpp/language/default_initialization/)
- [direct initialization](/cpp/language/direct_initialization/)
- [list initialization](/cpp/language/list_initialization/)
- [value initialization](/cpp/language/value_initialization/)
