---
title: "std::numeric_limits<T>::min"
source_path: "cpp/types/numeric_limits/min"
header: "<limits>"
category: "types"
since: "C++11"
---

Returns the minimum finite value representable by the numeric type T.

## Declarations
```cpp
static T min() throw();
```
_(until C++11)_

```cpp
static constexpr T min() noexcept;
```
_(since C++11)_

## Example
```cpp
#include <cstddef>
#include <iomanip>
#include <iostream>
#include <limits>
 
// we want to print char types as an integer without leading Fs
auto p(auto x) { return x; }
auto p(char x) { return x & static_cast<unsigned char>(-1); }
 
template <typename T>
void print_one(std::string_view type_name)
{
    constexpr T min = std::numeric_limits<T>::min();
 
    std::cout 
        << std::dec << std::defaultfloat << std::setw(14) << type_name
        << " (" << std::setw(2) << sizeof(T) << " bytes): " << +min;
 
    if constexpr (min != 0)
        std::cout << " or " << std::showbase << std::hex << std::hexfloat << p(min);
 
    std::cout << '\n';
}
 
#define SHOW(T) print_one<T>(#T)
 
int main()
{
    SHOW(bool);
    SHOW(char);
    SHOW(unsigned char);
    SHOW(short);
    SHOW(unsigned short);
    SHOW(signed);
    SHOW(unsigned);
    SHOW(std::ptrdiff_t);
    SHOW(std::size_t);
    SHOW(float);
    SHOW(double);
    SHOW(long double);
}
```

## See also
- [lowest](/cpp/types/numeric_limits/lowest/)
- [denorm_min](/cpp/types/numeric_limits/denorm_min/)
- [max](/cpp/types/numeric_limits/max/)
