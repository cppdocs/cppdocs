---
title: "std::uninitialized_value_construct"
source_path: "cpp/memory/uninitialized_value_construct"
header: "<memory>"
category: "memory"
since: "C++17"
---

1) Constructs objects of type typename [std::iterator_traits](/cpp/iterator/iterator_traits/)<NoThrowForwardIt>::value_type in the uninitialized memory area [first,last) by [value-initialization](/cpp/language/value_initialization/), as if by
for (; first != last; ++first)
::new ([voidify](/cpp/memory/voidify/)(*first))
typename [std::iterator_traits](/cpp/iterator/iterator_traits/)<NoThrowForwardIt>::value_type();

## Declarations
```cpp
template< class NoThrowForwardIt >
void uninitialized_value_construct( NoThrowForwardIt first,
NoThrowForwardIt last );
```
_(since C++17) (constexpr since C++26)_

```cpp
template< class ExecutionPolicy, class NoThrowForwardIt >
void uninitialized_value_construct( ExecutionPolicy&& policy,
NoThrowForwardIt first,
NoThrowForwardIt last );
```
_(since C++17)_

## Parameters
- `first, last`: the range of the elements to initialize
- `policy`: the execution policy to use

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
#include <iostream>
#include <memory>
#include <string>
 
int main()
{
    struct S { std::string m{"Default value"}; };
 
    constexpr int n{3};
    alignas(alignof(S)) unsigned char mem[n * sizeof(S)];
 
    try
    {
        auto first{reinterpret_cast<S*>(mem)};
        auto last{first + n};
 
        std::uninitialized_value_construct(first, last);
 
        for (auto it{first}; it != last; ++it)
            std::cout << it->m << '\n';
 
        std::destroy(first, last);
    }
    catch (...)
    {
        std::cout << "Exception!\n";
    }
 
    // For scalar types, uninitialized_value_construct
    // zero-fills the given uninitialized memory area.
    int v[]{1, 2, 3, 4};
    for (const int i : v)
        std::cout << i << ' ';
    std::cout << '\n';
    std::uninitialized_value_construct(std::begin(v), std::end(v));
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
- [uninitialized_value_construct_n](/cpp/memory/uninitialized_value_construct_n/)
- [value-initialization](/cpp/language/value_initialization/)
- [uninitialized_default_construct](/cpp/memory/uninitialized_default_construct/)
- [default-initialization](/cpp/language/default_initialization/)
- [ranges::uninitialized_value_construct](/cpp/memory/ranges/uninitialized_value_construct/)
- [value-initialization](/cpp/language/value_initialization/)
