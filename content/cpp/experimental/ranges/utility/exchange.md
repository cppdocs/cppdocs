---
title: "std::experimental::ranges::exchange"
source_path: "cpp/experimental/ranges/utility/exchange"
header: "<experimental/ranges/utility>"
category: "experimental"
---

Replaces the value of obj with new_value and returns the old value of obj, as if by

## Declarations
```cpp
template< MoveConstructible T, class U = T >
requires Assignable<T&, U>
constexpr T exchange( T& obj, U&& new_val ) noexcept(/* see below */);
```
_(ranges TS)_

## Parameters
- `obj`: object whose value to replace
- `new_value`: the value to assign to obj

## Return value
The old value of obj.

## Example
This section is incompleteReason: no example

## See also
- [exchange](/cpp/utility/exchange/)
