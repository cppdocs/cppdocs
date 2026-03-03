---
title: "std::ranges::views::repeat, std::ranges::repeat_view"
source_path: "cpp/ranges/repeat_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) A range factory that generates a sequence of elements by repeatedly producing the same value. Can be either bounded or unbounded (infinite).

## Declarations
```cpp
template< std::move_constructible W,
std::semiregular Bound = std::unreachable_sentinel_t >
requires (std::is_object_v<W> && std::same_as<W, std::remove_cv_t<W>> &&
(/*integer-like-with-usable-difference-type*/<Bound> ||
std::same_as<Bound, std::unreachable_sentinel_t>))
class repeat_view : public ranges::view_interface<repeat_view<W, Bound>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /* unspecified */ repeat = /* unspecified */;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< class W >
requires /* see below */
constexpr /* see below */ repeat( W&& value );
```
_(since C++23)_

```cpp
template< class W, class Bound >
requires /* see below */
constexpr /* see below */ repeat( W&& value, Bound&& bound );
```
_(since C++23)_

```cpp
Helper concepts
```

```cpp
concept /*integer-like-with-usable-difference-type*/ =
/*is-signed-integer-like*/<T> ||
(/*is-integer-like*/ <T> && std::weakly_incrementable<T>)
```
_(exposition only*)_

## Parameters
- `value`: the value to be repeatedly produced
- `bound`: the bound
- `value_args`: the tuple containing the initializers of value_
- `bound_args`: the tuple containing the initializers of bound_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_ranges_repeat
202207L
(C++23)
std::ranges::repeat_view

## Example
```cpp
#include <iostream>
#include <ranges>
#include <string_view>
using namespace std::literals;
 
int main()
{
    // bounded overload
    for (auto s : std::views::repeat("C++"sv, 3))
        std::cout << s << ' ';
    std::cout << '\n';
 
    // unbounded overload
    for (auto s : std::views::repeat("I know that you know that"sv)
                | std::views::take(3))
        std::cout << s << ' ';
    std::cout << "...\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4053 | C++20 | unary calls to views::repeat did not decay the argument | decay the argument |
| LWG 4054 | C++20 | calling views::repeat with a repeat_viewdid not create a nested repeat_view | creates a nestedrepeat_view |

## See also
- [ranges::iota_viewviews::iota](/cpp/ranges/iota_view/)
- [view](/cpp/ranges/view/)
