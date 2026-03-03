---
title: "std::default_initializable"
source_path: "cpp/concepts/default_initializable"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The default_initializable concept checks whether variables of type T can be

## Declarations
```cpp
template< class T >
concept default_initializable = std::constructible_from<T> && requires { T{}; } &&
/* T t; is well-formed, see below */;
```
_(since C++20)_

## See also
- [constructible_from](/cpp/concepts/constructible_from/)
- [is_default_constructibleis_trivially_default_constructibleis_nothrow_default_constructible](/cpp/types/is_default_constructible/)
