---
title: "std::ranges::uninitialized_default_construct"
source_path: "cpp/memory/ranges/uninitialized_default_construct"
header: "<memory>"
category: "memory"
---

1) Constructs objects of type [std::iter_value_t](/cpp/iterator/iter_t/)<I> in the uninitialized memory area [first,last) by [default-initialization](/cpp/language/default_initialization/), as if by
for (; first != last; ++first)
::new ([voidify](/cpp/memory/voidify/)(*first))
[std::remove_reference_t](/cpp/types/remove_reference/)<[std::iter_reference_t](/cpp/iterator/iter_t/)<I>>;
return first;

## Declarations
```cpp
Call signature
```

```cpp
template< no-throw-forward-iterator I, no-throw-sentinel-for<I> S >
requires std::default_initializable<std::iter_value_t<I>>
I uninitialized_default_construct( I first, S last );
```
_(since C++20) (constexpr since C++26)_

```cpp
template< no-throw-forward-range R >
requires std::default_initializable<ranges::range_value_t<R>>
ranges::borrowed_iterator_t<R>
uninitialized_default_construct( R&& r );
```
_(since C++20) (constexpr since C++26)_

## Parameters
- `first, last`: iterator-sentinel pair denoting the range of the elements to initialize
- `r`: the range of the elements to initialize

## Return value
As described above.

## Notes
An implementation may skip the objects construction (without changing the observable effect) if no non-trivial default constructor is called while default-initializing a [std::iter_value_t](/cpp/iterator/iter_t/)<I> object, which can be detected by [std::is_trivially_default_constructible](/cpp/types/is_default_constructible/).

## Example
```cpp
#include <cstring>
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
 
        std::ranges::uninitialized_default_construct(first, last);
 
        auto count{1};
        for (auto it{first}; it != last; ++it)
            std::cout << count++ << ' ' << it->m << '\n';
 
        std::ranges::destroy(first, last);
    }
    catch (...) { std::cout << "Exception!\n"; }
 
    // Notice that for "trivial types" the uninitialized_default_construct
    // generally does not zero-fill the given uninitialized memory area.
    constexpr char sample[]{'A', 'B', 'C', 'D', '\n'};
    char v[]{'A', 'B', 'C', 'D', '\n'};
    std::ranges::uninitialized_default_construct(std::begin(v), std::end(v));
    if (std::memcmp(v, sample, sizeof(v)) == 0)
    {
        std::cout << "  ";
        // Maybe undefined behavior, pending CWG 1997 to be resolved:
        // for (const char c : v) { std::cout << c << ' '; }
        for (const char c : sample)
            std::cout << c << ' ';
    }
    else
        std::cout << "Unspecified\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3870 | C++20 | this algorithm might create objects on a const storage | kept disallowed |

## See also
- [ranges::uninitialized_default_construct_n](/cpp/memory/ranges/uninitialized_default_construct_n/)
- [default-initialization](/cpp/language/default_initialization/)
- [ranges::uninitialized_value_construct](/cpp/memory/ranges/uninitialized_value_construct/)
- [value-initialization](/cpp/language/value_initialization/)
- [ranges::uninitialized_value_construct_n](/cpp/memory/ranges/uninitialized_value_construct_n/)
- [value-initialization](/cpp/language/value_initialization/)
- [uninitialized_default_construct](/cpp/memory/uninitialized_default_construct/)
- [default-initialization](/cpp/language/default_initialization/)
