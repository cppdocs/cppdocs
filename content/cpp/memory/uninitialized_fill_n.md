---
title: "std::uninitialized_fill_n"
source_path: "cpp/memory/uninitialized_fill_n"
header: "<memory>"
category: "memory"
since: "C++17"
---

1) Copies value to an uninitialized memory area first+[0,count) as if by
for (; count--; ++first)
::new ([voidify](/cpp/memory/voidify/)(*first))
typename [std::iterator_traits](/cpp/iterator/iterator_traits/)<NoThrowForwardIt>::value_type(value);
return first;

## Declarations
```cpp
template< class NoThrowForwardIt, class Size, class T >
NoThrowForwardIt uninitialized_fill_n( NoThrowForwardIt first,
Size count, const T& value );
```
_(constexpr since C++26)_

```cpp
template< class ExecutionPolicy,
class NoThrowForwardIt, class Size, class T >
NoThrowForwardIt uninitialized_fill_n( ExecutionPolicy&& policy,
NoThrowForwardIt first,
Size count, const T& value );
```
_(since C++17)_

## Parameters
- `first`: the beginning of the range of the elements to initialize
- `count`: number of elements to construct
- `value`: the value to construct the elements with

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
#include <algorithm>
#include <iostream>
#include <memory>
#include <string>
#include <tuple>
 
int main()
{
    std::string* p;
    std::size_t sz;
    std::tie(p, sz) = std::get_temporary_buffer<std::string>(4);
    std::uninitialized_fill_n(p, sz, "Example");
 
    for (std::string* i = p; i != p + sz; ++i)
    {
        std::cout << *i << '\n';
        i->~basic_string<char>();
    }
    std::return_temporary_buffer(p);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 866 | C++98 | given T as the value type of NoThrowForwardIt, ifT::operator new exists, the program might be ill-formed | uses global placement new instead |
| LWG 1339 | C++98 | the location of the first element followingthe filling range was not returned | returned |
| LWG 2433 | C++11 | this algorithm might be hijacked by overloaded operator& | uses std::addressof |
| LWG 3870 | C++20 | this algorithm might create objects on a const storage | kept disallowed |

## See also
- [uninitialized_fill](/cpp/memory/uninitialized_fill/)
- [ranges::uninitialized_fill_n](/cpp/memory/ranges/uninitialized_fill_n/)
