---
title: "std::execution::just_error"
source_path: "cpp/execution/just_error"
header: "<execution>"
category: "execution"
since: "C++26"
---

A sender factory that returns a sender which completes immediately by calling the receiver’s .

## Declarations
```cpp
inline constexpr just_error_t just_error{};
struct just_error_t { /*unspecified*/ };
```
_(since C++26) (customization point object)_

```cpp
Call signature
```

```cpp
execution::sender auto just_error( auto&& error );
```
_(since C++26)_

## Notes
If the provided error is an lvalue reference, a copy is made inside the returned sender and a non-const lvalue reference to the copy is sent to the receiver’s set_error. If the provided value is an rvalue reference, it is moved into the returned sender and an rvalue reference to it is sent to the receiver’s set_error.

## Example
This section is incompleteReason: no example
