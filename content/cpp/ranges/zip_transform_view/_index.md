---
title: "std::ranges::views::zip_transform, std::ranges::zip_transform_view"
source_path: "cpp/ranges/zip_transform_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) zip_transform_view is a range adaptor that takes an invocable object and one or more [views](/cpp/ranges/view/), and produces a [view](/cpp/ranges/view/) whose ith element is the result of applying the invocable object to the ith elements of all views.
A type T models the exposition-only concept /*can-reference*/ if and only if T& is a valid type.

## Declarations
```cpp
template< std::move_constructible F, ranges::input_range... Views >
requires (ranges::view<Views> && ...) && (sizeof...(Views) > 0) &&
std::is_object_v<F> && std::regular_invocable<
F&, ranges::range_reference_t<Views>...> &&
/*can-reference*/<std::invoke_result_t<
F&, ranges::range_reference_t<Views>...>>
class zip_transform_view
: public ranges::view_interface<zip_transform_view<F, Views...>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /*unspecified*/ zip_transform = /*unspecified*/;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< class F, ranges::viewable_range... Rs >
requires /* see below */
constexpr auto zip_transform( F&& f, Rs&&... rs );
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_ranges_zip
202110L
(C++23)
ranges::zip_view,std::ranges::zip_transform_view,ranges::adjacent_view,ranges::adjacent_transform_view

## Example
```cpp
#include <array>
#include <iostream>
#include <list>
#include <ranges>
#include <vector>
 
void print(auto const rem, auto const& r)
{
    std::cout << rem << '{'; 
    for (char o[]{0,' ',0}; auto const& e : r)
        std::cout << o << e, *o = ',';
    std::cout << "}\n";
}
 
int main()
{
    auto v1 = std::vector<float>{1, 2, 3};
    auto v2 = std::list<short>{1, 2, 3, 4};
    auto v3 = std::to_array({1, 2, 3, 4, 5});
 
    auto add = [](auto a, auto b, auto c) { return a + b + c; };
 
    auto sum = std::views::zip_transform(add, v1, v2, v3);
 
    print("v1:  ", v1);
    print("v2:  ", v2);
    print("v3:  ", v3);
    print("sum: ", sum);
}
```

## See also
- [ranges::zip_viewviews::zip](/cpp/ranges/zip_view/)
- [view](/cpp/ranges/view/)
- [ranges::transform_viewviews::transform](/cpp/ranges/transform_view/)
- [view](/cpp/ranges/view/)
- [ranges::elements_viewviews::elements](/cpp/ranges/elements_view/)
- [view](/cpp/ranges/view/)
- [tuple-like](/cpp/utility/tuple/tuple-like/)
- [view](/cpp/ranges/view/)
