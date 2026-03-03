---
title: "std::ranges::cartesian_product_view<First, Vs...>::size"
source_path: "cpp/ranges/cartesian_product_view/size"
category: "ranges"
since: "C++23"
---

Returns the number of elements. The return type is an implementation-defined /*unsigned-integer-like*/ type U.

## Declarations
```cpp
constexpr /* see description */ size()
requires /*cartesian-product-is-sized*/<First, Vs...>;
```
_(since C++23)_

```cpp
constexpr /* see description */ size() const
requires /*cartesian-product-is-sized*/<const First, const Vs...>;
```
_(since C++23)_

## Return value
The number of elements, that is, the product of the sizes of all the underlying ranges.

## Notes
The return type is the smallest /*unsigned-integer-like*/ type that is sufficiently wide to store the product of the maximum sizes of all the underlying ranges, if such a type exists.

## Example
```cpp
#include <ranges>
 
int main()
{
    constexpr static auto w = {1};
    constexpr static auto x = {2, 3};
    constexpr static auto y = {4, 5, 6};
    constexpr static auto z = {7, 8, 9, 10, 11, 12, 13};
    constexpr auto v = std::ranges::cartesian_product_view(w, x, y, z);
    static_assert(v.size() == w.size() * x.size() * y.size() * z.size() and v.size() == 42);
}
```

## See also
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
