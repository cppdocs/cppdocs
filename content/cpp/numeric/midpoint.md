---
title: "std::midpoint"
source_path: "cpp/numeric/midpoint"
header: "<numeric>"
category: "numeric"
since: "C++20"
---

Computes the midpoint of the integers, floating-points, or pointers a and b.

## Declarations
```cpp
template< class T >
constexpr T midpoint( T a, T b ) noexcept;
```
_(since C++20)_

```cpp
template< class T >
constexpr T* midpoint( T* a, T* b );
```
_(since C++20)_

## Parameters
- `a, b`: integers, floating-points, or pointer values

## Notes
Overload (2) can be simply implemented as return a + (b - a) / 2; on common platforms. However, such implementation is not guaranteed to be portable, because there may be some platforms where creating an array with number of elements greater than [PTRDIFF_MAX](/cpp/types/climits/) is possible, and b - a may result in undefined behavior even if both b and a point to elements in the same array.

## Example
```cpp
#include <cstdint>
#include <iostream>
#include <limits>
#include <numeric>
 
int main()
{
    std::uint32_t a = std::numeric_limits<std::uint32_t>::max();
    std::uint32_t b = std::numeric_limits<std::uint32_t>::max() - 2;
 
    std::cout << "a: " << a << '\n'
              << "b: " << b << '\n'
              << "Incorrect (overflow and wrapping): " << (a + b) / 2 << '\n'
              << "Correct: " << std::midpoint(a, b) << "\n\n";
 
    auto on_pointers = [](int i, int j)
    {
        char const* text = "0123456789";
        char const* p = text + i;
        char const* q = text + j;
        std::cout << "std::midpoint('" << *p << "', '" << *q << "'): '"
                  << *std::midpoint(p, q) << "'\n";
    };
 
    on_pointers(2, 4);
    on_pointers(2, 5);
    on_pointers(5, 2);
    on_pointers(2, 6);
}
```

## See also
- [lerp](/cpp/numeric/lerp/)
