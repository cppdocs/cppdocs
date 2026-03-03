---
title: "std::numeric_limits<T>::max"
source_path: "cpp/types/numeric_limits/max"
header: "<limits>"
category: "types"
since: "C++11"
---

Returns the maximum finite value representable by the numeric type T. Meaningful for all bounded types.

## Declarations
```cpp
static T max() throw();
```
_(until C++11)_

```cpp
static constexpr T max() noexcept;
```
_(since C++11)_

## Example
```cpp
#include <boost/type_index.hpp>
#include <cstddef>
#include <iomanip>
#include <iostream>
#include <limits>
#include <type_traits>
 
template<typename T>
void print_max_value_of()
{
    constexpr T max{std::numeric_limits<T>::max()};
 
    std::cout << std::setw(16) << boost::typeindex::type_id<T>() << ": ";
    if constexpr (std::is_floating_point_v<T>)
        std::cout << std::defaultfloat << max << " = " << std::hexfloat << max << '\n';
    else
    {
        constexpr auto m{static_cast<unsigned long long>(max)};
        std::cout << std::dec << m << " = " << std::hex << m << '\n';
    }
}
 
int main()
{
    std::cout << std::showbase;
 
    print_max_value_of<bool>();
    print_max_value_of<short>();
    print_max_value_of<int>();
    print_max_value_of<std::streamsize>();
    print_max_value_of<std::size_t>();
    print_max_value_of<char>();
    print_max_value_of<char16_t>();
    print_max_value_of<wchar_t>();
    print_max_value_of<float>();
    print_max_value_of<double>();
    print_max_value_of<long double>();
}
```

## See also
- [lowest](/cpp/types/numeric_limits/lowest/)
- [min](/cpp/types/numeric_limits/min/)
