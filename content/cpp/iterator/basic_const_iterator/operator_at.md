---
title: "std::basic_const_iterator<Iter>::operator[]"
source_path: "cpp/iterator/basic_const_iterator/operator_at"
category: "iterator"
since: "C++23"
---

Returns a reference to the element at specified relative location.

## Declarations
```cpp
constexpr std::iter_const_reference_t<Iter> operator[]( difference_type n ) const
requires std::random_access_iterator<Iterator>;
```
_(since C++23)_

## Parameters
- `n`: position relative to current location

## Return value
A reference-to-const to the element at relative location, that is, static_cast<[std::iter_const_reference_t](/cpp/iterator/iter_t/)<Iter>>(base()[n]).

## Example
This section is incompleteReason: no example

## See also
- [operator*operator->](/cpp/iterator/basic_const_iterator/operator/)
