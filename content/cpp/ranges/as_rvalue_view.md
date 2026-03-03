---
title: "std::ranges::views::as_rvalue, std::ranges::as_rvalue_view"
source_path: "cpp/ranges/as_rvalue_view"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

1) A range adaptor that represents a view of underlying [view](/cpp/ranges/view/) whose elements are rvalues.

## Declarations
```cpp
template< ranges::view V >
requires ranges::input_range<V>
class as_rvalue_view
: public ranges::view_interface<as_rvalue_view<V>>
```
_(since C++23)_

```cpp
namespace views {
inline constexpr /* unspecified */ as_rvalue = /* unspecified */;
}
```
_(since C++23)_

```cpp
Call signature
```

```cpp
template< ranges::viewable_range R >
requires /* see below */
constexpr ranges::view auto as_rvalue( R&& r );
```
_(since C++23)_

## Parameters
- `base`: a view

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_ranges_as_rvalue
202207L
(C++23)
std::ranges::as_rvalue_view

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
#include <string>
#include <vector>
 
int main()
{
    std::vector<std::string> words =
        {"the", "quick", "brown", "\N{FOX FACE}", "ate", "an", "archeopteryx"};
    std::vector<std::string> new_words;
 
    std::ranges::copy(
        words | std::views::as_rvalue,
        std::back_inserter(new_words)); // move string from words into new_words
 
    auto quoted = std::views::transform([](auto&& s) { return "“" + s + "”"; });
 
    std::cout << "Words: ";
    for (auto&& word : words | std::views::as_rvalue | quoted)
        std::cout << word << ' ';
 
    std::cout << "\nNew words: ";
    for (auto&& word : new_words | std::views::as_rvalue | quoted)
        std::cout << word << ' ';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4083 | C++23 | views::as_rvalue used to accept non-input ranges | made rejected |

## See also
- [iter_move](/cpp/iterator/ranges/iter_move/)
- [move_iterator](/cpp/iterator/move_iterator/)
- [move_sentinel](/cpp/iterator/move_sentinel/)
- [std::move_iterator](/cpp/iterator/move_iterator/)
- [ranges::as_const_viewviews::as_const](/cpp/ranges/as_const_view/)
- [view](/cpp/ranges/view/)
- [constant_range](/cpp/ranges/constant_range/)
