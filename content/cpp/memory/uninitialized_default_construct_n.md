---
title: "std::uninitialized_default_construct_n"
source_path: "cpp/memory/uninitialized_default_construct_n"
header: "<memory>"
category: "memory"
since: "C++17"
---

1) Constructs objects of type typename [std::iterator_traits](/cpp/iterator/iterator_traits/)<NoThrowForwardIt>::value_type in the uninitialized memory area first+[0,count) by [default-initialization](/cpp/language/default_initialization/), as if by
for (; count > 0; (void)++first, --count)
::new ([voidify](/cpp/memory/voidify/)(*first))
typename [std::iterator_traits](/cpp/iterator/iterator_traits/)<NoThrowForwardIt>::value_type;
return first;

## Declarations
```cpp
template< class NoThrowForwardIt, class Size >
NoThrowForwardIt uninitialized_default_construct_n
( NoThrowForwardIt first, Size count );
```
_(since C++17) (constexpr since C++26)_

```cpp
template< class ExecutionPolicy, class NoThrowForwardIt, class Size >
NoThrowForwardIt uninitialized_default_construct_n
( ExecutionPolicy&& policy, NoThrowForwardIt first, Size count );
```
_(since C++17)_

## Parameters
- `first`: the beginning of the range of elements to initialize
- `count`: the number of elements to construct
- `policy`: the execution policy to use

## Return value
As described above.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_raw_memory_algorithms
202411L
(C++26)
constexpr for specialized memory algorithms, (1)

## Example
```cpp
#include <cstring>
#include <iostream>
#include <memory>
#include <string>
 
struct S
{
    std::string m{"default value"};
};
 
int main()
{
    constexpr int n{3};
    alignas(alignof(S)) unsigned char mem[n * sizeof(S)];
 
    try
    {
        auto first{reinterpret_cast<S*>(mem)};
        auto last = std::uninitialized_default_construct_n(first, n);
 
        for (auto it{first}; it != last; ++it)
            std::cout << it->m << '\n';
 
        std::destroy(first, last);
    }
    catch(...)
    {
        std::cout << "Exception!\n";
    }
 
    // For scalar types, uninitialized_default_construct_n
    // generally does not zero-initialize the given uninitialized memory area.
    int v[]{1, 2, 3, 4};
    const int original[]{1, 2, 3, 4};
    std::uninitialized_default_construct_n(std::begin(v), std::size(v));
 
    // An attempt to access v might be an undefined behavior,
    // pending CWG 1997 to be resolved:
    // for (const int i : v)
    //     std::cout << i << ' ';
 
    // The result is unspecified:
    std::cout << (std::memcmp(v, original, sizeof(v)) == 0 ? "un" : "") << "modified\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3870 | C++20 | this algorithm might create objects on a const storage | kept disallowed |

## See also
- [uninitialized_default_construct](/cpp/memory/uninitialized_default_construct/)
- [default-initialization](/cpp/language/default_initialization/)
- [uninitialized_value_construct_n](/cpp/memory/uninitialized_value_construct_n/)
- [value-initialization](/cpp/language/value_initialization/)
- [ranges::uninitialized_default_construct_n](/cpp/memory/ranges/uninitialized_default_construct_n/)
- [default-initialization](/cpp/language/default_initialization/)
