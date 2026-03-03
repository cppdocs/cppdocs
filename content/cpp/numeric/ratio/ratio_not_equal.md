---
title: "std::ratio_not_equal"
source_path: "cpp/numeric/ratio/ratio_not_equal"
header: "<ratio>"
category: "numeric"
since: "C++11"
---

If the ratios R1 and R2 are not equal, provides the member constant value equal true. Otherwise, value is false.

## Declarations
```cpp
template< class R1, class R2 >
struct ratio_not_equal : std::integral_constant<bool, /* see below */> { };
```
_(since C++11)_

## Example
```cpp
#include <ratio>
 
static_assert(std::ratio_not_equal_v<std::ratio<6, 9>, std::ratio<9, 6>>, "6/9 != 9/6");
 
int main() {}
```

## See also
- [ratio_equal](/cpp/numeric/ratio/ratio_equal/)
