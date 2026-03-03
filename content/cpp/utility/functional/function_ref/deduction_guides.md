---
title: "deduction guides for std::function_ref"
source_path: "cpp/utility/functional/function_ref/deduction_guides"
header: "<functional>"
category: "utility"
since: "C++26"
---

1) This overload participates in overload resolution only if [std::is_function_v](/cpp/types/is_function/)<F> is true.

## Declarations
```cpp
template< class F >
function_ref( F* ) -> function_ref<F>;
```
_(since C++26)_

```cpp
template< auto f >
function_ref( std::nontype_t<f> ) -> function_ref</*see below*/>;
```
_(since C++26)_

```cpp
template< auto f, class T >
function_ref( std::nontype_t<f>, T&& ) -> function_ref</*see below*/>;
```
_(since C++26)_

## Example
This section is incompleteReason: no example
