---
title: "std::experimental::ranges::Predicate"
source_path: "cpp/experimental/ranges/concepts/Predicate"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept Predicate<F, Args...> specifies that F is a predicate that accepts arguments whose types and value categories are encoded by Args..., i.e., it can be invoked with these arguments to produce a [Boolean](/cpp/experimental/ranges/concepts/boolean/) result.

## Declarations
```cpp
template< class F, class... Args >
concept bool Predicate =
RegularInvocable<F, Args...> &&
Boolean<std::result_of_t<F&&(Args&&...)>>;
```
_(ranges TS)_
