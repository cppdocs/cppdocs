---
title: "std::copyable_function::operator bool"
source_path: "cpp/utility/functional/copyable_function/operator_bool"
category: "utility"
since: "C++26"
---

Checks whether *this stores a callable target, i.e. is not empty.

## Declarations
```cpp
explicit operator bool() const noexcept;
```
_(since C++26)_

## Return value
true if *this stores a callable target, false otherwise.

## Example
This section is incompleteReason: no example

## See also
- [operator==](/cpp/utility/functional/copyable_function/operator/)
- [operator bool](/cpp/utility/functional/function/operator_bool/)
- [operator bool](/cpp/utility/functional/move_only_function/operator_bool/)
