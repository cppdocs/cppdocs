---
title: "std::multiset<Key,Compare,Allocator>::emplace_hint"
source_path: "cpp/container/multiset/emplace_hint"
category: "container"
since: "C++11"
---

Inserts a new element into the container as close as possible to the position just before hint.

## Declarations
```cpp
template< class... Args >
iterator emplace_hint( const_iterator hint, Args&&... args );
```
_(since C++11)_

## Parameters
- `hint`: iterator to the position before which the new element will be inserted
- `args`: arguments to forward to the constructor of the element

## Return value
An iterator to the inserted element.

## Example
This section is incompleteReason: no example

## See also
- [emplace](/cpp/container/multiset/emplace/)
- [insert](/cpp/container/multiset/insert/)
