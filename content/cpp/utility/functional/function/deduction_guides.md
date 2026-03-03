---
title: "deduction guides for std::function"
source_path: "cpp/utility/functional/function/deduction_guides"
header: "<functional>"
category: "utility"
since: "C++17"
---

1) This [deduction guide](/cpp/language/ctad/) is provided for [std::function](/cpp/utility/functional/function/) to allow deduction from functions.

## Declarations
```cpp
template< class R, class... ArgTypes >
function( R(*)(ArgTypes...) ) -> function<R(ArgTypes...)>;
```
_(since C++17)_

```cpp
template< class F >
function( F ) -> function</*see below*/>;
```
_(since C++17)_

```cpp
template< class F >
function( F ) -> function</*see below*/>;
```
_(since C++23)_

```cpp
template< class F >
function( F ) -> function</*see below*/>;
```
_(since C++23)_

## Notes
These deduction guides do not allow deduction from a function with [ellipsis parameter](/cpp/language/variadic_arguments/), and the ... in the types is always treated as a [pack expansion](/cpp/language/parameter_pack/#Pack_expansion).

The type deduced by these deduction guides may change in a later standard revision (in particular, this might happen if noexcept support is added to [std::function](/cpp/utility/functional/function/) in a later standard).

## Example
```cpp
#include <functional>
int func(double) { return 0; }
int main() {
  std::function f{func}; // guide #1 deduces function<int(double)>
  int i = 5;
  std::function g = [&](double) { return i; }; // guide #2 deduces function<int(double)>
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3238 | C++17 | behavior of (2) was unclear whenF::operator() is &&-qualified | clarified to be excluded from overload resolution |
