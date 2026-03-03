---
title: "std::predicate"
source_path: "cpp/concepts/predicate"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept std::predicate<F, Args...> specifies that F is a predicate that accepts arguments whose types and value categories are encoded by Args..., i.e., it can be invoked with these arguments to produce a [boolean-testable](/cpp/concepts/boolean-testable/) result.

## Declarations
```cpp
template< class F, class... Args >
concept predicate =
std::regular_invocable<F, Args...> &&
boolean-testable<std::invoke_result_t<F, Args...>>;
```
_(since C++20)_
