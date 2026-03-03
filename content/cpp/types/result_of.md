---
title: "std::result_of, std::invoke_result"
source_path: "cpp/types/result_of"
header: "<type_traits>"
category: "types"
since: "C++17"
---

Deduces the return type of an [INVOKE expression](/cpp/utility/functional/) at compile time.

## Declarations
```cpp
template< class >
class result_of; // not defined
template< class F, class... ArgTypes >
class result_of<F(ArgTypes...)>;
```
_(since C++11) (deprecated in C++17) (removed in C++20)_

```cpp
template< class F, class... ArgTypes >
class invoke_result;
```
_(since C++17)_

## Notes
As formulated in C++11, the behavior of std::result_of is undefined when INVOKE(std::declval<F>(), std::declval<ArgTypes>()...) is ill-formed (e.g. when F is not a callable type at all). C++14 changes that to a [SFINAE](/cpp/language/sfinae/) (when F is not callable, std::result_of<F(ArgTypes...)> simply doesn't have the type member).

The motivation behind std::result_of is to determine the result of invoking a [Callable](/cpp/named_req/callable/), in particular if that result type is different for different sets of arguments.

F(Args...) is a function type with Args... being the argument types and F being the return type. As such, std::result_of suffers from several quirks that led to its deprecation in favor of std::invoke_result in C++17:

To avoid these quirks, result_of is often used with reference types as F and Args.... For example:

## See also
- [invokeinvoke_r](/cpp/utility/functional/invoke/)
- [Callable](/cpp/named_req/callable/)
- [is_invocableis_invocable_ris_nothrow_invocableis_nothrow_invocable_r](/cpp/types/is_invocable/)
- [std::invoke](/cpp/utility/functional/invoke/)
- [declval](/cpp/utility/declval/)
