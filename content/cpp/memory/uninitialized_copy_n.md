---
title: "std::uninitialized_copy_n"
source_path: "cpp/memory/uninitialized_copy_n"
header: "<memory>"
category: "memory"
since: "C++17"
---

1) Copies count elements from a range beginning at first to an uninitialized memory area beginning at d_first as if by
for (; count > 0; ++d_first, (void) ++first, --count)
::new ([voidify](/cpp/memory/voidify/)(*d_first))
typename [std::iterator_traits](/cpp/iterator/iterator_traits/)<NoThrowForwardIt>::value_type(*first);

## Declarations
```cpp
template< class InputIt, class Size, class NoThrowForwardIt >
NoThrowForwardIt uninitialized_copy_n( InputIt first, Size count,
NoThrowForwardIt d_first );
```
_(since C++11) (constexpr since C++26)_

```cpp
template< class ExecutionPolicy, class ForwardIt,
class Size, class NoThrowForwardIt >
NoThrowForwardIt uninitialized_copy_n( ExecutionPolicy&& policy,
ForwardIt first, Size count,
NoThrowForwardIt d_first );
```
_(since C++17)_

## Parameters
- `first`: the beginning of the range of the elements to copy
- `count`: the number of elements to copy
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
#include <algorithm>
#include <iostream>
#include <memory>
#include <string>
#include <tuple>
#include <vector>
 
int main()
{
    std::vector<std::string> v = {"This", "is", "an", "example"};
 
    std::string* p;
    std::size_t sz;
    std::tie(p, sz) = std::get_temporary_buffer<std::string>(v.size());
    sz = std::min(sz, v.size());
 
    std::uninitialized_copy_n(v.begin(), sz, p);
 
    for (std::string* i = p; i != p + sz; ++i)
    {
        std::cout << *i << ' ';
        i->~basic_string<char>();
    }
    std::cout << '\n';
 
    std::return_temporary_buffer(p);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2133 | C++98 | the effect description used a for loop with the iterationexpression ++d_first, ++first, --count, whichresults in argument-dependent lookups of operator, | discards the valueof one operand todisable those ADLs |
| LWG 2433 | C++11 | this algorithm might be hijacked by overloaded operator& | uses std::addressof |
| LWG 3870 | C++20 | this algorithm might create objects on a const storage | kept disallowed |

## See also
- [uninitialized_copy](/cpp/memory/uninitialized_copy/)
- [ranges::uninitialized_copy_n](/cpp/memory/ranges/uninitialized_copy_n/)
