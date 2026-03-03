---
title: "std::experimental::function"
source_path: "cpp/experimental/function"
header: "<experimental/functional>"
category: "experimental"
---

std::experimental::function is a modified version of [std::function](/cpp/utility/functional/function/) with support for type-erased allocators.

## Declarations
```cpp
template< class >
class function; /* undefined */
```
_(library fundamentals TS)_

```cpp
template< class R, class... Args >
class function<R(Args...)>
```
_(library fundamentals TS)_
