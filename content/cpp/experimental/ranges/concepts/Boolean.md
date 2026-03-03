---
title: "std::experimental::ranges::Boolean"
source_path: "cpp/experimental/ranges/concepts/Boolean"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept Boolean<B> specifies the requirements for a type usable in Boolean contexts. For Boolean to be satisfied, the logical operators must have the usual behavior (including short-circuiting). More precisely, given

## Declarations
```cpp
template< class B >
concept bool Boolean =
Movable<std::decay_t<B>> &&
requires(const std::remove_reference_t<B>& b1,
const std::remove_reference_t<B>& b2, const bool a) {
{ b1 } -> ConvertibleTo<bool>&&;
{ !b1 } -> ConvertibleTo<bool>&&;
{ b1 && a } -> Same<bool>&&;
{ b1 || a } -> Same<bool>&&;
{ b1 && b2 } -> Same<bool>&&;
{ a && b2 } -> Same<bool>&&;
{ b1 || b2 } -> Same<bool>&&;
{ a || b2 } -> Same<bool>&&;
{ b1 == b2 } -> ConvertibleTo<bool>&&;
{ b1 == a } -> ConvertibleTo<bool>&&;
{ a == b2 } -> ConvertibleTo<bool>&&;
{ b1 != b2 } -> ConvertibleTo<bool>&&;
{ b1 != a } -> ConvertibleTo<bool>&&;
{ a != b2 } -> ConvertibleTo<bool>&&;
};
```
_(ranges TS)_

## Notes
Examples of Boolean types include bool, [std::true_type](/cpp/types/integral_constant/), and [std::bitset](/cpp/utility/bitset/)<N>::reference. Pointers are not Boolean types.

A deduction constraint of the form { expression } -> Same<T>&& effectively requires decltype((expression))&& to be the exact same type as T&&. This constrains both the expression's type and its value category.
