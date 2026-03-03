---
title: "std::function_ref::operator()"
source_path: "cpp/utility/functional/function_ref/operator"
category: "utility"
since: "C++26"
---

Invokes the stored [thunk-ptr](/cpp/utility/functional/function_ref/#thunk-ptr) with [bound-entity](/cpp/utility/functional/function_ref/#bound-entity) as its first parameter and the rest of the parameters args. The /*noex*/ part of operator() is identical to those of the template parameter of std::function_ref.

## Declarations
```cpp
R operator()( Args... args ) const noexcept(/*noex*/);
```
_(since C++26)_

## Parameters
- `args`: rest parameters to pass to the stored thunk-ptr

## Return value
[thunk-ptr](/cpp/utility/functional/function_ref/#thunk-ptr)([bound-entity](/cpp/utility/functional/function_ref/#bound-entity), [std::forward](/cpp/utility/forward/)<Args>(args)...).

## Example
This section is incompleteReason: no example

## See also
- [operator()](/cpp/utility/functional/function/operator/)
- [operator()](/cpp/utility/functional/reference_wrapper/operator/)
