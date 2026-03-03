---
title: "std::ranges::views::single, std::ranges::single_view"
source_path: "cpp/ranges/single_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) Produces a [view](/cpp/ranges/view/) that contains exactly one element of a specified value.

## Declarations
```cpp
template< std::copy_constructible T >
requires std::is_object_v<T>
class single_view
: public ranges::view_interface<single_view<T>>
```
_(since C++20) (until C++23)_

```cpp
template< std::move_constructible T >
requires std::is_object_v<T>
class single_view
: public ranges::view_interface<single_view<T>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /* unspecified */ single = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr /* see below */ single( T&& t );
```
_(since C++20)_

## Notes
For a [single_view](#top), the inherited empty member function always returns false, and the inherited operator bool conversion function always returns true.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <ranges>
#include <string>
#include <tuple>
 
int main()
{
    constexpr std::ranges::single_view sv1{3.1415}; // uses (const T&) constructor
    static_assert(sv1);
    static_assert(not sv1.empty());
 
    std::cout << "1) *sv1.data(): " << *sv1.data() << '\n'
              << "2) *sv1.begin(): " << *sv1.begin() << '\n'
              << "3)  sv1.size(): " << sv1.size() << '\n'
              << "4)  distance: " << std::distance(sv1.begin(), sv1.end()) << '\n';
 
    std::string str{"C++20"};
    std::cout << "5)  str = " << std::quoted(str) << '\n';
    std::ranges::single_view sv2{std::move(str)}; // uses (T&&) constructor
    std::cout << "6) *sv2.data(): " << std::quoted(*sv2.data()) << '\n'
              << "7)  str = " << std::quoted(str) << '\n';
 
    std::ranges::single_view<std::tuple<int, double, std::string>>
        sv3{std::in_place, 42, 3.14, "😄"}; // uses (std::in_place_t, Args&&... args)
 
    std::cout << "8)  sv3 holds a tuple: { "
              << std::get<0>(sv3[0]) << ", "
              << std::get<1>(sv3[0]) << ", "
              << std::get<2>(sv3[0]) << " }\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3428 | C++20 | single_view was convertible from std::in_place_t | the constructor is made explicit |
| LWG 4035 | C++20 | single_view did not provide the member function empty() | provides empty() |
| P2367R0 | C++20 | deduction guides for single_view failed to decay the argument;views::single copied but not wrapped a single_view | a decaying guide provided;made always wrapping |

## See also
- [optional](/cpp/utility/optional/)
- [ranges::empty_viewviews::empty](/cpp/ranges/empty_view/)
- [view](/cpp/ranges/view/)
- [ranges::split_viewviews::split](/cpp/ranges/split_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
