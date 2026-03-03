---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::emplace_hint"
source_path: "cpp/container/unordered_multimap/emplace_hint"
category: "container"
since: "C++11"
---

Inserts a new element into the container, using hint as a suggestion where the element should go.

## Declarations
```cpp
template< class... Args >
iterator emplace_hint( const_iterator hint, Args&&... args );
```
_(since C++11)_

## Parameters
- `hint`: iterator, used as a suggestion as to where to insert the new element
- `args`: arguments to forward to the constructor of the element

## Return value
An iterator to the inserted element.

## Example
This section is incompleteReason: no example

## See also
- [emplace](/cpp/container/unordered_multimap/emplace/)
- [insert](/cpp/container/unordered_multimap/insert/)
