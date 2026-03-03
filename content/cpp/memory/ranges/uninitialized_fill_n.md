---
title: "std::ranges::uninitialized_fill_n"
source_path: "cpp/memory/ranges/uninitialized_fill_n"
header: "<memory>"
category: "memory"
---

Copies value to an uninitialized memory area first+[0,count) as if by
return [ranges::uninitialized_fill](/cpp/memory/ranges/uninitialized_fill/)([std::counted_iterator](/cpp/iterator/counted_iterator/)(first, count),[std::default_sentinel](/cpp/iterator/default_sentinel/), value).base();

## Declarations
```cpp
Call signature
```

```cpp
template< no-throw-forward-range I, class T >
requires std::constructible_from<std::iter_value_t<I>, const T&>
I uninitialized_fill_n( I first, std::iter_difference_t<I> count,
const T& value );
```
_(since C++20) (constexpr since C++26)_

## Parameters
- `first`: the beginning of the range of the elements to initialize
- `count`: number of elements to construct
- `value`: the value to construct the elements with

## Return value
As described above.

## Notes
An implementation may improve the efficiency of the ranges::uninitialized_fill_n, e.g. by using [ranges::fill_n](/cpp/algorithm/ranges/fill_n/), if the value type of the output range is [TrivialType](/cpp/named_req/trivialtype/).

## Example
```cpp
#include <iostream>
#include <memory>
#include <string>
 
int main()
{
    constexpr int n{3};
    alignas(alignof(std::string)) char out[n * sizeof(std::string)];
 
    try
    {
        auto first{reinterpret_cast<std::string*>(out)};
        auto last = std::ranges::uninitialized_fill_n(first, n, "cppreference");
 
        for (auto it{first}; it != last; ++it)
            std::cout << *it << '\n';
 
        std::ranges::destroy(first, last);
    }
    catch (...)
    {
        std::cout << "Exception!\n";
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3870 | C++20 | this algorithm might create objects on a const storage | kept disallowed |

## See also
- [ranges::uninitialized_fill](/cpp/memory/ranges/uninitialized_fill/)
- [uninitialized_fill_n](/cpp/memory/uninitialized_fill_n/)
