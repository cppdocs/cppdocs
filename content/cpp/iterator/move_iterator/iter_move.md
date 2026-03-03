---
title: "iter_move(std::move_iterator)"
source_path: "cpp/iterator/move_iterator/iter_move"
category: "iterator"
since: "C++20"
---

Casts the result of dereferencing the underlying iterator to its associated rvalue reference type.

## Declarations
```cpp
friend constexpr std::iter_rvalue_reference_t<Iter>
iter_move( const std::move_iterator& i ) noexcept(/* see below */);
```
_(since C++20)_

## Parameters
- `i`: a source move iterator

## Return value
An rvalue reference or a prvalue temporary.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <iterator>
#include <string>
#include <vector>
 
void print(const auto& rem, const auto& v)
{
    std::cout << rem << '[' << size(v) << "] { ";
    for (char comma[]{0, ' ', 0}; const auto& s : v)
        std::cout << comma << std::quoted(s), comma[0] = ',';
    std::cout << " }\n";
}
 
int main()
{
    std::vector<std::string> p{"Andromeda", "Cassiopeia", "Phoenix"}, q;
 
    print("p", p), print("q", q);
 
    using MI = std::move_iterator<std::vector<std::string>::iterator>;
 
    for (MI first{p.begin()}, last{p.end()}; first != last; ++first)
        q.emplace_back(/* ADL */ iter_move(first));
 
    print("p", p), print("q", q);
}
```

## See also
- [iter_move](/cpp/iterator/ranges/iter_move/)
- [iter_move](/cpp/iterator/reverse_iterator/iter_move/)
- [move](/cpp/utility/move/)
- [move_if_noexcept](/cpp/utility/move_if_noexcept/)
- [forward](/cpp/utility/forward/)
- [ranges::move](/cpp/algorithm/ranges/move/)
- [ranges::move_backward](/cpp/algorithm/ranges/move_backward/)
