---
title: "iter_move(std::counted_iterator)"
source_path: "cpp/iterator/counted_iterator/iter_move"
category: "iterator"
since: "C++20"
---

Casts the result of dereferencing the underlying iterator to its associated rvalue reference type.

## Declarations
```cpp
friend constexpr decltype(auto) iter_move( const std::counted_iterator& i )
noexcept(noexcept(ranges::iter_move(i.base())))
requires std::input_iterator<I>;
```
_(since C++20)_

## Parameters
- `i`: a source iterator adaptor

## Return value
An rvalue reference or a prvalue temporary.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <iterator>
#include <string>
#include <vector>
 
void print(auto const& rem, auto const& v)
{
    std::cout << rem << '[' << size(v) << "] {";
    for (char comma[]{0, ' ', 0}; auto const& s : v)
        std::cout << comma << std::quoted(s), *comma = ',';
    std::cout << "}\n";
}
 
int main()
{
    std::vector<std::string> p{"Alpha", "Bravo", "Charlie"}, q;
    print("p", p);
    print("q", q);
 
    using RI = std::counted_iterator<std::vector<std::string>::iterator>;
 
    for (RI iter{p.begin(), 2}; iter != std::default_sentinel; ++iter)
        q.emplace_back(/* ADL */ iter_move(iter));
 
    print("p", p);
    print("q", q);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3953 | C++20 | the return type was std::iter_rvalue_reference_t<I> | changed to decltype(auto) |

## See also
- [iter_move](/cpp/iterator/ranges/iter_move/)
- [iter_swap](/cpp/iterator/counted_iterator/iter_swap/)
- [move](/cpp/utility/move/)
- [move_if_noexcept](/cpp/utility/move_if_noexcept/)
- [forward](/cpp/utility/forward/)
- [ranges::move](/cpp/algorithm/ranges/move/)
- [ranges::move_backward](/cpp/algorithm/ranges/move_backward/)
