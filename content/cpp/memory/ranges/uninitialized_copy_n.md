---
title: "std::ranges::uninitialized_copy_n, std::ranges::uninitialized_copy_n_result"
source_path: "cpp/memory/ranges/uninitialized_copy_n"
header: "<memory>"
category: "memory"
since: "C++20"
---

Let \(\scriptsize N\)N be [ranges::min](/cpp/algorithm/ranges/min/)(count, [ranges::distance](/cpp/iterator/ranges/distance/)(ofirst, olast)).

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I,
no-throw-input-iterator O, no-throw-sentinel-for<O> S >
requires std::constructible_from<std::iter_value_t<O>,
std::iter_reference_t<I>>
uninitialized_copy_n_result<I, O>
uninitialized_copy_n( I ifirst, std::iter_difference_t<I> count,
O ofirst, S olast );
```
_(since C++20) (constexpr since C++26)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using uninitialized_copy_n_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `ifirst`: the beginning of the range of elements to copy from
- `count`: the number of elements to copy
- `ofirst, olast`: iterator-sentinel pair denoting the destination range

## Return value
As described above.

## Notes
An implementation may improve the efficiency of the ranges::uninitialized_copy_n, by using e.g. [ranges::copy_n](/cpp/algorithm/ranges/copy_n/), if the value type of the output range is [TrivialType](/cpp/named_req/trivialtype/).

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <memory>
#include <string>
 
int main()
{
    const char* stars[]{"Procyon", "Spica", "Pollux", "Deneb", "Polaris"};
 
    constexpr int n{4};
    alignas(alignof(std::string)) char out[n * sizeof(std::string)];
 
    try
    {
        auto first{reinterpret_cast<std::string*>(out)};
        auto last{first + n};
        auto ret{std::ranges::uninitialized_copy_n(std::begin(stars), n, first, last)};
 
        std::cout << '{';
        for (auto it{first}; it != ret.out; ++it)
            std::cout << (it == first ? "" : ", ") << std::quoted(*it);
        std::cout << "};\n";
 
        std::ranges::destroy(first, last);
    }
    catch (...)
    {
        std::cout << "uninitialized_copy_n exception\n";
    }
}
```

## See also
- [ranges::uninitialized_copy](/cpp/memory/ranges/uninitialized_copy/)
- [uninitialized_copy_n](/cpp/memory/uninitialized_copy_n/)
