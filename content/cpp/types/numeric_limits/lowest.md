---
title: "std::numeric_limits<T>::lowest"
source_path: "cpp/types/numeric_limits/lowest"
category: "types"
since: "C++11"
---

Returns the lowest finite value representable by the numeric type T, that is, a finite value x such that there is no other finite value y where y < x. This is different from [std::numeric_limits](/cpp/types/numeric_limits/)<T>::min() for floating-point types. Only meaningful for bounded types.

## Declarations
```cpp
static constexpr T lowest() noexcept;
```
_(since C++11)_

## Notes
For every standard C++ floating-point type T [std::numeric_limits](/cpp/types/numeric_limits/)<T>::lowest() == -[std::numeric_limits](/cpp/types/numeric_limits/)<T>::max(), but this does not necessarily have to be the case for any third-party specialization.

## Example
```cpp
#include <iostream>
#include <limits>
#include <string_view>
 
template<typename T>
void print_twice(std::string_view type, T value)
{
    std::cout << '\t' << type << ": "
              << std::defaultfloat << value << " or "
              << std::hexfloat << value << '\n';
}
 
int main()
{
    // min()
    std::cout << "std::numeric_limits<T>::min():\n";
    print_twice("float", std::numeric_limits<float>::min());
    print_twice("double", std::numeric_limits<double>::min());
    print_twice("long double", std::numeric_limits<long double>::min());
 
    // lowest()
    std::cout << "std::numeric_limits<T>::lowest():\n";
    print_twice("float", std::numeric_limits<float>::lowest());
    print_twice("double", std::numeric_limits<double>::lowest());
    print_twice("long double", std::numeric_limits<long double>::lowest());
 
    // max()
    std::cout << "std::numeric_limits<T>::max():\n";
    print_twice("float", std::numeric_limits<float>::max());
    print_twice("double", std::numeric_limits<double>::max());
    print_twice("long double", std::numeric_limits<long double>::max());
}
```

## See also
- [min](/cpp/types/numeric_limits/min/)
- [denorm_min](/cpp/types/numeric_limits/denorm_min/)
- [max](/cpp/types/numeric_limits/max/)
