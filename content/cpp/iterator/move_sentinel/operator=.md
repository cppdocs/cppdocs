---
title: "std::move_sentinel<S>::operator="
source_path: "cpp/iterator/move_sentinel/operator"
category: "iterator"
since: "C++20"
---

The underlying sentinel is assigned the value of the underlying sentinel of other, i.e. other.base().

## Declarations
```cpp
template< class S2 >
requires std::assignable_from<S&, const S2&>
constexpr move_sentinel& operator=( const std::move_sentinel<S2>& other );
```
_(since C++20)_

## Parameters
- `other`: sentinel adaptor to assign

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/iterator/move_iterator/operator/)
