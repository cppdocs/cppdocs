---
title: "operator==(std::copyable_function)"
source_path: "cpp/utility/functional/copyable_function/operator"
category: "utility"
since: "C++26"
---

Checks whether the wrapper f has a callable target by formally comparing it with [std::nullptr_t](/cpp/types/nullptr_t/). Empty wrappers (that is, wrappers without a target) compare equal, non-empty functions compare non-equal.

## Declarations
```cpp
friend bool operator==( const std::copyable_function& f, std::nullptr_t ) noexcept;
```
_(since C++26)_

## Parameters
- `f`: std::copyable_function to compare

## Return value
!f.

## Example
This section is incompleteReason: no example

## See also
- [operator bool](/cpp/utility/functional/copyable_function/operator_bool/)
- [operator==operator!=](/cpp/utility/functional/function/operator_cmp/)
- [std::function](/cpp/utility/functional/function/)
- [operator==](/cpp/utility/functional/move_only_function/operator/)
