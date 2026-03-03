---
title: "std::experimental::reflect::GlobalScope"
source_path: "cpp/experimental/reflect/GlobalScope"
header: "<experimental/reflect>"
category: "experimental"
---

The GlobalScope concept is satisfied if and only if T reflects the global namespace (Note: Any such T does not satisfy ScopeMember).

## Declarations
```cpp
template< class T >
concept GlobalScope = Namespace<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
