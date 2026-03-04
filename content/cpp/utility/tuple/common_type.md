---
title: "std::common_type<tuple-like>"
source_path: "cpp/utility/tuple/common_type"
header: "<tuple>"
category: "utility"
since: "C++23"
---

The common type of two [tuple-like](/cpp/utility/tuple/tuple-like/) types is a [std::tuple](/cpp/utility/tuple/) consists of the common types of all corresponding element type pairs of both types.

## Declarations
```cpp
template< tuple-like TTuple, tuple-like UTuple >
requires /* see below */
struct common_type<TTuple, UTuple>;
```
_(since C++23)_


## See also
- [common_type](/cpp/types/common_type/)
- [std::common_type<std::pair>](/cpp/utility/pair/common_type/)
