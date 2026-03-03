---
title: "std::experimental::ranges::identity"
source_path: "cpp/experimental/ranges/functional/identity"
header: "<experimental/ranges/functional>"
category: "experimental"
---

ranges::identity is a function object type whose operator() returns its argument unchanged. It is used as the default projection for all Ranges TS algorithms.

## Declarations
```cpp
struct identity;
```
_(ranges TS)_

## Parameters
- `t`: argument to return

## Return value
[std::forward](/cpp/utility/forward/)<T>(t).

## Example
This section is incompleteReason: no example
