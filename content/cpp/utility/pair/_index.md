---
title: "std::pair"
source_path: "cpp/utility/pair"
header: "<utility>"
---

std::pair is a class template that provides a way to store two heterogeneous objects as a single unit. A pair is a specific case of a [std::tuple](/cpp/utility/tuple/) with two elements.

## Declarations
```cpp
template<
class T1,
class T2
> struct pair;
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2796 | C++98 | triviality of the destructor of pair was unspecified | specified |

## See also
- [tuple](/cpp/utility/tuple/)
- [tie](/cpp/utility/tuple/tie/)
- [tuple](/cpp/utility/tuple/)
