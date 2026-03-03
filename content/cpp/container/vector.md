---
title: "std::vector"
source_path: "cpp/container/vector"
header: "<vector>"
category: "container"
since: "C++17"
---

1) std::vector is a sequence container that encapsulates dynamic size arrays.

## Declarations
```cpp
template<
class T,
class Allocator = std::allocator<T>
> class vector;
```

```cpp
namespace pmr {
template< class T >
using vector = std::vector<T, std::pmr::polymorphic_allocator<T>>;
}
```
_(since C++17)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges construction and insertion for containers

## Example
```cpp
#include <iostream>
#include <vector>
 
int main()
{
    // Create a vector containing integers
    std::vector<int> v = {8, 4, 5, 9};
 
    // Add two more integers to vector
    v.push_back(6);
    v.push_back(9);
 
    // Overwrite element at position 2
    v[2] = -1;
 
    // Print out the vector
    for (int n : v)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 69 | C++98 | contiguity of the storage for elements of vector was not required | required |
| LWG 230 | C++98 | T was not required to be CopyConstructible(an element of type T might not be able to be constructed) | T is also required tobe CopyConstructible |
| LWG 464 | C++98 | access to the underlying storage of an empty vector resulted in UB | data function provided |

## See also
- [inplace_vector](/cpp/container/inplace_vector/)
- [array](/cpp/container/array/)
- [deque](/cpp/container/deque/)
