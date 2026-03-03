---
title: "std::ranges::in_fun_result"
source_path: "cpp/algorithm/ranges/return_types/in_fun_result"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

ranges::in_fun_result is a class template that provides a way to store an iterator and a function object as a single unit.

## Declarations
```cpp
template< class I, class F >
struct in_fun_result;
```
_(since C++20)_

## Notes
Each standard library algorithm that uses this family of return types declares a new [alias type](/cpp/language/type_alias/), e.g. using merge_result = in_in_out_result<I1, I2, O>;.

The names for such aliases are formed by adding the suffix "_result" to the algorithm's name. So, the return type of std::ranges::merge can be named as std::ranges::merge_result.

Unlike [std::pair](/cpp/utility/pair/) and [std::tuple](/cpp/utility/tuple/), this class template has data members of meaningful names.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <iostream>
#include <iterator>
#include <ranges>
 
int main()
{
    int v[]{1, 2, 3};
 
    const std::ranges::in_fun_result res1 = std::ranges::for_each_n(
        v, std::size(v),
        [](int& x) { return x = -x; } // negating lambda
    );
    assert(res1.in == std::end(v));
 
    const std::ranges::in_fun_result res2 = std::ranges::for_each(
        std::begin(v),
        res1.in,
        [](int x) { std::cout << x << ' '; } // printing lambda
    );
 
    std::cout << "│ ";
 
    std::ranges::for_each(v, res1.fun); // uses negating lambda
    std::ranges::for_each(v, res2.fun); // uses printing lambda
    std::cout << '\n';
}
```

## See also
- [pair](/cpp/utility/pair/)
- [tuple](/cpp/utility/tuple/)
