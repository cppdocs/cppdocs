---
title: "std::chrono::tzdb_list::erase_after"
source_path: "cpp/chrono/tzdb_list/erase_after"
category: "chrono"
since: "C++20"
---

Erases the std::chrono::tzdb referred to by the iterator following p. The behavior is undefined if that iterator is not dereferenceable. No pointers, references, or iterators are invalidated except for those referring to the erased element.

## Declarations
```cpp
const_iterator erase_after( const_iterator p );
```
_(since C++20)_

## Return value
An iterator pointing to the element following the erased element, or end() if no such element exists.

## Notes
tzdb_list is intended to be implementable as a singly linked list, and its interface resembles that of [std::forward_list](/cpp/container/forward_list/). It has no before_begin(), however, and so it is not possible to erase the first element.
