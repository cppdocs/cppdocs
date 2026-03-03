---
title: "std::ranges::in_value_result"
source_path: "cpp/algorithm/ranges/return_types/in_value_result"
header: "<algorithm>"
category: "algorithm"
since: "C++23"
---

ranges::in_value_result is a class template that provides a way to store an iterator and a value as a single unit.

## Declarations
```cpp
template< class I, class T >
struct in_value_result;
```
_(since C++23)_

## Notes
Each standard library algorithm that uses this family of return types declares a new [alias type](/cpp/language/type_alias/), e.g. using merge_result = in_in_out_result<I1, I2, O>;.

The names for such aliases are formed by adding the suffix "_result" to the algorithm's name. So, the return type of std::ranges::merge can be named as std::ranges::merge_result.

Unlike [std::pair](/cpp/utility/pair/) and [std::tuple](/cpp/utility/tuple/), this class template has data members of meaningful names.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <functional>
 
int main()
{
    const auto v = {1, 2, 3};
    const auto ret = std::ranges::fold_left_with_iter(v, 4, std::plus<>());
    assert(ret.in == v.end());
    assert(ret.value == 1 + 2 + 3 + 4);
}
```

## See also
- [pair](/cpp/utility/pair/)
- [tuple](/cpp/utility/tuple/)
