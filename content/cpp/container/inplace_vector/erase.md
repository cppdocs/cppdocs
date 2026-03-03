---
title: "std::inplace_vector<T,N>::erase"
source_path: "cpp/container/inplace_vector/erase"
category: "container"
since: "C++26"
---

Erases the specified elements from the container.

## Declarations
```cpp
constexpr iterator erase( const_iterator pos );
```
_(since C++26)_

```cpp
constexpr iterator erase( const_iterator first, const_iterator last );
```
_(since C++26)_

## Parameters
- `pos`: iterator to the element to remove
- `first, last`: range of elements to remove

## Return value
Iterator following the last removed element.

## Notes
When container elements need to be erased based on a predicate, rather than iterating the container and calling unary erase, the iterator range overload is generally used with [std::remove()/std::remove_if()](/cpp/algorithm/remove/) to minimise the number of moves of the remaining (non-removed) elements, — this is the erase-remove idiom.
[std::erase_if()](/cpp/container/inplace_vector/erase2/) replaces the erase-remove idiom.

## Example
```cpp
#include <inplace_vector>
#include <print>
 
int main()
{
    std::inplace_vector<int, 10> v{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    std::println("{}", v);
 
    v.erase(v.begin());
    std::println("{}", v);
 
    v.erase(v.begin() + 2, v.begin() + 5);
    std::println("{}", v);
 
    // Erase all even numbers
    for (std::inplace_vector<int, 10>::iterator it{v.begin()}; it != v.end();)
        if (*it % 2 == 0)
            it = v.erase(it);
        else
            ++it;
    std::println("{}", v);
}
```

## See also
- [erase(std::inplace_vector)erase_if(std::inplace_vector)](/cpp/container/inplace_vector/erase2/)
- [clear](/cpp/container/inplace_vector/clear/)
