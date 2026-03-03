---
title: "std::unordered_set<Key,Hash,KeyEqual,Allocator>::emplace"
source_path: "cpp/container/unordered_set/emplace"
category: "container"
since: "C++11"
---

Inserts a new element into the container constructed in-place with the given args, if there is no element with the key in the container.

## Declarations
```cpp
template< class... Args >
std::pair<iterator, bool> emplace( Args&&... args );
```
_(since C++11)_

## Parameters
- `args`: arguments to forward to the constructor of the element

## Return value
A pair consisting of an iterator to the inserted element (or to the element that prevented the insertion) and a bool value set to true if and only if the insertion took place.

## Example
This section is incompleteReason: no example

## See also
- [emplace_hint](/cpp/container/unordered_set/emplace_hint/)
- [insert](/cpp/container/unordered_set/insert/)
