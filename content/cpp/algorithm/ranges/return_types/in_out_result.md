---
title: "std::ranges::in_out_result"
source_path: "cpp/algorithm/ranges/return_types/in_out_result"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

ranges::in_out_result is a class template that provides a way to store two iterators as a single unit.

## Declarations
```cpp
template< class I, class O >
struct in_out_result;
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
#include <ranges>
 
int main()
{
    constexpr char in[] = "transform" "\n";
    std::array<char, sizeof(in)> out;
 
    const auto result = std::ranges::transform(in, out.begin(),
        [](char c) { return std::toupper(c); });
 
    auto print = [](char c) { std::cout << c; };
    std::ranges::for_each(std::cbegin(in), result.in, print);
    std::ranges::for_each(out.cbegin(), result.out, print);
}
```

## See also
- [pair](/cpp/utility/pair/)
- [tuple](/cpp/utility/tuple/)
