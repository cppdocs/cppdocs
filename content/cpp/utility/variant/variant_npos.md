---
title: "std::variant_npos"
source_path: "cpp/utility/variant/variant_npos"
header: "<variant>"
category: "utility"
since: "C++17"
---

This is a special value equal to the largest value representable by the type [std::size_t](/cpp/types/size_t/), used as the return value of [index()](/cpp/utility/variant/index/) when [valueless_by_exception()](/cpp/utility/variant/valueless_by_exception/) is true.

## Declarations
```cpp
inline constexpr std::size_t variant_npos = -1;
```
_(since C++17)_

## See also
- [index](/cpp/utility/variant/index/)
- [valueless_by_exception](/cpp/utility/variant/valueless_by_exception/)
