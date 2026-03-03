---
title: "std::ranges::split_view<V,Pattern>::split_view"
source_path: "cpp/ranges/split_view/split_view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Constructs a split_view.

## Declarations
```cpp
split_view()
requires std::default_initializable<V> &&
std::default_initializable<Pattern> = default;
```
_(since C++20)_

```cpp
constexpr explicit split_view( V base, Pattern pattern );
```
_(since C++20)_

```cpp
template< ranges::forward_range R >
requires std::constructible_from<V, views::all_t<R>> &&
std::constructible_from<Pattern, ranges::single_view<
ranges::range_value_t<R>>>
constexpr explicit split_view( R&& r, ranges::range_value_t<R> e );
```
_(since C++20)_

## Parameters
- `base`: the view (to be split)
- `pattern`: view to be used as the delimiter
- `e`: element to be used as the delimiter

## Example
```cpp
#include <algorithm>
#include <array>
#include <cctype>
#include <iostream>
#include <iterator>
#include <ranges>
#include <string_view>
#include <vector>
 
int main()
{
    {
        auto view = std::views::iota(1, 20)
                  | std::views::transform([](int x) { return x % 5; });
        auto splitts = std::views::split(view, 0); // (2)
        for (const auto& split : splitts)
        {
            std::cout << "{ ";
            std::ranges::copy(split, std::ostream_iterator<int>(std::cout, " "));
            std::cout << "} ";
        }
    }
    std::cout << '\n';
 
    {
        const std::vector nums{1, -1, -1, 2, 3, -1, -1, 4, 5, 6};
        const std::array delim{-1, -1};
        auto splitter = std::views::split(nums, delim); // (3)
        for (const auto& split : splitter)
        {
            std::cout << "{ ";
            std::ranges::copy(split, std::ostream_iterator<int>(std::cout, " "));
            std::cout << "} ";
        }
    }
    std::cout << '\n';
 
    {
        constexpr std::string_view JupiterMoons
        {
            "Callisto, Europa, Ganymede, Io, and 91 more"
        };
        constexpr std::string_view delim{", "};
        std::ranges::split_view moons_extractor{JupiterMoons, delim}; // (3)
        auto is_moon = std::views::filter([](auto str)
        {
            return std::isupper(str[0]);
        });
        std::cout << "Some moons of Jupiter: ";
        for (const auto moon : moons_extractor | is_moon)
            std::cout << std::string_view(moon) << ' ';
    }
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3714(P2711R1) | C++20 | the multi-parameter constructor was not explicit | made explicit |

## See also
- [(constructor)](/cpp/ranges/lazy_split_view/lazy_split_view/)
