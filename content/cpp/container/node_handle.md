---
title: "Node handle (C++17)"
source_path: "cpp/container/node_handle"
category: "container"
---

Associative containers [std::set](/cpp/container/set/), [std::map](/cpp/container/map/), [std::multiset](/cpp/container/multiset/), [std::multimap](/cpp/container/multimap/), [std::unordered_set](/cpp/container/unordered_set/), [std::unordered_map](/cpp/container/unordered_map/), [std::unordered_multiset](/cpp/container/unordered_multiset/), [std::unordered_multimap](/cpp/container/unordered_multimap/) are node-based data structures, and their nodes can be extracted as an object of unspecified type known as node handle.

## Declarations
```cpp
template</* unspecified */>
class /*node-handle*/;
```
_(since C++17) (exposition only*)_

## Parameters
- `nh`: a node handle with the same type (not necessarily the same container)

## Notes
Node handles are move-only, the copy constructor is not defined.
