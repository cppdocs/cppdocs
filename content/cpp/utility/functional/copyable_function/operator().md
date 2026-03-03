---
title: "std::copyable_function::operator()"
source_path: "cpp/utility/functional/copyable_function/operator"
category: "utility"
since: "C++26"
---

Invokes the stored callable target with the parameters args. The /*cv*/, /*ref*/, and /*noex*/ parts of operator() are identical to those of the template parameter of std::copyable_function.

## Declarations
```cpp
R operator()( Args... args ) /*cv*/ /*ref*/ noexcept(/*noex*/);
```
_(since C++26)_

## Parameters
- `args`: parameters to pass to the stored callable target

## Return value
[std::invoke_r](/cpp/utility/functional/invoke/)<R>(/*cv-ref-cast*/(f), [std::forward](/cpp/utility/forward/)<Args>(args)...).

## Example
This section is incompleteReason: no example

## See also
- [operator()](/cpp/utility/functional/function/operator/)
- [operator()](/cpp/utility/functional/move_only_function/operator/)
- [operator()](/cpp/utility/functional/reference_wrapper/operator/)
- [invokeinvoke_r](/cpp/utility/functional/invoke/)
- [Callable](/cpp/named_req/callable/)
