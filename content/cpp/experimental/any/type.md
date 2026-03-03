---
title: "std::experimental::any::type"
source_path: "cpp/experimental/any/type"
category: "experimental"
---

Queries the contained type.

## Declarations
```cpp
const type_info& type() const noexcept;
```
_(library fundamentals TS)_

## Return value
The typeid of the contained value if instance is non-empty, otherwise typeid(void).
