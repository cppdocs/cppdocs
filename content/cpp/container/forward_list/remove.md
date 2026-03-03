---
title: "std::forward_list<T,Allocator>::remove, remove_if"
source_path: "cpp/container/forward_list/remove"
category: "container"
since: "C++20"
---

Removes all elements satisfying specific criteria. Invalidates only the iterators and references to the removed elements.

## Declarations
```cpp
void remove( const T& value );
```
_(since C++11) (until C++20)_

```cpp
size_type remove( const T& value );
```
_(since C++20)_

```cpp
template< class UnaryPredicate >
void remove_if( UnaryPredicate p );
```
_(since C++11) (until C++20)_

```cpp
template< class UnaryPredicate >
size_type remove_if( UnaryPredicate p );
```
_(since C++20)_

## Parameters
- `value`: value of the elements to remove
- `p`: unary predicate which returns true if the element should be removed. The expression p(v) must be convertible to bool for every argument v of type (possibly const) T, regardless of value category, and must not modify v. Thus, a parameter type of T&is not allowed, nor is T unless for T a move is equivalent to a copy(since C++11).

## Return value
(none)

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_list_remove_return_type
201806L
(C++20)
Change the return type

## Example
```cpp
#include <forward_list>
#include <iostream>
 
int main()
{
    std::forward_list<int> l = {1, 100, 2, 3, 10, 1, 11, -1, 12};
 
    auto count1 = l.remove(1);
    std::cout << count1 << " elements equal to 1 were removed\n";
 
    auto count2 = l.remove_if([](int n){ return n > 10; });
    std::cout << count2 << " elements greater than 10 were removed\n";
 
    std::cout << "Finally, the list contains: ";
    for (int n : l)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
