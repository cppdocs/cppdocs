---
title: "std::experimental::unique_resource<R, D>::operator="
source_path: "cpp/experimental/unique_resource/operator"
category: "experimental"
---

Move assignment operator. Replaces the managed resource and the deleter with other's.

## Declarations
```cpp
unique_resource& operator=( unique_resource&& other )
noexcept(/*see below*/);
```
_(library fundamentals TS v3)_

## Parameters
- `other`: resource wrapper from which ownership will be transferred

## Return value
*this

## Notes
If a copy of a member throws an exception, this mechanism leaves other intact and *this in the released state.

## Example
This section is incompleteReason: no example

## See also
- [reset](/cpp/experimental/unique_resource/reset/)
- [operator=](/cpp/memory/unique_ptr/operator/)
