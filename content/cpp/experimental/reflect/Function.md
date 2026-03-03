---
title: "std::experimental::reflect::Function"
source_path: "cpp/experimental/reflect/Function"
header: "<experimental/reflect>"
category: "experimental"
---

The Function concept is satisfied if and only if T reflects a function, excluding constructors and destructors.

## Declarations
```cpp
template< class T >
concept Function = Callable<T> && Typed<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
