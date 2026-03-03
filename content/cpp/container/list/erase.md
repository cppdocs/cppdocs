---
title: "std::list<T,Allocator>::erase"
source_path: "cpp/container/list/erase"
category: "container"
since: "C++11"
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
_(since C++11)_

```cpp
iterator erase( iterator first, iterator last );
```
_(until C++11)_

```cpp
iterator erase( const_iterator first, const_iterator last );
```
_(since C++11)_

## Parameters
- `pos`: iterator to the element to remove
- `first, last`: range of elements to remove

## Return value
Iterator following the last removed element.

## Notes
When container elements need to be erased based on a predicate, rather than iterating the container and calling unary erase, the iterator range overload is generally used with [std::remove()/std::remove_if()](/cpp/algorithm/remove/) to minimise the number of moves of the remaining (non-removed) elements, — this is the erase-remove idiom.
[std::erase_if()](/cpp/container/list/erase2/) replaces the erase-remove idiom.(since C++20)

## Example
```cpp
#include <list>
#include <iostream>
#include <iterator>
 
void print_container(const std::list<int>& c)
{
    for (int i : c)
        std::cout << i << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::list<int> c{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    print_container(c);
 
    c.erase(c.begin());
    print_container(c);
 
    std::list<int>::iterator range_begin = c.begin();
    std::list<int>::iterator range_end = c.begin();
    std::advance(range_begin, 2);
    std::advance(range_end, 5);
 
    c.erase(range_begin, range_end);
    print_container(c);
 
    // Erase all even numbers
    for (std::list<int>::iterator it = c.begin(); it != c.end();)
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
| LWG 151 | C++98 | first was required to be dereferenceable, whichmade the behavior of clearing an empty list undefined | not required iffirst == last |

## See also
- [erase(std::list)erase_if(std::list)](/cpp/container/list/erase2/)
- [clear](/cpp/container/list/clear/)
