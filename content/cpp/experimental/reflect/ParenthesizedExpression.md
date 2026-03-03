---
title: "std::experimental::reflect::ParenthesizedExpression"
source_path: "cpp/experimental/reflect/ParenthesizedExpression"
header: "<experimental/reflect>"
category: "experimental"
---

The ParenthesizedExpression concept is satisfied if and only if T reflects a parenthesized expression.

## Declarations
```cpp
template< class T >
concept ParenthesizedExpression = Expression<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
