---
title: "std::ranges::views::as_const, std::ranges::as_const_view"
source_path: "cpp/ranges/as_const_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) A range adaptor that represents a view of underlying [view](/cpp/ranges/view/) that is also a [constant_range](/cpp/ranges/constant_range/). An as_const_view always has read-only elements (if not empty).

## Declarations
```cpp
template< ranges::view V >
requires ranges::input_range<V>
class as_const_view
: public ranges::view_interface<as_const_view<V>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /* unspecified */ as_const = /* unspecified */;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R >
requires /* see below */
constexpr ranges::view auto as_const( R&& r );
```
_(since C++23)_

## Parameters
- `base`: a view

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_ranges_as_const
202207L
(C++23)
ranges::as_const_view, std::const_iterator

## Example
```cpp
#include <cassert>
#include <ranges>
 
int main()
{
    int x[]{1, 2, 3, 4, 5};
 
    auto v1 = x | std::views::drop(2);
    assert(v1.back() == 5);
    v1[0]++; // OK, can modify non-const element
 
    auto v2 = x | std::views::drop(2) | std::views::as_const;
    assert(v2.back() == 5);
    // v2[0]++; // Compile-time error, cannot modify read-only element
}
```

## See also
- [ranges::as_rvalue_viewviews::as_rvalue](/cpp/ranges/as_rvalue_view/)
- [view](/cpp/ranges/view/)
- [ranges::cbegin](/cpp/ranges/cbegin/)
- [ranges::cend](/cpp/ranges/cend/)
- [as_const](/cpp/utility/as_const/)
- [basic_const_iterator](/cpp/iterator/basic_const_iterator/)
