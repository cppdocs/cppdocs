---
title: "std::raw_storage_iterator<OutputIt,T>::operator="
source_path: "cpp/memory/raw_storage_iterator/operator"
category: "memory"
since: "C++17"
---

1) Constructs a value at the location the iterator points to from el.

## Declarations
```cpp
raw_storage_iterator& operator=( const T& el );
```

```cpp
raw_storage_iterator& operator=( T&& el );
```
_(since C++17)_

## Parameters
- `el`: the value to copy or move from

## Return value
*this
