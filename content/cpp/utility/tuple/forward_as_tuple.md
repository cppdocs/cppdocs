---
title: "std::forward_as_tuple"
source_path: "cpp/utility/tuple/forward_as_tuple"
header: "<tuple>"
category: "utility"
---

Constructs a tuple of references to the arguments in args suitable for forwarding as an argument to a function. The tuple has rvalue reference data members when rvalues are used as arguments, and otherwise has lvalue reference data members.

## Declarations
```cpp
template< class... Types >
std::tuple<Types&&...> forward_as_tuple( Types&&... args ) noexcept;
```
_(since C++11) (constexpr since C++14)_

## Parameters
- `args`: zero or more arguments to construct the tuple from

## Return value
A [std::tuple](/cpp/utility/tuple/) object created as if by [std::tuple](/cpp/utility/tuple/)<Types&&...>([std::forward](/cpp/utility/forward/)<Types>(args)...)

## Notes
If the arguments are temporaries, forward_as_tuple does not extend their lifetime; they have to be used before the end of the full expression.

## Example
```cpp
#include <iostream>
#include <map>
#include <string>
#include <tuple>
 
int main()
{
    std::map<int, std::string> m;
 
    m.emplace(std::piecewise_construct,
              std::forward_as_tuple(6),
              std::forward_as_tuple(9, 'g'));
    std::cout << "m[6] = " << m[6] << '\n';
 
    // The following is an error: it produces a
    // std::tuple<int&&, char&&> holding two dangling references.
    //
    // auto t = std::forward_as_tuple(20, 'a');
    // m.emplace(std::piecewise_construct, std::forward_as_tuple(10), t);
}
```

## See also
- [make_tuple](/cpp/utility/tuple/make_tuple/)
- [tie](/cpp/utility/tuple/tie/)
- [tuple](/cpp/utility/tuple/)
- [tuple_cat](/cpp/utility/tuple/tuple_cat/)
- [apply](/cpp/utility/apply/)
