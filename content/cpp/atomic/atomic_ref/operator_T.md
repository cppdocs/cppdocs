---
title: "std::atomic_ref<T>::operator value_type"
source_path: "cpp/atomic/atomic_ref/operator"
category: "atomic"
---

Equivalent to return load();.

## Declarations
```cpp
operator value_type() const noexcept;
```
_(constexpr since C++26)_

## Return value
As described above.

## See also
- [load](/cpp/atomic/atomic_ref/load/)
