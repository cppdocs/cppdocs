---
title: "std::flat_multiset<Key,Compare,KeyContainer>::emplace_hint"
source_path: "cpp/container/flat_multiset/emplace_hint"
category: "container"
since: "C++23"
---

Inserts a new element into the container as close as possible to the position just before hint.

## Declarations
```cpp
template< class... Args >
iterator emplace_hint( const_iterator hint, Args&&... args );
```
_(since C++23)_

## Parameters
- `hint`: iterator to the position before which the new element will be inserted
- `args`: arguments to forward to the constructor of the element

## Return value
An iterator to the inserted element.

## Example
This section is incompleteReason: no example

## See also
- [emplace](/cpp/container/flat_multiset/emplace/)
- [insert](/cpp/container/flat_multiset/insert/)
