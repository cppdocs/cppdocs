---
title: "std::execution::just_stopped"
source_path: "cpp/execution/just_stopped"
header: "<execution>"
category: "execution"
since: "C++26"
---

A sender factory that returns a sender which completes immediately by calling the receiver’s .

## Declarations
```cpp
inline constexpr just_stopped_t just_stopped{};
struct just_stopped_t { /*unspecified*/ };
```
_(since C++26) (customization point object)_

```cpp
Call signature
```

```cpp
execution::sender auto just_stopped();
```
_(since C++26)_

## Example
This section is incompleteReason: no example
