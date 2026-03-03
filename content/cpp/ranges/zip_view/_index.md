---
title: "std::ranges::views::zip, std::ranges::zip_view"
source_path: "cpp/ranges/zip_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) zip_view is a range adaptor that takes one or more [views](/cpp/ranges/view/), and produces a [view](/cpp/ranges/view/) whose ith element is a tuple-like value consisting of the ith elements of all views. The size of produced view is the minimum of sizes of all adapted views.

## Declarations
```cpp
template< ranges::input_range... Views >
requires (ranges::view<Views> && ...) && (sizeof...(Views) > 0)
class zip_view
: public ranges::view_interface<zip_view<Views...>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /*unspecified*/ zip = /*unspecified*/;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range... Rs >
requires /* see below */
constexpr ranges::view auto zip( Rs&&... rs );
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
ranges::zip_view,ranges::zip_transform_view,ranges::adjacent_view,ranges::adjacent_transform_view

## Example
```cpp
#include <array>
#include <iostream>
#include <list>
#include <ranges>
#include <string>
#include <tuple>
#include <vector>
 
void print(auto const rem, auto const& range)
{
    for (std::cout << rem; auto const& elem : range)
        std::cout << elem << ' ';
    std::cout << '\n';
}
 
int main()
{
    auto x = std::vector{1, 2, 3, 4};
    auto y = std::list<std::string>{"α", "β", "γ", "δ", "ε"};
    auto z = std::array{'A', 'B', 'C', 'D', 'E', 'F'};
 
    print("Source views:", "");
    print("x: ", x);
    print("y: ", y);
    print("z: ", z);
 
    print("\nzip(x,y,z):", "");
 
    for (std::tuple<int&, std::string&, char&> elem : std::views::zip(x, y, z))
    {
        std::cout << std::get<0>(elem) << ' '
                  << std::get<1>(elem) << ' '
                  << std::get<2>(elem) << '\n';
 
        std::get<char&>(elem) += ('a' - 'A'); // modifies the element of z
    }
 
    print("\nAfter modification, z: ", z);
}
```

## See also
- [ranges::zip_transform_viewviews::zip_transform](/cpp/ranges/zip_transform_view/)
- [view](/cpp/ranges/view/)
- [ranges::elements_viewviews::elements](/cpp/ranges/elements_view/)
- [view](/cpp/ranges/view/)
- [tuple-like](/cpp/utility/tuple/tuple-like/)
- [view](/cpp/ranges/view/)
