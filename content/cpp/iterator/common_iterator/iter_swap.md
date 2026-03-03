---
title: "iter_swap(std::common_iterator)"
source_path: "cpp/iterator/common_iterator/iter_swap"
category: "iterator"
since: "C++20"
---

Swaps the objects pointed to by two underlying iterators. The behavior is undefined if x does not hold an I object or y does not hold an I2 object (i.e. at least one of x and y does not hold an iterator).

## Declarations
```cpp
template< std::indirectly_swappable<I> I2, class S2 >
friend constexpr void
iter_swap( const common_iterator& x,
const std::common_iterator<I2, S2>& y ) noexcept(/*see below*/);
```
_(since C++20)_

## Parameters
- `x, y`: the iterators to the elements to swap

## Return value
(none)

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <string>
#include <vector>
 
int main()
{
    std::vector<std::string> v1{"1", "2", "3", "4", "5"},
                             v2{"α", "β", "γ", "δ", "ε"};
 
    using CI = std::common_iterator<
                   std::counted_iterator<std::vector<std::string>::iterator>,
                   std::default_sentinel_t
                   >;
 
    CI first1{std::counted_iterator{v1.begin(), 3}};
    CI first2{std::counted_iterator{v2.begin(), 4}};
    CI last{std::default_sentinel};
 
    auto print = [&](auto rem)
    {
        std::cout << rem << "v1 = ";
        std::ranges::copy(v1, std::ostream_iterator<std::string>{std::cout, " "});
        std::cout << "\nv2 = ";
        std::ranges::copy(v2, std::ostream_iterator<std::string>{std::cout, " "});
        std::cout << '\n';
    };
 
    print("Before iter_swap:\n");
 
    for (; first1 != last && first2 != last; ++first1, ++first2)
        iter_swap(first1, first2); // ADL
 
    print("After iter_swap:\n");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3574 | C++20 | variant was fully constexpr (P2231R1) but common_iterator was not | also made constexpr |

## See also
- [swap](/cpp/utility/swap/)
- [swap_ranges](/cpp/algorithm/swap_ranges/)
- [iter_swap](/cpp/algorithm/iter_swap/)
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
- [iter_swap](/cpp/iterator/counted_iterator/iter_swap/)
