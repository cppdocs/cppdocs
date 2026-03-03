---
title: "operator==,!=(std::unordered_map)"
source_path: "cpp/container/unordered_map/operator_cmp"
category: "container"
---

Compares the contents of two unordered containers.

## Declarations
```cpp
template< class Key, class T, class Hash, class KeyEqual, class Alloc >
bool operator==( const std::unordered_map<Key, T, Hash, KeyEqual, Alloc>& lhs,
const std::unordered_map<Key, T, Hash, KeyEqual, Alloc>& rhs );
```

```cpp
template< class Key, class T, class Hash, class KeyEqual, class Alloc >
bool operator!=( const std::unordered_map<Key, T, Hash, KeyEqual, Alloc>& lhs,
const std::unordered_map<Key, T, Hash, KeyEqual, Alloc>& rhs );
```
_(until C++20)_

## Parameters
- `lhs, rhs`: unordered containers to compare
