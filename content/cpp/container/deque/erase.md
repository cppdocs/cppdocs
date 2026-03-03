---
title: "std::deque<T,Allocator>::erase"
source_path: "cpp/container/deque/erase"
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
[std::erase_if()](/cpp/container/deque/erase2/) replaces the erase-remove idiom.(since C++20)

## Example
```cpp
#include <deque>
#include <iostream>
 
 
void print_container(const std::deque<int>& c)
{
    for (int i : c)
        std::cout << i << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::deque<int> c{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    print_container(c);
 
    c.erase(c.begin());
    print_container(c);
 
    c.erase(c.begin() + 2, c.begin() + 5);
    print_container(c);
 
    // Erase all even numbers
    for (std::deque<int>::iterator it = c.begin(); it != c.end();)
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
| LWG 151 | C++98 | first was required to be dereferenceable, whichmade the behavior of clearing an empty deque undefined | not required iffirst == last |
| LWG 638 | C++98 | the past-the-end iterator was not invalidated | it is invalidated if the elements areerased from the middle or the end |

## See also
- [erase(std::deque)erase_if(std::deque)](/cpp/container/deque/erase2/)
- [clear](/cpp/container/deque/clear/)
