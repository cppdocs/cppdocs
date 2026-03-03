---
title: "std::uninitialized_copy"
source_path: "cpp/memory/uninitialized_copy"
header: "<memory>"
category: "memory"
since: "C++17"
---

1) Copies elements from the range [first,last) to an uninitialized memory area beginning at d_first as if by
for (; first != last; ++d_first, (void) ++first)
::new ([voidify](/cpp/memory/voidify/)(*d_first))
typename [std::iterator_traits](/cpp/iterator/iterator_traits/)<NoThrowForwardIt>::value_type(*first);

## Declarations
```cpp
template< class InputIt, class NoThrowForwardIt >
NoThrowForwardIt uninitialized_copy( InputIt first, InputIt last,
NoThrowForwardIt d_first );
```
_(constexpr since C++26)_

```cpp
template< class ExecutionPolicy, class ForwardIt,
class NoThrowForwardIt >
NoThrowForwardIt uninitialized_copy( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
NoThrowForwardIt d_first );
```
_(since C++17)_

## Parameters
- `first, last`: the range of the elements to copy
- `d_first`: the beginning of the destination range
- `policy`: the execution policy to use

## Return value
Iterator to the element past the last element copied.

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
#include <cstdlib>
#include <iostream>
#include <memory>
#include <string>
 
int main()
{
    const char *v[] = {"This", "is", "an", "example"};
 
    auto sz = std::size(v);
 
    if (void *pbuf = std::aligned_alloc(alignof(std::string), sizeof(std::string) * sz))
    {
        try
        {
            auto first = static_cast<std::string*>(pbuf);
            auto last = std::uninitialized_copy(std::begin(v), std::end(v), first);
 
            for (auto it = first; it != last; ++it)
                std::cout << *it << '_';
            std::cout << '\n';
 
            std::destroy(first, last);
        }
        catch (...) {}
        std::free(pbuf);
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 866 | C++98 | given T as the value type of NoThrowForwardIt, ifT::operator new exists, the program might be ill-formed | uses global replacement-new instead |
| LWG 2133 | C++98 | the effect description used a for loop with the iterationexpression ++d_first, ++first, which resultsin an argument-dependent lookup of operator, | discards the valueof one operandto disable that ADL |
| LWG 2433 | C++11 | this algorithm might be hijacked by overloaded operator& | uses std::addressof |
| LWG 3870 | C++20 | this algorithm might create objects on a const storage | kept disallowed |

## See also
- [uninitialized_copy_n](/cpp/memory/uninitialized_copy_n/)
- [ranges::uninitialized_copy](/cpp/memory/ranges/uninitialized_copy/)
