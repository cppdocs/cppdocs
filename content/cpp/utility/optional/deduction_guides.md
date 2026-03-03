---
title: "deduction guides for std::optional"
source_path: "cpp/utility/optional/deduction_guides"
header: "<optional>"
category: "utility"
since: "C++17"
---

One [deduction guide](/cpp/language/ctad/) is provided for [std::optional](/cpp/utility/optional/) to account for the edge cases missed by the implicit deduction guides, in particular, non-copyable arguments and array to pointer conversion.

## Declarations
```cpp
template< class T >
optional(T) -> optional<T>;
```
_(since C++17)_

## Example
```cpp
#include <optional>
#include <type_traits>
 
int main()
{
    int a[2];
    std::optional oa{a}; // uses explicit deduction guide
    static_assert(std::is_same_v<decltype(oa), std::optional<int*>> == true);
}
```
