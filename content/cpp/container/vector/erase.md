---
title: "std::vector<T,Allocator>::erase"
source_path: "cpp/container/vector/erase"
category: "container"
---

Erases the specified elements from the container.

## Declarations
```cpp
iterator erase( iterator pos );
```
_(until C++11)_

```cpp
iterator erase( const_iterator pos );
```
_(since C++11) (constexpr since C++20)_

```cpp
iterator erase( iterator first, iterator last );
```
_(until C++11)_

```cpp
iterator erase( const_iterator first, const_iterator last );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `pos`: iterator to the element to remove
- `first, last`: range of elements to remove

## Return value
Iterator following the last removed element.

## Notes
When container elements need to be erased based on a predicate, rather than iterating the container and calling unary erase, the iterator range overload is generally used with [std::remove()/std::remove_if()](/cpp/algorithm/remove/) to minimise the number of moves of the remaining (non-removed) elements, — this is the erase-remove idiom.
[std::erase_if()](/cpp/container/vector/erase2/) replaces the erase-remove idiom.(since C++20)

## Example
```cpp
#include <vector>
#include <iostream>
 
 
void print_container(const std::vector<int>& c)
{
    for (int i : c)
        std::cout << i << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::vector<int> c{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    print_container(c);
 
    c.erase(c.begin());
    print_container(c);
 
    c.erase(c.begin() + 2, c.begin() + 5);
    print_container(c);
 
    // Erase all even numbers
    for (std::vector<int>::iterator it = c.begin(); it != c.end();)
    {
        if (*it % 2 == 0)
            it = c.erase(it);
        else
            ++it;
    }
    print_container(c);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 151 | C++98 | first was required to be dereferenceable, whichmade the behavior of clearing an empty vector undefined | not required iffirst == last |
| LWG 414 | C++98 | iterators at the point of erase were not invalidated | they are also invalidated |

## See also
- [erase(std::vector)erase_if(std::vector)](/cpp/container/vector/erase2/)
- [clear](/cpp/container/vector/clear/)
