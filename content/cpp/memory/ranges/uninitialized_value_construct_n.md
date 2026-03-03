---
title: "std::ranges::uninitialized_value_construct_n"
source_path: "cpp/memory/ranges/uninitialized_value_construct_n"
header: "<memory>"
category: "memory"
---

Constructs objects of type [std::iter_value_t](/cpp/iterator/iter_t/)<I> in the uninitialized memory area first+[0,count) by [value-initialization](/cpp/language/value_initialization/), as if by
return [ranges::uninitialized_value_construct](/cpp/memory/ranges/uninitialized_value_construct/)([std::counted_iterator](/cpp/iterator/counted_iterator/)(first, count),[std::default_sentinel](/cpp/iterator/default_sentinel/)).base();

## Declarations
```cpp
Call signature
```

```cpp
template< no-throw-forward-iterator I >
requires std::default_initializable<std::iter_value_t<I>>
I uninitialized_value_construct_n( I first,
std::iter_difference_t<I> count );
```
_(since C++20) (constexpr since C++26)_

## Parameters
- `first`: the beginning of the range of elements to initialize
- `count`: the number of elements to construct

## Return value
As described above.

## Notes
An implementation may improve the efficiency of the ranges::uninitialized_value_construct_n, e.g. by using [ranges::fill_n](/cpp/algorithm/ranges/fill_n/), if the value type of the range is a [CopyAssignable](/cpp/named_req/copyassignable/) [TrivialType](/cpp/named_req/trivialtype/).

## Example
```cpp
#include <iostream>
#include <memory>
#include <string>
 
int main()
{
    struct S { std::string m{"█▓▒░ █▓▒░ █▓▒░ "}; };
 
    constexpr int n{4};
    alignas(alignof(S)) char out[n * sizeof(S)];
 
    try
    {
        auto first{reinterpret_cast<S*>(out)};
        auto last = std::ranges::uninitialized_value_construct_n(first, n);
 
        auto count{1};
        for (auto it{first}; it != last; ++it)
            std::cout << count++ << ' ' << it->m << '\n';
 
        std::ranges::destroy(first, last);
    }
    catch (...)
    {
        std::cout << "Exception!\n";
    }
 
    // For scalar types, uninitialized_value_construct_n
    // zero-initializes the given uninitialized memory area.
    int v[]{1, 2, 3, 4, 5, 6, 7, 8};
    std::cout << ' ';
    for (const int i : v)
        std::cout << i << ' ';
    std::cout << "\n ";
    std::ranges::uninitialized_value_construct_n(std::begin(v), std::size(v));
    for (const int i : v)
        std::cout << i << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3870 | C++20 | this algorithm might create objects on a const storage | kept disallowed |

## See also
- [ranges::uninitialized_value_construct](/cpp/memory/ranges/uninitialized_value_construct/)
- [value-initialization](/cpp/language/value_initialization/)
- [ranges::uninitialized_default_construct](/cpp/memory/ranges/uninitialized_default_construct/)
- [default-initialization](/cpp/language/default_initialization/)
- [ranges::uninitialized_default_construct_n](/cpp/memory/ranges/uninitialized_default_construct_n/)
- [default-initialization](/cpp/language/default_initialization/)
- [uninitialized_value_construct_n](/cpp/memory/uninitialized_value_construct_n/)
- [value-initialization](/cpp/language/value_initialization/)
