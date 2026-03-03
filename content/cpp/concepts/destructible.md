---
title: "std::destructible"
source_path: "cpp/concepts/destructible"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept destructible specifies the concept of all types whose instances can safely be destroyed at the end of their lifetime (including reference types).

## Declarations
```cpp
template< class T >
concept destructible = std::is_nothrow_destructible_v<T>;
```
_(since C++20)_

## Notes
Unlike the [Destructible](/cpp/named_req/destructible/) named requirement, std::destructible requires the destructor to be noexcept(true), not merely non-throwing when invoked, and allows reference types and array types.

## See also
- [is_destructibleis_trivially_destructibleis_nothrow_destructible](/cpp/types/is_destructible/)
