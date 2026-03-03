---
title: "std::floating_point"
source_path: "cpp/concepts/floating_point"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept floating_point<T> is satisfied if and only if T is a floating-point type.

## Declarations
```cpp
template< class T >
concept floating_point = std::is_floating_point_v<T>;
```
_(since C++20)_

## Example
```cpp
#include <concepts>
#include <iostream>
#include <type_traits>
 
constexpr std::floating_point auto x2(std::floating_point auto x)
{
    return x + x;
}
 
constexpr std::integral auto x2(std::integral auto x)
{
    return x << 1;
}
 
int main()
{
    constexpr auto d = x2(1.1);
    static_assert(std::is_same_v<double const, decltype(d)>);
    std::cout << d << '\n';
 
    constexpr auto f = x2(2.2f);
    static_assert(std::is_same_v<float const, decltype(f)>);
    std::cout << f << '\n';
 
    constexpr auto i = x2(444);
    static_assert(std::is_same_v<int const, decltype(i)>);
    std::cout << i << '\n';
}
```

## See also
- [is_floating_point](/cpp/types/is_floating_point/)
