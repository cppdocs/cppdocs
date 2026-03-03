---
title: "std::execution::stopped_as_optional"
source_path: "cpp/execution/stopped_as_optional"
header: "<execution>"
category: "execution"
since: "C++26"
---

Returns a sender that maps the value channel from a T to an [std::optional](/cpp/utility/optional/)<[std::decay_t](/cpp/types/decay/)<T>>, and maps the stopped channel to a value of an empty [std::optional](/cpp/utility/optional/)<[std::decay_t](/cpp/types/decay/)<T>>.

## Declarations
```cpp
execution::sender auto stopped_as_optional( /*single-sender*/ auto snd );
```
_(since C++26)_

## Parameters
- `snd`: input sender of which the value channel and stopped channel are mapped.

## Return value
Returns a sender that maps the value channel from a T to an [std::optional](/cpp/utility/optional/)<[std::decay_t](/cpp/types/decay/)<T>>, and maps the stopped channel to a value of an empty [std::optional](/cpp/utility/optional/)<[std::decay_t](/cpp/types/decay/)<T>>.

## Example
This section is incompleteReason: no example
