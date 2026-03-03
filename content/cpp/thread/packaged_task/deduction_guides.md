---
title: "deduction guides for std::packaged_task"
source_path: "cpp/thread/packaged_task/deduction_guides"
header: "<future>"
category: "thread"
since: "C++17"
---

1) This [deduction guide](/cpp/language/ctad/) is provided for [std::packaged_task](/cpp/thread/packaged_task/) to allow deduction from functions.

## Declarations
```cpp
template< class R, class... Args >
packaged_task( R(*)(Args...) ) -> packaged_task<R(Args...)>;
```
_(since C++17)_

```cpp
template< class F >
packaged_task( F ) -> packaged_task</*see below*/>;
```
_(since C++17)_

```cpp
template< class F >
packaged_task( F ) -> packaged_task</*see below*/>;
```
_(since C++23)_

```cpp
template< class F >
packaged_task( F ) -> packaged_task</*see below*/>;
```
_(since C++23)_

## Notes
These deduction guides do not allow deduction from a function with [ellipsis parameter](/cpp/language/variadic_arguments/), and the ... in the types is always treated as a [pack expansion](/cpp/language/parameter_pack/#Pack_expansion).

## Example
```cpp
#include <future>
 
int func(double) { return 0; }
 
int main()
{
    std::packaged_task f{func}; // deduces packaged_task<int(double)>
 
    int i = 5;
    std::packaged_task g = [&](double) { return i; }; // => packaged_task<int(double)>
}
```
