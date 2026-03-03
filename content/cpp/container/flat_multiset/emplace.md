---
title: "std::flat_multiset<Key,Compare,KeyContainer>::emplace"
source_path: "cpp/container/flat_multiset/emplace"
category: "container"
since: "C++23"
---

Inserts a new element into the container constructed in-place with the given args.

## Declarations
```cpp
template< class... Args >
iterator emplace( Args&&... args );
```
_(since C++23)_

## Parameters
- `args`: arguments to forward to the constructor of the element

## Return value
An iterator to the inserted element.

## Example
This section is incompleteReason: no example

## See also
- [emplace_hint](/cpp/container/flat_multiset/emplace_hint/)
- [insert](/cpp/container/flat_multiset/insert/)
