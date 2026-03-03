---
title: "std::ranges::uninitialized_value_construct"
source_path: "cpp/memory/ranges/uninitialized_value_construct"
header: "<memory>"
category: "memory"
---

1) Constructs objects of type [std::iter_value_t](/cpp/iterator/iter_t/)<I> in the uninitialized memory area [first,last) by [value-initialization](/cpp/language/value_initialization/), as if by
for (; first != last; ++first)
::new ([voidify](/cpp/memory/voidify/)(*first))
[std::remove_reference_t](/cpp/types/remove_reference/)<[std::iter_reference_t](/cpp/iterator/iter_t/)<I>>();
return first;

## Declarations
```cpp
Call signature
```

```cpp
template< no-throw-forward-iterator I, no-throw-sentinel-for<I> S >
requires std::default_initializable<std::iter_value_t<I>>
I uninitialized_value_construct( I first, S last );
```
_(since C++20) (constexpr since C++26)_

```cpp
template< no-throw-forward-range R >
requires std::default_initializable<ranges::range_value_t<R>>
ranges::borrowed_iterator_t<R>
uninitialized_value_construct( R&& r );
```
_(since C++20) (constexpr since C++26)_

## Parameters
- `first, last`: iterator-sentinel pair denoting the range of elements to value-initialize
- `r`: the range of the elements to value-initialize

## Return value
As described above.

## Notes
An implementation may improve the efficiency of the ranges::uninitialized_value_construct, e.g. by using [ranges::fill](/cpp/algorithm/ranges/fill/), if the value type of the range is a [CopyAssignable](/cpp/named_req/copyassignable/) [TrivialType](/cpp/named_req/trivialtype/).

## Example
```cpp
#include <iostream>
#include <memory>
#include <string>
 
int main()
{
    struct S { std::string m{"▄▀▄▀▄▀▄▀"}; };
 
    constexpr int n{4};
    alignas(alignof(S)) char out[n * sizeof(S)];
 
    try
    {
        auto first{reinterpret_cast<S*>(out)};
        auto last{first + n};
 
        std::ranges::uninitialized_value_construct(first, last);
 
        auto count{1};
        for (auto it{first}; it != last; ++it)
            std::cout << count++ << ' ' << it->m << '\n';
 
        std::ranges::destroy(first, last);
    }
    catch (...)
    {
        std::cout << "Exception!\n";
    }
 
    // For scalar types, uninitialized_value_construct
    // zero-fills the given uninitialized memory area.
    int v[]{0, 1, 2, 3};
    std::cout << ' ';
    for (const int i : v)
        std::cout << ' ' << static_cast<char>(i + 'A');
    std::cout << "\n ";
    std::ranges::uninitialized_value_construct(std::begin(v), std::end(v));
    for (const int i : v)
        std::cout << ' ' << static_cast<char>(i + 'A');
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3870 | C++20 | this algorithm might create objects on a const storage | kept disallowed |

## See also
- [ranges::uninitialized_value_construct_n](/cpp/memory/ranges/uninitialized_value_construct_n/)
- [value-initialization](/cpp/language/value_initialization/)
- [ranges::uninitialized_default_construct](/cpp/memory/ranges/uninitialized_default_construct/)
- [default-initialization](/cpp/language/default_initialization/)
- [ranges::uninitialized_default_construct_n](/cpp/memory/ranges/uninitialized_default_construct_n/)
- [default-initialization](/cpp/language/default_initialization/)
- [uninitialized_value_construct](/cpp/memory/uninitialized_value_construct/)
- [value-initialization](/cpp/language/value_initialization/)
