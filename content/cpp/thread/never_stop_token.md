---
title: "std::never_stop_token"
source_path: "cpp/thread/never_stop_token"
header: "<stop_token>"
category: "thread"
since: "C++26"
---

The never_stop_token class models [unstoppable_token](/cpp/thread/unstoppable_token/) that provides static information that a stop is never possible nor requested. It is the default stop token type returned by std::get_stop_token if no other associated stop token is being provided in the queryable object.

## Declarations
```cpp
class never_stop_token;
```
_(since C++26)_

## Example
This section is incompleteReason: no example
