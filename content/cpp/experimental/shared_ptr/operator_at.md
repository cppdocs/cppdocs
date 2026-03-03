---
title: "std::experimental::shared_ptr<T>::operator[]"
source_path: "cpp/experimental/shared_ptr/operator_at"
category: "experimental"
---

Index into the array pointed to by the stored pointer.

## Declarations
```cpp
element_type& operator[]( std::ptrdiff_t i ) const noexcept;
```
_(library fundamentals TS)_

## Parameters
- `i`: the array index

## Return value
A reference to the i-th element of the array, i.e., get()[i].

## Example
This section is incompleteReason: no example

## See also
- [get](/cpp/experimental/shared_ptr/get/)
