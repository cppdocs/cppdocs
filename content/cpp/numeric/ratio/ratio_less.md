---
title: "std::ratio_less"
source_path: "cpp/numeric/ratio/ratio_less"
header: "<ratio>"
category: "numeric"
since: "C++11"
---

If the ratio R1 is less than the ratio R2, provides the member constant value equal true. Otherwise, value is false.

## Declarations
```cpp
template< class R1, class R2 >
struct ratio_less : std::integral_constant<bool, /* see below */> { };
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <ratio>
 
int main()
{
    using x = std::ratio<69, 90>;
    using y = std::ratio<70, 90>;
 
    if constexpr (std::ratio_less_v<x, y>)
        std::cout << x::num << '/' << x::den << " < "
                  << y::num << '/' << y::den << '\n';
}
```

## See also
- [ratio_greater](/cpp/numeric/ratio/ratio_greater/)
