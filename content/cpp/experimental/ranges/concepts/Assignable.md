---
title: "std::experimental::ranges::Assignable"
source_path: "cpp/experimental/ranges/concepts/Assignable"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept Assignable<T, U> specifies that an expression of the type and value category specified by U can be assigned to an lvalue expression whose type is specified by T.

## Declarations
```cpp
template< class T, class U >
concept bool Assignable =
std::is_lvalue_reference<T>::value &&
CommonReference<
const std::remove_reference_t<T>&,
const std::remove_reference_t<U>&> &&
requires(T t, U&& u) {
{ t = std::forward<U>(u) } -> Same<T>&&;
};
```
_(ranges TS)_

## Notes
A deduction constraint of the form { expression } -> Same<T>&& effectively requires decltype((expression))&& to be the exact same type as T&&. This constrains both the expression's type and its value category.

Assignment need not be a total function. In particular, if assigning to some object x can cause some other object y to be modified, then x = y is likely not in the domain of =. This typically happens if the right operand is owned directly or indirectly by the left operand (e.g., with smart pointers to nodes in a node-based data structure, or with something like [std::vector](/cpp/container/vector/)<[std::any](/cpp/utility/any/)>).
