---
title: "std::counted_iterator"
source_path: "cpp/iterator/counted_iterator"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

std::counted_iterator is an iterator adaptor which behaves exactly like the underlying iterator, except that it keeps track of the distance to the end of its range. This iterator is equal to [std::default_sentinel](/cpp/iterator/default_sentinel/) if and only if its count reaches zero.

## Declarations
```cpp
template< std::input_or_output_iterator I >
class counted_iterator;
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <string>
#include <vector>
 
using std::operator""s;
 
void print(auto const remark, auto const& v)
{
    const auto size = std::ssize(v);
    std::cout << remark << '[' << size << "] { ";
    for (auto it = std::counted_iterator{std::cbegin(v), size};
         it != std::default_sentinel; ++it)
        std::cout << *it << (it.count() > 1 ? ", " : " ");
    std::cout << "}\n";
}
 
int main()
{
    const auto src = {"Arcturus"s, "Betelgeuse"s, "Canopus"s, "Deneb"s, "Elnath"s};
    print("src", src);
    std::vector<decltype(src)::value_type> dst;
    std::ranges::copy(std::counted_iterator{src.begin(), 3},
                      std::default_sentinel,
                      std::back_inserter(dst));
    print("dst", dst);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2259R1 | C++20 | member typedefs are not provided std::incrementable_traitsis specialized for counted_iterator | member typedefs are added to account for iterator_traits fixredundant std::incrementable_traits specialization is removed |

## See also
- [default_sentinel_t](/cpp/iterator/default_sentinel/)
- [views::counted](/cpp/ranges/counted_view/)
- [ranges::take_viewviews::take](/cpp/ranges/take_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
