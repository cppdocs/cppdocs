---
title: "std::ranges::in_out_out_result"
source_path: "cpp/algorithm/ranges/return_types/in_out_out_result"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

ranges::in_out_out_result is a class template that provides a way to store three iterators as a single unit.

## Declarations
```cpp
template< class I, class O1, class O2 >
struct in_out_out_result;
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
#include <cctype>
#include <iostream>
#include <iterator>
#include <ranges>
#include <string_view>
 
void print(std::string_view rem, auto first, auto last)
{
    for (std::cout << rem << ": { "; first != last; ++first)
        std::cout << *first << ' ';
    std::cout << "}\n";
}
 
int main()
{
    constexpr std::string_view in {"TvEeNcStOoRr"};
    std::array<char, in.size()> o1, o2;
 
    const auto result = std::ranges::partition_copy(in, o1.begin(), o2.begin(),
        [](char c) { return std::isupper(c); });
 
    print("in", in.begin(), result.in);
    print("o1", o1.begin(), result.out1);
    print("o2", o2.begin(), result.out2);
}
```

## See also
- [pair](/cpp/utility/pair/)
- [tuple](/cpp/utility/tuple/)
