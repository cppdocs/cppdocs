---
title: "std::forward_list<T,Allocator>::merge"
source_path: "cpp/container/forward_list/merge"
category: "container"
since: "C++11"
---

The function does nothing if other refers to the same object as *this.

## Declarations
```cpp
void merge( forward_list& other );
```
_(since C++11)_

```cpp
void merge( forward_list&& other );
```
_(since C++11)_

```cpp
template< class Compare >
void merge( forward_list& other, Compare comp );
```
_(since C++11)_

```cpp
template< class Compare >
void merge( forward_list&& other, Compare comp );
```
_(since C++11)_

## Parameters
- `other`: another container to merge
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type forward_list<T, Allocator>::const_iterator can be dereferenced and then implicitly converted to both of them.

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <forward_list>
 
std::ostream& operator<<(std::ostream& ostr, const std::forward_list<int>& list)
{
    for (const int i : list)
        ostr << ' ' << i;
    return ostr;
}
 
int main()
{
    std::forward_list<int> list1 = {5, 9, 1, 3, 3};
    std::forward_list<int> list2 = {8, 7, 2, 3, 4, 4};
 
    list1.sort();
    list2.sort();
    std::cout << "list1: " << list1 << '\n';
    std::cout << "list2: " << list2 << '\n';
 
    list1.merge(list2);
    std::cout << "merged:" << list1 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2045 | C++11 | O(1) node moving could not be guaranteed ifget_allocator() != other.get_allocator() | the behavior isundefined in this case |
| LWG 3088 | C++11 | the effect when *this and other referto the same object was not specifiedoperator< could misbehave for pointer elements | specified as no-opimplementation-definedstrict total order used |

## See also
- [splice_after](/cpp/container/forward_list/splice_after/)
- [merge](/cpp/algorithm/merge/)
- [inplace_merge](/cpp/algorithm/inplace_merge/)
- [ranges::merge](/cpp/algorithm/ranges/merge/)
- [ranges::inplace_merge](/cpp/algorithm/ranges/inplace_merge/)
