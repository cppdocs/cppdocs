---
title: "deduction guides for std::pair"
source_path: "cpp/utility/pair/deduction_guides"
header: "<utility>"
category: "utility"
since: "C++17"
---

One [deduction guide](/cpp/language/ctad/) is provided for [std::pair](/cpp/utility/pair/) to account for the edge cases missed by the implicit deduction guides, in particular, non-copyable arguments and array to pointer conversion.

## Declarations
```cpp
template<class T1, class T2>
pair(T1, T2) -> pair<T1, T2>;
```
_(since C++17)_

## Example
```cpp
#include <utility>
 
int main()
{
    int a[2], b[3];
    std::pair p{a, b}; // explicit deduction guide is used in this case
}
```
