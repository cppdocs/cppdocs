---
title: "std::mem_fun_ref"
source_path: "cpp/utility/functional/mem_fun_ref"
header: "<functional>"
category: "utility"
---

Creates a member function wrapper object, deducing the target type from the template arguments. The wrapper object expects a reference to an object of type T as the first parameter to its operator().

## Declarations
```cpp
template< class Res, class T >
std::mem_fun_ref_t<Res,T> mem_fun_ref( Res (T::*f)() );
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template< class Res, class T >
std::const_mem_fun_ref_t<Res,T> mem_fun_ref( Res (T::*f)() const );
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template< class Res, class T, class Arg >
std::mem_fun1_ref_t<Res,T,Arg> mem_fun_ref( Res (T::*f)(Arg) );
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template< class Res, class T, class Arg >
std::const_mem_fun1_ref_t<Res,T,Arg> mem_fun_ref( Res (T::*f)(Arg) const );
```
_(deprecated in C++11) (removed in C++17)_

## Parameters
- `f`: pointer to a member function to create a wrapper for

## Return value
A function object wrapping f.

## Notes
The difference between [std::mem_fun](/cpp/utility/functional/mem_fun/) and std::mem_fun_ref is that the former produces a function wrapper that expects a pointer to an object, whereas the latter — a reference.

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <iterator>
#include <string>
#include <vector>
 
int main()
{
    std::vector<std::string> v = {"once", "upon", "a", "time"};
    std::transform(v.cbegin(), v.cend(),
                   std::ostream_iterator<std::size_t>(std::cout, " "),
                   std::mem_fun_ref(&std::string::size));
}
```

## See also
- [mem_fun](/cpp/utility/functional/mem_fun/)
