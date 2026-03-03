---
title: "std::invocable, std::regular_invocable"
source_path: "cpp/concepts/invocable"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The invocable concept specifies that a callable type F can be called with a set of arguments Args... using the function template [std::invoke](/cpp/utility/functional/invoke/).

## Declarations
```cpp
template< class F, class... Args >
concept invocable =
requires(F&& f, Args&&... args) {
std::invoke(std::forward<F>(f), std::forward<Args>(args)...);
/* not required to be equality-preserving */
};
```
_(since C++20)_

```cpp
template< class F, class... Args >
concept regular_invocable = std::invocable<F, Args...>;
```
_(since C++20)_

## Notes
The distinction between invocable and regular_invocable is purely semantic.

A random number generator may satisfy invocable but cannot satisfy regular_invocable ([comical ones](#External_links) excluded).

## See also
- [is_invocableis_invocable_ris_nothrow_invocableis_nothrow_invocable_r](/cpp/types/is_invocable/)
- [std::invoke](/cpp/utility/functional/invoke/)
