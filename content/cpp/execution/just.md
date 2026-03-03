---
title: "std::execution::just"
source_path: "cpp/execution/just"
header: "<execution>"
category: "execution"
since: "C++26"
---

A sender factory that returns a sender which completes immediately by calling the receiver’s .

## Declarations
```cpp
struct just_t { /*unspecified*/ };
```
_(since C++26)_

```cpp
inline constexpr just_t just{};
```
_(since C++26) (customization point object)_

```cpp
Call signature
```

```cpp
execution::sender auto just( auto&&... values );
```
_(since C++26)_

## Example
This section is incompleteReason: no example
