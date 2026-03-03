---
title: "std::expected<T,E>::value"
source_path: "cpp/utility/expected/value"
category: "utility"
since: "C++23"
---

If *this contains an expected value, returns a reference to the contained value. Returns nothing for void partial specialization.

## Declarations
```cpp
Primary template
```

```cpp
constexpr T& value() &;
```
_(since C++23)_

```cpp
constexpr const T& value() const&;
```
_(since C++23)_

```cpp
constexpr T&& value() &&;
```
_(since C++23)_

```cpp
constexpr const T&& value() const&&;
```
_(since C++23)_

```cpp
void partial specialization
```

```cpp
constexpr void value() const&;
```
_(since C++23)_

```cpp
constexpr void value() &&;
```
_(since C++23)_

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3940 | C++23 | E was not required to be copy/move-constructible for overloads (5,6) | required |

## See also
- [value_or](/cpp/utility/expected/value_or/)
- [operator->operator*](/cpp/utility/expected/operator/)
- [error](/cpp/utility/expected/error/)
- [bad_expected_access](/cpp/utility/expected/bad_expected_access/)
