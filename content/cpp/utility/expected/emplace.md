---
title: "std::expected<T,E>::emplace"
source_path: "cpp/utility/expected/emplace"
category: "utility"
since: "C++23"
---

Constructs an expected value in-place. After the call, [has_value()](/cpp/utility/expected/operator_bool/) returns true.

## Declarations
```cpp
Primary template
```

```cpp
template< class... Args >
constexpr T& emplace( Args&&... args ) noexcept;
```
_(since C++23)_

```cpp
template< class U, class... Args >
constexpr T& emplace( std::initializer_list<U> il, Args&&... args ) noexcept;
```
_(since C++23)_

```cpp
void partial specialization
```

```cpp
constexpr void emplace() noexcept;
```
_(since C++23)_

## Parameters
- `args`: the arguments to pass to the constructor
- `il`: the initializer list to pass to the constructor

## Notes
If the construction of T is potentially-throwing, [operator=](/cpp/utility/expected/operator/) can be used instead.

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/utility/expected/operator/)
