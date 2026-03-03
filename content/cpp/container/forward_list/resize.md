---
title: "std::forward_list<T,Allocator>::resize"
source_path: "cpp/container/forward_list/resize"
category: "container"
since: "C++11"
---

Resizes the container to contain count elements, does nothing if count == [std::distance](/cpp/iterator/distance/)(begin(), end()) (i.e. if count is equal to the current size).

## Declarations
```cpp
void resize( size_type count );
```
_(since C++11)_

```cpp
void resize( size_type count, const value_type& value );
```
_(since C++11)_

## Parameters
- `count`: new size of the container
- `value`: the value to initialize the new elements with

## Notes
If value-initialization in overload ([1](#Version_1)) is undesirable, for example, if the elements are of non-class type and zeroing out is not needed, it can be avoided by providing a [custom Allocator::construct](https://stackoverflow.com/a/21028912/273767).

## Example
```cpp
#include <forward_list>
#include <iostream>
 
void print(auto rem, const std::forward_list<int>& c)
{
    for (std::cout << rem; const int el : c)
        std::cout << el << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::forward_list<int> c = {1, 2, 3};
    print("The forward_list holds: ", c);
 
    c.resize(5);
    print("After resize up to 5: ", c);
 
    c.resize(2);
    print("After resize down to 2: ", c);
 
    c.resize(6, 4);
    print("After resize up to 6 (initializer = 4): ", c);
}
```

## See also
- [max_size](/cpp/container/forward_list/max_size/)
- [empty](/cpp/container/forward_list/empty/)
