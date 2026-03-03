---
title: "std::forward_list<T,Allocator>::splice_after"
source_path: "cpp/container/forward_list/splice_after"
category: "container"
since: "C++11"
---

Moves elements from another forward_list to *this. The elements are inserted after the element pointed to by pos.

## Declarations
```cpp
void splice_after( const_iterator pos, forward_list& other );
```
_(since C++11)_

```cpp
void splice_after( const_iterator pos, forward_list&& other );
```
_(since C++11)_

```cpp
void splice_after( const_iterator pos, forward_list& other,
const_iterator it );
```
_(since C++11)_

```cpp
void splice_after( const_iterator pos, forward_list&& other,
const_iterator it );
```
_(since C++11)_

```cpp
void splice_after( const_iterator pos, forward_list& other,
const_iterator first, const_iterator last );
```
_(since C++11)_

```cpp
void splice_after( const_iterator pos, forward_list&& other,
const_iterator first, const_iterator last );
```
_(since C++11)_

## Parameters
- `pos`: element after which the content will be inserted
- `other`: another container to move the content from
- `it`: iterator preceding the iterator to the element to move from other to *this
- `first, last`: the range of elements to move from other to *this

## Example
```cpp
#include <cassert>
#include <forward_list>
 
int main()
{
    using F = std::forward_list<int>;
 
    // Demonstrate the meaning of open range (first, last)
    // in overload (5): the first element of l1 is not moved.
    F l1 = {1, 2, 3, 4, 5};
    F l2 = {10, 11, 12};
 
    l2.splice_after(l2.cbegin(), l1, l1.cbegin(), l1.cend());
    // Not equivalent to l2.splice_after(l2.cbegin(), l1);
    // which is equivalent to
    // l2.splice_after(l2.cbegin(), l1, l1.cbefore_begin(), l1.end());
 
    assert((l1 == F{1}));
    assert((l2 == F{10, 2, 3, 4, 5, 11, 12}));
 
    // Overload (1)
    F x = {1, 2, 3, 4, 5};
    F y = {10, 11, 12};
    x.splice_after(x.cbegin(), y);
    assert((x == F{1, 10, 11, 12, 2, 3, 4, 5}));
    assert((y == F{}));
 
    // Overload (3)
    x = {1, 2, 3, 4, 5};
    y = {10, 11, 12};
    x.splice_after(x.cbegin(), y, y.cbegin());
    assert((x == F{1, 11, 2, 3, 4, 5}));
    assert((y == F{10, 12}));
 
    // Overload (5)
    x = {1, 2, 3, 4, 5};
    y = {10, 11, 12};
    x.splice_after(x.cbegin(), y, y.cbegin(), y.cend());
    assert((x == F{1, 11, 12, 2, 3, 4, 5}));
    assert((y == F{10}));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2045 | C++11 | O(1) splicing could not be guaranteed ifget_allocator() != other.get_allocator() | the behavior isundefined in this case |
| LWG 2222 | C++11 | the element pointed to by it is not moved, but pointers, references anditerators referring to it would refer to an element in *this after splicing | still refer to theelement in other |

## See also
- [merge](/cpp/container/forward_list/merge/)
- [removeremove_if](/cpp/container/forward_list/remove/)
- [before_begincbefore_begin](/cpp/container/forward_list/before_begin/)
