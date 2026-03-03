---
title: "std::move_backward"
source_path: "cpp/algorithm/move_backward"
header: "<algorithm>"
category: "algorithm"
---

Moves the elements from the range [first,last), to another range ending at d_last. The elements are moved in reverse order (the last element is moved first), but their relative order is preserved.

## Declarations
```cpp
template< class BidirIt1, class BidirIt2 >
BidirIt2 move_backward( BidirIt1 first, BidirIt1 last, BidirIt2 d_last );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `first, last`: the range of the elements to move
- `d_last`: end of the destination range

## Return value
Iterator in the destination range, pointing at the last element moved.

## Notes
When moving overlapping ranges, [std::move](/cpp/algorithm/move/) is appropriate when moving to the left (beginning of the destination range is outside the source range) while std::move_backward is appropriate when moving to the right (end of the destination range is outside the source range).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <string>
#include <string_view>
#include <vector>
 
using container = std::vector<std::string>;
 
void print(std::string_view comment, const container& src, const container& dst = {})
{
    auto prn = [](std::string_view name, const container& cont)
    {
        std::cout << name;
        for (const auto &s : cont)
            std::cout << (s.empty() ? "∙" : s.data()) << ' ';
        std::cout << '\n';
    };
    std::cout << comment << '\n';
    prn("src: ", src);
    if (dst.empty())
        return;
    prn("dst: ", dst);
}
 
int main()
{
    container src{"foo", "bar", "baz"};
    container dst{"qux", "quux", "quuz", "corge"};
    print("Non-overlapping case; before move_backward:", src, dst);
    std::move_backward(src.begin(), src.end(), dst.end());
    print("After:", src, dst);
 
    src = {"snap", "crackle", "pop", "lock", "drop"};
    print("Overlapping case; before move_backward:", src);
    std::move_backward(src.begin(), std::next(src.begin(), 3), src.end());
    print("After:", src);
}
```

## See also
- [move](/cpp/algorithm/move/)
- [ranges::move_backward](/cpp/algorithm/ranges/move_backward/)
