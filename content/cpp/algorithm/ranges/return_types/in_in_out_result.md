---
title: "std::ranges::in_in_out_result"
source_path: "cpp/algorithm/ranges/return_types/in_in_out_result"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

ranges::in_in_out_result is a class template that provides a way to store three iterators as a single unit.

## Declarations
```cpp
template< class I1, class I2, class O >
struct in_in_out_result;
```
_(since C++20)_

## Notes
Each standard library algorithm that uses this family of return types declares a new [alias type](/cpp/language/type_alias/), e.g. using merge_result = in_in_out_result<I1, I2, O>;.

The names for such aliases are formed by adding the suffix "_result" to the algorithm's name. So, the return type of std::ranges::merge can be named as std::ranges::merge_result.

Unlike [std::pair](/cpp/utility/pair/) and [std::tuple](/cpp/utility/tuple/), this class template has data members of meaningful names.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <iterator>
#include <ranges>
 
void print(auto rem, auto first, auto last)
{
    for (std::cout << rem << ": "; first != last; ++first)
        std::cout << *first << ' ';
    std::cout << '\n';
}
 
int main()
{
    constexpr static auto in1 = {1, 2, 3, 4, 5, 5};
    constexpr static auto in2 = {3, 4, 5, 6, 7};
    std::array<int, std::size(in1) + std::size(in2)> out;
 
    const auto result = std::ranges::merge(in1, in2, out.begin());
    print("in1", in1.begin(), result.in1);
    print("in2", in2.begin(), result.in2);
    print("out", out.begin(), result.out);
}
```

## See also
- [pair](/cpp/utility/pair/)
- [tuple](/cpp/utility/tuple/)
