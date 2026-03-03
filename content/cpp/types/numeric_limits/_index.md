---
title: "std::numeric_limits"
source_path: "cpp/types/numeric_limits"
header: "<limits>"
---

The std::numeric_limits class template provides a standardized way to query various properties of arithmetic types (e.g. the largest possible value for type int is std::numeric_limits<int>::max()).

## Declarations
```cpp
template< class T > class numeric_limits;
```

## Example
```cpp
#include <iostream>
#include <limits>
 
int main() 
{
    std::cout << "type\t│ lowest()\t│ min()\t\t│ max()\n"
              << "bool\t│ "
              << std::numeric_limits<bool>::lowest() << "\t\t│ "
              << std::numeric_limits<bool>::min() << "\t\t│ "
              << std::numeric_limits<bool>::max() << '\n'
              << "uchar\t│ "
              << +std::numeric_limits<unsigned char>::lowest() << "\t\t│ "
              << +std::numeric_limits<unsigned char>::min() << "\t\t│ "
              << +std::numeric_limits<unsigned char>::max() << '\n'
              << "int\t│ "
              << std::numeric_limits<int>::lowest() << "\t│ "
              << std::numeric_limits<int>::min() << "\t│ "
              << std::numeric_limits<int>::max() << '\n'
              << "float\t│ "
              << std::numeric_limits<float>::lowest() << "\t│ "
              << std::numeric_limits<float>::min() << "\t│ "
              << std::numeric_limits<float>::max() << '\n'
              << "double\t│ "
              << std::numeric_limits<double>::lowest() << "\t│ "
              << std::numeric_limits<double>::min() << "\t│ "
              << std::numeric_limits<double>::max() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 201 | C++98 | specializations for all fundamental types need to be provided | excluded non-arithmetic types |
| LWG 559 | C++98 | it was unclear whether the std::numeric_limitsspecialization for a cv-qualified type behaves as the same asthe corresponding specialization for the cv-unqualified type | they have thesame behavior |

## See also
- [Fixed width integer types](/cpp/types/integer/)
- [Arithmetic types](/cpp/language/types/)
- [C++ type system overview](/cpp/language/type-id/)
- [Type support (basic types, RTTI, type traits)](/cpp/types/)
- [C numeric limits interface](/cpp/types/climits/)
