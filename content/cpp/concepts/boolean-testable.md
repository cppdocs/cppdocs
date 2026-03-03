---
title: "boolean-testable"
source_path: "cpp/concepts/boolean-testable"
category: "concepts"
---

The exposition-only concept boolean-testable specifies the requirements for expressions that are convertible to bool and for which the logical operators have the usual behavior (including [short-circuiting](https://en.wikipedia.org/wiki/Short-circuit_evaluation)), even for two different boolean-testable types.

## Declarations
```cpp
template< class B >
concept __boolean_testable_impl = std::convertible_to<B, bool>;
```
_(since C++20) (exposition only*)_

```cpp
template< class B >
concept boolean-testable =
__boolean_testable_impl<B> &&
requires (B&& b) {
{ !std::forward<B>(b) } -> __boolean_testable_impl;
};
```
_(since C++20) (exposition only*)_

## Notes
Examples of boolean-testable types include bool, [std::true_type](/cpp/types/integral_constant/), [std::bitset](/cpp/utility/bitset/)<N>::[reference](/cpp/utility/bitset/reference/), and int*.
