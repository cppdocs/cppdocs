---
title: "Boolean literals"
source_path: "cpp/language/bool_literal"
category: "language"
---

[1 Syntax](#Syntax)

## Notes
See [Integral conversions](/cpp/language/implicit_cast/#Integral_conversions) for implicit conversions from bool to other types and [boolean conversions](/cpp/language/implicit_cast/#Boolean_conversions) for the implicit conversions from other types to bool.

## Example
```cpp
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha
              << true << '\n'
              << false << '\n'
              << std::noboolalpha
              << true << '\n'
              << false << '\n';
}
```

## See also
- [C documentation](/c/language/bool_constant/)
