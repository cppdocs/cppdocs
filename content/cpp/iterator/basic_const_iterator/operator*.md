---
title: "std::basic_const_iterator<Iter>::operator*"
source_path: "cpp/iterator/basic_const_iterator/operator"
category: "iterator"
since: "C++23"
---

Returns a reference or pointer to the const version of the current element.

## Declarations
```cpp
constexpr std::iter_const_reference_t<Iter> operator*() const;
```
_(since C++23)_

```cpp
constexpr const auto* operator->() const
requires std::is_lvalue_reference_v<std::iter_reference_t<Iterator>> &&
std::same_as<std::remove_cvref_t<std::iter_reference_t<Iterator>>,
value_type>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example

## See also
- [operator[]](/cpp/iterator/basic_const_iterator/operator_at/)
