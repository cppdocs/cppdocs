---
title: "std::is_invocable, std::is_invocable_r, std::is_nothrow_invocable, std::is_nothrow_invocable_r"
source_path: "cpp/types/is_invocable"
header: "<type_traits>"
category: "types"
since: "C++17"
---

1) Determines whether [INVOKE](/cpp/utility/functional/)([std::declval](/cpp/utility/declval/)<Fn>(), [std::declval](/cpp/utility/declval/)<ArgTypes>()...) is well formed when treated as an unevaluated operand.

## Declarations
```cpp
template< class Fn, class... ArgTypes >
struct is_invocable;
```
_(since C++17)_

```cpp
template< class R, class Fn, class... ArgTypes >
struct is_invocable_r;
```
_(since C++17)_

```cpp
template< class Fn, class... ArgTypes >
struct is_nothrow_invocable;
```
_(since C++17)_

```cpp
template< class R, class Fn, class... ArgTypes >
struct is_nothrow_invocable_r;
```
_(since C++17)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_is_invocable
201703L
(C++17)
std::is_invocable, std::invoke_result

## See also
- [invokeinvoke_r](/cpp/utility/functional/invoke/)
- [Callable](/cpp/named_req/callable/)
- [result_ofinvoke_result](/cpp/types/result_of/)
- [declval](/cpp/utility/declval/)
- [invocableregular_invocable](/cpp/concepts/invocable/)
