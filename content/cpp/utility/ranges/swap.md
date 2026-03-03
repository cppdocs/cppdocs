---
title: "std::ranges::swap"
source_path: "cpp/utility/ranges/swap"
header: "<concepts>"
category: "utility"
since: "C++20"
---

Exchanges the values referenced by t and u.

## Declarations
```cpp
namespace ranges {
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ swap = /* unspecified */;
}
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T, class U >
constexpr void ranges::swap( T&& t, U&& u ) noexcept(/* see below */);
```
_(since C++20)_

## Example
```cpp
#include <array>
#include <concepts>
#include <iostream>
#include <ranges>
#include <string_view>
#include <vector>
 
void print(std::string_view name, 
           std::ranges::common_range auto const& p, 
           std::ranges::common_range auto const& q)
{
    std::cout << name << "1{ ";
    for (auto const& i : p)
        std::cout << i << ' ';
    std::cout << "}, " << name << "2{ ";
    for (auto const& i : q)
        std::cout << i << ' ';
    std::cout << "}\n";
}
 
void print(std::string_view name, int p, int q)
{
    std::cout << name << "1 = " << p << ", " << name << "2 = " << q << '\n';
}
 
struct IntLike
{
    int v;
};
 
void swap(IntLike& lhs, int& rhs)
{
    std::swap(lhs.v, rhs);
}
 
void swap(int& lhs, IntLike& rhs)
{
    std::swap(lhs, rhs.v);
}
 
std::ostream& operator<<(std::ostream& out, IntLike i)
{
    return out << i.v;
}
 
int main()
{
    std::vector a1{10, 11, 12}, a2{13, 14};
    std::ranges::swap(a1, a2);
    print("a", a1, a2);
 
    std::array b1{15, 16, 17}, b2{18, 19, 20};
    std::ranges::swap(b1, b2);
    print("b", b1, b2);
 
    // std::array c1{1, 2, 3}; std::array c2{4, 5};
    // std::ranges::swap(c1, c2); // error: no swap found by ADL
 
    int d1[]{21, 22, 23}, d2[]{24, 25, 26};
    std::ranges::swap(d1, d2);
    print("d", d1, d2);
 
    // int e1[]{1, 2, 3}, e2[]{4, 5};
    // std::ranges::swap(e1, e2); // error: extents mismatch
 
    // char f1[]{1, 2, 3};
    // int  f2[]{4, 5, 6};
    // std::ranges::swap(f1, f2); // error: no swap(*f1, *f2) found by ADL
 
    IntLike g1[]{1, 2, 3};
    int     g2[]{4, 5, 6};
    std::ranges::swap(g1, g2); // heterogeneous swap supported
    print("g", g1, g2);
 
    int h1{27}, h2{28};
    std::ranges::swap(h1, h2);
    print("h", h1, h2);
}
```

## See also
- [swappableswappable_with](/cpp/concepts/swappable/)
- [swap](/cpp/utility/swap/)
