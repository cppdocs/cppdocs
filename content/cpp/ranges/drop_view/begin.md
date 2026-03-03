---
title: "std::ranges::drop_view<V>::begin"
source_path: "cpp/ranges/drop_view/begin"
category: "ranges"
since: "C++20"
---

Returns an iterator to the first element of the drop_view, that is, an iterator to the Nth element of the underlying view, or to the end of the underlying view if it has less than N elements.

## Declarations
```cpp
constexpr auto begin()
requires (!(/*simple-view*/<V> &&
ranges::random_access_range<const V> &&
ranges::sized_range<const V>));
```
_(since C++20)_

```cpp
constexpr auto begin() const
requires ranges::random_access_range<const V> &&
ranges::sized_range<const V>;
```
_(since C++20)_

## Return value
[ranges::next](/cpp/iterator/ranges/next/)([ranges::begin](/cpp/ranges/begin/)(base_), count_, [ranges::end](/cpp/ranges/end/)(base_)), where [base_](/cpp/ranges/drop_view/#Data_members) is the underlying view, and [count_](/cpp/ranges/drop_view/#Data_members) is the number of elements to skip.

## Example
```cpp
#include <array>
#include <concepts>
#include <iostream>
#include <iterator>
#include <ranges>
 
void println(std::ranges::range auto const& range)
{
    for (auto const& elem : range)
        std::cout << elem;
    std::cout << '\n';
}
 
int main()
{
    std::array hi{'H', 'e', 'l', 'l', 'o', ',', ' ', 'C', '+', '+', '2', '0', '!'};
    println(hi);
 
    const auto pos = std::distance(hi.begin(), std::ranges::find(hi, 'C'));
    auto cxx = std::ranges::drop_view{hi, pos};
    std::cout << "*drop_view::begin() == '" << *cxx.begin() << "'\n";
//  *cxx.begin() = 'c'; // undefined: 'views' are to be used as observers
    println(cxx);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3482 | C++20 | the const overload can be called with unsized ranges | the const overload requires sized_range |

## See also
- [end](/cpp/ranges/drop_view/end/)
- [ranges::begin](/cpp/ranges/begin/)
- [ranges::end](/cpp/ranges/end/)
