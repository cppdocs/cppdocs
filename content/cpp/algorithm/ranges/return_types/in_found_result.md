---
title: "std::ranges::in_found_result"
source_path: "cpp/algorithm/ranges/return_types/in_found_result"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

ranges::in_found_result is a class template that provides a way to store an iterator and a boolean flag as a single unit.

## Declarations
```cpp
template< class I >
struct in_found_result;
```
_(since C++20)_

## Notes
Each standard library algorithm that uses this family of return types declares a new [alias type](/cpp/language/type_alias/), e.g. using merge_result = in_in_out_result<I1, I2, O>;.

The names for such aliases are formed by adding the suffix "_result" to the algorithm's name. So, the return type of std::ranges::merge can be named as std::ranges::merge_result.

Unlike [std::pair](/cpp/utility/pair/) and [std::tuple](/cpp/utility/tuple/), this class template has data members of meaningful names.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <ranges>
 
int main()
{
    int v[] {1, 2, 3};
 
    const auto result = std::ranges::next_permutation(v);
 
    std::ranges::for_each(std::cbegin(v), result.in, [](int e) {std::cout << e << ' ';});
 
    std::cout << std::boolalpha << "\n" "result.found: " << result.found << '\n';
}
```

## See also
- [pair](/cpp/utility/pair/)
- [tuple](/cpp/utility/tuple/)
