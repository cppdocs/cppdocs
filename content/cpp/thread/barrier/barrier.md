---
title: "std::barrier<CompletionFunction>::barrier"
source_path: "cpp/thread/barrier/barrier"
category: "thread"
since: "C++20"
---

1) Sets the both initial expected count for each phase and the current expected count for the first phase to expected, initializes the completion function object with std::move(f), and then starts the first phase. The behavior is undefined if expected is negative or greater than [max()](/cpp/thread/barrier/max/).

## Declarations
```cpp
constexpr explicit barrier( std::ptrdiff_t expected,
CompletionFunction f = CompletionFunction());
```
_(since C++20)_

```cpp
barrier( const barrier& ) = delete;
```
_(since C++20)_

## Parameters
- `expected`: initial value of the expected count
- `f`: completion function object to be called on phase completion step

## Notes
expected is permitted to be zero. However, calling any non-static member function other than the destructor on such barrier results in undefined behavior. In other words, such barrier can only be destroyed.
