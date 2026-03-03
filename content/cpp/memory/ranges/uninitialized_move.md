---
title: "std::ranges::uninitialized_move, std::ranges::uninitialized_move_result"
source_path: "cpp/memory/ranges/uninitialized_move"
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
std::iter_rvalue_reference_t<I>>
uninitialized_move_result<I, O>
uninitialized_move( I ifirst, S1 ilast, O ofirst, S2 olast );
```
_(since C++20) (constexpr since C++26)_

```cpp
template< ranges::input_range IR, no-throw-forward-range OR >
requires std::constructible_from
<ranges::range_value_t<OR>,
ranges::range_rvalue_reference_t<IR>>
uninitialized_move_result<ranges::borrowed_iterator_t<IR>,
ranges::borrowed_iterator_t<OR>>
uninitialized_move( IR&& in_range, OR&& out_range );
```
_(since C++20) (constexpr since C++26)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using uninitialized_move_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `ifirst, ilast`: iterator-sentinel pair denoting the input range of elements to move from
- `in_range`: the input range of elements to move from
- `ofirst, olast`: iterator-sentinel pair denoting the output range to initialize
- `out_range`: the output range to initialize

## Return value
As described above.

## Notes
An implementation may improve the efficiency of the ranges::uninitialized_move, e.g. by using [ranges::copy_n](/cpp/algorithm/ranges/copy_n/), if the value type of the output range is [TrivialType](/cpp/named_req/trivialtype/).

## Example
```cpp
#include <cstdlib>
#include <iomanip>
#include <iostream>
#include <memory>
#include <string>
 
void print(auto rem, auto first, auto last)
{
    for (std::cout << rem; first != last; ++first)
        std::cout << std::quoted(*first) << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::string in[]{"Home", "World"};
    print("initially, in: ", std::begin(in), std::end(in));
 
    if (constexpr auto sz = std::size(in);
        void* out = std::aligned_alloc(alignof(std::string), sizeof(std::string) * sz))
    {
        try
        {
            auto first{static_cast<std::string*>(out)};
            auto last{first + sz};
            std::ranges::uninitialized_move(std::begin(in), std::end(in), first, last);
 
            print("after move, in: ", std::begin(in), std::end(in));
            print("after move, out: ", first, last);
 
            std::ranges::destroy(first, last);
        }
        catch (...)
        {
            std::cout << "Exception!\n";
        }
        std::free(out);
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3870 | C++20 | this algorithm might create objects on a const storage | kept disallowed |

## See also
- [ranges::uninitialized_move_n](/cpp/memory/ranges/uninitialized_move_n/)
- [uninitialized_move](/cpp/memory/uninitialized_move/)
