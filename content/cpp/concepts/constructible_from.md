---
title: "std::constructible_from"
source_path: "cpp/concepts/constructible_from"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The constructible_from concept specifies that a variable of type T can be initialized with the given set of argument types Args....

## Declarations
```cpp
template< class T, class... Args >
concept constructible_from =
std::destructible<T> && std::is_constructible_v<T, Args...>;
```
_(since C++20)_

## See also
- [is_constructibleis_trivially_constructibleis_nothrow_constructible](/cpp/types/is_constructible/)
