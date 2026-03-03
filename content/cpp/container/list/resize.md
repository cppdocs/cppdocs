---
title: "std::list<T,Allocator>::resize"
source_path: "cpp/container/list/resize"
category: "container"
---

Resizes the container to contain count elements, does nothing if count == size().

## Declarations
```cpp
void resize( size_type count );
```

```cpp
void resize( size_type count, const value_type& value );
```

## Parameters
- `count`: new size of the container
- `value`: the value to initialize the new elements with

## Notes
If value-initialization in overload ([1](#Version_1)) is undesirable, for example, if the elements are of non-class type and zeroing out is not needed, it can be avoided by providing a [custom Allocator::construct](https://stackoverflow.com/a/21028912/273767).

## Example
```cpp
#include <list>
#include <iostream>
 
void print(auto rem, const std::list<int>& c)
{
    for (std::cout << rem; const int el : c)
        std::cout << el << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::list<int> c = {1, 2, 3};
    print("The list holds: ", c);
 
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
| LWG 132 | C++98 | random-access iterators were used to determine the erase range | use bidirectional iterators |
| LWG 679 | C++98 | resize() passed value by value | passes by const reference |
| LWG 1420 | C++98 | the behavior of resize(size()) was not specified | specified |

## See also
- [max_size](/cpp/container/list/max_size/)
- [size](/cpp/container/list/size/)
- [empty](/cpp/container/list/empty/)
