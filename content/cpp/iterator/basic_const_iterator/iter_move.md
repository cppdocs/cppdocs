---
title: "iter_move(std::basic_const_iterator<Iter>)"
source_path: "cpp/iterator/basic_const_iterator/iter_move"
category: "iterator"
since: "C++23"
---

Casts the result of dereferencing the underlying iterator to its associated const rvalue reference type.

## Declarations
```cpp
friend constexpr /*rvalue-reference*/
iter_move( const basic_const_iterator& i ) noexcept(/* see below */);
```
_(since C++23)_

## Return value
An rvalue reference to const, or a prvalue.

## Example
This section is incompleteReason: no example

## See also
- [iter_move](/cpp/iterator/ranges/iter_move/)
