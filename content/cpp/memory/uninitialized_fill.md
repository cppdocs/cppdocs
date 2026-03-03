---
title: "std::uninitialized_fill"
source_path: "cpp/memory/uninitialized_fill"
header: "<memory>"
category: "memory"
since: "C++17"
---

1) Copies value to an uninitialized memory area [first,last) as if by
for (; first != last; ++first)
::new ([voidify](/cpp/memory/voidify/)(*first))
typename [std::iterator_traits](/cpp/iterator/iterator_traits/)<NoThrowForwardIt>::value_type(value);

## Declarations
```cpp
template< class NoThrowForwardIt, class T >
void uninitialized_fill( NoThrowForwardIt first,
NoThrowForwardIt last, const T& value );
```
_(constexpr since C++26)_

```cpp
template< class ExecutionPolicy, class NoThrowForwardIt, class T >
void uninitialized_fill( ExecutionPolicy&& policy,
NoThrowForwardIt first,
NoThrowForwardIt last, const T& value );
```
_(since C++17)_

## Parameters
- `first, last`: the range of the elements to initialize
- `value`: the value to construct the elements with
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
#include <algorithm>
#include <iostream>
#include <memory>
#include <string>
 
int main()
{
    const std::size_t sz = 4;
    std::allocator<std::string> alloc;
    std::string* p = alloc.allocate(sz);
 
    std::uninitialized_fill(p, p + sz, "Example");
 
    for (std::string* i = p; i != p + sz; ++i)
    {
        std::cout << *i << '\n';
        i->~basic_string<char>();
    }
 
    alloc.deallocate(p, sz);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 866 | C++98 | given T as the value type of NoThrowForwardIt, ifT::operator new exists, the program might be ill-formed | uses global placement new instead |
| LWG 2433 | C++11 | this algorithm might be hijacked by overloaded operator& | uses std::addressof |
| LWG 3870 | C++20 | this algorithm might create objects on a const storage | kept disallowed |

## See also
- [uninitialized_fill_n](/cpp/memory/uninitialized_fill_n/)
- [ranges::uninitialized_fill](/cpp/memory/ranges/uninitialized_fill/)
