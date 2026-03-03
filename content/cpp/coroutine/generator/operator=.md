---
title: "std::generator<Ref,V,Allocator>::operator="
source_path: "cpp/coroutine/generator/operator"
category: "coroutine"
since: "C++23"
---

Replaces the contents of the generator object. Equivalent to:

## Declarations
```cpp
generator& operator=( generator other ) noexcept;
```
_(since C++23)_

## Parameters
- `other`: another generator to be moved from

## Return value
*this

## Notes
Iterators previously obtained from other are not invalidated – they become iterators into *this.

This assignment operator is technically a [copy assignment operator](/cpp/language/as_operator/), although std::generator is only move assignable.

## Example
This section is incompleteReason: no example
