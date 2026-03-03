---
title: "std::ranges::uninitialized_fill"
source_path: "cpp/memory/ranges/uninitialized_fill"
header: "<memory>"
category: "memory"
---

1) Copies value to an uninitialized memory area [first,last) as if by
for (; first != last; ++first)
::new ([voidify](/cpp/memory/voidify/)(*first)) [std::remove_reference_t](/cpp/types/remove_reference/)<[std::iter_reference_t](/cpp/iterator/iter_t/)<I>>(value);
return first;

## Declarations
```cpp
Call signature
```

```cpp
template< no-throw-forward-iterator I, no-throw-sentinel-for<I> S,
class T >
requires std::constructible_from<std::iter_value_t<I>, const T&>
I uninitialized_fill( I first, S last, const T& value );
```
_(since C++20) (constexpr since C++26)_

```cpp
template< no-throw-forward-range R, class T >
requires std::constructible_from<ranges::range_value_t<R>,
const T&>
ranges::borrowed_iterator_t<R> uninitialized_fill( R&& r,
const T& value );
```
_(since C++20) (constexpr since C++26)_

## Parameters
- `first, last`: iterator-sentinel pair denoting the range of elements to initialize
- `r`: the range of the elements to initialize
- `value`: the value to construct the elements with

## Return value
As described above.

## Notes
An implementation may improve the efficiency of the ranges::uninitialized_fill, e.g. by using [ranges::fill](/cpp/algorithm/ranges/fill/), if the value type of the output range is [TrivialType](/cpp/named_req/trivialtype/).

## Example
```cpp
#include <iostream>
#include <memory>
#include <string>
 
int main()
{
    constexpr int n{4};
    alignas(alignof(std::string)) char out[n * sizeof(std::string)];
 
    try
    {
        auto first{reinterpret_cast<std::string*>(out)};
        auto last{first + n};
        std::ranges::uninitialized_fill(first, last, "▄▀▄▀▄▀▄▀");
 
        int count{1};
        for (auto it{first}; it != last; ++it)
            std::cout << count++ << ' ' << *it << '\n';
 
        std::ranges::destroy(first, last);
    }
    catch(...)
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
- [ranges::uninitialized_fill_n](/cpp/memory/ranges/uninitialized_fill_n/)
- [uninitialized_fill](/cpp/memory/uninitialized_fill/)
