---
title: "std::common_type<std::pair>"
source_path: "cpp/utility/pair/common_type"
header: "<utility>"
category: "utility"
since: "C++23"
---

The common type of two pairs is a pair of both common types of corresponding element types of both pairs.

## Declarations
```cpp
template< class T1, class T2, class U1, class U2 >
requires requires { typename std::pair<std::common_type_t<T1, U1>,
std::common_type_t<T2, U2>>; }
struct common_type<std::pair<T1, T2>, std::pair<U1, U2>>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example

## See also
- [common_type](/cpp/types/common_type/)
- [std::common_type<tuple-like>](/cpp/utility/tuple/common_type/)
