---
title: "operator==, <=>(std::reference_wrapper)"
source_path: "cpp/utility/functional/reference_wrapper/operator_cmp"
category: "utility"
since: "C++26"
---

Performs comparison operations on reference_wrapper objects.

## Declarations
```cpp
friend constexpr bool
operator==( reference_wrapper lhs, reference_wrapper rhs );
```
_(since C++26)_

```cpp
friend constexpr bool
operator==( reference_wrapper lhs, reference_wrapper<const T> rhs );
```
_(since C++26)_

```cpp
friend constexpr bool
operator==( reference_wrapper lhs, const T& ref );
```
_(since C++26)_

```cpp
friend constexpr auto
operator<=>( reference_wrapper lhs, reference_wrapper rhs );
```
_(since C++26)_

```cpp
friend constexpr auto
operator<=>( reference_wrapper lhs, reference_wrapper<const T> rhs );
```
_(since C++26)_

```cpp
friend constexpr auto
operator<=>( reference_wrapper lhs, const T& ref );
```
_(since C++26)_

## Parameters
- `lhs, rhs`: reference_wrapper object to compare
- `ref`: reference to compare to the reference_wrapper object

## Notes
The return types of operator<=> are [deduced](/cpp/language/template_argument_deduction/#auto-returning_functions) from return statements to avoid hard error when instantiating a [std::reference_wrapper](/cpp/utility/functional/reference_wrapper/)<T> with [synth-three-way-result](/cpp/standard_library/synth-three-way/)<T> being ill-formed.

## Example
This section is incompleteReason: no example
