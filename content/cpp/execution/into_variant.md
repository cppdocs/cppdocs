---
title: "std::execution::into_variant"
source_path: "cpp/execution/into_variant"
header: "<execution>"
category: "execution"
since: "C++26"
---

Returns a sender that sends a variant of tuples of all the possible sets of types sent by the input sender. The helper function turns them into a single variant value.

## Declarations
```cpp
execution::sender auto into_variant( execution::sender auto snd );
```
_(since C++26)_

## Parameters
- `snd`: input sender which can send multiple sets of values depending on runtime conditions.

## Return value
Returns a sender that sends a variant of tuples of all the possible sets of types sent by the input sender. The helper function turns them into a single variant value.
