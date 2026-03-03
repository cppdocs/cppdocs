---
title: "std::ranges::uninitialized_copy, std::ranges::uninitialized_copy_result"
source_path: "cpp/memory/ranges/uninitialized_copy"
header: "<memory>"
category: "memory"
since: "C++20"
---

Let \(\scriptsize N\)N be [ranges::min](/cpp/algorithm/ranges/min/)([ranges::distance](/cpp/iterator/ranges/distance/)(ifirst, ilast), [ranges::distance](/cpp/iterator/ranges/distance/)(ofirst, olast)).

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S1,
no-throw-forward-iterator O, no-throw-sentinel-for<O> S2 >
requires std::constructible_from<std::iter_value_t<O>,
std::iter_reference_t<I>>
uninitialized_copy_result<I, O>
uninitialized_copy( I ifirst, S1 ilast, O ofirst, S2 olast );
```
_(since C++20) (constexpr since C++26)_

```cpp
template< ranges::input_range IR, no-throw-forward-range OR >
requires std::constructible_from<ranges::range_value_t<OR>,
ranges::range_reference_t<IR>>
uninitialized_copy_result<ranges::borrowed_iterator_t<IR>,
ranges::borrowed_iterator_t<OR>>
uninitialized_copy( IR&& in_range, OR&& out_range );
```
_(since C++20) (constexpr since C++26)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using uninitialized_copy_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `ifirst, ilast`: iterator-sentinel pair denoting the range of elements to copy from
- `in_range`: the range of elements to copy from
- `ofirst, olast`: iterator-sentinel pair denoting the destination range
- `out_range`: the destination range

## Return value
As described above.

## Notes
An implementation may improve the efficiency of ranges::uninitialized_copy if the value type of the output range is [TrivialType](/cpp/named_req/trivialtype/).

## Example
```cpp
#include <cstdlib>
#include <iomanip>
#include <iostream>
#include <memory>
#include <string>
 
int main()
{
    const char* v[]{"This", "is", "an", "example"};
 
    if (const auto sz{std::size(v)};
        void* pbuf = std::aligned_alloc(alignof(std::string), sizeof(std::string) * sz))
    {
        try
        {
            auto first{static_cast<std::string*>(pbuf)};
            auto last{first + sz};
            std::ranges::uninitialized_copy(std::begin(v), std::end(v), first, last);
 
            std::cout << "{";
            for (auto it{first}; it != last; ++it)
                std::cout << (it == first ? "" : ", ") << std::quoted(*it);
            std::cout << "};\n";
 
            std::ranges::destroy(first, last);
        }
        catch (...)
        {
            std::cout << "uninitialized_copy exception\n";
        }
        std::free(pbuf);
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3870 | C++20 | this algorithm might create objects on a const storage | kept disallowed |

## See also
- [ranges::uninitialized_copy_n](/cpp/memory/ranges/uninitialized_copy_n/)
- [uninitialized_copy](/cpp/memory/uninitialized_copy/)
