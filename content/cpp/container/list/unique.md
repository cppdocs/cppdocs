---
title: "std::list<T,Allocator>::unique"
source_path: "cpp/container/list/unique"
category: "container"
since: "C++20"
---

Removes all consecutive duplicate elements from the container. Only the first element in each group of equal elements is left. Invalidates only the iterators and references to the
removed elements.

## Declarations
```cpp
void unique();
```
_(until C++20)_

```cpp
size_type unique();
```
_(since C++20)_

```cpp
template< class BinaryPredicate >
void unique( BinaryPredicate p );
```
_(until C++20)_

```cpp
template< class BinaryPredicate >
size_type unique( BinaryPredicate p );
```
_(since C++20)_

## Parameters
- `p`: binary predicate which returns true if the elements should be treated as equal. The signature of the predicate function should be equivalent to the following: bool pred(const Type1 &a, const Type2 &b); While the signature does not need to have const &, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1 & is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type list<T,Allocator>::const_iterator can be dereferenced and then implicitly converted to both of them.

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
#include <iostream>
#include <list>
 
std::ostream& operator<< (std::ostream& os, std::list<int> const& container)
{
    for (int val : container)
        os << val << ' ';
    return os << '\n';
}
 
int main()
{
    std::list<int> c{1, 2, 2, 3, 3, 2, 1, 1, 2};
    std::cout << "Before unique(): " << c;
    const auto count1 = c.unique();
    std::cout << "After unique():  " << c
              << count1 << " elements were removed\n";
 
    c = {1, 2, 12, 23, 3, 2, 51, 1, 2, 2};
    std::cout << "\nBefore unique(pred): " << c;
 
    const auto count2 = c.unique([mod = 10](int x, int y)
    {
        return (x % mod) == (y % mod);
    });
 
    std::cout << "After unique(pred):  " << c
              << count2 << " elements were removed\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1207 | C++98 | it was unclear whether iteratorsand/or references will be invalidated | only invalidates iterators andreferences to the removed elements |

## See also
- [unique](/cpp/algorithm/unique/)
