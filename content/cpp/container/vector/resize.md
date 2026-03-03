---
title: "std::vector<T,Allocator>::resize"
source_path: "cpp/container/vector/resize"
category: "container"
---

Resizes the container to contain count elements, does nothing if count == size().

## Declarations
```cpp
void resize( size_type count );
```
_(constexpr since C++20)_

```cpp
void resize( size_type count, const value_type& value );
```
_(constexpr since C++20)_

## Parameters
- `count`: new size of the container
- `value`: the value to initialize the new elements with

## Notes
If value-initialization in overload ([1](#Version_1)) is undesirable, for example, if the elements are of non-class type and zeroing out is not needed, it can be avoided by providing a [custom Allocator::construct](https://stackoverflow.com/a/21028912/273767).
Vector capacity is never reduced when resizing to smaller size because that would invalidate all iterators, rather than only the ones that would be invalidated by the equivalent sequence of [pop_back()](/cpp/container/vector/pop_back/) calls.

## Example
```cpp
#include <vector>
#include <iostream>
 
void print(auto rem, const std::vector<int>& c)
{
    for (std::cout << rem; const int el : c)
        std::cout << el << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::vector<int> c = {1, 2, 3};
    print("The vector holds: ", c);
 
    c.resize(5);
    print("After resize up to 5: ", c);
 
    c.resize(2);
    print("After resize down to 2: ", c);
 
    c.resize(6, 4);
    print("After resize up to 6 (initializer = 4): ", c);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 679 | C++98 | resize() passed value by value | passes by const reference |
| LWG 1525 | C++98 | the behavior of resize(size()) was not specified | specified |
| LWG 2033 | C++11 | 1. elements were removed by using erase()[1]2. the type requirements of T were incorrect | 1. uses pop_back()2. corrected |
| LWG 2066 | C++11 | overload (1) did not have the exceptionsafety guarantee of overload (2) | added |
| LWG 2160 | C++11 | elements were removed by using pop_back()[2]due to the resolution of LWG 2033 | does not specify the methodof removing elements |

## See also
- [max_size](/cpp/container/vector/max_size/)
- [size](/cpp/container/vector/size/)
- [capacity](/cpp/container/vector/capacity/)
- [empty](/cpp/container/vector/empty/)
